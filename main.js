function loadData(){
    var patientName = getParameterByName('patientName');
    var patientDNI = getParameterByName('patientDNI');
    var result = getParameterByName('result');
    var refNum = getParameterByName('refNum');
    var sampleDate = getParameterByName('sampleDate');
    var validDate = getParameterByName('validDate');
    var qr = getParameterByName('qr');

    //Change simple stuff
    document.getElementById("DatoInformacionPacienteReferencia").innerHTML = refNum
    document.getElementsByClassName("data-text")[1].innerHTML = sampleDate
    document.body.innerHTML = document.body.innerHTML.replace('__valid_until__', validDate);
    document.getElementById("DatoInformacionPacienteDato1").innerHTML = patientName
    document.getElementById("DatoInformacionPacienteDato2").innerHTML = patientDNI

    document.getElementById("CodigoQr").src = "https://i.imgur.com/"+qr+".png"
    
    //Positive or negative stuff
    //Default is set to negative
    if (result == "positive") {
        document.getElementsByClassName("caja-label-resultado-0")[0].style.backgroundColor = "var(--rojo-resultado-light)";
        document.getElementsByClassName("caja-label-resultado-0")[0].style.color = "var(--rojo-resultado)";

        document.getElementsByClassName("caja-dato-resultado-0")[0].style.backgroundColor = "var(--rojo-resultado)";
        document.getElementsByClassName("caja-dato-resultado-0")[0].style.color = "white";

        document.getElementsByClassName("margen-6")[2].innerHTML = "Positive"
    }
    
}

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
