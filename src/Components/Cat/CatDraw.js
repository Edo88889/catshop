import {useDispatch, useSelector} from "react-redux";
import './style.css'
import {useCallback, useState} from "react";
import {Arr, Favorites} from "../../Store/Action/CatAction";

const Item = ({item: {title, price, articul, color, imgSrc}, handleDataFavorites, handle}) => {
    const [isShow, setIsShow] = useState(false);
    return (
        <div className='child-container' key={articul}>
            <button className='btnLike' onClick={() => handleDataFavorites(articul)}>like</button>
            <img className='img' src={`https://online-shop-react.vercel.app/${imgSrc}`} alt='img'/>
            <h3>{title}</h3>
            <p>color: {color}</p>
            <p>articul: {articul}</p>
            <p>{price} UAH</p>
            {isShow && <p>test</p>}
            <button className='btn' onClick={() => handle(articul)}>Add to cart</button>
            <button  onClick={() => setIsShow(!isShow)}> lll</button>
        </div>
    )
}
const CatDraw = () => {
    const DataDraw = useSelector(state => state.initialValue)
    const DataPush = useSelector(state => state.arr)
    const DataFavorites = useSelector(state => state.favorites)
    const dispatch = useDispatch()

    const handle = useCallback((articul) => {
        let single = DataDraw.filter((e) => e.articul === articul)
        if (!DataPush.includes(single[0])) {
            dispatch(Arr(single[0]))
        }
    }, [DataDraw,DataPush])
    const handleDataFavorites = useCallback((articul) => {
        let single = DataDraw.filter((e) => e.articul === articul)
        if (!DataFavorites.includes(single[0])) {
            dispatch(Favorites(single[0]))
        }
    }, [DataDraw,DataFavorites])
    console.log(DataFavorites);

    return (
        <>
            <div className='container'>
                {DataDraw?.map((item) => (
                 <Item item={item} key={item.articul} handleDataFavorites={handleDataFavorites} handle={handle} />
                ))}
            </div>
        </>
    )
}
export default CatDraw;