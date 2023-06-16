# Task

# Project Components

1 . Node.js: A JavaScript runtime environment used for executing server-side code.
2. Express.js: A web application framework for Node.js used for building APIs.
3. MongoDB: A NoSQL database used for storing user and blog data.

# Running the Project
# Install Node.js and MongoDB on your system.
# Clone the project repository: git clone <https://github.com/devPrakash7/Task.git>
# Navigate to the project directory: cd <project-directory>
# Install the project dependencies: npm install
# Start the MongoDB service: sudo service mongod start (or use the appropriate command for your operating system)
# Start the API server: npm start
# The API server should now be running on http://localhost:5001.

# API Endpoints and Functionality

1. Create User
 # Endpoint: POST /api/users
# Description: Creates a new user.
# Request Body: JSON object containing user data (name, profile picture, etc.).
# Response: JSON object containing the created user data.

# Example Request Body:
{
  "name": "John Doe",
  "profilepic": "https://example.com/profilepic.jpg"
}

# Example Response:
 {
  "id": 1,
  "name": "John Doe",
  "profilepic": "https://example.com/profilepic.jpg",
  "slug": "john-doe",
  "created": "2023-06-16T12:00:00Z",
  "modified": "2023-06-16T12:00:00Z"
}


2. User List

# Endpoint: GET /api/users
# Description: Retrieves a list of all users.
# Response: JSON array containing user objects.

 Example Response:
  [
  {
    "id": 1,
    "name": "John Doe",
    "profilepic": "https://example.com/profilepic.jpg",
    "slug": "john-doe",
    "created": "2023-06-16T12:00:00Z",
    "modified": "2023-06-16T12:00:00Z"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "profilepic": "https://example.com/profilepic.jpg",
    "slug": "jane-smith",
    "created": "2023-06-16T12:00:00Z",
    "modified": "2023-06-16T12:00:00Z"
  }
]


3. User Updated
# Endpoint: PUT /api/users/:id
# Description: Updates an existing user specified by :id parameter.
# Request Body: JSON object containing the updated user data.
# Response: JSON object containing the updated user data.

Example Request Body:
{
  "name": "John Doe Jr.",
}

# Example Response:
   {
  "id": 1,
  "name": "John Doe Jr.",
  "profilepic": "https://example.com/new-profilepic.jpg",
  "slug": "john-doe-jr",
  "created": "2023-06-16T12:00:00Z",
  "modified": "2023-06-16T13:00:00Z"
}


Sure! Here's a sample documentation with responses for the project:

Project Documentation: RESTful API using Node.js, Express.js, and MongoDB
This project aims to develop a RESTful API using Node.js, Express.js, and MongoDB. The API allows users to perform various operations related to users and blogs. Below you will find information about the project components, how to run it, and details about the API endpoints and their functionalities.

Project Components
The project consists of the following components:

Node.js: A JavaScript runtime environment used for executing server-side code.
Express.js: A web application framework for Node.js used for building APIs.
MongoDB: A NoSQL database used for storing user and blog data.
Running the Project
To run the project, follow these steps:

Install Node.js and MongoDB on your system.
Clone the project repository: git clone <repository-url>
Navigate to the project directory: cd <project-directory>
Install the project dependencies: npm install
Start the MongoDB service: sudo service mongod start (or use the appropriate command for your operating system)
Start the API server: npm start
The API server should now be running on http://localhost:3000.
API Endpoints and Functionality
1. Create User
Endpoint: POST /api/users
Description: Creates a new user.
Request Body: JSON object containing user data (name, profile picture, etc.).
Response: JSON object containing the created user data.
Example Request Body:

json
Copy code
{
  "name": "John Doe",
  "profilepic": "https://example.com/profilepic.jpg"
}
Example Response:

json
Copy code
{
  "id": 1,
  "name": "John Doe",
  "profilepic": "https://example.com/profilepic.jpg",
  "slug": "john-doe",
  "created": "2023-06-16T12:00:00Z",
  "modified": "2023-06-16T12:00:00Z"
}
2. User List
Endpoint: GET /api/users
Description: Retrieves a list of all users.
Response: JSON array containing user objects.
Example Response:

