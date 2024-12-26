import React, { useRef, useState } from 'react';
// Importing Swiper React components to create the carousel effect for testimonials
import { Swiper, SwiperSlide } from 'swiper/react';

// Importing Swiper styles for styling the carousel
import 'swiper/css';
import 'swiper/css/pagination';

// Importing necessary Swiper modules for autoplay and pagination functionality
import { Autoplay, Pagination } from 'swiper/modules';
// Importing icons from lucide-react for the quote and star symbols
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {

    // Array of testimonials data
    const testimonials = [
        {
            id: 1,
            name: "Emily Johnson",
            rating: 5,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!"
        },
        {
            id: 2,
            name: "Michael Chen",
            rating: 4,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!"
        },
        {
            id: 3,
            name: "Sarah Thompson",
            rating: 5,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!"
        },
        {
            id: 4,
            name: "David Rodriguez",
            rating: 5,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!"
        },
        {
            id: 5,
            name: "Lisa Patel",
            rating: 4,
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa dolor, voluptatibus quos ipsam et est!"
        }
    ];

    return (
        <div id='testimonials' className='py-10 bg-gray-100 relative'>
            {/* Section wrapper with padding and background color for the testimonials section */}
            <h1 className='text-center text-2xl lg:text-4xl font-bold'>
                {/* Heading for the testimonials section */}
                What our Customer Say
            </h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                {/* Container for the swiper component with responsive padding */}

                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",  // Customizing pagination color
                        "--swiper-pagination-bullet-inactive-color": "#999999",  // Inactive bullet color
                        "--swiper-pagination-bullet-inactive-opacity": "1",  // Inactive bullet opacity
                        "--swiper-pagination-bullet-size": "10px",  // Bullet size
                        "--swiper-pagination-bullet-horizontal-gap": "6px",  // Gap between bullets
                    }}
                    modules={[Pagination, Autoplay]}  // Importing pagination and autoplay modules from Swiper
                    loop={true}  // Enabling looping of slides
                    speed={600}  // Setting the speed of slide transitions (in milliseconds)
                    autoplay={{ delay: 5000 }}  // Autoplay with a delay of 5 seconds between slide changes
                    slidesPerView={3}  // Number of slides shown at once on large screens
                    spaceBetween={30}  // Space between slides
                    breakpoints={{
                        // Responsive settings for different screen sizes
                        320: { slidesPerView: 1 },  // 1 slide per view for small screens
                        480: { slidesPerView: 1 },  // 1 slide per view for medium-small screens
                        768: { slidesPerView: 2 },  // 2 slides per view for tablets
                        1024: { slidesPerView: 3 },  // 3 slides per view for large screens
                    }}
                    pagination={{
                        el: ".swiper-pagination",  // Element for the pagination bullets
                        type: "bullets",  // Bullet type pagination
                        clickable: true,  // Making the bullets clickable
                    }}
                    className="mySwiper"
                >
                    {/* Rendering each testimonial in a SwiperSlide */}
                    {testimonials.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                {/* Individual testimonial container */}
                                <div className='border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4'>

                                    {/* Conditional rendering for the star rating */}
                                    {item.rating === 4 ? (
                                        <div className='flex'>
                                            <Star fill='true' />
                                            <Star fill='true' />
                                            <Star fill='true' />
                                            <Star fill='true' />
                                            <Star />
                                        </div>
                                    ) : (
                                        <div className='flex'>
                                            <Star fill='true' />
                                            <Star fill='true' />
                                            <Star fill='true' />
                                            <Star fill='true' />
                                            <Star fill='true' />
                                        </div>
                                    )}

                                    {/* Testimonial text */}
                                    <p className='py-3'>{item.text}</p>

                                    {/* Customer name and position */}
                                    <div className='flex justify-between items-center'>
                                        <div>
                                            <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                                            <p className='text-sm mt-1'>CEO, Webelite Builders</p>
                                        </div>
                                        {/* Quote icon */}
                                        <Quote className='text-red-400' />
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                    {/* Pagination element */}
                    <div className='swiper-pagination my-10 gap-1 relative'></div>
                </Swiper>
            </div>
        </div>
    );
}

export default Testimonials;
