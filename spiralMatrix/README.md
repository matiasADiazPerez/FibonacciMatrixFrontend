# Matrix Spiral Frontend

This repository contains the frontend implementation of the Fibonacci Spiral Matrix challenge. The app aims to achieve the following:

- **User Authentication:** The application requires user authentication via a login process. Users must be created beforehand through the backend.

- **Matrix Dimension Input:** Upon successful authentication, users are prompted with a form to input the number of columns (cols) and rows for their desired Fibonacci Spiral Matrix. Validation ensures that the entered values are within acceptable limits.

- **Display Fibonacci Spiral Matrix:** The application displays a matrix populated with Fibonacci numbers arranged in a spiral pattern based on the provided dimensions (cols and rows). The spiral starts from the top-left corner and continues in a clockwise direction.

- **Backend Dependency:** This frontend application relies on a backend server running at `localhost:8080`. The backend handles user authentication, allowing the frontend to create user accounts for usage.

- **Matrix Dimension Limits:** To prevent excessive resource usage, both the number of columns and rows are capped at a maximum of 500.

## Deployment

Follow these commands for deployment:

- `npm run dev`: Initiates the app and deploys it to `http://localhost:5173`.
- `npm run lint`: Executes ESLint to identify and display warnings and errors within the code. Utilize `npm run lint:fix` to automatically address some of these issues.
- `npm run format`: Utilizes a code formatter (Prettier) to ensure that the code conforms to a consistent coding style.

Please ensure that the backend is running at `localhost:8080` before using this application.


**Note:** This document provides an overview of the application's purpose and functionality. For detailed implementation information, refer to the codebase itself.


