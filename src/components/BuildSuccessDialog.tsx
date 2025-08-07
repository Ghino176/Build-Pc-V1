import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle, Eye, Share2 } from 'lucide-react';
import Build3DViewer from './Build3DViewer';

interface BuildSuccessDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  buildName: string;
}

const BuildSuccessDialog: React.FC<BuildSuccessDialogProps> = ({ 
  open, 
  onOpenChange, 
  buildName 
}) => {
  const [show3DViewer, setShow3DViewer] = useState(false);

  const handleView3D = () => {
    setShow3DViewer(true);
  };

  const handleShare = () => {
    // Implement share functionality if needed
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <DialogTitle className="text-center text-xl">
              ¡Build Guardado Exitosamente!
            </DialogTitle>
          </DialogHeader>
          
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Tu build "<span className="font-semibold text-foreground">{buildName}</span>" 
              ha sido guardado correctamente.
            </p>
            
            <div className="space-y-3 pt-4">
              <Button 
                onClick={handleView3D}
                className="w-full bg-tech-blue hover:bg-tech-lightBlue"
                size="lg"
              >
                <Eye className="mr-2 h-4 w-4" />
                Ver Animación 3D
              </Button>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  onClick={handleShare}
                  className="flex-1"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Compartir
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => onOpenChange(false)}
                  className="flex-1"
                >
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Build3DViewer 
        open={show3DViewer} 
        onOpenChange={setShow3DViewer} 
      />
    </>
  );
};

export default BuildSuccessDialog;