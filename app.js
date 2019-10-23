// function logging(fn){
//     fn();
// }

const logging = fn => {
    fn()
}

const greetMe = () => {
    console.log(`Hai Riventus`);
}

// greetMe();
logging(greetMe);