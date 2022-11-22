import React from "react";


const Carousel = () => {

    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./Img/Collage1.jpg" class="d-block w-100" height={400}  alt="Autos"/>
                    </div>
                    <div class="carousel-item">
                        <img src="./Img/Collage2.jpg" class="d-block w-100" height={400} alt="Autos"/>
                    </div>
                    <div class="carousel-item">
                        <img src="./Img/Collage3.jpg" class="d-block w-100" height={400} alt="Autos"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>


        </div>


    )

}

export default Carousel