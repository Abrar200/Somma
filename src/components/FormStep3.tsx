import React from 'react';

interface FormStep3Props {
  formData: any;
  updateFormData: (data: any) => void;
}

const FormStep3: React.FC<FormStep3Props> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block font-sans text-somma-ink mb-2 tracking-wide">Years of Experience</label>
        <select
          value={formData.experience || ''}
          onChange={(e) => updateFormData({ experience: e.target.value })}
          className="w-full px-4 py-3 border border-somma-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-somma-gold font-sans tracking-wide"
        >
          <option value="">Select experience level</option>
          <option value="0-1">0-1 years</option>
          <option value="1-3">1-3 years</option>
          <option value="3-5">3-5 years</option>
          <option value="5+">5+ years</option>
        </select>
      </div>
      <div>
        <label className="block font-sans text-somma-ink mb-2 tracking-wide">Tell us about yourself</label>
        <textarea
          value={formData.bio || ''}
          onChange={(e) => updateFormData({ bio: e.target.value })}
          rows={4}
          className="w-full px-4 py-3 border border-somma-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-somma-gold font-sans tracking-wide"
          placeholder="Share your experience and passion..."
        />
      </div>
    </div>
  );
};

export default FormStep3;
