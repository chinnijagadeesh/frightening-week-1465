import React, { useState } from 'react';

import Slider from "react-slick";



function IMG({data}) {

  const config = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
  };

  const [settings, setSettings] = useState(config);

   return (
    <div class="padding1 ">
        <Slider   {...settings}>{data.map((x, i) => {
        return <div   key={i} classname="img-card" class="py-2  boxhgt">
        <div  class="card-body  ">
         <div classname="card-title "><img  class="container"  src={x.img} /></div> 
         </div>
        <div class="boxhgt2   p1fnt"> <div classname="card-title " >{x.title}</div>
            </div>
        </div>
      }
       
      )}
  </Slider>
    
    </div>
  );
}
export default IMG

