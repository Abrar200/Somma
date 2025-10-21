import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-somma-cream py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <img 
              src="/1.jpg" 
              alt="SOMMA" 
              className="h-12 w-auto mb-6 mx-auto"
            />
            <div className="font-sans text-sm text-somma-ink opacity-80 leading-relaxed space-y-1">
              <p>125A The Parade</p>
              <p>Norwood SA 5067</p>
              <p className="mt-2">info@somma.au</p>
            </div>
          </div>
        </div>
        <div className="border-t border-somma-taupe/20 pt-6 text-center">
          <p className="font-sans text-sm text-somma-taupe tracking-wide">
            © 2025 SOMMA. Crafted by SOMMA. Powered by <a href="https://nexadigital.com.au/">Nexa Digital</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
