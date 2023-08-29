const display = document.getElementById('display');
//calculated results will be appended here
let userInput = '';

const buttonsContent = document.querySelectorAll('.buttons button');

buttonsContent.forEach(button =>{
    button.addEventListener('click',()=>{
       //Grab the button TextContent and output it in input field
       display.value = button.textContent;
        switch(button.textContent){
            case '=':
                display.value = userInput;
                //evalution of operands and operators
                const result = eval(userInput);
                display.value = result;

                //clear the users inputs
                userInput = '';
            break;

            case 'C':
                //clear text field if user === C
                display.value = '';
                break;

            default:
                userInput += button.textContent;
               // display.value = userInput;
            break;

        }
    })
});

