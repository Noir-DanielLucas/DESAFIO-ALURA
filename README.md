# Alura Challenge - Decodificador de TEXTO

<img src="https://github.com/user-attachments/assets/1d7d12be-34ad-4a7e-9881-3d8993abd62f" width="800px;" alt="PlaceHolder">

## Recomendações

+ Exmeplo 01
+ Exemplo 02
+ Exemplo 03
+ Exemplo 04

> [**NOTE**]: As recomendações logo estaram disponíveis

## :file_folder: Do que se trata esse Projeto
Esse Projeto é um desafio final feito para os concursantes do Curso Iniciante em Programação T7 - ONE que têm como Colaboradores a **Unimed, Oracle e Alura** com o objetivo
de induzir os estudantes a botarem em prática o que aprenderam nos cursos realizados e autodesafiar-se a aprender coisas novas, como já deve percebido é "Decodificador" de texto.

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
<p> [Primeiro Desafio que <strong> ENFRENTEI </strong>]: Foi o Figma sendo que o Site Figma infelizmente é pesado em certos dispositivos sendo o meu um deles mas não impossibilita de acessar os dado nele contido pórem continua complicado,
esse foi um dos motivos para não usar ele já que estva levando meio minuto para conseguir visualizar um elemento. </p>

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
<p> [Terçeiro Desafio]: Se eu tive problema na hora de Criptografar é claro que tive na hora de desfazer mas a única coisa que mudou foi parte de desfazer, fora isso também mudei a ordem das palavras na váriavel Encrypting: </p>

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

> [**NOTE**]: Não ire explicar o códigos apresentados então atente-se as recomendações que estão disponível futuramente!

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
