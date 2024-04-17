import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css'

const Cards = ({property}) => {
    useEffect(()=>{
        Aos.init()
            },[])
    const {id,category,estate_title,description,price,status,area,location,facilities,image} =property
    return (
        <div>
            <div className="card sm:w-72 md:w-96 bg-base-100 shadow-xl" data-aos="zoom-in-up">
                <figure className="max-h-[500px] p-8 "><img src={image} alt={estate_title} /></figure>
                <div className="card-body">
                    <div className="card-actions justify-left mt-4">
                        <div className="badge badge-outline font-semibold text-green-500 p-3 bg-slate-200">{facilities[0]}</div>
                        <div className="badge badge-outline font-semibold text-green-500 p-3 bg-slate-200">{facilities[1]}</div>
                        <div className="badge badge-outline font-semibold text-green-500 p-3 bg-slate-200">{facilities[2]}</div>
                    </div>
                    <h2 className="card-title mt-4">
                        {estate_title}

                    </h2>
                    <p className="flex justify-start mt-4">Category : {category}</p>
                    <hr />
                    <div className="flex justify-between text-center mt-4">
                        <div className="text-sm text-wrap">{location}</div>
                        <div className="flex gap-2 text-sm">{area} </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                <Link to={`/detail/${id}`}><button className='w-56 my-6 py-3 text-xl font-bold rounded-lg  bg-lime-300 '>View property</button></Link>
                </div>
                
            </div>
        </div>
    )
}

export default Cards;

Cards.propTypes={
    property: PropTypes.array
}