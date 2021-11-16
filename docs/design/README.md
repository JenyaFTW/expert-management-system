# Проєктування бази даних

## Модель бізнес-об'єктів

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml
  
    entity Surveys
    entity Surveys.id
    entity Surveys.name
    entity Surveys.description
    entity Surveys.owner
    entity Surveys.open
    entity Surveys.close

    Surveys *-- Surveys.id
    Surveys *-- Surveys.name
    Surveys *-- Surveys.description
    Surveys *-- Surveys.owner
    Surveys *-- Surveys.open
    Surveys *-- Surveys.close
  
    entity Experts
    entity Experts.id
    entity Experts.ocupation

    Experts *-- Experts.id
    Experts *-- Experts.ocupation

    entity Responses
    entity Responses.id
    entity Responses.text

    Responses *-- Responses.id
    Responses *-- Responses.text
  
    entity Reports
    entity Reports.id
    entity Reports.text
    entity Reports.date

    Reports *-- Reports.id
    Reports *-- Reports.text
    Reports *-- Reports.date
  
    entity Questions
    entity Questions.id
    entity Questions.text
    entity Questions.type

    Questions *-- Questions.id
    Questions *-- Questions.text
    Questions *-- Questions.type
	
    entity Users
    entity Users.id
    entity Users.username
    entity Users.email
    entity Users.password
    entity Users.role
 
    Users *-- Users.id
    Users *-- Users.username
    Users *-- Users.email
    Users *-- Users.password
    Users *-- Users.role
  
    Users "1,1" -- "0,1" Experts
    Users "1,1" - "0,*" Reports
    Users "1,1" -- "0,*" Surveys
    Reports "0,*" -- "1,1" Surveys
    Surveys "1,1" -- "0,*" Questions
    Experts "1,1" -- "0,*" Responses
    Responses "0,*" -- "1,1" Questions
            
@enduml

</center>

## ER-модель

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    entity Users <<ENTITY>> {
    	id:INT
    	username:VARCHAR
    	email:VARCHAR
    	password:VARCHAR
    	role:VARCHAR
    }

    entity Experts <<ENTITY>> {
        id:INT
        occupation:TEXT
    }

    entity Reports <<ENTITY>> {
        id:INT
        text:VARCHAR
        date:DATETIME
    }

    entity Surveys <<ENTITY>> {
        id:INT
        name:VARCHAR
        description:VARCHAR
        owner:INT
        open:DATETIME
        close:DATETIME
    }

    entity Questions <<ENTITY>> {
        id:INT
        text:VARCHAR
        type:VARCHAR
    }

    entity Responses <<ENTITY>> {
        id:INT
        text:VARCHAR
    }

    Users "1,1" -- "0,1" Experts
    Users "1,1" - "0,*" Reports
    Users "1,1" -- "0,*" Surveys
    Reports "0,*" -- "1,1" Surveys
    Surveys "1,1" -- "0,*" Questions
    Experts "1,1" -- "0,*" Responses
    Responses "0,*" -- "1,1" Questions

@enduml

</center>

## Реляційна схема

![image](https://user-images.githubusercontent.com/24240873/141973425-906fc683-9255-4d95-be4f-03165bba5fc3.png)

