# 💄 SBR BEAUTY HUB - Global Beauty & Parlour Marketplace

**The world's most advanced AI-powered beauty services platform combining salon booking, product marketplace, and virtual try-on technology.**

---

## 🌟 Features

### 💅 Service Booking
- Real-time salon availability
- Instant appointment confirmation
- Multiple service options
- Stylist profiles & ratings
- Flexible rescheduling

### 🛍️ Product Marketplace
- Verified beauty brands
- Beauty product reviews
- Subscription beauty boxes
- Secure checkout with Stripe
- Nationwide shipping

### 🪞 Virtual Try-On (AI)
- Hair color simulator
- Makeup virtual try-on
- Skin tone analyzer
- Before/After gallery
- AR technology integration

### 👩‍💼 Salon Management
- Dashboard for salon owners
- Service management
- Staff scheduling
- Revenue analytics
- Customer reviews

### 💳 Payments
- Stripe integration
- Multiple payment methods
- Secure transactions
- Refund management
- Invoice generation

---

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS
- **State**: Zustand
- **Backend**: Node.js + Express (sbcore)
- **Database**: Firestore
- **Auth**: Firebase Authentication
- **Payment**: Stripe
- **Storage**: Google Cloud Storage
- **Deployment**: Firebase Hosting + Cloud Run

---

## 📦 Installation

### 1. Clone Repository
```bash
git clone https://github.com/sbr-empire/sbrbeautyhub.com.git
cd sbrbeautyhub.com
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
```bash
cp .env.example .env.local
# Edit .env.local with your credentials
```

### 4. Start Development
```bash
npm run dev
```

App runs on: `http://localhost:5173`

---

## 🔑 Environment Variables

```
REACT_APP_SBCORE_API=https://sbr-core-api.run.app
REACT_APP_FIREBASE_API_KEY=your_key
REACT_APP_FIREBASE_PROJECT_ID=your_project
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_key
```

---

## 📚 API Endpoints (via sbcore)

### Products
```
GET    /api/db/products
POST   /api/db/products
GET    /api/db/products/:id
PUT    /api/db/products/:id
DELETE /api/db/products/:id
```

### Salons
```
GET    /api/db/salons
GET    /api/db/salons/:id
POST   /api/db/salons
PUT    /api/db/salons/:id
```

### Bookings
```
GET    /api/db/bookings/slots
POST   /api/db/bookings
GET    /api/db/bookings/user
PUT    /api/db/bookings/:id
```

### Payments
```
POST   /api/payments/create-intent
POST   /api/payments/confirm
POST   /api/payments/refund
```

---

## 🏗️ Project Structure

```
src/
├── components/        # Reusable React components
├── pages/            # Page components
├── services/         # API & external services
├── store/            # Zustand state management
├── config/           # Firebase & API config
├── styles/           # TailwindCSS styles
└── App.jsx          # Main app component
```

---

## 💡 Key Features Implementation

### Authentication
- Firebase Email/Password auth
- Google Sign-In
- Profile management
- Role-based access (user/salon/admin)

### Booking System
- Real-time availability
- Slot management
- Automated confirmations
- Reminder notifications
- Review system

### Payment Processing
- Stripe integration
- Secure checkout
- Multiple currencies
- Invoice generation
- Refund handling

### Analytics
- User behavior tracking
- Revenue reports
- Booking trends
- Popular services
- Customer reviews analysis

---

## 🔒 Security

- ✅ Firebase security rules
- ✅ JWT authentication
- ✅ CORS configuration
- ✅ Environment variable protection
- ✅ Stripe PCI compliance
- ✅ Input validation
- ✅ Rate limiting

---

## 📱 Responsive Design

- Mobile-first approach
- Tablet optimization
- Desktop experience
- Cross-browser compatibility
- Progressive Web App (PWA) ready

---

## 🚀 Deployment

### Firebase Hosting
```bash
npm run build
firebase deploy
```

### Environment Setup
```bash
firebase init hosting
firebase deploy --only hosting
```

---

## 📞 Support

For issues and questions:
- GitHub Issues: [Report Bug](https://github.com/sbr-empire/sbrbeautyhub.com/issues)
- Documentation: [SBR Docs](https://docs.sbr-empire.com)

---

## 📄 License

Copyright 2024 SBR Empire. All rights reserved.

---

**Built with ❤️ for 300 years of civilizational excellence.**
