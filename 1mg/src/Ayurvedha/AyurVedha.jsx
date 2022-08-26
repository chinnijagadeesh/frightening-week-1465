import React, { useEffect, useState } from 'react'
import DropDown from '../components/DropDown'
import Landing from '../components/Landing'
import NavbarTop from '../components/NavbarTop'
import IMGPart from './IMGPart'
import db from "../db.json"
import Footer from '../Footer/Footer'
function AyurVedha() {
  

      const [res,setRes]=useState();
      useEffect(()=>{
        setRes(db.data1)
      },[])
    const brand=
    [{name:"Full body health checkups" , 
    arr:[
        {
          img: 'https://onemg.gumlet.io/image/upload/sdzsl07upy0u3sxckqyj.jpg',
          title: 'Zandu',
      
        },
        {
          img: 'https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/mb8c6ozhfjz7uo8fveoh.png',
          title: 'Sri Sri Tattva',
      
        },
        {
          img: 'https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/zdpovu5qoqj7snzwwk0l.png',
          title: 'HealthVit',
          
        },
        {
          img: 'https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/sojsfqsqrtwqgdpg5jlc.png',
          title: 'Dr Willmar Schwabe India',
          
        },
        {
          img: 'https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/jk8ruwbfjbg17qteedfc.png',
          title: "Dr. Vaidya's",
          
        },
        {
          img: 'https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/lhy8nkmahfcuzgdt0wov.png',
          title: 'Dr. Morepen',
          
        },
        {
          img: 'https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/czkmcjsgoq9ysbbk4a4l.jpg',
          title: 'Baidyanath(Nagpur)',
          
        },
        {
          img: 'https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/mlns0jugfaleyccybiag.png',
          title: 'Skore',
          
        },
        {
          img: 'https://onemg.gumlet.io/a_ignore,w_150,h_150,c_fit,q_auto,f_auto/wnm3oezecpq5dt9g8qpd.jpg',
          title: 'Vicks',
          
        }
      ]}]
    return (
        <div>
              <nav class=" navbar-expand ">
              <div class="container-fluid border ">
    <div class="collapse navbar-collapse " id="navbarNav">

      <ul class="navbar-nav p-2">
        <li>
        <img  class="navbar-brand mt-1 " src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="" width={"100px"} /></li>
        <li class="nav-item ">
          <a class="nav-link fw-bolder mx-4" aria-current="page" href="/">MEDICINES</a>
        </li>
        <li  class="nav-item ">
          <a class="fw-bolder nav-link " href="/">LAB TESTS <span class="btn py-0 px-2 mb-2 btn-danger save">SAFE</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bolder mx-4" href="/"> CONSULT DOCTORS </a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bolder" href='/'>COVID-19</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link fw-bolder mx-4"  href='/'>AYURVEDA</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bolder "  href='/'>CARE PLAN <span class="btn py-0 px-2 mb-2 btn-danger save">SAVE MORE</span></a>
        </li>
       </ul>

      </div>                                      
    </div>
              </nav>
              <DropDown/>
         <div ><img src="https://onemg.gumlet.io/marketing/bjlo9q3qyxkh7bkhypiz.png" width="100%" alt="" />
            <div class="pt-4  bg-light border clrgray ">
            <p class="container  fs-5 text-start" >Featured Herbs</p> <div class=" container  text-end "></div>
       </div></div>
            
        <div>
            {res?.map((item)=><div> 
             
               <IMGPart data={item.arr}/>
                <div></div>
               <div class="pt-2   bg-light border clrgray ">
    `           <p class="container  fs-5 text-start" >{item.name} </p> <div class=" container  text-end "></div> </div>
       </div>)}
        </div>
        <Footer/>
        </div>
    )
}

export default AyurVedha
