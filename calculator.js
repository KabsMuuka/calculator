const display = document.getElementById('display');

let userInput = '';
//querySelector grabs all the buttons
const buttonsContent = document.querySelectorAll('.buttons button');


buttonsContent.forEach(button =>{
    button.addEventListener('click',()=>{
        //show the button that is click
       // console.log("cliked",button.textContent);
        
       //Grab the button TextContent and show it in input field
       display.value = button.textContent;
        switch(button.textContent){
            case '=':
                //display what the user as cliked
               // console.log('User input:', userInput);
                display.value = userInput;
                //evalution of operands and operators
                const result = eval(userInput);

                display.value = result;
                //performing addion
                userInput = '';
            break;


            case 'C':
                //clear text field if user === C
                display.value = '';
                break;

            default:
                userInput += button.textContent;
                display.value = userInput;
            break;

        }
    })
});

