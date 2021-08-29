
function createCounter() {
    let number=0;
    return function counter(another) {
        number++;
        return number+another;
    }
}

const response = createCounter();
console.log(response);
console.log(response(1));