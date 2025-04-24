import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"
import { products } from "../data/products";

// 제품목록을 보여주는 페이지
// 제품이름 - 단가
// 개수를 조절하는 input
// 장바구니에 추가하기 버튼(state에 즉시 반영)
export const ProductList = () => {

    // 장바구니에 추가하는 함수를 받아서 사용
    const { addItem } = useContext(CartContext);

    return(
        <div>
            <h1>Products</h1>
            <ul>
                {/* 배열(제품의 목록)에 있는 내용을 리스트화 */}
                {products.map(product => (
                    <li key={product.id} style={{marginBottom:10}}>
                        {product.name} - {product.price}원{' '}
                        {/* 버튼을 눌렀을 때 구매하려는 하나의 제품을 state에 추가 */}
                        <button onClick={() => addItem(product)}> 장바구니에 담기</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;