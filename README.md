# Simple Survey API

This API facilitates managing survey questions and their responses.

## Introduction

This Node.js API simplifies the process of working with surveys. It enables users to access stored questions, respond to those questions, and manage data effectively.

### Endpoints

1. **Fetch Questions:**
   - `GET /api/questions`
     - Retrieves questions from the database.

2. **Fetch Responses:**
   - `GET /api/questions/responses`
     - Fetches responses and provides pagination and filtering via parameters (e.g., email, pageSize, page). 
     - Access the full API documentation in the provided Postman collection.

3. **Save Responses:**
   - `PUT /api/questions/responses`
     - Saves user responses and handles data storage in the database.

4. **Download Files:**
   - `GET /api/questions/responses/download/:filename`
     - Provides a route for downloading files stored in the AWS S3 bucket.

## Installation and Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/17g01acs028/simple_survey-api.git
   
2. **Run the following command to install dependancies:**
   ```sh
   npm install 
   
   
## API DOCUMENTATION

1. **Check the full api documentation Here:**
  [API Documentation](https://documenter.getpostman.com/view/25506702/2s9YXh6P2U)

   

