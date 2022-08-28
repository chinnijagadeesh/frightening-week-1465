import React from 'react'

function Navbar() {
    return (
        <div>
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
</nav>
        </div>
    )
}

export default Navbar
