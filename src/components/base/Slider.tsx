import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import clsx from 'clsx'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface SliderProps {
  images: string[]
  className?: string
  height?: string
  autoplay?: boolean
  autoplayDelay?: number
  showNavigation?: boolean
  showPagination?: boolean
  effect?: 'slide' | 'fade'
  loop?: boolean
}

export default function Slider({
  images,
  className = '',
  height = 'h-screen min-h-[600px]',
  autoplay = true,
  autoplayDelay = 5000,
  showNavigation = true,
  showPagination = true,
  effect = 'fade',
  loop = true,
}: SliderProps) {
  const swiperRef = useRef<any>(null)

  useEffect(() => {
  }, [images])

  return (
    <section
      className={clsx(
        'relative',
        'overflow-hidden',
        'bg-gradient-to-br',
        'from-brown-light',
        'via-pink-light',
        'to-white',
        height,
        className
      )}
    >
      {/* Swiper Container */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect={effect}
        fadeEffect={{
          crossFade: true,
        }}
        loop={loop}
        autoplay={
          autoplay
            ? {
                delay: autoplayDelay,
                disableOnInteraction: false,
              }
            : false
        }
        speed={1000}
        navigation={
          showNavigation
            ? {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }
            : false
        }
        pagination={
          showPagination
            ? {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
              }
            : false
        }
        breakpoints={{
          320: {
            autoplay: {
              delay: autoplayDelay - 1000,
            },
          },
          768: {
            autoplay: {
              delay: autoplayDelay,
            },
          },
        }}
        className={clsx(
          'swiper',
          'global-swiper',
          'h-full',
          'w-full'
        )}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={clsx('relative', 'h-full')}>
            <div
              className={clsx(
                'absolute',
                'inset-0',
                'bg-cover',
                'bg-center',
                'bg-no-repeat'
              )}
              style={{ backgroundImage: `url('${image}')` }}
            />
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        {showNavigation && (
          <>
            <div
              className={clsx(
                'swiper-button-next',
                'bg-brown/80',
                'hover:bg-brown'
              )}
            />
            <div
              className={clsx(
                'swiper-button-prev',
                'bg-brown/80',
                'hover:bg-brown'
              )}
            />
          </>
        )}

        {/* Pagination */}
        {showPagination && (
          <div className={clsx('swiper-pagination', 'bottom-8')} />
        )}
      </Swiper>

      {/* Decorative Elements */}
      <div
        className={clsx(
          'absolute',
          'top-0',
          'right-0',
          'w-64',
          'h-64',
          'bg-pink-light/20',
          'rounded-full',
          'blur-3xl',
          'pointer-events-none'
        )}
      />
      <div
        className={clsx(
          'absolute',
          'bottom-0',
          'left-0',
          'w-96',
          'h-96',
          'bg-brown-light/20',
          'rounded-full',
          'blur-3xl',
          'pointer-events-none'
        )}
      />
    </section>
  )
} 