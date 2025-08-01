import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi'
import type { useTranslations } from '../i18n/utils'

export const phoneUnformatted = '+52 999 904 96 31'
export const phone = phoneUnformatted.replace(/\s/g, '').replace('+', '')

export const email = 'info@ellaskinspa.com'

export const addressElems = {
  addressLocality: 'Merida',
  addressRegion: 'Yucatan',
  addressCountry: 'Mexico',
}
export let addressElemsStr = ''
for (const elem in addressElems) {
  addressElemsStr += `${elem}: ${addressElems[elem as keyof typeof addressElems]}\n`
}
export let addressText = ''
for (const elem in addressElems) {
  addressText += `${addressElems[elem as keyof typeof addressElems]} `
}

export const contactData = {
  phone: {
    icon: HiPhone,
    text: phoneUnformatted,
    link: `tel:${phone}`,
  },
  email: {
    icon: HiMail,
    text: email,
    link: `mailto:${email}`,
  },
  location: {
    icon: HiLocationMarker,
    text: addressText,
    link: '#',
  },
  schedule: {
    icon: HiClock,
    text: 'REPLACE ME WITH HOURS',
    link: '#',
  },
}

export const socialNetworks = [
  {
    icon: FaFacebook,
    name: 'Facebook',
    link: 'https://www.facebook.com/share/1BEsi7YKcE/?mibextid=wwXIfr',
    bg: 'bg-blue-600',
  },
  {
    icon: FaInstagram,
    name: 'Instagram',
    link: 'https://www.instagram.com/ella.spa.wellness?igsh=MWVnaDJqMDcwZXFmNA==',
    bg: 'bg-gradient-to-r from-purple-500 to-pink-500',
  },
  {
    icon: FaWhatsapp,
    name: 'Whatsapp',
    link: 'https://api.whatsapp.com/send?phone=5219999049631',
    bg: 'bg-green-600',
  },
]

export function getHours(t: ReturnType<typeof useTranslations>) {
  const hours = t('general.hours')
  const schedule = Object.keys(hours).map((key) => ({
    day: key,
    hours: hours[key as keyof typeof hours],
  }))
  const scheduleText = schedule.map((item) => `${item.hours}`).join('\n')
  return scheduleText
}
