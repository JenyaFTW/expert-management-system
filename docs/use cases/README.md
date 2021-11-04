## 1. Вступ  
Цей документ містить в собі опис основних сценаріїв роботи системи.

## 2. Діаграма прецедентів

### Відношення узагальнення
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

### Структурування моделі варіантів використання Аналітика
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

## 3. Сценарії
    
### 3.1 Авторизація користувача
    
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
    
@startuml

    left header
        <font color=000 size=16><b>ID:</b> UC_1
        <font color=000 size=16><b>Назва:</b> Авторизуватися у системі
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b> Зареєстрований користувач
        <font color=000 size=16><b>Результат:</b> Доступ до системи
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16>EX-01: Не вірний логін/пароль
        
        <font color=000 size=16><b>Основний сценарій:</b>
    end header

    |Користувач|
        start
        : Натискає на кнопку "Login";
    |Система|
        : Пропонує форму "Login";
    |Користувач|
        : Заповнює поля: "Username", "Password";
        : Відсилає заповнену форму;
    |Система|
        : Перевіряє введені дані;
        note right #ffaaaa
        <b> Можливо
        <b> EX-01
        end note
        : Надає доступ до сайту;
    |Користувач|
        stop;
@enduml
    
</center>
            
### 3.2 Реєстрація користувача
    
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>
 
@startuml

    left header
        <font color=000 size=16><b>ID:</b> UC_2
        <font color=000 size=16><b>Назва:</b> Реєструватися у системі
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b> Відсутні
        <font color=000 size=16><b>Результат:</b> Доступ до системи
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16>EX-02: Вже зареєстрований користувач за введеними даними
        
        <font color=000 size=16><b>Основний сценарій:</b>
    end header

    |Користувач|
        start
        : Натискає на кнопку "Sign up";
    |Система|
        : Пропонує форму "Sign up";
    |Користувач|
        : Заповнює поля:\n"Email", "Username", "Password";
        : Відсилає заповнену форму;
    |Система|
        : Перевіряє введені дані;
        note right #ffaaaa
        <b> Можливо
        <b> EX-02
        end note
        : Реєструє користувача;
        : Здійснює перехід\n на сторінку авторизації ;
    |Користувач|
        stop;
@enduml
    
</center>
            
### 3.3 Проходження опитування

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>            

@startuml
    left header
        <font color=000 size=16><b>ID:</b> UC-3
        <font color=000 size=16><b>Назва:</b> Проходження опитування
        <font color=000 size=16><b>Учасники:</b> Експерт, система
        <font color=000 size=16><b>Передумови:</b> Отримання запрошення на участь в опитуванні
        <font color=000 size=16><b>Результат:</b> Відповіді на анкету
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16>EX-3 Експерт перервав процес заповнювання анкети
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header

    |Користувач|
        start
        : Експерт натискає кнопку 
        «Begin the survey»;

    |Система|
        : Система пропонує 
        форму «Poll for experts»;
        
    |Користувач|
 
        : Експерт заповнює 
        поля з відповідями;
            note right #ffaaaa
        <b> Можливо
        <b> EX-3
        end note
        
        :Експерт натискає 
        кнопку «Send»;
    
    |Система|
        : Система зберігає відповіді;
    
    |Система|
        stop;

@enduml
            
</center>
