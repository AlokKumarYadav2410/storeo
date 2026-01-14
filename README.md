# Storeo - Modern E-commerce Platform

![Storeo Preview](./src/assets/preview.png)

## About Storeo

Storeo is a modern, full-featured e-commerce platform built with React. It provides a seamless shopping experience with smooth animations, beautiful UI design, and fast performance. Discover amazing products in an intuitive and responsive interface.

## Features

- 🛍️ **Wide Product Selection** - Browse a curated collection of products
- ⚡ **Lightning Fast Performance** - Built with Vite for optimized build times
- 📱 **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ✨ **Smooth Animations** - Beautiful transitions powered by Framer Motion
- 🎨 **Modern UI** - Clean and modern design with Tailwind CSS
<!-- - 🌗 **Theme Support** - Dark and light theme capabilities -->
- 🔍 **Product Details** - Detailed product information pages
- 🎯 **Easy Navigation** - Intuitive routing and navigation
- 📦 **API Integration** - Real-time product data with Axios

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Routing:** React Router v7
- **HTTP Client:** Axios
- **Icons:** React Icons
- **Language:** JavaScript (ES Modules)

## Project Structure

```
storeo/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # Landing page with hero section
│   │   ├── Products.jsx      # Product listing page
│   │   ├── ProductDetail.jsx # Individual product details
│   │   └── About.jsx         # About page
│   ├── components/
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── Footer.jsx        # Footer section
│   │   └── Loader.jsx        # Loading component
│   ├── context/
│   │   └── ProductContext.jsx # Global product state management
│   ├── api/
│   │   └── productApi.js     # API calls for products
│   ├── assets/               # Images and media
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   ├── index.css             # Global styles
│   └── animations.js         # Animation configurations
├── public/                   # Static assets
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── eslint.config.js          # Linting rules
└── README.md                 # This file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create an optimized production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Linting

Check for code quality issues:
```bash
npm run lint
```

<!-- ## Color Scheme

The application uses a carefully selected color palette:
- **Primary Color:** #f59e0b (Amber) - Accents and highlights
- **Secondary Color:** #1f2937 (Dark Gray) - Text and emphasis
- **Accent Color:** #0f172a (Dark Slate) - Backgrounds and contrast -->

## Routes

- `/` - Home page with hero section and CTA
- `/about` - About Storeo information
- `/products` - All products listing
- `/products/:id` - Individual product detail page

## Performance Optimizations

- Vite for rapid module replacement and fast builds
- Code splitting for optimal bundle size
- Lazy loading of routes
- Optimized animations with Framer Motion
- Responsive images
- Efficient state management with Context API

<!-- ## Future Enhancements

- Shopping cart functionality
- User authentication and profiles
- Payment integration
- Product reviews and ratings
- Search and filtering capabilities
- Wishlist feature
- Order management system -->

## Contributing

Feel free to fork and submit pull requests for any improvements.

## License

This project is open source and available under the MIT License.