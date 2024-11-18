    let pronombre = ["El","Nuestro","Su","Tu","Mi","Vuestro"];
    let adjetivo = ["gran","pequeño","brillante","nuevo","antiguo","asombroso"];
    let nombre = ["proyecto","lugar","dominio","espacio","sitio","rincón"];
    let extension = [".com",".es",".us",".net",".uk",".io"]


    
    
        for (let i = 0; i < pronombre.length; i++){
            for (let j = 0; j < adjetivo.length; j++){
                for (let k = 0; k < nombre.length; k++){
                    for (let l= 0; l < extension.length; l++){
                        console.log(pronombre[i]+ adjetivo[j]+nombre[k]+extension[l]);
                    }
                
                }
            }
    
        }
    


