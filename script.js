const bodyele = document.querySelector("body")

bodyele.addEventListener("mousemove",(e)=>{
    const xCord = e.offsetX
    const yCord = e.offsetY

    const spanele = document.createElement("span")

    spanele.style.left = `${xCord}px`
     spanele.style.top = `${yCord}px`

     const size = Math.random()*100
     spanele.style.width = `${size}px`
      spanele.style.height = `${size}px`

    bodyele.appendChild(spanele)


    setTimeout(()=>{
        spanele.remove()

    },3000)

})