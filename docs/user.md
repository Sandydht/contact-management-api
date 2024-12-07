# User API Spec

## Register User
Endpoint: POST /api/users

Request Body:
```JSON
{
  "username": "sandy",
  "password": "password",
  "name": "Sandy Dwi Handoko Trapsilo"
}
```

Response Body (Success):
```JSON
{
  "data": {
    "username": "sandy",
    "name": "Sandy Dwi Handoko Trapsilo"
  }
}
```

Response Body (Failed):
```JSON
{
  "errors": "Username must not blank, ..."
}
```

## Login User
Endpoint: POST /api/users/login

Request Body:
```JSON
{
  "username": "sandy",
  "password": "password"
}
```

Response Body (Success):
```JSON
{
  "data": {
    "username": "sandy",
    "name": "Sandy Dwi Handoko Trapsilo",
    "token": "uuid"
  }
}
```

Response Body (Failed):
```JSON
{
  "errors": "Username or password wrong"
}
```

## Get User
Endpoint: GET /api/users/current

Request Header: 
- X-API-TOKEN: token

Response Body (Success):
```JSON
{
  "data": {
    "username": "sandy",
    "name": "Sandy Dwi Handoko Trapsilo"
  }
}
```

Response Body (Failed):
```JSON
{
  "errors": "Unauthorized"
}
```

## Update User
Endpoint: PATCH /api/users/current

Request Header: 
- X-API-TOKEN: token

Request Body:
```JSON
{
  "password": "password", // optional
  "name": "Sandy Dwi Handoko Trapsilo" // optional
}
```

Response Body (Success):
```JSON
{
  "data": {
    "username": "sandy",
    "name": "Sandy Dwi Handoko Trapsilo"
  }
}
```

Response Body (Failed):
```JSON
{
  "errors": "Unauthorized"
}
```

## Logout User
Endpoint: DELETE /api/users/current

Request Header: 
- X-API-TOKEN: token

Response Body (Success):
```JSON
{
  "data": "OK"
}
```

Response Body (Failed):
```JSON
{
  "errors": "Unauthorized"
}
```
