# Laravel React CRUD

A simple and efficient CRUD (Create, Read, Update, Delete) application built using Laravel and React. This project demonstrates full-stack development skills by integrating a powerful PHP backend with a modern JavaScript frontend. Ideal for developers looking to learn or showcase CRUD operations with Laravel and React.

## Features
- **Full CRUD Operations**: Perform Create, Read, Update, and Delete functions.
- **RESTful API with Laravel**: Handles requests and responses efficiently.
- **React Frontend**: A responsive UI to interact with the backend.
- **Database Integration**: Supports MySQL (configurable) with Laravel’s ORM, Eloquent.

## Prerequisites
- PHP >= 8.0
- Node.js & npm
- Composer
- MySQL or any supported database

## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/allllrez/laravel-react-crud.git
   cd laravel-react-crud




### Backend Setup

**Install PHP dependencies:**  
Run the following command to install the necessary PHP packages:

```bash
composer install
```

**Set up environment variables:**  
Copy the `.env.example` file to `.env` and configure your database settings as needed.

```bash
cp .env.example .env
```

**Generate the application key:**  
Run the following command to generate a new application key for Laravel:

```bash
php artisan key:generate
```

**Run migrations:**  
To set up the database structure, run the migrations command:

```bash
php artisan migrate
```

### Frontend Setup

**Install JavaScript dependencies:**  
Navigate to the frontend folder (where React is set up) and install the required dependencies using npm:

```bash
npm install
```

**Build assets:**  
After installing the dependencies, build the assets:

```bash
npm run dev
```

### Running the Application

**Run the Laravel backend:**  
You can now run the Laravel backend by executing the following command:

```bash
php artisan serve
```

Your backend will be available at `http://localhost:8000`.

**Run the React frontend:**  
To start the React development server, run:

```bash
npm start
```

The frontend will be available at `http://localhost:3000`.

## Usage

Once the backend and frontend are running, you can access the CRUD application at `http://localhost:3000`. You'll be able to create, update, and delete records from the UI.

## Contributing

Feel free to open issues or submit pull requests. Contributions are always welcome!


