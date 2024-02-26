import React, { useState, useEffect } from 'react';

const images = require.context('../../assets/images/img', false, /^\.\/partner.*\.(png|jpe?g|gif|svg)$/);
const imageFiles = images.keys().map(images);

export default function Partner() {
  return (
    <div className='slide_banner'>
      <ul className='logo_wrap slide1'>
        {
          imageFiles.map((v, i) => {
            return(
              <li key={`partner${i}`}>
                <img src={v} alt={`파트너사 로고 ${i + 1}`} />
              </li>
            )
          })
        }
      </ul>
      <ul className='logo_wrap slide2'>
        {
          imageFiles.map((v, i) => {
            return(
              <li key={`partner${i}`}>
                <img src={v} alt={`파트너사 로고 ${i + 1}`} />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
