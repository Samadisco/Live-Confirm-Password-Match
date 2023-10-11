// alert('Hello WOrld')

                   
password = document.getElementById('password')
confirmPassword = document.getElementById('confirm-password')
nonMatching = document.getElementById('nonMatching')
Matching = document.getElementById('Matching')
registerBtn = document.getElementById('register-btn')

confirmPassword.addEventListener('input', function(event){
    const enteredText = event.target.value;
                      
    if (confirmPassword.value == password.value) {
    console.log('They match')
    nonMatching.style.display = 'none'
    Matching.style.display ='block'
    registerBtn.disabled = false
                        
    }else{
    console.log("Don't match")
    Matching.style.display = 'none'
    nonMatching.style.display = 'block'
    nonMatching.style.visibility = 'visible'
    registerBtn.disabled  = true
    }
})
                    
               