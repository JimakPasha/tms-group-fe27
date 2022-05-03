
let a = 'true';
let b = false;
let c = 17;
let d = undefined;
let e =null;
console.log(typeof a,typeof b,typeof c,typeof d,typeof e);
    
    
    
let height = 15;
let width = 20;
if (height<width){
    console.log(width)
};
    

let three=1;
for (; three <= 20; three++) {
    if (three % 3 == 0){
        console.log(three);
    }
}




let key = true
let documents = true
let pen = true
let apple = false
let orange = true

let shouldGoToWork;

if(key && documents && pen (apple || orange)){
    shouldGoToWork="не забудь фрукты";
    console.log(shouldGoToWork)
}else{
    shouldGoToWork="теперь можно идти ";
    console.log(shouldGoToWork)
    }



let num = prompt ('введите число');

if ( num % 3 == 0 && num % 5 == 0){
    alert('FizBuz')
} else if (num % 5 == 0) {
    alert('Fiz')
} else if ( num % 3 == 0) {
    alert('Buz')
    } ;






