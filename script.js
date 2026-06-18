const canciones = [

    {
        titulo: "The Night We Met",
        artista: "Lord Huron",
        portada: "https://picsum.photos/400?random=1",
        compatibilidad: 94,
        tags: ["nostalgia", "lluvia", "amor", "desamor", "recuerdos"],

        emociones: [
            ["Nostalgia", 95, "nostalgia"],
            ["Melancolía", 90, "melancolia"],
            ["Romance", 60, "romance"]
        ]
    },

    {
        titulo: "Apocalypse",
        artista: "Cigarettes After Sex",
        portada: "https://picsum.photos/400?random=2",
        compatibilidad: 91,
        tags: ["romance", "noche", "soledad", "amor"],

        emociones: [
            ["Romance", 90, "romance"],
            ["Nostalgia", 75, "nostalgia"],
            ["Soledad", 70, "soledad"]
        ]
    },

    {
        titulo: "Space Song",
        artista: "Beach House",
        portada: "https://picsum.photos/400?random=3",
        compatibilidad: 94,
        tags: ["nostalgia", "lluvia", "reflexion", "soledad"],

        emociones: [
            ["Nostalgia", 90, "nostalgia"],
            ["Melancolía", 85, "melancolia"],
            ["Soledad", 70, "soledad"]
        ]
    },

    {
        titulo: "After Dark",
        artista: "Mr. Kitty",
        portada: "https://picsum.photos/400?random=4",
        compatibilidad: 97,
        tags: ["noche", "lluvia", "ciudad", "soledad"],

        emociones: [
            ["Soledad", 90, "soledad"],
            ["Nostalgia", 70, "nostalgia"],
            ["Melancolía", 60, "melancolia"]
        ]
    },

    {
        titulo: "Midnight City",
        artista: "M83",
        portada: "https://picsum.photos/400?random=5",
        compatibilidad: 93,
        tags: ["ciudad", "noche", "carretera", "energía"],

        emociones: [
            ["Energía", 90, "energia"],
            ["Nostalgia", 60, "nostalgia"],
            ["Romance", 40, "romance"]
        ]
    },

    {
        titulo: "Nightcall",
        artista: "Kavinsky",
        portada: "https://picsum.photos/400?random=6",
        compatibilidad: 95,
        tags: ["noche", "carretera", "lluvia", "ciudad"],

        emociones: [
            ["Nostalgia", 70, "nostalgia"],
            ["Soledad", 75, "soledad"],
            ["Energía", 80, "energia"]
        ]
    },

    {
        titulo: "505",
        artista: "Arctic Monkeys",
        portada: "https://picsum.photos/400?random=7",
        compatibilidad: 92,
        tags: ["desamor", "amor", "nostalgia", "noche"],

        emociones: [
            ["Romance", 80, "romance"],
            ["Melancolía", 85, "melancolia"],
            ["Nostalgia", 75, "nostalgia"]
        ]
    },

    {
        titulo: "Sweater Weather",
        artista: "The Neighbourhood",
        portada: "https://picsum.photos/400?random=8",
        compatibilidad: 90,
        tags: ["nostalgia", "amor", "otoño", "romance"],

        emociones: [
            ["Romance", 75, "romance"],
            ["Nostalgia", 80, "nostalgia"],
            ["Melancolía", 50, "melancolia"]
        ]
    },

    {
        titulo: "Blinding Lights",
        artista: "The Weeknd",
        portada: "https://picsum.photos/400?random=9",
        compatibilidad: 96,
        tags: ["energía", "noche", "ciudad", "fiesta"],

        emociones: [
            ["Energía", 95, "energia"],
            ["Romance", 60, "romance"],
            ["Nostalgia", 40, "nostalgia"]
        ]
    },

    {
        titulo: "Starboy",
        artista: "The Weeknd",
        portada: "https://picsum.photos/400?random=10",
        compatibilidad: 89,
        tags: ["energía", "confianza", "fiesta"],

        emociones: [
            ["Energía", 90, "energia"],
            ["Romance", 30, "romance"],
            ["Nostalgia", 20, "nostalgia"]
        ]
    },

    {
        titulo: "Yellow",
        artista: "Coldplay",
        portada: "https://picsum.photos/400?random=11",
        compatibilidad: 93,
        tags: ["romance", "amor", "felicidad"],

        emociones: [
            ["Romance", 95, "romance"],
            ["Nostalgia", 60, "nostalgia"],
            ["Melancolía", 20, "melancolia"]
        ]
    },

    {
        titulo: "Cigarette Daydreams",
        artista: "Cage The Elephant",
        portada: "https://picsum.photos/400?random=12",
        compatibilidad: 92,
        tags: ["melancolia", "nostalgia", "reflexion"],

        emociones: [
            ["Melancolía", 90, "melancolia"],
            ["Nostalgia", 85, "nostalgia"],
            ["Soledad", 60, "soledad"]
        ]
    }

];

function crearTarjeta(cancion) {

    let emocionesHTML = "";

    cancion.emociones.forEach(emocion => {

        emocionesHTML += `
            <div class="emocion">

                <div class="emocion-nombre">
                    <span>${emocion[0]}</span>
                    <span>${emocion[1]}%</span>
                </div>

                <div class="emocion-barra">
                    <div
                        class="emocion-progreso ${emocion[2]}"
                        style="width:${emocion[1]}%">
                    </div>
                </div>

            </div>
        `;
    });

    return `
    <div class="card">

        <img
            src="${cancion.portada}"
            class="portada"
            alt="${cancion.titulo}">

        <h3>🎵 ${cancion.titulo}</h3>

            <p>${cancion.artista}</p>
<p class="tags">
    🏷️ ${cancion.tags.join(" • ")}
</p>
            <p class="compatibilidad">
                Compatibilidad: ${cancion.compatibilidad}%
            </p>

            <div class="barra">
                <div
                    class="progreso"
                    style="width:${cancion.compatibilidad}%">
                </div>
            </div>

            ${emocionesHTML}

        </div>
    `;
}

function buscarMusica() {

    const entrada =
        document.getElementById("entrada")
        .value
        .toLowerCase()
        .trim();

    const resultados =
        document.getElementById("resultados");

    if (entrada === "") {

        resultados.innerHTML =
            "<p>Escribe algo para buscar.</p>";

        return;
    }

    const palabras = entrada.split(" ");

const coincidencias = canciones
    .map(cancion => {

        let coincidenciasCount = 0;

        palabras.forEach(palabra => {

            if(
                cancion.tags.some(tag =>
                    tag.includes(palabra)
                )
            ){
                coincidenciasCount++;
            }

        });

        return {
            ...cancion,
            coincidenciasCount
        };

    })
    .filter(cancion =>
        cancion.coincidenciasCount > 0
    )
    .sort((a,b) =>
        b.coincidenciasCount -
        a.coincidenciasCount
    );

    if (coincidencias.length === 0) {

        resultados.innerHTML = `
            <p>
                No encontré canciones para:
                <strong>${entrada}</strong>
            </p>
        `;

        return;
    }

    let html = `
    <h3>
        🔍 Resultados para: "${entrada}"
    </h3>

    <p>
        ${coincidencias.length} canciones encontradas
    </p>
`;
    coincidencias.forEach(cancion => {

        html += crearTarjeta(cancion);

    });

    resultados.innerHTML = html;
}