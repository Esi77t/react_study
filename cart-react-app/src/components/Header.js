import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../contexts/CartContext";

const Header = () => {
    const { items } = useContext(CartContext);

    // 총 개수
    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

    // 총 가격
    const totalPrice = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

    return(
        <div>
            <Link to="/products">Products</Link>
            <Link to="/cart">
                Cart({totalCount}) - {totalPrice}원
            </Link>
        </div>
    )
}

export default Header;