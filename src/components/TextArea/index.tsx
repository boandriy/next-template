import React from 'react';
import styles from './TextArea.module.scss';


interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: React.FC<Props> = (
  {
    className,
    children,
    ...props
  }) => {
  return (
    <textarea
      className={`${className} ${styles.textArea}`}
      {...props}
    >
      {children}
    </textarea>
  )
}

export default TextArea;
