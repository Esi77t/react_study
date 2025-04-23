import { useContext } from "react"
import { CartContext } from "./data/CartContext"

export const CartPage = () => {

    const { addItem, updateQuantity } = useContext(CartContext);

    return(
        <div>
            
            <button onClick={addItem}>장바구니 담기</button>
        </div>
    )
}

