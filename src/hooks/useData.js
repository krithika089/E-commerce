import React from "react";
import { useState,useEffect } from "react";
import apiCalling from "../Components/utils/api-calling";

const useData = (url ,customParams,deps) => {
    const [data,setData] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        apiCalling.get(url,customParams)
        .then((response) => setData(response.data))
        .catch((error) => setError(error.message))
    } , deps ? deps : [] );

    return {data,error};
}
export default useData;