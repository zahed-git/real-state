import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRout = ({childern}) => {
    const {user}= useContext(AuthContext)
    if (user){
        return childern
    }
    return <Navigate to="/login"></Navigate>;
};

export default PrivetRout;