const person = {
 firstName: 'Grace',
 lastName: 'Hopper',
 age: 89,
 fullName: () => { return person.firstName + ' ' + this.lastName }
}

let x = person.fullName();
console.log(x);
