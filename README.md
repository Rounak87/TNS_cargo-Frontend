# 🚛 TNS Cargo India Services - Website

A modern, responsive logistics website built with React and Vite. Features include service showcase, shipment tracking, contact form with EmailJS integration, and smooth animations.

## 🌟 Features

- **Responsive Design**: Mobile-first approach with smooth animations
- **Service Showcase**: Comprehensive display of logistics services
- **Shipment Tracking**: Real-time tracking interface (demo data)
- **Contact Form**: EmailJS integration for seamless communication
- **Modern UI/UX**: Custom animations, scroll effects, and interactive elements
- **Fast Performance**: Powered by Vite for lightning-fast development and builds

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rounak87/TNS_cargo-Frontend
   cd tns-cargo/Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Copy `.env.example` to `.env`
   - Update EmailJS credentials (see [Email Setup](#-email-configuration) section)
   ```bash
   cp .env.example .env
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) in your browser

## 📧 Email Configuration

The contact form uses EmailJS for sending emails. To set this up:

1. Create an account at [EmailJS](https://dashboard.emailjs.com)
2. Add an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{subject}}`, `{{message}}`
4. Get your credentials from the dashboard:
   - Service ID
   - Template ID
   - Public Key
5. Update the `.env` file:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_COMPANY_EMAIL=your-email@example.com
   ```

**📍 Where to Change Email Settings:**
- Local development: Update `Frontend/.env`
- Production (Vercel): Update environment variables in Vercel dashboard
- Contact form code: `Frontend/src/pages/ContactPage.jsx` (lines 33-54)

For detailed setup instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📁 Project Structure

```
Frontend/
├── src/
│   ├── pages/           # Page components
│   │   ├── HomePage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx    # ⚠️ Email configuration here
│   │   └── TrackingPage.jsx
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ServicesSection.jsx
│   │   └── ...
│   ├── animations.css   # Custom animations
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── .env                 # Environment variables (gitignored)
├── .env.example         # Environment template
├── DEPLOYMENT.md        # Deployment guide
└── package.json
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Email Service**: EmailJS
- **Icons**: React Icons
- **Styling**: CSS with custom animations

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 Deployment

This project is optimized for Vercel deployment. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions including:
- Setting up EmailJS
- Configuring environment variables
- Deploying to Vercel
- Post-deployment checklist
- Troubleshooting guide

### Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

**Don't forget to add environment variables in Vercel dashboard!**

## 🔒 Security Notes

- ⚠️ Never commit the `.env` file to version control
- ✅ Use `.env.example` as a template for team members
- ✅ Set environment variables in Vercel dashboard for production
- ✅ All sensitive credentials are managed via environment variables

## 📋 Demo Tracking Numbers

For testing the tracking page, use these demo numbers:
- `TNS123456`
- `TNS987654`
- `DEMO123`
- `TEST456`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.



---

**Built with ❤️ using React + Vite**
