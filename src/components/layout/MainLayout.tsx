import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavToggle, MobileNavMenu, NavbarLogo, NavbarButton } from '../ui/resizable-navbar'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

export function MainLayout() {
  const [isOpen, setIsOpen] = useState(false)
  
  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Services', link: '#services' },
    { name: 'Portfolio', link: '#portfolio' },
    { name: 'Experience', link: '#experience' }
  ]

  return (
    <div>
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton href="https://wa.me/6281412138980">Contact Me</NavbarButton>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="text-white hover:text-white/80 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = item.link.replace('#', '');
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
            <NavbarButton href="https://wa.me/6281412138980" variant="primary">
              Contact Me
            </NavbarButton>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <Outlet />
    </div>
  )
}