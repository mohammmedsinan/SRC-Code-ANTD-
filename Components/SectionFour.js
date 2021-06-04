import React from 'react'
import {Card} from 'antd'
import Ele from '../assests/Ele.png'
var ScrollAnim = require('rc-scroll-anim');

export default function SectionFour() {
    var ScrollParallax = ScrollAnim.Parallax;

    function reUseable () {

       return(
        <ScrollParallax   
        animation={[
            { x: 0, opacity: 0, playScale: [0, 0] },
            { opacity:1, y:-10,  playScale: [0, 0.5] },
          ]} style={{width:"100%"}}>
            <Card hoverable={true} className="card-four" bordered={false}>
        <div className="div-count">
            <img width="200" src={Ele}/>
            <p className="p-2">One-stop in-event risk monitoring</p>
            <p className="p-3">Prior risk control and quality control capabilities in all requirements configuration links</p>
        </div>
      </Card>
</ScrollParallax>

      )
    }
    return (
        <>
           <ScrollParallax   
        animation={[
            { x: 0, opacity: 0, playScale: [0, 0] },
            { opacity:1, y:-10,  playScale: [0, 0.5] },
          ]} style={{width:"100%"}}>
        <h1 style={{fontSize:"32px" , color:"#314659" , textAlign:"center" , margin:"70px 0px"}}>products and services</h1>
        </ScrollParallax>
        <div className="div-four">
           {reUseable()} 
           {reUseable()} 
           {reUseable()} 
           {reUseable()} 
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        
        </>
    )
}
