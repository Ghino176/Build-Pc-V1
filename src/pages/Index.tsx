
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import ComponentList from '@/components/ComponentList';
import BuildSummary from '@/components/BuildSummary';
import GamePerformance from '@/components/GamePerformance';
import Footer from '@/components/Footer';
import { componentCategories } from '@/data/components';

const Index = () => {
  return (
    <div >
      <Header />
      <main>
        <Hero />
        
        <div className="container mx-auto px-4 py-12" id="categories">
          <h2 className="text-3xl font-bold mb-8 text-white">Selecciona Tus Componentes</h2>
          <CategoryGrid />
          
          <div className="mt-16 flex flex-col md:flex-row gap-8">
            <div className="md:w-3/4">
              {componentCategories.map((category) => (
                <ComponentList key={category.id} category={category} />
              ))}
            </div>
            
            <div className="md:w-1/4">
              <BuildSummary />
            </div>
          </div>
          
          {/* Game Performance Section */}
          <div className="mt-16">
            <GamePerformance />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
