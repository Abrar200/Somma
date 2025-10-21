import React, { useState } from 'react';
import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import FormStep4 from './FormStep4';
import { submitApplication } from '@/lib/applicationService';
import { toast } from '@/components/ui/use-toast';

interface MultiStepFormProps {
  role: string;
  onComplete: () => void;
  onCancel: () => void;
}

const MultiStepForm: React.FC<MultiStepFormProps> = ({ role, onComplete, onCancel }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<any>({ position: role });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (data: any) => {
    setFormData({ ...formData, ...data });
  };

  const handleNext = async () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final step - submit the form
      await handleSubmit();
    }
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Combine first and last name for full_name
      const submissionData = {
        ...formData,
        full_name: `${formData.firstName} ${formData.lastName}`,
      };

      const result = await submitApplication(submissionData);

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

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = ['Personal Info', 'Contact Details', 'Experience', 'Availability'];

  return (
    <div className="min-h-screen bg-somma-cream py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl text-somma-ink mb-2 text-center tracking-wide">
          Apply for {role}
        </h2>
        <p className="font-sans text-somma-taupe mb-8 text-center tracking-wide">
          Step {currentStep} of 4
        </p>

        <div className="flex justify-between mb-8 gap-2">
          {steps.map((step, index) => (
            <div key={index} className="flex-1">
              <div 
                className={`h-2 rounded-full transition-all ${
                  index + 1 <= currentStep 
                    ? 'bg-gradient-to-r from-somma-taupe to-somma-gold' 
                    : 'bg-gray-200'
                }`} 
              />
              <p className={`text-xs mt-2 text-center ${
                index + 1 <= currentStep ? 'text-somma-ink font-medium' : 'text-gray-400'
              }`}>
                {step}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg mb-6">
          {currentStep === 1 && <FormStep1 formData={formData} updateFormData={updateFormData} />}
          {currentStep === 2 && <FormStep2 formData={formData} updateFormData={updateFormData} />}
          {currentStep === 3 && <FormStep3 formData={formData} updateFormData={updateFormData} />}
          {currentStep === 4 && <FormStep4 formData={formData} updateFormData={updateFormData} />}
        </div>

        <div className="flex justify-between">
          <div className="flex gap-3">
            <button 
              onClick={onCancel} 
              className="px-6 py-3 border border-somma-taupe text-somma-taupe rounded-full font-sans hover:bg-somma-taupe hover:text-white transition-all tracking-wide"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            {currentStep > 1 && (
              <button 
                onClick={handleBack} 
                className="px-6 py-3 border border-somma-gold text-somma-gold rounded-full font-sans hover:bg-somma-gold hover:text-white transition-all tracking-wide"
                disabled={isSubmitting}
              >
                Back
              </button>
            )}
          </div>
          <button 
            onClick={handleNext} 
            className="bg-gradient-to-r from-somma-taupe to-somma-gold text-white px-8 py-3 rounded-full font-sans font-medium hover:shadow-lg transition-all tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : currentStep === 4 ? 'Submit' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;