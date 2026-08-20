# EXTERNAL CONFIGURATION GUIDE
## Orgits Business Solutions - Infrastructure & Third-Party Setup

**Version:** 1.0  
**Last Updated:** 2025-01-20  
**Purpose:** Document all configuration required OUTSIDE the codebase (DNS, environment variables, third-party services, etc.)

---

## 1. ENVIRONMENT VARIABLES (Vercel/Hosting Platform)

### Required Variables
| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `NEXT_PUBLIC_GA_ID` | **Yes** | Google Analytics 4 Measurement ID | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_SITE_URL` | No | Production site URL (auto-detected by Vercel) | `https://www.orgits.in` |

### Optional Variables
| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_GTM_ID` | No | Google Tag Manager Container ID |
| `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` | No | HubSpot Portal ID for forms |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | No | reCAPTCHA v3 site key for forms |

### Vercel Configuration
```bash
# In Vercel Dashboard → Settings → Environment Variables
# Add for: Production, Preview, Development
NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
```

---

## 2. DNS CONFIGURATION (Domain Provider)

### Required Records for `orgits.in` / `www.orgits.in`

| Type | Name | Value | TTL | Purpose |
|------|------|-------|-----|---------|
| A | @ | `76.76.21.21` | 3600 | Vercel IPv4 (or use Vercel's current IPs) |
| AAAA | @ | `2606:4700:4700::1111` | 3600 | Vercel IPv6 |
| CNAME | www | `cname.vercel-dns.com` | 3600 | Vercel subdomain |
| TXT | @ | `v=spf1 include:_spf.google.com ~all` | 3600 | SPF (Google Workspace) |
| TXT | _dmarc | `v=DMARC1; p=quarantine; rua=mailto:dmarc@orgits.in; ruf=mailto:dmarc@orgits.in; sp=quarantine; adkim=r; aspf=r` | 3600 | DMARC |

### Google Workspace (if using)
| Type | Name | Value | TTL |
|------|------|-------|-----|
| MX | @ | `ASPMX.L.GOOGLE.COM` | 3600 |
| MX | @ | `ALT1.ASPMX.L.GOOGLE.COM` | 3600 |
| MX | @ | `ALT2.ASPMX.L.GOOGLE.COM` | 3600 |
| MX | @ | `ALT3.ASPMX.L.GOOGLE.COM` | 3600 |
| MX | @ | `ALT4.ASPMX.L.GOOGLE.COM` | 3600 |
| TXT | google._domainkey | `v=DKIM1; k=rsa; p=...` | 3600 |

### Vercel-Specific (if using Vercel DNS)
| Type | Name | Value |
|------|------|-------|
| A | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

> **Note:** Vercel provides current IPs in Dashboard → Settings → Domains. Use those instead of hardcoded IPs above.

---

## 3. EMAIL CONFIGURATION (Google Workspace / Microsoft 365 / Other)

### Provider: Google Workspace (Recommended)
```
Admin Console → Apps → Google Workspace → Gmail → Authenticate email
1. Generate DKIM key (2048-bit)
2. Add TXT record: google._domainkey.orgits.in
3. Wait 24-48 hours, then "Start Authentication"
```

### SPF Record (Already in DNS)
```
v=spf1 include:_spf.google.com ~all
```

### DKIM Setup
```
Host: google._domainkey
Type: TXT
Value: v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

### DMARC Record
```
Host: _dmarc
Type: TXT
Value: v=DMARC1; p=quarantine; rua=mailto:dmarc@orgits.in; ruf=mailto:dmarc@orgits.in; sp=quarantine; adkim=r; aspf=r; fo=1
```

### Microsoft 365 (Alternative)
```
SPF: v=spf1 include:spf.protection.outlook.com -all
DKIM: Enable in Exchange Admin → Protection → DKIM
DMARC: Same as above
```

### Custom SMTP (SendGrid, Mailgun, etc.)
| Variable | Value |
|----------|-------|
| SMTP_HOST | smtp.sendgrid.net |
| SMTP_PORT | 587 |
| SMTP_USER | apikey |
| SMTP_PASS | SG.xxxxxxxxxxxx |
| FROM_EMAIL | hello@orgits.in |
| FROM_NAME | Orgits Business Solutions |

---

## 4. GOOGLE ANALYTICS 4 SETUP

### GA4 Property Creation
1. Go to https://analytics.google.com
2. Admin → Create Property
3. Property name: "Orgits Business Solutions"
3. Reporting timezone: Asia/Kolkata (UTC+5:30)
4. Currency: INR
5. Enhanced Measurement: ON (scrolls, video plays, file downloads, form interactions)

### Data Stream (Web)
1. Data Streams → Web
2. URL: `https://www.orgits.in`
3. Enhanced Measurement: ON
4. Copy **Measurement ID** (G-XXXXXXXXXX)
5. Add to Vercel: `NEXT_PUBLIC_GA_ID`

