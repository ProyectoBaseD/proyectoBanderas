function SeleccionarPaises(value)
{

    console.log(value);
    if (value == '') {
        alert("Por favor, seleccione una opción!");
    }

    //bandera de Guate
    const guate = document.getElementById('div');
    guate.style.display = value == 'guate' ? 'block' : 'none';

    //Bandera de India
    const india = document.getElementById('div1');
    india.style.display = value == 'india' ? 'block' : 'none';

    //Bandera de Paises Bajos
    const paisesBajos = document.getElementById('div2');
    paisesBajos.style.display = value == 'paisesBajos' ? 'block' : 'none';

    //Bandera Suicia
    const suecia = document.getElementById('div3');
    suecia.style.display = value == 'suecia' ? 'block' : 'none';

    //Bandera de Suiza
    const suiza = document.getElementById('div4');
    suiza.style.display = value == 'suiza' ? 'block' : 'none';

}



