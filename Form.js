class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Enter correct option no.');
    this.greeting = createElement('h2');
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("My quiz game");
    title.position(130, 0);
    var title2 = createElement('h2')
    title.html("How many ABCD's were there");
    title.position(50, 100);

   
   
   
    this.input.position(50, 200);
    this.button.position(250, 200);

   

  }
}
