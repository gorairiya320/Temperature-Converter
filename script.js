let input=document.querySelector(".amount");
console.log(input);
let btn1=document.querySelector(".celcius");
console.log(btn1);
let btn2=document.querySelector(".kelvin");
console.log(btn2);
let result=document.querySelector(".result");
console.log(result);


const cel=(res)=>{
  const celcius=(res-32)*5/9;
  return celcius;
}

const kel=(res)=>{
    const kelvin=(res-32)*5/9 +273.15;
    return kelvin;
}

btn1.addEventListener("click",()=>{
    let celciusValue=cel(parseFloat(input.value));
    result.innerText=`Output = ${celciusValue} degree celcius`
})


btn2.addEventListener("click",()=>{
    let kelvinValue=kel(parseFloat(input.value));
    result.innerText=`Output = ${kelvinValue} degree kelvin`
})
