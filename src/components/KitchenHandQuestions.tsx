import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface KitchenHandQuestionsProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const KitchenHandQuestions: React.FC<KitchenHandQuestionsProps> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <h3 className="font-serif text-2xl text-somma-ink mb-4">Kitchen Hand / Dishwasher Questions</h3>
      
      <div>
        <label className="block text-somma-ink mb-2 font-sans">Do you have experience working as a kitchen hand or cleaner?</label>
        <Textarea value={formData.khExperience || ''} onChange={(e) => updateFormData({ khExperience: e.target.value })} rows={3} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Are you comfortable using industrial dishwashers and handling sharp utensils?</label>
        <select className="w-full p-2 border rounded" value={formData.dishwasherComfort || ''} onChange={(e) => updateFormData({ dishwasherComfort: e.target.value })}>
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How do you prioritise tasks when the kitchen gets busy?</label>
        <Textarea value={formData.prioritizeTasks || ''} onChange={(e) => updateFormData({ prioritizeTasks: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Are you physically able to lift heavy items or stand for long periods?</label>
        <select className="w-full p-2 border rounded" value={formData.physicalAbility || ''} onChange={(e) => updateFormData({ physicalAbility: e.target.value })}>
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Are you comfortable cleaning at the end of the night (floors, bins, equipment)?</label>
        <select className="w-full p-2 border rounded" value={formData.endOfNightCleaning || ''} onChange={(e) => updateFormData({ endOfNightCleaning: e.target.value })}>
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How do you ensure hygiene and safety while cleaning?</label>
        <Textarea value={formData.hygieneSafety || ''} onChange={(e) => updateFormData({ hygieneSafety: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Do you work better under direct supervision or on your own?</label>
        <Textarea value={formData.supervisionPreference || ''} onChange={(e) => updateFormData({ supervisionPreference: e.target.value })} rows={3} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Have you worked with waste sorting or recycling systems before?</label>
        <Textarea value={formData.wasteSorting || ''} onChange={(e) => updateFormData({ wasteSorting: e.target.value })} rows={3} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How do you respond if another staff member asks for urgent cleaning help mid-service?</label>
        <Textarea value={formData.urgentHelp || ''} onChange={(e) => updateFormData({ urgentHelp: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">What's your preferred shift schedule (day/night/weekends)?</label>
        <Input value={formData.preferredSchedule || ''} onChange={(e) => updateFormData({ preferredSchedule: e.target.value })} />
      </div>
    </div>
  );
};

export default KitchenHandQuestions;
