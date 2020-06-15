

//prints the below output to the screen (these responses may not be accurate but is just an example)

//you can drive in most countries:false
//you can drive in most countries:false
//you can drive in most countries:false

//you can drive in United States: true
//you can vote in United States: false
//you can drink in United States: false

//you can drive in Canada: true
//you can vote in Canada: true
//you can drink in Canada: false

//you can drive in France: true
//you can vote in France: true
//you can drink in France: false

class CountryMinimumAgeChecker{
  //set the default age for driving,drinking,and voting to be 21
  constructor(){
    this.name = 'name'
    this.driving = 21
    this.drinking = 21
    this.voting = 21
  }
  //takes in an integer for age and returns true or false if that age is allowed to drive in that country
  isOfDrivingAge(value){
    console.log('You can drive in ' + this.name + ': '+(value > this.driving).toString())
  }

   //takes in an integer for age and returns true or false if that age is allowed to drive in that country
  isOfVotingAge(value){
    console.log('You can vote in ' + this.name + ': '+(value > this.voting).toString())
  }

   //takes in an integer for age and returns true or false if that age is allowed to drive in that country
  isOfDrinkingAge(value){
    console.log('You can drink in ' + this.name + ': '+(value > this.drinking).toString())
  }
}

//UsaMinimumAgeChecker,CanadaMinimumAgeChecker,FranceMinimumAgeChecker
//are classes that inherit from CountryMinimumAgeChecker
class UsaMinimumAgeChecker extends CountryMinimumAgeChecker{
    constructor(){
        super()
        this.name = 'United States'
        this.driving = 14
        this.voting = 18
    }
}
class CanadaMinimumAgeChecker extends CountryMinimumAgeChecker{
    constructor(){
        super()
        this.name = 'Canada'
        this.driving = 14
        this.voting = 18
        this.drinking = 19
    }
}
class FranceMinimumAgeChecker extends CountryMinimumAgeChecker{
    constructor(){
        super()
        this.name = 'France'
        this.driving = 15
        this.voting = 18
        this.drinking = 18
    }
}

var minimumAgeChecker = (age, array) =>{
    for (var object in array){

        array[object].isOfDrinkingAge(age)
        array[object].isOfDrivingAge(age)
        array[object].isOfVotingAge(age)
    }
}

//create a function that takes in an integer for a person's age and an array of objects of type : "country minimum age checker" that checks the minimum age for different activities in different countries

age = 17

array = [new CountryMinimumAgeChecker(),new UsaMinimumAgeChecker(),new CanadaMinimumAgeChecker(),new FranceMinimumAgeChecker()]

minimumAgeChecker(age,array)

//wikipedia page to check ages...if multiple ages, go with the minimum, if no ages, assume 21 is the correct age.

//driving - https://en.wikipedia.org/wiki/List_of_minimum_driving_ages
//voting - https://en.wikipedia.org/wiki/Voting_age
//drinking - https://en.wikipedia.org/wiki/Legal_drinking_age

//for extra credit create another function that takes an array of person objects like the one below and prints to the screen their status for an array of country checkers
person = {name: "John Doe", age:17}

minimumAgeChecker(age,array)

//for extra credit add additional countries other than Usa,Canada, and France to the array and create minimum age checker classes for them


//post link learn

