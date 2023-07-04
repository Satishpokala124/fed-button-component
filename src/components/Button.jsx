import React from 'react';

export default function Button({
  text = 'Default',
  startIcon = null,
  endIcon = null,
  variant = 'default',
  color = 'default',
  size = 'md',
  disableShadow = false,
  disabled = false,
}) {
  const sizes = {
    sm: 'px-[.75rem] py-[.375rem]',
    md: 'px-4 py-2',
    lg: 'px-[1.375rem] py-[.75rem]',
  };

  const options = {
    default: {
      default: 'text-black bg-neutral-200 hover:bg-zinc-400 focus:bg-zinc-400',
      primary: 'text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700',
      secondary: 'text-white bg-slate-600 hover:bg-slate-800 focus:bg-slate-800',
      danger: 'text-white bg-red-600 hover:bg-red-800 focus:bg-red-800',
    },
    outline: {
      default: 'text-black border border-neutral-600 bg-white hover:bg-zinc-200 focus:bg-zinc-200',
      primary: 'text-blue-600 border border-blue-600 bg-white hover:bg-blue-100 focus:bg-blue-100',
      secondary:
        'text-slate-800 border border-slate-600 bg-white hover:bg-slate-200 focus:bg-slate-200',
      danger: 'text-red-600 border border-red-600 bg-white hover:bg-red-100 focus:bg-red-100',
    },
    text: {
      default: 'text-black bg-white hover:bg-zinc-200 focus:bg-zinc-200',
      primary: 'text-blue-600 bg-white hover:bg-blue-100 focus:bg-blue-100',
      secondary: 'text-slate-800 bg-white hover:bg-slate-200 focus:bg-slate-200',
      danger: 'text-red-600 bg-white hover:bg-red-100 focus:bg-red-100',
    },
  };

  return (
    <button
      className={`transition-all ${sizes[size]} rounded-md ${!disableShadow && 'shadow-md'} ${
        disabled
          ? `text-neutral-400 cursor-not-allowed ${variant !== 'text' && 'bg-neutral-200'}`
          : `${options[variant][color]}`
      }`}
    >
      <div className='flex gap-x-2'>
        {startIcon && <span className='material-icons'>{startIcon}</span>}
        <span>{text}</span>
        {endIcon && <span className='material-icons'>{endIcon}</span>}
      </div>
    </button>
  );
}
