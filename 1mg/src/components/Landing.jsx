import React, { useEffect, useState } from 'react'
import IMG from './IMG'
import db from "../db.json"
import IMG1 from './IMG1';
import IMGPart from '../Ayurvedha/IMGPart';
import Footer from '../Footer/Footer';
import Para from '../Footer/Para';
function Landing() {
  const [res,setRes]=useState();
  useEffect(()=>{
    setRes(db.data)
  },[])
    const brand=
    [ {"name":"" , 
    "arr":[
      {"id": 1,
      "img": "https://onemg.gumlet.io/image/upload/si6jrcayw9r2tricoblw.jpg ",
   "title": "Banana",
    "para":"Banana is an edible fruit which is a natural instant energy booster. It is a rich sou...",
    "price":""  
        },
        {
          "id": 2,
             "img": "https://onemg.gumlet.io/image/upload/v5ubw6epw9lliokzaqmk.jpg",
          "title": "Celery",
             "para":"Celery or Ajmoda is a plant whose leaves and stalk are commonly used as a part of a h...",
             "price":""  
         },
         {
          "id": 3,
             "img": "https://onemg.gumlet.io/image/upload/jakongv2gqhq8657tnd7.jpg",
          "title": "Jojoba",
             "para":"Jojoba is a drought resistant perennial plant and is valued for its oil yielding cap...",
             "price":""  
         },
 {
    "id": 4,
       "img": "https://onemg.gumlet.io/image/upload/vqpsqrp28m1yvhbdq7ai.jpg",
       "title": "Kidney beans",
       "para":"Kidney beans commonly known as Rajma is an important dietary food with various health...",
       "price":""  
   }   
      ]}]
       return (
        <div>
            {res?.map((item)=><div> 
             {(item.arr[0].para==="")? <IMG data={item.arr}/>: <IMG1 data={item.arr}/>}
                <div></div>
        <div class="pt-4  bg-light border clrgray ">
       <div class="d-flex container "><p class="container  fs-5 text-start" >{item.name} </p> <div class=" container  text-end "><button class="lh-sm border btn btn-danger ">SEE ALL</button></div> </div>
       </div></div>)}
       {/* <IMG/> */}
       {brand?.map((item)=><div> 
             
             <IMGPart data={item.arr}/>
              <div></div>
             <div class="pt-0  bg-light border clrgray ">
  `           <p class="container  fs-5 text-start" >{item.name} </p> <div class=" container  text-end "></div> </div>
     </div>)}
      <Para/>
        </div>
       
    )
}

export default Landing


{/* <div class="d-flex container mt-4"><p class="container px-0 pb-0 pt-3  fs-5 text-start" >Featured brands</p> <div class=" container pt-3 text-end "><button class="lh-sm border btn btn-danger ">SEE ALL</button></div> </div> */}

{/* <div class="card">      
<div>
 <h2 >hulala</h2>
  </div>
</div>
 <div class="pt-4 bg-light">
     <img width="85%" src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" alt="" /> 
 <div class="d-flex container mt-4"><p class="container px-0 pb-0 pt-3    fs-5 text-start" >Featured brands</p> <div class=" container pt-3 text-end "><button class="lh-sm border btn btn-danger ">SEE ALL</button></div> </div>
</div> */}
