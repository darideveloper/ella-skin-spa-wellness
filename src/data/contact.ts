import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi'

export const phoneUnformatted = '+52 999 904 96 31'
export const phone = phoneUnformatted.replace(/\s/g, '').replace('+', '')

export const email = 'info@ellaskinspa.com'

export const addressElems = {
  addressLocality: 'Merida',
  addressRegion: 'Yucatan',
  addressCountry: 'Mexico',
}
export let address = ''
for (const elem in addressElems) {
  address += `${elem}: ${addressElems[elem as keyof typeof addressElems]}\n`
}

export const contactData = {
  phone: {
    icon: HiPhone,
    link: `tel:${phone}`,
  },
  email: {
    icon: HiMail,
    link: `mailto:${email}`,
  },
  location: {
    icon: HiLocationMarker,
    link: '#',
  },
  schedule: {
    icon: HiClock,
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
