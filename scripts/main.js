const inputList = document.querySelectorAll('input');
const btn = document.querySelector('button');

const clickButton = () => {
    const errorSpan = document.getElementsByClassName('error');
    for(let i = 0; i < inputList.length; i++){
        if(inputList[i].value === ''){
            errorSpan[i].style.display = 'block';
            errorSpan[i].innerHTML = `${inputList[i].name} cannot be empty`;
        }
        else if(inputList[i].type === 'email' && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputList[i].value))){
            errorSpan[i].style.display = 'block';
            errorSpan[i].innerHTML = 'Looks like this is not an email';
        }
    }
}

btn.addEventListener('click', clickButton);
