# Territori - Real Estate Marketplace UI

A modern, responsive real estate marketplace interface built with **React**, **TypeScript**, **Vite**, **TailwindCSS**, and **React Router**.

> **Note:** This is a UI-only project. Backend integration and API connections will be implemented later.

## 🚀 Tech Stack

- **React** 18.3 - UI library
- **TypeScript** 5.9 - Type safety
- **Vite** 7.3 - Build tool and dev server
- **TailwindCSS** 3.4 - Utility-first CSS framework
- **React Router** 6.22 - Client-side routing
- **Framer Motion** 12.34 - Animation library
- **ESLint** - Code quality

## 📋 Project Structure

```
src/
├── components/
│   ├── MainLayout.tsx          # Main layout wrapper with navbar
│   ├── HomeLayout.tsx          # Home page layout
│   ├── Home.tsx                # Home page
│   ├── Listings.tsx            # Listings page
│   ├── ListingDetail.tsx       # Individual listing detail page
│   ├── PostListing.tsx         # Post a new listing form
│   ├── Service.tsx             # Services overview page
│   ├── About.tsx               # About page
│   ├── Contact.tsx             # Contact page
│   ├── Footer.tsx              # Footer component
│   ├── HeroBanner.tsx          # Hero banner component
│   ├── NotFound.tsx            # 404 Not Found page
│   ├── TrustedBy.tsx           # Trusted companies section
│   └── services/               # Service detail components
│       ├── Agjencite.tsx       # Agency listings service
│       ├── MeQira.tsx          # Rental listings service
│       ├── NeShitjet.tsx       # Property sales service
│       └── Toka.tsx            # Land property service
├── assets/                     # Images and static assets
├── data/
│   └── listings.ts             # Mock listing data
├── App.tsx                     # App routing configuration
├── main.tsx                    # Application entry point
└── index.css                   # Global styles (Tailwind imports)
```

## 🛣️ Routes & Pages

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Home | Homepage with hero and featured listings |
| `/listings` | Listings | Browse all real estate listings |
| `/listings/:id` | ListingDetail | View details of a specific listing |
| `/post-listing` | PostListing | Create a new listing |
| `/service` | Service | View available services |
| `/service/agjencite` | Agjencite | Agency listings service |
| `/service/meqira` | MeQira | Rental listings service |
| `/service/neshitjet` | NeShitjet | Property sales service |
| `/service/toka` | Toka | Land property service |
| `/about` | About | About page |
| `/contact` | Contact | Contact page |
| `*` | NotFound | 404 Not Found page |

## 🏃 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ErdrinPervizaj05/Territori.git
   cd Territori
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5176/` (port may vary if in use)

### Building for Production

1. **Build the application**
   ```bash
   npm run build
   ```
   Generated files will be in the `dist/` folder.

2. **Preview production build locally**
   ```bash
   npm run preview
   ```

### Linting

Check code quality with ESLint:
```bash
npm run lint
```

## 📝 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| dev | `npm run dev` | Start development server with hot reload |
| build | `npm run build` | Build for production |
| preview | `npm run preview` | Preview production build locally |
| lint | `npm run lint` | Check code with ESLint |

## 🎨 Styling

- **TailwindCSS** utility classes for styling
- Configured via `tailwind.config.js`
- CSS imports in `src/index.css`

### Class Organization
- Use utility classes directly in JSX
- Avoid inline styles when possible
- Group related utilities logically

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, development process, and how to submit pull requests.

## 📸 Screenshots

_Screenshots coming soon..._

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Authors

- **Erdrin Pervizaj** - Initial creator

## 🙋 Support

If you have questions or issues, please open an [Issue](https://github.com/ErdrinPervizaj05/Territori/issues) on GitHub.

---

**Happy coding!** 🎉
