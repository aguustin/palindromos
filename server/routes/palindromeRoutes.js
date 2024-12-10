import { Router } from "express";
import { isPalindromeController } from "../controllers/palindromeController.js";

const router = Router()

router.post('/ispalindrome', isPalindromeController) //route que lleva al controlador que guarda en la base de datos las palabras o frases que el usuario ingreso


export default router