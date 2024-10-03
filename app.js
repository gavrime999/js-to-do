// Массивы

// const array = [1, 2, 3, 5, 20, 42]
// const arrayStrings = ['a', 'b', 'c']
// const array = new Array(1, 2, 3, 5, 20, 42)

// console.log(array.length)

/*
console.log(array[3])
console.log(array[array.length - 1]) // array[6 - 1]
array[0] = 'Privet!'
console.log(array)
array[array.length] = 'becon'
*/

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// console.log(inputElement.value)

// const notes = ['Диман', 'Роман', 'Денис']

/* function render(){

    /* for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i])) 

    }
    */
    
   // for (let note of notes) {
       // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note)) 
    // }
    // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[0])) 
    // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[1])) 
    // listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[2])) 
// }

// render ()


/* createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }

    // listElement.innerHTML = 
    listElement.insertAdjacentHTML('beforeend', 
        getNoteTemplate(inputElement.value)
    )
    inputElement.value = ''
}
*/

/* function getNoteTemplate(title) {
    return `<li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <span>${title}</span>
              <span>
                <span class="btn btn-small btn-success">&check;</span>
                <span class="btn btn-small btn-danger">&times;</span>
              </span>
            </li>`
}
*/

// Object Theory


/* const person = {
    firstName: 'Dmitriy',
    lastName: 'Gavrilov',
    fatherName: 'Alekseevitch',
    year: 1993,
    hasWife: true,
    hasChild: true,
    languages: ['ru', 'en', 'ua'],
    getFullName: function () {
        console.log(person.firstName + ' ' + person.fatherName + ' ' + person.lastName)
    },
    getOldes: function () {
        console.log(new Date().getFullYear() - person.year)
    }
}

console.log(person.year)
console.log(person.getFullName)
console.log(person.getOldes)
console.log(person['languages'])
person.getFullName()
*/

const notes = [
    {
        title: 'Диман',
        completed: 'false',
    }, 
    {
        title: 'Роман',
        completed: 'true',
    }, 
    {
        title: 'Алексей',
        completed: 'false',
    }
]

function render() {
    /* for (let note of notes) {
         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note)) 
     }
    */
   listElement.innerHTML = ''
    if (notes.length === 0){
        listElement.innerHTML = '<p>Нет заметок</p>'
    }
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i)) 

    }
}

render()


createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false,
    }
    notes.push(newNote)
    render()
    inputElement.value = ''
}

listElement.onclick = function (event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type =  event.target.dataset.type
    
        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            notes.splice(index, 1)
        }
        render()
    }

}

function getNoteTemplate(note, index) {
    return `<li
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
              <span>
                <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-type="toggle" data-index="${index}">&check;</span>
                <span class="btn btn-small btn-danger" data-type="remove" data-index="${index}">&times;</span>
              </span>
            </li>`
}