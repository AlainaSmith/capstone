const videoUpload = document.querySelector('#videoUpload')
const jarrodSubmitButton = document.querySelector('#jarrodSubmitButton')
const deleteSoloButton = document.querySelector('#deleteSoloButton')

const form = document.querySelector('form')
const baseURL = `http://localhost:4400/api/jarrodSoloEntry`

const jarrodSoloEntryCallback = ({ data: jarrodSoloEntry }) => {
    displayJarrodSoloEntry(jarrodSoloEntry)
    console.log('jarrod solo callback hit')
   }
const errCallback = err => console.log(err)

const getJarrodSoloEntry = () => 
axios.get(baseURL)
.then(jarrodSoloEntryCallback)
.catch(errCallback)

const createJarrodSoloEntry = (body) => 
axios.post(baseURL, body)
.then(jarrodSoloEntryCallback)
.catch(errCallback)

const deleteJarrodSoloEntry = (id) =>
axios.delete(`${baseURL}/${id}`)
.then(jarrodSoloEntryCallback)
.catch(errCallback)


function submitHandler(e) {
    e.preventDefault()
let title = document.querySelector('#title')
let video = document.querySelector('#video')
    
    let bodyObj = {
        title: title.value, 
        video: video.value
    }

    createJarrodSoloEntry(bodyObj)

    title.value = ''
    video.value = ''

    // getJarrodSoloEntry()
}


// function createJarrodSolo(solo) {
//     const jarrodSolo = document.createElement('div')
//     jarrodSolo.classList.add('jarrod-solo')

//     jarrodSolo.innerHTML = `<video alt='solo of jarrod' src=${solo.video} class="jarrod-video"/>
//     <p class="solo-title">${solo.title}</p>
//     <br>
//     <div class="soloForm">
//     <button onclick="deleteJarrodSoloEntry(${solo.id})">Delete</button>
//     </div>

// `

//     soloForm.appendChild(jarrodSolo)
// }

function displayJarrodSoloEntry(arr) {
    console.log('hit display jarrod solo')
    console.log(arr)
    soloForm.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createJarrodSolo(arr[i])
    }
}

jarrodSubmitButton.addEventListener('click', submitHandler)
deleteSoloButton.addEventListener('click', deleteJarrodSoloEntry)
getJarrodSoloEntry()