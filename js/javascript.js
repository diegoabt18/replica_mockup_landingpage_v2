begin.addEventListener('click', e =>{
    e.preventDefault()

    let begin = document.getElementById('begin')
    let learning = document.getElementById('learning')
    window.location.replace("index.html#inicio")
    begin.setAttribute('class','new_menu')
    notes.setAttribute('class','old_menu')
    learning.setAttribute('class','old_menu')
})

notes.addEventListener('click', e =>{
    e.preventDefault()

    let begin = document.getElementById('begin')
    let learning = document.getElementById('learning')
    window.location.replace("index.html#notas")
    begin.setAttribute('class','old_menu')
    notes.setAttribute('class','new_menu')
    learning.setAttribute('class','old_menu')
})

learning.addEventListener('click', e =>{
    e.preventDefault()

    let begin = document.getElementById('begin')
    let learning = document.getElementById('learning')
    window.location.replace("index.html#aprendijaze")
    begin.setAttribute('class','old_menu')
    notes.setAttribute('class','old_menu')
    learning.setAttribute('class','new_menu')
})
