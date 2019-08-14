import React, { useState } from 'react';
import './Main.css';
import { encrypt, decrypt, phraseToArray } from '../assets/crypto';

export default function Main() {
    const [key, setKey] = useState(3);
    const [textDecipher, setTextDecipher] = useState('');
    const [textCipher, setTextCipher] = useState('');

    function cipher(e) {
        e.preventDefault();

        let pharse = phraseToArray(textDecipher);
        let textCipher = encrypt(pharse, key);
        setTextCipher(textCipher);
    }

    function decipher(e) {
        e.preventDefault();

        let pharse = phraseToArray(textCipher);
        let textDecipher = decrypt(pharse, key);
        setTextDecipher(textDecipher);
    }

    return (
        <div className="main-container">
            <div className="input-container">
                <textarea 
                    id="textDecipher" 
                    rows="10" 
                    cols="40"
                    value={ textDecipher }
                    onChange={ e => setTextDecipher(e.target.value)}
                ></textarea>
                <div className="button-container">
                    <button onClick={cipher}>Cipher</button>
                    <input 
                        id="key"
                        type="number"
                        placeholder="Key"
                        value={key}
                        onChange={ e => setKey(e.target.value)}
                    ></input>
                    <button onClick={decipher}>Decipher</button>
                </div>
                <textarea 
                    id="textCipher" 
                    rows="10" 
                    cols="40"
                    value= { textCipher }
                    onChange={ e => setTextCipher(e.target.value) }
                ></textarea>
            </div>
        </div>        
    );
}