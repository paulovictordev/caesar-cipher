const alphabet = ['a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o',
        'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y',
        'z'];

export function encrypt(text, key) {
    let phrase = phraseToArray(text);
    let phraseEncrypt = [];
    let phraseSize = 0;

    phrase.forEach(symbol => {
        alphabet.forEach(symbolAlphabet => {
            if(symbolAlphabet === symbol) {       
                if((alphabet.lastIndexOf(symbolAlphabet) + key) <= (alphabet.length - 1)) {
                    phraseEncrypt.push(alphabet[alphabet.lastIndexOf(symbolAlphabet) + key]);
                } else {
                    phraseEncrypt.push(alphabet[(alphabet.lastIndexOf(symbolAlphabet) + key) - alphabet.length]);
                }      
            }
        });

        phraseSize++;

        if (phraseEncrypt.length !== phraseSize) {
            phraseEncrypt.push(symbol);
        }
    });

    return phraseEncrypt.join('');
}

export function decrypt(text, key) {
    let phrase = phraseToArray(text);
    let phraseDecrypt = [];
    let phraseSize = 0;

    phrase.forEach(symbol => {
        alphabet.forEach(symbolAlphabet => {
            if (symbolAlphabet === symbol) {
                if ((alphabet.lastIndexOf(symbolAlphabet) - key) >= 0) {
                    phraseDecrypt.push(alphabet[alphabet.lastIndexOf(symbolAlphabet) - key]);
                } else {
                    phraseDecrypt.push(alphabet[(alphabet.lastIndexOf(symbolAlphabet) - key) + alphabet.length]);
                }
            }
        });

        phraseSize++;

        if (phraseDecrypt.length !== phraseSize) {
            phraseDecrypt.push(symbol);
        }
    });

    return phraseDecrypt.join('');
}

function phraseToArray(text) {
    return text.toLowerCase().split('');
}