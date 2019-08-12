import React from 'react';
import './Main.css';

export default function Main() {
    return (
        <div className="main-container">
            <div className="input-container">
                <textarea id="a" rows="10" cols="40"></textarea>
                    <div className="button-container">
                        <button>Cipher</button>
                        <input placeholder="Key"></input>
                        <button>Decipher</button>
                    </div>
                <textarea id="b" rows="10" cols="40"></textarea>
            </div>
        </div>        
    );
}