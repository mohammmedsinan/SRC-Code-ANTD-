import React from 'react'
import { Tabs } from 'antd';
import { OverPack } from 'rc-scroll-anim';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import {FirstCondtion , SeconedConstion , ThieardCondtion} from './NumberComp'

const { TabPane } = Tabs;

export default function SectionTwo() {

  function reuse (e) {
   return ( 
   <OverPack style={{ overflow: 'hidden'}} playScale={[0.2,0.1]} >
    <TweenOne key="2" className="code-box-shape"  style={{ opacity: 0, marginBottom: 10 }} />
    <QueueAnim key="queue" leaveReverse > {e} </QueueAnim></OverPack>  )}


    return (
        <div >
<Tabs defaultActiveKey="1" centered>

<TabPane tab="Service index" key="1" style={{ padding:"0px 140px" }}>
   
         {reuse( <div key="a1"><span style={{textAlign:"center",fontSize:"48px" , color:"#2f54eb" , fontWeight:"600"}}><FirstCondtion /></span> <span style={{textAlign:"center" , color:"#2f54eb"}}>million</span> <p style={{color:"#314659" , lineHeight:1.5 , fontSize:"20px" , textAlign:"center"}}>modal data</p></div>)}
      
         {reuse( <div key="a1"><span style={{textAlign:"center",fontSize:"48px" , color:"#2f54eb" , fontWeight:"600"}}><SeconedConstion /></span> <span style={{textAlign:"center" , color:"#2f54eb"}}>million</span> <p style={{color:"#314659" , lineHeight:1.5 , fontSize:"20px" , textAlign:"center"}}>modal data</p></div>)}
 
         {reuse( <div key="a1"><span style={{textAlign:"center",fontSize:"48px" , color:"#2f54eb" , fontWeight:"600"}}><ThieardCondtion /></span> <span style={{textAlign:"center" , color:"#2f54eb"}}>million</span> <p style={{color:"#314659" , lineHeight:1.5 , fontSize:"20px" , textAlign:"center"}}>modal data</p></div>)}

</TabPane> 

{/*==================================================================================================================*/}
    {/* <TabPane key="a2"></TabPane>
    <TabPane key="b2"></TabPane>
    <TabPane key="c2"></TabPane>
    <TabPane key="d2"></TabPane> */}
{/*==================================================================================================================*/}

<TabPane tab="Service index" key="2" style={{ padding:"0px 140px" }}>
  {reuse(<div key="a1" ><span style={{fontSize:"48px" , color:"#2f54eb" , fontWeight:"600"}}><FirstCondtion /></span> <span style={{ color:"#2f54eb"}}>million</span> <p style={{color:"#314659" , lineHeight:1.5 , fontSize:"20px"}}>modal data</p></div>)}
        
  {reuse(<div key="a1" ><span style={{fontSize:"48px" , color:"#2f54eb" , fontWeight:"600"}}><SeconedConstion /></span> <span style={{ color:"#2f54eb"}}>million</span> <p style={{color:"#314659" , lineHeight:1.5 , fontSize:"20px"}}>modal data</p></div>)}

  {reuse(<div key="a1" ><span style={{fontSize:"48px" , color:"#2f54eb" , fontWeight:"600"}}><ThieardCondtion /></span> <span style={{ color:"#2f54eb"}}>million</span> <p style={{color:"#314659" , lineHeight:1.5 , fontSize:"20px"}}>modal data</p></div>)}

</TabPane> 

</Tabs>
    
    </div>
    )
}
