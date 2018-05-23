const LESSON_API_URL =
    'http://localhost:8085/api/course/CID/module/MID/lesson';

const LESSON_API_URL2 =
    'http://localhost:8085/api/lesson/LESSON_ID';

const LESSON_API_URL3 =
    'http://localhost:8085/api/lesson';

let _singleton = Symbol();
export default class LessonService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new LessonService(_singleton);
        return this[_singleton]
    }

    findAllLessonsForModule(courseId, moduleId) {
        console.log(courseId);
        console.log(moduleId);
        return fetch(
            LESSON_API_URL
                .replace('CID', courseId)
                .replace('MID', moduleId))
            .then(function (response) {
                return response.json();
            })
    }

    createLesson(courseId, moduleId, lesson) {
        console.log(courseId);
        console.log(moduleId);
        return fetch(LESSON_API_URL.replace('CID', courseId).replace('MID', moduleId),
            {
                body: JSON.stringify(lesson),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    findAllLessons() {
        return fetch(LESSON_API_URL3)
            .then(function(response){
                return response.json();
            });
    }

    deleteLesson(lessonId) {
        return fetch(LESSON_API_URL2.replace
        ('LESSON_ID', lessonId), {
            method: 'delete'
        })
    }


}