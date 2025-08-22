# 🚀 Deploy Noctura Landing Page to GitHub Pages

## 📋 **Prerequisites**

1. **GitHub Repository**: Your code is in a GitHub repo
2. **Domain**: You own `noctura.ai` (or your preferred domain)
3. **DNS Access**: You can configure DNS records

## 🔧 **Step 1: Install Dependencies**

```bash
cd client/landing
npm install
```

## 🏗️ **Step 2: Build and Deploy**

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

This will:
- Build your project to the `dist/` folder
- Create a `gh-pages` branch
- Push the built files to GitHub

## 🌐 **Step 3: GitHub Pages Setup**

### **3.1 Enable GitHub Pages**
1. Go to your GitHub repository
2. **Settings** → **Pages**
3. **Source**: Select `gh-pages` branch
4. **Custom domain**: Enter `noctura.ai`
5. **Save**

### **3.2 Configure Custom Domain**
1. **Enforce HTTPS**: Check this box
2. **Custom domain**: Enter `noctura.ai`
3. **Save**

## 🔗 **Step 4: DNS Configuration**

### **4.1 Add DNS Records**
Add these records to your domain provider:

```
Type: CNAME
Name: @ (or leave blank)
Value: yourusername.github.io
TTL: 3600 (or default)

Type: CNAME
Name: www
Value: yourusername.github.io
TTL: 3600 (or default)
```

### **4.2 Verify DNS**
- Wait 5-10 minutes for DNS propagation
- Check: `dig noctura.ai` or use online DNS checker
- GitHub will show a green checkmark when DNS is correct

## 📧 **Step 5: Form Setup**

### **Option 1: Formspree (Recommended)**
1. Go to [formspree.io](https://formspree.io)
2. Create account and new form
3. Get your form ID
4. Update the form handler in `LandingPage.tsx`:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_ACTUAL_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email }),
})
```

### **Option 2: EmailJS**
1. Go to [emailjs.com](https://emailjs.com)
2. Set up email service
3. Update form handler accordingly

### **Option 3: Simple Mailto (Fallback)**
```typescript
const handleWaitlistSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  if (!email) {
    toast.error('Please enter your email address')
    return
  }
  
  // Open email client with pre-filled message
  const subject = encodeURIComponent('Noctura Waitlist Signup')
  const body = encodeURIComponent(`Please add ${email} to the Noctura waitlist.`)
  window.open(`mailto:contact@noctura.ai?subject=${subject}&body=${body}`)
  
  toast.success('Email client opened. Please send the email to join the waitlist!')
  setEmail('')
}
```

## 🔒 **Step 6: Security Verification**

### **6.1 Check Security Headers**
- Visit [securityheaders.com](https://securityheaders.com)
- Enter your domain: `https://noctura.ai`
- Verify security headers are working

### **6.2 Test Security.txt**
- Visit: `https://noctura.ai/security.txt`
- Should show your security contact information

## 🚀 **Step 7: Final Deployment**

```bash
# After making any changes
npm run build
npm run deploy
```

## ✅ **Verification Checklist**

- [ ] **GitHub Pages enabled** with `gh-pages` branch
- [ ] **Custom domain configured** in GitHub settings
- [ ] **DNS records added** and propagated
- [ ] **HTTPS enforced** (automatic with GitHub Pages)
- [ ] **Form working** with chosen email service
- [ ] **Security.txt accessible** at `/security.txt`
- [ ] **Site loads** at your custom domain

## 🎯 **Custom Domain Benefits**

- **Professional**: `noctura.ai` instead of `username.github.io`
- **Branding**: Consistent with your company identity
- **Trust**: Looks more professional for a security company
- **SEO**: Better search engine optimization
- **HTTPS**: Automatic SSL certificate

## 🔧 **Troubleshooting**

### **DNS Issues**
- Wait longer for propagation (can take up to 48 hours)
- Check DNS with `nslookup noctura.ai`
- Verify CNAME records are correct

### **Form Not Working**
- Check browser console for errors
- Verify form service is configured correctly
- Test with simple mailto fallback

### **Build Issues**
- Ensure all dependencies are installed
- Check for TypeScript errors
- Verify build output in `dist/` folder

## 🎉 **Success!**

Your Noctura landing page is now:
- ✅ **Hosted on GitHub Pages**
- ✅ **Custom domain configured**
- ✅ **HTTPS enabled**
- ✅ **Form functional**
- ✅ **Security headers active**
- ✅ **Professional appearance**

Visit `https://noctura.ai` to see your live landing page! 🚀✨ 