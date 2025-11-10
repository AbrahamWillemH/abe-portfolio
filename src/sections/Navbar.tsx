import PillNav from '@/components/ui/PillNav';
import StaggeredMenu from '@/components/ui/StaggeredMenu';
import logo from '../assets/icons8-katakana-a-50.png';
import { useState, useEffect } from 'react';

const menuItems = [
  { label: 'About', ariaLabel: 'Go to home page', link: '/about' },
  { label: 'Tech Stack', ariaLabel: 'Learn about us', link: '/tech-stack' },
  { label: 'Experiences', ariaLabel: 'View our services', link: '/experiences' },
  { label: 'Projects', ariaLabel: 'Get in touch', link: '/projects' }
];

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full">
      {!isMobile && (
        <div className="flex justify-center items-center py-4">
          <PillNav
            logo={logo}
            logoAlt="Katakana A"
            items={menuItems.map(item => ({ label: item.label, href: item.link }))}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#1b283200"
            pillColor="#ffffff00"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#aaaaaa"
          />
        </div>
      )}

      {isMobile && (
        <div className={isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}>
          <StaggeredMenu
            isFixed={true}
            position="right"
            items={menuItems}
            displayItemNumbering={true}
            menuButtonColor="#fff"
            openMenuButtonColor="#000"
            changeMenuColorOnOpen={true}
            colors={['#B19EEF', '#2e1053']}
            logoUrl={logo}
            accentColor="#665ccb"
            onMenuOpen={() => setIsMenuOpen(true)}
            onMenuClose={() => setIsMenuOpen(false)}
          />
        </div>
      )}
    </div>
  );
}
