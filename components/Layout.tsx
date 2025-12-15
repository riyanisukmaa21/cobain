import React, { ReactNode } from 'react';
import StarBackground from './StarBackground';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <StarBackground />
      
      <main className="flex-grow relative z-10 flex flex-col">
        {children}
      </main>

      <footer className="relative z-10 w-full py-4 text-center text-gray-500 text-sm backdrop-blur-sm bg-black/20 border-t border-white/5">
        <p>Web ini dibuat oleh <span className="text-white font-semibold">Kelompok 2</span> sebagai tugas besar mata kuliah Kalkulus.</p>
      </footer>
    </div>
  );
};

export default Layout;