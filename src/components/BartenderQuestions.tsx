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
        <Input value={formData.barYears || ''} onChange={(e) => updateFormData({ barYears: e.target.value })} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Do you hold a valid RSA certificate?</label>
        <select className="w-full p-2 border rounded" value={formData.rsaCertificate || ''} onChange={(e) => updateFormData({ rsaCertificate: e.target.value })}>
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
        <Textarea value={formData.intoxicatedCustomers || ''} onChange={(e) => updateFormData({ intoxicatedCustomers: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How do you keep track of tabs and orders during busy nights?</label>
        <Textarea value={formData.trackOrders || ''} onChange={(e) => updateFormData({ trackOrders: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How would you deal with a spillage or broken glass mid-shift?</label>
        <Textarea value={formData.spillageHandling || ''} onChange={(e) => updateFormData({ spillageHandling: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How do you upsell drinks or specials?</label>
        <Textarea value={formData.upsellDrinks || ''} onChange={(e) => updateFormData({ upsellDrinks: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Are you comfortable working alone behind the bar?</label>
        <select className="w-full p-2 border rounded" value={formData.workAlone || ''} onChange={(e) => updateFormData({ workAlone: e.target.value })}>
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">What steps do you take to keep your bar clean and organised?</label>
        <Textarea value={formData.barCleanliness || ''} onChange={(e) => updateFormData({ barCleanliness: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">What hours are you available (late nights, weekends)?</label>
        <Input value={formData.barAvailability || ''} onChange={(e) => updateFormData({ barAvailability: e.target.value })} />
      </div>
    </div>
  );
};

export default BartenderQuestions;
