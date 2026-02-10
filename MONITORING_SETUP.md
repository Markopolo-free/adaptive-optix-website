# Low-Cost Production Monitoring Setup

## 1. Health Check Endpoint
✅ Created: `/api/health`
- Returns 200 if healthy, 503 if degraded
- Checks Sanity CMS connectivity
- Use this URL with uptime monitors

## 2. UptimeRobot Setup (FREE)

**Steps:**
1. Go to https://uptimerobot.com/
2. Sign up (free)
3. Add monitors:
   - **Main Site**: https://adaptive-optix.vercel.app (or your domain)
   - **Health Check**: https://adaptive-optix.vercel.app/api/health
   - **Sanity Studio**: https://adaptive-optix.vercel.app/studio
4. Set alert contacts (email/SMS)
5. Interval: 5 minutes (free tier)

## 3. Vercel Monitoring (FREE - Built-in)

**Enable:**
1. Go to Vercel Dashboard → Your Project
2. Analytics → Enable
3. Speed Insights → Enable
4. Logs → Set up log drains (optional)

**Set up notifications:**
1. Project Settings → Notifications
2. Enable deployment notifications
3. Add your email for build failures

## 4. Sentry Error Tracking (FREE tier)

**Setup:**
```bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
```

Add to `.env.local`:
```
NEXT_PUBLIC_SENTRY_DSN=your-dsn-here
SENTRY_AUTH_TOKEN=your-token-here
```

Free tier: 5,000 errors/month

## 5. Simple Log Monitoring

**Check Vercel logs daily:**
```bash
vercel logs [deployment-url] --limit 100
```

**Look for:**
- 500 errors
- Failed API calls to Sanity
- Unusual traffic patterns

## 6. Weekly Manual Checks

**Every Monday:**
- [ ] Browse main pages (home, products, solutions)
- [ ] Test contact form
- [ ] Check Sanity Studio access
- [ ] Review Vercel analytics

## 7. Cost Breakdown

| Service | Tier | Monthly Cost |
|---------|------|--------------|
| Vercel | Hobby | $0 |
| Sanity | Free | $0 |
| UptimeRobot | Free | $0 |
| Sentry | Free | $0 |
| **Total** | | **$0** |

## 8. When to Upgrade

Upgrade when you hit:
- \> 100k page views/month → Vercel Pro ($20)
- \> 5k errors/month → Sentry Team ($26)
- Need 1-min checks → UptimeRobot Pro ($7)

## 9. Alert Thresholds

**Immediate action:**
- Site down > 5 minutes
- Health check fails
- Sanity CMS unreachable

**Review within 24h:**
- Slow page loads (>3s)
- Build failures
- Elevated error rates

## 10. Emergency Contacts

**Vercel Support:**
- Dashboard: https://vercel.com/support
- Status: https://www.vercel-status.com/

**Sanity Support:**
- Slack: https://slack.sanity.io/
- Status: https://status.sanity.io/
