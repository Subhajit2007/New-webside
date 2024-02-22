let btn = document.querySelector("#btn1")
let btnreset = document.querySelector("#reset")
let body = document.querySelector("body")

i = localStorage.getItem("clickRate")



btn.onclick = function() {

    i++
    btn.textContent = `click ${i} times`
    localStorage.setItem("clickRate", `${i}`)
}
//setInterval(btn.onclick,100)
body.onload = function() {
    let i = localStorage.getItem("clickRate")
    if (i == undefined || i == null) {
        i = 0
    }
    console.log(i)
    btn.textContent = `click ${i} times`


}
btnreset.onclick = function(){
    localStorage.remove("clickRate")
    location.reload()
}