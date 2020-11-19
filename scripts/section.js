export default class Section{
    constructor({items, renderer}, selector){
        this._items = items;
        this._renderer = renderer;
        this._selector = document.querySelector(selector);
    }



    addItem = (element) =>{
        this._renderer(element, this._selector);
    }    
  
    renderer = () => {
        this._items.forEach(this.addItem);
    }
}