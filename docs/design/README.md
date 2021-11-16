# Проєктування бази даних

В рамках проекту розробляється:

- модель бізнес-об'єктів
- ER-модель
- реляційна схема

@startuml

    entity Surveys {}
    entity Surveys.id  {}
    entity Surveys.name  {}
    entity Surveys.description  {}
    entity Surveys.owner  {}
    entity Surveys.open  {}
    entity Surveys.close {}

    Surveys *-- Surveys.id
    Surveys *-- Surveys.name
    Surveys *-- Surveys.description
    Surveys *-- Surveys.owner
    Surveys *-- Surveys.open
    Surveys *-- Surveys.close

@enduml
