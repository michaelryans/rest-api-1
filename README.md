# REST API
built with Express and Sequelize <br>
deployment link: https://quiet-forest-67560.herokuapp.com/

### Base Route

| Base Routes        | HTTP           | 
| ------------- |:-------------:|
| /todos | GET, POST, PATCH, DELETE  |
| /login | POST |
| /register | POST |
| /users | PATCH, DELETE | 

## User route
### User Register
```sh
POST /register
```
* Headers : none
* Body    : {email, password}
* Success : Status:201, dataTypes:{}
* Error : Status:500 , dataTypes:{}

Example Output
```
{
    "id": 19,
    "email": "michael@yahoo.com1",
    "password": "$2a$10$pk21.P5meJwscjSP62qlvOYg5hpCcwS8j6Aoo/5u8MuoWfpbwQ30.",
    "updatedAt": "2019-04-29T09:14:22.011Z",
    "createdAt": "2019-04-29T09:14:22.011Z"
}
```

### User Login
```sh
POST /login
```
* Headers : none
* Body    : {email, password}
* Success : Status:200, dataTypes:{}
* Error : Status:500 , dataTypes:{}

Example Output
```
{
    "token": ....
}
```

### Change Password
```sh
PATCH /users/:id
```
* Headers : none
* Body    : {email, password}
* Success : Status:200, dataTypes:{}
* Error : Status:500 , dataTypes:{}

Example Output
```
"successfully updated user [user_id]"
```

### Delete Username
```sh
DELETE /users/:id
```
* Headers : none
* Body    : {email, password}
* Success : Status:200, dataTypes:{}
* Error : Status:500 , dataTypes:{}

Example Output
```
"success deleting user id [user_id]"
```


## Todo routes
### Create todo
```sh
POST /todos
```
* Headers : {token}
* Body    : {title, description}
* Success : Status:201, dataTypes:{}
* Error : Status:500 , dataTypes:{}

Example Output
```
{
    "id": 5,
    "title": "belajar sequelize",
    "description": "express + sequelize",
    "user_id": 18,
    "updatedAt": "2019-04-29T09:30:07.531Z",
    "createdAt": "2019-04-29T09:30:07.531Z"
}
```

### Get all user's todo
```sh
GET /todos
```
* Headers : {token}
* Body    : none
* Success : Status:200, dataTypes:{}
* Error : Status:500 , dataTypes:{}

Example Output
```
[
    {
        "id": 4,
        "title": "belajar restful API",
        "description": "express + sequelize",
        "user_id": 18,
        "createdAt": "2019-04-29T08:52:23.055Z",
        "updatedAt": "2019-04-29T09:04:08.644Z"
    },
    {
        "id": 5,
        "title": "belajar sequelize",
        "description": "express + sequelize",
        "user_id": 18,
        "createdAt": "2019-04-29T09:30:07.531Z",
        "updatedAt": "2019-04-29T09:30:07.531Z"
    }
]
```

### Get specific todo (only owner)
```sh
GET /todos/:id
```
* Headers : {token}
* Body    : none
* Success : Status:201, dataTypes:{}
* Error : Status:500 , dataTypes:{}

Example Output
```
{
    "id": 5,
    "title": "belajar sequelize",
    "description": "express + sequelize",
    "user_id": 18,
    "createdAt": "2019-04-29T09:30:07.531Z",
    "updatedAt": "2019-04-29T09:30:07.531Z"
}
```

### Delete todo (only owner)
```sh
DELETE /todos/:id
```
* Headers : {token}
* Body    : none
* Success : Status:202, dataTypes:{}
* Error : Status:500 , dataTypes:{}

Example
```
"successfully deleted todo id [todo_id]"
```

### Patch todo (only owner)
```sh
PATCH /todos/:id
```
* Headers : {token}
* Body    : {...updatedField}
* Success : Status:201, dataTypes:{}
* Error : Status:500 , dataTypes:{}

Example
```
Input: 
{"title": "belajar sequelize kedua"}

Output:
"successfully patched todo id [todo_id]"

Before patch:
{
    "id": 5,
    "title": "belajar sequelize",
    "description": "express + sequelize",
    "user_id": 18,
    "createdAt": "2019-04-29T09:30:07.531Z",
    "updatedAt": "2019-04-29T09:30:07.531Z"
}

After patch: 
{
    "id": 5,
    "title": "belajar sequelize kedua"
    "description": "express + sequelize",
    "user_id": 18,
    "createdAt": "2019-04-29T09:30:07.531Z",
    "updatedAt": "2019-04-29T09:30:07.531Z"
}
```


### Update todo (only owner)
```sh
PUT /todos/:id
```
* Headers : none
* Body    : {...allField}
* Success : Status:201, dataTypes:{}
* Error : Status:500 , dataTypes:{}

Example
```
Input: 
{
    "id": 5,
    "title": "belajar sequelize kedua"    -----> updated
    "description": "express + sequelize",
    "user_id": 18,
    "createdAt": "2019-04-29T09:30:07.531Z",
    "updatedAt": "2019-04-29T09:30:07.531Z"
}

Output:
"successfully patched todo id [todo_id]"

Before update:
{
    "id": 5,
    "title": "belajar sequelize",
    "description": "express + sequelize",
    "user_id": 18,
    "createdAt": "2019-04-29T09:30:07.531Z",
    "updatedAt": "2019-04-29T09:30:07.531Z"
}

After update: 
{
    "id": 5,
    "title": "belajar sequelize kedua"
    "description": "express + sequelize",
    "user_id": 18,
    "createdAt": "2019-04-29T09:30:07.531Z",
    "updatedAt": "2019-04-29T09:30:07.531Z"
}
```
