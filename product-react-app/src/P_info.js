import { useEffect, useState } from "react"
import { call } from "./service/ApiService";
import AddProduct from "./AddProduct";
import './style.css';

function P_info(){
    // 상품정보를 담는 useState
    const [items, setItems] = useState([]);

    // 추가 창을 띄우는 state
    const [open, setOpen] = useState(true);

    // 라디오버튼의 index를 저장하는 state
    const [selectedIndex, setSelectedIndex] = useState(null);

    // 주문 개수를 저장하는 state
    const [orderCount, setOrderCount] = useState('');

    useEffect(() => {
        call("/products","GET")
            .then(result => setItems(result.data));
    },[]);

    //상품 추가 기능
    const addItem = (item) => {
        call("/products","POST",item)
            .then(res => setItems(res))
    }

    const onButtonClick = () => {
        setOpen(false);
    }

    const handleRadioChange = (index) => {
        setOrderCount('');
        setSelectedIndex(index);
    }

    const handleOrderCountChange = (e) => {
        setOrderCount(e.target.value);
    }

    const orderProduct = () => {
        if(selectedIndex && orderCount > 0 && items[selectedIndex - 1]){
            const orderData = {
                productId : items[selectedIndex - 1].productId,
                productCount : parseInt(orderCount)
            }
            call("/orders", "POST", orderData)
                .then(result => setItems(result.data))
        }
    }

    let productItems = items.length > 0 && (
        <div>
            <table border="1">
                <tr>
                    <th>단일 선택</th>
                    <th>주문 개수</th>
                    <th>상품 번호</th>
                    <th>상품 이름</th>
                    <th>상품 재고</th>
                    <th>상품 가격</th>
                    <th>등록 날짜</th>
                    <th>수정 날짜</th>
                </tr>
                {items.map((item, index) => (
                    <tr key={ item.productId }>
                        <td><input type="radio" name="productId" onChange={ () => handleRadioChange(index + 1) } checked={ selectedIndex === index + 1 } /></td>
                        <td><input type="number" value={ selectedIndex === index + 1 ? orderCount : '' } onChange={ handleOrderCountChange } readOnly={ selectedIndex !== index+1 } /></td>
                        <td>{ item.productId }</td>
                        <td>{ item.productName }</td>
                        <td>{ item.productStock }</td>
                        <td>{ item.productPrice }</td>
                        <td>{ item.registerDate }</td>
                        <td>{ item.updateDate }</td>
                    </tr>
                ))}
            </table>
            <button type="button" id="order-done" onClick={ orderProduct } >주문완료</button><button type="button" id="order-done">주문내역</button>
        </div>
    )

    let addButton =  <button type="button" onClick={ onButtonClick }>상품추가</button>;

    let addproductScreen = <AddProduct addItem={ addItem } setOpen={ setOpen } />

    let addProduct = addButton;

    if(!open){
        addProduct = addproductScreen;
    }

    return(
        <div className='container'>
            { addProduct }
            { productItems }
        </div>
    )

}

export default P_info;