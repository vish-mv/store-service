# store-service

This is a simple store service built with Node.js, Express, and Firebase Admin SDK. It provides an API for managing store items.

## Setup

1.  **Clone the repository:**

2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Firebase Configuration:**
    *   Create a Firebase project and set up a Firestore database.
    *   Generate a private key for your service account from the Firebase console (`Project settings > Service accounts > Generate new private key`).
    *   Save the downloaded JSON file as `firebase-key.json` in the root of your project directory.

## Usage

1.  **Start the server:**
    ```bash
    npm start
    ```
    The server will run on `http://localhost:3000`.

## API Endpoints

### Health Check

*   **GET `/health`**
    *   **Description:** Checks the health of the service.
    *   **Response:**
        ```json
        {
            "status": "ok"
        }
        ```

### Get All Items

*   **GET `/items`**
    *   **Description:** Retrieves all items from the store.
    *   **Response:** An array of item objects.
        ```json
        [
            {
                "id": "item1Id",
                "name": "Item 1",
                "brand": "Brand 1",
                "category": "Electronics",
                "subCategory": "Phones"
            },
            {
                "id": "item2Id",
                "name": "Item 2",
                "brand": "Brand 2",
                "category": "Books",
                "subCategory": "Fiction"
            }
        ]
        ```

### Get Filtered Items

*   **GET `/items/filter`**
    *   **Description:** Retrieves items based on category and/or subCategory filters.
    *   **Query Parameters:**
        *   `category` (optional): Filter by item category.
        *   `subCategory` (optional): Filter by item subCategory.
    *   **Example Request:**
        `http://localhost:3000/items/filter?category=electronics&subCategory=laptop`
        `http://localhost:3000/items/filter?category=electronics`
        `http://localhost:3000/items/filter?subCategory=laptop`
    *   **Response:** An array of filtered item objects.
        ```json
        [
            {
                "id": "item1Id",
                "name": "Item 1",
                "brand": "Brand 1",
                "category": "Electronics",
                "subCategory": "Phones"
            }
        ]
        ```

## Technologies Used

*   **Node.js**
*   **Express.js**: Web framework for Node.js
*   **Firebase Admin SDK**: For interacting with Firebase services like Firestore.

## Scripts

*   `npm start`: Starts the Node.js server.