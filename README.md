# Student Portfolio — React + Vite

A student portfolio web application built with React and Vite.

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | About section and skills list |
| `/projects` | Projects | GitHub repositories fetched via REST API |
| `/contact` | Contact | Contact form with controlled inputs |
| `*` | 404 | Custom not-found page for unknown paths |

## Features

- Reusable components: Header, NavBar, About, Skills, Footer, Spinner, ErrorMessage, RepoList
- Client-side routing with React Router v6 (no full page reloads)
- `useState` for controlled form inputs, help tooltip toggle, and dark/light mode
- `useEffect` to fetch GitHub repos on component mount
- Loading spinner and error handling with retry button
- Search filter for repositories
- Displays repository name, description, language, and star count
- Live character count on the contact form
- Dark / Light theme toggle
- Responsive layout

## Tech Stack

- React 19
- Vite
- React Router v6
- GitHub REST API

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.
