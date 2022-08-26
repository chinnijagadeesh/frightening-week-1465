import { useState } from "react";
import Slider from "react-slick";
function IMGPart({data}) {

     
  const config = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
console.log(data)
  const [settings, setSettings] = useState(config);

   return (
    <div class="AyurvedCont ">
        <Slider   {...settings}>{data.map((x, i) => {
        return <div   key={i} classname="img-card border    " class=" Ayurvedha">
        <div  class="card-body text-start  px-0 py-0">
         <div classname="card-title "><img class="container px-0 ps-0 "  src={x.img} /></div> 
        <div class="m-2"> <div classname="card-title ">{x.title}</div> 
         <div classname="card-title " class="py-1 sm">{x.para}</div> </div>
         </div>
       
        </div>
      }
       
      )}
  </Slider>
    
    </div>
  );
}
export default IMGPart

