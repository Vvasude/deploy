'use client'
import React from 'react';
import Slider from 'react-slick';
import MemberCard from './CarouselCard'; // Import your MemberCard component
import { Members } from './Members'; // Import your members data

const MemberCarousel: React.FC = () => {
    const settings = {
        dots: false, // Disable dots
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Number of cards to show at once
        slidesToScroll: 1, // Number of cards to scroll at once
        autoplay: true, // Enable auto sliding
        autoplaySpeed: 3000, // Time between slides in ms (3 seconds here)
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
                        <MemberCard
                            firstName={member.Firstname}
                            lastName={member.Lastname}
                            logo={member.logo}
                            type={member.type}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MemberCarousel;
