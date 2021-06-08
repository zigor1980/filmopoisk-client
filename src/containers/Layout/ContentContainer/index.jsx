import React from 'react';
import './styles.css';
import cn from 'classnames';

export default function ContentContainer({ children, className }) {
  return (

    <div className={cn('container', className)}>
      {children}
    </div>
  );
}
