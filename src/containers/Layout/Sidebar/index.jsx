import React from 'react';
import cn from 'classnames';
import './styles.css';

export default function Layout({ children, className }) {
  return (
    <div className={cn('sidebar', className)}>
      {children}
    </div>
  );
}
