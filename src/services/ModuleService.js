const MODULE_API_URL = //'http://localhost:8085/api/course/CID/module';
             'https://fathomless-brook-39975.herokuapp.com/api/course/CID/module';
    //'https://fathomless-brook-39975.herokuapp.com/api/course/CID/module';

const MODULE_API_URL2 = 'https://fathomless-brook-39975.herokuapp.com/api/module/MODULE_ID';//'http://localhost:8085/api/course/CID/module/MODULE_ID';
   // 'https://fathomless-brook-39975.herokuapp.com/api/module/MODULE_ID';

const MODULE_API_URL3 =
    'https://fathomless-brook-39975.herokuapp.com/api/module';

let _singleton = Symbol();
export default class ModuleService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    findAllModulesForCourse(courseId) {
        return fetch(
            MODULE_API_URL
                .replace('CID', courseId))
            .then(function (response) {
                return response.json();
            })
    }

    createModule(courseId, module) {
        console.log(courseId);
        return fetch(MODULE_API_URL.replace('CID', courseId),
            {
                body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleService(_singleton);
        return this[_singleton]
    }

    findAllModules() {
        return fetch(MODULE_API_URL3)
            .then(function(response){
                return response.json();
            });
    }

    deleteModule(moduleId) {
        return fetch(MODULE_API_URL2.replace
        ('MODULE_ID', moduleId), {
            method: 'delete'
        })
    }


}