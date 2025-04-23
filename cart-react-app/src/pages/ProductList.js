import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { products } from "../data/products";

export const ProductList = () => {

    const { addItem } = useContext(CartContext);

    return(
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id} style={{marginBottom:10}}>
                        {product.name} - {product.price}원{' '}
                        <button onClick={() => addItem(product)}> 장바구니에 담기</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;