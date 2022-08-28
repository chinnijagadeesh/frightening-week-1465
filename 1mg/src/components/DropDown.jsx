import React from 'react'
import Navbar from './Navbar'

 function DropDown() {
    return (
     <div >
  <Navbar/>
 <nav class=" navbar-expand ">
       <div class="container-fluid border ">
        <ul class="navbar-nav p-2 px-3">
                                                                                                                  {/* <!-- Dropdown menu2 --> */}
               <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle dropdown  " href="/"> Health Resource Center </a>
            <ul class="dropdown-menu dropdown-content  " >
              <li><a class="dropdown-item py-0 px-2 fw-semibold" href="/">All Diseases</a></li>
              <li><a class="dropdown-item py-0 px-2 fw-semibold" href="/">All Medicines</a></li>
              <li><a class="dropdown-item py-0 px-2 fw-semibold" href="/">Medicines by Therapeutic Class</a></li>
            </ul>
          </li>

          
                                                                                                                {/* <!-- Dropdown menu2 --> */}
         <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle dropdown " href="/"> Vitamins & Nutrition </a>
            <ul class="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item py-0 px-2 fw-semibold" href="/">Action</a></li>
              <li><a class="dropdown-item py-0 px-2 fw-semibold" href="/">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item py-0 px-2 fw-semibold" href="/">Something else here</a></li>
            </ul>
          </li>

                                                                                                         {/* <!-- Dropdown menu2 --> */}
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle dropdown" href="/">Diabetes</a>
            <ul class="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
              <li ><a class="dropdown-item py-0 px-2 fw-semibold " href="/">action</a></li>
              <li><a class="dropdown-item py-0 px-2 fw-semibold" href="/">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item py-0 px-2 fw-semibold " href="/">Something else here</a><ul><li  class="dropdown-item px-0">ls</li></ul></li>
            </ul>
          </li>

                                                                                                       {/* <!-- Dropdown menu2 --> */}
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle dropdown" href="/">Healthcare Devices</a>
            <ul class="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
              <li ><a class="dropdown-item py-0 px-2 fw-semibold " href="/">action</a></li>
               </ul>
          </li>
                                                                                                     {/* <!-- Dropdown menu2 --> */}
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle dropdown" href="/">Personal Care</a>
            <ul class="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
              <li ><a class="dropdown-item py-0 px-2 fw-semibold " href="/">action</a></li>
               </ul>
          </li>
                                                                                                     {/* <!-- Dropdown menu2 --> */}
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle dropdown" href="/">Health Conditions</a>
            <ul class="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
              <li ><a class="dropdown-item py-0 px-2 fw-semibold " href="/">action</a></li>
               </ul>
          </li>

                                                                                                      {/* <!-- Dropdown menu2 --> */}
                                                                                                      <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle dropdown" href="/">Ayurveda Products</a>
            <ul class="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
              <li ><a class="dropdown-item py-0 px-2 fw-semibold " href="/">action</a></li>
               </ul>
          </li>
                                                                                                      {/* <!-- Dropdown menu2 --> */}
                                                                                                      <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle dropdown" href="/">Homeopathy</a>
            <ul class="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
              <li ><a class="dropdown-item py-0 px-2 fw-semibold " href="/">action</a></li>
               </ul>
          </li>
                                                                                                      {/* <!-- Dropdown menu2 --> */}
                                                                                                      <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle dropdown" href="/">Featured</a>
            <ul class="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
              <li ><a class="dropdown-item py-0 px-2 fw-semibold " href="/">action</a></li>
               </ul>
          </li>
                                                                                                      {/* Dropdown menu2       */}
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle dropdown" href="/">Covid Essentials</a>
            <ul class="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
              <li ><a class="dropdown-item py-1 px-2 fw-semibold " href="/">Covid-19 Self test kits</a></li>
               <li ><a class="dropdown-item py-0 px-2 fw-semibold " href="/">Oxygen Cans & Concentrators</a></li>
              <li ><a class="dropdown-item py-1 px-2 fw-semibold " href="/">Masks</a></li>
              <li ><a class="dropdown-item py-0 px-2 fw-semibold " href="/">Sanitizers & Handwash Products</a></li>
              <li ><a class="dropdown-item py-1 px-2 fw-semibold " href="/">Support Your Immunity</a></li>
              <li ><a class="dropdown-item py-0 px-2 fw-semibold " href="/">Thermometer</a></li>
              <li ><a class="dropdown-item py-1 px-2 fw-semibold " href="/">Chyawanprash</a></li>
               </ul>
          </li>


        </ul>
      
  </div>
  </nav> 
    </div>
    )
}

export default DropDown
