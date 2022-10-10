var dados = []

var Nameerro = document.getElementById("erroCN")
var Numerro = document.getElementById("erroCNum")
var Dataerro = document.getElementById("erroData")
var CVCerro = document.getElementById("erroCVC")

var confName = false
var confNum = false
var confData = false
var confCVC = false

var imgNum = document.getElementById("imgNum")
var imgName = document.getElementById("imgName")
var imgData = document.getElementById("imgData")
var imgCVC = document.getElementById("imgCVC")
var info =document.getElementById("info")
var confirmed =document.getElementById("confirmed")

var i  = 0



function start(){   
   

    dados.push(
        {Name: document.getElementById("cardName").value,  
        Numero: document.getElementById("cardNumber").value,
        MM: document.getElementById("expDateM").value,
        YY: document.getElementById("expDateY").value,
        cvc: document.getElementById("cvc").value,
        }
        )

        
    console.log(dados)
    confirmation()
    
}


function confirmation(){
    Name = dados[i].Name 
    Numero = dados[i].Numero 
    MM = dados[i].MM 
    YY = dados[i].YY 
    cvc = dados[i].cvc 


            /*ERROS*/


            /*nome*/
    if(Name.length == 0){
        Nameerro.style.display = "flex"
        confName = false
    }else{
        Nameerro.style.display = "none"
        confName = true
    }

            /*numero*/

    if(Numero.length != 16){
        Numerro.style.display = "flex"
        confNum = false
        if(Numero.length < 16){
            Numerro.innerHTML = "São necesarios 16 caracteres"
        }else if(Numero.length > 16){
            Numerro.innerHTML = "Limite de 16 Caracteres"
        }

    }else{
        Numerro.style.display = "none"
        confNum = true
    }

            /*data*/

    if(MM > 12 || YY.length != 2){
        Dataerro.style.display = "flex"
        confData =false

      
    }else{
        Dataerro.style.display = "none"
        confData =true
    }

            /*cvc*/

    if(cvc.length != 3){
            CVCerro.style.display = "flex"
            confCVC = false

        if(cvc.length < 3){
            CVCerro.innerHTML = "São necesarios 3 caracteres"
        }else if(cvc.length > 3){
            CVCerro.innerHTML = "Limite de 3 caracteres"
        }

    }else{
        CVCerro.style.display = "none"
        confCVC = true
    }


    add()
    i++
    console.log(i)
}


function add(){


    if( confName == true && confNum == true && confData == true && confCVC == true){
        console.log("registro confirmado")
        
        imgName.innerHTML = dados[i].Name
        imgData.innerHTML = `${dados[i].MM}/${dados[i].YY}`
        imgCVC.innerHTML = dados[i].cvc
        
        Dnum = dados[i].Numero
        DnumR = ''

        for( v = 0 ; v < Dnum.length ; v++){
            if(v == 4 || v == 8 || v == 12 ){
                DnumR = `${DnumR} ${Dnum[v]}`
            }else{
                DnumR = `${DnumR}${Dnum[v]}`
            }
            console.log(Dnum[v])
            console.log(DnumR)
        }
        imgNum.innerHTML = DnumR


        info.style.display = "none"
        confirmed.style.display = "flex"

    }else{
        console.log("registro negado")

        imgNum.innerHTML = "0000 0000 0000 0000"
        imgName.innerHTML = "YOUR NAME"
        imgData.innerHTML =  "00/00"
        imgCVC.innerHTML = "000"

    }
    console.log((dados[i].Numero).length)
}