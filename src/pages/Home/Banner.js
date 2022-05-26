import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[60vh]">
                    <img src="https://www.banglamotor.net/images/tvs/tvs-apache-rtr-160-4v-first1.jpg" className="w-full h-[60vh]"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[60vh]">
                    <img src="https://www.banglamotor.net/images/tvs/tvs-apache-rtr-160-4v-dd-image1.jpg"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[60vh]">
                    <img src="https://www.banglamotor.net/images/tvs/tvs-apache-rtr-160-4v-sd-image1.jpg" className="w-full h-[60vh]"/>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/309C6zc/Background-2.png" className="w-full h-[60vh]"/> 
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;