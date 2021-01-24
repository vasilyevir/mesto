export default class UserInfo{
    constructor(data){
        this._name = document.querySelector(data.name);
        this._job = document.querySelector(data.about);
    }

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._job.textContent = data.about;
    } 

    getUserInfo() {
        return {
          name: this._name.textContent,
          about: this._job.textContent
        }
    } 
}