# Contact API Spec

## Create Contact
Enpoint: POST /api/contacts

Request Header:
- X-API-TOKEN: token

Request Body:
```JSON
{
  "first_name": "Sandy Dwi",
  "last_name": "Handoko",
  "email": "sandy@email.com",
  "phone": "0812341234123"
}
```

Response Body (Success):
```JSON
{
  "data": {
    "id": 1,
    "first_name": "Sandy Dwi",
    "last_name": "Handoko",
    "email": "sandy@email.com",
    "phone": "0812341234123"
  }
}
```

Response Body (Failed):
```JSON
{
  "errors": "first_name must not blank..."
}
```

## Get Contact
Enpoint: GET /api/contacts/:id

Request Header:
- X-API-TOKEN: token

Response Body (Success):
```JSON
{
  "data": {
    "id": 1,
    "first_name": "Sandy Dwi",
    "last_name": "Handoko",
    "email": "sandy@email.com",
    "phone": "0812341234123"
  }
}
```

Response Body (Failed):
```JSON
{
  "errors": "Contact is not found"
}
```

## Update Contact
Enpoint: PUT /api/contacts/:id

Request Header:
- X-API-TOKEN: token

Request Body:
```JSON
{
  "first_name": "Sandy Dwi",
  "last_name": "Handoko",
  "email": "sandy@email.com",
  "phone": "0812341234123"
}
```

Response Body (Success):
```JSON
{
  "data": {
    "id": 1,
    "first_name": "Sandy Dwi",
    "last_name": "Handoko",
    "email": "sandy@email.com",
    "phone": "0812341234123"
  }
}
```

Response Body (Failed):
```JSON
{
  "errors": "first_name must not blank..."
}
```

## Remove Contact
Enpoint: DELETE /api/contacts/:id

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
  "errors": "Contact is not found"
}
```

## Search Contact
Enpoint: GET /api/contacts

Query Parameter:
- name: string, contact first name or contact last name, optional
- phone: string, contact phone, optional
- email: string, contact email, optional
- page: number, default 1
- size: number, default 10

Request Header:
- X-API-TOKEN: token

Response Body (Success):
```JSON
{
  "data": [
    {
      "id": 1,
      "first_name": "Sandy Dwi",
      "last_name": "Handoko",
      "email": "sandy@email.com",
      "phone": "0812341234123"
    },
    {
      "id": 2,
      "first_name": "Sandy Dwi",
      "last_name": "Handoko",
      "email": "sandy@email.com",
      "phone": "0812341234123"
    },
  ],
  "paging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```

Response Body (Failed):
```JSON
{
  "errors": "Unauthorized"
}
```