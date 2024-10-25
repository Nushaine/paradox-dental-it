# Deployment Guide for paradoxtech.ca

## 1. Website Deployment on Replit

### Prerequisites (Already Completed)
- Website codebase is set up in the Replit project
- Static files are organized in the `/static` directory
- Database configuration is complete
- Required Python packages are installed

### Starting the Website
1. Make sure you are logged into your Replit account
2. Open the project in Replit
3. Click the "Run" button at the top of the screen
4. Wait for the server to start (this may take a few moments)
5. Once running, your site will be accessible at: https://{replit-subdomain}.replit.app

### Keeping the Site Running
1. Replit will keep your site running as long as:
   - Your Replit account remains active
   - The project is not stopped manually
   - You have sufficient Replit resources
2. To ensure 24/7 uptime:
   - Consider upgrading to Replit's "Always On" feature
   - Monitor your project's status regularly

## 2. DNS Configuration

### Required Information
- Replit URL: https://{replit-subdomain}.replit.app
- Replit IP: 35.190.27.91

### GoDaddy DNS Settings
1. Log in to your GoDaddy account
2. Go to Domain Settings > DNS Management
3. Add these records:

#### Option 1: CNAME Record (Recommended)
- Type: CNAME
- Host: @
- Points to: {replit-subdomain}.replit.app
- TTL: 1 hour

#### Option 2: A Record (Alternative)
- Type: A
- Host: @
- Points to: 35.190.27.91
- TTL: 1 hour

#### WWW Subdomain (Required)
- Type: CNAME
- Host: www
- Points to: {replit-subdomain}.replit.app
- TTL: 1 hour

## 3. Verification Steps

1. Wait for DNS propagation (15 mins - 48 hours)
2. Test these URLs:
   - https://paradoxtech.ca
   - https://www.paradoxtech.ca
   - Your Replit subdomain URL

## 4. Troubleshooting

If the site is not accessible:
1. Check Replit Project Status:
   - Is the project running? (Green "Running" indicator)
   - Are there any error messages in the console?
2. Verify DNS Settings:
   - Are all DNS records correctly configured?
   - Has enough time passed for DNS propagation?
3. Contact Support:
   - Technical issues: info@paradoxtech.ca
   - DNS issues: GoDaddy support
   - Phone: 1-833-416-8324

## 5. Important Notes

- Keep the Replit project running continuously
- DNS changes can take up to 48 hours to propagate
- The site uses HTTPS by default through Replit
- Database backups are handled automatically
- Monitor the Replit console for any error messages
- For technical support, contact info@paradoxtech.ca

## 6. Regular Maintenance

1. Monitor website performance regularly
2. Check Replit logs for any issues
3. Keep Python packages updated
4. Perform regular database backups
5. Monitor DNS settings for any changes

For additional assistance, contact our technical team at info@paradoxtech.ca or call 1-833-416-8324.
