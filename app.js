window.onload = () => {

    const button = document.querySelector('#btn');
    button.addEventListener('click', calculatorBmi)

}

function calculatorBmi () {

    const height = parseFloat(document.querySelector(`#height`).value);
     const weight = parseFloat(document.querySelector(`#weight`).value);
      const result = document.querySelector(`#result`);

      if(!height || isNaN(height) || height < 0) {
        result.innerTEXT = "Please Povide Valid Height";
        return; 
      }else if(!weight || isNaN(weight) || weight < 0) {
        result.innerTEXT = "Please Povide Valid Weight";
        return;
      }

      const bmi = (weight / ((height * height)/ 10000)).toFixed(2);

      result.innerText = `Your BMI is ${bmi}`;

}