import { useState, useEffect } from 'react'
import { HiMenu, HiX, HiPhone, HiSparkles } from 'react-icons/hi'

interface HeaderBProps {
  lang?: string
}

export default function HeaderB({ lang = 'en' }: HeaderBProps) {
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
          'duration-500',
          'ease-in-out',
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-xl'
            : 'bg-gradient-to-r from-brown/80 to-brown-light/80 backdrop-blur-sm',
        ].join(' ')}
      >
        {/* Main navigation */}
        <div
          className={[
            'container',
            '!my-0',
            'mx-auto',
            'px-4',
            'py-6',
            'flex',
            'items-center',
            'justify-between',
          ].join(' ')}
        >
          {/* Logo */}
          <div className={['flex-shrink-0', 'z-10'].join(' ')}>
            <a href="/" className={['flex', 'items-center', 'space-x-3'].join(' ')}>
              <div className={[
                'relative',
                'flex',
                'items-center',
                'justify-center',
                'w-16',
                'h-16',
                'rounded-full',
                'bg-white/20',
                'backdrop-blur-sm',
                'border',
                'border-white/30',
                'shadow-lg',
              ].join(' ')}>
                <img
                  src="/imgs/logo.webp"
                  alt="ELLA SKIN & SPA WELLNESS"
                  className={['h-10', 'w-auto'].join(' ')}
                />
                <HiSparkles 
                  className={[
                    'absolute',
                    '-top-1',
                    '-right-1',
                    'text-pink',
                    'text-lg',
                    'animate-pulse'
                  ].join(' ')}
                />
              </div>
              <div className={['hidden md:block'].join(' ')}>
                <h1
                  className={[
                    'text-xl',
                    'font-title',
                    'font-bold',
                    'text-white',
                    'drop-shadow-lg',
                  ].join(' ')}
                >
                  ELLA SKIN & SPA
                </h1>
                <p
                  className={[
                    'text-xs',
                    'font-sans',
                    'text-white/90',
                    'tracking-wider',
                  ].join(' ')}
                >
                  WELLNESS
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className={['hidden lg:flex', 'items-center', 'space-x-1'].join(' ')}>
            {navigationLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={[
                  'relative',
                  'font-sans',
                  'font-medium',
                  'text-sm',
                  'px-6',
                  'py-3',
                  'rounded-full',
                  'text-white',
                  'transition-all',
                  'duration-300',
                  'hover:bg-white/20',
                  'hover:scale-105',
                  'backdrop-blur-sm',
                  'group',
                ].join(' ')}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className={['relative', 'z-10'].join(' ')}>{link.text}</span>
                <div className={[
                  'absolute',
                  'inset-0',
                  'bg-gradient-to-r',
                  'from-pink/20',
                  'to-pink-light/20',
                  'rounded-full',
                  'opacity-0',
                  'group-hover:opacity-100',
                  'transition-opacity',
                  'duration-300',
                ].join(' ')} />
              </a>
            ))}
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
                'from-pink',
                'to-pink-light',
                'text-brown',
                'px-8',
                'py-4',
                'rounded-full',
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
              ].join(' ')}
            >
              <span className={['relative', 'z-10', 'flex', 'items-center', 'space-x-2'].join(' ')}>
                <HiPhone size={16} />
                <span>Agenda una cita</span>
              </span>
              <div className={[
                'absolute',
                'inset-0',
                'bg-gradient-to-r',
                'from-white/20',
                'to-transparent',
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
              'rounded-full',
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

      {/* Mobile Navigation Overlay */}
      <div
        className={[
          'lg:hidden',
          'fixed',
          'inset-0',
          'z-40',
          'transition-all',
          'duration-500',
          'ease-in-out',
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
        ].join(' ')}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className={[
          'absolute',
          'inset-0',
          'bg-black/50',
          'backdrop-blur-sm',
        ].join(' ')} />
      </div>

      {/* Mobile Navigation Sidebar */}
      <div
        className={[
          'lg:hidden',
          'fixed',
          'top-0',
          'right-0',
          'h-full',
          'w-80',
          'max-w-[85vw]',
          'bg-gradient-to-b',
          'from-brown',
          'to-brown-light',
          'shadow-2xl',
          'z-50',
          'transition-transform',
          'duration-500',
          'ease-in-out',
          'transform',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        <div className={['flex', 'flex-col', 'h-full', 'p-8'].join(' ')}>
          {/* Close button */}
          <div className={['flex', 'justify-end', 'mb-8'].join(' ')}>
            <button
              onClick={() => setIsMenuOpen(false)}
              className={[
                'p-2',
                'rounded-full',
                'bg-white/20',
                'text-white',
                'hover:bg-white/30',
                'transition-colors',
                'duration-300',
              ].join(' ')}
            >
              <HiX size={24} />
            </button>
          </div>

          {/* Logo in sidebar */}
          <div className={['mb-12', 'text-center'].join(' ')}>
            <div className={[
              'inline-flex',
              'items-center',
              'justify-center',
              'w-20',
              'h-20',
              'rounded-full',
              'bg-white/20',
              'backdrop-blur-sm',
              'border',
              'border-white/30',
              'shadow-lg',
              'mb-4',
            ].join(' ')}>
              <img
                src="/imgs/logo.webp"
                alt="ELLA SKIN & SPA WELLNESS"
                className={['h-12', 'w-auto'].join(' ')}
              />
            </div>
            <h2 className={['text-xl', 'font-title', 'font-bold', 'text-white', 'mb-2'].join(' ')}>
              ELLA SKIN & SPA
            </h2>
            <p className={['text-sm', 'font-sans', 'text-white/80'].join(' ')}>
              WELLNESS
            </p>
          </div>

          {/* Navigation links */}
          <nav className={['flex-1'].join(' ')}>
            <div className={['space-y-4'].join(' ')}>
              {navigationLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={[
                    'block',
                    'font-sans',
                    'font-medium',
                    'text-white',
                    'py-4',
                    'px-6',
                    'rounded-xl',
                    'transition-all',
                    'duration-300',
                    'hover:bg-white/20',
                    'hover:scale-105',
                    'backdrop-blur-sm',
                    'border',
                    'border-white/10',
                  ].join(' ')}
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </nav>

          {/* CTA Button in sidebar */}
          <div className={['mt-8'].join(' ')}>
            <a
              href="https://api.whatsapp.com/send?phone=5214493402622"
              target="_blank"
              rel="noopener noreferrer"
              className={[
                'block',
                'w-full',
                'bg-gradient-to-r',
                'from-pink',
                'to-pink-light',
                'text-brown',
                'px-6',
                'py-4',
                'rounded-xl',
                'font-sans',
                'font-bold',
                'text-center',
                'transition-all',
                'duration-300',
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
              <HiPhone size={18} />
              <span>Agenda una cita</span>
            </a>
          </div>

          {/* Contact info */}
          <div className={['mt-8', 'text-center', 'text-white/80', 'text-sm'].join(' ')}>
            <p>Mon-Sat: 9AM-8PM</p>
            <p>Sun: 10AM-6PM</p>
            <p className={['mt-2', 'font-medium'].join(' ')}>+1 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </>
  )
} 