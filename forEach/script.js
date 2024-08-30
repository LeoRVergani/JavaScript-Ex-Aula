window.onload = function () {};

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const checkPar = () => {
    numArray.forEach((num)=> {
        if(num % 2 === 0){
            console.log(num);
        }
    })
}

checkPar();

const names = ['Junior', 'Michael', 'Cesar', 'Larissa'];

const checkNames = () => {
    names.forEach((name, index)=>{
        console.log(`Imprimindo o nome: ${name} no indice ${index}`);
        if(name === 'Cesar') {
            console.log(`Nome: ${name}, no indice ${index}`);
        }
    });
};

checkNames();

const content = document.querySelector('.content');

const changeContent = () => {
    const newWords = ['Junior <br />', 'Michael <br />', 'Cesar', 'Larissa'];
    
    newWords.forEach((word) =>{
        content.innerHTML = content.innerHTML + word;

    });
};

changeContent();