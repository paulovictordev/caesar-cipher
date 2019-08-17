import React, { useState } from 'react';
import './Main.css';
import { encrypt, decrypt } from '../assets/crypto';

export default function Main() {
    const [key, setKey] = useState(3);
    const [textCipher, setTextCipher] = useState('');
    const [textDecipher, setTextDecipher] = useState('');

    function cipher() {
       let textEncrypt = encrypt(textDecipher, key);
       setTextCipher(textEncrypt);
    }

    function decipher() {
        let textDecrypt = decrypt(textCipher, key);
        setTextDecipher(textDecrypt);
    }

    return (
        <div className="main-container">
            <div className="input-container">
                <textarea 
                    id="textDecipher" 
                    rows="10" 
                    cols="40"
                    placeholder="Write your decrypted text..."
                    value={ textDecipher }
                    onChange={ e => setTextDecipher(e.target.value) }
                ></textarea>
                <div className="button-container">
                    <button onClick={ cipher }>Cipher</button>
                    <input 
                        id="key"
                        type="number"
                        placeholder="Key"
                        value={ key }
                        onChange={ e => setKey(e.target.value) }
                    ></input>
                    <button onClick={ decipher }>Decipher</button>
                </div>
                <textarea 
                    id="textCipher" 
                    rows="10" 
                    cols="40"
                    placeholder="Write your encrypted text..."
                    value= { textCipher }
                    onChange={ e => setTextCipher(e.target.value) }
                ></textarea>
            </div>
        </div>        
    );
}