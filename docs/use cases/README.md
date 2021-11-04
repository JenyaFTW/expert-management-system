## 1. Вступ  
Цей документ містить в собі опис основних сценаріїв роботи системи.

## 2. Діаграма прецедентів

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml
    actor "Користувач" as User
    actor "Замовник" as Customer
    actor "Аналітик" as Analyst
    actor "Експерт" as Expert
    
    usecase "<b>UC_1</b>\nЗареєструватися у системі" as UC_1
    usecase "<b>UC_2</b>\nАвторизуватися у системі" as UC_2
    
    usecase "<b>UC_3</b>\nПроходити опитування" as UC_3
    usecase "<b>UC_4</b>\nУправляти списком опитувань" as UC_4
    
    usecase "<b>UC_5</b>\nЗамовляти опитування" as UC_5
    usecase "<b>UC_6</b>\nПереглядати звітності опитування." as UC_6
    
    usecase "<b>UC_7</b>\nКерувати процесом опитування" as UC_7

    User -u-> UC_1
    User -u-> UC_2
    
    Expert -d-> UC_3
    Expert -d-> UC_4
    Customer -d-> UC_5
    Customer -d-> UC_6
    Analyst -d-> UC_7

    Customer -u-|> User
    Analyst -u-|> User
    Expert -u-|> User
@enduml
</center>

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
@startuml
    actor "Користувач" as User
    actor "Аналітик" as Analyst
    
    usecase "Керування процесом опитування" as UC_1
    
    usecase "Створення опитування" as UC_2 #aaeeaa
    usecase "Управління контентом\n опитування" as UC_3 #aaeeaa
    usecase "Надсилання запрошення\n для участі в опитуванні" as UC_4 #aaeeaa
    usecase "Аналіз результатів опитування" as UC_5 #aaeeaa
    usecase "Управління експертним\n середовищем" as UC_6 #aaeeaa
    usecase "Формування звітності\n для замовника" as UC_7 #aaeeaa
    
    User <|-d- Analyst
    Analyst -d-> UC_1
    
    UC_2 .d.> UC_1 : extends
    UC_3 .u.> UC_1 : extends
    UC_4 .d.> UC_1 : extends
    UC_5 .u.> UC_1 : extends
    UC_6 .d.> UC_1 : extends
    UC_7 .u.> UC_1 : extends
@enduml
</center>
