import React from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

interface ChefQuestionsProps {
  formData: any;
  updateFormData: (data: any) => void;
}

const ChefQuestions: React.FC<ChefQuestionsProps> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <h3 className="font-serif text-2xl text-somma-ink mb-4">Chef / Cook Questions</h3>
      
      <div>
        <label className="block text-somma-ink mb-2 font-sans">What type of cuisine are you most experienced with?</label>
        <Input value={formData.cuisineType || ''} onChange={(e) => updateFormData({ cuisineType: e.target.value })} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Do you have formal culinary training or certificates?</label>
        <Textarea value={formData.culinaryTraining || ''} onChange={(e) => updateFormData({ culinaryTraining: e.target.value })} rows={3} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How do you manage time during busy service hours?</label>
        <Textarea value={formData.timeManagement || ''} onChange={(e) => updateFormData({ timeManagement: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">What's your approach to food safety and kitchen hygiene?</label>
        <Textarea value={formData.foodSafety || ''} onChange={(e) => updateFormData({ foodSafety: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How do you handle constructive criticism from the head chef or management?</label>
        <Textarea value={formData.handleCriticism || ''} onChange={(e) => updateFormData({ handleCriticism: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Are you comfortable with prep work, cooking, and plating?</label>
        <select className="w-full p-2 border rounded" value={formData.prep_cook_plate || ''} onChange={(e) => updateFormData({ prep_cook_plate: e.target.value })}>
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Have you worked with portion control and stock rotation before?</label>
        <Textarea value={formData.portionControl || ''} onChange={(e) => updateFormData({ portionControl: e.target.value })} rows={3} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">How do you maintain consistency in taste and presentation?</label>
        <Textarea value={formData.consistency || ''} onChange={(e) => updateFormData({ consistency: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">What is your experience with dietary requirements (gluten-free, vegan, etc.)?</label>
        <Textarea value={formData.dietaryRequirements || ''} onChange={(e) => updateFormData({ dietaryRequirements: e.target.value })} rows={4} />
      </div>

      <div>
        <label className="block text-somma-ink mb-2 font-sans">Do you prefer working independently or as part of a team?</label>
        <Textarea value={formData.workPreference || ''} onChange={(e) => updateFormData({ workPreference: e.target.value })} rows={3} />
      </div>
    </div>
  );
};

export default ChefQuestions;
