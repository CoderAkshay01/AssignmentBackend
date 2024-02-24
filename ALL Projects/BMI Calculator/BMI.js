// console.log('BMI Calculator!')


const form = document.querySelector('form')
form.addEventListener('submit' , (event)=>{
  event.preventDefault(); // handling form submissions. It is used to stop the default behavior of form submission, allowing you to implement custom logic, perform client-side validation, or handle form submissions asynchronously using JavaScript.
  // console.log(event.target)

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)

  const result = document.getElementsByClassName('result')[0]

  if(height <= 0 || isNaN(height)){
    // result.append('Please Enter a Valid Height')
    result.innerHTML = 'Please Enter a Valid Height'
  } else if(weight <= 0 || isNaN(weight)){
    // result.append('Please Enter a Valid Weight')
    result.innerHTML = 'Please Enter a Valid Weight' 
  }
  else{
    const BMI = (weight/((height*height)/10000)).toFixed(2);
    // result.append(BMI)
    result.innerHTML = `<span>Your BMI is : <span style="color: aqua;">${BMI}</span></span>`

    //Display Weight
    if(BMI<18.5){
      const message = document.createElement('p')
      // message.style.fontSize = 'large'
      // message.style.color = 'red'
      message.style.cssText = 'font-size: large; color: red;';

      message.innerHTML = 'Under Weight';
      result.appendChild(message)
    }
    else if(BMI>=18.5 && BMI<=24.9){
      const message = document.createElement('p')
      message.style.cssText = 'font-size: large; color: green';
      message.innerHTML = 'Healthy Weight';
      result.appendChild(message)
    }
    else if(BMI >= 25 && BMI <= 29.9){
      const message = document.createElement('p')
      message.style.cssText = 'font-size: large; color: red;';
      message.innerHTML = 'Over Weight';
      result.appendChild(message)
    }
    else if(BMI >= 30){
      const message = document.createElement('p')
      message.style.cssText = 'font-size: large; color: red;';
      message.innerHTML = 'Abnormal';
      result.appendChild(message)      
    }
  }
})
