getInput();

function getInput () {
    let result = '';
    let answer;
    let i;
    
    for (i = 1; ; i ++) {
       
        answer = prompt('Enter your string');

        if (answer === null) {
            return;
        }
      
        result = result + answer;
        console.log(result);

        if (i % 3 == 0) {

            let userConfirm = confirm('Do you really want to continue?'); 
            if (userConfirm === false) {
                return;
            }
        }
    }   
}
