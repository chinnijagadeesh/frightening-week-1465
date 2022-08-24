import React from 'react'


 function Navbar() {
    return (
<div >

 <nav class=" navbar-expand ">
  <div class="container-fluid border ">
    <div class="collapse navbar-collapse " id="navbarNav">

      <ul class="navbar-nav p-2">
        <li>
        <img  class="navbar-brand mt-1 " src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="" width={"100px"} /></li>
        <li class="nav-item active">
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
        <li class="nav-item">
          <a class="nav-link fw-bolder mx-4"  href='/'>AYURVEDA</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fw-bolder "  href='/'>CARE PLAN <span class="btn py-0 px-2 mb-2 btn-danger save">SAVE MORE</span></a>
        </li>
       </ul>

      </div>                                      
    </div>




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

{/*           
         <li><div class="dropdown">
         <a class="nav-link dropdown-toggle dropdown" href="/"> Dropdown </a>
  <div class="dropdown-content">
    <li><a class="dropdown-item py-0 px-2" href="/">Link 1</a></li>
    <a href="/">Link 2</a>
    <a href="/">Link 3</a>
  </div>
</div></li> */}
        </ul>
      
  </div>
  </nav>
  {/* <!-- Navbar --> */}
{/* </section> */}

    </div>
    )
}

export default Navbar
