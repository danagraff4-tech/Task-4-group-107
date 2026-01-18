
function handleRadioChange() {
   
    const isPsychometric = document.getElementById('opt-psychometric').checked;
    const isMechina = document.getElementById('opt-mechina').checked;
    const psychometricInput = document.getElementById('psychometric');
    const mechinaInput = document.getElementById('mechina');

    if (isPsychometric) {
      
        mechinaInput.disabled = true;
        mechinaInput.value = ""; 
        mechinaInput.style.backgroundColor = "#e0e0e0"; 
       
        psychometricInput.disabled = false;
        psychometricInput.style.backgroundColor = "white";
    } 
    
    else if (isMechina) {
      
        psychometricInput.disabled = true;
        psychometricInput.value = ""; 
        psychometricInput.style.backgroundColor = "#e0e0e0";
    
        mechinaInput.disabled = false;
        mechinaInput.style.backgroundColor = "white";
    }
}
 

function validate() {
    const bagrutInput = document.getElementById('bagrut').value;
    const ageInput = document.getElementById('age').value;
    const messageDiv = document.getElementById('message');
 
    
    if (bagrutInput === "") {
        alert("You should enter a bagrut grade");
        return; 
    }
 
  
    const age = parseInt(ageInput);
 
    if (age > 30) {
        messageDiv.innerText = "You are eligible for admission to any faculty you choose";
   
        messageDiv.className = "green";
    } else {
       
        messageDiv.innerText = "";
        messageDiv.className = "";
    }
}