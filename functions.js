function blogpost(_name, _email) {
  this.name = _name;
  this.email = _email;
}

const blog = new blogpost("derrick ", "anita@gmail.com");
//console.log(blog.email)

// blog.call(null, blogpost);
const blog2 = new blogpost.call(null, "derrick", "anita@gmail.com");

console.log(blog2._email);
