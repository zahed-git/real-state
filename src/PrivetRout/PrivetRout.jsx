import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivetRout = ({childern}) => {
    const {user,loading}= useContext(AuthContext)
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if (user){
        return childern
    }
    return <Navigate to="/login"></Navigate>;
};

export default PrivetRout;

PrivetRout.propTypes = {
    children: PropTypes.node
}