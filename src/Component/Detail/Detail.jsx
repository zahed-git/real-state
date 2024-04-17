import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

const Detail = () => {
    const { id } = useParams()
    const [flate, setFlate] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('/business.json');
            const allData = await res.json()
            const singleData = allData?.find(data => data.id == id)
            setFlate(singleData)
            console.log(allData)
            console.log(singleData)
        }
        fetchData()
    }, [id])
    return (
        <div>
            <Helmet>
                detail
            </Helmet>
            {/* ---------------------------- */}

           
            {/* -----------------------? */}
            <div className="sm:max-w-[340px] md:max-w-[1050px] lg:max-w-[1250px]">
                <div className=" bg-origin-content hero min-h-screen w-full bg-center bg-contain bg-no-repeat bg-gradient-to-tl" style={{ backgroundImage: `url(${flate?.image})` }}>
                    ---------------------
                    <div className="card lg:card-side bg-base-100 shadow-xl m-14"></div>
                    {/* -------------------------------- */}
                    <div className="card-body p-64 ">
                        <h2 className="card-title sm:text-xs lg:text-xl lg:font-bold text-black">{flate?.estate_title}</h2>
                        <h2 className="card-title sm:text-xs lg:text-xl lg:font-bold text-blue">Type : {flate?.segment_name}</h2>
                        <hr />
                        <p className="sm:text-xs lg:text-xl lg:font-bold text-blue"><span className='sm:text-xl md:text-2xl'>Category : </span>  {flate?.category}</p>
                        <hr />
                        <p className="sm:text-xs lg:text-xl lg:font-bold text-blue"><span className='sm:text-xl md:text-2xl '>Detail : </span>  {flate?.description}</p>
                        <div className="flex gap-3 my-4">
                            <p className="font-bold">Tag :</p>
                            <div className="badge badge-outline p-4 text-green-600 font-bold bg-slate-100">#{flate?.facilities[0]}</div>
                            <div className="badge badge-outline p-4 text-green-600 font-bold bg-slate-100">#{flate?.facilities[1]}</div>
                            <div className="badge badge-outline p-4 text-green-600 font-bold bg-slate-100">#{flate?.facilities[2]}</div>
                        </div>
                        <hr />
                        <div>
                            {/* ----------- */}
                            <div className="overflow-x-auto ">
                                <table className="table sm:text-xs lg:text-xl lg:font-bold text-blue">
                                    {/* head */}
                                    <thead>

                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <td>Price :</td>

                                            <td>{flate?.price}</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <td>Area:</td>

                                            <td>{flate?.area}</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <td>Location:</td>

                                            <td>{flate?.location}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            {/* -------------- */}
                        </div>
                    </div>
                </div>
            </div>
            {/* ---------------------------- */}
        </div>

    );
};

export default Detail;