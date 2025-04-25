import { useEffect, useState } from "react";

export const PromiseDemo = () => {

    const [result, setResult] = useState(null);

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            console.log('resolve() : ', typeof resolve);
            console.log('reject() : ', typeof reject);
            resolve('완료');
        })
        promise
            .then(value => {
                console.log('Promise fullfilled with : ', value);
                setResult(value);
            })
            .catch(error => {
                console.log('Promise rejected with : ', error);
                setResult('에러 발생');
            })
    }, [])

return(
    <div>
        <h2>Promise 결과</h2>
        <p>Promise 결과 : {result}</p>
    </div>
)}
