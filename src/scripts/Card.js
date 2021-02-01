export class Card{
    constructor(data, templateSelector, userId, like, likeActive, numberOfLikes, btnDeleteMyCard, {handleCardClick, handleDeleteButtonClick, handleLikeClick}){
        this._text = data.name;
        this._link = data.link;
        this._id = data._id;
        this._infoCard = data;
        this._ownerId = data.owner._id;
        this._template = document.querySelector(templateSelector).content;
        this._usreId = userId;
        this._like = like;
        this._likeActive =likeActive;
        this._numberOfLikes = numberOfLikes;
        this._btnDeleteMyCard = btnDeleteMyCard;
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
        return this._id;
    }

    isLiked(card){
        return card.querySelector(this._like).classList.contains(this._likeActive);
    }

    setLikesInfo(res){
        this._content.querySelector(this._numberOfLikes).textContent = res.likes.length;
        if(this._ownerId === this._usreId){
            this._content.querySelector(this._like).classList.add(this._likeActive);
        } else {
            this._content.querySelector(this._like).classList.remove(this._likeActive);
        }
    }

    _getTemplate(){
        this._content = this._template.querySelector('.element').cloneNode(true);
        return this._content;
    }

    _setEventListener(){
        this._image
        .addEventListener('click',() =>{
            this._handleCardClick(this._text, this._link)
            console.log(this._id, this._usreId)
        });


        if (this._ownerId === this._usreId){
            this._content
            .querySelector('.element__btn-delete')
            .addEventListener('click',() => this._handleDeleteButtonClick(this));
        } else {
            this._content.querySelector('.element__btn-delete').remove(this._btnDeleteMyCard);
        }

        this._content
        .querySelector('.element__heart')
        .addEventListener('click',() => {this._handleLikeClick(this._content)});
    }

    render(){
        this._getTemplate();
        this._image = this._content.querySelector('.element__image');
        this._image.src = this._link;
        this._image.alt = this._text;
        this._content
        .querySelector('.element__text').textContent = this._text;
        this.setLikesInfo(this._infoCard);
        this._setEventListener();
        return this._content;
    }
}