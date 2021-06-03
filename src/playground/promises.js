const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Khalid',
            age: 20
        });
        //reject('Something went wrong!');
    }, 5000);
});

console.log('before');

promise.then((data) => {
    console.log(data);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('This is my new promise');
        }, 5000);
    });
}).then((str) => {
    console.log('Is this run?', str);
}).catch((er) => {
    console.log('error: ', er);
});

console.log('after');