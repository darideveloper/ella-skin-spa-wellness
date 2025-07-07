import { useState, useEffect } from 'react'
import { HiMenu, HiX, HiPhone, HiHeart } from 'react-icons/hi'

interface HeaderCProps {
  lang?: string
}

export default function HeaderC({ lang = 'en' }: HeaderCProps) {
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
    <>
      <header
        className={[
          'fixed',
          'top-0',
          'left-0',
          'right-0',
          'z-50',
          'transition-all',
          'duration-700',
          'ease-out',
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl'
            : 'bg-transparent',
        ].join(' ')}
      >
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
          <div className={['flex-shrink-0', 'z-10'].join(' ')}>
            <a href="/" className={['flex', 'items-center', 'space-x-2'].join(' ')}>
              <div className={[
                'relative',
                'flex',
                'items-center',
                'justify-center',
                'w-14',
                'h-14',
                'rounded-2xl',
                'bg-gradient-to-br',
                'from-pink',
                'to-pink-light',
                'shadow-lg',
                'transition-transform',
                'duration-300',
                'hover:scale-110',
              ].join(' ')}>
                <img
                  src="/imgs/logo.webp"
                  alt="ELLA SKIN & SPA WELLNESS"
                  className={['h-8', 'w-auto'].join(' ')}
                />
                <HiHeart 
                  className={[
                    'absolute',
                    '-top-1',
                    '-right-1',
                    'text-brown',
                    'text-sm',
                    'animate-bounce'
                  ].join(' ')}
                />
              </div>
              <div className={['hidden sm:block'].join(' ')}>
                <h1
                  className={[
                    'text-lg',
                    'font-title',
                    'font-bold',
                    isScrolled ? 'text-brown' : 'text-white',
                    'drop-shadow-lg',
                    'transition-colors',
                    'duration-700',
                  ].join(' ')}
                >
                  ELLA SKIN & SPA
                </h1>
                <p
                  className={[
                    'text-xs',
                    'font-sans',
                    isScrolled ? 'text-brown-light' : 'text-white/90',
                    'tracking-wider',
                    'transition-colors',
                    'duration-700',
                  ].join(' ')}
                >
                  WELLNESS
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className={['hidden lg:flex', 'items-center', 'absolute', 'left-1/2', 'transform', '-translate-x-1/2'].join(' ')}>
            <div className={['flex', 'items-center', 'space-x-1', 'bg-white/10', 'backdrop-blur-sm', 'rounded-2xl', 'p-2', 'border', 'border-white/20'].join(' ')}>
              {navigationLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={[
                    'font-sans',
                    'font-medium',
                    'text-sm',
                    'px-6',
                    'py-3',
                    'rounded-xl',
                    'text-white',
                    'transition-all',
                    'duration-300',
                    'hover:bg-white/20',
                    'hover:scale-105',
                    'relative',
                    'group',
                  ].join(' ')}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className={['relative', 'z-10'].join(' ')}>{link.text}</span>
                  <div className={[
                    'absolute',
                    'inset-0',
                    'bg-gradient-to-r',
                    'from-pink/30',
                    'to-pink-light/30',
                    'rounded-xl',
                    'opacity-0',
                    'group-hover:opacity-100',
                    'transition-opacity',
                    'duration-300',
                  ].join(' ')} />
                </a>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className={['hidden lg:flex', 'items-center'].join(' ')}>
            <a
              href="https://api.whatsapp.com/send?phone=5214493402622"
              target="_blank"
              rel="noopener noreferrer"
              className={[
                'relative',
                'bg-gradient-to-r',
                'from-brown',
                'to-brown-light',
                'text-white',
                'px-6',
                'py-3',
                'rounded-2xl',
                'font-sans',
                'font-bold',
                'text-sm',
                'transition-all',
                'duration-300',
                'hover:scale-110',
                'hover:shadow-2xl',
                'shadow-lg',
                'group',
                'overflow-hidden',
                'flex',
                'items-center',
                'space-x-2',
              ].join(' ')}
            >
              <HiPhone size={16} />
              <span>Agenda una cita</span>
              <div className={[
                'absolute',
                'inset-0',
                'bg-gradient-to-r',
                'from-pink/20',
                'to-pink-light/20',
                'opacity-0',
                'group-hover:opacity-100',
                'transition-opacity',
                'duration-300',
              ].join(' ')} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={[
              'lg:hidden',
              'relative',
              'p-3',
              'rounded-2xl',
              'bg-white/20',
              'backdrop-blur-sm',
              'border',
              'border-white/30',
              'text-white',
              'transition-all',
              'duration-300',
              'hover:bg-white/30',
              'hover:scale-110',
              'z-10',
            ].join(' ')}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation - Full Screen */}
      <div
        className={[
          'lg:hidden',
          'fixed',
          'inset-0',
          'z-40',
          'transition-all',
          'duration-700',
          'ease-out',
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
        ].join(' ')}
      >
        <div className={[
          'absolute',
          'inset-0',
          'bg-gradient-to-br',
          'from-brown/95',
          'to-brown-light/95',
          'backdrop-blur-xl',
        ].join(' ')} />
        
        <div className={[
          'relative',
          'h-full',
          'flex',
          'flex-col',
          'items-center',
          'justify-center',
          'p-8',
        ].join(' ')}>
          {/* Close button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className={[
              'absolute',
              'top-8',
              'right-8',
              'p-3',
              'rounded-2xl',
              'bg-white/20',
              'text-white',
              'hover:bg-white/30',
              'transition-colors',
              'duration-300',
            ].join(' ')}
          >
            <HiX size={24} />
          </button>

          {/* Logo */}
          <div className={['mb-16', 'text-center'].join(' ')}>
            <div className={[
              'inline-flex',
              'items-center',
              'justify-center',
              'w-24',
              'h-24',
              'rounded-3xl',
              'bg-gradient-to-br',
              'from-pink',
              'to-pink-light',
              'shadow-2xl',
              'mb-6',
            ].join(' ')}>
              <img
                src="/imgs/logo.webp"
                alt="ELLA SKIN & SPA WELLNESS"
                className={['h-14', 'w-auto'].join(' ')}
              />
            </div>
            <h2 className={['text-2xl', 'font-title', 'font-bold', 'text-white', 'mb-2'].join(' ')}>
              ELLA SKIN & SPA
            </h2>
            <p className={['text-sm', 'font-sans', 'text-white/80', 'tracking-wider'].join(' ')}>
              WELLNESS
            </p>
          </div>

          {/* Navigation links */}
          <nav className={['w-full', 'max-w-sm'].join(' ')}>
            <div className={['space-y-6'].join(' ')}>
              {navigationLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={[
                    'block',
                    'font-sans',
                    'font-bold',
                    'text-white',
                    'py-5',
                    'px-8',
                    'rounded-2xl',
                    'text-center',
                    'text-lg',
                    'transition-all',
                    'duration-500',
                    'hover:bg-white/20',
                    'hover:scale-105',
                    'backdrop-blur-sm',
                    'border',
                    'border-white/20',
                    'shadow-lg',
                  ].join(' ')}
                  style={{ animationDelay: `${index * 200}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className={['mt-12', 'w-full', 'max-w-sm'].join(' ')}>
            <a
              href="https://api.whatsapp.com/send?phone=5214493402622"
              target="_blank"
              rel="noopener noreferrer"
              className={[
                'block',
                'w-full',
                'bg-gradient-to-r',
                'from-brown',
                'to-brown-light',
                'text-white',
                'px-8',
                'py-5',
                'rounded-2xl',
                'font-sans',
                'font-bold',
                'text-lg',
                'text-center',
                'transition-all',
                'duration-500',
                'hover:scale-105',
                'shadow-2xl',
                'hover:shadow-3xl',
                'flex',
                'items-center',
                'justify-center',
                'space-x-3',
              ].join(' ')}
              onClick={() => setIsMenuOpen(false)}
            >
              <HiPhone size={20} />
              <span>Agenda una cita</span>
            </a>
          </div>

          {/* Contact info */}
          <div className={['mt-12', 'text-center', 'text-white/80', 'text-sm'].join(' ')}>
            <p className={['font-medium', 'mb-1'].join(' ')}>Horarios de atención</p>
            <p>Mon-Sat: 9AM-8PM | Sun: 10AM-6PM</p>
            <p className={['mt-2', 'font-bold', 'text-white'].join(' ')}>+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </>
  )
} 