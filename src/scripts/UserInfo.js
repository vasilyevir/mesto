import {name, job, nameChange, jobChange} from '../utils/contants.js'

export default class UserInfo{
    constructor(data){
        this._name = data.name;
        this._job = data.job;
    }

    setUserInfo(){
        document.querySelector(name).textContent = this._name;
        document.querySelector(job).textContent = this._job;
    }

    getUserInfo(){
        nameChange.setAttribute('value', this._name);
        jobChange.setAttribute('value', this._job);
    }
}