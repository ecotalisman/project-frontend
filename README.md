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
