// LIbs 
import clsx from 'clsx'

// Types
interface FormInputProps {
  id: string
  name: string
  type: 'text' | 'email' | 'tel' | 'password'
  label: string
  placeholder: string
  required?: boolean
  className?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
}

export default function FormInput({ 
  id, 
  name, 
  type, 
  label, 
  placeholder, 
  required = false, 
  className = '',
  value = '',
  onChange,
  disabled = false
}: FormInputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className={clsx(
          'block',
          'text-brown',
          'font-medium',
          'mb-2'
        )}
      >
        {label} {required && '*'}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          className={clsx(
            'w-full',
            'px-4',
            'py-3',
            'border-2',
            'border-brown-light/30 focus:border-brown',
            'rounded-lg',
            'text-black',
            'placeholder-brown-light/50',
            'focus:outline-none',
            'focus:ring-4',
            'focus:ring-brown/10',
            'transition-all',
            'duration-300',
            'font-sans',
            'disabled:opacity-50',
            'disabled:cursor-not-allowed',
            'disabled:bg-gray-100'
          )}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
} 