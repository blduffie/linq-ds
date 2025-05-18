# Task List

Task List is a lightweight system for creating and managing to-dos, subtasks, and deadlines. It is a .NET 8 (C#) Web API paired with an Angular front end to help you maintain a to-do list with subtasks. This guide explains how to set up the project on your machine for local development, run and debug the application, and ensure everything works as intended.

# Getting Started

Below are the core dependencies you need installed before you can build and run **TaskList** locally.

## Software Dependencies

- [Visual Studio Code](https://code.visualstudio.com/download) (optional, but recommended)
  - C# for Visual Studio Code ([latest version](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp))
- [.NET 8.0 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- [Node.js](https://nodejs.org/en) (Active LTS or Current)
  - Includes **npm**, the Node Package Manager
- [Angular CLI](https://angular.io/docs)

  ```
  npm install -g @angular/cli
  ```

## Installation Process

1. **Clone the Repository**
   Clone the `task-list` from its source to your local machine.

2. **Open in VS Code**
   Launch Visual Studio Code (or your preferred IDE) and open the folder containing the cloned files.

## Trust Development SSL Certificates

To enable HTTPS locally:

1. **.NET Core Development Certificate**

- Run `dotnet dev-certs https -t` to generate and trust the local development certificate, if it doesn't already exist
- When prompted, click Yes to trust the local development certificate.

2. **(Optional) Angular Development Certificate**
   - If you create a self-signed certificate for Angular, install it in the Trusted Root Certification Authorities store. However, if you're just making plain HTTP requests from Angular to the .NET API's HTTPS endpoint, you generally only need the .NET dev-certs.

### **Building and Running the .NET API**

- In the `TodoApi` folder (where your `.csproj` is located), run:
  `dotnet build`

- To run the Web API locally run the following command:
  `dotnet run --launch-profile https`

The default browser is launched to https://localhost:7220. Append /swagger to the URL, https://localhost:7220/swagger to view the Swagger. You'll see endpoints like GET /api/TodoItems in the docs.

### **Building and Running the Angular Client**

- Open a new terminal at `web-client`

Run the following commands:
`npm install`
`ng build`

The web client project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### **Running unit tests**

Run `ng test` to execute the unit tests.

## Angular App Organization

The Angular app uses multiple modules to organize code:

- **AppModule**
  The entry-point of the application. It loads the root `AppComponent`, manages top-level routing, and imports the `SharedModule`.
- **SharedModule**
  Contains components, directives, and models shared across the application. Also re-exports common Angular Material modules or other third-party modules.
- **Feature Modules**
  Each domain-specific feature (e.g., Tasks, ToDos, Users, etc.) has its own feature module located in `app/modules/<feature>`.
  - Each feature module is ideally self-contained and can be lazy-loaded.
  - Shared or common logic goes into the `SharedModule`.
