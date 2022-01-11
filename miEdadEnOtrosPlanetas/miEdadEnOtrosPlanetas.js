var earthYear = 365;
var ageEarth = document.getElementById("edadTerricola");
// var chosenPlanet = parseInt(prompt('¿Quieres saber cuantos años tienes en?:\n1. Mercurio\n2. Venus\n3. Marte\n4. Jupiter\n5. Saturno\n6. Urano\n7. Neptuno'))
ageEarth = parseInt(ageEarth.value);
var base = document.getElementById("estructura")

if (chosenPlanet == 1)
{
    var mercurioYear = 88;
    console.log(mercurioYear);
    calculoEdadOtrosMundos(ageEarth, earthYear, mercurioYear, 'mercurio');
}
else if (chosenPlanet == 2)
{
    var venusYear = 225;
    console.log(venusYear);
    calculoEdadOtrosMundos(ageEarth, earthYear, venusYear, 'venus');
}
else if (chosenPlanet == 3)
{
    var marsYear = 687;
    console.log(marsYear);
    calculoEdadOtrosMundos(ageEarth, earthYear, marsYear, 'marte');
}
else if (chosenPlanet == 4)
{
    var jupiterYear = 4380;
    console.log(jupiterYear);
    calculoEdadOtrosMundos(ageEarth, earthYear, jupiterYear, 'jupiter');
}
else if (chosenPlanet == 5)
{
    var saturnoYear = 10585;
    console.log(saturnoYear);
    calculoEdadOtrosMundos(ageEarth, earthYear, saturnoYear, 'saturno');
}
else if (chosenPlanet == 6)
{
    var uranoYear = 30660;
    console.log(uranoYear);
    calculoEdadOtrosMundos(ageEarth, earthYear, uranoYear, 'urano');
}
else if (chosenPlanet == 7)
{
    var neptunoYear = 60225;
    console.log(neptunoYear);
    calculoEdadOtrosMundos(ageEarth, earthYear, neptunoYear, 'neptuno');
}
else
{
    document.write('El planeta seleccionado no se encuentra en la vía lactea 🌌');
}


function calculoEdadOtrosMundos(edadTierra, diasTierra, diasOtroPlaneta, planet)
{
    var ageChosenPlanet = ((edadTierra * diasTierra) / diasOtroPlaneta);
    ageChosenPlanet = (ageChosenPlanet.toFixed(2));
    document.write('Si vivieras en ' + planet + ' tendrias ' + ageChosenPlanet + ' años');
    if (ageChosenPlanet < edadTierra)
    {
        document.write('<br>');
        document.write('Serías más jovén 👦');
    }
    else 
    {
        document.write('<br>');
        document.write('<style color: blue;>' + 'Estarías más viejo 🤶' + '</style>');
    }
}