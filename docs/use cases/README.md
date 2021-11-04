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
        <font color=000 size=16><b>ID:</b> UC-1
        <font color=000 size=16><b>Назва:</b> Авторизуватися у системі
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b> Зареєстрований користувач
        <font color=000 size=16><b>Результат:</b> Доступ до системи
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16>EX-1: Не вірний логін/пароль
        
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
        <b> EX-1
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
        <font color=000 size=16><b>ID:</b> UC-2
        <font color=000 size=16><b>Назва:</b> Реєструватися у системі
        <font color=000 size=16><b>Учасники:</b> Користувач, Система
        <font color=000 size=16><b>Передумови:</b> Відсутні
        <font color=000 size=16><b>Результат:</b> Доступ до системи
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16>EX-2: Вже зареєстрований користувач за введеними даними
        
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
        <b> EX-2
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
            
### 3.4 Управління списком опитування
    
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header
        <font color=000 size=16><b>ID:</b> UC-4
        <font color=000 size=16><b>Назва:</b> Управляти списком опитування
        <font color=000 size=16><b>Учасники:</b> Аналітик, система
        <font color=000 size=16><b>Передумови:</b> Існує список опитування
        <font color=000 size=16><b>Результат:</b> Редагування списку опитування
        <font color=000 size=16><b>Виключні ситуації:</b><font color=000 size=16>Немає
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header

    |Аналітик|
        start
        : Аналітик натискає 
            кнопку «Edit»;

    |Система|
        : Система пропонує список 
        можливостей для управління;
        
    |Аналітик|
 
        : Аналітик обирає 
        потрібну функцію;
        
        :Аналітик натискає 
        кнопку «Confirm»;
    
    |Система|
        : Система зберігає зміни;
    
    |Система|
        stop;

@enduml
    
</center>
            
### 3.5 Замовлення опитування
    
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header
        <font color=000 size=16><b>ID:</b> UC-5
        <font color=000 size=16><b>Назва:</b> Замовляти опитування
        <font color=000 size=16><b>Учасники:</b> Замовник, Система
        <font color=000 size=16><b>Передумови:</b> Замовник увійшов до системи опитування
        <font color=000 size=16><b>Результат:</b> Оброблено замовлення на створення
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16>EX-5: Замовник скасував запит на створення нового опитування
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header

    |Замовник|
        start
        : Натискає на кнопку замовлення опитування;
    |Система|
        : Отримує запит на створення;
        note right #ffaaaa
        <b> Можливо
        <b> EX-5
        end note
        
        : Аналізує запит;
        
        
        : Зберігає запит на створення опитування;
    |Замовник|
        stop;


@enduml    
    
</center>
            
### 3.6 Переглядання звітності опитування
    
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header
        <font color=000 size=16><b>ID:</b> UC-6
        <font color=000 size=16><b>Назва:</b> Переглядати звітності опитування
        <font color=000 size=16><b>Учасники:</b> Замовник, Система
        <font color=000 size=16><b>Передумови:</b> Існує звітність
        <font color=000 size=16><b>Результат:</b> Замовник отримує звітність
        <font color=000 size=16><b>Виключні ситуації:</b> Немає

        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header

    |Замовник|
        start
        : Натискає на кнопку отримання звітності до опитування;
    |Система|
        : Отримує запит на повернення звітності;
        
        : Повертає звітність замовнику;
    
    |Замовник|
        : Отримує звітність;
        stop;
            
@enduml    
    
</center>
            
### 3.7.1 Переглядання звітності опитування
    
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header
        <font color=000 size=16><b>ID:</b> SUC-1
        <font color=000 size=16><b>Назва:</b> Створення опитування
        <font color=000 size=16><b>Учасники:</b> Аналітик, система опитування
        <font color=000 size=16><b>Передумови:</b> Аналітик натискає кнопку для створення опитування
        <font color=000 size=16><b>Результат:</b> Опитування створенно
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> SEX-1 Аналітик скасувує створення опитування.
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header

    |Замовник|
        start
        : Натискає кнопку "Create survey";
        : Обирає із списку замовлень замовлення;
    |Система|
        :Надає форму на заповнення;
        note right #ffaaaa
        <b> Можливо
        <b> SEX-1
        end note
        
    |Замовник|
        : Сценарій: "управління контентом опитування";
        : Натискає кнопку "Save";
        
    |Система|
        : Оброблює запит;
        : Зберегає опитування;
        stop;

@enduml    
    
</center>
            
