$(document).ready(function () {

    if ($("#LabelInformacionPacienteDato1").html() == "" || $("#LabelInformacionPacienteDato1").html() == ":") $("#LabelInformacionPacienteDato1").parent().parent().hide();
    if ($("#LabelInformacionPacienteDato2").html() == "" || $("#LabelInformacionPacienteDato2").html() == ":") $("#LabelInformacionPacienteDato2").parent().parent().hide();
    if ($("#LabelInformacionPacienteDato3").html() == "" || $("#LabelInformacionPacienteDato3").html() == ":") $("#LabelInformacionPacienteDato3").parent().parent().hide();
       
    
});

function SeleccionarES() {
    __doPostBack('lang_es', 'ES')
}
function SeleccionarEN() {
    __doPostBack('lang_en', 'EN')
}

