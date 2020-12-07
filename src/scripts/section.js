export class Section{
    constructor({items, renderer}, selector){
        this._items = items;
        this._renderer = renderer;
        this._selector = document.querySelector(selector);
    }



    addItem (element){
        this._selector.prepend(element);
    }    
  
    renderer(){
        this._items.forEach((element) =>{
            const card = this._renderer(element);
            this.addItem(card)
        });
    }
}