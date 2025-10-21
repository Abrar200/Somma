import { supabase, Application } from './supabase';

export interface SubmissionResult {
  success: boolean;
  message: string;
  applicationId?: string;
  error?: string;
}

/**
 * Submit application to both database and email
 */
export async function submitApplication(formData: Application): Promise<SubmissionResult> {
  try {
    // Step 1: Save to Supabase database
    const { data, error } = await supabase
      .from('applications')
      .insert([formData])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(`Database error: ${error.message}`);
    }

    // Step 2: Send email notification
    try {
      const emailResponse = await fetch('/api/send-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!emailResponse.ok) {
        const errorData = await emailResponse.json();
        console.error('Email sending failed:', errorData);
        // Don't throw error here - application is already saved in DB
        return {
          success: true,
          message: 'Application saved successfully, but email notification failed. We will still review your application.',
          applicationId: data.id,
        };
      }

      const emailResult = await emailResponse.json();
      
      return {
        success: true,
        message: 'Application submitted successfully! We will review it shortly.',
        applicationId: data.id,
      };
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Application is saved, just email failed
      return {
        success: true,
        message: 'Application saved successfully, but email notification failed. We will still review your application.',
        applicationId: data.id,
      };
    }
  } catch (error: any) {
    console.error('Submission error:', error);
    return {
      success: false,
      message: 'Failed to submit application. Please try again.',
      error: error.message,
    };
  }
}

/**
 * Fetch all applications (for admin use later)
 */
export async function getAllApplications(): Promise<Application[]> {
  const { data, error } = await supabase
    .from('applications')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching applications:', error);
    throw error;
  }

  return data || [];
}

/**
 * Get application by ID
 */
export async function getApplicationById(id: string): Promise<Application | null> {
  const { data, error } = await supabase
    .from('applications')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching application:', error);
    return null;
  }

  return data;
}

/**
 * Update application status (for admin use)
 */
export async function updateApplicationStatus(
  id: string,
  status: string,
  notes?: string
): Promise<boolean> {
  const updateData: any = { application_status: status };
  if (notes) updateData.notes = notes;

  const { error } = await supabase
    .from('applications')
    .update(updateData)
    .eq('id', id);

  if (error) {
    console.error('Error updating application:', error);
    return false;
  }

  return true;
}