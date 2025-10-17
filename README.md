This is a [Next.js](https://nextjs.org) project for Divdesh Wealth - a financial advisory website specializing in investing and insurance guidance.

## Features

- **Responsive Website**: Built with Next.js, TypeScript, and Tailwind CSS
- **Multiple Pages**: Home, About Us, Insurance, Investing with educational content
- **AI-Powered Chatbot**: OpenAI integration for answering wealth management questions
- **Orange-Red Theme**: Custom color scheme (CMYK 0,70,100,0)
- **Hero Banner**: Professional finance-themed background image

## Getting Started

### Prerequisites
- Node.js 18+ (use nvm for version management)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Chatbot Setup

The website includes an AI chatbot that answers questions about investing and insurance. To enable OpenAI integration:

1. **Get an OpenAI API Key**:
   - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create a new API key

2. **Configure Environment Variables**:
   - Create `.env.local` in the project root
   - Add: `OPENAI_API_KEY=your_api_key_here`

3. **Without API Key**:
   - The chatbot will use fallback responses
   - Still functional but less intelligent

## Project Structure

```
src/
├── app/
│   ├── api/chat/          # OpenAI API route
│   ├── components/        # Reusable components
│   ├── about/            # About Us page
│   ├── insurance/        # Insurance page
│   ├── investing/        # Investing page
│   └── page.tsx          # Home page
├── globals.css           # Global styles & theme
└── layout.tsx           # Root layout
```

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI GPT-3.5-turbo
- **Deployment**: Vercel

## Deploy on Vercel

1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Add environment variables in Vercel dashboard:
   - `OPENAI_API_KEY`
4. Deploy automatically

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
