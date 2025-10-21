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
        <Textarea value={formData.kh_experience || ''} onChange={(e) => updateFormData({ kh_experience: e.target.value })} rows={3} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Are you comfortable using industrial dishwashers and handling sharp utensils?</label>
        <select className="w-full p-2 border rounded" value={formData.dishwasher_comfort || ''} onChange={(e) => updateFormData({ dishwasher_comfort: e.target.value })}>
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How do you prioritise tasks when the kitchen gets busy?</label>
        <Textarea value={formData.prioritize_tasks || ''} onChange={(e) => updateFormData({ prioritize_tasks: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Are you physically able to lift heavy items or stand for long periods?</label>
        <select className="w-full p-2 border rounded" value={formData.physical_ability || ''} onChange={(e) => updateFormData({ physical_ability: e.target.value })}>
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Are you comfortable cleaning at the end of the night (floors, bins, equipment)?</label>
        <select className="w-full p-2 border rounded" value={formData.end_of_night_cleaning || ''} onChange={(e) => updateFormData({ end_of_night_cleaning: e.target.value })}>
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How do you ensure hygiene and safety while cleaning?</label>
        <Textarea value={formData.hygiene_safety || ''} onChange={(e) => updateFormData({ hygiene_safety: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Do you work better under direct supervision or on your own?</label>
        <Textarea value={formData.supervision_preference || ''} onChange={(e) => updateFormData({ supervision_preference: e.target.value })} rows={3} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Have you worked with waste sorting or recycling systems before?</label>
        <Textarea value={formData.waste_sorting || ''} onChange={(e) => updateFormData({ waste_sorting: e.target.value })} rows={3} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How do you respond if another staff member asks for urgent cleaning help mid-service?</label>
        <Textarea value={formData.urgent_help || ''} onChange={(e) => updateFormData({ urgent_help: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">What's your preferred shift schedule (day/night/weekends)?</label>
        <Input value={formData.preferred_schedule || ''} onChange={(e) => updateFormData({ preferred_schedule: e.target.value })} />
      </div>
    </div>
  );
};

export default KitchenHandQuestions;