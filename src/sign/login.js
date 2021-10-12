import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './login.css';

function Login(){

    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');

    const handleUserId = (e) => {
        setUserId(e.target.value);
    }
    const handleUserPw = (e) => {
        setUserPw(e.target.value);
    }

    const onClickLogin = () => {
        console.log('click login');
    }
    useEffect(() => {
        axios.get('/user_inform/login')
        .then(res => console.log(res))
        .catch()
    }, [])

    return(
        <div className="login_form">
            <h1>로그인</h1>
            <form action="">
                <div className="text_field">
                    <input type="text" name="id" id="id" value={userId} onChange={handleUserId} placeholder="아이디"></input>
                </div>
                <div className="text_field">
                    <input type="password" name="pw" id="pw" value={userPw} onChange={handleUserPw} placeholder="비밀번호"></input>

                </div>
                <div>
                    <button type='button' onClick={onClickLogin}>Login</button>
                </div>
                <div className="pass"><Link to="#">아이디/비밀번호 찾기</Link></div>
                <div className="signup_link"><Link to ="/sign/signup">회원가입</Link></div>
            </form>
        </div>
    );  
}

export default Login;