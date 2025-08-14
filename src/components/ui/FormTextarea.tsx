interface FormTextareaProps {
  id: string
  name: string
  label: string
  placeholder: string
  rows?: number
  required?: boolean
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export default function FormTextarea({ 
  id, 
  name, 
  label, 
  placeholder, 
  rows = 4, 
  required = false, 
  className = '',
  value = '',
  onChange
}: FormTextareaProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="block text-brown font-medium mb-2"
      >
        {label} {required && '*'}
      </label>
      <div className="relative">
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full px-4 py-3 border-2 border-brown-light/30 rounded-lg text-black placeholder-brown-light/50 focus:outline-none focus:border-brown focus:ring-4 focus:ring-brown/10 transition-all duration-300 font-sans resize-none"
          placeholder={placeholder}
        />
      </div>
    </div>
  )
} 