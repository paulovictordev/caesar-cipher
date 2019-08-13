import React from 'react';
import './Main.css';
import { encrypt, decrypt, phraseToArray } from '../assets/crypto';

export default function Main() {
    function cipher(e) {
        e.preventDefault();

        let key = parseInt(document.getElementById('key').value);
        let textDecipher = document.getElementById('textDecipher').value;
        const pharse = phraseToArray(textDecipher);
        const textCipher = encrypt(pharse, key);
        document.getElementById('textCipher').value = textCipher;
    }

    function decipher(e) {
        e.preventDefault();

        let key = parseInt(document.getElementById('key').value);
        let textCipher = document.getElementById('textCipher').value;
        const pharse = phraseToArray(textCipher);
        const textDecipher = decrypt(pharse, key);
        document.getElementById('textDecipher').value = textDecipher;
    }

    return (
        <div className="main-container">
            <div className="input-container">
                <textarea 
                    id="textDecipher" 
                    rows="10" 
                    cols="40"
                ></textarea>
                    <div className="button-container">
                        <button onClick={cipher}>Cipher</button>
                        <input 
                            id="key"
                            placeholder="Key"
                        ></input>
                        <button onClick={decipher}>Decipher</button>
                    </div>
                <textarea 
                    id="textCipher" 
                    rows="10" 
                    cols="40"
                ></textarea>
            </div>
        </div>        
    );
}