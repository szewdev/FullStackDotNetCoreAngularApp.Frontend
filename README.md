# FullStackDotNetCoreAngularApp.Frontend

*This repository contains frontend project for FullStackDotNetCoreAngularApp project.*

## Description

FullStackDotNetCoreAngularApp.Frontend is a modern web application built using **Angular**.

## Key Technologies & Patterns

-   **Angular:** Framework used for building the frontend.
-   **RxJS**: For reactive programming.
-   **NGRX/Akita**: For state management.
-   **daisyUI/Tailwind**: For UI components.
-   **Lazy Loading Modules**: For better performance.
-   **Angular Universal**: For server-side rendering.
-   **Jasmine and Karma**: Used for unit testing.
-   **PWA**: Progressive Web App capabilities.
-   **i18n & ngx-translate**: For internationalization.
-   **HTTP Interceptors**: For request handling.
-   **CSS**: For styling.
-   **Angular Animations**: For UI animations.
-   **Eslint and Prettier**: For code linting and formatting.

## Project Structure

    Frontend/ (Angular)
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   │   ├── product-form/
    │   │   │   │   ├── product-form.component.ts
    │   │   │   │   ├── product-form.component.html
    │   │   │   │   └── product-form.component.spec.ts
    │   │   │   ├── product-list/
    │   │   │   │   ├── product-list.component.ts
    │   │   │   │   ├── product-list.component.html
    │   │   │   │   └── product-list.component.spec.ts
    │   │   │   └── product-details/
    │   │   │       ├── product-details.component.ts
    │   │   │       ├── product-details.component.html
    │   │   │       └── product-details.component.spec.ts
    │   │   ├── services/
    │   │   │   ├── product.service.ts
    │   │   │   └── product.service.spec.ts
    │   │   ├── models/
    │   │   │   ├── product.model.ts
    │   │   │   ├── product-detail.model.ts
    │   │   │   └── product-review.model.ts
    │   │   └── app.module.ts
    │   ├── assets/
    │   ├── environments/
    │   ├── styles/
    │   ├── main.ts
    │   └── index.html
    │
    ├── e2e/
    │   ├── src/
    │   │   ├── app.e2e-spec.ts
    │   │   └── app.po.ts
    │   └── tsconfig.e2e.json
    │
    ├── angular.json
    ├── package.json
    ├── tsconfig.json
    ├── tsconfig.app.json
    ├── tsconfig.spec.json
    └── karma.conf.js

## Getting Started

### Prerequisites

-   Node.js
-   npm package manager

### Running

    npm install
    ng serve

### Running

    ng test

## Contributing

I do welcome contributions to the project.
Feel free to report bugs, propose new features, or submit fixes.

## License

This project is licensed under the MIT License.
