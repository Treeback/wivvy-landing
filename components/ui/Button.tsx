import { ButtonHTMLAttributes, FC } from 'react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button: FC<ButtonProps> = ({ 
  children, 
  className, 
  variant = 'primary', 
  size = 'md',
  ...props 
}) => {
  return (
    <button
      className={twMerge(clsx(
        'font-medium rounded-lg transition-all duration-200 relative overflow-hidden',
        {
          'bg-gradient-to-r from-wivvy-blue to-wivvy-blue-light text-white hover:shadow-lg hover:scale-105 glow-blue': variant === 'primary',
          'bg-transparent text-white border border-wivvy-blue hover:bg-wivvy-blue/10': variant === 'secondary',
          'bg-transparent text-gray-400 hover:text-white': variant === 'ghost',
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      ))}
      {...props}
    >
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  )
}

export default Button