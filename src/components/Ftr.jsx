import React from 'react'
import '../css components/Ftr.css'
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookCircleLine } from "react-icons/ri";
import { RiTwitterLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";
const Ftr = () => {
    return (
        <>
        <div className="container">
        <div className="footer">
            <div className='paragraph'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>

            </div>
            <div className='Icons'>
                <RiInstagramLine className="ri-instagram-line ri-2x"> </RiInstagramLine> 
                <RiFacebookCircleLine className="ri-facebook-circle-line ri-2x"></RiFacebookCircleLine>
                <RiTwitterLine className="ri-twitter-line ri-2x"></RiTwitterLine>
                <RiLinkedinLine className="ri-linkedin-line ri-2x"></RiLinkedinLine>

            </div>
        </div>
        </div>
        </>
        
    )
}
export default Ftr