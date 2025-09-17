import React from 'react';
import { SearchBar } from '@/components/SearchBar';
import { CategoryGrid } from '@/components/CategoryGrid';
import { HighlightsSection } from '@/components/HighlightsSection';
import { RecommendedArticles } from '@/components/RecommendedArticles';
import { BottomNavigation } from '@/components/BottomNavigation';

const Index = () => {
  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  const handleViewAllCategories = () => {
    console.log('View all categories clicked');
  };

  const handleArticleClick = (articleId: string) => {
    console.log('Article clicked:', articleId);
  };

  const handleNavigation = (itemId: string) => {
    console.log('Navigation item clicked:', itemId);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      <main className="bg-white max-w-[480px] w-full overflow-hidden mx-auto rounded-lg border-[rgba(206,212,218,1)] border-solid border-2 relative">
        <div className="bg-[rgba(0,0,0,0)] w-full pt-5 pb-20">
          <SearchBar 
            onSearch={handleSearch}
            placeholder="Buscar informações sobre gestação..."
          />
          
          <CategoryGrid onViewAll={handleViewAllCategories} />
          
          <HighlightsSection />
          
          <RecommendedArticles onArticleClick={handleArticleClick} />
        </div>
        
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[480px]">
          <BottomNavigation onNavigate={handleNavigation} />
        </div>
      </main>
    </div>
  );
};

export default Index;
