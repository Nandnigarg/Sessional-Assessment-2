document.querySelector('#button').addEventListener('click', () => {
    var val = document.querySelector('#sinput').value
    var comp = val-1
    /* AJAX */
    const xhr = new XMLHttpRequest()
    let url = 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09'

    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        let output = ``
        if (xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)
            console.log(response)
            for (let i = 0; i < response.length; i++) {
                if(i === comp){
                    output = `
                        <div>
                            <table style="color:white;">
                                <tr>
                                    <td style="padding:5px 20px"><h4>Name: </h4></td>
                                    <td style="padding:5px 20px"><h4>${response[i].name}</h4><td>
                                </tr>
                                <tr>
                                    <td style="padding:5px 20px"><h4>Email: </h4></td>
                                    <td style="padding:5px 20px"><h4>${response[i].email}</h4><td>
                                </tr>
                                <tr>
                                    <td style="padding:5px 20px"><h4>Username: </h4></td>
                                    <td style="padding:5px 20px"><h4>${response[i].username}</h4><td>
                                </tr>
                                <tr>
                                    <td style="padding:5px 20px"><h4>Mobile No: </h4></td>
                                    <td style="padding:5px 20px"><h4>${response[i].phone}</h4><td>
                                </tr>
                                <tr>
                                    <td style="padding:5px 20px"><h4>Website: </h4></td>
                                    <td style="padding:5px 20px"><h4> ${response[i].website}</h4><td>
                                </tr>
                            </table>
                        </div>
                    `
                }
            }
            console.log(output)
            document.querySelector('#data').innerHTML = output
        }
    }

    xhr.send()

})