import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";

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
    // console.log(flate)
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl m-14">
            {/* <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}> */}
                <figure className='bg-slate-100 p-14 m-6 rounded-xl'><img className='max-w-[400px] max-h-[650px]' src={flate?.image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{flate?.estate_title}</h2>
                    <h2 className="card-title">Type : {flate?.segment_name}</h2>
                    <hr />
                    <p><span className='text-xl font-semibold'>Category : </span>  {flate?.category }</p>
                    <hr />
                    <p><span className='text-xl font-semibold'>Detail : </span>  {flate?.description}</p>
                    <div className="flex gap-3 my-4">
                        <p className="font-bold">Tag :</p>
                        <div className="badge badge-outline p-4 text-green-600 font-bold bg-slate-100">#{flate?.facilities[0]}</div>
                        <div className="badge badge-outline p-4 text-green-600 font-bold bg-slate-100">#{flate?.facilities[1]}</div>
                        <div className="badge badge-outline p-4 text-green-600 font-bold bg-slate-100">#{flate?.facilities[2]}</div>
                    </div>
                    <hr />
                    <div>
                        {/* ----------- */}
                        <div className="overflow-x-auto">
                            <table className="table">
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
    );
};

export default Detail;