import React from 'react';
import { ArticleCard } from './ArticleCard';

interface Article {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface RecommendedArticlesProps {
  onArticleClick?: (articleId: string) => void;
}

export const RecommendedArticles: React.FC<RecommendedArticlesProps> = ({ onArticleClick }) => {
  const articles: Article[] = [
    {
      id: '1',
      title: 'Alimentação no segundo trimestre',
      description: 'Dicas de nutrição para esta fase da gestação',
      imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/00477b9be0b9e3ce869e0c4dae766f4c96796e23?placeholderIfAbsent=true'
    },
    {
      id: '2',
      title: 'Alimentação no segundo trimestre',
      description: 'Dicas de nutrição para esta fase da gestação',
      imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/00477b9be0b9e3ce869e0c4dae766f4c96796e23?placeholderIfAbsent=true'
    },
    {
      id: '3',
      title: 'Alimentação no segundo trimestre',
      description: 'Dicas de nutrição para esta fase da gestação',
      imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/00477b9be0b9e3ce869e0c4dae766f4c96796e23?placeholderIfAbsent=true'
    }
  ];

  return (
    <section className="bg-[rgba(0,0,0,0)] w-full mt-2.5 px-4 py-px">
      <div className="bg-[rgba(0,0,0,0)] flex flex-col text-lg text-[rgba(59,54,95,1)] font-semibold whitespace-nowrap leading-none pt-[3px] pb-3">
        <h2>Recomendados</h2>
      </div>
      <div className="bg-[rgba(0,0,0,0)] w-full mt-4">
        {articles.map((article, index) => (
          <div key={article.id} className={index > 0 ? 'mt-[13px]' : ''}>
            <ArticleCard
              title={article.title}
              description={article.description}
              imageUrl={article.imageUrl}
              onClick={() => onArticleClick?.(article.id)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
