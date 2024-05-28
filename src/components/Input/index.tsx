import React from 'react';

import styles from './Input.module.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<Props> = (
  {
    className,
    children,
    ...props
  }) => {
  return (
    <input
      className={`${styles.input} ${className}`}
      {...props}
    >
      {children}
    </input>
  )
}
