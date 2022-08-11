document.querySelector('#button').addEventListener('click', () => {
    let val = document.querySelector('#sinput').value
    let comp = val - 1
    /* AJAX */
    const xhr = new XMLHttpRequest()
    let url = 'https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09'

    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        let output = ``
        if (xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)
            for (let i = 0; i < response.length; i++) {
                if (i === comp) {
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
                                <tr>
                                    <td style="padding:5px 20px"><h4>Street: </h4></td>
                                    <td style="padding:5px 20px"><h4> ${response[i].address.street}</h4><td>
                                </tr>
                                <tr>
                                    <td style="padding:5px 20px"><h4>Suite: </h4></td>
                                    <td style="padding:5px 20px"><h4> ${response[i].address.suite}</h4><td>
                                </tr>
                                <tr>
                                    <td style="padding:5px 20px"><h4>City: </h4></td>
                                    <td style="padding:5px 20px"><h4> ${response[i].address.city}</h4><td>
                                </tr>
                                <tr>
                                    <td style="padding:5px 20px"><h4>Zipcode: </h4></td>
                                    <td style="padding:5px 20px"><h4> ${response[i].address.zipcode}</h4><td>
                                </tr>
                                <tr>
                                    <td style="padding:5px 20px"><h4>Company: </h4></td>
                                    <td style="padding:5px 20px"><h4> ${response[i].company.name}</h4><td>
                                </tr>
                            </table>
                        </div>
                    `
                }
            }
            document.querySelector('#data').innerHTML = output
        }
    }

    xhr.send()

})

document.querySelector('#pblog').addEventListener('click', (e) => {
    e.preventDefault()
    let name = document.querySelector('#pval').value
    let fname = '-'
    let lname = fname + name
    let head = document.querySelector('#phead').value
    let para = document.querySelector('#pmess').value

    const odiv = document.createElement('div')
    odiv.setAttribute('class', 'col-lg-6')

    const heading = document.createElement('h1')
    heading.setAttribute('class', 'bhead')
    heading.setAttribute('class', 'text text-primary')
    heading.textContent = head

    const title = document.createElement('i')
    title.setAttribute('class', 'text text-secondary')
    title.textContent = lname

    const paragraph = document.createElement('p')
    paragraph.textContent = para

    odiv.appendChild(heading)
    odiv.appendChild(title)
    odiv.appendChild(paragraph)

    document.querySelector('#brow').appendChild(odiv)
})