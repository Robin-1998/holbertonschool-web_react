interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

let student1 = {
	firstName: 'Robin',
	lastName: 'David',
	age: 27,
	location: 'Astille',
};

let student2 = {
	firstName: 'Johnny',
	lastName: 'Silverhand',
	age: 34,
	location: 'Nightcity',
};

const studentsList: Student[] = [student1, student2];

// Création dynamique du tableau HTML
const table = document.createElement('table')
const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

//création des en-tête
const thFirstName = document.createElement('th');
thFirstName.textContent = 'First Name';

const thLocation = document.createElement('th');
thLocation.textContent = 'Location';

headerRow.appendChild(thFirstName);
headerRow.appendChild(thLocation);
thead.appendChild(headerRow);
table.appendChild(thead);

// Corps du tableau
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const tdFirstName = document.createElement('td');
  tdFirstName.textContent = student.firstName;

  const tdLocation = document.createElement('td');
  tdLocation.textContent = student.location;

  row.appendChild(tdFirstName);
  row.appendChild(tdLocation);
  tbody.appendChild(row);
});

table.appendChild(tbody);

// 5. Ajout du tableau au corps de la page
document.body.appendChild(table);
