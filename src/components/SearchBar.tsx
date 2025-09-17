import React, { useState } from 'react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  placeholder = "Buscar informações sobre gestação...",
  onSearch 
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <section className="bg-white w-full text-sm text-[rgba(173,174,188,1)] font-normal leading-none pt-2 pb-4 px-4">
      <div className="bg-[rgba(0,0,0,0)] w-full">
        <form onSubmit={handleSubmit} className="bg-[rgba(243,250,220,1)] flex items-stretch gap-3 px-3 rounded-lg">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/cdf4ab04c50a4f135845a9529692500f6dda1ee5?placeholderIfAbsent=true"
            className="aspect-[0.36] object-contain w-4 shrink-0"
            alt="Search icon"
          />
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder={placeholder}
            className="grow shrink w-[303px] basis-auto my-auto bg-transparent border-none outline-none placeholder-[rgba(173,174,188,1)]"
            aria-label="Search pregnancy information"
          />
        </form>
      </div>
    </section>
  );
};
