# Pesto
![image](https://github.com/user-attachments/assets/03731407-6ddd-49c6-a4f7-70f1ff8d8443)
![image](https://github.com/user-attachments/assets/dd3d5125-ca58-43a3-947b-fed65d3a2d6d)

Assumptions and Design Decisions
1. Assumptions

Project Scope:

The application is a basic task management system for personal use or small teams.
The design focuses on core features: task creation, updating, deletion, and filtering.
Data Storage:

Frontend: Uses db.json as a mock backend to store task data. This is suitable for development and testing.
Backend: While the front-end is implemented, the project does not include a backend server in this scope. For a production environment, a real backend with a database and authentication would be necessary.
User Authentication:

The application does not include user authentication and authorization. All users have access to the same data.
Styling and Responsiveness:

The design is created using Tailwind CSS, aiming for a responsive and modern interface.
Assumes a basic understanding of Tailwind CSS utility classes for styling.
Error Handling:

Basic error handling is implemented for API interactions. More robust error handling may be needed for a production environment.
Compatibility:

The application is developed with modern browsers in mind. Older browsers may not be fully supported.
2. Design Decisions

Technology Stack:

Frontend Framework: React.js with TypeScript for type safety and better maintainability.
Styling: Tailwind CSS for utility-first styling.
Data Handling: db.json (mock data) for local development.
Component Structure:

App.tsx: The main application component managing state and rendering sub-components.
TaskForm.tsx: Component for adding new tasks.
TaskList.tsx: Component for displaying and interacting with the list of tasks.
TaskFilter.tsx: Component for filtering tasks by status.
User Interface:

Navigation and Layout: A responsive layout with a fixed header for navigation.
Task Management: Features include task creation, editing, deletion, and filtering.
Toasts and Notifications:

React Toastify: Used for user feedback on task actions (add, update, delete).
Error Handling:

Frontend: Displays basic error messages using toasts for user feedback.
3. Future Enhancements

Backend Integration:

Replace db.json with a real backend service for data persistence.
Implement user authentication and authorization.
Advanced Features:

Add task due dates, reminders, and user profiles.
Enhance error handling and input validation.
 
4. Documentation and Setup

Installation: Follow the setup instructions in the main repository to install dependencies and run the application.
Usage: Instructions on how to use the application, including screenshots or demo links if available.
