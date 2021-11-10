let like = document.getElementById("like")
let watchLater = document.getElementById("wl")
let likeicon = document.querySelector(".fa-heart")
let watchLaterIcone = document.querySelector(".fa-clock")

function toggelClass(target) {
    if(target.classList.contains('far')){
        target.classList.remove('far')
        target.classList.add('fa')
    }else{
        target.classList.remove('fa')
        target.classList.add('far')
    }
}

like.addEventListener('click' , ()=>{
    toggelClass(likeicon)
})

watchLater.addEventListener('click' , ()=>{
    toggelClass(watchLaterIcone)
})

