const a = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve("Data from a")
        }, 2000);
    })
};

const b = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject("Data from b")
        }, 2000);
    })
};

Promise.any([b(), a()]).then(data => {
            console.log("value:", data)
        })
        .catch(errors => {
            console.log("Error:", data)
        });
