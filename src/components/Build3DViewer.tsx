import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Build3DViewerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const Build3DViewer: React.FC<Build3DViewerProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-center">Vista 3D de tu Build</DialogTitle>
        </DialogHeader>
        <div className="w-full h-[600px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden">
          <div className="sketchfab-embed-wrapper w-full h-full">
            <iframe 
              title="Friday500 - Inside The Computer (Tower)" 
              className="w-full h-full border-0"
              allowFullScreen 
              allow="autoplay; fullscreen; xr-spatial-tracking" 
              src="https://sketchfab.com/models/6aebf78dd1fa49f69ae71648248e8e5e/embed"
            />
            <p className="text-xs text-muted-foreground mt-2 text-center">
              <a 
                href="https://sketchfab.com/3d-models/friday500-inside-the-computer-tower-6aebf78dd1fa49f69ae71648248e8e5e?utm_medium=embed&utm_campaign=share-popup&utm_content=6aebf78dd1fa49f69ae71648248e8e5e" 
                target="_blank" 
                rel="nofollow"
                className="font-medium text-tech-blue hover:text-tech-lightBlue"
              > 
                Friday500 - Inside The Computer (Tower) 
              </a> 
              {" by "}
              <a 
                href="https://sketchfab.com/prodigga?utm_medium=embed&utm_campaign=share-popup&utm_content=6aebf78dd1fa49f69ae71648248e8e5e" 
                target="_blank" 
                rel="nofollow"
                className="font-medium text-tech-blue hover:text-tech-lightBlue"
              > 
                Prodigga 
              </a>
              {" on "}
              <a 
                href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=6aebf78dd1fa49f69ae71648248e8e5e" 
                target="_blank" 
                rel="nofollow"
                className="font-medium text-tech-blue hover:text-tech-lightBlue"
              >
                Sketchfab
              </a>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Build3DViewer;
