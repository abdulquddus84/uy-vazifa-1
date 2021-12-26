const panels = document.querySelectorAll('.panel')
console.log(panels)
panels.forEach((panel)=>{
panel.addEventListener('click',()=>{
    rm()
    panel.classList.add('active')
})
})
function rm(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}