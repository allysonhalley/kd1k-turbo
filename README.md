# Kd1kTurbo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Military Personnel Registration Form - Angular 17+ Standalone

This project is an Angular application that implements a comprehensive form for military personnel registration. It uses the standalone component architecture of Angular 17+ and is structured in a modular and organized way.

## Features

- **Angular 17+**: Uses the latest features of Angular, including standalone components and modern syntax
- **Modular Architecture**: Each section of the form is implemented as an independent component
- **Reactive Forms**: Implements validation and state management using ReactiveFormsModule
- **Responsive Design**: Adaptable layout for different screen sizes
- **JSON Submission**: Collects and sends form data in JSON format

## Project Structure

The project follows a well-organized architecture:

```
src/
├── app/
│   ├── components/                           # Standalone components
│   │   ├── personal-data/                    # Personal data component
│   │   ├── military-hierarchy/               # Military hierarchy component
│   │   ├── qualifications/                   # Qualifications component
│   │   ├── assignment-work-schedule/         # Assignment & work schedule component
│   │   ├── documents-history/                # Documents & history component
│   │   └── contact-dependents/               # Contacts & dependents component
│   ├── models/                               # Interfaces and types
│   │   └── military.model.ts                 # Data model 
│   ├── services/                             # Services
│   │   └── military.service.ts               # Service for military data management
│   ├── app.component.ts                      # Main component
│   ├── app.component.html                    # Main template
│   ├── app.component.scss                    # Main styles
│   ├── app.config.ts                         # App configuration
│   └── app.routes.ts                         # Route definitions
├── assets/                                   # Static resources
├── styles.scss                               # Global styles
└── main.ts                                   # Application entry point
```

## Implemented Features

1. **Comprehensive Form with Multiple Sections**:
   - Personal Data and Military Identity
   - Military Hierarchy
   - Qualifications and Education
   - Assignment and Work Schedule
   - Documents and Military History
   - Contacts and Dependents

2. **Field Validation**:
   - Required fields
   - Format validation (SSN, email, ZIP code)
   - Visual feedback for errors

3. **State Management**:
   - Reactive forms for each section
   - Centralized state management
   - Dynamic addition/removal of dependents

4. **User Interface**:
   - Modern and intuitive design
   - Tab navigation
   - Logically grouped fields
   - Visual feedback for interactions

## Installation Instructions

1. Make sure you have Node.js (version 16 or higher) and npm installed.

2. Install Angular CLI globally:
   ```bash
   npm install -g @angular/cli
   ```

3. Clone the repository or create a new Angular application:
   ```bash
   ng new military-registration-form --standalone
   ```

4. If creating a new project, replace the files with the provided files.

5. Install dependencies:
   ```bash
   npm install
   ```

6. Run the application:
   ```bash
   ng serve
   ```

7. Access the application at `http://localhost:4200`

## Application Usage

1. Navigate between tabs to fill out different sections of the form.
2. Required fields are marked with an asterisk (*).
3. After completing the form, click "Submit" to process the form.
4. The JSON result will be displayed at the bottom of the page.
5. Use the "Clear" button to reset all fields.

## Customization and Expansion

- **Real API**: Replace the API simulation in the `military.service.ts` service with calls to a real backend.
- **Authentication**: Add authentication and authorization.
- **Local Storage**: Implement temporary saving using LocalStorage.
- **Additional Validations**: Expand validations as needed.
- **Themes**: Customize colors and styles in the `styles.scss` file.

---

This project was developed as a solution for managing military personnel data, following best practices and architectural patterns of Angular 17+.
