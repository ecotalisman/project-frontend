# Project Frontend
# Module 3 Project #3 JavaRush University

**Module 3. Java Professional**  
**Level 7, Lecture 9**

#### Task Description

The aim is to develop a UI for CRUD backend using HTML, CSS, JS, jQuery. We will be creating an admin panel to manage accounts for an online game.

#### Getting Started

1. Fork the repository from [https://github.com/pavlo-plynko/project-frontend.git](https://github.com/pavlo-plynko/project-frontend.git).
2. Clone your forked version of the project to your local machine.
3. Download Tomcat version 9 from [https://tomcat.apache.org/download-90.cgi](https://tomcat.apache.org/download-90.cgi). 
   - **Important**: Ensure that you download Tomcat version 9, not version 10.

#### Setup and Configuration

4. Set up the program to run through IDEA:

- Press `Alt + Shift + F9` -> `Edit Configurations…` -> `Alt + insert` -> Type `tom` in the search box -> Select `Local`.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/a5fd90a3-41e8-4206-94ae-ded6359a0f0d">
</p>

Next, you need to configure the path:

- Click `CONFIGURE` and navigate to the directory where Tomcat is downloaded and extracted.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/b192c949-fefe-47d8-a9ff-78a91d659084" alt="Description" style="width: 85%">
</p>

In the `Deployment` tab:

- Press `Alt + insert` -> `Artifact...` -> Select `rpg:war exploded` -> Click `OK`.
- In the `Application context` field: leave only `/` (slash).

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/96eed4da-f8b2-44a9-b177-c3ab55d173d2">
</p>

Click `APPLY` and close the configuration window.

### Running the Application

5. Run the program by hitting `Alt+Shift+F9`, then select your configuration (named 'App' in this case) and click Run.

### Working with Files

6. A new browser tab will open upon successful deployment of the program.
You'll primarily work with two files:

- `<project_dir>/src/main/webapp/html/my.html`: Contains markup and scripts.
- `<project_dir>/src/main/webapp/css/my.css`: Contains styles.

7. In `my.html`, add a table with the following column names and assign it an `id`:

- `#`
- Name
- Title
- Race
- Profession
- Level
- Birthday
- Banned

8. Include a `<script>` tag to write JavaScript functions.
   
9. The first function should make a GET request to "/rest/players" to fetch the list of players and populate the table. The result should be added to the table from point 7 (this is where the table's id comes in handy).
If everything is done correctly, after restarting the server, you will see a table with four rows on your page. The first row will have column names, and the rest will display the data received from the server.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/a05e86c9-9451-4694-84c9-8fd7ffc9ca94">
</p>

### Styling

10. It is now desirable to add cell borders to the table, as the information is unreadable. Feel free to style the application as you see fit. There are no specific styling requirements.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/6c3b9241-41b1-4c5e-9498-2f16eaa5fe7b">
</p>

### Pagination

11. Implement pagination by:

- Adding a section with pagination buttons below the table.
- Creating a function to send a GET request to "/rest/players/count" to get the total number of accounts.
- Including a dropdown to select the number of accounts displayed per page, ranging from 3 to 20.
- Adjust the account list display to calculate the number of pages needed based on the selected number of accounts per page.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/2cce0db3-ae89-48e8-b196-8a8e8ecd685b">
</p>

#### Pagination Adjustment

12. Enhance the account list display function by adding a parameter to represent the page number to be displayed. Modify the URL to include query parameters "pageNumber" and "pageSize".
    Now, when changing the number of accounts per page in the dropdown menu, the requested number of accounts should be displayed:

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/f0034b55-1a64-48f2-bed9-3c34ccdb3f7f">
</p>

13. Let's color the number of the current page to enhance user experience and clarity.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/81800dd4-6254-4c74-b7d4-28973ba00625">
</p>

14. Add two more columns to the table: Edit and Delete. For each row, add icons corresponding to the edit and delete actions for each record. You can use images from `<project_dir>/src/main/webapp/img/` or your own.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/2ff407c3-55b8-4788-abd1-76d1bfda28a1">
</p>

15. Write a function for deleting an account. This requires sending a DELETE request to "/rest/players/{id}". Invoke this function upon clicking the trash can icon. Remember to refresh the account list on the current page after each deletion.
- **Before Deleting Account with ID=23**:

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/4f4bbb1e-19ba-4542-9d19-43fadc167ee9">
</p>

- **After Deleting Account with ID=23**:

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/fce59ba3-63ad-4e1d-92f9-e68a138d20f5">
</p>

16. Now write a function for editing an account. On clicking this, hide the "Delete" button and change the "Edit" button's icon to "Save".

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/b5408480-d08c-4c2d-b47c-7057aef73c87">
</p>

17. Add functionality for editing an account. On clicking the “Edit” button, in addition to changing the icon, enable editing fields:
    - Name
    - Title
    - Race
    - Profession
    - Banned
    Ensure that the values in the fields for editing are the same as in the account.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/7ef5792e-827a-4244-a7c8-28c15ca27ae4">
</p>

18. Implement the submission of changes upon clicking the “Save” button. Send a POST request to the URL “/rest/players/{id}” with all editable fields in JSON format using JSON.stringify({…}). After making changes, remember to refresh the data on the current page.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/daa5459d-7b49-47ce-a92a-0eef3b009dc0">
</p>

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/3e24fb8b-7428-4464-a7ff-e5fc3f5c51f2">
</p>

19. With CRUD, everything except “C” (Create) should now be implemented. After the pagination buttons, add a horizontal line and text indicating that a new account can be created here. Also, add text blocks and fields for entering account parameters:
    - Name – text from 1 to 12 characters.
    - Title – text from 1 to 30 characters.
    - Race – dropdown list, see API for valid values.
    - Profession – dropdown list, see API for valid values.
    - Level – number from 0 to 100.
    - Birthday - date (`<input type="date"...`).
    - Banned – boolean value.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/5adbc7ac-8655-4d4e-878f-bfd5032e6e45">
</p>

20. Now add a button that, when clicked, sends all entered data to the server. Use a POST request to the URL /rest/players. After receiving a response from the server, clear the data entry fields and make a request for the list of accounts on the current page again.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/e3a437ee-f371-4e70-9da8-16a3e68fecc8">
</p>

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/79af9eae-8cec-4945-b38c-74757f8f62f0">
</p>

21. Finally, add "beauty" through styling – this is entirely up to you. Here's what I managed:

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/5e76b00f-15d6-455b-9029-4775d557f5ca">
</p>

## Useful: Server API

### Get Players List
- **URL**: `/rest/players`
- **Method**: Optional: `Integer pageNumber`, `Integer pageSize`
- **Data Params**: None
- **Success Response**:
  - Code: 200 OK
  - Content: 
    ```json
    [
      {
        "id": "Long",
        "name": "String",
        "title": "String",
        "race": "Race",
        "profession": "Profession",
        "birthday": "Long",
        "banned": "Boolean",
        "level": "Integer"
      },
      "..."
    ]
    ```
- **Notes**:
  - `pageNumber` – parameter that specifies the page number when using pagination. The numbering starts from zero.
  - `pageSize` – parameter that specifies the number of results per page in pagination.

### Get Players Count
- **URL**: `/rest/players/count`
- **Method**: GET
- **URL Params**: None
- **Data Params**: None
- **Success Response**:
  - Code: 200 OK
  - Content: Integer
- **Notes**:
  - This endpoint retrieves the total count of players.

### Delete Player
- **URL**: `/rest/players/{id}`
- **Method**: DELETE
- **URL Params**: `id`
- **Data Params**: None
- **Success Response**:
  - Code: 200 OK
- **Notes**:
  - If the player is not found, respond with a 404 error.
  - If the `id` value is not valid, respond with a 400 error.

### Update Player
- **URL**: `/rest/players/{id}`
- **Method**: POST
- **URL Params**: `id`
- **Data Params**:
  ```json
  {
    "name": "String",              "--optional"
    "title": "String",             "--optional"
    "race": "Race",                "--optional"
    "profession": "Profession",    "--optional"
    "banned": "Boolean"            "--optional"
  }
    ```
## Success Response
- **Code:** 200 OK
- **Content:**
```json
{
  "id": "Long",
  "name": "String",
  "title": "String",
  "race": "Race",
  "profession": "Profession",
  "birthday": "Long",
  "banned": "Boolean",
  "level": "Integer"
}
```
## Notes

- Only fields that are not null are updated.
- If the player is not found in the database, respond with a 404 error.
- If the id value is not valid, respond with a 400 error.

## Create Player

- **URL:** `/rest/players`
- **Method:** POST
- **URL Params:** None

### Data Params

```json
{
  "name": "String",
  "title": "String",
  "race": "Race",
  "profession": "Profession",
  "birthday": "Long",
  "banned": "Boolean",  "--optional, default=false"
  "level": "Integer"
}
```
**Success Response**
- **Code:** 200 OK
- **Content:**
```json
{
  "id": "Long",
  "name": "String",
  "title": "String",
  "race": "Race",
  "profession": "Profession",
  "birthday": "Long",
  "banned": "Boolean",
  "level": "Integer"
}
```
**Notes**

We cannot create a player if:

- Not all parameters from Data Params are specified (except for banned).
- The length of the name or title parameter exceeds the size of the corresponding field (12 and 30 characters, respectively).
- The name parameter value is an empty string.
- The level is outside the specified range (from 0 to 100).
- birthday:[Long] < 0.
- The registration date is outside the specified limits.

In case of any of the above conditions, there will be a response with an error code of 400.

---
### 🇺🇦 Ukrainian version:
---
# Проєкт на тему Frontend
# Модуль 3 Проєкт #3 JavaRush University

**Модуль 3. Java Professional**  
**Рівень 7, Лекція 9**

#### Опис завдання

Потрібно зробити UI для CRUD бекенду за допомогою HTML, CSS, JS, jQuery. Робитимемо адмін-панель для керування акаунтами онлайн-гри.

#### Початок роботи

1. Зробити fork із репозиторію: https://github.com/pavlo-plynko/project-frontend.git
Завантажити свою версію проєкту на комп'ютер.
Завантажити собі Tomcat: https://tomcat.apache.org/download-90.cgi.
   - **Важливо**: Tomcat потрібен саме версії 9, а не 10.

#### Встановлення і налаштування

4. Налаштувати запуск програми через IDEA:

- Press `Alt + Shift + F9` -> `Edit Configurations…` -> `Alt + insert` -> Type `tom` у рядок пошуку -> Select `Local`.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/a5fd90a3-41e8-4206-94ae-ded6359a0f0d">
</p>

Наступним кроком вам потрібно налаштувати шлях до серверу:

- Після цього потрібно натиснути `CONFIGURE` і вказати, куди завантажено і розпаковано архів з Tomcat.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/b192c949-fefe-47d8-a9ff-78a91d659084" alt="Description" style="width: 85%">
</p>

У вкладці `Deployment`:

- Press `Alt + insert` -> `Artifact...` -> Select `rpg:war exploded` -> Click `OK`.
- У полі `Application context`: залишити тільки `/` (slash).

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/96eed4da-f8b2-44a9-b177-c3ab55d173d2">
</p>

Натиснути `APPLY` і закрити вікно налаштувань.

### Запуск програми

5. Запустити програму. Для цього: `Alt+Shift+F9` -> вибрати ім'я конфігурації (я назвав 'App' у себе) і натисути -> Run.

### Робота з файлами

6. Після деплою програми відкриється нова вкладка в браузері, який обрано при конфігурації.
Чудово, сервер налаштований, далі потрібно працювати з двома файлами:

- `<project_dir>/src/main/webapp/html/my.html`: Contains markup and scripts.
- `<project_dir>/src/main/webapp/css/my.css`: Contains styles.

7. У розмітку `my.html`, додати таблицю з наступними назвами колонок і також додати назву колонки з `id`:

- `#`
- Name
- Title
- Race
- Profession
- Level
- Birthday
- Banned

8. Додати парний тег `<script>` для написання JavaScript функцій.
   
9. Перша функція повинна надсилати GET запит на URL "/rest/players" – отримати список. Результат потрібно додати до таблиці з п.7 (ось і став у пригоді id таблиці). Якщо все зроблено правильно, після перезапуску сервера в тебе на сторінці відображатиметься таблиця на 4 рядки. У першому рядку – імена колонок, у решті – дані, які прийшли з сервера.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/a05e86c9-9451-4694-84c9-8fd7ffc9ca94">
</p>

### Стилі

10. Тепер бажано додати таблиці межі ячейок, бо інформація нечитабельна.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/6c3b9241-41b1-4c5e-9498-2f16eaa5fe7b">
</p>

### Пейджинг сторінок

11. Для пейджингу потрібно:

- Під таблицею додати секцію, наприклад, < div >, у якій будуть кнопки пейджингу.
- Додати функцію, що надішле GET запит на сервер, який повертає загальну кількість облікових записів на сервері. URL: "/rest/players/count".
- Додати випадний (розкривний) список на 3-4 числових значення – скільки показувати акаунтів за раз. Числа мають бути в діапазоні від 3 до 20 включно.
- У способі відображення списку облікових записів (п.9) додамо розрахунок кількості сторінок, які потрібні при вказаній кількості облікових записів на сторінку, щоб можна було переглянути всі облікові записи.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/2cce0db3-ae89-48e8-b196-8a8e8ecd685b">
</p>

#### Вдосконалення пейджингу

12. До функції показу списку облікових записів додай параметр, який буде відповідати за номер сторінки, яку показуватиме. Відкоригуй URL, щоб він параметрами запиту передавав "pageNumber" та "pageSize". Тепер при зміні кількості на сторінку у випадному списку повинна показуватися запитана кількість акаунтів:

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/f0034b55-1a64-48f2-bed9-3c34ccdb3f7f">
</p>

13. Тепер давай розфарбуємо номер поточної сторінки, бо незручно.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/81800dd4-6254-4c74-b7d4-28973ba00625">
</p>

14. Додамо до таблиці ще 2 колонки: Edit та Delete. Для кожного рядка давай додамо іконки, які відповідатимуть за редагування та видалення кожного запису. Можеш використовувати або картинки, які є в '<project_dir>/src/main/webapp/img/', або свої.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/2ff407c3-55b8-4788-abd1-76d1bfda28a1">
</p>

15. Напиши функцію, яка відповідатиме за видалення облікового запису. Для цього потрібно надсилати DELETE запит на сервер на URL "/rest/players/{id}". При натисканні на картинку кошика викликай цю функцію. Після виклику – не забудь оновлювати список облікових записів на поточній сторінці.
- **До видалення облікового запису з id=23**:

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/4f4bbb1e-19ba-4542-9d19-43fadc167ee9">
</p>

- **Після видалення облікового запису з id=23. Зверни увагу: жодних кнопок, крім кошика, не натискалося**:

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/fce59ba3-63ad-4e1d-92f9-e68a138d20f5">
</p>

16. Тепер напиши функцію, яка відповідає за редагування облікового запису. При натисканні на неї давай приховаємо кнопку "Delete", а картинку кнопки "Edit" поміняємо на "Save".

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/b5408480-d08c-4c2d-b47c-7057aef73c87">
</p>

17. Тепер додамо функціонал для редагування облікового запису. При натисканні кнопки “Edit”, окрім зміни картинки, потрібно додавати можливість редагування полів:
    - Name
    - Title
    - Race
    - Profession
    - Banned
    Зверни увагу, що значення в полях для редагування мають бути такі ж, що і в обліковому записі.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/7ef5792e-827a-4244-a7c8-28c15ca27ae4">
</p>

18. Тепер зробимо надсилання змін при натисканні на кнопку “Save”. Для цього потрібно надіслати POST запит на URL “/rest/players/{id}” і як тіло запиту передати значення всіх п'яти полів, які можна змінювати у вигляді JSON. Використовуй JSON.stringify({…}); Після зміни, не забудь перезавантажити дані на поточній сторінці.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/daa5459d-7b49-47ce-a92a-0eef3b009dc0">
</p>

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/3e24fb8b-7428-4464-a7ff-e5fc3f5c51f2">
</p>

19. Отже, із CRUD на даний момент має бути зроблено все, окрім “C” (Create). Після кнопок пейджингу, додай горизонтальну лінію та текст про те, що тут можна створити новий обліковий запис. Також додай блоки тексту та поля для введення параметрів облікового запису:
    - Name – текст, від 1 до 12 символів.
    - Title – текст від 1 до 30 символів.
    - Race – випадний список, допустимі значення дивися в API.
    - Profession – випадний список, допустимі значення дивися в API.
    - Level – число від 0 до 100.
    - Birthday - дата (`<input type="date"...`).
    - Banned – булеве значення.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/5adbc7ac-8655-4d4e-878f-bfd5032e6e45">
</p>

20. Тепер додай кнопку, при натисканні на яку всі введені дані будуть надсилатися на сервер. Використовуй POST запит на URL /rest/players. Після відповіді сервера не забудь очистити поля для введення даних і знову зробити запит на список облікових записів на поточній сторінці.

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/e3a437ee-f371-4e70-9da8-16a3e68fecc8">
</p>

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/79af9eae-8cec-4945-b38c-74757f8f62f0">
</p>

21. Тепер можна додати "краси" через стилі – тут все на твій розсуд. У мене вийшло так:

<p align="center">
  <img src="https://github.com/ecotalisman/project-frontend/assets/67708040/5e76b00f-15d6-455b-9029-4775d557f5ca">
</p>

## Корисне: API сервера

### Get Players List
- **URL**: `/rest/players`
- **Method**: Optional: `Integer pageNumber`, `Integer pageSize`
- **Data Params**: None
- **Success Response**:
  - Code: 200 OK
  - Content: 
    ```json
    [
      {
        "id": "Long",
        "name": "String",
        "title": "String",
        "race": "Race",
        "profession": "Profession",
        "birthday": "Long",
        "banned": "Boolean",
        "level": "Integer"
      },
      "..."
    ]
    ```
- **Notes**:
  - `pageNumber` – параметр, який відповідає за номер сторінки, що відображається при використанні пейджингу. Нумерація починається із нуля.
  - `pageSize` – параметр, який відповідає за кількість результатів на одній сторінці при пейджингу.

### Get Players Count
- **URL**: `/rest/players/count`
- **Method**: GET
- **URL Params**: None
- **Data Params**: None
- **Success Response**:
  - Code: 200 OK
  - Content: Integer
- **Notes**:
  - This endpoint retrieves the total count of players.

### Delete Player
- **URL**: `/rest/players/{id}`
- **Method**: DELETE
- **URL Params**: `id`
- **Data Params**: None
- **Success Response**:
  - Code: 200 OK
- **Notes**:
  - Якщо гравця не знайдено – відповідь із помилкою з кодом 404.
  - Якщо значення id не валідне – відповідь із помилкою з кодом 400.

### Update Player
- **URL**: `/rest/players/{id}`
- **Method**: POST
- **URL Params**: `id`
- **Data Params**:
  ```json
  {
    "name": "String",              "--optional"
    "title": "String",             "--optional"
    "race": "Race",                "--optional"
    "profession": "Profession",    "--optional"
    "banned": "Boolean"            "--optional"
  }
    ```
## Success Response
- **Code:** 200 OK
- **Content:**
```json
{
  "id": "Long",
  "name": "String",
  "title": "String",
  "race": "Race",
  "profession": "Profession",
  "birthday": "Long",
  "banned": "Boolean",
  "level": "Integer"
}
```
## Notes

- Оновлюються лише ті поля, які не null.
- Якщо гравця не знайдено в БД - відповідь із помилкою з 404.
- Якщо значення id не валідне - відповідь із помилкою з 400.

## Create Player

- **URL:** `/rest/players`
- **Method:** POST
- **URL Params:** None

### Data Params

```json
{
  "name": "String",
  "title": "String",
  "race": "Race",
  "profession": "Profession",
  "birthday": "Long",
  "banned": "Boolean",  "--optional, default=false"
  "level": "Integer"
}
```
**Success Response**
- **Code:** 200 OK
- **Content:**
```json
{
  "id": "Long",
  "name": "String",
  "title": "String",
  "race": "Race",
  "profession": "Profession",
  "birthday": "Long",
  "banned": "Boolean",
  "level": "Integer"
}
```
**Notes**

Ми не можемо створити гравця, якщо:

- вказано не всі параметри з Data Params (окрім banned).
- довжина значення параметру “name” або “title” перевищує розмір відповідного поля (12 та 30 символів).
- значення параметру “name” – порожній рядок.
- рівень знаходиться поза вказаних меж (від 0 до 100).
- birthday:[Long] < 0.
- дата реєстрації знаходиться поза вказаних меж.

В разі всього, що перераховано вище, буде відповідь із помилкою з кодом 400.
