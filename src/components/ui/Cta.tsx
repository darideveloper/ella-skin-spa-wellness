import clsx from 'clsx'
import type { IconType } from 'react-icons'

interface CtaProps {
  href: string
  text: string
  className?: string
  target?: string
  icon?: IconType
}

export default function Cta({
  href,
  text,
  className = '',
  target = '_self',
  icon : Icon,
}: CtaProps) {
  return (
    <div className={clsx('flex', 'items-center', className)}>
      <a
        href={href}
        target={target}
        rel='noopener noreferrer'
        className={clsx(
          'relative',
          'bg-gradient-to-r',
          'from-pink',
          'to-pink-light',
          'text-brown',
          'px-8',
          'py-4',
          'rounded-full',
          'font-bold',
          'transition-all',
          'duration-300',
          'hover:scale-110',
          'shadow-lg',
          'hover:shadow-2xl',
          'group',
          'overflow-hidden'
        )}
      >
        <span
          className={clsx(
            'relative',
            'z-10',
            'flex',
            'items-center',
            'space-x-3',
            'text-center lg:text-left'
          )}
        >
          {Icon && (
            <Icon
              className={clsx('w-4', 'h-4', 'text-brown')}
            />
          )}
          <span>{text}</span>
        </span>
        <div
          className={clsx(
            'absolute',
            'inset-0',
            'bg-gradient-to-r',
            'from-white/20',
            'to-transparent',
            'opacity-0',
            'group-hover:opacity-100',
            'transition-opacity',
            'duration-300'
          )}
        />
      </a>
    </div>
  )
}
