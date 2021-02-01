export class Section{
    constructor({items, renderer}, selector){
        // this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }



    // addItem (element){
    //     this._selector.prepend(element);
    // }    

    addItem(element, isArray) { 
        if (isArray) { 
            this._container.append(element); 
        } else { 
            this._container.prepend(element); 
        } 
      }
  
    // renderer(){
    //     this._items.forEach((element) =>{
    //         const card = this._renderer(element);
    //         const isArray = true;
    //         this.addItem(card, isArray)
    //     });
    // }
}