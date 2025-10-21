import React from 'react';

interface FormStep2Props {
  formData: any;
  updateFormData: (data: any) => void;
}

const FormStep2: React.FC<FormStep2Props> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block font-sans text-somma-ink mb-2 tracking-wide">Email Address</label>
        <input
          type="email"
          value={formData.email || ''}
          onChange={(e) => updateFormData({ email: e.target.value })}
          className="w-full px-4 py-3 border border-somma-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-somma-gold font-sans tracking-wide"
          placeholder="your.email@example.com"
        />
      </div>
      <div>
        <label className="block font-sans text-somma-ink mb-2 tracking-wide">Phone Number</label>
        <input
          type="tel"
          value={formData.phone || ''}
          onChange={(e) => updateFormData({ phone: e.target.value })}
          className="w-full px-4 py-3 border border-somma-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-somma-gold font-sans tracking-wide"
          placeholder="+61 4XX XXX XXX"

        />
      </div>
    </div>
  );
};

export default FormStep2;