### 3.7.2 Переглядання звітності опитування
    
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header
        <font color=000 size=16><b>ID:</b> SUC-2
        <font color=000 size=16><b>Назва:</b> Управління контентом опитування
        <font color=000 size=16><b>Учасники:</b> Аналітик, система опитування
        <font color=000 size=16><b>Передумови:</b> Опитування
        <font color=000 size=16><b>Результат:</b> Відредаговане опитування 
        <font color=000 size=16><b>Виключні ситуації:</b>
        <font color=000 size=16> SEX-2 Аналітик скасувує редагування опитування
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header

    |Замовник|
        start
        : Натискає кнопку "Edit survey";
    |Система|
        :Надає форму на
        редагування опитування;
        note right #ffaaaa
        <b> Можливо
        <b> SEX-2
        end note
        
    |Замовник|
        : Заповнює форму редагування;
        : Натискає кнопку "Save";
        
    |Система|
        : Оброблює запит;
        : Зберегає зміни;
        stop;

@enduml    
    
</center>
            
### 3.7.3 Надсилання запрошень для участі в опитуванні
    
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header
        <font color=000 size=16><b>ID:</b> SUC-3
        <font color=000 size=16><b>Назва:</b> Надсилання запрошень для участі в опитуванні
        <font color=000 size=16><b>Учасники:</b> Аналітик, система опитування
        <font color=000 size=16><b>Передумови:</b> Наявність опитування
        <font color=000 size=16><b>Результат:</b> Отримали запрошення
        <font color=000 size=16><b>Виключні ситуації:</b> Відсутні
        
        <font color=000 size=16><b>Основний сценарій:</b>
       
        
    end header

    |Аналітик|
        start
        : Натискає кнопку «Create invitation»;
        
    |Система|
        : Система пропонує форму «New invitation»;
        
    |Аналітик|
        : Заповнює поля «Name», «Surname»;
        : Натискає кнопку «Create link»;
    
    |Система|
        : Генерує персональне посилання;

    |Аналітик|
        : Надсилає персональне посилання експерту;
        
        stop;


@enduml    
    
</center>

### 3.7.4 Аналіз результатів опитування
    
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header
        <font color=000 size=16><b>ID:</b> SUC-4
        <font color=000 size=16><b>Назва:</b> Аналіз результатів опитування
        <font color=000 size=16><b>Учасники:</b> Аналітик, система опитування
        <font color=000 size=16><b>Передумови:</b> Наявність опитування
        <font color=000 size=16><b>Результат:</b> Отримання аналіза результатів опитування
        <font color=000 size=16><b>Виключні ситуації:</b> Відсутні
        <font color=000 size=16> SEX-4 Звіт заблоковано на час оновлення
        
        <font color=000 size=16><b>Основний сценарій:</b>
       
        
    end header

    |Аналітик|
        start
        : Натискає кнопку «Receive survey results»;
        
    |Система|
        : Здіснює пошук результатів опитування;
        : Перевіряє стан звіту;
        note right #ffaaaa
        <b> Можливо
        <b> SEX-4
        end note
        : Відправляє «Аналіз результатів опитування»;
        
    |Аналітик|
        
        stop;


@enduml    
    
</center>

### 3.7.5 Управління експертним середовищем
    
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header
        
        <font color=000 size=16><b>ID:</b> SUC-5
        <font color=000 size=16><b>Назва:</b> Управління експертним середовищем
        <font color=000 size=16><b>Учасники:</b> Аналітик, Система
        <font color=000 size=16><b>Передумови:</b> Наявність запиту на додавання/видалення нового експерта
        <font color=000 size=16><b>Результат:</b> Новий експерт/Видалення експерта
        <font color=000 size=16><b>Виключні ситуації:</b> Відсутні
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header
    |Аналітик|
        start
        :          Натискає кнопку на 
          додавання/видалення експерта;
    |Система|
        : Отримує запит на додавання/видалення;
        
        : Аналізує запит;
        : Додає/видаляє експерта;
        :           Повертає повідомлення
         про додавання/видалення експерта;
    |Аналітик|
        :        Отримує повідомлення
         про додавання/видалення експерта;
        stop;


@enduml    
    
</center>

### 3.7.6 Переглядання звітності опитування
    
<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

    left header
        
        <font color=000 size=16><b>ID:</b> SUC-6
        <font color=000 size=16><b>Назва:</b> Формування звітності для замовника
        <font color=000 size=16><b>Учасники:</b> Аналітик, Система
        <font color=000 size=16><b>Передумови:</b> Наявність результатів опитування
        <font color=000 size=16><b>Результат:</b> Звіт опитування для замовника
        <font color=000 size=16><b>Виключні ситуації:</b> Відсутні
        
        <font color=000 size=16><b>Основний сценарій:</b>
        
    end header
    |Аналітик|
        start
        :Натискає кнопку на 
          створення звіту;
    |Система|
        : Отримує запит на формування звітності;
        : Аналізує запит;
        : Повертає сформований звіт
         про результати опитування;
    |Аналітик|
        : Отримує сформований звіт
         про результати опитування;
        stop;


@enduml    
    
</center>
