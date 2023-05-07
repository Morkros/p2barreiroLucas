function getCharacter(){
    let char=document.getElementById('cajaTexto')
    let url='https://rickandmortyapi.com/api/character'  
    fetch(url) 
        .then(Response => Response.json()) 
        .then(data => {
            if (char.value<=data.info.count) {

                document.getElementById('nom').innerHTML=('Nombre: ') + data.results[char.value-1].name
                document.getElementById('est').innerHTML=('Estado: ') + data.results[char.value-1].status
                document.getElementById('esp').innerHTML=('Especie: ') + data.results[char.value-1].species
                document.getElementById('loc').innerHTML=('Localización: ') + data.results[char.value-1].location.name
                document.getElementById('ima').innerHTML=('Imagen: ') + `<img src="${data.results[char.value-1].image}">`
            } else {
                document.getElementById('nom').innerHTML=('El número de personaje indicado no contiene un personaje')
                document.getElementById('est').innerHTML=('')
                document.getElementById('esp').innerHTML=('')
                document.getElementById('loc').innerHTML=('')
                document.getElementById('ima').innerHTML=('')
            }
        })
        .catch(err => console.log(err))
}