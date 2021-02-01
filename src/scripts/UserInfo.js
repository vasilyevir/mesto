export default class UserInfo{
    constructor(data){
        this._name = document.querySelector(data.name);
        this._job = document.querySelector(data.about);
        this._avatarImage = document.querySelector(data.avatarImage);
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._job.textContent = data.about;
        this._avatarImage.src = data.avatar;
    } 

    getUserInfo() {
        return {
          name: this._name.textContent,
          about: this._job.textContent
        }
    } 
}