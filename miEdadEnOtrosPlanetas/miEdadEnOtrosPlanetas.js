var planetsYear = 
{
    mercurio: 88,
    venus: 225,
    tierra: 365,
    marte: 687,
    jupiter: 4380,
    saturno: 10585,
    urano: 30660,
    neptuno: 60225
}

var edadHumano = document.getElementById("edadUsuario");
var planetaMercurio = document.getElementById("mercurio");
planetaMercurio.addEventListener("click", edadMercurio);
var planetaVenus = document.getElementById("venus");
planetaVenus.addEventListener("click", edadVenus);
var planetaMarte = document.getElementById("marte");
planetaMarte.addEventListener("click", edadMarte);
var planetaJupiter = document.getElementById("jupiter");
planetaJupiter.addEventListener("click", edadJupiter);
var planetaSaturno = document.getElementById("saturno");
planetaSaturno.addEventListener("click", edadSaturno);
var planetaUrano = document.getElementById("urano");
planetaUrano.addEventListener("click", edadUrano);
var planetaNeptuno = document.getElementById("neptuno");
planetaNeptuno.addEventListener("click", edadNeptuno);
var base = document.getElementById("estructura");

function edadMercurio()
{
    calculoEdadGalactica(edadHumano, planetsYear.mercurio, "mercurio");
}

function edadVenus()
{
    calculoEdadGalactica(edadHumano, planetsYear.venus, "venus");
}

function edadMarte()
{
    calculoEdadGalactica(edadHumano, planetsYear.marte, "marte");
}

function edadJupiter()
{
    calculoEdadGalactica(edadHumano, planetsYear.jupiter, "jupiter");
}

function edadSaturno()
{
    calculoEdadGalactica(edadHumano, planetsYear.saturno, "saturno");
}

function edadUrano()
{
    calculoEdadGalactica(edadHumano, planetsYear.urano, "urano");
}

function edadNeptuno()
{
    calculoEdadGalactica(edadHumano, planetsYear.neptuno, "neptuno");
}

function calculoEdadGalactica(edad, diasOtroPlaneta, planet)
{
    edad = parseInt(edad.value);
    let ageChosenPlanet = ((edad * planetsYear.tierra) / diasOtroPlaneta);
    ageChosenPlanet = (ageChosenPlanet.toFixed(2));
    base.innerHTML += "<style>body{font-family: 'Calibri'}</style> <strong> <center> Si vivieras en " + planet + " tendrías " + ageChosenPlanet + " años </center></strong>";
    if (ageChosenPlanet < edad)
    {
        // document.write("Más prueba");
        base.innerHTML += "<style>body{font-family: 'Calibri'}</style> <strong> <center> Serías más jovén 👦 </center></strong> <br>";
    }
    else 
    {
        // document.write("Escenario adverso");
        // console.log(edadHumano);
        base.innerHTML += "<style>body{font-family: 'Calibri'}</style> <strong> <center> Estarías más viejo 🤶 </center></strong> <br>";
    }
}