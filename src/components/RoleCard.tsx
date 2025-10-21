import React from 'react';

interface RoleCardProps {
  title: string;
  description: string;
  image?: string;
  onClick: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ title, description, image, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 border-2 border-transparent hover:border-somma-gold"
    >
      {image && (
        <div className="h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-8">
        <h3 className="font-serif text-2xl text-somma-ink mb-3 tracking-wide">{title}</h3>
        <p className="font-sans text-somma-taupe leading-relaxed tracking-wide">{description}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-somma-taupe to-somma-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    </div>
  );
};

export default RoleCard;
