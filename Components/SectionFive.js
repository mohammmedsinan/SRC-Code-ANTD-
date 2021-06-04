import React from 'react'
import {Card} from 'antd'
import {MessageOutlined} from '@ant-design/icons'
var ScrollAnim = require('rc-scroll-anim');

export default function SectionFive() {
  var ScrollParallax = ScrollAnim.Parallax;

    function reUseAble () {
        return (
            <>
                 <ScrollParallax    
                 animation={[
                 { x: 0, opacity: 0, playScale: [0, 0] },
                  { opacity:1, y:-10,  playScale: [0, 0.5] },
                  ]} style={{width:"100%"}}>
              <Card hoverable={true} className="card-five" bordered={false}>
                  <MessageOutlined style={{width:"20%" , height:"20%" , margin:"auto" , display:"block" , marginBottom:"20px" , marginTop:"10px"}}/> 
                  <p className="span-three" style={{textAlign:"center" , lineHeight:"1.1" , marginBottom:"30px"}}>Demand communication</p>
                  <p style={{fontSize:"14px" , lineHeight:"25px" , color:"rgba(49,70,89,.65)"}}>Communicating business needs, docking person: Chengfan, Yuncai communicating business needs, docking person: Chengfan, Yuncai</p> 
             </Card>
             </ScrollParallax>
            </>
        )
    }
    return (
        <div>
              <ScrollParallax    
                 animation={[
                 { x: 0, opacity: 0, playScale: [0, 0] },
                  { opacity:1, y:-10,  playScale: [0, 0.5] },
                  ]} style={{width:"100%"}}>
            <h1 style={{fontSize:"32px" , color:"#314659" , textAlign:"center"}}>manual</h1>
            <p style={{color:"#314659" , fontSize:"14px" , textAlign:"center" , lineHeight:"1px" , marginBottom:"40px"}}>The process is simple and clear, and quickly respond to demand</p>
            <div className="shs" style={{display:"flex" , justifyContent:"center"}}><p style={{fontSize:"20px" , color: "#314659" , marginRight:"20px"}}>Platform independent training process</p><p style={{color:"rgba(49,70,89,.45)" , fontSize:"20px" , marginLeft:"20px"}}>Platform independent training process</p></div>
            </ScrollParallax>
            <div className="div-five">
            {reUseAble()}
            {reUseAble()}
            {reUseAble()}
            {reUseAble()}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

