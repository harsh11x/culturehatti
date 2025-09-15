# 🚀 Indian Heritage E-commerce Store

A complete, fully-featured e-commerce store for Indian heritage products including jewelry, bags, and kids' toys with local storage and no complex setup required.

## ✨ **Features**

✅ **Complete E-commerce**: Products, cart, checkout, orders  
✅ **Payment Processing**: Razorpay + Cash on Delivery  
✅ **Order Management**: Admin panel with order tracking  
✅ **User Management**: Firebase authentication  
✅ **Responsive Design**: Works on all devices  
✅ **Local Storage**: No AWS setup needed - works immediately  

## 🚀 **Quick Start**

### 1. Start the Server
```bash
./START_SERVER.sh
```

That's it! The script will:
- Kill any existing processes
- Install dependencies if needed
- Create data files automatically
- Start the Next.js server
- Show you all the URLs

### 2. Access Your Store
- **Frontend**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin
- **User Orders**: http://localhost:3000/orders
- **Cart**: http://localhost:3000/cart
- **Checkout**: http://localhost:3000/checkout

## 🔧 **What Works Out of the Box**

### Customer Features
- Browse products by category (Men, Women, Kids, Jutti, Phulkari)
- Add items to cart
- Secure checkout with multiple payment options
- Order tracking and history
- Responsive mobile design

### Admin Features
- Product management
- Order management with status updates
- Real-time order tracking
- Customer order history
- Analytics dashboard

### Technical Features
- Local file storage (data/orders.json, data/products.json)
- Automatic fallback systems
- Secure payment processing
- User authentication
- Responsive UI components

## 📁 **Data Storage**

All data is stored locally in the `data/` directory:
- `orders.json` - Customer orders
- `products.json` - Product catalog
- `carts.json` - Shopping cart data

## 💳 **Payment Setup**

### Razorpay (Online Payments)
Add to `.env.local`:
```bash
RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=your-razorpay-key-id
```

### Cash on Delivery
Works immediately - no setup needed!

## 🔐 **Admin Access**

Default admin credentials:
- **Email**: harshdevsingh2004@gmail.com
- **Password**: admin123

**Change these in production!**

## 🚨 **Troubleshooting**

### Port Already in Use
The script automatically handles this by killing existing processes.

### Build Errors
```bash
npm run build
```

### Dependencies Issues
```bash
npm install
```

### Data Files Missing
The script creates them automatically, but you can manually create:
```bash
mkdir -p data
echo "[]" > data/orders.json
echo "[]" > data/products.json
echo "[]" > data/carts.json
```

## 🌐 **Production Deployment**

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 **Mobile Responsiveness**

The store is fully responsive and works perfectly on:
- Desktop computers
- Tablets
- Mobile phones
- All screen sizes

## 🎯 **Product Categories**

- **Men**: Traditional men's wear
- **Women**: Traditional women's wear  
- **Kids**: Children's traditional clothing
- **Jutti**: Traditional footwear
- **Phulkari**: Embroidered textiles

## 🔍 **Search & Filtering**

- Product search by name
- Category filtering
- Price range filtering
- Size and color options

## 📊 **Admin Analytics**

- Order statistics
- Revenue tracking
- Product performance
- Customer insights

## 🎉 **You're Ready!**

Your Punjabi Heritage E-commerce Store is now:
- ✅ **Fully functional** with all features
- ✅ **No complex setup** required
- ✅ **Local storage** working immediately
- ✅ **Payment processing** ready
- ✅ **Admin panel** accessible
- ✅ **Mobile responsive** design

**Happy selling! 🎉**

---

*Need help? Check the console output or restart with `./START_SERVER.sh`*
