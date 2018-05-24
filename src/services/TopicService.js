const TOPIC_API_URL =
    'http://fathomless-brook-39975.herokuapp.com/api/course/CID/module/MID/lesson/LID/topic';

const TOPIC_API_URL2 =
    'http://fathomless-brook-39975.herokuapp.com/api/topic/TOPIC_ID';

const TOPIC_API_URL3 =
    'http://fathomless-brook-39975.herokuapp.com/api/topic';

let _singleton = Symbol();
export default class TopicService {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new TopicService(_singleton);
        return this[_singleton]
    }

    findAllTopicsForLesson(courseId, moduleId, lessonId) {
        return fetch(
            TOPIC_API_URL
                .replace('CID', courseId)
                .replace('MID', moduleId)
                .replace('LID', lessonId))
            .then(function (response) {
                return response.json();
            })
    }

    createTopic(courseId, moduleId, lessonId, topic) {
        return fetch(TOPIC_API_URL
                .replace('CID', courseId)
                .replace('MID', moduleId)
                .replace('LID', lessonId),
            {
                body: JSON.stringify(topic),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(function (response)
        { return response.json(); })
    }

    findAllTopics() {
        return fetch(TOPIC_API_URL3)
            .then(function(response){
                return response.json();
            });
    }

    deleteTopic(topicId) {
        return fetch(TOPIC_API_URL2.replace
        ('TOPIC_ID', topicId), {
            method: 'delete'
        })
    }


}