### Events to Track (via gtag)
```javascript
// Contact form
gtag('event', 'form_submit', { form_name: 'contact' });

// CTA clicks
gtag('event', 'cta_click', { cta_name: 'contact_hero' });

// Phone/Email clicks
gtag('event', 'contact_click', { method: 'phone' });
gtag('event', 'contact_click', { method: 'email' });

// Service page views
gtag('event', 'service_view', { service: 'digital-marketing' });

// Mega menu interactions
gtag('event', 'mega_menu_open', { category: 'technology' });
```

### Conversions to Mark
- `form_submit` (Contact form)
- `phone_click` (Phone link clicks)
- `email_click` (Email link clicks)
- `cta_click` (Primary CTA buttons)

---

## 5. GOOGLE TAG MANAGER (Optional)

### Container Setup
1. Create container: "Orgits Website"
2. Target platform: Web
3. Install via GA4 tag in GTM (recommended)

### Tags to Configure
| Tag Type | Trigger | Configuration |
|----------|---------|---------------|
| GA4 Configuration | All Pages | Measurement ID: `{{GA_ID}}` |
| GA4 Event - Contact Form | Form Submission | Event: `form_submit` |
| GA4 Event - Phone Click | Click - tel: links | Event: `phone_click` |
| GA4 Event - Email Click | Click - mailto: links | Event: `email_click` |
| GA4 Event - CTA Click | Click - .thm-btn | Event: `cta_click` |

---

## 6. GOOGLE SEARCH CONSOLE

### Property Setup
1. https://search.google.com/search-console
2. Add Property → Domain: `orgits.in`
3. Verify via DNS TXT record (provided by GSC)

### Sitemap Submission
1. GSC → Sitemaps
2. Add: `https://www.orgits.in/sitemap.xml`
3. Submit

### Indexing Requests
- Request indexing for: `/`, `/services`, `/about`, `/digital-marketing`, `/services/*`
- Use URL Inspection tool for new pages

---

## 7. BING WEBMASTER TOOLS

### Property Setup
1. https://www.bing.com/webmasters
2. Add Site: `https://www.orgits.in`
3. Verify via meta tag or CNAME

### Sitemap
- Submit: `https://www.orgits.in/sitemap.xml`
- Enable automatic submission

---

## 8. SOCIAL MEDIA PROFILES (For Schema & Links)

### Required Profiles
| Platform | URL | Status |
|----------|-----|--------|
| LinkedIn | `https://www.linkedin.com/company/orgits` | ✅ Primary |
| Twitter/X | `https://twitter.com/orgits` | ⚠️ Create |
| Facebook | `https://www.facebook.com/orgits` | ⚠️ Create |
| Instagram | `https://www.instagram.com/orgits` | ⚠️ Create |
| YouTube | `https://www.youtube.com/@orgits` | ⚠️ Create |

### Schema.org SameAs Array
```json
"sameAs": [
  "https://www.linkedin.com/company/orgits",
  "https://twitter.com/orgits",
  "https://www.facebook.com/orgits",
  "https://www.instagram.com/orgits",
  "https://www.youtube.com/@orgits"
]
```

---

## 9. SSL / TLS (Vercel Automatic)

### Vercel (Automatic)
- SSL provisioned automatically on deploy
- HTTP → HTTPS redirect enabled by default
- HSTS enabled via CSP headers

### Custom Domain SSL (if not Vercel)
```
Provider: Let's Encrypt / Cloudflare / DigiCert
Auto-renewal: Enabled
HSTS: max-age=31536000; includeSubDomains; preload
```

---

## 10. CONTENT DELIVERY NETWORK (CDN)

### Vercel Edge Network (Default)
- Automatic global edge caching
- Static assets cached at edge
- No configuration needed

### Optional: Cloudflare (If Needed)
| Setting | Value |
|---------|-------|
| Proxy Status | Proxied (Orange Cloud) |
| SSL/TLS | Full (Strict) |
| Always Use HTTPS | On |
| Automatic HTTPS Rewrites | On |
| Brotli Compression | On |
| Early Hints | On |
| Cache Level | Standard |
| Browser Cache TTL | 1 year |
| Development Mode | Off |

---

## 11. FORM HANDLING (Contact Form)

### Current Implementation
- Form submits to: `assets/inc/sendemail.php` (legacy PHP)
- **Action Required:** Replace with modern solution

### Recommended: Vercel Serverless Function
```javascript
// api/contact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  
  const { name, email, phone, subject, message } = req.body;
  
  // Validate
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  // Send via SendGrid / Resend / Nodemailer
  await sendEmail({
    to: 'hello@orgits.in',
    subject: `Contact: ${subject}`,
    html: `<p>From: ${name} (${email})</p><p>Phone: ${phone}</p><p>${message}</p>`
  });
  
  res.json({ success: true });
}
```

### Alternative: Formspree / Netlify Forms / Typeform
- Formspree: `https://formspree.io/f/xxxxxxxx`
- Netlify Forms: Add `data-netlify="true"` to form
- Typeform: Embed URL

