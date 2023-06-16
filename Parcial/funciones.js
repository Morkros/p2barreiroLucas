function busqueda() {
    fetch('api.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let banderamun = false; //bandera para el nombre del municipio
            let banderaprov = false; //bandera para el nombre de la provincia
            for (let index = 0; index < data.total; index = index + 1) {
                if (idmun.value != '' && idprov.value != '') {
                    if (!isNaN(idmun.value) && (idmun.value).length === 6) {
                        //realiza el codigo basando en el id municipio
                        if (idmun.value === data['localidades-censales'][index].municipio.id) {
                            //realiza la busqueda de datos comparando id municipio ingresado con el id municipio ingresado.
                            if ((banderamun === false) && (data['localidades-censales'][index].municipio.nombre != 'null')) {
                                //almacena el nombre del municipio.
                                document.getElementById('munODep').innerHTML = "Nombre municipio: " + data['localidades-censales'][index].municipio.nombre;
                                document.getElementById('latLon').innerHTML = "Latitud: " + data['localidades-censales'][index].centroide.lat + " Longitud: " + data['localidades-censales'][index].centroide.lon;
                                banderamun = true;
                            } else if (banderamun === false) {
                                //almacena el nombre del departamento
                                document.getElementById('munODep').innerHTML = "Nombre departamento: " + data['localidades-censales'][index].departamento.nombre;
                                document.getElementById('latLon').innerHTML = "Latitud: " + data['localidades-censales'][index].centroide.lat + " Longitud: " + data['localidades-censales'][index].centroide.lon;
                                banderamun = true;
                            }
                        }
                        if (idprov.value === data['localidades-censales'][index].provincia.id) {
                            //realiza la busqueda de la provincia.
                            if (banderaprov === false) {
                                //almacena el nombre de la provincia
                                document.getElementById('nomProv').innerHTML = "Nombre provincia: " + data['localidades-censales'][index].provincia.nombre;
                                document.getElementById('latLon').innerHTML = "Latitud: " + data['localidades-censales'][index].centroide.lat + " Longitud: " + data['localidades-censales'][index].centroide.lon;
                                banderaprov = true;
                            }
                        }
                        console.log("el id del 5 es: " + data['localidades-censales'][5].municipio.id)
                    } else {
                        //realiza el codigo basandose en el id provincia.
                        if (idprov.value === data['localidades-censales'][index].provincia.id) {
                            //realiza la busqueda de datos comparando id provincia ingresado con el id provincia ingresado.
                            if (banderaprov === false) {
                                document.getElementById('nomProv').innerHTML = "Nombre provincia: " + data['localidades-censales'][index].provincia.nombre;
                                banderaprov = true;
                            }
                            if (banderamun === false) {
                                //almacena el nombre del departamento
                                document.getElementById('munODep').innerHTML = "Nombre departamento: " + data['localidades-censales'][index].departamento.nombre;
                                document.getElementById('latLon').innerHTML = "Latitud: " + data['localidades-censales'][index].centroide.lat + " Longitud: " + data['localidades-censales'][index].centroide.lon;
                                banderamun = true;
                            }
                        }
                    }
                } else {
                    document.getElementById('nomProv').innerHTML = "debe ingresar ambos datos."
                    document.getElementById('munODep').innerHTML = ""
                    document.getElementById('latLon').innerHTML = ""
                }
            }

        })
}

