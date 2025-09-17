import React from 'react';

interface CategoryGridProps {
  onViewAll?: () => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onViewAll }) => {
  const categoryImages = [
    "https://api.builder.io/api/v1/image/assets/TEMP/8f9c4db81b45c4e6d9bdcac8b7fac3004f8e5a23?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/TEMP/9836a9123c0bb7e2ecd44dcbdeedb861611b5f04?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/TEMP/f350498557eb17ab118383e705e08aae7cecbd8b?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/TEMP/ee659007cd1c4c8b3ace2bfdd98d7853a4c1953b?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/TEMP/65a48d2cc6426b7b501c9dd77e6d2777df8928f0?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/TEMP/2b738a418243ab4924216ca3e4ce244e8d1f484e?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/TEMP/dc6bab9bf0f0782c929d229b43a69c716dde5f1b?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/TEMP/b4f94d322b070dce9fe919b278393c67283a24e8?placeholderIfAbsent=true"
  ];

  return (
    <section className="bg-[rgba(0,0,0,0)] flex w-full flex-col items-stretch mt-2 pt-[3px] pb-12">
      <div className="self-center flex w-full max-w-[356px] items-stretch gap-5 leading-none justify-between">
        <h2 className="text-[rgba(59,54,95,1)] text-lg font-semibold">
          Categorias
        </h2>
        <button
          onClick={onViewAll}
          className="text-[rgba(157,205,58,1)] text-sm font-medium hover:underline focus:outline-none focus:underline"
          aria-label="Ver todas as categorias"
        >
          Ver todas
        </button>
      </div>
      <div className="bg-[rgba(0,0,0,0)] w-full mt-[11px] pt-3 px-4">
        <div className="bg-[rgba(0,0,0,0)] z-10 w-full -mb-12">
          <div className="flex items-stretch gap-2">
            {categoryImages.slice(0, 4).map((src, index) => (
              <button
                key={index}
                className="focus:outline-none focus:ring-2 focus:ring-[rgba(157,205,58,1)] rounded-lg"
                aria-label={`Categoria ${index + 1}`}
              >
                <img
                  src={src}
                  className={`object-contain shrink-0 ${
                    index % 2 === 0 ? 'aspect-[1.1] w-[84px]' : 'aspect-[1.09] w-[83px]'
                  }`}
                  alt={`Category ${index + 1}`}
                />
              </button>
            ))}
          </div>
          <div className="flex items-stretch gap-2 mt-2">
            {categoryImages.slice(4, 8).map((src, index) => (
              <button
                key={index + 4}
                className="focus:outline-none focus:ring-2 focus:ring-[rgba(157,205,58,1)] rounded-lg"
                aria-label={`Categoria ${index + 5}`}
              >
                <img
                  src={src}
                  className={`object-contain shrink-0 ${
                    index % 2 === 0 ? 'aspect-[1.1] w-[84px]' : 'aspect-[1.09] w-[83px]'
                  }`}
                  alt={`Category ${index + 5}`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
