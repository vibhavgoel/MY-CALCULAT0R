var n1;
var n2;
var b1;
var b2;
var b3;
var b4;

function setup()
{
createCanvas(500,800)
num1= createInput()
num1.position(70,100)

num2=createInput()
num2.position(300,100)

b1=createButton("+ADD+")
b1.position(70,300)
b1.mousePressed(add)
b2=createButton("*MUL*")
b2.position(120,300)
b2.mousePressed(mul)
b3=createButton("-SUB-")
b3.position(170,300)
b3.mousePressed(sub)
b4=createButton("/DIV/")
b4.position(220,300)
b4.mousePressed(div)
textSize(20)

}


function draw()
{
  background("grey")
  
  text("Enter number 1",70,80)
  text("Enter number 2",300,80)
  text("WELCOME TO MY CALCULAT0R",100,40)
  n1=parseInt(num1.value())

  n2=parseInt(num2.value())
}


function add()
{
  console.log(n1+n2)
  
}
  function sub()
{
  console.log(n1-n2)
}

function mul()
{
  console.log(n1*n2)
}

function div()
{
  console.log(n1/n2)
}
