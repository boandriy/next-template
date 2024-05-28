import React from 'react';

import styles from './Button.module.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = (
  {
    className,
    children,
    ...props
  }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
