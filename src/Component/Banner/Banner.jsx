
import bann1 from '../../images/3d-rendering-810-540 -2.jpg'
import bann2 from '../../images/3d-rendering-white-810-540-2.jpg'
import bann3 from '../../images/spacious-810-540.jpg'



const Banner = () => {
    return (
        <div className=''>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full max-h-[510px]">
    <img src={bann1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full max-h-[510px]">
    <img src={bann2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full max-h-[510px]">
    <img src={bann3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
        </div>
    );
};

export default Banner;