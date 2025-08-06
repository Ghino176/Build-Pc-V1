import { useState, useEffect } from 'react';

export const useAdminAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = () => {
      const authenticated = localStorage.getItem('adminAuthenticated') === 'true';
      const user = localStorage.getItem('adminUser');
      
      console.log('Checking auth state:', { authenticated, user });
      setIsAuthenticated(authenticated);
      setAdminUser(user);
    };

    checkAuth();
    
    // Escuchar cambios en localStorage
    window.addEventListener('storage', checkAuth);
    
    // También escuchar cambios personalizados para actualizaciones inmediatas
    const handleAuthChange = () => checkAuth();
    window.addEventListener('adminAuthChange', handleAuthChange);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('adminAuthChange', handleAuthChange);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminUser');
    setIsAuthenticated(false);
    setAdminUser(null);
  };

  return {
    isAuthenticated,
    adminUser,
    logout
  };
};