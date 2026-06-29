import { forwardRef, type InputHTMLAttributes } from 'react'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, id, className = '', ...props }, ref) => {
    const inputId = id ?? props.name

    return (
      <div>
        <label htmlFor={inputId} className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`w-full px-4 py-2.5 rounded-xl bg-black/5 dark:bg-white/5 border text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-brand-500 transition ${
            error ? 'border-red-500/50' : 'border-[var(--border)]'
          } ${className}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)
FormInput.displayName = 'FormInput'
