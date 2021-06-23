import {Greeter} from '../src/greeter';
import { JavaScriptGreeter } from '../src/javasript-greeter';
import { LoudGreeter } from '../src/loud-greeter';
import {HtmlGreeter } from '../src/html-greeter';
// const { Greeter } = require('../src/greeter.ts');



describe('Test Greeter method', () =>{
   /// ** arrange ** //

   // Greeter Variables 
    const greeter1: Greeter = new Greeter('This is greeting1');
    const javaScriptGreeter1: JavaScriptGreeter = new JavaScriptGreeter('This is Java Greeting 1');
    const loudGreeter: LoudGreeter = new LoudGreeter('Loud greeting for');
    const loudGreeter2: LoudGreeter = new LoudGreeter('Loud greeting for');
    const htmlGreeter: HtmlGreeter = new HtmlGreeter('HTML greeting for', '<h1>');



    /// ** act ** //
    greeter1.greet('Austin');
    javaScriptGreeter1.greet('Samuel');
    loudGreeter.greet('Jax');
    loudGreeter2.greet('Maxine');
    loudGreeter2.addVolume();
    htmlGreeter.greet('Matoi');



    /// ** assert ** ///

    // greeter tests
    test('Test Greeter 1 to have greeting this is greeting1', () => {
        expect(greeter1.greeting).toEqual('This is greeting1');
    })
    test('Test Greeter 1 to have name Austin', () => {
        expect(greeter1.greet('Austin')).toEqual('This is greeting1, Austin!');
    })
    // Java Greeter
    test('Test Java Greeter', () => {
        expect(javaScriptGreeter1.greeting).toEqual('This is Java Greeting 1');
    })
    test('Test Java Greeter to have name Samuel', () => {
        expect(javaScriptGreeter1.greet('Samuel')).toEqual(`console.log('This is Java Greeting 1 Samuel!')`);
    })
    // Loud greeter
    test('Test Loud Greeter', () => {
        expect(loudGreeter.greeting).toEqual('Loud greeting for');
    })
    test('Test Loud Greeter to have name Jax', () => {
        expect(loudGreeter.greet('Jax')).toEqual(`Loud greeting for Jax !!`);
    })
    // testing addVolume functionality
    test('Test Loud Greeter to have name Maxine with three !!!', () => {
        expect(loudGreeter2.greet('Maxine')).toEqual(`Loud greeting for Maxine !!!`);
    })
    // testing  HTML Greeter
    test('Test HTML Greeting', () => {
        expect(htmlGreeter.greeting).toEqual('HTML greeting for');
    })
    test('HTML Greeter function', () => {
        expect(htmlGreeter.greet('Matoi')).toEqual(`<h1>HTML greeting for Matoi.<h1>`);
    })
})