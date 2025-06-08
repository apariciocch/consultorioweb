let generoSeleccionado = 'F';
document.getElementById('datos-personales').addEventListener('submit', function(event) {
    event.preventDefault();
    const sel = document.querySelector('input[name="genero"]:checked');
    if (sel) {
        generoSeleccionado = sel.value;
    }
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

const brKeys = ['1','2A','2B','3','4','5','6A','6B','7','8A','8B','S','C','P','A','H','N','D','B','T','R','SS','CC','PP','Y','Z'];

function parseTable(str) {
    const table = {};
    brKeys.forEach(k => table[k] = []);
    str.trim().split('\n').forEach(row => {
        const parts = row.trim().split(/\s+/);
        const bruto = parseInt(parts[0], 10);
        for (let i = 0; i < brKeys.length; i++) {
            table[brKeys[i]][bruto] = parseInt(parts[i + 1], 10);
        }
    });
    return table;
}

const tablaBRFemenino = parseTable(`
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
1 9 8 8 6 5 0 12 8 0 5 10 12 7 12 9 9 10 8 20 30 10 7 8 60 0 9
2 17 15 10 12 9 6 24 15 0 11 20 24 13 24 17 17 20 15 40 60 20 13 15 63 6 18
3 26 23 15 18 14 12 36 23 0 16 30 36 20 36 26 26 30 23 60 62 30 20 23 66 12 26
4 34 30 20 24 18 18 48 30 5 22 40 48 27 48 34 34 40 30 63 63 40 27 30 69 18 35
5 43 38 25 30 23 24 60 38 11 27 50 60 33 60 43 43 50 38 66 65 50 33 38 72 23 38
6 51 45 30 36 28 30 62 45 16 33 60 61 40 61 51 51 60 45 69 66 60 40 45 75 29 40
7 60 53 35 42 32 36 63 53 22 38 61 62 47 63 60 60 63 53 72 68 61 47 53 80 35 43
8 62 60 40 48 37 42 65 60 27 44 63 63 53 64 75 65 66 60 75 69 63 53 60 85 40 45
9 63 65 45 54 42 48 67 61 33 49 64 64 60 65 85 70 69 68 80 71 64 60 63 89 45 48
10 65 70 50 60 46 54 68 63 38 55 65 65 63 67 88 75 72 75 85 72 65 62 65 93 50 50
11 66 75 55 63 51 60 70 64 44 60 67 66 65 68 90 78 75 77 90 74 66 63 68 96 55 53
12 68 76 60 66 55 62 72 65 49 62 68 67 68 70 93 80 78 78 95 75 68 65 70 100 60 55
13 69 77 75 69 60 63 73 67 55 64 70 68 70 71 96 83 82 80 100 78 69 67 73 104 65 58
14 71 78 76 72 62 65 75 68 60 66 71 69 73 72 99 85 85 82 105 80 70 68 75 108 70 60
15 72 79 78 75 63 66 77 70 62 69 72 70 75 74 101 95 93 83 110 83 71 70 77 111 75 63
16 74 80 79 78 65 68 79 71 64 71 74 71 76 75 104 105 100 85 115 85 73 72 79 115 80 65
17 75 81 80 80 67 69 81 72 66 73 75 72 78 77 107 115 108 93 115 93 74 73 81 115 85 68
18 78 82 81 83 68 71 83 74 68 75 78 73 79 79 110 115 115 100 115 100 75 75 83 115 89 70
19 82 83 83 85 70 72 85 75 69 77 82 74 81 81 112 115 115 108 115 108 80 80 85 115 93 73
20 85 84 84 93 72 74 95 80 71 79 85 75 82 83 115 115 115 115 115 115 85 85 95 115 96 75
21 100 85 85 100 73 75 105 85 73 81 100 78 84 85 115 115 115 115 115 115 115 95 105 115 100 77
22 115 95 100 108 75 77 115 95 75 83 115 82 85 93 115 115 115 115 115 115 115 105 115 115 115 79
23 115 105 115 115 80 79 115 105 80 85 115 85 95 100 115 115 115 115 115 115 115 115 115 115 115 81
24 115 115 115 115 85 81 115 115 85 100 115 100 105 108 115 115 115 115 115 115 115 115 115 115 115 83
25 115 115 115 115 115 83 115 115 90 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 85
26 115 115 115 115 115 85 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 87
27 115 115 115 115 115 90 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 89
28 115 115 115 115 115 95 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 91
29 115 115 115 115 115 100 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 94
30 115 115 115 115 115 105 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 96
31 115 115 115 115 115 110 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 98
32 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 100
33 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 100
`);

const tablaBRMasculino = parseTable(`
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
1 8 9 8 7 3 6 9 7 3 7 12 12 9 10 15 17 10 10 15 15 12 9 12 60 0 35
2 15 17 15 13 6 12 17 15 6 13 24 24 17 20 30 31 20 20 30 30 24 17 24 64 0 37
3 23 26 23 20 9 18 26 22 9 20 36 36 26 30 45 46 30 30 45 45 36 26 36 68 7 40
4 30 34 30 27 12 24 34 30 13 27 48 48 34 40 60 60 40 40 60 60 48 34 48 71 14 42
5 38 43 38 33 15 30 43 38 16 33 60 60 43 50 68 62 50 50 64 63 60 43 60 75 21 44
6 45 51 45 40 18 36 51 45 19 40 62 62 51 60 75 64 60 60 68 65 62 51 62 77 28 47
7 53 60 53 47 21 42 60 52 22 47 63 63 60 62 78 65 63 62 71 68 64 60 63 78 35 49
8 60 62 60 53 24 48 62 60 25 53 64 64 62 64 80 68 66 64 75 70 65 64 65 80 39 51
9 63 64 64 60 27 54 63 62 28 60 65 65 63 66 83 69 69 66 77 73 66 68 67 82 44 54
10 65 66 68 62 30 60 65 64 32 62 66 66 65 68 85 71 72 68 78 75 67 71 68 83 48 56
11 68 68 71 64 33 62 67 65 35 63 67 67 67 69 88 73 75 70 80 77 68 75 70 85 53 59
12 70 69 75 66 36 63 68 66 38 65 68 68 68 71 91 75 78 71 82 79 69 78 72 90 57 61
13 73 71 76 69 39 65 70 67 41 66 69 69 70 73 94 80 82 73 83 81 70 82 73 95 62 63
14 75 73 77 71 42 67 72 68 44 68 70 70 72 75 97 85 85 74 85 83 71 85 75 100 66 66
15 77 75 78 73 45 68 73 69 47 69 71 71 73 76 100 100 93 75 91 85 72 88 80 105 71 68
16 79 77 79 75 48 70 75 70 51 71 72 72 75 78 103 115 100 80 97 91 73 92 85 110 75 70
17 81 79 81 77 51 72 78 71 54 72 73 73 76 79 106 115 108 85 103 97 74 95 89 115 80 73
18 83 81 82 79 54 73 80 72 57 74 74 73 78 80 109 115 115 95 109 103 75 98 94 115 85 75
19 85 83 83 81 57 75 83 73 60 75 75 74 79 81 112 115 115 105 115 109 85 102 98 115 90 77
20 100 85 84 83 60 78 85 74 68 78 85 75 81 83 115 115 115 115 115 115 100 105 102 115 95 79
21 115 93 85 85 68 82 95 75 75 80 115 85 82 84 115 115 115 115 115 115 115 108 106 115 100 81
22 115 100 100 100 75 85 105 80 78 83 115 93 84 85 115 115 115 115 115 115 115 112 111 115 115 83
23 115 108 115 115 80 91 115 85 80 85 115 101 85 93 115 115 115 115 115 115 115 115 115 115 115 85
24 115 115 115 115 85 97 115 100 83 100 115 108 100 100 115 115 115 115 115 115 115 115 115 115 115 87
25 115 115 115 115 115 103 115 115 85 115 115 115 115 108 115 115 115 115 115 115 115 115 115 115 115 89
26 115 115 115 115 115 109 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 91
27 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 93
28 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 95
29 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 97
30 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 99
31 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 100
32 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 100
33 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 115 100
`);

const cuestionario = document.getElementById('cuestionario');

preguntas.forEach((texto, index) => {
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = (index + 1) + '. ' + texto;
    fieldset.appendChild(legend);

    const labelV = document.createElement('label');
    const radioV = document.createElement('input');
    radioV.type = 'radio';
    radioV.name = 'p' + index;
    radioV.value = '1';
    radioV.checked = true;
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

    const ans = {};
    Object.keys(respuestas).forEach(k => {
        ans[parseInt(k.slice(1)) + 1] = parseInt(respuestas[k]);
    });

    function sum(arr) {
        return arr.reduce((acc, q) => acc + (ans[q] || 0), 0);
    }

    const scales = {
        esquizoide: [5,11,28,33,39,47,49,58,93,102,106,143,149,157,166,168],
        evitativo: [19,41,48,49,58,70,81,85,100,128,142,147,149,152,159,175],
        depresivo: [21,25,26,44,48,84,87,113,124,134,143,146,149,152,155],
        dependiente: [17,36,46,48,57,74,83,85,95,109,121,134,136,142,152,170],
        histrionico: [11,13,22,25,28,33,49,52,58,70,81,89,93,100,124,128,175],
        narcisista: [6,22,27,32,36,39,41,48,58,68,70,81,85,86,87,89,94,95,100,117,142,145,160,170],
        antisocial: [8,14,15,18,22,39,42,53,54,94,102,114,123,137,140,167,173],
        agresivo: [8,10,14,15,18,29,34,37,40,42,50,54,65,80,88,94,96,97,117,167],
        compulsivo: [3,8,15,23,30,42,54,60,73,83,98,102,115,138,140,167,173],
        negativista: [7,8,16,23,37,43,51,61,80,84,99,116,123,127,134,167],
        autodestructiva: [19,20,25,26,36,41,44,71,91,99,105,123,149,162,170],

        esquizotipica: [9,49,70,72,77,100,103,118,135,139,142,149,152,157,159,163],
        limite: [8,23,31,42,73,84,99,121,123,135,136,143,155,162,172,167],
        paranoide: [6,8,33,42,48,49,60,63,89,103,115,138,146,158,159,167,175],

        ansiedad: [41,59,62,76,77,109,110,125,136,146,148,150,165,171],
        somatoformo: [2,5,12,38,56,75,76,108,112,131,146,149],
        bipolar: [4,23,42,52,55,84,97,107,118,126,135,167,171],
        distimico: [16,25,26,56,63,84,87,105,112,131,142,143,149],
        alcohol: [15,24,42,53,65,78,94,101,102,114,123,132,140,153,167],
        sustancias: [8,14,22,39,40,42,54,67,92,102,114,119,137,140],
        estres: [63,77,84,110,124,130,134,143,148,149,150,152,155,161,165,174],

        pensamiento: [22,34,56,61,68,72,76,78,83,102,117,134,142,148,151,162,168],
        depresion: [1,4,34,44,55,74,104,107,111,128,130,142,148,149,150,154,171],
        delusional: [5,38,49,63,67,89,103,119,138,140,153,159,175],

        deseabilidad: [20,32,35,40,51,57,59,69,80,82,88,97,104,112,123,137,141,148,151,172],
        devaluacion: [1,4,8,15,22,24,30,34,36,44,55,56,58,62,63,70,74,75,76,83,84,86,99,111,123,128,133,134,142,145,150,171],
        validez: [65,110,157]
    };

    const results = {};
    Object.keys(scales).forEach(k => {
        results[k] = sum(scales[k]);
    });

    results.sinceridad = results.esquizoide + results.evitativo + results.depresivo +
        results.dependiente + results.histrionico + results.narcisista * 2 / 3 +
        results.antisocial + results.agresivo + results.compulsivo +
        results.negativista + results.autodestructiva;

    const mapIds = {
        esquizoide: 'esc-esquizoide',
        evitativo: 'esc-evitativo',
        depresivo: 'esc-depresivo',
        dependiente: 'esc-dependiente',
        histrionico: 'esc-histrionico',
        narcisista: 'esc-narcisista',
        antisocial: 'esc-antisocial',
        agresivo: 'esc-agresivo',
        compulsivo: 'esc-compulsivo',
        negativista: 'esc-negativista',
        autodestructiva: 'esc-autodestructiva',
        esquizotipica: 'esc-esquizotipica',
        limite: 'esc-limite',
        paranoide: 'esc-paranoide',
        ansiedad: 'esc-ansiedad',
        somatoformo: 'esc-somatoformo',
        bipolar: 'esc-bipolar',
        distimico: 'esc-distimico',
        alcohol: 'esc-alcohol',
        sustancias: 'esc-sustancias',
        estres: 'esc-estres',
        pensamiento: 'esc-pensamiento',
        depresion: 'esc-depresion',
        delusional: 'esc-delusional',
        sinceridad: 'esc-sinceridad',
        deseabilidad: 'esc-deseabilidad',
        devaluacion: 'esc-devaluacion',
        validez: 'esc-validez'
    };

    const mapBrIds = {};
    Object.keys(mapIds).forEach(k => {
        mapBrIds[k] = mapIds[k].replace('esc-', 'br-');
    });

    const codeMap = {
        esquizoide: '1',
        evitativo: '2A',
        depresivo: '2B',
        dependiente: '3',
        histrionico: '4',
        narcisista: '5',
        antisocial: '6A',
        agresivo: '6B',
        compulsivo: '7',
        negativista: '8A',
        autodestructiva: '8B',
        esquizotipica: 'S',
        limite: 'C',
        paranoide: 'P',
        ansiedad: 'A',
        somatoformo: 'H',
        bipolar: 'N',
        distimico: 'D',
        alcohol: 'B',
        sustancias: 'T',
        estres: 'R',
        pensamiento: 'SS',
        depresion: 'CC',
        delusional: 'PP',
        deseabilidad: 'Y',
        devaluacion: 'Z'
    };

    function obtenerBR(genero, escala, bruto) {
        const tabla = genero === 'F' ? tablaBRFemenino : tablaBRMasculino;
        const arr = tabla[escala];
        if (!arr) return '';
        const idx = Math.max(0, Math.min(arr.length - 1, bruto));
        return arr[idx];
    }

    Object.keys(mapIds).forEach(k => {
        const cell = document.getElementById(mapIds[k]);
        if (cell) {
            cell.textContent = results[k] !== undefined ? results[k] : '';
        }
    });

    Object.keys(mapBrIds).forEach(k => {
        const cell = document.getElementById(mapBrIds[k]);
        if (cell) {
            const code = codeMap[k];
            if (code && results[k] !== undefined) {
                cell.textContent = obtenerBR(generoSeleccionado, code, results[k]);
            } else {
                cell.textContent = '';
            }
        }
    });

    alert('Respuestas guardadas');
});
