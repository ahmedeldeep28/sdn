# SDN Backend

This is the backend for the SDN (Software Defined Networking) project. It is built with Node.js and Express, and provides APIs and server-side logic for managing services, teams, technologies, contacts, and authentication.

## Project Structure

```
app.js                # Main application entry point
package.json          # Project metadata and dependencies
assets/               # Static assets (CSS, JS)
controller/           # Route controllers for business logic
images/               # Image assets
model/                # Mongoose models for MongoDB
router/               # Express routers and route guards
sass/                 # SASS/SCSS source files
views/                # EJS templates for server-side rendering
```

## Features
- User authentication (login/logout)
- Manage services, teams, technologies, and contacts
- Dashboard for administration
- EJS templating for dynamic HTML views
- Static asset serving (CSS, JS, images)

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (Node package manager)
- MongoDB (local or remote instance)

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd sdn-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables (if needed):
   - Create a `.env` file for sensitive configuration (e.g., database URI, secret keys).

### Running the Application
```sh
node app.js
```
The server will start on the configured port (default: 3000).

### Development
- To use SASS, compile `sass/main.scss` to `assets/css/main.css`.
- Static files are served from the `assets/` and `images/` directories.

## Folder Details
- **controller/**: Handles business logic for authentication, contacts, services, teams, and technologies.
- **model/**: Mongoose models for MongoDB collections.
- **router/**: Express routers and route guards for API endpoints.
- **views/**: EJS templates for rendering HTML pages.
- **assets/**: Static CSS and JS files.
- **images/**: Image assets used in the application.

## License
This project is licensed under the MIT License.
