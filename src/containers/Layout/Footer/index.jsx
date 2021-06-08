import React from 'react';
import cn from 'classnames';
import './styles.css';

export default function Footer({ children, className }) {
  return (
    <div className={cn('footer', className)}>
      {children}
    </div>
  );
}
