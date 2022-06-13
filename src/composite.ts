interface IRenderable {
    render(): string;
}
class Div implements IRenderable {
    private _elements: IRenderable[] = [];

    public addElement(element: IRenderable) {
        this._elements.push(element);
    }
    render(): string {
        return `<div>
            ${this._elements.map(element => element.render()).join('')}
        </div>`;
    }
}
class Form implements IRenderable {

    private _elements: IRenderable[] = [];

    public addElement(element: IRenderable) {
        this._elements.push(element);
    }

    render(): string {
        return `<form>
            ${this._elements.map(element => element.render()).join('')}
        </form>`;
    }
}
class Label implements IRenderable {

    constructor(public text: string) {
        this.text = text;
    }

    render(): string {
        return `<label>${this.text}</label>`;
    }

}
class Input implements IRenderable {

    render(): string {
        return `<input type="text" />`;
    }
}
class Button implements IRenderable {
    constructor(public text: string) {
        this.text = text;
    }
    render(): string {
        return `<button>${this.text}</button>`;
    }
}

const div = new Div();
const form = new Form();
form.addElement(new Label('Name:'));
form.addElement(new Input());
form.addElement(new Button('Submit'));
div.addElement(form);

document.getElementById('root')!.innerHTML = div.render();

