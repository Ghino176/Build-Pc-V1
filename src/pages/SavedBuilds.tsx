
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SavedBuildsList from '@/components/SavedBuildsList';

const SavedBuilds = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-tech-blue to-tech-lightBlue bg-clip-text text-transparent">
              Builds Guardadas
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explora todas las configuraciones de PC que has guardado. Revisa los detalles, 
              especificaciones y precios de tus builds personalizadas.
            </p>
          </div>
          
          <SavedBuildsList />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SavedBuilds;