---

## 12. MONITORING & ALERTING

### Uptime Monitoring
| Service | Free Tier | Setup |
|---------|-----------|-------|
| UptimeRobot | 50 monitors | https://uptimerobot.com |
| Better Uptime | 10 monitors | https://betteruptime.com |
| Pingdom | Paid | https://pingdom.com |

### Alert Channels
- Email: `alerts@orgits.in`
- Slack: `#alerts` webhook
- SMS: For critical alerts only

### Key Metrics to Monitor
| Metric | Threshold | Alert |
|--------|-----------|-------|
| Uptime | < 99.9% | Critical |
| Response Time | > 3s | Warning |
| SSL Expiry | < 30 days | Warning |
| Build Failures | Any | Critical |
| Core Web Vitals (LCP) | > 2.5s | Warning |

---

## 12. BACKUP & DISASTER RECOVERY

### Code Repository
- GitHub: Primary (private repo)
- Mirror: GitLab / Bitbucket (optional)

### Database (If Applicable)
- N/A - Static site, no database

### Asset Backup
- Images: Stored in Git + Vercel
- Fonts: In repository
- Config: In repository

---

## 13. COMPLIANCE & LEGAL

### Required Pages
| Page | URL | Status |
|------|-----|--------|
| Privacy Policy | `/privacy` | ⚠️ Create |
| Terms of Service | `/terms` | ⚠️ Create |
| Cookie Policy | `/cookie-policy` | ⚠️ Create |
| GDPR Compliance | - | ✅ (No EU data) |

### Cookie Consent (If Needed)
```javascript
// If using analytics cookies
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied'
});
```

---

## 14. PERFORMANCE BUDGET (Targets)

| Metric | Budget | Current |
|---------|--------|---------|
| Total JS | < 170 KB | ~200 KB |
| Total CSS | < 50 KB | ~80 KB |
| Total Images | < 500 KB | ~2 MB |
| Fonts | < 50 KB | ~120 KB |
| Third-party | < 50 KB | ~100 KB |
| **Total** | **< 500 KB** | **~500 KB** |

### Optimization Targets
- Enable Vercel Image Optimization
- Convert all images to WebP/AVIF
- Subset fonts to used characters
- Remove unused CSS/JS

---

## 15. DEPLOYMENT CHECKLIST

### Pre-Deploy
- [ ] All environment variables set in Vercel
- [ ] DNS records propagated (check with `dig`)
- [ ] SSL certificate active
- [ ] GA4 property created and ID added
- [ ] Search Console property verified
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Contact form tested
- [ ] Mobile menu tested
- [ ] Mega menus tested on desktop/tablet
- [ ] 404 page works
- [ ] Social sharing previews work (Facebook Debugger, Twitter Card Validator)

### Post-Deploy
- [ ] Submit sitemap to GSC
- [ ] Request indexing for key pages
- [ ] Test contact form end-to-end
- [ ] Verify GA4 real-time reports
- [ ] Check Core Web Vitals in PageSpeed Insights
- [ ] Monitor uptime for 24h
- [ ] Verify email deliverability (SPF/DKIM/DMARC)

---

## 16. CONTACT INFORMATION FOR EXTERNAL SETUP

| Role | Contact | Responsibility |
|------|---------|----------------|
| DevOps / Vercel | Internal | Deployment, env vars, domains |
| IT / Email Admin | Internal | DNS, SPF/DKIM/DMARC, email |
| Marketing | Internal | GA4, GSC, social profiles |
| Legal | External | Privacy policy, terms, cookies |
| DNS Provider | Vercel/GoDaddy/Cloudflare | DNS records, SSL |

---

## 17. QUICK REFERENCE: KEY URLS

| Service | URL |
|---------|-----|
| Vercel Dashboard | https://vercel.com/dashboard |
| Google Analytics | https://analytics.google.com |
| Google Search Console | https://search.google.com/search-console |
| Bing Webmaster | https://www.bing.com/webmasters |
| Google Tag Manager | https://tagmanager.google.com |
| Facebook Debugger | https://developers.facebook.com/tools/debug |
| Twitter Card Validator | https://cards-dev.twitter.com/validator |
| DNS Checker | https://dnschecker.org |
| SSL Checker | https://www.ssllabs.com/ssltest |
| PageSpeed Insights | https://pagespeed.web.dev |
| Core Web Vitals | https://web.dev/vitals |

---

## 18. EMERGENCY CONTACTS

| Issue | Contact | Method |
|-------|---------|--------|
| Site Down | DevOps On-Call | Phone + Slack |
| Email Down | IT Admin | Phone + Email |
| Security Incident | Security Lead | Phone + Slack |
| DNS Issues | DNS Provider Support | Ticket + Phone |
| Vercel Issues | Vercel Support | Dashboard Ticket |

---

**Document Location:** `/external.md` in repository  
**Review Cycle:** Quarterly or after major infrastructure changes  
**Owner:** DevOps Team