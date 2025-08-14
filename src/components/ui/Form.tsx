import { HiPaperAirplane } from 'react-icons/hi'
import { useTranslations } from '../../i18n/utils'
import FormInput from './FormInput.tsx'
import FormTextarea from './FormTextarea.tsx'

interface FormProps {
  lang: string
}

export default function Form({ lang }: FormProps) {
  const t = useTranslations(lang as 'en' | 'es')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Field */}
      <FormInput
        id="name"
        name="name"
        type="text"
        label={t('contact.form.name')}
        placeholder={t('contact.form.placeholder.name')}
        required={true}
      />

      {/* Email Field */}
      <FormInput
        id="email"
        name="email"
        type="email"
        label={t('contact.form.email')}
        placeholder={t('contact.form.placeholder.email')}
        required={true}
      />

      {/* Phone Field */}
      <FormInput
        id="phone"
        name="phone"
        type="tel"
        label={t('contact.form.phone')}
        placeholder={t('contact.form.placeholder.phone')}
        required={true}
      />

      {/* Message Field */}
      <FormTextarea
        id="message"
        name="message"
        label={t('contact.form.message')}
        placeholder={t('contact.form.placeholder.message')}
        rows={4}
      />

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-brown text-white px-8 py-4 rounded-xl font-sans font-semibold text-lg shadow-lg hover:bg-brown-light transform hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brown/20 flex items-center justify-center space-x-2"
      >
        <span>{t('contact.form.submit')}</span>
        <HiPaperAirplane className="w-5 h-5" />
      </button>
    </form>
  )
} 