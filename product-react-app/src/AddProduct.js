import { useState } from "react";

function AddProduct(props) {
    const[product, setProduct] = useState({ productName : "", productStock : 0, productPrice : 0 });
    const { productName, productStock, productPrice } = product;
    
    let addItem = props.addItem;

    const onChange = (e) => {
        const { value, name } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    }

    const onButtonClick = () => {
        addItem(product);
        resetFiled();
        props.setOpen(true);
    }

    const resetFiled = () => {
        setProduct({ productName : "", productStock : 0, productPrice : 0 });
    }

    return(
        <div className="register-wrap">
            <div><input value={ productName } onChange={ onChange } name="productName" placeholder="상품 이름" /></div>
            <div><input value={ productStock } onChange={ onChange } name="productStock" placeholder="상품 재고" /></div>
            <div><input value={ productPrice } onChange={ onChange } name="productPrice" placeholder="상품 가격" /></div>
            <input type="button" onClick={ onButtonClick } value="등록" />
        </div>
    )
}

export default AddProduct;