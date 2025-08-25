
            var valor = document.getElementById("pecinco").offsetWidth;

            window.addEventListener("resize", function () {
                valor = document.getElementById("pecinco").offsetWidth;
            });

            function setup() {
                createCanvas(valor, valor, WEBGL).parent("#pecinco");
                select("#nombre").html("Anaís Aedo");
                select("#aprendizaje").html("a sacar el máximo provecho a los programas de edición");
            noStroke();
            }
            function draw() {
                background(255, 161, 199);
                orbitControl();
                pointLight(255,255,255, valor/3, valor/2, 50);
                specularMaterial(255);
                shininess(50);
                metalness(1);
                fill(247, 87, 151);
                torus(valor / 4, valor / 4);
            }

            function windowResized() {
                resizeCanvas(valor, valor);
            }
