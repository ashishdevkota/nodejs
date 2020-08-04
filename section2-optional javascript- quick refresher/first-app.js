// // const name='ashish';
// // let age=23;
// // const hasHobbies=true;


// // //arrow function
// // const arrowfun= (name,age,hasHobbies)=>{
// //     return  'this is  '+ 
// //     name + '.  who is '+ age + 
// //     '.  Does have hobbies '+ 
// //     hasHobbies;
// // }
// // console.log(arrowfun(name,age,hasHobbies));


// //working with obj,properties &method
// const person={
//     name:'ashish',
//     age:23,
//     greet() {
//         console.log('hi! i am '+ this.name);
//     }
// }

// // person.greet();


// //destructure syntax
//  const printName= ({name})=>{
//      console.log(name)
//  }
//  printName(person)


// const {name,age}=person;
// console.log(name,age)

// //array
// let hobbies=['mkct','suresh','gignesh'];


// //array destructure
// const [hobbies1,hobbies2]=hobbies;
// console.log(hobbies1,hobbies2)



// // for(hobby of hobbies){
// //     console.log(hobby);
// // }
// //map method crete new array
// // console.log(hobbies.map(hobby=>{
// //     return 'Hobby: '+ hobby;
// // }));
// // console.log(hobbies);

// // //create new array form array using spread
// // const createCopy=[...hobbies];
// // console.log(createCopy)

// // //creating new object from existing obj
// // const personcopy={...person};
// // console.log(personcopy)

// // //spread operator
// // const copyarray=[...hobbies];
// // console.log(copyarray);

// // //rest operator
// // const toArray=(...args)=>{
// //     return args;
// // }


const fetchData=callback =>{
    setTimeout(()=>{
        callback('Done!');
    },
        1500);
};

//asyncronic callback
setTimeout(()=>{
    console.log('Timer is done!');
    fetchData(text=>{
        console.log(text);
    });
},2000);


//syncronous code
console.log('hello !');
console.log('Hi!');
