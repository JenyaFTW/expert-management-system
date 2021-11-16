# Проєктування бази даних

## Модель бізнес-об'єктів 

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
	
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
