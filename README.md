# Apex Hair Salon

Co-branded **COTGI** hair salon demo platform — multi-tenant brand packs with shareable `/demo/<slug>` URLs for local outreach.

Sister vertical to [apex-barber-club](https://github.com/selaho/apex-barber-club). Same shell architecture; salon-specific theme, services, and catalog (`vertical: hair_salon`).

## Live demos

| Salon | Path |
| --- | --- |
| Carol and Betty's Salon | `/demo/carol-and-bettys` |
| The Buckhead Hair Company | `/demo/buckhead-hair` |
| Apex Hair Studio (reference) | `/demo/apex` |

Hub: `/`  
Catalog API: `/api/demo-catalog`  
Static manifest: `/demo-manifest.json`

## Stack

- Next.js (App Router) + React + TypeScript + Tailwind
- Tenant brand packs in `src/tenants/`
- Theme via CSS variables per shop

## Local

```bash
npm install
npm run dev
```

## Adding a prospect salon

1. Add media under `public/tenants/<slug>/`
2. Create `src/tenants/<slug>.ts`
3. Register in `src/tenants/index.ts` (`TENANTS` + `DEMO_TENANT_IDS`)
4. Update `public/demo-manifest.json` if used offline

## Vertical registry (Local Prospecting)

| Vertical | Base URL | Path | Catalog |
| --- | --- | --- | --- |
| `hair_salon` | `https://apex-hair-salon.vercel.app` | `/demo/{slug}` | `/api/demo-catalog` |
