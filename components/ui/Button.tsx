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
        'font-medium rounded-md transition-colors duration-150',
        {
          'bg-[#8B5CF6] hover:bg-[#9F6FFA] text-white': variant === 'primary',
          'bg-[#1A1A1A] border border-[#2A2A2A] hover:bg-[#2A2A2A] hover:border-[#3A3A3A] text-white': variant === 'secondary',
          'bg-transparent text-gray-400 hover:text-white': variant === 'ghost',
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-sm': size === 'md',
          'px-6 py-2.5 text-base': size === 'lg',
        },
        className
      ))}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button