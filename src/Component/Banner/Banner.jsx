import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle'
import bann1 from '../../images/3d-rendering-810-540 -2.jpg'
import bann2 from '../../images/3d-rendering-white-810-540-2.jpg'
import bann3 from '../../images/spacious-810-540.jpg'



const Banner = () => {
  return (
    <div className='flex'>
      <div className='container mx-auto'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide><img src={bann1} className="p-5 card shadow w-full " /></SwiperSlide>
        <SwiperSlide><img src={bann2} className="p-5 card shadow w-full " /></SwiperSlide>
        <SwiperSlide><img src={bann3} className="p-5 card shadow w-full " /></SwiperSlide>

      </Swiper>
      </div>
    </div>
  );
};

export default Banner;