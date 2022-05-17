var poruke = {
    'ime': [''],
    'poruka': ['']
}

document.getElementById("btnPoruka").onclick = function(){
    var ime1 = document.getElementById("ime").value;
    var poruka1 = document.getElementById("poruka").value;
    
    for(var i=0;i<poruke.ime.length; i++){
        for(var j=0;j<poruke.poruka.length; j++){
            poruke.ime[i] = ime1;
            poruke.poruka[j] = poruka1;
        }
        document.getElementById("ime8").innerHTML = poruke.ime[0];
        document.getElementById("tekst8").innerHTML = poruke.poruka[0];
    }
}