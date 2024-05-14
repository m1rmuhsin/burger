// const a = document.querySelector('.header__timer-extra');
// let n = 0 

// function tez_aylanib_chiqish(n) {
//     a.innerHTML = n ++;
//     if (n <= 80) {
//         console.log(n);
//         setTimeout(() => {
//             tez_aylanib_chiqish(n + 1);
//          }, 100); 
//     }else if (n <= 90){
//         console.log(n);
//         setTimeout(() => {
//             tez_aylanib_chiqish(n + 1);
//          }, 900)
//     }else if (n <=100){
//         console.log(n);
//         setTimeout(() => {
//             tez_aylanib_chiqish(n + 1);
//          }, 1000)

//     }               
// }

// tez_aylanib_chiqish(1);




const foods = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kcall: 400,

        get calcSum(){
            return this.price * this.amount
        },
        get kcallSum(){
            return this.amount * this.kcall
        }
    },
    freshBurger: {
        name: "GAMBURGER FRESH",
        price: 20500,
        amount: 0,
        kcall: 700,
        get calcSum(){
            return this.price * this.amount
        },
        get kcallSum(){
            return this.amount * this.kcall
        }
    },
    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kcall: 100,
        get calcSum(){
            return this.price * this.amount
        },
        get kcallSum(){
            return this.amount * this.kcall
        }
    },
}








let btn = [...document.querySelectorAll('.main__product-btn')];
console.log(btn)

for (let i = 0; i < btn.length; i++) {

    btn[i].addEventListener('click',function(){
        prepare(this)
    })
    
}

function prepare(item) {
    let parent = item.closest(".main__product")
    let parentId = parent.getAttribute('id')
    let num = parent.querySelector('.main__product-num')
    let price = parent.querySelector('.main__product-price span')
    let kcall = parent.querySelector('.main__product-kcall span')
    let sym = item.getAttribute('data-symbol')
    // console.log(parent)
    // console.log(parentId)
    console.log(sym)
    let count = foods[parentId].amount
    console.log(count)
    if (sym == "+") {
        count++
    }else if (sym == "-" && count > 0){
        count--
    }
    
    foods[parentId].amount = count
    num.innerHTML = count
    price.innerHTML = foods[parentId].calcSum
    kcall.innerHTML = foods[parentId].kcallSum
}

// by teacher

let time = document.querySelector('.header__timer-extra')
let stop;
function lvl() {
    time.innerHTML++

    if (time.innerHTML <= 70) {
        stop = setTimeout ( () => {
            lvl()
        },10)

        
    }else if(time.innerHTML <= 90){
        stop = setTimeout(() => {
           lvl() 
        },100);
    }else if(time.innerHTML <= 100){
        stop = setTimeout(() => {
           lvl() 
        },500);
    }
    if(time.innerHTML == 100){
        clearInterval(stop)
    }
    
}
lvl()
//

let receipt = document.querySelector('.receipt');
let receiptWindow = document.querySelector('.receipt__window')
let receiptWindowOut = document.querySelector('.receipt__window-out')
let addCart = document.querySelector('.addCart')

addCart.addEventListener('click', function(){
    receipt.style.display = "block"
    setTimeout(() => {
        receipt.style.opacity = 1
        receiptWindow.style.top = "20%"
    }, 100);

    let menu = "Sizning chekingiz: \n\n"
    let totalPrice = 0
    let totalKcall = 0

    for (const key in foods) {
        if(foods[key].amount){
            menu+= ${foods[key].name} ${foods[key].amount} ${foods[key].price} = ${foods[key].calcSum} \n\n
            totalPrice += foods[key].calcSum
            totalKcall += foods[key].kcallSum
        }
    }

    // receiptWindowOut.innerHTML = ${menu} \n ${totalKcall} kaloriya \n\n Jami summa: ${totalPrice}
})

let receiptWindowBtn = document.querySelector('.receipt__window-btn')

receiptWindowBtn.addEventListener('click', function(event){
    if (event.target == event.currentTarget) {
        receipt.style.opacity = 0
        receiptWindow.style.top = "-100%"

        setTimeout(() => {
            receipt.style.display = "none"
            location.reload
        }, 200);
    }
    
})






//
// delivery
// let receipt = documnet.querySelector('.receipt')
// let receiptWindow = document.querySelector('.receipt__window')
// let receiptWindowOut = document.querySelector('.receipt__window-out')
// let addCart = document.querySelector('.addCart')
// let receipWtindowBtn = document.querySelector('.receipt__window-btn')


// addCart.addEventListener('click',function (){
//     receipt.style.display = "block"
//     setTimeout(() => {
//         receipt.style.opacity = 1
//         receiptWindow.style.top = "20%"
//     },100);
    
//     let menu = " Sizning chekingiz: \n\n"
//     let totalPrice = 0
//     let totalKcall = 0

//     for (const key in foods) {
//         // const.log(foods[key])

//         if(foods[key].amount){
//             menu+=`${foods[key].name}${foods[key].amount} x ${foods[key].price} = ${foods
//             [ket].calcSum} \n\n`
//            totalPrice+= foods[key].calcSum
//            totalKcall += foods[key].kcallSum

//         }
        
//     }
//     receiptWindowOut.innerHTML= `${menu} \n ${totalkcall} kaloriya \n\n Jami summa: ${totalPrice} sum`
// })


// receipWtindowBtn.addEventListener('click',function (event){
//     if(event.target == event.currentTarget){
//         receipt.style.opacity = 0 
//         receipWtindow.style.top = "-100"

//         setTimeout(() => {
//             receipt.style.display = "none"
//             location.reload()
//         }, 200);
//     }
// })



let mainProductInfo = [...document.querySelector('.main__product-info')]
for (let i = 0; i < mainProductInfo .length; i++) {
    mainProductInfo [i].addEventListener('click',function (){
   showImage(this)
    })
    
}
function showwImage (viewImage){
    let parent = viewImage.closest('.main__product')
    let proImage = parent.querySelector(".main__product img")
    let view = document.querySelector('.view')
    let image = document.querySelector(".view img")
    let viewClose = document.querySelector('.view__close')


    view.classList.add('active')

    let x = proImage.getAttribute('src')

    if(proImage.hasAttribute("src")){
        image.setAttribute("src",x)
    }

    view.addEventListener('click',function(e){
        if(e.target == e.currentTarget){
            view.classList.remove('active')
        }
    })
    viewClose.addEventListener('click',function (e){
        view.classList.remove('active')
    })
}