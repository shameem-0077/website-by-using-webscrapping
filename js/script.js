
window.addEventListener("load", function() {
    console.log("loaded")
    fetch("../marvel-data.json").then(response => {
        return response.json()
    }).then(data => {
        let ulElement = document.querySelector("#main-container > div > ul")

        let allLi = ""
        
        data.forEach(element => {
            let data = `<li><img src=${element["show poster link"]} alt="image"><h3>${element["show name"]}</h3></li>`
            ulElement.innerHTML += data
            
        });

    })
    
})