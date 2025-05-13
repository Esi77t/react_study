import { useEffect, useState } from "react"
import { call } from "./service/ApiService";
import AddProduct from "./AddProduct";

function P_info() {
    const[items, setItem] = useState([]);

    useEffect(() => {
        call("/product", "GET")
            .then(result => setItem(result));
    }, []);

    let productItems = items.length > 0 && (
        <table border="1">
        <tr>
            <th>상품 번호</th>
            <th>상품 이름</th>
            <th>상품 재고</th>
            <th>상품 가격</th>
            <th>등록 날짜</th>
            <th>수정 날짜</th>
        </tr>
        {items.map((item) => (
            <tr>
                <td>{item.productId}</td>
                <td>{item.productName}</td>
                <td>{item.productStock}</td>
                <td>{item.productPrice}</td>
                <td>{item.registerDate}</td>
                <td>{item.updateDate}</td>
            </tr>
        ))}
        </table>
    )

    return(
        <div>
            <button type="button">상품 추가</button>
            { productItems }
        </div>
    );
}

export default P_info;