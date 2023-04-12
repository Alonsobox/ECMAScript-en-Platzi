const user = {username:'alonsobox', age: 23, country:'PR'};
const {username,...values}=user;
console.log(username);
console.log(values);