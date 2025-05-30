import React from 'react';

const ServicesCards = ({ cards }) => {
  return (
    <div className="min-h-30 bg-[var(--main-bg)] w-full max-w-7xl mx-auto rounded-3xl flex items-center justify-center px-2 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
        {cards.map((card) => {
          const IconComponent = card.icon;
          return (
            <div key={card.id} className="relative group">
              {/* Animated border gradient */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${card.borderColor} rounded-lg rounded-tr-[60px] sm:rounded-tr-[90px] opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-border-flow`}></div>
              
              {/* Card content */}
              <div className="relative bg-gray-800 p-4 sm:p-6 lg:p-8 rounded-lg rounded-tr-[60px] sm:rounded-tr-[90px] h-full">
                <div className="flex flex-col h-full">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-grow mb-4 sm:mb-6">
                    {card.description}
                  </p>
                  
                  {/* Bottom section with icons and explore more */}
                  <div className="flex items-center justify-between pt-3 sm:pt-4 ">
                    {/* Icon on bottom left */}
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r ${card.borderColor} cursor-pointer p-0.5`}>
                      <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-white " />
                      </div>
                    </div>
                    
                  {card.emoji && (
                    <div className="text-2xl sm:text-3xl text-white cursor-pointer">
                      {card.emoji}
                    </div>
                  )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesCards;