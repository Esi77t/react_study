// 상품이름, 상품재고, 상품가격(단가)를 입력할 수 있는 필드
// 등록 버튼이 있다
// 내용을 다 입력하고 등록버튼을 누르면 백엔드에 추가해달가고 요청
// 추가를 마치면 창을 닫고 추가버튼을 보이게 한다

import { useState } from 'react'

function AddProduct(props){
    //상품 정보를 저장할 수 있는 state
    const [product, setProduct] = useState({ productName:"", productStock:0, productPrice:0 })

    const addItem = props.addItem;

    const setOpen = props.setOpen;

    //state의 구조분해 할당
    const { productName, productStock, productPrice } = product;

    const onChange = (e) => {
        //e.target -> 이벤트가 일어나는 대상
        //{value,name} -> 이벤트가 일어나는 대상의 value,name에 들어있는 값을 가져온다.
        const { value, name } = e.target;
        setProduct({
            ...product,
            [name] : value
            })
    }

    const onButtonClick = () => {
        console.log(product);
        addItem(product);
        resetFields();
        setOpen(true);
    }

    //입력필드 초기화 함수
    const resetFields = () => {
        setProduct({ productName:"",productStock:0,productPrice:0 })
    }

    return(
        <div className="register-wrap" style={{ width:'500px' }}>
            <div>
                <input 
                    style={{ width:'98%' }} 
                    value={ productName } 
                    onChange={ onChange } 
                    name='productName' 
                    placeholder='상품 이름' 
                />
            </div>
            <div>
                <input 
                    style={{ width:'98%' }} 
                    value={ productStock } 
                    onChange={ onChange } 
                    name='productStock' 
                    placeholder='상품 재고' 
                />
            </div>
            <div>
                <input 
                    style={{ width:'98%' }} 
                    value={ productPrice } 
                    onChange={ onChange } 
                    name='productPrice' 
                    placeholder='상품 가격' 
                />
            </div>
            <input type="button" value="등록" onClick={ onButtonClick } style={{ width:'100%' }} />
        </div>
    )
}

export default AddProduct;