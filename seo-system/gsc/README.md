# Search Console Feedback Loop

Place exported Search Console CSV files in this folder. Files are intentionally not published.

Expected columns:

```csv
query,page,clicks,impressions,ctr,position
```

Run:

```powershell
npm.cmd run seo:audit
```

The audit script reads all `.csv` files in this folder and writes `seo-system/reports/gsc-action-plan.md`.

Action rules:

- High impressions and low CTR: revise title and meta description.
- Position 8-20: add useful content depth and internal links.
- Query exists but no matching page: consider a reviewed article draft.
- Page has impressions but zero clicks: improve title, first paragraph, and above-the-fold relevance.
