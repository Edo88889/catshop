import {Link} from "react-router-dom";
function Routing() {
    return (
        <nav className='container'>
            <Link to='/' className='rout'>Home</Link>
            <Link to='/cart' className='rout'>Cart</Link>
            <Link to='/favourites' className='rout'>favourites</Link>
        </nav>
    );
}

export default Routing;