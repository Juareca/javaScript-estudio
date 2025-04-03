let w = document.getElementById("w");
let a = document.getElementById("a");
let s = document.getElementById("s");
let d = document.getElementById("d");

document.addEventListener("keydown", function(event) {
    if (event.key === "w") {
        a.style.backgroundColor = "black";
        s.style.backgroundColor = "black";
        d.style.backgroundColor = "black";
        w.style.backgroundColor = "red"; // Cambia el fondo de la div .la_w
    }
    
    if (event.key === "a") {
        w.style.backgroundColor = "black";
        s.style.backgroundColor = "black";
        d.style.backgroundColor = "black";
        a.style.backgroundColor = "red";
    }
    
    if(event.key === "s"){
        w.style.backgroundColor = "black";
        d.style.backgroundColor = "black";
        a.style.backgroundColor = "black";
        s.style.backgroundColor = "red";
    }
    
    if(event.key === "d"){
        w.style.backgroundColor = "black";
        s.style.backgroundColor = "black";
        a.style.backgroundColor = "black";
        d.style.backgroundColor = "red";
    } 

    if(event.key !=="w" && event.key !== "a" && event.key !== "s" && event.key !== "d"){
        w.style.backgroundColor = "black";
        s.style.backgroundColor = "black";
        a.style.backgroundColor = "black";
        d.style.backgroundColor = "black";
    }
    
});
