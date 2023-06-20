import {Link, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Routing from "./Routing";
const Favourites = () => {
    const DataFavorites = useSelector(state => state.favorites)
    return (
        <div className='container'>
            <Routing/>
            {DataFavorites?.map(({title, price, articul, color, imgSrc}, index) => (
                <div className='child-container' key={articul}>
                    <button className='btnLike'>Link</button>
                    <img className='img' src={`https://online-shop-react.vercel.app/${imgSrc}`} alt='img'/>
                    <h3>{title}</h3>
                    <p>color: {color}</p>
                    <p>articul: {articul}</p>
                    <p>{price} UAH</p>
                </div>
            ))}
        </div>
    )

}



export default Favourites;