import React from 'react'
import Landing from './Landing'
import SimpleSlider from './SimpleSlider'

function Slide() {
    return (
        <div class="card">
         <div ><div class="d-flex border" width="100%" >
         <div class="d1" >
    
            <div >< SimpleSlider/></div>
         {/* <img height="100%" width="100%" src="https://onemg.gumlet.io/b4beeb93-c829-46fa-9700-257dc70e994f_1660819362.jpg?w=1013&h=250&format=auto"  alt="" /> */}
         </div>
         <div class="d2">
            <img height="100%" width="100%" src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/rohm7mk20fc4mairgjg0.png"  alt="" />
            </div>
       </div>
       
       <div class="border "> <h4 class="my-3  py-2 fw-normal text-secondary ">Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</h4></div>
    
       </div>
        <div class="pt-4 bg-light"><img width="85%" src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png" alt="" /> 
        <div class="d-flex container mt-4"><p class="container px-0 pb-0 pt-3  fs-5 text-start" >Featured brands</p> <div class=" container pt-3 text-end "><button class="lh-sm border btn btn-danger ">SEE ALL</button></div> </div>
   </div>
   <Landing/>
        </div>
        
    )
}

export default Slide
