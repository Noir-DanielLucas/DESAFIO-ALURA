# Alura Challenge - Decodificador de TEXTO

<img src="https://github.com/user-attachments/assets/1d7d12be-34ad-4a7e-9881-3d8993abd62f" width="800px;" alt="PlaceHolder">

## Recomendações

+ Exmeplo 01
+ Exemplo 02
+ Exemplo 03
+ Exemplo 04

> [**NOTE**]: As recomendações logo estaram disponíveis

## :file_folder: Do que se trata esse Projeto
Este projeto representa o desafio final para os participantes do Curso Iniciante em Programação T7 - ONE, contando com a colaboração da **Unimed, Oracle e Alura**. Seu objetivo é incentivar os estudantes a aplicarem na prática os conhecimentos adquiridos durante os cursos e a se desafiarem a aprender novas habilidades. Como o próprio nome sugere, trata-se de um **Decodificador** de texto.

## ☕ Como usar o Projeto

### Entrada do Texto
> Input Text
> > Ao clicar e digitar o texto atente-se à regras de digtição requisitadas

### Os Botões
> **Criptografar**
> > Com o texto na caixa de entrada basta clicar no botão Criptografar
 
> **Descriptografar**
> > Com o texto Criptografado em mãos basta usar o botão Descriptografar

>  **Copiar**
> > Como nome sugere o botão Copiar serve para copiar o texto desejado

### :fire: Desafios enfrentados ao realizar o Projeto
<p> [Primeiro Desafio que <strong> ENFRENTEI </strong>]: O Figma é uma ferramenta amplamente utilizada para design colaborativo, permitindo criar interfaces de usuário, protótipos e designs de sites. No entanto, em alguns dispositivos, o Figma pode apresentar problemas de desempenho. Sendo um dos motivos para não usá-lo e além do tempo que levava para visualizar cada elemento. </p>

<p> [Segundo Desafio]: Foi só encontrar uma forma de amarzenar vários valores em váriavel além do Array e conseguir navegar livremente entre os valores: </p>

  
        const Encrypting = { 
            e: 'enter',
            i: 'imes',
            a: 'ai',
            o: 'ober',
            u: 'ufat',
        };
  
        function CriptografarMessage(inputMessage) {
            return inputMessage
                .split('')
                .map((char) => Encrypting[char] || char) 
                .join(''); 
        } 
<p> [Terçeiro Desafio]: Se eu tive problemas na hora de criptografar, é claro que também tive na hora de desfazer. A única coisa que mudou foi a parte de desfazer; além disso, também alterei a ordem das palavras na variável Encrypting: </p>

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

> [**NOTE**]: Não irei explicar o códigos apresentados, então atente-se as recomendações que estaram disponível futuramente!

## :computer: As Próximas Atualizações:

- [ ] Aprimoramento do CSS para que haja um padrão do **POSICIONAMENTO** elementos entre Dispositivos 
- [ ] Melhorar elementos em Dispositivos menores
- [ ] Criptografia com UTF-8 com acentuação completo
- [ ] Novos Designs

____

### ✨ Contribuições
Os contribuidores do Projeto

<table>
  <td align="center">
    <a href="https://github.com/Noir-DanielLucas" title="Meu Portifólio">
    <img src="https://avatars.githubusercontent.com/u/174957350?v=4" width="100px;" border-radius="23px;" alt="Perfil"/> <br>
    <sub>
      <b> Daniel Lucas </b>
    </sub>
    </a>
  </td>
</table>
