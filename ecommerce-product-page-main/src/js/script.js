const portalBtn = document.querySelectorAll('.portal_btn')
const svgCard = document.querySelector('svg')
const cardField = document.querySelector('.card')

let parrentEl = ''
// classList add function
const addClassList = (targetEl, className, allEl) => {
    allEl.forEach(el => {
        el.classList.remove(className)
    })
    targetEl.classList.add(className)
}

// close Card Field
const removeClassList = (el, className) => {
    el.classList.remove(className)
}

// Navbar btns event
portalBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        parrentEl = e.target.parentElement
        addClassList(parrentEl, 'active', portalBtn)
    })
})

// slider function
const slider = (idx, productImg) => {
    productImg.forEach((img, i) => {
        img.style.transform = `translateX(${(idx - i) * 100}%)`
    })
}
// catch slider elements in html
const slideController = document.querySelectorAll('.controller .col-2')
const productImg = document.querySelectorAll('.product_img img')
slideController.forEach((item, idx) => {
    item.addEventListener('click', (e) => {
        addClassList(item, 'active', slideController)
        slider(idx, productImg)
    })
})

const calcProduct = document.querySelector('.calc_product')
const screen = document.querySelector('.calc_product .screen')

const decrementFn = (count) => {
    return count -= 1
}

const incrementFn = (count) => {
    return count += 1
}

let count = 0
calcProduct.addEventListener('click', (e) => {
    let targetEl = e.target

    if (targetEl.classList.contains("decrement")) {
        count = decrementFn(count)
    }
    if (targetEl.classList.contains("increment")) {
        count = incrementFn(count)
    }
    screen.textContent = count

})

// add to card list
let productObj = {}
const addCard = document.querySelector('.add_card')

function addToCard() {
    const productName = document.querySelector('.product_name')
    productObj = {
        productName: productName.textContent,
        productCount: screen.textContent
    }
    cardListRender(productObj)
    screen.textContent = 0
    count = 0
}

addCard.addEventListener('click', (e) => {
    e.target.textContent === 'add to card' ? addToCard() : console.error('this is not current el')
})

// show card field
svgCard.addEventListener('click', () => {
    cardField.classList.add('active')
})
// hide card field
cardField.addEventListener('click', (e) => {
    removeClassList(e.target, 'active')
})

// card list render
const arr = []
function cardListRender(obj) {
    const { productName, productCount } = obj
    arr.push(obj)
    console.log(arr);
    const ul = document.createElement('ul')
    const li = document.createElement('li')

    const productNameList = document.createElement('span')
    productNameList.textContent = productName

    const productCountList = document.createElement('b')
    productCountList.textContent = productCount

    li.appendChild(productNameList)
    li.appendChild(productCountList)

    ul.appendChild(li)
    cardField.appendChild(ul)

    localStorage.setItem('data', JSON.stringify(arr))
}