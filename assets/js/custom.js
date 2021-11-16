
function loadDesign(){
    let url = window.location.href;
    if (screen.width >= 768) {
        document.location = "index.html";
    }
    else if (screen.width < 730 && url.includes('ontwerpen')){
        let urlParams = new URLSearchParams(window.location.search); 
        console.log(urlParams.get('locatie'))
        document.getElementById('plaatsnaam').innerHTML = "Locatie: "+ urlParams.get('locatie');
        console.log("verified")
    }
    else{
        document.location = "index.html";
    }

}

function showAbout() {
    document.getElementById('about').style.display = "block";
    document.getElementById('herobox').style.display = "none";
 }
 function showthema() {
    document.getElementById('thema').style.display = "block";
    // document.getElementById('aboutGradient').style.display = "block";  

    if (document.getElementById("about").classList.contains("hidden")) { 
        document.getElementById('about').classList.remove("hidden");  
    } else { 
        document.getElementById('about').classList.add("hidden");   
    }
 }
 function themaButton() {
    document.getElementById('themabutton').style.display = "block";
 }
 function showDesign() {
    document.getElementById('design').style.display = "block";
    
    if (document.getElementById("thema").classList.contains("hidden")) { 
        document.getElementById('thema').classList.remove("hidden");  
    } else { 
        document.getElementById('thema').classList.add("hidden");   
    }
 }
 
