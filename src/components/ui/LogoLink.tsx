// Libs
import clsx from 'clsx'

interface LogoLinkProps {
  lang: string
  src: string
  className?: string
  isScrolled?: boolean
}

export default function LogoLink({
  lang,
  src,
  className = '',
  isScrolled = false,
}: LogoLinkProps) {

  const href = `/${lang}`

  return (
    <div className={clsx('flex-shrink-0', className)}>
      <a
        href={href}
        className={clsx('flex', 'items-center', 'space-x-3')}
      >
        <div
          className={clsx(
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
          )}
        >
          <img
            src={src}
            alt='ELLA SKIN & SPA WELLNESS logo'
            title='ELLA SKIN & SPA WELLNESS'
            className={clsx('h-10', 'w-auto')}
          />
        </div>
      </a>
    </div>
  )
}
