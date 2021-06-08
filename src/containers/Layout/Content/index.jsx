import React from 'react';
import './styles.css';
import cn from 'classnames';

export default function Content({ children, className }) {
  return (
    <div className={cn('content', className)}>
      {children}
    </div>
  );
}
