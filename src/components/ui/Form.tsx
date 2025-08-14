// Libs
import clsx from 'clsx'
import { useState } from 'react'
import { useTranslations } from '../../i18n/utils'
import { submitLead } from '../../libs/apis/leads'
import Swal from 'sweetalert2'

// Styles
import 'sweetalert2/dist/sweetalert2.min.css'

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

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof LeadData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await submitLead(lang, formData)
      
      // Show success message
      await Swal.fire({
        icon: 'success',
        title: t('contact.form.success.title') || 'Message Sent Successfully!',
        text: t('contact.form.success.message') || 'Thank you for contacting us. We will get back to you soon!',
        confirmButtonText: t('contact.form.success.button') || 'OK',
        confirmButtonColor: '#8B4513', // brown color
        timer: 5000,
        timerProgressBar: true,
      })
      
      // Reset form after successful submission
      resetForm()
      
    } catch (error) {
      console.error('Error submitting lead:', error)
      
      // Show error message
      await Swal.fire({
        icon: 'error',
        title: t('contact.form.error.title') || 'Submission Failed',
        text: t('contact.form.error.message') || 'Sorry, there was an error sending your message. Please try again.',
        confirmButtonText: t('contact.form.error.button') || 'Try Again',
        confirmButtonColor: '#DC2626', // red color
      })
    } finally {
      setIsSubmitting(false)
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
        disabled={isSubmitting}
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
        disabled={isSubmitting}
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
        disabled={isSubmitting}
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
        disabled={isSubmitting}
      />

      {/* Submit Button */}
      <button
        type='submit'
        disabled={isSubmitting}
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
          'hover:cursor-pointer',
          'disabled:opacity-50',
          'disabled:cursor-not-allowed',
          'disabled:transform-none'
        )}
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            <span>{t('contact.form.submitting') || 'Sending...'}</span>
          </>
        ) : (
          <>
            <span>{t('contact.form.submit')}</span>
            <HiPaperAirplane className='w-5 h-5' />
          </>
        )}
      </button>
    </form>
  )
}
