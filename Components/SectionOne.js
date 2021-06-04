import Layout from 'antd/lib/layout/layout'
import React from 'react'
import {Button } from 'antd'
import hero from '../assests/hero.png'

export default function SectionOne() {
    return (
        <Layout className="layout-section-one"style={{ backgroundColor:"white" , display:"flex" , flexDirection:"row" , justifyContent:"space-around" , alignItems:"center" , padding:"60px"}}>
            <div className="pog" style={{height:"400px"}}>
                <p style={{color:"#5f9bf1" , fontSize:"48px" , marginBottom:"20px" , fontWeight:"bold"}}>Proudct Name</p>
                <p style={{color:"#333" , fontSize:"24px" , marginBottom:"20px"}}>Product slogan introduction</p>
                <p style={{color:"#666" , fontSize:"18px"}}>A detailed description of the product, such as text</p>
                <Button className="shadowPop" type="primary" shape="round" size={'large'} style={{fontSize:"13px", padding:"10px 40px" }}> Start using </Button>
            </div>
            <div>
                <img className="img-hero"src={hero} style={{marginTop:"0px"}}/>
            </div>
        </Layout>
    )
}
