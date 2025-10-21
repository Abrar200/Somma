import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface WaiterQuestionsProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const WaiterQuestions: React.FC<WaiterQuestionsProps> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <h3 className="font-serif text-2xl text-somma-ink mb-4">Waiter / Waitress Questions</h3>
      
      <div>
        <label className="block text-somma-ink mb-2 font-sans">How many years of front-of-house or customer service experience do you have?</label>
        <Input value={formData.years_experience || ''} onChange={(e) => updateFormData({ years_experience: e.target.value })} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Describe a time you provided excellent service to a difficult customer.</label>
        <Textarea value={formData.difficult_customer || ''} onChange={(e) => updateFormData({ difficult_customer: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Are you confident carrying multiple plates and drinks trays?</label>
        <select className="w-full p-2 border rounded" value={formData.carrying_confidence || ''} onChange={(e) => updateFormData({ carrying_confidence: e.target.value })}>
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How do you handle mistakes with orders or delays in food service?</label>
        <Textarea value={formData.handle_mistakes || ''} onChange={(e) => updateFormData({ handle_mistakes: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Are you familiar with using POS systems (e.g., Square, Lightspeed, or H&L)?</label>
        <Textarea value={formData.pos_experience || ''} onChange={(e) => updateFormData({ pos_experience: e.target.value })} rows={3} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How would you upsell a dish or drink special to a customer?</label>
        <Textarea value={formData.upselling || ''} onChange={(e) => updateFormData({ upselling: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">What's more important to you — speed or accuracy? Why?</label>
        <Textarea value={formData.speed_vs_accuracy || ''} onChange={(e) => updateFormData({ speed_vs_accuracy: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How do you ensure good communication with the kitchen and bar staff?</label>
        <Textarea value={formData.communication || ''} onChange={(e) => updateFormData({ communication: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">What uniform sizes do you require (shirt/pants/shoes)?</label>
        <Input value={formData.uniform_sizes || ''} onChange={(e) => updateFormData({ uniform_sizes: e.target.value })} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Have you ever worked in a team where shifts were rotated — how did you adapt?</label>
        <Textarea value={formData.shift_rotation || ''} onChange={(e) => updateFormData({ shift_rotation: e.target.value })} rows={4} />
      </div>
    </div>
  );
};

export default WaiterQuestions;