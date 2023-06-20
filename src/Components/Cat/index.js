import {useEffect} from "react";
import {UrlCat} from "../utils/constants";
import {Data} from "../../Store/Action/CatAction";
import {useDispatch} from "react-redux";
import axios from "axios";
import CatDraw from "./CatDraw";
import Routing from "../Home/Routing";
const Index = () => {
    const dispatch = useDispatch()
    const  gettingData  = async () => {
        const resp = await axios.get(UrlCat)
        dispatch(Data(resp.data))
    }
    useEffect(() => {
        gettingData()
    },[])
    return(
        <>
            <Routing/>
            <CatDraw/>
        </>
    )
}
export default Index