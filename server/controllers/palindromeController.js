import { v4 as uuidv4 } from 'uuid';
export const isPalindromeController = async (req, res) => {
    const {palindrome} = req.body;   //obtiene el dato enviado por el usuario

    let re = /[^a-zA-Z0-9]/g; //toma todos los caracteres especiales que no sean letras ni numeros
    let lowRegStr = palindrome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(re, ''); //quita el acento a las letras y reemplaza los caracteres especiales por vacio (los elimina)
    let reverseStr = lowRegStr.split('').reverse().join(''); //invierte la palabra o frase ingresada
    let palKey = uuidv4();
    if(reverseStr === lowRegStr){
        
        const palObj = ({
            _id: palKey,
            phrase: palindrome,
            isPalindrome: 1
        })
     
        res.status(200).json(palObj)
    }else{
        const palObj = ({
            _id: palKey,
            phrase: palindrome,
            isPalindrome: 0
        })

        res.status(200).json(palObj)
    }

}