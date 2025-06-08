document.getElementById('datos-personales').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado');
});

// Preguntas del cuestionario (valor 1 si se marca "Verdadero", 0 si es "Falso")
const preguntas = [
    'Últimamente parece que me quedo sin fuerzas, incluso por la mañana',
    'Me parece muy bien que haya normas porque son una buena guía a seguir',
    'Disfruto haciendo tantas cosas diferentes que no puedo decidir por cuál empezar',
    'Gran parte del tiempo me siento débil y cansado',
    'Sé que soy superior a los demás, por eso no me importa lo que piense la gente'
];

const cuestionario = document.getElementById('cuestionario');

preguntas.forEach((texto, index) => {
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = texto;
    fieldset.appendChild(legend);

    const labelV = document.createElement('label');
    const radioV = document.createElement('input');
    radioV.type = 'radio';
    radioV.name = 'p' + index;
    radioV.value = '1';
    labelV.appendChild(radioV);
    labelV.append(' Verdadero');

    const labelF = document.createElement('label');
    const radioF = document.createElement('input');
    radioF.type = 'radio';
    radioF.name = 'p' + index;
    radioF.value = '0';
    labelF.appendChild(radioF);
    labelF.append(' Falso');

    fieldset.appendChild(labelV);
    fieldset.appendChild(labelF);
    cuestionario.insertBefore(fieldset, cuestionario.firstChild);
});

cuestionario.addEventListener('submit', function(event) {
    event.preventDefault();
    const respuestas = {};
    preguntas.forEach((_, index) => {
        const seleccion = cuestionario.querySelector('input[name="p' + index + '"]:checked');
        respuestas['p' + index] = seleccion ? seleccion.value : null;
    });
    console.log(respuestas);
    alert('Respuestas guardadas');
});
