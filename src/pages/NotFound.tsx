
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-tech-darkBlue p-4 text-center">
      <div className="space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-tech-blue">404</h1>
        <p className="text-2xl font-medium">Página No Encontrada</p>
        <p className="text-muted-foreground mb-6">
          La página que estás buscando no existe o ha sido movida.
        </p>
        <Button asChild className="bg-tech-blue hover:bg-tech-lightBlue">
          <a href="/">
            <Home className="mr-2 h-4 w-4" /> Regresar al Inicio
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
