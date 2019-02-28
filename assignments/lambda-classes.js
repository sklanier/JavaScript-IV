//CLASSES
//Person Class
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }
  speak() {
    return `Hello! My name is ${this.name}, and I am from ${this.location}.`;
  }
}

//Instructor Class
class Instructor extends Person {
  constructor(instructorProps) {
    super(instructorProps)
    this.specialty = instructorProps.specialty;
    this.favLanguage = instructorProps.favLanguage;
    this.catchPhrase = instructorProps.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ` + subject;
  }
  grade(student1, subject) {
    return student1.name + ` receives a perfect score on ` + subject;
  }
}

//Student Class
class Student extends Person {
  constructor(studentProps) {
    super(studentProps)
    this.previousBackground = studentProps.previousBackground;
    this.className = studentProps.className;
    this.favSubjects = studentProps.favSubjects;
  }
  listsSubjects(favSubjects) {
    return student2.name + `\'s favorite subjects are ` + favSubjects;
  }
  PRAssignment(subject) {
    return student3.name + ` has submitted a PR for ` + subject;
  }
  sprintChallenge(subject) {
    return `${this.student.name} has begun a sprint challenge on ${this.subject}.`
  }
}

//Project Manager Class
class ProjectManager extends Instructor {
  constructor(pmProps) {
    super(pmProps)
    this.gradClassName = pmProps.gradClassName;
    this.favInstructor = pmProps.favInstructor;
  }
  standUp(slackChannel) {
    return `${this.name} announces to ${this.slackChannel}, @channel standy times!​​​​​`
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${this.student.name}'s code on ${this.subject}.`
  }
}

//OBJECTS
//Person Objects
const fred = new Person({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const wilma = new Instructor({
  name: 'Wilma',
  location: 'Bedrock',
  age: 37,
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const barney = new Instructor({
  name: 'Barney',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

//Instructor Objects
const instructor1 = new Instructor({
  name: 'Fred',
  location: 'The Mystery Machine',
  age: 17,
  gender: 'male',
  favLanguage: 'Spanish',
  subject: 'Leadership',
  catchPhrase: `Let's split up, gang!`
});

const instructor2 = new Instructor({
  name: 'Shaggy',
  location: 'The Mystery Machine',
  age: 16,
  gender: 'male',
  favLanguage: 'French',
  specialty: 'Recreational drugs',
  catchPhrase: `Zoinks!`
});

const instructor3 = new Instructor({
  name: 'Velma',
  location: 'The Mystery Machine',
  age: 15,
  gender: 'female',
  favLanguage: 'Sanskrit',
  specialty: 'Sluething',
  catchPhrase: `Jinkies!`
});

//Student Objects
const student1 = new Student({
  name: 'Tommy',
  location: 'Pickles\' residence',
  age: 1,
  gender: 'male',
  favLanguage: 'baby-talk',
  specialty: 'learning',
  catchPhrase: `A baby's gotta do what a baby's gotta do!`
});

const student2 = new Student({
  name: 'Chuckie',
  location: 'Finsters\' residence',
  age: 2,
  gender: 'male',
  favLanguage: 'baby-talk',
  specialty: 'Being afraid',
  catchPhrase: `Maybe this isn't such a good idea...`
});

const student3 = new Student({
  name: 'Angelica',
  location: 'Pickles\' residence',
  age: 3,
  gender: 'female',
  favLanguage: 'English',
  subject: 'Being the boss',
  catchPhrase: `If you have to ask, you'll never know.`
});

//Project Manager Objects
const pm1 = new ProjectManager({
  name: 'Ms. Frizzle',
  location: 'A magic schoolbus',
  age: 37,
  gender: 'femmale',
  favLanguage: 'English',
  specialty: 'Field trips',
  catchPhrase: `Bus, do your stuff!`
});

const pm2 = new ProjectManager({
  name: 'Mr. Garrison',
  location: 'South Park',
  age: 41,
  gender: 'male',
  favLanguage: 'Satire',
  specialty: 'Sarcasm',
  catchPhrase: `Remember, children, there are no stupid questions - only stupid people.`
});

const pm3 = new ProjectManager({
  name: 'Prof. Keating',
  location: 'Welmont Acadamy',
  age: 39,
  gender: 'male',
  favLanguage: 'Latin',
  specialty: 'Poetry',
  catchPhrase: `Carpe diem!`
});

var subject = "Leadership";
var favSubjects = ['Hiding', ' Crying', ' and Sneezing'];

console.log(fred.speak()); // Fred speaks
console.log(wilma.speak()); // Wilma speaks
console.log(barney.speak()); // Barney speaks
console.log(instructor1.demo(subject)); // Fred speaks
console.log(instructor1.grade(student1, subject)); //Fred grades Tommy on his Leadership
console.log(student2.listsSubjects(favSubjects)); //Chuckie lists his favorite subjects
console.log(student3.PRAssignment(student3, subject)); //Angelica submits a PR for a subject
