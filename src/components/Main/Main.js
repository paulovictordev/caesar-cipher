import React, { useState } from 'react';
import './Main.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { encrypt, decrypt } from '../../assets/js/crypto';

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
            <Header />
            <Footer />
        </div>
    );
}