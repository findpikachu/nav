function navgation() {
    let keys = [
        ['q','w','e','r','t','y','u','i','o','p'],
        ['a','s','d','f','g','h','j','k','l'],
        ['z','x','c','v','b','n','m']
    ]
    let hash = {
        'q': 'qq.com',
        'w': 'weibo.com',
        'e': 'ele.me',
        'r': 'renren.com',
        't': 'tianya.com',
        'y': 'youtube.com',
        'u': 'uc.com' ,
        'i': 'iqiyi.com',
        'o': 'opera.com',
        'p': undefined,
        'a': 'acfun.tv',
        's': 'sohu.com',
        'z': 'zhihu.com',
        'm': 'www.mcdonalds.com.cn'
    }
    hash = createKeyboard(keys,hash)
    keyRelateWebsite(hash)

}

function keyRelateWebsite(hash) {
    document.onkeypress = function (event) {
        window.open(`http://${hash[event.key]}`,"_blank")
    }
}
function editWebsite(edit,img,name,hash) {
    edit.onclick = (event) => {
        let newWebsite = prompt("给我一个网址")
        hash[name] = newWebsite
        if (newWebsite) {
            img.src = `http://${hash[name]}/favicon.ico`
        }
        localStorage.setItem("hash",JSON.stringify(hash))

    }
}
function createKeyboard(keys,hash) {
    let hashInLocalStorage = localStorage.getItem("hash")
    if (hashInLocalStorage) {
        hash = JSON.parse(hashInLocalStorage)
    }

    let keyboard = document.querySelector("#keyboard")
    for (let j = 0; j < keys.length; j++) {
        let row = document.createElement("div")
        row.className = "row"
        for (let i = 0; i < keys[j].length; i++) {
            let kbd = document.createElement("kbd")
            let text = document.createElement("span")
            let edit = document.createElement("button")
            let img = document.createElement("img")
            text.className = "text"
            text.textContent = keys[j][i]
            edit.textContent = "E"
            img.src = `http://${hash[keys[j][i]]}/favicon.ico`
            kbd.appendChild(text)
            kbd.appendChild(img)
            kbd.appendChild(edit)
            row.appendChild(kbd)
            editWebsite(edit,img,keys[j][i],hash)
        }
        keyboard.appendChild(row)
    }
    return hash
}



navgation()