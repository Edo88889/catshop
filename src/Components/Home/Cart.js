import Routing from "./Routing";
import {useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
const Cart = () => {
    const [isTotalPrice, setIsTotalPrice] = useState(0)
    const DataPush = useSelector(state => state.arr)
    const [counter, setCounter] = useState(DataPush.map(() => 0))
    const [pricesPlus, setPricesPlus] = useState(DataPush.map(() => 0))
    const [delet, setDelet] = useState(DataPush.map(() => []))
    console.log(delet)
    const HandlePriceMinus = useCallback((currentPrice, index) => {
        setIsTotalPrice(isTotalPrice - currentPrice)
        setPricesPlus(() => {
            const newPrices = [...pricesPlus]
            newPrices[index] -= DataPush[index].price
            return newPrices
        })
        setCounter(() => {
            const newCounter = [...counter]
            newCounter[index] -= 1
            return newCounter
        })
    }, [isTotalPrice, pricesPlus, counter])
    const HandlePricePlus = useCallback((currentPrice, index) => {
        setIsTotalPrice(isTotalPrice + currentPrice)
        setPricesPlus(() => {
            const newPrices = [...pricesPlus]
            newPrices[index] += DataPush[index].price
            return newPrices
        })
        setCounter(() => {
            const newCounter = [...counter]
            newCounter[index] += 1
            return newCounter
        })
    }, [isTotalPrice, pricesPlus, counter])
    const HandleDelete =  useCallback((articul, index) => {
        setDelet(...delet,DataPush)
        delet.filter((e) => e.articul !== articul)
    },[delet])
    // console.log(DataPush)
    useEffect(() => {
        const TotalPrice = DataPush?.reduce((acc, current) => {
            return acc + current.price
        }, 0)
        setIsTotalPrice(TotalPrice)
    }, [])
    return (
        <div className='container'>
            <Routing/>
            <h2 className='totalprice'>{isTotalPrice}</h2>
            {DataPush?.map(({title, price, articul, color, imgSrc}, index) => (
                <div className='child-container' key={articul}>
                    <img className='img' src={`https://online-shop-react.vercel.app/${imgSrc}`} alt='img'/>
                    <h3>{title}</h3>
                    <p>color: {color}</p>
                    <p>articul: {articul}</p>
                    <p>{price} UAH</p>
                    <button onClick={() => HandlePricePlus(price, index)}>+</button>
                    <span>{counter[index] + 1}</span>
                    <button onClick={() => HandlePriceMinus(price, index)}>-</button>
                    <span>{price + pricesPlus[index]} UAH</span>
                    <button onClick={() => HandleDelete(articul)}>delete</button>
                </div>
            ))}
        </div>
    )
}
export default Cart;