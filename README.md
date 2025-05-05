# Drive

A file storage and sharing application built with Node.js, Express, and MongoDB.

## Features

- User authentication (register/login)
- Secure file uploading and storage
- File sharing capabilities
- Modern UI with Tailwind CSS and Flowbite

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Tech-Abhang/Drive.git
   cd Drive
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   MONGO_URI = mongodb://0.0.0.0/men-drive
   JWT_SECRET = your_secret_key
   ```

## Usage

1. Start the development server:
   ```
   npm start
   ```

2. Access the application:
   Open your browser and navigate to `http://localhost:3000`

3. Register a new account or login with existing credentials

4. Start uploading and sharing files!

## API Endpoints

### Authentication
- `GET /user/register` - Display registration page
- `POST /user/register` - Create new user
- `GET /user/login` - Display login page
- `POST /user/login` - Authenticate user

### Files
- `GET /home` - Display home page with file upload functionality
- `POST /upload-file` - Upload a file (in development)

## Project Structure

```
app.js                # Entry point
package.json          # Project dependencies
config/
  db.js               # Database connection
models/
  user.model.js       # User data model
routes/
  index.routes.js     # Main routes
  user.routes.js      # User-related routes
views/
  home.ejs            # Home page template
  index.ejs           # Index page template
  login.ejs           # Login page template
  register.ejs        # Registration page template
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

ISC
