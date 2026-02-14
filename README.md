# ZenduForms – All Reports Page (Angular Case Study)

This project implements the **All Reports** page based on the provided Figma design as part of a front-end case study.

The objective was to build a visually accurate and functional Angular application focusing on clean architecture, usability, and maintainable code.

---

## Features

### UI Implementation

- Header navigation layout
- All Reports page based on Figma design
- Search input with filtering
- Add new report button
- Sort dropdown (Newest / Oldest)
- Reports list with structured layout
- Pagination controls

---

### Functional Features

- Search filtering by:
  - Report name
  - Owner
  - Associated form

- Sorting:
  - Newest first
  - Oldest first

- Pagination:
  - Dynamic page calculation
  - Page navigation buttons
  - Record range display

- Delete report:
  - Confirmation dialog
  - UI state update

-  Row interaction:
  - Click selection
  - Keyboard accessibility support

---

## Project Structure

src/
├── app/
│ ├── core/
│ │ └── models/
│ │ └── report.model.ts
│ │
│ ├── features/
│ │ └── reports/
│ │ └── pages/
│ │ └── all-reports/
│ │ ├── all-reports.ts
│ │ ├── all-reports.html
│ │ └── all-reports.scss
│ │
│ └── shared/

---

## Technologies Used

- Angular (Standalone Components)
- TypeScript
- SCSS
- Angular Material (Icons)
- ESLint (Angular rules)

---

##  Setup Instructions

### Install dependencies

npm install
---

### Run development server
npm install

Open: http://localhost:4200

---

### Production build

ng build --configuration production

---

### Linting

ng lint

---

## Mock Data

Mock data is separated for maintainability:

report-mock.ts

---

## Design Approach

- Layout implemented to closely match provided Figma design
- Consistent spacing and typography applied
- CSS variables used for reusable color styling
- Grid layout used for predictable alignment

---

## Notes for Reviewers

- Angular standalone component architecture used
- Accessibility lint rules addressed
- Clean separation between UI and data logic
- Organized feature-based folder structure

---

##  Author

Elizabeth Thomas





