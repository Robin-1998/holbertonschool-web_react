interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any; // Allow additional properties
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

// Interface qui décrit une fonction
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe"));

// Interface pour les arguments du constructeur
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface pour les méthodes de la classe
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Classe implémentant l'interface
class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

// Exemple d'utilisation
const student = new StudentClass({ firstName: 'Alice', lastName: 'Dupont' });
console.log(student.displayName());     // Alice
console.log(student.workOnHomework());  // Currently working
