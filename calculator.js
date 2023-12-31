const display = document.getElementById('display');
//calculated results will be appended here
let userInput = '';

const buttonsContent = document.querySelectorAll('.buttons button');

buttonsContent.forEach(button =>{
    button.addEventListener('click',()=>{
        //classList
        button.classList.add("AllBtn");

        //error handling 
        switch(button.textContent){
            case '*':
                if(button.textContent === '*' && userInput === ''){
                    alert('invali input');
                   return; //exit the EventListener
                }
                break;
            case '/':
                if(button.textContent === '/' && userInput === ''){
                    alert('invalid input');

                   return; //exit the EventListener
                }
            break;   
        };
        /*Grab the button TextContent 
        and output it in input field*/
        display.value = button.textContent;
        console.log(display.value)
        switch(button.textContent){
            case '=':
                if(userInput === ''){
                    return; //exit the EventListener
                }
                display.value = userInput;                
                //evalution
                const results = eval(userInput);

                userInput = results;
                                
                display.value = results;
            break;

            case 'C':
                //clear text field 
                display.value = '';
                userInput = '';
                break;

            default:
                //append in userInput
                userInput += button.textContent;
                display.value = userInput;
            }
        })
    });