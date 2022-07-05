const semana = document.getElementById("semana");
const oracion_p = document.getElementById("oracion_p");
const oracion_f = document.getElementById("oracion_f");
const acomodador_1 = document.getElementById("acomodador_1");
const acomodador_2 = document.getElementById("acomodador_2");
const multimedia_1 = document.getElementById("multimedia_1");
const multimedia_2 = document.getElementById("multimedia_2");
const microfono = document.getElementById("microfono");
const plataforma = document.getElementById("plataforma");
const lector_l = document.getElementById("lector_l");
const lector_a = document.getElementById("lector_a");
const presidente = document.getElementById("presidente");

function sent(){

    const data ={
        semana: semana.value,
        oracion_p: oracion_p.value,
        oracion_f: oracion_f.value,
        acomodador_1: acomodador_1.value,
        acomodador_2: acomodador_2.value,
        multimedia_1: multimedia_1.value,
        multimedia_2: multimedia_2.value,
        microfono: microfono.value,
        plataforma: plataforma.value,
        lector_l: lector_l.value,
        lector_a: lector_a.value,
        presidente: presidente.value
    }

    if(
        semana.value == "" || 
        oracion_p.value == "" || 
        oracion_f.value == "" || 
        acomodador_1.value == "" || 
        acomodador_2.value == "" || 
        multimedia_1.value == "" || 
        multimedia_2.value == "" || 
        microfono.value == "" || 
        plataforma.value == "" || 
        lector_l.value == "" || 
        lector_a.value == "" || 
        presidente.value == ""){
        swal('Complete todos los campos!!','','error')
    }else{
        const url = `https://wa.me/?text=${encodeURIComponent(`
        *Asignaciones Miércoles & Sábado*\n
        Semana: ${data.semana}\n
        - Acomodador_1: _${data.acomodador_1}_
        - Acomodador_2: _${data.acomodador_2}_
        - Multimedia_1: _${data.multimedia_1}_
        - Multimedia_2: _${data.multimedia_2}_
        - Microfono: _${data.microfono}_
        - Plataforma: _${data.plataforma}_
        - Oracion_P: _${data.oracion_p}_
        - Lector_L: _${data.lector_l}_
        - Oracion_F: _${data.oracion_f}_\n
        - Lector_A: _${data.lector_a}_
        - Presidente_S: _${data.presidente}_`
    )}`;

    window.open((url),
    "", "width=1000, height=700");
    }
}