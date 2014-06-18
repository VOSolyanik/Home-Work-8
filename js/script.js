var company = {										//Description of the company
	companyName: 'Susistudia',
	ownerName: 'Иванов Иван Иванович',
	capital: 2565000,
	workersList: [
	{
		name: 'Петрова Галина Степановна',
		age:34,
		salary: 4000
	},
	{
		name: 'Сергеенко Афанисий Иванович',
		age: 23,
		salary: 3000
	},
	{
		name: 'Остапенко Валерый Олександрович',
		age: 45,
		salary: 5600
	},
	{
		name: 'Мартыш Евгений Власович',
		age: 52,
		salary: 4500
	}],
	addNewWorker: function(workerName, age, salary) { //function that adds Worker to the company
		var newWorker = {
			name: workerName,
			age: age,
			salary: salary
		};
		company.workersList.push(newWorker);
	},
	getCompanyData: function() {					//function that shows company data
		console.log('Компания: ' + company.companyName + '\n');
		console.log('Владелец: ' + company.ownerName + '\n');
		console.log('Капитал: ' + company.capital + '\n');
		for (var i = 0; i < company.workersList.length; i++) {
			company.getWorkerData(i);
		}
	},
	getWorkerData: function(workerNumber){			//function that shows data obout one Worker by number
		console.log(company.workersList[workerNumber].name + '\n\t' + 'Возраст: ' + company.workersList[workerNumber].age + '\n\t' + 'Зароботная плата: '+company.workersList[workerNumber].salary+'\n');
	}
};
	

var	adminLogin = 'Admin',
	adminPassword = 'Admin',
	enterdLogin,
	enteredPassword;


enterdLogin = prompt('Введите логин:');
enteredPassword = prompt('Введите пароль:');

if((enterdLogin!==adminLogin)||(enteredPassword!==adminPassword)){
	alert('У вас нет прав доступа в системму компании '+company.companyName);
} else{
	var numOfNewWorkers;

	alert('Добро пожаловать в системму компании '+company.companyName);
	company.getCompanyData();
	numOfNewWorkers = prompt('Введите количество сотрудников которых хотите добавить:');

	for(var i = 0; i < numOfNewWorkers; i++){
		var newWorkerName, age, salary;

		newWorkerName = prompt('Введите имя нового работника:');
		age = prompt('Введите его возраст:');
		salary = prompt('Введите его зарплату:');

		company.addNewWorker(newWorkerName, age, salary);
		console.log('Добавлено нового сотрудника:');
		company.getWorkerData(company.workersList.length-1);
	};
	alert('Вы добавили всех сотрудников. Просмотрите информацию еще раз');
	company.getCompanyData();
};



