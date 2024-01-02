
let getBtn = document.getElementById("submit_btn");


function checkPrimeNum(event){

    event.preventDefault();

    let ourValue = document.getElementById("number").value;
    const ourDiv = document.getElementsByClassName("formbox")[0];
    let newDiv = document.createElement("div");

    

    if(ourValue < 2){
        newDiv.innerHTML= "Not a prime number";
        
    } else if (ourValue % 2 === 0 || ourValue % 3 == 0){
        newDiv.innerHTML = "Not a prime number";
       
    } else{
        newDiv.innerHTML = "It is a prime number";
        
    }

    ourDiv.appendChild(newDiv);

}



getBtn.addEventListener("click", checkPrimeNum)