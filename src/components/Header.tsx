
import React from 'react';
import { usePcBuilder } from '@/context/PcBuilderContext';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { formatPrice } from '@/lib/utils';

const Header: React.FC = () => {
  const { totalPrice, resetBuild } = usePcBuilder();

  return (
    <header className="sticky top-0 z-50 w-full bg-tech-black/90 backdrop-blur-sm border-b border-tech-blue/30">
      <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-tech-blue animate-pulse-glow"></div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-tech-blue to-tech-lightBlue bg-clip-text text-transparent">
            PC Builder
          </h1>
        </div>
        
        <div className="flex items-center space-x-4 mt-2 sm:mt-0">
          <div className="text-right">
            <span className="block text-sm text-gray-300">Total Price:</span>
            <span className="text-xl font-bold text-tech-lightBlue">{formatPrice(totalPrice)}</span>
          </div>
          
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="border-tech-blue/50 text-tech-blue hover:bg-tech-blue/10">
                Reset Build
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-tech-gray border border-tech-blue/30">
              <AlertDialogHeader>
                <AlertDialogTitle>Reset Your Build?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will remove all components from your current build. This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-muted text-muted-foreground hover:bg-muted/80">Cancel</AlertDialogCancel>
                <AlertDialogAction 
                  onClick={resetBuild}
                  className="bg-tech-blue text-white hover:bg-tech-lightBlue"
                >
                  Reset
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </header>
  );
};

export default Header;
