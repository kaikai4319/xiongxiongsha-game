# API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication Endpoints

### Register
- **POST** `/auth/register`
- **Body:**
  ```json
  {
    "username": "string",
    "email": "string",
    "password": "string"
  }
  ```

### Login
- **POST** `/auth/login`
- **Body:**
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token",
    "user": {
      "id": "uuid",
      "username": "string",
      "email": "string"
    }
  }
  ```

### Verify Token
- **GET** `/auth/verify`
- **Headers:** `Authorization: Bearer <token>`

## User Endpoints

### Get Profile
- **GET** `/users/profile`
- **Headers:** `Authorization: Bearer <token>`

### Update Profile
- **PUT** `/users/profile`
- **Headers:** `Authorization: Bearer <token>`
- **Body:**
  ```json
  {
    "username": "string",
    "email": "string"
  }
  ```

## Game Endpoints

### List Games
- **GET** `/games`
- **Headers:** `Authorization: Bearer <token>`

### Create Game
- **POST** `/games`
- **Headers:** `Authorization: Bearer <token>`

### Get Game
- **GET** `/games/:id`
- **Headers:** `Authorization: Bearer <token>`

## Match Endpoints

### List Matches
- **GET** `/matches`
- **Headers:** `Authorization: Bearer <token>`

### Get Match
- **GET** `/matches/:id`
- **Headers:** `Authorization: Bearer <token>`

### Record Match Result
- **POST** `/matches/:id/result`
- **Headers:** `Authorization: Bearer <token>`
