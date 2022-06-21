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
        semana.value == "" && 
        oracion_p.value == "" && 
        oracion_f.value == "" && 
        acomodador_1.value == "" && 
        acomodador_2.value == "" && 
        multimedia_1.value == "" && 
        multimedia_2.value == "" && 
        microfono.value == "" && 
        plataforma.value == "" && 
        lector_l.value == "" && 
        lector_a.value == "" && 
        presidente.value == ""){
        alert("Complete todos los campos");
    }else{
        const url = `https://wa.me/18096562791?text=${encodeURIComponent(`
        *Asignaciones Miércoles & Sábado*
        Semana: ${data.semana}
        - Acomodador_1: ${data.acomodador_1}
        - Acomodador_2: ${data.acomodador_2}
        - Multimedia_1: ${data.multimedia_1}
        - Multimedia_2: ${data.multimedia_2}
        - Microfono: ${data.microfono}
        - Plataforma: ${data.plataforma}
        - Lector_L: ${data.lector_l}
        - Lector_A: ${data.lector_a}
        - Oracion_P: ${data.oracion_p}
        - Oracion_F: ${data.oracion_f}
        - Presidente: ${data.presidente}`
    )}`;

    window.open((url),
    "", "width=300, height=300");
    console.log(data);
    }
}