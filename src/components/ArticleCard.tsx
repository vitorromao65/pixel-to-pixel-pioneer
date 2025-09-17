import React from 'react';

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  imageUrl,
  onClick
}) => {
  return (
    <article 
      className="bg-gray-100 flex items-stretch gap-[7px] overflow-hidden pr-[5px] py-px rounded-lg cursor-pointer hover:bg-gray-200 transition-colors"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <img
        src={imageUrl}
        className="aspect-[1] object-contain w-[100px] shrink-0 max-w-full"
        alt={title}
      />
      <div className="bg-[rgba(0,0,0,0)] flex flex-col my-auto pl-2 pr-[37px] py-[13px]">
        <h3 className="text-[rgba(59,54,95,1)] text-sm font-medium leading-[14px]">
          {title}
        </h3>
        <p className="text-gray-600 text-xs font-normal leading-3 mt-[18px]">
          {description}
        </p>
      </div>
    </article>
  );
};
