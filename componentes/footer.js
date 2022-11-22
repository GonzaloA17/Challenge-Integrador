import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    return (
        <div>           
            <div class="footer">
                <footer class="py-3 my-4">
                    <ul class="nav footer border-bottom pb-1 mb-1 h-100">
                        <li class="nav-item"><a href="#" class="nav-link px-2 py-2 text-muted">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 py-2 text-muted">Contactenos</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 py-2 text-muted">Acerca de Nosotros</a></li>
                        
                        <li class="nav-item" className='icons'><img src="./Img/facebook.png" alt="Facebook" width="30" height="25" /><a href="#" class="nav-link px-2 py-0 text-muted"></a></li>
                        
                        <li class="nav-item" className='icons'><img src="./Img/Instagram.png" alt="Instagram" width="35" height="29" /><a href="#" class="nav-link px-2 py-0 text-muted"></a></li>

                        <li class="nav-item" className='icons'><img src="./Img/twitter.png" alt="Twitter" width="30" height="25" /><a href="#" class="nav-link px-2 py-0 text-muted"></a></li>
                    </ul> 
                    <p class="text-center text-muted">&copy; 2022 Gonzalo Ordoñez</p>
                </footer>
            </div>
        </div>

        
    )


}

export default Footer