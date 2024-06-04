import React from 'react'
import './Project.css'
import program_1 from '../../assets/voicemsg.jpg'
import program_2 from '../../assets/m7.png'
import program_3 from '../../assets/m6.webp'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Project= () => {
  return (
    <div className='pgms'>
        <div className='pgm'>
       
            <img src={program_1} alt="" />
            <div className="caption">
           
            <a href=" https://github.com/shree-2023/SOS2" target="_blank" rel="noopener noreferrer">
                <img src={program_icon_2} alt="SOS app" /></a>
            <p> SOS app</p>
            </div>
        </div>
        <div className='pgm'>
            <img src={program_2} alt="" />
            <div className="caption">
            <a href="https://github.com/shree-2023/Voice_controlled_emergency_alert_system" target="_blank" rel="noopener noreferrer">
                <img src={program_icon_2} alt="Voice controlled Emergency Alert System" />
            </a>
            <p>Voice controlled Emergency Alert System</p>
            </div>

        </div>
        <div className='pgm'>
            <img src={program_3} alt="" />
            <div className="caption">
            <a href=" https://github.com/shree-2023/Food_waste_management_system" target="_blank" rel="noopener noreferrer">
                <img src={program_icon_2} alt="Food Waste Management System" /></a>
            <p> Food Waste Management System</p>
            </div>
        </div>
    </div>

  )
}

export default Project