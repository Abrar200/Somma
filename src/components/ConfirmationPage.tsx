import React from 'react';

interface ConfirmationPageProps {
  onBackToHome: () => void;

}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen bg-somma-cream flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-lg p-12 shadow-lg">
          <div className="mb-6">
            <svg className="w-20 h-20 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          <h2 className="font-serif text-4xl text-somma-ink mb-4 tracking-wide">
            Thank you for applying to join Somma!
          </h2>
          
          <p className="font-sans text-lg text-somma-taupe mb-6 leading-relaxed">
            Your application has been submitted successfully.
          </p>
          
          <p className="font-sans text-somma-taupe mb-8 leading-relaxed">
            Our management team will review your responses and contact you soon if your experience matches one of our open positions. We appreciate your interest in becoming part of the Somma team.
          </p>
          
          <button 
            onClick={onBackToHome}
            className="bg-gradient-to-r from-somma-taupe to-somma-gold text-white px-8 py-3 rounded-full font-sans font-medium hover:shadow-lg transition-all tracking-wide"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
