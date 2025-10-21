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
        <Input value={formData.yearsExperience || ''} onChange={(e) => updateFormData({ yearsExperience: e.target.value })} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Describe a time you provided excellent service to a difficult customer.</label>
        <Textarea value={formData.difficultCustomer || ''} onChange={(e) => updateFormData({ difficultCustomer: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Are you confident carrying multiple plates and drinks trays?</label>
        <select className="w-full p-2 border rounded" value={formData.carryingConfidence || ''} onChange={(e) => updateFormData({ carryingConfidence: e.target.value })}>
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How do you handle mistakes with orders or delays in food service?</label>
        <Textarea value={formData.handleMistakes || ''} onChange={(e) => updateFormData({ handleMistakes: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Are you familiar with using POS systems (e.g., Square, Lightspeed, or H&L)?</label>
        <Textarea value={formData.posExperience || ''} onChange={(e) => updateFormData({ posExperience: e.target.value })} rows={3} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How would you upsell a dish or drink special to a customer?</label>
        <Textarea value={formData.upselling || ''} onChange={(e) => updateFormData({ upselling: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">What's more important to you — speed or accuracy? Why?</label>
        <Textarea value={formData.speedVsAccuracy || ''} onChange={(e) => updateFormData({ speedVsAccuracy: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How do you ensure good communication with the kitchen and bar staff?</label>
        <Textarea value={formData.communication || ''} onChange={(e) => updateFormData({ communication: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">What uniform sizes do you require (shirt/pants/shoes)?</label>
        <Input value={formData.uniformSizes || ''} onChange={(e) => updateFormData({ uniformSizes: e.target.value })} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Have you ever worked in a team where shifts were rotated — how did you adapt?</label>
        <Textarea value={formData.shiftRotation || ''} onChange={(e) => updateFormData({ shiftRotation: e.target.value })} rows={4} />
      </div>
    </div>
  );
};

export default WaiterQuestions;
