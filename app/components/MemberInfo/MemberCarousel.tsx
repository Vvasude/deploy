'use client'
import React from 'react';
import Slider from 'react-slick';
import CarouselCard from './CarouselCard'; // Import your MemberCard component
import { Members } from './Members'; // Import your members data

const MemberCarousel: React.FC = () => {
    const settings = {
        dots: false, // Disable dots
        infinite: true, // Enables infinite scrolling
        speed: 4000, // Transition speed between slides
        slidesToShow: 3, // Number of cards to show at once
        slidesToScroll: 1, // Number of cards to scroll at once
        autoplay: true, // Enable auto sliding
        autoplaySpeed: 0, // 0 ms delay between slides for continuous movement
        cssEase: 'linear', // Linear transition for continuous movement
        pauseOnHover: true, // Pause when hovering over the carousel
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div style={{ marginBottom: '50px' }}>
            <Slider {...settings}>
                {Members.map((member, index) => (
                    <div key={index}>
                        <CarouselCard
                            logo={member.logo}
                            type={member.type} firstName={member.Firstname} lastName={member.Lastname} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MemberCarousel;
