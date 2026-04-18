# 🚗 AutoElite — Car Dealer App

A modern car dealership web application built with **Next.js 16**, **TypeScript**, **Zustand**, and **vanilla CSS**.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 16](https://nextjs.org/) | React framework (App Router) |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Zustand](https://github.com/pmndrs/zustand) | Lightweight state management |
| Vanilla CSS Modules | Styling (no Tailwind) |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── auth/login/         # Login page
│   ├── dashboard/          # Dealer dashboard
│   ├── vehicles/           # Vehicle listings
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Design tokens & reset
│
├── components/
│   ├── layout/             # Navbar, Footer
│   └── ui/                 # Reusable UI: Button, Card, Input
│
├── features/               # Feature-based modules
│   ├── auth/               # Auth store, components, hooks
│   ├── dashboard/          # Dashboard feature
│   ├── inquiries/          # Customer inquiries
│   └── vehicles/           # Vehicle store, components, hooks
│
├── lib/                    # Utilities & helpers
│   ├── utils.ts            # formatCurrency, cn(), etc.
│   └── tokens.ts           # Design token constants
│
├── store/                  # Global stores (UI, app-wide)
│   └── ui-store.ts         # Sidebar, theme, toasts
│
└── types/                  # Shared TypeScript types
    └── index.ts            # Vehicle, User, Inquiry, etc.
```

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
git clone https://github.com/<your-username>/car-dealer.git
cd car-dealer
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Feature-Based Architecture

Each feature module follows this structure:

```
features/<feature-name>/
├── components/       # Feature-specific UI components
├── hooks/            # Feature-specific custom hooks
├── store/            # Zustand store for this feature
├── types/            # Feature-specific types (if needed)
└── index.ts          # Public API (barrel export)
```

**Rules:**
- Features import from other features only via their `index.ts` barrel export
- Shared UI lives in `components/ui/`
- Global state lives in `store/`
- Feature-specific state lives in `features/<name>/store/`

## Zustand Stores

| Store | Location | Purpose |
|-------|----------|---------|
| `useVehiclesStore` | `features/vehicles/store/` | Vehicles CRUD, filters, loading |
| `useAuthStore` | `features/auth/store/` | User auth state, login/logout |
| `useUIStore` | `store/ui-store.ts` | Sidebar, theme, toast notifications |

## Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## License

MIT
