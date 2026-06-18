function buscarMusica() {

    let tipo =
        document.getElementById("tipoBusqueda").value;

    let entrada =
        document.getElementById("entrada").value.toLowerCase();

    let resultados =
        document.getElementById("resultados");

    if (entrada.trim() === "") {

        resultados.innerHTML =
            "<p>Escribe algo para buscar.</p>";

        return;
    }

    if (tipo === "cancion") {

        resultados.innerHTML = `
            <div class="card">

                <h3>🎵 Space Song</h3>
<p>Beach House</p>

<p class="compatibilidad">
    Compatibilidad: 94%
</p>

<div class="barra">
    <div class="progreso" style="width:94%"></div>
</div>

<div class="emocion">
    <div class="emocion-nombre">
        <span>Nostalgia</span>
        <span>90%</span>
    </div>

    <div class="emocion-barra">
        <div class="emocion-progreso nostalgia" style="width:90%"></div>
    </div>
</div>

<div class="emocion">
    <div class="emocion-nombre">
        <span>Melancolía</span>
        <span>85%</span>
    </div>

    <div class="emocion-barra">
        <div class="emocion-progreso melancolia" style="width:85%"></div>
    </div>
</div>

<div class="emocion">
    <div class="emocion-nombre">
        <span>Romance</span>
        <span>60%</span>
    </div>

    <div class="emocion-barra">
        <div class="emocion-progreso romance" style="width:60%"></div>
    </div>
</div>
            </div>

            <div class="card">

                <h3>🎵 Apocalypse</h3>
                <p>Cigarettes After Sex</p>

                <p class="compatibilidad">
                    Compatibilidad: 91%
                </p>

                <div class="barra">
                    <div class="progreso" style="width:91%"></div>
                </div>

            </div>
        `;
    }

    else if (tipo === "album") {

        resultados.innerHTML = `
            <div class="card">

                <h3>💿 Do I Wanna Know?</h3>
                <p>Arctic Monkeys</p>

                <p class="compatibilidad">
                    Compatibilidad: 95%
                </p>

                <div class="barra">
                    <div class="progreso" style="width:95%"></div>
                </div>

            </div>

            <div class="card">

                <h3>💿 R U Mine?</h3>
                <p>Arctic Monkeys</p>

                <p class="compatibilidad">
                    Compatibilidad: 92%
                </p>

                <div class="barra">
                    <div class="progreso" style="width:92%"></div>
                </div>

            </div>
        `;
    }

    else {

        resultados.innerHTML = `
            <div class="card">

                <h3>🌙 After Dark</h3>
                <p>Mr. Kitty</p>

                <p class="compatibilidad">
                    Compatibilidad: 97%
                </p>

                <div class="barra">
                    <div class="progreso" style="width:97%"></div>
                </div>

            </div>

            <div class="card">

                <h3>🌃 Midnight City</h3>
                <p>M83</p>

                <p class="compatibilidad">
                    Compatibilidad: 93%
                </p>

                <div class="barra">
                    <div class="progreso" style="width:93%"></div>
                </div>

            </div>
        `;
    }
}