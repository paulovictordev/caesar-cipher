import React from 'react';
import './Footer.css';

import Logo from '../../assets/img/github-logo.png'

export default function Footer() {
    return (
        <footer>
            <p>Create by &nbsp; <i>Paulo Victor</i>
                <a href="https://github.com/paulovictordev">
                    <img className="logo" src={Logo} alt="GitHub" />
                </a>   
            </p>         
        </footer>
    );
}