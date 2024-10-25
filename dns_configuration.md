# DNS Configuration Instructions for paradoxtech.ca

## Replit Site Information
Your Replit site is currently hosted at: https://{replit-subdomain}.replit.app

## GoDaddy DNS Configuration Steps

1. Log in to your GoDaddy account
2. Navigate to your Domain settings for paradoxtech.ca
3. Find the DNS Management or DNS Records section
4. Add/Update the following DNS records:

### Required DNS Records

#### CNAME Record (Option 1 - Recommended)
- Type: CNAME
- Host: @
- Points to: {replit-subdomain}.replit.app
- TTL: 1 hour

#### A Record (Option 2 - Alternative)
If CNAME doesn't work for the root domain, use these settings:
- Type: A
- Host: @
- Points to: 35.190.27.91
- TTL: 1 hour

### WWW Subdomain
- Type: CNAME
- Host: www
- Points to: {replit-subdomain}.replit.app
- TTL: 1 hour

## Verification
After updating the DNS records:
1. Wait for DNS propagation (can take up to 48 hours)
2. Verify by visiting:
   - https://paradoxtech.ca
   - https://www.paradoxtech.ca

## Notes
- DNS propagation typically takes 15 minutes to 48 hours
- During propagation, the site may be intermittently accessible
- Keep the Replit project running for the domain to work

For assistance with DNS configuration, contact GoDaddy support or Paradox technical team at info@paradoxtech.ca
