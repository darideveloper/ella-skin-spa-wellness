import { useState, useEffect } from 'react'
import { HiMenu, HiX, HiPhone } from 'react-icons/hi'

interface HeaderAProps {
  lang?: string
}

export default function HeaderA({ lang = 'en' }: HeaderAProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationLinks = [
    { text: 'Tratamientos', href: '/#services' },
    { text: 'Blog', href: '/blog' },
    { text: 'Contact', href: '#footer' },
  ]

  return (
    <header
      className={[
        'fixed',
        'top-0',
        'left-0',
        'right-0',
        'z-50',
        'transition-all',
        'duration-300',
        'ease-in-out',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent',
      ].join(' ')}
    >
      {/* Top bar with contact info */}
      <div
        className={[
          'bg-brown',
          'text-white',
          'py-2',
          'px-4',
          'text-center',
          'text-sm',
          'hidden md:block',
        ].join(' ')}
      >
        <div className={['container', '!my-0', 'mx-auto', 'flex', 'justify-center', 'items-center', 'space-x-6'].join(' ')}>
          <span>Mon-Sat: 9AM-8PM | Sun: 10AM-6PM</span>
          <span>|</span>
          <span>+1 (555) 123-4567</span>
        </div>
      </div>

      {/* Main navigation */}
      <div
        className={[
          'container',
          '!my-0',
          'mx-auto',
          'px-4',
          'py-4',
          'flex',
          'items-center',
          'justify-between',
        ].join(' ')}
      >
        {/* Logo */}
        <div className={['flex-shrink-0'].join(' ')}>
          <a href="/" className={['flex', 'items-center', 'space-x-2'].join(' ')}>
            <img
              src="/imgs/logo.webp"
              alt="ELLA SKIN & SPA WELLNESS"
              className={['h-12', 'w-auto'].join(' ')}
            />
            <div className={['hidden sm:block'].join(' ')}>
              <h1
                className={[
                  'text-lg',
                  'font-title',
                  'font-bold',
                  isScrolled ? 'text-brown' : 'text-white',
                ].join(' ')}
              >
                ELLA SKIN & SPA
              </h1>
              <p
                className={[
                  'text-xs',
                  'font-sans',
                  isScrolled ? 'text-brown-light' : 'text-white/80',
                ].join(' ')}
              >
                WELLNESS
              </p>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={['hidden lg:flex', 'items-center', 'space-x-8'].join(' ')}>
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={[
                'font-sans',
                'font-medium',
                'text-sm',
                'transition-colors',
                'duration-300',
                'hover:text-pink',
                isScrolled ? 'text-brown hover:text-brown-light' : 'text-white hover:text-pink-light',
              ].join(' ')}
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className={['hidden lg:flex', 'items-center', 'space-x-4'].join(' ')}>
          <a
            href="https://api.whatsapp.com/send?phone=5214493402622"
            target="_blank"
            rel="noopener noreferrer"
            className={[
              'bg-pink',
              'text-brown',
              'px-6',
              'py-3',
              'rounded-full',
              'font-sans',
              'font-medium',
              'text-sm',
              'transition-all',
              'duration-300',
              'hover:bg-pink-light',
              'hover:scale-105',
              'shadow-lg',
              'hover:shadow-xl',
            ].join(' ')}
          >
            Agenda una cita
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={[
            'lg:hidden',
            'p-2',
            'rounded-md',
            'transition-colors',
            'duration-300',
            isScrolled ? 'text-brown hover:text-brown-light' : 'text-white hover:text-pink-light',
          ].join(' ')}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={[
          'lg:hidden',
          'absolute',
          'top-full',
          'left-0',
          'right-0',
          'bg-white/95',
          'backdrop-blur-md',
          'shadow-lg',
          'transition-all',
          'duration-300',
          'ease-in-out',
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4',
        ].join(' ')}
      >
        <nav className={['container', '!my-0', 'mx-auto', 'px-4', 'py-6'].join(' ')}>
          <div className={['flex', 'flex-col', 'space-y-4'].join(' ')}>
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={[
                  'font-sans',
                  'font-medium',
                  'text-brown',
                  'py-2',
                  'px-4',
                  'rounded-lg',
                  'transition-colors',
                  'duration-300',
                  'hover:bg-pink-light',
                  'hover:text-brown',
                ].join(' ')}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send?phone=5214493402622"
              target="_blank"
              rel="noopener noreferrer"
              className={[
                'bg-pink',
                'text-brown',
                'px-6',
                'py-3',
                'rounded-full',
                'font-sans',
                'font-medium',
                'text-sm',
                'text-center',
                'transition-all',
                'duration-300',
                'hover:bg-pink-light',
                'hover:scale-105',
                'shadow-lg',
                'hover:shadow-xl',
                'flex',
                'items-center',
                'justify-center',
                'space-x-2',
              ].join(' ')}
              onClick={() => setIsMenuOpen(false)}
            >
              <HiPhone size={16} />
              <span>Agenda una cita</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
} 