let var_name = "pranav";
this[var_name] = "value";

console.log(this[var_name]);

// Basically isme this Object(window object) mai hamne pranav naam se variable set kia hai
// pranav naam ki window object mai ek property add hogyi hai
console.log(this);
