import React from "react";
import './main.css';
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <div>
            <nav class="header">
                <div class="header_area">
                    <div class="header_left">
                        <a href="/">Logo</a>
                    </div>
                    <ul class="header_center">
                        <li><Link to="/">소개</Link></li>
                        <li><Link to="/">이용안내</Link></li>
                        <li><Link to="/">맛집리스트</Link></li>
                        <li><Link to="/">FAQ</Link></li>
                        <li><Link to="/">공지사항</Link></li>
                    </ul>
                    <ul class="header_right">
                        <li><Link to="/sign/login">로그인</Link></li>
                        <li><Link to="/sign/signup">회원가입</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Main;
