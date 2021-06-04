import React from 'react'
import { Card } from 'antd';
import {IdcardOutlined} from '@ant-design/icons'

var ScrollAnim = require('rc-scroll-anim');

export default function SectionThree() {
  var ScrollParallax = ScrollAnim.Parallax;

      function reUseFunction () {
      return (   
        <ScrollParallax    animation={[
          { x: 0, opacity: 0, playScale: [0, 0] },
          { opacity:1, y:-10,  playScale: [0, 0.5] },
        ]} style={{width:"100%"}}>
         <Card className="card-class" hoverable={true}>
           <div className="div-three">
             <IdcardOutlined style={{width:"13%" , height:"13%"}}/> 
             <span className="span-three">ID Card</span>
             </div>
             <p className="p-three">Identify the front and back names of the ID card, ID card number, issuing authority and other relevant information</p>
             </Card>
         </ScrollParallax>

      )

      }
    return (

    <div style={{backgroundColor:"#f7f9fc"}}>
      
      <div style={{textAlign:"center" , padding:"70px 0px"}}>
      <ScrollParallax    
      animation={[
        { x: 0, opacity: 0, playScale: [0, 0] },
        { opacity:1, y:-10,  playScale: [0, 0.5] },
        ]} style={{width:"100%"}}>
    <h1 style={{fontSize:"42px" , color:"#314659"}}>Image online service</h1>
    <p style={{color:"#314659" , fontSize:"18px"}}>You can directly and quickly access image capabilities</p>
    </ScrollParallax>


    </div>
    <div className="changer-main" style={{display:"flex" , flexDirection:"column" , padding:"0px 130px"}}>
            <div style={{display:"flex"}} className="flex-m">
              {reUseFunction()}
              {reUseFunction()}
              {reUseFunction()}
              {reUseFunction()}
            </div>
            <div style={{display:"flex"}} className="flex-m">
            {reUseFunction()}
            {reUseFunction()}
            {reUseFunction()}
            {reUseFunction()}
            </div>
    </div>
   
    </div>
    )
}
