/* AJAX */
const xhr = new XMLHttpRequest()
let url = 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09'

xhr.open('GET', url)

xhr.onreadystatechange = () => {
    var output = ``
    if (xhr.status === 200 && xhr.readyState === 4) {
        const response = JSON.parse(xhr.responseText)
        console.log(response)
        for(let i=0; i<response.length; i++){
            output += `${response[i].id}${response[i].name}${response[i].username}`
        }
        console.log(output)
    }
}

xhr.send()