import React from 'react'
import Auto from './Auto.js'

export const NavBar = () => {
    return (        
        <header class="p-3 text-bg-dark">        
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <img src="https://png.pngtree.com/png-vector/20190512/ourlarge/pngtree-vector-car-icon-png-image_1032491.jpg" alt="Bootstrap" width="30" height="24" />
              <span class="fs-6">E-Commerce - FastFury Cars</span>
            </a>            
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><a href="/" class="nav-link px-2 text-secondary">Home</a></li>
              <li><a href="./Auto.js" class="nav-link px-2 text-white">Autos</a></li>
              <li><a href="./Camiones.js" class="nav-link px-2 text-white">Camiones</a></li>
              <li><a href="./Camionetas.js" class="nav-link px-2 text-white">Camionetas</a></li>
            </ul>
            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
            </form>    
            <div class="text-end">
              <button type="button" class="btn btn-outline-light me-2">Login</button>
            </div>
          </div>
      </header>
    )
}
