
CledBay - MVP (scaffold) - Tailwind-ready
========================================

How to run locally:

1. Install Node.js (v18+ recommended).
2. In the project root run:
   npm install
3. Install Tailwind/PostCSS toolchain (one-time):
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   (We already included tailwind.config.cjs and postcss.config.cjs)
4. Start development server:
   npm run dev
5. Open the URL shown by Vite (usually http://localhost:5173).

Important notes:
- The API key is read from environment variable VITE_BASE44_API_KEY. To run locally without setting it, the code falls back to the embedded key (for quick testing). Do NOT commit your real production key to GitHub.
- To set the API key locally, create a file named **.env** in the project root with this content:
    VITE_BASE44_API_KEY=your_api_key_here

Deploying to Vercel (recommended, free tier):
1. Push the project to a GitHub repository.
2. Create an account on Vercel and import the GitHub repository.
3. In Vercel project settings -> Environment Variables, add:
    VITE_BASE44_API_KEY = <your_api_key_here>
4. Build & Output settings (Vite defaults) should be auto-detected: Build command: `npm run build`, Output Directory: `dist`.
5. Deploy. Vercel will provide a public URL.

If you want, I can also create the GitHub repo & connect the Vercel deploy for you (I can guide step-by-step).
