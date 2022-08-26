
import React, { useState } from 'react';

import Slider from "react-slick";



function IMG1({data}) {

  const config = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
  };

  const [settings, setSettings] = useState(config);

   return (
    <div class="padding ">
      <Slider  class=""  {...settings}>{data.map((x, i) => {
        return <div   key={i} classname="img-card " class=" boxhgt">
        <div  class="card-body boxhgt1  text-start ">
         <div class="" classname="card-title "><img  class="container width1"  src={x.img} /></div> 
         </div>
        <div class="text-start px-2 pb-4"> <div classname="card-title  " class="  p1fnt">{x.title}</div>
            <div classname="card-title  " class="pt-2 sm">{x.para}</div>
            <div classname="card-title  " class="py-1 sm">{x.para1}</div>
            <div classname="card-title  " class="fw-semibold   lr">₹{x.price}</div></div>
        </div>
      }
       
      )}
  </Slider>


    
    </div>
  );
}

export default IMG1

