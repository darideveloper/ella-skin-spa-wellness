import { useState, useEffect } from 'react'
import { HiMenu, HiX, HiPhone, HiSparkles } from 'react-icons/hi'
import clsx from 'clsx'
import { useTranslations } from '../../i18n/utils'
import LogoLink from '../ui/LogoLink'
import Cta from '../ui/Cta'

interface HeaderProps {
  lang?: string
}

export default function Header({ lang = 'en' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [navigationLinks, setNavigationLinks] = useState([
    { text: 'Tratamientos', href: '/#services' },
    { text: 'Blog', href: '/blog' },
    { text: 'Contact', href: '#footer' },
  ])

  // Translations
  const t = useTranslations(lang as 'en' | 'es')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update navigation links when mounts
  useEffect(() => {
    const translatedLinks = [
      { text: t('header.nav.treatments'), href: '/#services' },
      { text: t('header.nav.blog'), href: '/blog' },
      { text: t('header.nav.contact'), href: '#footer' },
    ]
    setNavigationLinks(translatedLinks)
  }, [])

  return (
    <>
      <header
        className={clsx(
          'fixed',
          'top-0',
          'left-0',
          'right-0',
          'z-50',
          'transition-all',
          'duration-500',
          'ease-in-out',
          isScrolled
            ? 'bg-white/90'
            : 'bg-gradient-to-r',
          isScrolled
            ? 'backdrop-blur-lg'
            : 'from-brown/80',
          isScrolled
            ? 'shadow-xl'
            : 'to-brown-light/80',
          !isScrolled && 'backdrop-blur-sm'
        )}
      >
        {/* Main navigation */}
        <div
          className={clsx(
            'container',
            '!my-0',
            'mx-auto',
            'px-4',
            'py-6',
            'flex',
            'items-center',
            'justify-between'
          )}
        >
          {/* Logo */}
          <div className={clsx('flex-shrink-0', 'z-10')}>
            <a href="/" className={clsx('flex', 'items-center', 'space-x-3')}>
              {/* Logo con Sparkle */}
              <div className={clsx(
                'relative',
                'flex',
                'items-center',
                'justify-center',
                'w-16',
                'h-16',
                'rounded-full',
                isScrolled ? 'bg-brown/70' : 'bg-white/20',
                'backdrop-blur-sm',
                'border',
                'border-white/30',
                'shadow-lg'
              )}>
                
                {/* aqui va el otro LogoLink */}
              </div>

              {/* Título y subtítulo */}
              <div className={clsx('hidden', 'md:block', 'flex')}>
                <h1
                  className={clsx(
                    isScrolled ? 'text-brown' : 'text-white',
                    'pt-3',
                    'text-xl',
                    'font-title',
                    'font-bold',
                    'drop-shadow-lg',
                  )}
                >
                  ELLA SKIN & SPA
                </h1>
                <p
                  className={clsx(
                    'text-xs',
                    'tracking-wider',
                    isScrolled ? 'text-brown/90' : 'text-white/90',
                  )}
                >
                  WELLNESS
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className={clsx('hidden', 'lg:flex', 'items-center', 'space-x-1')}>
            {navigationLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  'relative',
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
                  isScrolled ? 'bg-brown/70' : '',
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className={clsx('relative', 'z-10')}>{link.text}</span>
                <div className={clsx(
                  'absolute',
                  'inset-0',
                  'bg-gradient-to-r',
                  'from-pink/20',
                  'to-pink-light/20',
                  'rounded-full',
                  'opacity-0 group-hover:opacity-100',
                  'transition-opacity',
                  'duration-300'
                )} />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          {/* Aqui va el CTA */}

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={clsx(
              'lg:hidden',
              'relative',
              'p-3',
              'rounded-full',
              'backdrop-blur-sm',
              'border',
              'transition-all',
              'duration-300',
              'hover:scale-110',
              'z-10',
              'hover:scale-105',
              isScrolled ? 'bg-brown/70 text-white border-brown/60' : 'bg-brown/60 text-white border-white/30 hover:bg-white/30'
            )}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>

        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={clsx(
          'lg:hidden',
          'fixed',
          'inset-0',
          'z-40',
          'transition-all',
          'duration-500',
          'ease-in-out',
          isMenuOpen ? 'opacity-100' : 'opacity-0',
          isMenuOpen ? 'visible' : 'invisible'
        )}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className={clsx(
          'absolute',
          'inset-0',
          'bg-black/50',
          'backdrop-blur-sm'
        )} />
      </div>

      {/* Mobile Navigation Sidebar */}
      <div
        className={clsx(
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
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className={clsx('flex', 'flex-col', 'h-full', 'p-8')}>
          {/* Close button */}
          <div className={clsx('flex', 'justify-end', 'mb-8')}>
            <button
              onClick={() => setIsMenuOpen(false)}
              className={clsx(
                'p-2',
                'rounded-full',
                'bg-white/20 hover:bg-white/30',
                'text-white',
                'transition-colors',
                'duration-300'
              )}
            >
              <HiX size={24} />
            </button>
          </div>

          {/* Logo in sidebar */}
          <div className={clsx('mb-12', 'text-center')}>
            {/* Logo */}
            {/* aqui va el otro LogoLink */}

            {/* Nombre del negocio */}
            <h2 className={clsx('text-xl', 'font-title', 'font-bold', 'text-white', 'mb-2')}>
              ELLA SKIN & SPA
            </h2>
            <p className={clsx('text-sm', 'text-white/80')}>
              WELLNESS
            </p>
          </div>

          {/* Navigation links */}
          <nav className={clsx('flex-1')}>
            <div className={clsx('space-y-4')}>
              {navigationLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    'block',
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
                    'border-white/10'
                  )}
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </nav>

          {/* CTA Button in sidebar */}
          {/* aqui va el CTA */}

          {/* Contact info */}
          <div className={clsx('mt-8', 'text-center', 'text-white/80', 'text-sm')}>
            <p>{t('header.mobile.hours.weekdays')}</p>
            <p>{t('header.mobile.hours.sunday')}</p>
            <p className={clsx('mt-2', 'font-medium')}>{t('header.mobile.phone')}</p>
          </div>
        </div>
      </div>
    </>
  )
} 