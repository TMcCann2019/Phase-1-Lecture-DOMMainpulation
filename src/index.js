// const h1 = document.getElementById('page_title')
// const h1 = document.querySelector('h1')
const h1 = document.querySelector('#page_title')
h1.style.color = 'green'

const p1 = document.querySelector('p')
// p1.innerHTML = "inner HTML"
// p1.textContent = "text content"
p1.innerText = "inner text"

const ol = document.querySelector('ol')
// const li = document.createElement('li')
//li.textContent = "This is the first list item!"
// li.innerText = "This is the first list item!"

//loop here
// for (let i = 0; i < 5; i++){
//     const li = document.createElement('li')
//     li.textContent = i + 1
//     ol.appendChild(li)
// }

// console.log(ol)

const letters = ['a', 'b', 'c', 'd', 'e']
letters.forEach((letter) =>{
    const li = document.createElement('li')
    li.textContent = letter
    // ol.append(li) //can be either
    ol.appendChild(li) //can be either
})

// let i = 0
// while (i <5){
//     //do stuff
//     i++
// }
// ol.appendChild(li) //makes sure it is under/the child of the item

// prepend is to the beginning

const p_last = document.querySelector('.removable')
p_last.remove()