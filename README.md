
# ParentBridge

ParentBridge is an application designed to connect elderly people living in the same neighborhood. The application includes user profiles with details like neighborhood, phone number, email ID, age, name, hometown, languages, hobbies, etc. Users can filter profiles based on preferences and communicate through a chat option available on each profile.

## Features

- **User Registration**: Users can register with their details.
- **User Login**: Users can log in and receive a JWT token for authentication.
- **Profile Access**: Users can access their profile information.
- **Update Profile**: Users can update their profile information.
- **Get All Users**: Users can retrieve all user profiles.
- **Delete User**: Users can delete their profiles.
- **Protected Routes**: Certain routes are protected and require a valid JWT token.
- **Validation and Error Handling**: Input validation and comprehensive error handling for all endpoints.

## Tech Stack

- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB Atlas
- **Authentication**: JSON Web Tokens (JWT)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB Atlas account with a cluster and a user created.

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd ParentBridge
   ```

2. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the `backend` directory with the following content:
     ```env
     PORT=5003
     MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the server:**
   ```bash
   node server.js
   ```

### API Endpoints

#### User Registration

- **Endpoint**: `POST /api/users/register`
- **Description**: Register a new user.
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "password123",
    "age": 65,
    "neighborhood": "Greenwood",
    "phoneNumber": "123-456-7890",
    "hometown": "Springfield",
    "languages": ["English"],
    "hobbies": ["Reading", "Gardening"]
  }
  ```

#### User Login

- **Endpoint**: `POST /api/users/login`
- **Description**: Log in an existing user.
- **Request Body**:
  ```json
  {
    "email": "johndoe@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "your_jwt_token"
  }
  ```

#### Profile Access

- **Endpoint**: `GET /api/users/profile`
- **Description**: Access the profile of the logged-in user.
- **Headers**:
  - `x-auth-token`: `your_jwt_token`

#### Update Profile

- **Endpoint**: `PUT /api/users/profile`
- **Description**: Update the profile of the logged-in user.
- **Headers**:
  - `x-auth-token`: `your_jwt_token`
- **Request Body**:
  ```json
  {
    "name": "John Smith",
    "age": 66,
    "neighborhood": "New Greenwood",
    "phoneNumber": "987-654-3210",
    "hometown": "New Springfield",
    "languages": ["English", "Spanish"],
    "hobbies": ["Reading", "Traveling"]
  }
  ```

#### Get All Users

- **Endpoint**: `GET /api/users/all`
- **Description**: Retrieve all user profiles.
- **Headers**:
  - `x-auth-token`: `your_jwt_token`

#### Delete User

- **Endpoint**: `DELETE /api/users/profile`
- **Description**: Delete the profile of the logged-in user.
- **Headers**:
  - `x-auth-token`: `your_jwt_token`

### Running Tests

- Use Postman to test the API endpoints.

### Contribution

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

### License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
