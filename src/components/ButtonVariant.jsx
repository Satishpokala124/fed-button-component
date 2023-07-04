import React from 'react';

export default function ButtonVariant({ text, children }) {
  return (
    <div>
      <p className='text-xs mb-3'>{text}</p>
      <section>{children}</section>
    </div>
  );
}
