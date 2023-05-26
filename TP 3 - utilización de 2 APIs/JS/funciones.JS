function getCharacter() {
    //let char = Math.floor(Math.random() * 827);
    let char = Math.floor(Math.random() * 20);
    let url = 'https://rickandmortyapi.com/api/character';
    let url1 = 'https://randomuser.me/api/';
    //busca el personaje de rick & morty (funciona hasta 826, pero al estar listados solo toma hasta el 19)
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            document.getElementById('ima').innerHTML = ("Imagen: ") + `<img src="${data.results[char].image}" width='72' height='72'>`
            document.getElementById('nom').innerHTML = ("Nombre: ") + data.results[char].name
            document.getElementById('est').innerHTML = ("Estado: ") + data.results[char].status
            document.getElementById('esp').innerHTML = ("Especie: ") + data.results[char].species
            document.getElementById('loc').innerHTML = ("Localización: ") + data.results[char].location.name
            document.getElementById("gene").innerHTML = ("genero: ") + data.results[char].gender
            fetch(url1)
                .then(Response => Response.json())
                .then(data2 => {
                    document.getElementById('ima1').innerHTML = ("Imagen: ") + `<img src="${data2.results[0].picture.medium}" width='72' height='72'>`
                    document.getElementById("nom1").innerHTML = ("Nombre: ") + data2.results[0].name.first
                    document.getElementById("ape").innerHTML = ("Apellido: ") + data2.results[0].name.last
                    document.getElementById("fecnac").innerHTML = ("Fecha de nacimiento: ") + data2.results[0].dob.date
                    document.getElementById("loca").innerHTML = ("localidad: ") + data2.results[0].location.city + ", " + data2.results[0].location.state + ", " + data2.results[0].location.country
                    document.getElementById("gene1").innerHTML = ("genero: ") + data2.results[0].gender
                    document.getElementById("lat").innerHTML = ("latitud: ") + data2.results[0].location.coordinates.latitude
                    document.getElementById("lon").innerHTML = ("longitud: ") + data2.results[0].location.coordinates.longitude
                
                    //compara el genero
                    if (data.results[char].gender.toLowerCase() !== data2.results[0].gender.toLowerCase()) {
                        document.getElementById("comgen").innerHTML = (`<i class="bi bi-slash-circle" style="font-size: 60px; color: red;"></i>`)
                    } else if (data.results[char].gender.toLowerCase() == data2.results[0].gender.toLowerCase()) {
                        document.getElementById("comgen").innerHTML = (`<i class="bi bi-check2-circle" style="font-size: 72px; color: green;"></i>`)
                    }
                })
        })
}
