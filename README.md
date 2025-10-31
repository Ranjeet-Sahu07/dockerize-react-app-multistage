# Dockerize React Application with Multi-Stage Build

This project demonstrates how to dockerize a React application using multi-stage Docker builds for optimal production deployment.

## 🚀 Features

- **Multi-stage Build**: Separates build and runtime environments
- **Optimized Image Size**: Uses Node.js for building and lightweight Nginx for serving
- **Production Ready**: Optimized for production deployment
- **Easy to Deploy**: Simple Docker commands to build and run

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Docker](https://docs.docker.com/get-docker/) (version 20.10 or higher)
- [Git](https://git-scm.com/downloads)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Ranjeet-Sahu07/dockerize-react-app-multistage.git
cd dockerize-react-app-multistage
```

### 2. Build the Docker Image

```bash
docker build -t react-app-multistage .
```

### 3. Run the Container

```bash
docker run -d -p 8080:80 --name react-container react-app-multistage
```

### 4. Access the Application

Open your browser and navigate to:
```
http://localhost:8080
```

## 📦 Project Structure

```
dockerize-react-app-multistage/
├── Dockerfile           # Multi-stage Docker build configuration
├── .dockerignore       # Files to exclude from Docker build
├── package.json        # Node.js dependencies and scripts
├── README.md           # Project documentation
├── public/
│   └── index.html     # HTML template
└── src/
    ├── App.js         # Main React component
    ├── App.css        # Application styles
    └── index.js       # Application entry point
```

## 🐳 Docker Commands

### Build the image
```bash
docker build -t react-app-multistage .
```

### Run the container
```bash
docker run -d -p 8080:80 --name react-container react-app-multistage
```

### Stop the container
```bash
docker stop react-container
```

### Remove the container
```bash
docker rm react-container
```

### View logs
```bash
docker logs react-container
```

### Remove the image
```bash
docker rmi react-app-multistage
```

## 🏗️ Multi-Stage Build Explanation

The Dockerfile uses a two-stage build process:

### Stage 1: Build
- Uses `node:18-alpine` as the base image
- Installs dependencies
- Builds the React application
- Creates optimized production build

### Stage 2: Serve
- Uses `nginx:alpine` as the base image
- Copies built files from Stage 1
- Serves the application on port 80
- Lightweight and secure production server

## 📝 Development

To run the application locally without Docker:

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🔧 Configuration

The application uses default Create React App configuration. You can customize:
- Nginx configuration by adding `nginx.conf`
- Environment variables in `.env` file
- Build optimization in `package.json`

## 📄 License

This project is open source and available for educational purposes.

## 👤 Author

**Ranjeet Sahu**
- GitHub: [@Ranjeet-Sahu07](https://github.com/Ranjeet-Sahu07)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if this project helped you!
