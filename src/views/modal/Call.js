import React from 'react'

export default function Call() {
  return (
    <div className='toggle_wrap'>
      <p className='tit'>전화 상담</p>
      <p className='number'>02-461-2203</p>
      <p className='sub_txt'>
        <span>전화 주시면</span>
        <span>빠른 상담</span>
        <span>가능합니다.</span>
      </p>
      <a href="tel:024612203" className='btn color_1'>전화 걸기</a>
    </div>
  )
}
