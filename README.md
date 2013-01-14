Ria
===========

##Projekt

Skapat en stomme, eller ryggrad av mitt projekt, ska fixa readme, dokumentation osv va det lider...

## Relationer

>Användaren kan skapa ett eller flera projekt
>Varje projekt kan ha exakt en status
>varje projekt kan ha en eller flera tasks
>varje task kan tillhöra exakt ett projekt
>varje task kan ha exakt en status

## Project Model

```javascript

Project = {
    "id" : "1", //Int
    "status_id" : "1", //Int - Foreign key
    "name" : "Ria Application", //String
    "Description" : "Learn advanced JavaScript by crafting a 
                       RIA with backbone.js", //String
    "status" : "1", //Int - Foreign key
    "tasks" : {
        //Collection of tasks
    }
}
 
# Task Model
Task = {
    "id" : "1", //Int,
    "proj_id" : "1", //Int - Foreign key
    "status_id" : "1", //Int - Foreign key
    "name" : "Create Documentation", //String
    "description" : "Create application outline, 
                         documentation, usecases and 
                            UML"//String
}
 
# Status Model
Status = {
    "id" : 1,
    "name" : "Started"
}

```
