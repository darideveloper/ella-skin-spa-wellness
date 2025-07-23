import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { HiPhone, HiMail, HiLocationMarker, HiClock } from 'react-icons/hi'

export const phoneUnformatted = '+57 317 828 28 28'
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
    link: 'tel:+573178282828',
  },
  email: {
    icon: HiMail,
    link: 'mailto:info@ellaskinspa.com',
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
    link: '#',
    bg: 'bg-blue-600',
  },
  {
    icon: FaInstagram,
    name: 'Instagram',
    link: '#',
    bg: 'bg-gradient-to-r from-purple-500 to-pink-500',
  },
  {
    icon: FaTwitter,
    name: 'Twitter',
    link: '#',
    bg: 'bg-blue-400',
  },
  {
    icon: FaYoutube,
    name: 'YouTube',
    link: '#',
    bg: 'bg-red-600',
  },
]
