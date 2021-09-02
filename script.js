  // call function
  function theProduct(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) {
    theProduct.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(new Food('Cheddar Cheese', 5).name);
  console.log(new Food('Whole Wheat Bread', 5).name);
  console.log(new Food('Milk', 5).name);
  console.log(new Food('Eggs', 5).name);
  console.log(new Food('Spinach', 5).name);
  console.log(new Food('Mushrooms', 5).name);

 // return function 
  let myText = 'The cheese is expired';
  let newString = myText.replace('expired', 'fresh');
  console.log(newString);


  //switch function
  function myFunction() {
    var text;
    switch (new Date().getDay()) {
      case 6:
        text = "Yay, Today is Saturday!";
        break;
      case 0:
        text = "Today is Sunday, it's time to turn in your project!";
        break;
      default:
        text = "Let's look forward to the weekend!";
    }
    document.getElementById("demo").innerHTML = text;
}

//pass info into function

function totalStorePrice (one, two, three, four, five, six){
    return one + two + three + four + five + six;
}

console.log(totalStorePrice(2.42,2.88,3.32,2.23,2.48,2.17));
