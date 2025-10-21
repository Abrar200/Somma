import React, { useState } from 'react';
import RoleCard from './RoleCard';
import JobApplicationForm from './JobApplicationForm';

import ConfirmationPage from './ConfirmationPage';
import Footer from './Footer';

const AppLayout: React.FC = () => {
  const [view, setView] = useState<'home' | 'form' | 'confirmation'>('home');
  const [selectedRole, setSelectedRole] = useState('');

  const roles = [
    { 
      title: 'Front of House', 
      description: 'Deliver exceptional service and create memorable dining experiences',
      image: 'https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1761056851837_d7ec5f20.png'
    },
    { 
      title: 'Back of House', 
      description: 'Craft culinary masterpieces in our award-winning kitchen',
      image: 'https://d64gsuwffb70l.cloudfront.net/68f792557b4a8ae2240f8f1b_1761056222283_dae8fc80.webp'
    }
  ];



  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setView('form');
  };

  const handleFormComplete = () => {
    setView('confirmation');
  };

  const handleReset = () => {
    setView('home');
    setSelectedRole('');
  };

  if (view === 'form') {
    return <JobApplicationForm onComplete={handleFormComplete} onCancel={handleReset} />;
  }



  if (view === 'confirmation') {
    return <ConfirmationPage onBackToHome={handleReset} />;
  }



  return (
    <div className="min-h-screen bg-somma-cream">
      {/* Hero Section - Banner Only */}
      <section className="relative h-screen flex items-end justify-center pb-32">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://d64gsuwffb70l.cloudfront.net/685afce20bfda24fc0f1d36c_1761055309631_9c885a90.png)' }}
        />
        <div className="absolute inset-0 bg-somma-cream/78" />
        <div className="relative z-10 text-center px-6">
          <button 
            onClick={() => document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' })}

            className="bg-gradient-to-r from-somma-taupe to-somma-gold text-white px-10 py-4 rounded-full font-sans font-medium text-lg hover:shadow-xl transition-all tracking-wide"
          >
            Explore Opportunities
          </button>
        </div>
      </section>




      {/* Roles Section */}
      <section id="roles" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-5xl text-somma-ink text-center mb-4 tracking-wide">
            Open Positions
          </h2>
          <p className="font-sans text-lg text-somma-taupe text-center mb-12 tracking-wide">
            Select a role to begin your application
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {roles.map((role) => (
              <RoleCard
                key={role.title}
                title={role.title}
                description={role.description}
                image={role.image}
                onClick={() => handleRoleSelect(role.title)}
              />
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppLayout;
