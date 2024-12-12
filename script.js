function verificar(){
   var data = new Date();
   var ano = data.getFullYear();
   var fano= document.querySelector('input#txtano');
   var res = document.querySelector('div#res');
   var img = document.createElement('img');
   img.setAttribute('id','img');


   if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert('[Error] Verifique os dados e tente novamente.');
   }else{ 
        var fsex = document.getElementsByName('radgenero');
        var idade= ano - Number(fano.value);
        var genero = '';

        if (fsex[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade <= 10){
                //crianca
                img.setAttribute('src','h-crianca.png');
            }else if (idade < 18){
                //jovem
                img.setAttribute('src','h-jovem.png');
            } else if (idade < 50){
                //adulto
                img.setAttribute('src','h-adulto.png');
            } else{
                //idoso
                img.setAttribute('src','h-idoso.png');
            }

        } else if (fsex[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade <= 10){
                    //crianca
                    img.setAttribute('src','m-crianca.png');
                }else if (idade < 18){
                    //jovem
                    img.setAttribute('src','m-jovem.png');
                } else if (idade < 50){
                    //adulto
                    img.setAttribute('src','m-adulto.png');
                } else{
                    //idoso
                    img.setAttribute('src','m-idoso.png');
                }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
   }
}