import React from 'react';
import Slider from 'react-slick';
import img1 from '../../assets/images/english-teacher.jpg';
import img2 from '../../assets/images/student-smile.jpg';
import img3 from '../../assets/images/teacher-student-1.jpg';
import img4 from '../../assets/images/teacher-student-2.jpg';
import img5 from '../../assets/images/teacher-student-3.jpg';
import img6 from '../../assets/images/teacher-student-4.jpeg';
import img7 from '../../assets/images/teacher-student-5.jpg';
import img8 from '../../assets/images/teacher-student-6.jpg';

const ImageCarousel = () => {
	const images = [img1, img2, img3, img4, img5, img6, img7, img8];

	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		pauseOnHover: false,
	};
	return (
		<div className='w-[80%] h-full relative z-20'>
			<Slider {...settings}>
				{
					images.map((item, index) =>
						(<div key={index} className='w-[inherit] h-[inherit] bg-primaryBlue'>
							<img src={item} alt="" className='w-full opacity-[0.5] object-cover' />
						</div>)
					)
				}
			</Slider>
		</div>
	);
};

export default ImageCarousel;