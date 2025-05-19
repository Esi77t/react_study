import { useState, useEffect } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";

const Address = () => {

    const scriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

    // 훅을 삿용하여 주소찾기 API를 팝업으로 실행할 준비
    const open = useDaumPostcodePopup(scriptUrl);

    const [postcode, setPostcode] = useState('');   // 우편번호를 저장할 state
    const [address, setAddress] = useState('');     // 주소를 저장할 state
    const [detailAddress, setDetailAddress] = useState('');     // 상세주소를 저장할 state
    const [extraAddress, setExtraAddress] = useState('');       // 참고항목을 저장할 state

    // 주소 선택 완료 후 실행되는 함수
    const handleComplete = (data) => {
        let addr = '';
        let extraAddr = '';

        // userSelectedType : 사용자가 선택한 주소 타입에 따라 주소 설정
        // R : 도로명 주소
        // J : 지번 주소
        if(data.userSelectedType === 'R') {
            addr = data.roadAddress;    // 도로명 주소 선택시 도로명 주소 할당
        } else {
            addr = data.jibunAddress;   // 지번 주소 선택시 지번 주소 할당
        }
        
        // 참고항목처리(도로명 주소인 경우)
        if(data.userSelectedType === 'R') {
            // 법정동명이 있는지 확인하고 추가(법정동, 법정리가 있을 때만)
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                extraAddr += data.bname;
            }
            // 건물명이 있고 공동주택일 경우 추가
            if(data.buildingName !== '' && data.apartment == 'Y') {
                extraAddr += extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
            }

            // 참고 항목이 있다면 괄호로 감싸서 추가
            if(extraAddr !== '') {
                extraAddr = ` (${ extraAddr })`;
            }
        // 참고항목 state 업데이트
        } else {
            // 지번 주소인 경우 참고 항목을 빈 문장열로 설정
            setExtraAddress('');
        }

        setPostcode(data.zonecode); // 우편번호 설정
        setAddress(addr);

        // 상세 주소 입력 필드로 포커스 이동하기
        document.querySelector('#sample6_detailAddress').focus();
    }

    // 버튼을 눌러 팝업창을 연다
    const handleClick = () => {
        open({ onComplete:handleComplete });
    }

    return(
        <div className="form-group">
            <div className="form-row">
                우편번호 : <input type="text" id="sample6_postcode" placeholder="우편번호" value={ postcode } readOnly />
                <input type="button" onClick={ handleClick } value="우편번호 찾기" />
            </div>
            주소 : <input type="text" id="sample6_address" placeholder='주소' value={ address } readOnly />
            <div className="form-row split">
                상세주소 : <input type="text" id="sample6_detailAddress" placeholder="상세주소" value={ detailAddress } onChange={ (e) => setDetailAddress(e.target.value) } /><br />
                참고항목 : <input type="text" id="sample6_extraAddress" placeholder="참고항목" value={ extraAddress } readOnly />
            </div>
        </div>
    )
}

export default Address;