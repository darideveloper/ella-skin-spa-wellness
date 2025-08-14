interface FormInputProps {
  id: string
  name: string
  type: 'text' | 'email' | 'tel' | 'password'
  label: string
  placeholder: string
  required?: boolean
  className?: string
}

export default function FormInput({ 
  id, 
  name, 
  type, 
  label, 
  placeholder, 
  required = false, 
  className = '' 
}: FormInputProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-brown font-medium mb-2"
      >
        {label} {required && '*'}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          className="w-full px-4 py-3 border-2 border-brown-light/30 rounded-lg text-black placeholder-brown-light/50 focus:outline-none focus:border-brown focus:ring-4 focus:ring-brown/10 transition-all duration-300 font-sans"
          placeholder={placeholder}
        />
      </div>
    </div>
  )
} 