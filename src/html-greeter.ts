import { Greeter } from "./greeter";

export class HtmlGreeter extends Greeter {
    tagName: string;
    constructor(greeting: string, tagName: string){
        super(greeting);
        this.tagName = tagName;
    }

    greet(name: string): string {
        return `${this.tagName}${this.greeting} ${name}.${this.tagName}`
    }
}