import React, { useState } from 'react'
import Call from '../views/modal/Call';

export default function Sidebar() {
  let [call, setCall] = useState(false);
  return (
    <section id='sidebar'>
      <div className='side_wrap'>
        <div className='call_wrap'>
          <button className='quick_btn' onClick={() => {setCall(!call)}}>
            <span className='name'>전화상담 안내</span>
          </button>
          {call === true ? <Call/> : null}
        </div>
      </div>
    </section>
  )
}
