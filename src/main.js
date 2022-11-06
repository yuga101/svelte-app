import './app.css'
import App from './App.svelte'
import {addMessages, init} from "svelte-i18n"

addMessages("english", {
  welcome_to: "Welcome to",
  signup: "Sign Up",
  email: "E-mail",
  password: "Password",
  verify: "Verify Password"
})
addMessages("german", {
  welcome_to: "Willkommen bei",
  signup: "Anmelden",
  email: "E-Mail-Adresse",
  password: "Passwort",
  verify: "Passwort bestätigen"
})
addMessages("italian", {
  welcome_to: "benvenuti in",
  signup: "Registrati",
  email: "indirizzo email",
  password: "parola d’ordine",
  verify: "Verifica password"
})

init({initialLocale: 'german',
  fallbackLocale: 'english',
})

const app = new App({
  target: document.getElementById('app')
})

export default app
