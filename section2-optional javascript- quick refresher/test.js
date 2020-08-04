// const fetchData=callback=>{
//     const promise=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res('done!')
//         },1500)
//     })
//      return promise
// }

// //async
// setTimeout(()=>{
//     console.log('Timer is done!');
//     fetchData().
//     then(text=>{
//         console.log(text);
//         return fetchData();
//     })
//     .then(text2=>{
//         console.log(text2)
//     })
// },2000);

// //syc
// console.log('Hello !');
// console.log('Hi!');


const fetchData= callback=>{
    const promise=new Promise((resolve,rej)=>{
        setTimeout(()=>{
            resolve('done!');
        },1500)
    })
   return promise;
}


//async
setTimeout(()=>{
    console.log('Task is  done!');
    fetchData().then(text=>{
        console.log(text);
        return fetchData();
    })
    .then(text2=>{
        console.log(text2);
    })
},2000);

console.log('Hello!');
console.log('Hi!');

