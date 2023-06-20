import {useEffect, useState} from "react";
import {UrlCat} from "../utils/constants";

const Cats = () => {
    const [data, setData] = useState([])
    console.log(data)
    const  gettingData  = async () => {
        const resp = await fetch(UrlCat)
        const result = await resp.json()
        setData(result)
        console.log(result)
    }
    useEffect(() => {
        gettingData()
    },[])
}
export default Cats