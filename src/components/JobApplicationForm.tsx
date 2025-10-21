import React, { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import WaiterQuestions from './WaiterQuestions';
import ChefQuestions from './ChefQuestions';
import KitchenHandQuestions from './KitchenHandQuestions';
import BartenderQuestions from './BartenderQuestions';
import { submitApplication } from '@/lib/applicationService';
import { toast } from '@/components/ui/use-toast';

interface JobApplicationFormProps {
  onComplete: () => void;
  onCancel: () => void;
}

const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ onComplete, onCancel }) => {
  const [formData, setFormData] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (data: any) => {
    setFormData({ ...formData, ...data });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.full_name || !formData.email || !formData.phone || !formData.position) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitApplication(formData);

      if (result.success) {
        toast({
          title: "Application Submitted! 🎉",
          description: result.message,
        });
        onComplete();
      } else {
        toast({
          title: "Submission Failed",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-somma-cream py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onCancel}
          className="mb-6 flex items-center gap-2 text-somma-taupe hover:text-somma-gold transition-colors font-sans tracking-wide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </button>

        <h2 className="font-serif text-4xl text-somma-ink mb-2 text-center tracking-wide">
          Join the Somma Team
        </h2>
        <p className="font-sans text-somma-taupe mb-8 text-center tracking-wide">
          Complete the application form below
        </p>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-lg space-y-8">
          {/* Section 1: General Information */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-somma-ink mb-4 border-b pb-2">General Information</h3>
            
            <div>
              <label className="block text-somma-ink mb-2 font-sans">Full Name *</label>
              <Input 
                required 
                value={formData.full_name || ''} 
                onChange={(e) => updateFormData({ full_name: e.target.value })} 
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-somma-ink mb-2 font-sans">Position Applying For *</label>
              <select 
                required 
                className="w-full p-2 border rounded" 
                value={formData.position || ''} 
                onChange={(e) => updateFormData({ position: e.target.value })}
                disabled={isSubmitting}
              >
                <option value="">Select a position...</option>
                <option value="waiter">Waiter/Waitress</option>
                <option value="chef">Chef</option>
                <option value="kitchen-hand">Kitchen Hand</option>
                <option value="bartender">Bartender</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-somma-ink mb-2 font-sans">Email Address *</label>
              <Input 
                required 
                type="email" 
                value={formData.email || ''} 
                onChange={(e) => updateFormData({ email: e.target.value })} 
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-somma-ink mb-2 font-sans">Phone Number *</label>
              <Input 
                required 
                type="tel" 
                value={formData.phone || ''} 
                onChange={(e) => updateFormData({ phone: e.target.value })} 
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-somma-ink mb-2 font-sans">Are you available for day, night, and weekend shifts? *</label>
              <select 
                required 
                className="w-full p-2 border rounded" 
                value={formData.shift_availability || ''} 
                onChange={(e) => updateFormData({ shift_availability: e.target.value })}
                disabled={isSubmitting}
              >
                <option value="">Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div>
              <label className="block text-somma-ink mb-2 font-sans">Do you have the right to work in Australia? *</label>
              <select 
                required 
                className="w-full p-2 border rounded" 
                value={formData.work_rights || ''} 
                onChange={(e) => updateFormData({ work_rights: e.target.value })}
                disabled={isSubmitting}
              >
                <option value="">Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div>
              <label className="block text-somma-ink mb-2 font-sans">How many hours per week are you hoping to work?</label>
              <Input 
                value={formData.hours_per_week || ''} 
                onChange={(e) => updateFormData({ hours_per_week: e.target.value })} 
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-somma-ink mb-2 font-sans">Do you have any previous hospitality experience?</label>
              <Textarea 
                value={formData.hospitality_experience || ''} 
                onChange={(e) => updateFormData({ hospitality_experience: e.target.value })} 
                rows={4} 
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-somma-ink mb-2 font-sans">What made you want to work with Somma?</label>
              <Textarea 
                value={formData.why_somma || ''} 
                onChange={(e) => updateFormData({ why_somma: e.target.value })} 
                rows={4} 
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-somma-ink mb-2 font-sans">When would you be available to start?</label>
              <Input 
                type="date" 
                value={formData.start_date || ''} 
                onChange={(e) => updateFormData({ start_date: e.target.value })} 
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-somma-ink mb-2 font-sans">Do you have a valid RSA certificate?</label>
              <select 
                className="w-full p-2 border rounded" 
                value={formData.rsa_cert || ''} 
                onChange={(e) => updateFormData({ rsa_cert: e.target.value })}
                disabled={isSubmitting}
              >
                <option value="">Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div>
              <label className="block text-somma-ink mb-2 font-sans">Are you comfortable working in a fast-paced environment?</label>
              <select 
                className="w-full p-2 border rounded" 
                value={formData.fast_paced || ''} 
                onChange={(e) => updateFormData({ fast_paced: e.target.value })}
                disabled={isSubmitting}
              >
                <option value="">Select...</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div>
              <label className="block text-somma-ink mb-2 font-sans">Please list any allergies or health restrictions.</label>
              <Input 
                value={formData.allergies || ''} 
                onChange={(e) => updateFormData({ allergies: e.target.value })} 
                disabled={isSubmitting}
              />
            </div>
          </div>

          {/* Conditional Role-Specific Questions */}
          {formData.position === 'waiter' && (
            <WaiterQuestions formData={formData} updateFormData={updateFormData} />
          )}
          {formData.position === 'chef' && (
            <ChefQuestions formData={formData} updateFormData={updateFormData} />
          )}
          {formData.position === 'kitchen-hand' && (
            <KitchenHandQuestions formData={formData} updateFormData={updateFormData} />
          )}
          {formData.position === 'bartender' && (
            <BartenderQuestions formData={formData} updateFormData={updateFormData} />
          )}

          <div className="flex justify-between pt-6 border-t">
            <button 
              type="button" 
              onClick={onCancel} 
              className="px-6 py-3 border border-somma-taupe text-somma-taupe rounded-full font-sans hover:bg-somma-taupe hover:text-white transition-all tracking-wide"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="bg-gradient-to-r from-somma-taupe to-somma-gold text-white px-8 py-3 rounded-full font-sans font-medium hover:shadow-lg transition-all tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;