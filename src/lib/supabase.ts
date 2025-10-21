import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lqbdszwdmpduajthevps.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxYmRzendkbXBkdWFqdGhldnBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwNjA4MTEsImV4cCI6MjA3NjYzNjgxMX0.uvvbWzZBXhZMgZJFilBapJWF4UX1C_odtHIwiMAJ-lo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Type definitions for the application
export interface Application {
  id?: string;
  created_at?: string;
  
  // General Information
  full_name?: string;
  position: string;
  email: string;
  phone: string;
  shift_availability?: string;
  work_rights?: string;
  hours_per_week?: string;
  hospitality_experience?: string;
  why_somma?: string;
  start_date?: string;
  rsa_cert?: string;
  fast_paced?: string;
  allergies?: string;
  
  // Common fields from MultiStepForm
  first_name?: string;
  last_name?: string;
  experience?: string;
  bio?: string;
  availability?: string;
  shifts?: string[];
  
  // Waiter specific
  years_experience?: string;
  difficult_customer?: string;
  carrying_confidence?: string;
  handle_mistakes?: string;
  pos_experience?: string;
  upselling?: string;
  speed_vs_accuracy?: string;
  communication?: string;
  uniform_sizes?: string;
  shift_rotation?: string;
  
  // Chef specific
  cuisine_type?: string;
  culinary_training?: string;
  time_management?: string;
  food_safety?: string;
  handle_criticism?: string;
  prep_cook_plate?: string;
  portion_control?: string;
  consistency?: string;
  dietary_requirements?: string;
  work_preference?: string;
  
  // Kitchen Hand specific
  kh_experience?: string;
  dishwasher_comfort?: string;
  prioritize_tasks?: string;
  physical_ability?: string;
  end_of_night_cleaning?: string;
  hygiene_safety?: string;
  supervision_preference?: string;
  waste_sorting?: string;
  urgent_help?: string;
  preferred_schedule?: string;
  
  // Bartender specific
  bar_years?: string;
  rsa_certificate?: string;
  cocktails?: string;
  intoxicated_customers?: string;
  track_orders?: string;
  spillage_handling?: string;
  upsell_drinks?: string;
  work_alone?: string;
  bar_cleanliness?: string;
  bar_availability?: string;
  
  // Metadata
  application_status?: string;
  notes?: string;
}