// CODE here for your Lambda Classes

class Person{
  constructor(attributes){
  this.name = attributes.name;
  this.age = attributes.age;
  this.location = attributes.location
    }


    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}


class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }

   demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

   grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }
}


class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;

   }
  listsSubject() {
    this.favSubjects.forEach(subject => console.log(subject));
  }

   PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

   sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
}

class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }

   standUp(channel) {
    console.log( `${this.name} announces to ${channel}, @channel standy times!`);
  }

   debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

//Student

const jhin = new Student({
  name: "Khada Jhin",
  age: 21,
  location: "Summoner's Rift",
  previousBackground: "Psychopath",
  className: "/r/summonerschool",
  favSubjects: ['ADC', 'MID', 'Counting to FOUR'],
});

//INTRUCTORS

const zed = new Instructor({
  name: "Zed",
  age: 27,
  location: "Ionia",
  specialty: "Inting",
  favLanguage: "FLAME",
  catchPhrase: "Ignorance is fatal.",
});

const jinx = new Instructor({
  name: "Jinx",
  age: 23,
  location: "Piltover",
  specialty: "Rockets",
  favLanguage: "GUNS",
  catchPhrase: "I'm crazy! Got a doctor's note.",
});

//PRJECT MANAGER

const thresh = new ProjectManager({
  name: "Thresh",
  age: 26,
  location: "Shadow Isles",
  specialty: "Catching Fish",
  favLanguage: "Spooky words",
  catchPhrase: "Torment comes in so many flavors.",
  gradClassName: "Hookbois",
  favInstructor: "Jinx",
});

//CONSOLELOGS

console.log(jhin.name);
console.log(jhin.speak());
console.log(jhin.previousBackground);
console.log(jhin.PRAssignment('JavaScript IV'));
console.log(jhin.sprintChallenge('JavaScript Fundamentals'));
console.log(jhin.listsSubject());
