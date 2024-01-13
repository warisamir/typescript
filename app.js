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
function login(credential) {
    console.log(credential);
    return true;
}
var user = {
    username: 'codergyan',
    password: '123',
    isAdmin: false,
};
login(user);
