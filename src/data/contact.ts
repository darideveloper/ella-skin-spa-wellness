import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi'
import type { useTranslations } from '../i18n/utils'

export const phoneUnformatted = '+52 999 904 96 31'
export const phone = phoneUnformatted.replace(/\s/g, '').replace('+', '')

export const email = 'contact@ellaskinspawellness.com'

export const addressElems = {
  streetAddress: "Cto. Colonias 118",
  addressLocality: "Mérida",
  addressRegion: "Yucatán",
  postalCode: "97100",
  addressCountry: "Mexico"
}
export let addressElemsStr = ''
for (const elem in addressElems) {
  addressElemsStr += `${elem}: ${addressElems[elem as keyof typeof addressElems]}\n`
}
export let addressText = ''
for (const elem in addressElems) {
  addressText += `${addressElems[elem as keyof typeof addressElems]} `
}
export const whatsappLink = 'https://api.whatsapp.com/send?phone=5219999049631'
export const googleMapsLink = 'https://www.google.com/maps/place/Ella+Skin+%26+Spa+Wellness/@20.9984271,-89.6168081,17.55z/data=!4m6!3m5!1s0x8f5677000543e06f:0x91d22e19a901cd73!8m2!3d20.9984621!4d-89.6152096!16s%2Fg%2F11xdk2rq0_?entry=tts&g_ep=EgoyMDI1MDczMC4wIPu8ASoASAFQAw%3D%3D&skid=e4a63d17-b165-4671-a05c-3fe93363c6c5'

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
    link: googleMapsLink,
  },
  schedule: {
    icon: HiClock,
    text: 'REPLACE ME WITH HOURS',
    link: whatsappLink,
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
    link: whatsappLink,
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
