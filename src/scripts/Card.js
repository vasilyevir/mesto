export class Card{
    constructor(data, templateSelector,{handleCardClick}){
        this._text = data.name;
        this._link = data.link;
        this._template = document.querySelector(templateSelector).content;
        this._handleCardClick = handleCardClick;
    }

    _toggleLike(){
        this._content.querySelector('.element__heart').classList.toggle('element__heart_active');
    }    

    _removeCard(){
        this._content.remove();
    }

    render(){
        this._content = this._template.querySelector('.element').cloneNode(true);
        this._content.querySelector('.element__image').src = this._link;
        this._content.querySelector('.element__image').alt = this._text;
        this._content.querySelector('.element__text').textContent = this._text;

        this._content
        .querySelector('.element__image')
        .addEventListener('click',() =>{this._handleCardClick(this._content)});
        this._content
        .querySelector('.element__btn-delete')
        .addEventListener('click',() => this._removeCard());
        this._content
        .querySelector('.element__heart')
        .addEventListener('click',() => {this._toggleLike()});
        return this._content;
        // console.log(this._content);
        // container.prepend(this._content);
    }
}