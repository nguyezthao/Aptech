import React from 'react'

type Props = { stars?: number; }

export default function Rating10({ stars = 0 }: Props) {
    return (
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return (
            <span key={index} style={{ color: item <= stars ? 'orange' : 'gray' }}>
             
            </span>
          );
        })}
      </div>
    );
  }
    