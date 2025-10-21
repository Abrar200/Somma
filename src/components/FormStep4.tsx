import React from 'react';

interface FormStep4Props {
  formData: any;
  updateFormData: (data: any) => void;
}

const FormStep4: React.FC<FormStep4Props> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div>
        <label className="block font-sans text-somma-ink mb-2 tracking-wide">Availability</label>
        <select
          value={formData.availability || ''}
          onChange={(e) => updateFormData({ availability: e.target.value })}
          className="w-full px-4 py-3 border border-somma-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-somma-gold font-sans tracking-wide"
        >
          <option value="">Select availability</option>
          <option value="immediate">Immediate</option>
          <option value="2weeks">2 weeks notice</option>
          <option value="1month">1 month notice</option>
        </select>
      </div>
      <div>
        <label className="block font-sans text-somma-ink mb-2 tracking-wide">Preferred Shift</label>
        <div className="space-y-2">
          {['Morning', 'Afternoon', 'Evening', 'Flexible'].map((shift) => (
            <label key={shift} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.shifts?.includes(shift) || false}
                onChange={(e) => {
                  const shifts = formData.shifts || [];
                  updateFormData({
                    shifts: e.target.checked
                      ? [...shifts, shift]
                      : shifts.filter((s: string) => s !== shift)
                  });
                }}
                className="w-4 h-4 text-somma-gold focus:ring-somma-gold"
              />
              <span className="font-sans text-somma-ink tracking-wide">{shift}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormStep4;
