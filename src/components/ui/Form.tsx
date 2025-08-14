// Libs
import clsx from 'clsx'
import { useState } from 'react'
import { useTranslations } from '../../i18n/utils'
import { submitLead } from '../../libs/apis/leads'

// Icons
import { HiPaperAirplane } from 'react-icons/hi'

// Components
import FormInput from './FormInput.tsx'
import FormTextarea from './FormTextarea.tsx'

// Types
import type { LeadData } from '../../types/lead.ts'

interface FormProps {
  lang: string
}

export default function Form({ lang }: FormProps) {
  const t = useTranslations(lang as 'en' | 'es')

  const [formData, setFormData] = useState<LeadData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleInputChange = (field: keyof LeadData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted with data:', formData)

    try {
      await submitLead(lang, formData)
    } catch (error) {
      console.error('Error submitting lead:', error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-6'
    >
      {/* Name Field */}
      <FormInput
        id='name'
        name='name'
        type='text'
        label={t('contact.form.name')}
        placeholder={t('contact.form.placeholder.name')}
        required={true}
        value={formData.name}
        onChange={(value) => handleInputChange('name', value)}
      />

      {/* Email Field */}
      <FormInput
        id='email'
        name='email'
        type='email'
        label={t('contact.form.email')}
        placeholder={t('contact.form.placeholder.email')}
        required={true}
        value={formData.email}
        onChange={(value) => handleInputChange('email', value)}
      />

      {/* Phone Field */}
      <FormInput
        id='phone'
        name='phone'
        type='tel'
        label={t('contact.form.phone')}
        placeholder={t('contact.form.placeholder.phone')}
        required={true}
        value={formData.phone}
        onChange={(value) => handleInputChange('phone', value)}
      />

      {/* Message Field */}
      <FormTextarea
        id='message'
        name='message'
        label={t('contact.form.message')}
        placeholder={t('contact.form.placeholder.message')}
        rows={4}
        value={formData.message}
        onChange={(value) => handleInputChange('message', value)}
      />

      {/* Submit Button */}
      <button
        type='submit'
        className={clsx(
          'w-full',
          'bg-brown hover:bg-brown-light',
          'text-white',
          'px-8',
          'py-4',
          'rounded-xl',
          'font-sans',
          'font-semibold',
          'text-lg',
          'shadow-lg',
          'transform',
          'hover:scale-[1.02]',
          'transition-all',
          'duration-300',
          'focus:outline-none',
          'focus:ring-4',
          'focus:ring-brown/20',
          'flex',
          'items-center',
          'justify-center',
          'space-x-2',
          'hover:cursor-pointer'
        )}
      >
        <span>{t('contact.form.submit')}</span>
        <HiPaperAirplane className='w-5 h-5' />
      </button>
    </form>
  )
}
