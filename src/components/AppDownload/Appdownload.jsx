import React from 'react'
import "./Appdownload.css"
import { assets } from '../../assets/frontend_assets/assets'
const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
     <p>For Better Experience Download <br/> Crave App</p> 
     <div className='app-download-platfrom'>
         <img src={assets.play_store}alt='apple' />
         <img src={assets.app_store} alt='google' />
     </div>
    </div>
  )
}

export default Appdownload
