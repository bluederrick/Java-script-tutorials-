class blogpost {
  constructor(email, description, title) {
    this.email = email;
    this.description = description;
    this.title = title;
  }

  static get_email() {
    email = "derricknsirim77@gmail.com";
    //console.log(`this is my  email ${this.email}`)
  }
}
const derricks_blogpost = new blogpost(
  " derricknsirim77@gmail.com",
  "development for young people",
  "skill developments"
);

// console.log(blogpost.static.get_email);

///

class schools {
  constructor(students, students_id, email_address) {
    (this.student = students),
      (this.student_id = students_id),
      (this.email_address = email_address);
  }
}
let _school = new schools("macdonald", "23", "");
console.log(_school);
