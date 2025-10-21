import React from 'react';

interface FormStep1Props {
  formData: any;
  updateFormData: (data: any) => void;
}

const FormStep1: React.FC<FormStep1Props> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block font-sans text-somma-ink mb-2 tracking-wide">First Name</label>
        <input
          type="text"
          value={formData.firstName || ''}
          onChange={(e) => updateFormData({ firstName: e.target.value })}
          className="w-full px-4 py-3 border border-somma-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-somma-gold font-sans tracking-wide"
          placeholder="Enter your first name"
        />
      </div>
      <div>
        <label className="block font-sans text-somma-ink mb-2 tracking-wide">Last Name</label>
        <input
          type="text"
          value={formData.lastName || ''}
          onChange={(e) => updateFormData({ lastName: e.target.value })}
          className="w-full px-4 py-3 border border-somma-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-somma-gold font-sans tracking-wide"
          placeholder="Enter your last name"
        />
      </div>
    </div>
  );
};

export default FormStep1;
