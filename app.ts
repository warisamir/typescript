// // type id=number| string ;
// // function _id(id:id){
// //     if(typeof id=='string')
// //     {
// //         console.log(id.toUpperCase());
// //     }
// //     else if(typeof id=='number'){
// //         console.log(id+10);
// //     }
// //     else
// //     console.log(id);
// // }
// // _id(10);

// function slic(x:string|number[]){
// return x.slice(0,3);
// }
// console.log(slic([1,2,3,4,5]));

// function  loganything<T>(args:T):T{
//     console.log(args);
//     return args;
// }

// loganything(["sr","war","amir","place"]);

//
// type food{
//     food:string;
// }
// type foood {
//     stock:number
// }
//  interface hasAge{
//     age:number;
// }
// interface Player{
//     name:string;
//     age:number;
// }
// function getold(people :hasAge[]):hasAge{
//     return people.sort((a,b)=>b.age-a.age)[0];
// }
// const poeple =[{age:2},{age:44},{age:45},{age:25}]
// const player: Player[] =[
//     {name:"age", age:5},
//     {name:"age", age:10},
//     {name:"age", age:52},
//     {name:"age", age:2},
// ]
// console.log(getold(player).age);
// const person =getold(player)as Player
interface IPost{
title:string;
id:number;
description:string;
}
interface IUser{
    name:string;
    age:number;
}
const fetchpostdata = async(url:string):Promise<IPost[]> =>{
    const response=await fetch(`http://example.com/${url}`);
    return response.json();
}
const fetchuserdata=async(url:string):Promise<IUser[]> =>{
    const response=await fetch(`http://example.com/${url}`);
    return response.json();
}
const fetchdata= async<ResultType>(path:string):Promise<ResultType[]>=>{
    const response=await fetch(`http://example.com/${path}`);
    return response.json();
}
(async()=>{
const posts=await fetchdata<IUser>('/users');
posts[0].name;
})();