function buscarMusica() {

    let tipo =
        document.getElementById("tipoBusqueda").value;

    let entrada =
        document.getElementById("entrada").value;

    let resultados =
        document.getElementById("resultados");

    if (entrada.trim() === "") {
        resultados.innerHTML =
            "<p>Por favor escribe algo.</p>";
        return;
    }

    if (tipo === "cancion") {

        resultados.innerHTML = `
            <h3>🎵 Canciones similares a "${entrada}"</h3>

            <ul>
                <li>The Night We Met - Lord Huron</li>
                <li>Apocalypse - Cigarettes After Sex</li>
                <li>Space Song - Beach House</li>
            </ul>

            <p>
            Estas canciones comparten una vibra melancólica y nostálgica.
            </p>
        `;
    }

    else if (tipo === "album") {

        resultados.innerHTML = `
            <h3>💿 Álbumes similares a "${entrada}"</h3>

            <ul>
                <li>Currents - Tame Impala</li>
                <li>Bloom - Beach House</li>
                <li>The New Abnormal - The Strokes</li>
            </ul>

            <p>
            Comparten una atmósfera emocional y envolvente.
            </p>
        `;
    }

    else {

        resultados.innerHTML = `
            <h3>❤️ Música para "${entrada}"</h3>

            <ul>
                <li>After Dark - Mr. Kitty</li>
                <li>Midnight City - M83</li>
                <li>505 - Arctic Monkeys</li>
            </ul>

            <p>
            Selección basada en la emoción o situación descrita.
            </p>
        `;
    }
}