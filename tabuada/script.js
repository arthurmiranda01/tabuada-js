function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.lenght == 0) {
        window.alert('Por Favor, Digite um Número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //pra limpar a tabuada após o uso
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c} `
            tab.appendChild(item)
            c++
        }
    }
}