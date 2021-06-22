import { Greeter } from './greeter';
import { JavaScriptGreeter } from './javasript-greeter';
import { LoudGreeter } from './loud-greeter';
import {HtmlGreeter } from './html-greeter';
// import all of them here (4)

const myGreeter: Greeter = new Greeter('Oh hi there friendo');
const myGreeter2: Greeter = new Greeter('This greeting goes out to')
const myJavaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter('Yo yo yo!')
const myLoudGreeter: LoudGreeter = new LoudGreeter('Whatuuuuup?!')
const myHtmlGreeter: HtmlGreeter = new HtmlGreeter('Hey heyyyy','<h2>');


// volume up for loudGreeter

myLoudGreeter.addVolume();
myLoudGreeter.addVolume();
myLoudGreeter.addVolume();
myLoudGreeter.addVolume();
myLoudGreeter.addVolume();

console.log(myGreeter.greet('Austin'));
console.log(myGreeter2.greet('Jeff'));
console.log(myJavaScriptGreeter.greet('David'));
console.log(myLoudGreeter.greet('Joelle'));
console.log(myHtmlGreeter.greet('Benson'));
