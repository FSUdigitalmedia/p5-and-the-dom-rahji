var myParagraph;
var myButton;
var mySlider;
var picture;

function setup() {
  myParagraph = createP("html");
  myParagraph.position(0, 0);
  myParagraph.mouseClicked(makeRed);

  myButton = createButton("click me");
  myButton.mouseClicked(clickedButton);

  mySlider = createSlider(0, 255, 20, 10);
  mySlider.id("theSlider");

  picture = select("img");
  picture.doubleClicked(clickedImage);
}

function draw() {
   myParagraph.position(frameCount % 200, 40);
   myParagraph.style("font-size", mySlider.value() + "px");
   // myParagraph.position(mouseX,mouseY);
   mySlider.position(0 ,300);
}

function makeRed() {
  myParagraph.style("color", "red");
}

function clickedButton() {
   //select('#second').style("font-size", "xx-small");
   select("img").style("width","100px");
}

function clickedImage() {
   select("#second").hide();
}

/*

Some Questions:
0. What is this percent sign all about? (hint: it's "modulus")
1. Where, in the p5 reference, do we find all this DOM stuff?
2. Why is the text so large when it's just a "paragraph"?
3. "color" and "red"? Where did those come from and where 
   could you find more style attributes that could be
   changed?

Some Things to Try:
0. Make the text follow the mouse pointer
1. Make a button
2. Make the button affect the style or position of some text
3. Make a picture that shows up on the page. Does it have to
   be created in p5 or can you just place it in the HTML?
   What's the difference?
4. Can you make the position of the image change when the
   button is pressed?
5. Make a slider and have it change the text size
6. Add some CSS in style.css to make the slider huge and
   rotated 30 degrees
6. "hide" the text when the image is double-clicked
   
*/