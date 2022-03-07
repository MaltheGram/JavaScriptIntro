/*fetch("https://jsonplaceholder.typicode.com/users ", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:  JSON.stringify({
        name: 'Malthe'
    })
})
.then(res => {
    if (res.ok) {
        console.log("SUCCESS")
    } else
        console.log("Not successful")
})
.then(data => console.log(data))


function handleHttpErrors(res) {
    if (!res.ok) {
        return res.json()
            .then(body => {
                const error = new Error(body.message)
                error.apiError = body
                throw error
            })
    }
    return res.json()
}


fetch("https://api.punkapi.com/v2/beers/").then(handleHttpErrors)
    .then(data => console.log(data))
    .catch(err => {
        console.log(err.message);
        if (err.apiError) { //Check if this was an API-error
            console.error("Full API error: ", err.apiError)
        }
    })

 */

const url = 'https://jsonplaceholder.typicode.com/users/'

document.getElementById('search-btn').onclick = getUser
document.getElementById('getALl-btn').onclick = getAllUsers

function getUser(){
    const id = document.getElementById("searchUser").value

    fetch(url + id)
        .then(res => res.json())
        .then(data => {
            document.getElementById('id').innerText = data.id
            document.getElementById('name').innerText = data.name
            document.getElementById('phone').innerText = data.phone
            document.getElementById('street').innerText = data.address.street
            document.getElementById('city').innerText = data.address.city
        })
        .catch(err => {
            document.getElementById('error').innerText = err
        })
}
function getAllUsers(){

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const rows = data.map(user => `
            <tr>
                <td> ${user.name}</td>
                <td> ${user.phone}</td>
                <td> ${user.address.street}</td>
                <td> ${user.address.city}</td>
            </tr>`).join("")

            document.getElementById("table-body").innerHTML = rows
        })


}










