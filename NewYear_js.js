let numbers = [];
let u;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  u = width/15;
  
  numbers[0] = new Numbers(-4.5*u, 0, u);
  numbers[1] = new Numbers(-2.5*u, 0, u);
  numbers[2] = new Numbers(0.5*u, 0, u);
  numbers[3] = new Numbers(2.5*u, 0, u);
  numbers[4] = new Numbers(4.25*u, 0 + u, 0.5*u);
  numbers[5] = new Numbers(5.75*u, 0 + u, 0.5*u);
  
  textSize(2.75*u);
  textAlign(CENTER, CENTER);
}


function draw() {
  translate(width / 2, height / 2);
  if (year() == 2021) {
    background(170, 0, 0);
    digital();
  } else {
    noStroke();
    if (second() % 2 == 0) {
      background(170, 170, 0);
      fill(170, 0, 0);
    } else {
      background(170, 0, 0);
      fill(170, 170, 0);
    }
    text("HAPPY", 0, -1.5*u);
    text("NEWYEAR", 0, 1.5*u);
  }
  
}

function digital() {
  //hours
  if ((23-hour()) < 10) {
    numbers[0].update(10);
  } else {
    numbers[0].update(floor((23-hour())/10));
  }
  numbers[1].update((23-hour()) - floor((23-hour())/10)*10);  

  //minutes
  if ((59-minute()) < 10) {
    numbers[2].update(0);
  } else {
    numbers[2].update(floor((59-minute())/10));
  }
  numbers[3].update((59-minute()) - floor((59-minute())/10)*10);  

  //seconds
  if ((59-second()) < 10) {
    numbers[4].update(0);
  } else {
    numbers[4].update(floor((59-second())/10));
  }
  numbers[5].update((59-second()) - floor((59-second())/10)*10);  



  //show numbers
  for (let number of numbers) {
    number.show();
  }

  //dots
  strokeWeight(u/3);
  stroke(255);
  point(-0.75*u, 0 - 0.8*u);
  point(-0.75*u, 0 + 0.8*u);

  //slash
  strokeWeight(u/6);
  stroke(255);
  line(3.7*u, 6*height/7, 3.3*u, 6*height/7 + 2*u);
}

class Numbers {
  constructor(x, y, p) {
    this.x = x;
    this.y = y;
    this.n = 8;
    this.u = p;
  }

  show() {
    strokeWeight(this.u/3);

    //      1
    //     ---
    //  2 |   | 3
    //    | 4 |
    //     ---
    //  5 |   | 6
    //    |   |
    //     ---
    //      7

    //1
    this.list = [0, 2, 3, 5, 6, 7, 8, 9];
    check(this.n, this.list);
    line(this.x - (0.6*this.u), this.y - (2*this.u), this.x + (0.6*this.u), this.y - (2*this.u));

    //2
    this.list = [0, 4, 5, 6, 8, 9];
    check(this.n, this.list);
    line(this.x - (0.8*this.u), this.y - (1.6*this.u), this.x - (0.8*this.u), this.y - (0.4*this.u));

    //3
    this.list = [0, 1, 2, 3, 4, 7, 8, 9];
    check(this.n, this.list);
    line(this.x + (0.8*this.u), this.y - (1.6*this.u), this.x + (0.8*this.u), this.y - (0.4*this.u));

    //4
    this.list = [2, 3, 4, 5, 6, 8, 9];
    check(this.n, this.list);
    line(this.x - (0.6*this.u), this.y, this.x + (0.6*this.u), this.y);

    //5
    this.list = [0, 2, 6, 8];
    check(this.n, this.list);
    line(this.x - (0.8*this.u), this.y + (0.4*this.u), this.x - (0.8*this.u), this.y + (1.6*this.u));

    //6
    this.list = [0, 1, 3, 4, 5, 6, 7, 8, 9];
    check(this.n, this.list);
    line(this.x + (0.8*this.u), this.y + (0.4*this.u), this.x + (0.8*this.u), this.y + (1.6*this.u));

    //7
    this.list = [0, 2, 3, 5, 6, 8, 9];
    check(this.n, this.list);
    line(this.x - (0.6*this.u), this.y + (2*this.u), this.x + (0.6*this.u), this.y + (2*this.u));
  }
  update(n) {
    this.n = n;
  }
}

function check(n, list) {
  if (list.includes(n)) {
    stroke(255);
  } else {
    noStroke();
  }
}
