import Banner from "../Banner/Banner";
import {Helmet} from "react-helmet";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
        <div className="">
            {
                <Banner></Banner>
            }
        </div>
        <div className="flex">
           <div className="mx-auto text-center sm:max-w-[350px] lg:max-w-[800px]">
           <h1 className="sm:text-2xl  md:text-5xl font-semibold my-6">ABOUT PROPERTY</h1>
            <p className="mb-6 sm:text-xs md:text-base font-semibold text-wrap text-slate-400">Lorem ipsum dolor sit amet, ea pro error pertinacia, nam id munere detraxit. Wisi decore discere eum an, autem erant usu eu, per ubique legendos intellegam in. An est melius vivendo. Hinc temporibus nec te, vero consetetur an qui nam.</p>
           </div>
        </div>
        
        </div>
    );
};

export default Home;