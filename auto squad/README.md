# Auto Squad Website

Auto Squad is a premium pre-owned car dealership website with user authentication, admin capabilities, and a clean modern design.

## Features Implemented

### 1. Dark Theme
- Implemented a site-wide dark theme with a modern, sleek design
- Added theme toggle functionality with persistent theme preference storage
- Used CSS variables for consistent color theming across all pages

### 2. Animations
- Added car animations to replace static background images
- Implemented animated driving cars with shadow effects
- Added road animations with moving dashed line effects
- Included subtle hover effects on cards and buttons
- Added loading animations for content appearance

### 3. Responsive Design
- Ensured all pages are fully responsive for mobile, tablet, and desktop
- Implemented hamburger menu for smaller screens
- Adjusted typography and spacing for different device sizes
- Created flexible card layouts that adapt to screen size

### 4. Admin Features
- Enhanced admin panel for car management
- Added photo upload functionality for car exterior and interior
- Implemented drag and drop file uploads with preview
- Created confirmation dialogs for destructive actions

### 5. Navigation Improvements
- Fixed navbar to display properly on all pages
- Made navbar sticky to stay at the top during scrolling
- Added transitions and visual feedback for active navigation
- Implemented proper authentication-based navigation hiding/showing

### 6. Database Management
- Enhanced the client-side database (db.js) for car and user management
- Added support for photo storage and retrieval
- Implemented theme preference storage

### 7. User Experience
- Added form validation with helpful error messages
- Improved login/registration experience
- Implemented toast notifications for user feedback
- Added back-to-top button for easier navigation

## File Structure

- `auto.html` - Main homepage with feature showcase
- `login.html` - User authentication page
- `card.html` - Car listings page with search functionality
- `admin.html` - Admin dashboard for car management
- `db.js` - Client-side database and authentication
- `assets/` - Directory containing images and JavaScript utilities
  - `car-icon.js` - JavaScript for car animations
  - `car-icon.svg` - Vector car graphic
  - `login-bg.svg` - Vector background for login page

## Technologies Used

- HTML5, CSS3, JavaScript
- Bootstrap 5 for responsive layout
- FontAwesome for icons
- Client-side storage (localStorage/sessionStorage) for data persistence
- CSS animations and transitions

## Getting Started

1. Clone the repository
2. Open `auto.html` in your browser to view the homepage
3. Login with admin credentials (username: admin, password: admin123) to access the admin panel
4. Create a new user account through the registration form

## Customization

The website uses CSS variables for easy customization. Main colors and styles can be adjusted by modifying the `:root` variables in each CSS file.

```css
:root {
    --primary-color: #3a86ff;
    --secondary-color: #00bfa6;
    --dark-bg: #121212;
    --dark-surface: #1e1e1e;
    --dark-text: #ffffff;
    --dark-text-secondary: #aaaaaa;
    --card-bg: #242424;
    --card-hover: #2a2a2a;
}
``` 