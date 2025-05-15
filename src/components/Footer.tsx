
import React from 'react';
import { Separator } from '@/components/ui/separator';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 pt-8 pb-8 bg-tech-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PC Builder</h3>
            <p className="text-sm text-muted-foreground">
              Create your custom PC with our easy-to-use PC builder tool. Select quality components and build a PC that meets your specific needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-tech-blue">PC Building Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-tech-blue">Component Compatibility</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-tech-blue">Popular Builds</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-tech-blue">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#cpu" className="text-muted-foreground hover:text-tech-blue">Processors</a></li>
              <li><a href="#motherboard" className="text-muted-foreground hover:text-tech-blue">Motherboards</a></li>
              <li><a href="#gpu" className="text-muted-foreground hover:text-tech-blue">Graphics Cards</a></li>
              <li><a href="#ram" className="text-muted-foreground hover:text-tech-blue">Memory</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>support@pcbuilder.com</li>
              <li>1-800-BUILD-PC</li>
              <li>123 Tech Street, Silicon Valley</li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-tech-blue/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PC Builder. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-tech-blue">Privacy Policy</a>
            <a href="#" className="hover:text-tech-blue">Terms of Service</a>
            <a href="#" className="hover:text-tech-blue">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
