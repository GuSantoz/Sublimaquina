async function validarDados() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("password").value
    let cpf_cnpj = document.getElementById("cpf-cnpj").value
    let data = document.getElementById("date").value
    let terms = document.getElementById("terms").checked

    let warning = document.querySelector('.terms-warning')
    let url = "https://go-wash-api.onrender.com/api/user";


    if(!terms){
        warning.style.display = "block"
    }
    else{
        warning.style.display = "none"

        let parametros = {
            "name": name,
            "email": email,
            "user_type_id": 1,
            "password": senha,
            "cpf_cnpj": cpf_cnpj,
            "terms": 1,
            "birthday": data
        }
        try{
            let api = await fetch(url,{
                    method: "POST",
                    body:JSON.stringify(parametros),
                    headers: {
                        "Content-Type":"application/json"
                    }
                })

            if(!api.ok){
                throw new Error(`${api.status}: The request was well-formed but could not be processed.`)
            }
        } catch(error){
            
            alert(error)
        }
    }
            limparForm()
            alert('Cadastro efetuado com sucesso!')
}

const limparForm = () => {
    let name = document.getElementById("name")
    let data = document.getElementById("date")
    let email = document.getElementById("email")
    let senha = document.getElementById("password")
    let cpf_cnpj = document.getElementById("cpf-cnpj")
    let warning = document.querySelector('.terms-warning')

    name.value = ''
    data.value = ''
    email.value = ''
    senha.value = ''
    cpf_cnpj.value = ''
    warning.style.display = 'none'
}


async function login() {
    let email = document.getElementById("email").value
    let senha = document.getElementById("password").value

    let url = "https://go-wash-api.onrender.com/api/login";


    // if(!terms){ FAZER A VERIFICAÇÂO DE EMAIL E SENHA FUTURAMENTE
    //     warning.style.display = "block"
    // }
    // else{
    //     warning.style.display = "none"

        let parametros = {
            "email": email,
            "user_type_id": 1,
            "password": senha
        }
        try{
            let api = await fetch(url,{
                    method: "POST",
                    body:JSON.stringify(parametros),
                    headers: {
                        "Content-Type":"application/json"
                    }
                })

            if(!api.ok){
                throw new Error(`${api.status}: The request was well-formed but could not be processed.`)
            }
        } catch(error){
            
            alert(error)
        }
    }
            limparLogin()
            alert('Login efetuado com sucesso!')

const limparLogin = () => {
    let email = document.getElementById("email")
    let senha = document.getElementById("password")

    email.value = ''
    senha.value = ''
}

