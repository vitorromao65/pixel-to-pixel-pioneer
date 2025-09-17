import React from 'react';
import { SearchBar } from '@/components/SearchBar';
import { CategoryGrid } from '@/components/CategoryGrid';
import { HighlightsSection } from '@/components/HighlightsSection';
import { RecommendedArticles } from '@/components/RecommendedArticles';
import { BottomNavigation } from '@/components/BottomNavigation';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { user, logout } = useAuth();

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
          <div className="flex justify-between items-center px-4 mb-4">
            <div>
              <h1 className="text-xl font-semibold text-[#3B365F]">Olá, {user?.name}!</h1>
              <p className="text-sm text-gray-600">Bem-vinda ao GestaBem</p>
            </div>
            <Button 
              onClick={logout}
              variant="outline"
              size="sm"
              className="text-[#9DCD3A] border-[#9DCD3A] hover:bg-[#9DCD3A] hover:text-white"
            >
              Sair
            </Button>
          </div>

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
