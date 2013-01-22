Ria - JavaScript med backbone, underscore, jquery och require
===========

##Projektverktyg i javascript

Appen skapad som en del av kursen RIA-utveckling med JavaScript, LNU Vintern/Våren 2013

## Applikationens Relationer

>Användaren kan skapa ett eller flera projekt

>Varje projekt kan ha exakt en status

>varje projekt kan ha en eller flera tasks

>varje task kan tillhöra exakt ett projekt

>varje task kan ha exakt en status

## Applikationens objekt/modeller

```javascript

//Project model
Project = {
    "id" : "1", //Int
    "status" : { name: "Started" }, //Related object
    "p_name" : "Ria Application", //String
    "p_description" : "Learn advanced JavaScript by crafting a RIA with backbone.js", //String
    "tasks" : [
        //Collection of tasks objects
    ]
}
 
// Task Model
Task = {
    "id" : "1", //Int,
    "project" : { //Project object}, //Related object
    "status" : { name: "Started" }, //Related object
    "task_name" : "Create Documentation", //String
    "task_description" : "Create application outline, documentation, usecases and UML" //String
}
 
// Status Model
Status = {
    "id" : 1, //Int,
    "status_name" : "Started" //String
}

```