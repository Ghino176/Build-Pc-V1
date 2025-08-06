
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Monitor, Database, Settings, Plus, LogOut } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useAdminAuth } from '@/hooks/useAdminAuth';

const Header = () => {
  const { isAuthenticated, adminUser, logout } = useAdminAuth();

  const handleLogout = () => {
    logout();
    // Disparar evento para actualizar otros componentes
    window.dispatchEvent(new Event('adminAuthChange'));
  };

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50 shadow-lg shadow-black/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Monitor className="h-8 w-8 text-tech-blue" />
            <span className="text-xl font-bold">PC Builder</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Constructor
            </Link>
            <Link to="/builds" className="text-muted-foreground hover:text-foreground transition-colors">
              Builds
            </Link>
            <Link to="/upgrades" className="text-muted-foreground hover:text-foreground transition-colors">
              Upgrades
            </Link>
            <Link to="/compatibility" className="text-muted-foreground hover:text-foreground transition-colors">
              Compatibilidad
            </Link>
            {isAuthenticated && (
              <Link to="/admin/add-components" className="text-muted-foreground hover:text-foreground transition-colors">
                Agregar Componentes
              </Link>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {!isAuthenticated ? (
              <>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => window.open('https://buildpc-parts-manager1.vercel.app/auth', '_blank')}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Admin
                </Button>
                <Button size="sm" className="bg-tech-blue hover:bg-tech-lightBlue" asChild>
                  <Link to="/builds">
                    <Database className="mr-2 h-4 w-4" />
                    Mis Builds
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <span className="text-sm text-muted-foreground">
                  Admin: {adminUser}
                </span>
                <Button size="sm" variant="outline" asChild>
                  <Link to="/admin/add-components">
                    <Plus className="mr-2 h-4 w-4" />
                    Agregar
                  </Link>
                </Button>
                <Button size="sm" variant="outline" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Salir
                </Button>
                <Button size="sm" className="bg-tech-blue hover:bg-tech-lightBlue" asChild>
                  <Link to="/builds">
                    <Database className="mr-2 h-4 w-4" />
                    Mis Builds
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
