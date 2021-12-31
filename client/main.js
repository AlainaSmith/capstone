// const bandMembersCards = document.querySelector('#band-members')


// const form = document.querySelector('form')
// const baseURL = `http://localhost:3210/api/bandMembers`

// const bandMembersCallback = ({ data: bandMembers }) => {
//      displaybandMembers(bandMembers)
//      console.log('bandMembers callback hit')
//     }
// const errCallback = err => console.log(err)

// const getBandMembers = () => axios.get(baseURL).then(bandMembersCallback).catch(errCallback)
// // const createHappys = body => axios.post(baseURL, body).then(happysCallback).catch(errCallback)
// // const deleteHappys = (id) =>axios.delete(`${baseURL}/${id}`).then(happysCallback).catch(errCallback)

// function submitHandler(e) {
//     e.preventDefault()
// let title = document.querySelector('#title')
// let imageURL = document.querySelector('#video')
    
//     let bodyObj = {
//         title: title.value, 
//         imageURL: imageURL.value
//     }

//     createBandMembers(bodyObj)

//     title.value = ''
//     imageURL.value = ''

//     getBandMembers()
// }


// function createHappyCard(happy) {
//     const happyCard = document.createElement('div')
//     happyCard.classList.add('happy-card')

//     happyCard.innerHTML = `<img alt='happy cover' src=${happy.imageURL} class="happy-cover"/>
//     <p class="happy-title">${happy.title}</p>
//     <br>
//     <div class="happys-container">
//     <button onclick="deleteHappys(${happy.id})">Delete</button>
//     </div>

// `

//     happysContainer.appendChild(happyCard)
// }
