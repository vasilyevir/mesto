export class Section{
    constructor({items, renderer}, selector){
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    addItem(element, isArray) { 
        if (isArray) { 
            this._container.append(element); 
        } else { 
            this._container.prepend(element); 
        } 
      }
}
