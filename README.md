# Core Ledger NG

[![Angular](https://img.shields.io/badge/Angular-21.0.0-red.svg)](https://angular.dev/)
[![Angular Material](https://img.shields.io/badge/Angular%20Material-21.0.3-blue.svg)](https://material.angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)

A modern, responsive financial ledger application built with Angular 21 and Material Design 3. This application demonstrates best practices in Angular development including standalone components, signals-based state management, comprehensive error handling, and Material Design 3 theming.

## Features

- 📱 **Responsive Design**: Built with Material Design 3 components and responsive layout
- ⚡ **Performance Optimized**: OnPush change detection strategy across all components
- 🎨 **Modern UI**: Material Design 3 with system tokens and CSS variables
- 🛡️ **Error Handling**: Comprehensive global error handling with user-friendly feedback
- 🔍 **Search**: Global search functionality across the application
- 📊 **Dashboard**: Interactive dashboard with data visualization
- ✅ **Task Management**: Complete CRUD operations for todo items
- 🔔 **Notifications**: Real-time notification system
- 🌙 **Dark Mode**: Automatic theme switching based on system preferences

## Architecture

The application follows Angular 21 best practices:

- **Standalone Components**: All components use standalone architecture
- **Signals**: Reactive state management using Angular signals
- **Dependency Injection**: Modern `inject()` function throughout
- **Lazy Loading**: Feature modules loaded on demand
- **Error Boundaries**: Graceful error handling at component level
- **Type Safety**: Full TypeScript implementation with strict mode

## Tech Stack

- **Framework**: Angular 21.0.0
- **UI Library**: Angular Material 21.0.3
- **Language**: TypeScript 5.9
- **Build Tool**: Angular CLI 21.0.3
- **Testing**: Vitest for unit tests
- **Styling**: SCSS with Material Design 3 theming

## Prerequisites

Before running this application, ensure you have the following installed:

- Node.js (v18 or higher)
- npm (v9 or higher)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/core-ledger-ng.git
cd core-ledger-ng
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you make changes to the source code.

## Development

### Code Generation

Generate new components using the Angular CLI:

```bash
# Generate a new component
ng generate component components/new-component

# Generate a new service
ng generate service services/new-service

# Generate a new pipe
ng generate pipe pipes/new-pipe
```

### Building

Build the application for production:

```bash
# Production build
npm run build

# Build with specific configuration
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

### Testing

Run unit tests:

```bash
# Run all tests
npm test

# Run tests in watch mode
ng test --watch

# Run tests with coverage
ng test --code-coverage
```

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   └── error-boundary/  # Error boundary component
│   ├── services/           # Application services
│   │   ├── global-error-handler.service.ts
│   │   ├── logging.service.ts
│   │   └── todo-api.service.ts
│   ├── models/             # TypeScript models
│   ├── interceptors/       # HTTP interceptors
│   └── [feature-components]/ # Feature-specific components
├── environments/          # Environment configurations
├── styles/                # Global styles
└── main.ts               # Application entry point
```

## Configuration

### Environment Variables

Configure environment-specific settings in:

- `src/environments/environment.ts` - Development
- `src/environments/environment.prod.ts` - Production

### Theming

Customize the theme in `src/custom-theme.scss`:

```scss
@use '@angular/material' as mat;

html {
  @include mat.theme((
    color: mat.$cyan-palette,
    typography: Roboto,
    density: 0,
  ));
}
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

This project uses Prettier for code formatting. The configuration is in `.prettierrc`.

```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

## Error Handling

The application implements a comprehensive error handling strategy:

- **Global Error Handler**: Catches and logs all unhandled errors
- **HTTP Interceptor**: Handles HTTP errors with user-friendly messages
- **Error Boundaries**: Graceful error display at component level
- **Logging**: Structured error logging for debugging

## Accessibility

This application is built with accessibility in mind:

- Semantic HTML5 elements
- ARIA attributes where appropriate
- Keyboard navigation support
- Screen reader compatibility
- High contrast support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Angular](https://angular.dev/) - The web framework used
- [Angular Material](https://material.angular.dev/) - UI component library
- [Material Design 3](https://m3.material.io/) - Design system

## Support

If you have any questions or need help, please:

1. Check the [documentation](https://angular.dev/)
2. Search existing [issues](https://github.com/your-username/core-ledger-ng/issues)
3. Create a new issue with detailed information

---

Built with ❤️ using Angular 21 and Material Design 3
