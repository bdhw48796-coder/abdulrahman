//part 1 - choose #
// 1-array جديدة بنفس الطول 
//2- find
//3-array جديدة بالعناصر اللي حققت الشرط 
// 4-undefined
//5-arrays

//part 2 -true or false
//1-false
//2-true
//3-true
//4-true
//5-true


//part 3-complete 
//q1-numbers.forEach
//q2-numbers.filter
//q3-numbers.find
//q4-numbers.map


//part 4-to do 

const fruits=["apple","banana","orange"];
for(const fruit of fruits){
    console.log(fruit);
}
for(const index in fruits){
    console.log(index);
}
fruits.forEach((fruit,index)=>{
console.log(`${index} -> ${fruit}`);
})

//part 5-to do
//q1-
const sum =((a,b)=>{return a+b});
//q2-
const user = {
    name:"Mostafa",
    age:25
};
const {name,age}=user;
console.log(name);
console.log(age);
//q3-
console.log(`hello ${name}`);
//q4-
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const newArr=[...arr1,...arr2];

//part 6 -many
const students = [
    {name:"Ali", degree:70},
    {name:"Sara", degree:95},
    {name:"Ahmed", degree:40},
    {name:"Mona", degree:85},
    {name:"Omar", degree:55}
];
const names= students.map((name)=>{
    return students.name;
});
console.log(names);
const pass = students.filter((pass)=>{
    return students.degree>=60;
});
console.log(pass);

const good = students.find((good)=>{
    return students.degree>90;
});
console.log(good);
students.forEach((name)=>{
    console.log(students.name);
});

//bonus 

const numbers = [5,10,15,20];
const sum = numbers.reduce((sum,num)=>{
    return sum+num
},0);
console.log(sum);



