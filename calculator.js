const display = document.getElementById('display');
//calculated results will be appended here
let userInput = '';

const buttonsContent = document.querySelectorAll('.buttons button');

buttonsContent.forEach(button =>{
    button.addEventListener('click',()=>{
        //error handling 
        if(button.textContent === '*' && userInput === ''){
            alert('Math erorr, start with an operand');
           return; //exit the EventListener
        }
        //classList
        button.classList.add("AllBtn");

        /*Grab the button TextContent 
        and output it in input field*/
        display.value = button.textContent;
        switch(button.textContent){
            case '=':
                if(userInput === ''){
                    alert('No input to calculate')
                    return; //exit the EventListener
                }
                display.value = userInput;                
                //evalution
                const result = eval(userInput);
                display.value = result;

                //clear inputs
                userInput = '';
            break;

            case 'C':
                //clear text field 
                display.value = '';
                break;

            default:
                //append in userInput
                userInput += button.textContent;
                display.value = userInput;
            break;

            }
        })
    });

function isOperator(value){
    return ['+','-','*','/'].includes(value)
}