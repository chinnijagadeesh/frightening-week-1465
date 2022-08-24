// import React, { Component } from "react";
import Slider from "react-slick";
 const SimpleSlider=()=> {
     {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      const Prod=["https://onemg.gumlet.io/b4beeb93-c829-46fa-9700-257dc70e994f_1660819362.jpg?w=1013&h=250&format=auto","https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/sxic0awb3dpfpickvjlk.png","https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/a7v2ipno4azmdu6cnjuu.png","https://onemg.gumlet.io/a_ignore,w_1013,h_250,c_fit,q_auto,f_auto/kcdcsb5yrkpxok5bpm8y.png","https://onemg.gumlet.io/d46e2c6b-983c-464b-a792-cffd78ac48df_1660808836.png?w=1013&h=250&format=auto",
    "https://onemg.gumlet.io/66498119-a57c-4d84-9ff6-6b66210ed1ca_1660816191.jpg?w=1013&h=250&format=auto"] 
      return (
        <div>
          <Slider {...settings}>{Prod.map((item)=><div> <img width="100%"  class=" " src={item}  alt="" />
           </div>)}
          
          </Slider>
        </div>
      );
    }
  }
  export default SimpleSlider

//   <img height="100%" width="100%" src="https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/rohm7mk20fc4mairgjg0.png"  alt="" />
           