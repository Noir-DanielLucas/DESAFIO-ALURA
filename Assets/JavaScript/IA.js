function showTextOnTheScreen(tag, content) {
    let field = document.querySelector(tag);
    field.innerHTML = content;
}

function showMenssageOnTheScreen() {
    showTextOnTheScreen('h1', 'Digite seu texto');
}

showMenssageOnTheScreen();

function WhiteMode() {
    document.getElementById('WhiteMode').removeAttribute('disabled');
    document.getElementById('DarkMode').setAttribute('disabled', true)

}

function DarkMode() {
    document.getElementById('DarkMode').removeAttribute('disabled');
    document.getElementById('WhiteMode').setAttribute('disabled', true)

}

function Criptografar() {
    const MessageOne = document.querySelector('textarea').value;
    console.log(`Mensagem Original: ${MessageOne}`);
    if (MessageOne.trim() !== '') { /* O comando .trim() tira espaço entre a "string" */
        const hide = document.querySelector('.Alert-Image');
        hide.style.display = 'none';
        const bob = document.querySelector('h2');
        bob.style.display = 'none';

        const Encrypting = {
            e: 'enter',
            i: 'imes',
            a: 'ai',
            o: 'ober',
            u: 'ufat',
        };

        function CriptografarMessage(inputMessage) {
            return inputMessage
                .split('') /* Pula uma string ou ajuda a navegar em Array */
                .map((char) => Encrypting[char] || char) /* Cria um novo Array ou Modifica em Novo no caso o Comando .map()*/
                .join(''); /* Esse comando retorna um Array como uma String */
                /* O "Parametro" Char transforma uma texto em um Caractere */
        }

        const CriptografedMessage = CriptografarMessage(MessageOne);

        showTextOnTheScreen('#Criptografed-Menssage', CriptografedMessage);
        const leftDirection = document.querySelector('.Message-Display');
        leftDirection.style.textAlign = 'left';
        leftDirection.style.height = '450px';
        const show = document.querySelector('#Copy-Button');
        show.style.display = 'block';

        console.log(`Mensagem Modificada: ${CriptografedMessage}`);

        CleanUP();
    }
}

function CleanUP() {
    const textarea = document.querySelector('textarea');
    textarea.value = '';
}

function Descriptografar() {
    const MessageTwo = document.querySelector('textarea').value;

    if (MessageTwo.trim() !== '') {
        const hide = document.querySelector('.Alert-Image');
        hide.style.display = 'none';
        const bob = document.querySelector('h2');
        bob.style.display = 'none';

        const Encrypting = {
            enter: 'e',
            imes: 'i',
            ai: 'a',
            ober: 'o',
            ufat: 'u',
        };

        function DescriptarMessage(outputMessage) {
            let result = '';
            let i = 0;

            while (i < outputMessage.length) {
                let found = false;

                for (const [key, value] of Object.entries(Encrypting)) {
                    if (outputMessage.slice(i, i + key.length) === key) {
                        result += value;
                        i += key.length;
                        found = true;
                        break;
                    }
                }

                if (!found) {
                    result += outputMessage[i];
                    i++;
                }
            }

            return result;
        }

        const DescriptografedMessage = DescriptarMessage(MessageTwo);

        showTextOnTheScreen('#Criptografed-Menssage', DescriptografedMessage);
        const leftDirection = document.querySelector('.Message-Display');
        leftDirection.style.textAlign = 'left';
        leftDirection.style.height = '450px';
        const show = document.querySelector('#Copy-Button');
        show.style.display = 'block';

        CleanUP();
    }
}

function CopyMessage() {
    const WordsElement = document.querySelector('#Criptografed-Menssage');
    const Range = document.createRange();
    Range.selectNodeContents(WordsElement);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(Range);

    document.execCommand('copy');
    console.log('Texto copiado com Sucesso');
} 