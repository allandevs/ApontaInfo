export const global = {

    BASE_API_URL : 'https://apontainfoapi.azurewebsites.net/',
    BASE_API_VIACEP : "https://viacep.com.br/ws/",
    // BASE_API_URL : 'http://localhost:8080/',
    telmask : ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    cnpjMask : [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/],
    cepMask : [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
}