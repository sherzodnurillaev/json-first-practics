fetch('https://jsonplaceholder.typicode.com/todos')

.then(res => res.json())
.then(data => reload(data))
.catch(error => console.log(error))

let grid = document.querySelector('.grid')

function reload(data) {
    data.forEach(item => {
        const box = document.createElement('div')
        let txt = document.createElement('h1')
        let span = document.createElement('span')
    
        box.classList.add('box')
        txt.innerText = item.title

        if (item.completed) {
            span.innerHTML = 'Готово'
            span.style.color = 'blue'
        } else {
            span.innerHTML = 'Не выполнено'
        }

        grid.append(box)
        box.append(txt, span)
    });
}
