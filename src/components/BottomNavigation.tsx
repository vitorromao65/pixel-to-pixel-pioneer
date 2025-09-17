import React, { useState } from 'react';

interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  isActive?: boolean;
}

interface BottomNavigationProps {
  onNavigate?: (itemId: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ onNavigate }) => {
  const [activeItem, setActiveItem] = useState('inicio');

  const navigationItems: NavigationItem[] = [
    {
      id: 'inicio',
      label: 'Início',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/fa45105a9607763c621e551fba9dcd7eb35c1e22?placeholderIfAbsent=true',
      isActive: true
    },
    {
      id: 'salvos',
      label: 'Salvos',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/134b702bbec84b3662c25c776ba1f3072206144d?placeholderIfAbsent=true'
    },
    {
      id: 'alertas',
      label: 'Alertas',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/11a35de62550dd7a152b6b6dc676ab81e0296559?placeholderIfAbsent=true'
    }
  ];

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    onNavigate?.(itemId);
  };

  return (
    <nav 
      className="bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.05)] z-10 w-full pt-px pb-[17px]"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="bg-[rgba(0,0,0,0)] z-10 flex w-full flex-col px-[31px] py-1">
        <div className="flex justify-center gap-8">
          {navigationItems.map((item) => {
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`bg-[rgba(0,0,0,0)] flex w-[105px] max-w-full flex-col items-center px-[21px] py-3 focus:outline-none focus:ring-2 focus:ring-[rgba(157,205,58,1)] rounded-lg ${
                  isActive ? 'border-b-2 border-[rgba(157,205,58,1)]' : ''
                }`}
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
              >
                <div className="flex min-h-4 w-[18px] items-center overflow-hidden justify-center">
                  <img
                    src={item.icon}
                    className="aspect-[1.12] object-contain w-[18px] self-stretch my-auto"
                    alt=""
                    role="presentation"
                  />
                </div>
                <div
                  className={`text-xs font-normal leading-none text-center mt-1 ${
                    isActive ? 'text-[rgba(157,205,58,1)]' : 'text-gray-500'
                  }`}
                >
                  {item.label}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
