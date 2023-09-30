const boxContainer = document.querySelector("#box-container")

// Left Container Button
const startSketchButton = document.querySelector("#start-button")
const resetSketchButton = document.querySelector("#reset-button")
const selectButton = document.querySelector("#select-button")

// Right Container Button
const blackColorButton = document.querySelector("#black-color")
const randomColorButton = document.querySelector("#rainbow-color")
const eraserButton = document.querySelector("#eraser")

// Right Container Event
startSketchButton.addEventListener("click", startSketch)



function startSketch(){
    

    // Menghapus kotak sebelum membuat kotak baru
    let hapusElemen = document.querySelectorAll(".hapus")
    hapusElemen.forEach((elemen) =>{
        elemen.remove()
    })

    // Mengambil ukuran Dari Select input
    let ukuranGrid = selectButton.value

    // Membuat besaran dari container Grid dengan menggunakan Loops dan value besarnya dari input user
    let ukuranKaliDua = ukuranGrid * ukuranGrid
    let banyakKolomGrid = ""

    for(let i = 0; i < ukuranGrid; i++){
        banyakKolomGrid += " 1fr"
    }
    boxContainer.style.gridTemplateColumns = banyakKolomGrid
    
    // Membuat kotak kotak grid dengan menggunakan loops
    // Dan memasukkan kotak grid dengan class yang ada 
    for(let i = 0; i < ukuranKaliDua; i++){
        let makeAGridBox = document.createElement("div")
        let makeASpanInBox = document.createElement("span") 
        
        makeAGridBox.classList.add("box")
        makeAGridBox.classList.add("hapus")

        // makeASpanInBox.textContent = `${i + 1}`
    
        boxContainer.appendChild(makeAGridBox)
        makeAGridBox.appendChild(makeASpanInBox)
    }


    alert(`Canvas Start Currently working on ${ukuranGrid} x ${ukuranGrid} `)

    // Function yang akan mengganti backgroundColor pada grid box pada saat di hover
    hoverChangeRandom()

    // Event jika Black button ditekan maka marker berubah jadi hitam
    blackColorButton.addEventListener("click", hoverChangeBlack)

    // Event Jika random button ditekan maka marker kembali ke mode random color
    randomColorButton.addEventListener("click", hoverChangeRandom)

    // Event jika eraser button ditekan maka marker menghapus warna atau kembali menjadi putih
    eraserButton.addEventListener("click", hoverEraser)

    // Event untuk Mengrestart canvas menjadi default
    resetSketchButton.addEventListener("click", resetCanvas)


}

// Function - Function yang akan mengganti background color grid box jika di hover kesana
function hoverChangeRandom(){
    alert("Random Color Activated")
    let gridBox = document.querySelectorAll(".box")

    gridBox.forEach((elemen) =>{
        elemen.addEventListener("mouseenter", ()=>{
            elemen.style.backgroundColor = randomColor()
        })
    })
}

function hoverChangeBlack(){
    alert("Black Marker Activated")
    let gridBox = document.querySelectorAll(".box")

    gridBox.forEach((elemen) =>{
        elemen.addEventListener("mouseenter", ()=>{
            elemen.style.backgroundColor = "black"
        })
    })
}

function hoverEraser(){
    alert("Eraser Activated")
    let gridBox = document.querySelectorAll(".box")

    gridBox.forEach((elemen)=>{
        elemen.addEventListener("mouseenter", ()=>{
            elemen.style.backgroundColor = "white"
        })
    })
}


// Mendapatkan random color dengan menggunakan rgb dan math random
function randomColor(){
    let red = parseInt(Math.floor(Math.random()* 256))
    let green = parseInt(Math.floor(Math.random()* 256))
    let blue = parseInt(Math.floor(Math.random()* 256))

    let color = `rgba(${red}, ${green}, ${blue})`
    return color
}


// Function yang akan mereset semua warna dicanvas ke default yaitu putih
function resetCanvas(){
    alert("CanVas Telah Direset")
    let hapusBackground = document.querySelectorAll(".box")
    hapusBackground.forEach((elemen)=>{
        elemen.style.backgroundColor = "white"
    })
}