json
Copy code
[
  {
    "id": 1,
    "name": "John Doe",
    "profilepic": "https://example.com/profilepic.jpg",
    "slug": "john-doe",
    "created": "2023-06-16T12:00:00Z",
    "modified": "2023-06-16T12:00:00Z"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "profilepic": "https://example.com/profilepic.jpg",
    "slug": "jane-smith",
    "created": "2023-06-16T12:00:00Z",
    "modified": "2023-06-16T12:00:00Z"
  }
]
3. User Updated
Endpoint: PUT /api/users/:id
Description: Updates an existing user specified by :id parameter.
Request Body: JSON object containing the updated user data.
Response: JSON object containing the updated user data.
Example Request Body:

json
Copy code
{
  "name": "John Doe Jr.",
  "profilepic": "https://example.com/new-profilepic.jpg"
}
Example Response:

json
Copy code
{
  "id": 1,
  "name": "John Doe Jr.",
  "profilepic": "https://example.com/new-profilepic.jpg",
  "slug": "john-doe-jr",
  "created": "2023-06-16T12:00:00Z",
  "modified": "2023-06-16T13:00:00Z"
}

4. User Delete
Endpoint: DELETE /api/users/:id
Description: Deletes an existing user specified by :id parameter.
# No response body. The server should respond with a success status code (e.g., 200) upon successful deletion.

# 5. Blog Create

Endpoint: POST /api/blogs
Description: Creates a new blog.
Request Body: JSON object containing blog data (title, content, etc.).
Response: JSON object containing the created blog data.

 Example Request Body:
   {
  "blogtitle": "My First Blog",
  "blogcontent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }

  Example Response:
{
  "blogid": 1,
  "blogimage": "https://example.com/blogimage.jpg",
  "blogtitle": "My First Blog",
  "blogslug": "my-first-blog",
  "blogcontent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "blogcreated": "2023-06-16T12:00:00Z",
  "blogmodified": "2023-06-16T12:00:00Z"
}


5. Blogs By User List

Endpoint: GET /api/users/:id/blogs
Description: Retrieves a list of blogs created by a specific user specified by :id parameter.
Response: JSON array containing blog objects.

Example Response:
  [
  {
    "blogid": 1,
    "blogimage": "https://example.com/blogimage.jpg",
    "blogtitle": "My First Blog",
    "blogslug": "my-first-blog",
    "blogcontent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "blogcreated": "2023-06-16T12:00:00Z",
    "blogmodified": "2023-06-16T12:00:00Z"
  },
  {
    "blogid": 2,
    "blogimage": "https://example.com/blogimage.jpg",
    "blogtitle": "My Second Blog",
    "blogslug": "my-second-blog",
    "blogcontent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "blogcreated": "2023-06-16T12:00:00Z",
    "blogmodified": "2023-06-16T12:00:00Z"
  }
]

7. Blog Update

Endpoint: PUT /api/blogs/:id
Description: Updates an existing blog specified by :id parameter.
Request Body: JSON object containing the updated blog data.
Response: JSON object containing the updated blog data.

Example Request Body:
  {
  "blogtitle": "Updated Blog Title",
  "blogcontent": "Updated blog content."
}

Example Response:
  {
  "blogid": 1,
  "blogimage": "https://example.com/blogimage.jpg",
  "blogtitle": "Updated Blog Title",
  "blogslug": "updated-blog-title",
  "blogcontent": "Updated blog content.",
  "blogcreated": "2023-06-16T12:00:00Z",
  "blogmodified": "2023-06-16T13:00:00Z"
}

8. delete Blog

Endpoint: Delete /api/deleteblogs/:blogid
Description: Delete the blog.
Response: JSON object containing blog objects.

Example Response:
   
  {
    "blogid": 1,
    "blogimage": "https://example.com/blogimage.jpg",
    "blogtitle": "My First Blog",
    "blogslug": "my-first-blog",
    "blogcontent": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "blogcreated": "2023-06-16T12:00:00Z",
    "blogmodified": "2023-06-16T13:00:00Z"
  },
  
  
