export class Card{
    constructor(data, templateSelector,{handleCardClick, handleDeleteButtonClick, handleLikeClick}){
        this._text = data.name;
        this._link = data.link;
        this._id = data._id;
        this._template = document.querySelector(templateSelector).content;
        this._handleCardClick = handleCardClick;
        this._handleDeleteButtonClick = handleDeleteButtonClick;
        this._handleLikeClick = handleLikeClick;
    }

    _toggleLike(){
        this._content.querySelector('.element__heart').classList.toggle('element__heart_active');
    }    

    removeCard(){
        this._content.remove();
        this._content = null;
    }

    getId(){
        return this._id
    }

    _getTemplate(){
        this._content = this._template.querySelector('.element').cloneNode(true);
        return this._content;
    }

    
    render(){
        this._getTemplate();
        this._image = this._content.querySelector('.element__image');
        this._image.src = this._link;
        this._image.alt = this._text;
        this._content
        .querySelector('.element__text').textContent = this._text;

        this._image
        .addEventListener('click',() =>{this._handleCardClick(this._content)});
        this._content
        .querySelector('.element__btn-delete')
        .addEventListener('click',() => this._handleDeleteButtonClick(this));
        this._content
        .querySelector('.element__heart')
        .addEventListener('click',() => {this._handleLikeClick(this._content)});
        return this._content;
        // console.log(this._content);
        // container.prepend(this._content);
    }
}