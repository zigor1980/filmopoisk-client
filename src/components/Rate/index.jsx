import React, { useState } from 'react';
import cn from 'classnames';
import './styles.css';

export default function Rate({ rate, onChange }) {
  const [rating, setRating] = useState(+rate);

  const onClick = (value) => {
    if (onChange) {
      setRating(value);
      onChange(value);
    }
  };

  return (
    <div className="rating-area">
      {[5, 4, 3, 2, 1].map((value) => (
        // eslint-disable-next-line
        <button
          type="button"
          className={cn('rate-control', {
            'rate-control--checked': value === rating,
          })}
          onClick={() => onClick(value)}
        />
      ))}
    </div>
  );
}
