document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const copyBtn = document.getElementById('copyBtn');

    const encryptionMap = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const decryptionMap = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    //garantir apenas minusculo
    const validPattern = /^[a-z ,;.:?!]*$/;
   
    // criptografar o texto
    function encrypt(text) {
        return text.replace(/[eioua]/g, function(match) {
            return encryptionMap[match];
        });
    }

    // descriptografar o texto
    function decrypt(text) {
        return text.replace(/enter|imes|ai|ober|ufat/g, function(match) {
            return decryptionMap[match];
        });
    }

    // ao clicar no botao chama a funcao para criptografar a mensagem e apresentá-la na area de mensagem criptografada.
    encryptBtn.addEventListener('click', function() {
        const text = inputText.value;
        if (validPattern.test(text)) {
            const encryptedText = encrypt(text);
            outputText.value = encryptedText;
        } 
        else {
            alert ('Texto deve conter apenas letras minúsculas, espaço em branco, vírgula, ponto e vírugla, dois pontos, ponto, ponto de interrogação e exclamação).');
        }
    });

    // ao clicar no botao chama a funcao para descriptografar a mensagem e apresentá-la na area de mensagem criptografada.
    decryptBtn.addEventListener('click', function() {
        const text = inputText.value;
        const decryptedText = decrypt(text);
        outputText.value = decryptedText;
    });

    copyBtn.addEventListener('click', function() {
        outputText.select();
        document.execCommand('copy');
        alert('Text copied to clipboard!');
    });
});
