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
    "status_id" : "1", //Int - Foreign key
    "name" : "Ria Application", //String
    "Description" : "Learn advanced JavaScript by crafting a RIA with backbone.js", //String
    "tasks" : [
        //Collection of tasks
    ]
}
 
// Task Model
Task = {
    "id" : "1", //Int,
    "proj_id" : "1", //Int - Foreign key
    "status_id" : "1", //Int - Foreign key
    "project" : "1", // Reflected id by Backbone Relations
    "name" : "Create Documentation", //String
    "description" : "Create application outline, documentation, usecases and UML" //String
}
 
// Status Model
Status = {
    "id" : 1, //Int,
    "name" : "Started" //String
}

```