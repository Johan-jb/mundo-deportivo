document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('camera');
    const canvas = document.getElementById('photoCanvas');
    const context = canvas.getContext('2d');
    const captureButton = document.getElementById('captureButton');
    const comparisonResult = document.getElementById('comparisonResult');

    const players = [
        { name: "Lionel Messi", src: "Lionel Messi.jpg", description: "Lionel Messi es un futbolista argentino considerado uno de los mejores de todos los tiempos. 'Nunca dejes de luchar por tus sueños, incluso cuando todo parece imposible.'" },
        { name: "Cristian Romero", src: "Cristian Romero.jpg", description: "Cristian Romero es un defensor central argentino conocido por su gran habilidad defensiva. 'La disciplina es el puente entre tus metas y tus logros.'" },
        { name: "Enzo Fernández", src: "Enzo Fernández.jpg", description: "Enzo Fernández es un joven mediocampista argentino con un gran futuro. 'La perseverancia es el secreto del éxito.'" },
        { name: "Dibu Martínez", src: "Dibu_Martinez.jpg", description: "Dibu Martínez es un portero argentino destacado por sus habilidades y su carisma. 'El éxito es la suma de pequeños esfuerzos repetidos día tras día.'" },
        { name: "Ángel Di María", src: "Angel Di María.jpg", description: "Ángel Di María es un extremo argentino conocido por su velocidad y capacidad de regate. 'La grandeza no se mide por lo que logras, sino por los obstáculos que superas.'" },
        { name: "Lautaro Martínez", src: "Lautaro Martínez.jpg", description: "Lautaro Martínez es un delantero argentino con gran capacidad goleadora. 'El talento gana juegos, pero el trabajo en equipo y la inteligencia ganan campeonatos.'" },
        { name: "Paulo Dybala", src: "Paulo Dybala.jpg", description: "Paulo Dybala es un delantero argentino conocido por su técnica y habilidades ofensivas. 'El éxito es la habilidad de ir de un fracaso a otro sin perder el entusiasmo.'" },
        { name: "Franco Armani", src: "Franco Armani.jpg", description: "Franco Armani es un portero argentino reconocido por sus reflejos y capacidad bajo los tres palos. 'La diferencia entre lo ordinario y lo extraordinario es ese pequeño extra.'" },
        { name: "Cristiano Ronaldo", src: "cr_7.jpg", description: "CR7, conocido como Cristiano Ronaldo, es uno de los futbolistas más exitosos y reconocidos del mundo. 'Tu amor propio nunca debe depender de las opiniones de los demás.'" },
        { name: "Luka Modrić", src: "Modric.jpg", description: "Luka Modrić es un mediocampista croata reconocido por su visión de juego y técnica impecable. 'El esfuerzo constante y la dedicación superan al talento innato.'" },
        { name: "Neymar Jr.", src: "neymar_jrr.jpg", description: "Neymar Jr. es un delantero brasileño conocido por su habilidad y creatividad en el campo. 'Cree en ti mismo y serás imparable.'" },
        { name: "Luis Suárez", src: "Suarez_.jpg", description: "Luis Suárez es un delantero uruguayo famoso por su instinto goleador. 'La pasión es lo que te hará levantarte cuando todo parece perdido.'" },
        { name: "Edinson Cavani", src: "cavani_.jpg", description: "Edinson Cavani es un delantero uruguayo conocido por su capacidad para anotar en momentos cruciales. 'Nunca te rindas, porque nunca sabes si el próximo intento será el que funcione.'" },
        { name: "James Rodríguez", src: "james_.jpg", description: "James Rodríguez es un mediocampista colombiano destacado por su visión de juego y precisión. 'El trabajo duro supera al talento cuando el talento no trabaja duro.'" },
        { name: "Luis Díaz", src: "luis_diaz.jpg", description: "Luis Díaz es un extremo colombiano que se destaca por su velocidad y habilidades de dribbling. 'La única manera de hacer un gran trabajo es amar lo que haces.'" },
        { name: "Darwin Núñez", src: "nunez.jpg", description: "Darwin Núñez es un delantero uruguayo con gran potencial y capacidad de finalización. 'El dolor que sientes hoy será la fuerza que sientas mañana.'" },
        { name: "Alejandro Garnacho", src: "garnacho.jpg", description: "Alejandro Garnacho es un joven talento argentino con un futuro prometedor. 'El éxito es la suma de pequeños esfuerzos repetidos día tras día.'" },
        { name: "Vinícius Jr.", src: "vini-jr.jpg", description: "Vinícius Jr. es un extremo brasileño conocido por su velocidad y habilidad en el uno contra uno. 'La práctica no te hace perfecto, te hace mejor.'" },
        { name: "Gianluca Lapadula", src: "lapadula.jpg", description: "Gianluca Lapadula es un delantero peruano-italiano conocido por su habilidad para anotar. 'La perseverancia es el secreto del éxito.'" },
        { name: "Heung-min Son", src: "sonne.jpg", description: "Heung-min Son es un extremo surcoreano reconocido por su velocidad y capacidad de finalización. 'No sueñes con el éxito, trabaja para alcanzarlo.'" },
        { name: "Yeferson Soteldo", src: "soteldo.jpg", description: "Yeferson Soteldo es un extremo venezolano conocido por su habilidad en el regate. 'La grandeza no se mide por lo que logras, sino por los obstáculos que superas.'" },
        { name: "Salomón Rondón", src: "salomon_rodon.jpg", description: "Salomón Rondón es un delantero venezolano conocido por su fortaleza física y capacidad goleadora. 'El talento gana juegos, pero el trabajo en equipo y la inteligencia ganan campeonatos.'" },
        { name: "Lamine Yamal", src: "lamine.jpg", description: "Lamine Yamal es un joven talento español conocido por su gran habilidad técnica. 'El éxito es la habilidad de ir de un fracaso a otro sin perder el entusiasmo.'" },
        { name: "Iñaki Williams", src: "willams.jpg", description: "Iñaki Williams es un delantero español conocido por su velocidad y fortaleza física. 'La diferencia entre lo ordinario y lo extraordinario es ese pequeño extra.'" },
        { name: "Paolo Guerrero", src: "paolo.jpg", description: "Paolo Guerrero es un delantero peruano reconocido por su capacidad goleadora en momentos clave. 'Nunca dejes de luchar por tus sueños, incluso cuando todo parece imposible.'" },
        { name: "Enner Valencia", src: "enner.jpg", description: "Enner Valencia es un delantero ecuatoriano conocido por su velocidad y capacidad goleadora. 'Cree en ti mismo y serás imparable.'" },
        { name: "Diego Forlán", src: "diego.jpg", description: "Diego Forlán es un exdelantero uruguayo conocido por su precisión y capacidad goleadora. 'La pasión es lo que te hará levantarte cuando todo parece perdido.'" },
        { name: "Ronaldinho", src: "ronaldhino.jpg", description: "Ronaldinho es un exfutbolista brasileño conocido por su magia y alegría en el campo. 'Nunca te rindas, porque nunca sabes si el próximo intento será el que funcione.'" },
        { name: "Ronaldo Nazário", src: "ronaldo_nazario.jpg", description: "Ronaldo Nazário es un exdelantero brasileño considerado uno de los mejores de todos los tiempos. 'El trabajo duro supera al talento cuando el talento no trabaja duro.'" },
        { name: "Sergio Agüero", src: "aguero.jpg", description: "Sergio Agüero es un exdelantero argentino conocido por su habilidad para anotar goles importantes. 'La única manera de hacer un gran trabajo es amar lo que haces.'" }
    ];

    // Acceder a la cámara del usuario
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            console.error('Error accessing camera: ', err);
        });

    // Capturar la foto
    captureButton.addEventListener('click', () => {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const userImage = canvas.toDataURL('image/png');

        // Seleccionar un jugador aleatoriamente
        const randomIndex = Math.floor(Math.random() * players.length);
        const selectedPlayer = players[randomIndex];

        // Mostrar el resultado de la comparación
        comparisonResult.innerHTML = `
            <h3>Resultado de la Comparación</h3>
            <div>
                <p>Tu Foto:</p>
                <img src="${userImage}" alt="Tu Foto" class="comparison-img">
            </div>
            <div>
                <p>Jugador Seleccionado:</p>
                <img src="${selectedPlayer.src}" alt="${selectedPlayer.name}" class="comparison-img">
                <p>${selectedPlayer.description}</p>
            </div>
        `;
    });
});
