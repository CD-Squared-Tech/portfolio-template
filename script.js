let themeDots = document.getElementsByClassName("theme-dot")

let theme = localStorage.getItem('theme')

if(theme == null) {
    setTheme('light')
}else{
    setTheme(theme)
}

for(var i=0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option Clicked: ', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'default.css'
    }
    if(mode == 'red'){
        document.getElementById('theme-style').href = 'red.css'
    }
    if(mode == 'black'){
        document.getElementById('theme-style').href = 'black.css'
    }
    localStorage.setItem('theme', mode)
}