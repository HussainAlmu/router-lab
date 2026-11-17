import { Link } from 'react-router'

function Navbar() {
    return (
        <nav>
            <Link to='/homepage'>homepage</Link>
            <Link to='/products/'>All Products</Link>

        </nav>
    )
}

export default Navbar