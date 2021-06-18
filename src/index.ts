import { Greeter } from './greeter';
import { JavaScriptGreeter } from './javasript-greeter';
import { LoudGreeter } from './loud-greeter';
import {HtmlGreeter } from './html-greeter';
// import all of them here (4)

const myGreeter: Greeter = new Greeter('Oh hi there Fran!');
const myJavaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter('Yo yo yo!')
const myLoudGreeter: LoudGreeter = new LoudGreeter('Whatuuuuup?!')
const myHtmlGreeter: HtmlGreeter = new HtmlGreeter('','<h2>');


// volume up for loudGreeter

myLoudGreeter.addVolume();
myLoudGreeter.addVolume();
myLoudGreeter.addVolume();
myLoudGreeter.addVolume();
myLoudGreeter.addVolume();

console.log(myGreeter.greet('Austin'));
console.log(myJavaScriptGreeter.greet('David'));
console.log(myLoudGreeter.greet('Joelle'));
console.log(myHtmlGreeter.greet('Benson'));
