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

 entity User {}
 entity User.id {}
 entity User.username {}
 entity User.email {}
 entity User.password {}
 entity User.role {}
 
 User *-- User.id
 User *-- User.username
 User *-- User.email
 User *-- User.password
 User *-- User.role
  
@enduml
    
</center>

## Реляційна схема

![image](https://user-images.githubusercontent.com/24240873/141973425-906fc683-9255-4d95-be4f-03165bba5fc3.png)
