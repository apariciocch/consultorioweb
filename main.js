document.getElementById('datos-personales').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado');
});

// Preguntas del cuestionario (valor 1 si se marca "Verdadero", 0 si es "Falso")
const preguntas = [
    "Últimamente parece que me quedo sin fuerzas, incluso por la mañana",
    "Me parece muy bien que haya normas porque son una buena guía a seguir",
    "Disfruto haciendo tantas cosas diferentes que no puedo decidir por cuál empezar.",
    "Gran parte del tiempo me siento débil y cansado.",
    "Sé que soy superior a los demás, por eso no me importa lo que píense la gente.",
    "La gente nunca ha reconocido suficientemente las cosas que he hecho.",
    "Si mi familia me presiona, es probable que me enfade y me resista a hacer lo que ellos quieren.",
    "La gente se burla de mí a mis espaldas, hablando de lo que hago o parezco.",
    "Frecuentemente critico mucho a la gente que me irrita.",
    "Raramente exteriorizo las pocas emociones que suelo tener.",
    "Me resulta difícil mantener el equilibrio cuando camino.",
    "Muestro mis emociones fácil y rápidamente.",
    "En el pasado, mis hábitos de tomar drogas me han causado problemas a menudo.",
    "Algunas veces puedo ser bastante duro y desagradable con mi familia.",
    "Las cosas que hoy van bien no durarán mucho tiempo.",
    "Soy una persona muy agradable y sumisa.",
    "Cuando era adolescente, tuve muchos problemas por mi mal comportamiento en el colegio.",
    "Tengo miedo a acercarme mucho a otra persona porque podría acabar siendo ridiculizado o avergonzado.",
    "Parece que elijo amigos que terminan tratándome mal.",
    "He tenido pensamientos tristes gran parte de  mi vida desde que era niño.",
    "Me gusta coquetear con las personas del otro sexo.",
    "Soy una persona muy variable y cambio de opiniones y sentimientos continuamente.",
    "Beber alcohol nunca me ha causado verdaderos problemas en mi trabajo.",
    "Hace unos años comencé a sentirme un fracasado.",
    "Me siento culpable muy a menudo sin ninguna razón.",
    "Los demás envidian mis capacidades.",
    "Cuando puedo elegir, prefiero hacer las cosas solo.",
    "Pienso que el comportamiento de mi familia debería ser estrictamente controlado.",
    "La gente normalmente piensa que soy una persona reservada y seria.",
    "Últimamente he comenzado a sentir deseos de destrozar cosas.",
    "Creo que soy una persona especial y merezco que los demás me presten una particular atención.",
    "Siempre estoy buscando hacer nuevos amigos y conocer gente nueva.",
    "Si alguien me criticase por cometer un error, rápidamente le señalaría sus propios errores.",
    "Últimamente he perdido los nervios.",
    "A menudo renuncio a hacer cosas porque temo no hacerlas bien.",
    "Muchas veces me dejo llevar por mis emociones de ira y luego me siento terriblemente culpable por ello.",
    "Muy a menudo pierdo mi capacidad para percibir sensaciones en partes de mi cuerpo.",
    "Hago lo que quiero sin preocuparme de las consecuencias que tenga en los demás.",
    "Tomar las llamadas \"drogas ilegales\" puede ser imprudente, pero reconozco que en el pasado las he necesitado.",
    "Creo que soy una persona miedosa  e inhibida.",
    "He hecho impulsivamente muchas cosas estúpidas que han llegado a causarme grandes problemas.",
    "Nunca perdono un insulto ni olvido una situación embarazosa que alguien me haya causado.",
    "A menudo me siento triste o tenso, inmediatamente después de que me haya pasado algo bueno.",
    "Ahora me siento terriblemente deprimido y triste gran parte del tiempo.",
    "Siempre hago lo posible por complacer a los demás, incluso a quienes no me gustan.",
    "Siempre he sentido menos interés por el sexo que la mayoría de la gente.",
    "Siempre tiendo a culparme a mí mismo cuando las cosas salen mal.",
    "Hace mucho tiempo decidí que lo mejor es tener poco que ver con la gente.",
    "Desde niño, siempre he tenido que tener cuidado con la gente que intentaba engañarme.",
    "No soporto a las personas influyentes que siempre piensan que pueden hacer las cosas mejor que yo.",
    "Cuando las cosas son aburridas, me gusta provocar algo interesante o divertido.",
    "Tengo un problema con el alcohol que nos ha creado dificultades a mi familia y a mí.",
    "Los castigos nunca me han impedido hacer lo que yo quería.",
    "Muchas veces me siento muy alegre y animado sin ninguna razón.",
    "En las últimas semanas me he sentido agotado sin ningún motivo especial.",
    "Últimamente me he sentido muy culpable porque ya no soy capaz de hacer nada bien.",
    "Pienso que soy una persona muy sociable y extravertida.",
    "Me he vuelto muy nervioso en las últimas semanas.",
    "Controlo muy bien mi dinero para estar preparado en caso de necesidad.",
    "Simplemente, no he tenido la suerte que otros han tenido en la vida.",
    "Algunas ideas me dan vueltas en la cabeza una y otra vez y no desaparecen.",
    "Desde hace uno o dos años, al pensar sobre la vida, me siento muy triste y desanimado.",
    "Mucha gente ha estado espiando mi vida privada durante años.",
    "No sé por qué pero, a veces, digo cosas crueles sólo para hacer sufrir a los demás.",
    "En el último año he cruzado el Atlántico en avión 30 veces.",
    "En el pasado, el hábito de abusar de las drogas me ha hecho faltar al trabajo.",
    "Tengo muchas ideas que son avanzadas para los tiempos actuales.",
    "Últimamente tengo que pensar las cosas una y otra vez sin ningún motivo.",
    "Evito la mayoría de las situaciones sociales porque creo que la gente va a criticarme o rechazarme.",
    "Muchas veces pienso que no merezco las cosas buenas que me pasan.",
    "Cuando estoy solo, a menudo noto cerca de mí la fuerte presencia de alguien que no puede ser visto.",
    "Me siento desorientado, sin objetivos, y no sé hacia dónde voy en la vida.",
    "A menudo dejo que los demás tomen por mí decisiones importantes.",
    "No puedo dormirme, y me levanto tan cansado como al acostarme.",
    "Últimamente sudo mucho y me siento muy tenso.",
    "Tengo una y otra vez pensamientos extraños de los que desearía poder librarme.",
    "Tengo muchos problemas para controlar el impulso de beber en exceso.",
    "Aunque esté despierto, parece que no me doy cuenta de la gente que está cerca de mí.",
    "Con frecuencia estoy irritado y de mal humor.",
    "Para mí es muy fácil hacer muchos amigos.",
    "Me avergüenzo de algunos de los abusos que sufrí cuando era joven.",
    "Siempre me aseguro de que mi trabajo esté bien planeado y organizado.",
    "Mis estados de ánimo cambian mucho de un día para otro.",
    "Me falta confianza en mí mismo para arriesgarme a probar algo nuevo.",
    "No culpo a quien se aprovecha de alguien que se lo permite.",
    "Desde hace algún tiempo me siento triste y deprimido y no consigo animarme.",
    "A menudo me enfado con la gente que hace las cosas lentamente.",
    "Cuando estoy en una fiesta nunca me aíslo de los demás.",
    "Observo a mi familia de cerca para saber en quién se puede confiar y en quién no.",
    "Algunas veces me siento confuso y molesto cuando la gente es amable conmigo.",
    "El consumo de \"drogas ilegales\" me ha causado discusiones con mi familia.",
    "Estoy solo la mayoría del tiempo y lo prefiero así.",
    "Algunos miembros de mi familia dicen que soy egoísta y que sólo pienso en mí mismo.",
    "La gente puede hacerme cambiar de ideas fácilmente, incluso cuando pienso que ya había tomado una decisión.",
    "A menudo irrito a la gente cuando les doy órdenes,",
    "En el pasado la gente decía que yo estaba muy interesado y apasionado por demasiadas cosas.",
    "Estoy de acuerdo con el refrán: \"Al que madruga Dios le ayuda\".",
    "Mis sentimientos hacia las personas importantes en mi vida muchas veces oscilan entre el amor y el odio.",
    "Cuando estoy en una reunión social, en grupo, casi siempre me siento tenso y cohibido.",
    "Supongo que no soy diferente de mis padres ya que, hasta cierto punto, me he convertido en un alcohólico.",
    "Creo que no me tomo muchas de las responsabilidades familiares tan seriamente como debería.",
    "Desde que era niño he ido perdiendo contacto con la realidad.",
    "Gente mezquina intenta con frecuencia aprovecharse de lo que he realizado o ideado.",
    "No puedo experimentar mucho placer porque no creo merecerlo.",
    "Tengo pocos deseos de hacer amigos íntimos.",
    "He tenido muchos periodos en mi vida en los que he estado tan animado y he consumido tanta energía que luego me he sentido muy bajo de ánimo.",
    "He perdido completamente mi apetito y la mayoría de las noches tengo problemas para dormir.",
    "Me preocupa mucho que me dejen solo y tenga que cuidar de mí mismo.",
    "El recuerdo de una experiencia muy perturbadora de mi pasado sigue apareciendo en mis pensamientos.",
    "El año pasado aparecí en la portada de varias revistas.",
    "Parece que he perdido el interés en la mayoría de las cosas que solía encontrar placenteras, como el sexo.",
    "He estado abatido y triste mucho tiempo en mi vida desde que era bastante joven.",
    "Me he metido en problemas con la ley un par de veces.",
    "Una buena manera de evitar los errores es tener una rutina para hacer las cosas.",
    "A menudo otras personas me culpan de cosas que no he hecho.",
    "He tenido que ser realmente duro con algunas personas para mantenerlas a raya.",
    "La gente piensa que, a veces, hablo sobre cosas extrañas o diferentes a las de ellos.",
    "Ha habido veces en las que no he podido pasar el día sin tomar drogas.",
    "La gente está intentando hacerme creer que estoy loco.",
    "Haría algo desesperado para impedir que me abandonase una persona que quiero.",
    "Sigo dándome atracones de comida un par de veces a la semana.",
    "Parece que echo a perder las buenas oportunidades que se cruzan en mi camino.",
    "Siempre me ha resultado difícil dejar de sentirme deprimido y triste.",
    "Cuando estoy solo y lejos de casa, a menudo comienzo a sentirme tenso y lleno de pánico.",
    "A veces las personas se molestan conmigo porque dicen que hablo mucho o demasiado deprisa para ellas.",
    "Hoy, la mayoría de la gente de éxito ha sido afortunada o deshonesta.",
    "No me involucro con otras personas a no ser que esté seguro de que les voy a gustar.",
    "Me siento profundamente deprimido sin ninguna razón que se me ocurra.",
    "Años después, todavía tengo pesadillas acerca de un acontecimiento que supuso una amenaza real para mi vida.",
    "Ya no tengo energía para concentrarme en mis responsabilidades diarias.",
    "Beber alcohol me ayuda cuando me siento deprimido.",
    "Odio pensar en algunas de las formas en las que se abusó de mí cuando era un niño.",
    "Incluso en los buenos tiempos, siempre he tenido miedo de que las cosas pronto fuesen mal.",
    "Algunas veces, cuando las cosas empiezan a torcerse en mi vida, me siento como si estuviera loco o fuera de la realidad.",
    "Estar solo, sin la ayuda de alguien cercano de quien depender, realmente me asusta.",
    "Sé que he gastado más dinero del que debiera comprando \"drogas ilegales\".",
    "Siempre compruebo que he terminado mi trabajo antes de tomarme un descanso para actividades de ocio.",
    "Noto que la gente está hablando de mí cuando paso a su lado.",
    "Se me da muy bien inventar excusas cuando me meto en problemas.",
    "Creo que hay una conspiración contra mí.",
    "Siento que la mayoría de la gente tiene una mala opinión de mí.",
    "Frecuentemente siento que no hay nada dentro de mí, como si estuviera vacío y hueco.",
    "Algunas veces me obligo a vomitar después de comer.",
    "Creo que me esfuerzo mucho por conseguir que los demás admiren las cosas que hago o digo.",
    "Me paso la vida preocupándome por una cosa u otra.",
    "Siempre me pregunto cuál es la razón real de que alguien sea especialmente agradable conmigo.",
    "Ciertos pensamientos vuelven una y otra vez a mi mente.",
    "Pocas cosas en la vida me dan placer.",
    "Me siento tembloroso y tengo dificultades para conciliar el sueño debido a dolorosos recuerdos de un hecho pasado que pasan por mi cabeza repetidamente.",
    "Pensar en el futuro al comienzo de cada día me hace sentir terriblemente deprimido.",
    "Nunca he sido capaz de librarme de sentir que no valgo nada para los demás.",
    "Tengo un problema con la bebida que he tratado de solucionar sin éxito.",
    "Alguien ha estado intentando controlar mi mente.",
    "He intentado suicidarme.",
    "Estoy dispuesto a pasar hambre para estar aún más delgado de lo que estoy.",
    "No entiendo por qué algunas personas me sonríen.",
    "No he visto un coche en los últimos diez años.",
    "Me pongo muy tenso con las personas que no conozco bien, porque pueden querer hacerme daño.",
    "Alguien tendría que ser bastante excepcional para entender mis habilidades especiales.",
    "Mi a afectada por 'imágenes mentales' de algo terrible que me pasó.",
    "Parece que creo situaciones con los demás en las que acabo herido o me siento rechazado.",
    "A menudo me pierdo en mis pensamientos y me olvido de lo que está pasando a mi alrededor.",
    "La gente dice que soy una persona delgada, pero creo que mis muslos y mi trasero son demasiado grandes.",
    "Hay terribles hechos de mi pasado que vuelven repetidamente para perseguirme en mis pensamientos y sueños.",
    "No tengo amigos íntimos al margen de mi familia.",
    "Casi siempre actúo rápidamente y no pienso las cosas tanto como debiera.",
    "Tengo mucho cuidado en mantener mi vida como algo privado, de manera que nadie pueda aprovecharse de mí.",
    "Con mucha frecuencia oigo las cosas con tanta claridad que me molesta.",
    "Siempre estoy dispuesto a ceder en una riña o desacuerdo porque temo el enfado o rechazo de los demás.",
    "Repito ciertos comportamientos una y otra vez, algunas veces para reducir mi ansiedad y otras para evitar que pase algo malo.",
    "Recientemente he pensado muy en serio en quitarme de en medio.",
    "La gente me dice que soy una persona muy formal y moral.",
    "Todavía me aterrorizo cuando pienso en una experiencia traumática que tuve hace años.",
    "Aunque me da miedo hacer amistades, me gustaría tener más de las que tengo.",
    "A algunas personas que se supone que son mis amigos les gustaría hacerme daño."
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
    cuestionario.appendChild(fieldset);
});

cuestionario.addEventListener('submit', function(event) {
    event.preventDefault();
    const respuestas = {};
    let todas = true;
    preguntas.forEach((_, index) => {
        const sel = cuestionario.querySelector('input[name="p' + index + '"]:checked');
        if (!sel) {
            todas = false;
        } else {
            respuestas['p' + index] = sel.value;
        }
    });
    if (!todas) {
        alert('Por favor responde todas las preguntas');
        return;
    }
    console.log(respuestas);
    alert('Respuestas guardadas');
});
