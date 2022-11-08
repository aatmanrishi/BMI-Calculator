let height,weight,BMI;
// document.getElementsByTagName('button')[0].addEventListener('click',Calculate());
function Calculate(){
    height = parseInt(document.getElementsByTagName('input')[0].value );
    weight = (parseInt(document.getElementsByTagName('input')[1].value ));
    BMI = document.getElementsByClassName('output')[1] ;

    // if(typeof(height) == NaN || typeof(width) == NaN){
    //     alert('You can only enter number and none other than that');
    // }

    let calculate = parseInt(weight/(((height)/100) * ((height)/100))) ;

    if(calculate>=18.6 && calculate<=24.9){
        BMI.innerText = ` Your BMI is ${calculate} that is Normal `;
    }else if(calculate<18.6){
        BMI.innerText = `Your BMI is ${calculate} that is Underweight` ;
    }else if (calculate < 24.9){
        BMI.innerText = `Your BMI is ${calculate} that is Overweight` ;
    }

    document.getElementsByTagName('input')[0].value = ' ';
    document.getElementsByTagName('input')[1].value = ' ';

}
