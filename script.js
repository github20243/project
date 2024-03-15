const input = document.querySelector('#input')
const result = document.querySelector('#result')
const taskList = document.querySelector('#list')

let xleb = [];

const Addtaski = () => {
    const inputsElement = input.value.trim()

    if (inputsElement){
    const newTask = {
        id: Math.random().toString(),
        title: inputsElement,
        complate: false,
    }
    renders()
    }else {
    alert("Напишите иначе не будет работать")
    }
    input.value = ""
    }    

    // const deletTask = (deleteId) => {
    //     const filtersTask = xleb.filter(({id}) => id !== deleteId)
    //     xleb = filtersTask
    //     renders()
    // }

    // const toggleTask = (ToggleId) => {
    //     const togleFilter = xleb.find(({id}) => id === ToggleId)
    //     togleFilter
    // }

    function renders () {
        taskList.innerHTML = ''
        xleb.map(({id,title,complate}) => {
            const taskBox = document.createElement("li")
            const checkBox = document.createElement('input')
            checkBox.setAttribute('type','checkbox')
            checkBox.checked = complate
            checkBox.onchange = ()  => togleTask(id)

            const qwer = document.createElement("p")
            qwer.textContent = title;
            taskBox.style.textDecoration = complate ?
            // const deleteBtn = document.querySelector("button")
        })
    }