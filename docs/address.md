# Address API Spec

## Create Address
Enpoint: POST /api/contacts/:idContact/addresses

Request Header:
- X-API-TOKEN: token

Request Body:
```JSON
{
  "street": "Jalan apa",
  "city": "Kota apa",
  "province": "Provinsi apa",
  "country": "Negara apa",
  "postal_code": "231123"
}
```

Response Body (Success):
```JSON
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": "Kota apa",
    "province": "Provinsi apa",
    "country": "Negara apa",
    "postal_code": "231123"
  }
}
```

Response Body (Failed):
```JSON
{
  "errors": "postal_code is required"
}
```

## Get Address
Enpoint: GET /api/contacts/:idContact/addresses/:idAddress

Request Header:
- X-API-TOKEN: token

Response Body (Success):
```JSON
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": "Kota apa",
    "province": "Provinsi apa",
    "country": "Negara apa",
    "postal_code": "231123"
  }
}
```

Response Body (Failed):
```JSON
{
  "errors": "Address is not found"
}
```

## Update Address
Enpoint: PUT /api/contacts/:idContact/addresses/:idAddress

Request Header:
- X-API-TOKEN: token

Request Body:
```JSON
{
  "street": "Jalan apa",
  "city": "Kota apa",
  "province": "Provinsi apa",
  "country": "Negara apa",
  "postal_code": "231123"
}
```

Response Body (Success):
```JSON
{
  "data": {
    "id": 1,
    "street": "Jalan apa",
    "city": "Kota apa",
    "province": "Provinsi apa",
    "country": "Negara apa",
    "postal_code": "231123"
  }
}
```

Response Body (Failed):
```JSON
{
  "errors": "postal_code is required"
}
```

## Remove Address
Enpoint: DELETE /api/contacts/:idContact/addresses/:idAddress

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
  "errors": "Address is not found"
}
```

## List Address
Enpoint: GET /api/contacts/:idContact/addresses

Request Header:
- X-API-TOKEN: token

Response Body (Success):
```JSON
{
  "data": [
    {
      "id": 1,
      "street": "Jalan apa",
      "city": "Kota apa",
      "province": "Provinsi apa",
      "country": "Negara apa",
      "postal_code": "231123"
    },
    {
      "id": 2,
      "street": "Jalan apa",
      "city": "Kota apa",
      "province": "Provinsi apa",
      "country": "Negara apa",
      "postal_code": "231123"
    },
  ]
}
```

Response Body (Failed):
```JSON
{
  "errors": "Contact is not found"
}
```
