import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface BartenderQuestionsProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const BartenderQuestions: React.FC<BartenderQuestionsProps> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <h3 className="font-serif text-2xl text-somma-ink mb-4">Bartender Questions</h3>
      
      <div>
        <label className="block text-somma-ink mb-2 font-sans">How many years' experience do you have behind a bar?</label>
        <Input value={formData.bar_years || ''} onChange={(e) => updateFormData({ bar_years: e.target.value })} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Do you hold a valid RSA certificate?</label>
        <select className="w-full p-2 border rounded" value={formData.rsa_certificate || ''} onChange={(e) => updateFormData({ rsa_certificate: e.target.value })}>
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Can you make basic cocktails? Which ones are you confident with?</label>
        <Textarea value={formData.cocktails || ''} onChange={(e) => updateFormData({ cocktails: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How do you handle customers who appear intoxicated?</label>
        <Textarea value={formData.intoxicated_customers || ''} onChange={(e) => updateFormData({ intoxicated_customers: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How do you keep track of tabs and orders during busy nights?</label>
        <Textarea value={formData.track_orders || ''} onChange={(e) => updateFormData({ track_orders: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How would you deal with a spillage or broken glass mid-shift?</label>
        <Textarea value={formData.spillage_handling || ''} onChange={(e) => updateFormData({ spillage_handling: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How do you upsell drinks or specials?</label>
        <Textarea value={formData.upsell_drinks || ''} onChange={(e) => updateFormData({ upsell_drinks: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Are you comfortable working alone behind the bar?</label>
        <select className="w-full p-2 border rounded" value={formData.work_alone || ''} onChange={(e) => updateFormData({ work_alone: e.target.value })}>
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">What steps do you take to keep your bar clean and organised?</label>
        <Textarea value={formData.bar_cleanliness || ''} onChange={(e) => updateFormData({ bar_cleanliness: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">What hours are you available (late nights, weekends)?</label>
        <Input value={formData.bar_availability || ''} onChange={(e) => updateFormData({ bar_availability: e.target.value })} />
      </div>
    </div>
  );
};

export default BartenderQuestions;