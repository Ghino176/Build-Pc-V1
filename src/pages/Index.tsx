
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategoryGrid from '@/components/CategoryGrid';
import ComponentList from '@/components/ComponentList';
import BuildSummary from '@/components/BuildSummary';
import Footer from '@/components/Footer';
import { componentCategories } from '@/data/components';
import { PcBuilderProvider } from '@/context/PcBuilderContext';

const Index = () => {
  return (
    <PcBuilderProvider>
      <div className="min-h-screen bg-tech-darkBlue">
        <Header />
        
        <main>
          <Hero />
          
          <div className="container mx-auto px-4 py-12" id="categories">
            <h2 className="text-3xl font-bold mb-8">Select Your Components</h2>
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
          </div>
        </main>
        
        <Footer />
      </div>
    </PcBuilderProvider>
  );
};

export default Index;
