import React, { useState } from "react";
import './signup.css';

function SignUp(props){
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [userName, setUserName] = useState('');
    const [userNumber, setUserNumber] = useState('');
    const [userBday, setUserBday] = useState('');

    const onClickSignUp = () => {
        console.log('Id : ', userId)
        console.log('Pw : ', userPw)
        console.log('name : ', userName)
        console.log('number : ', userNumber)
        console.log('Brithday : ', userBday)

    }


    return(
        <div className="sign_form">
            <h1>회원가입</h1>
            <form action="">
                <div className="text_sign">
                    <input type="text" name="id" id="id" value={userId} placeholder="아이디" />
                </div>
                <div className="text_sign">
                    <input type="password" name="pw" id="pw" value={userPw} placeholder="비밀번호" />
                </div>
                <div className="text_sign">
                    <input type="text" name="name" id="name" value={userName} placeholder="이름" />
                </div>
                <div className="text_sign">
                    <input type="tel" name="number" id="number" value={userNumber} placeholder="전화번호" />
                </div>
                <div className="text_sign">
                    <input type="text" value={userBday} placeholder="생년월일" />
                </div>
                <div>
                    <input type="radio" name="gender" id="gender" />
                    <label for="gender">남성</label>
                    <input type="radio" name="gender" id="gender" />
                    <label for="gender">여성</label>
                </div>
                <input type="submit" onClick={onClickSignUp} value="가입하기"/><a href="#"></a>
            </form>
        </div>
    );
}
export default SignUp;