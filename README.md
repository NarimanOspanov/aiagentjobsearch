# Screenly — Azure Deployment Guide

## Local dev

```bash
npm install
npm run dev        # nodemon, auto-restarts on save
# open http://localhost:3000
```

## Deploy to Azure App Service

### Option A — Azure CLI (recommended)

```bash
# 1. Login
az login

# 2. Create resource group
az group create --name screenly-rg --location westeurope

# 3. Create App Service plan (free tier)
az appservice plan create \
  --name screenly-plan \
  --resource-group screenly-rg \
  --sku F1 \
  --is-linux

# 4. Create web app (Node 20)
az webapp create \
  --name screenly \
  --resource-group screenly-rg \
  --plan screenly-plan \
  --runtime "NODE:20-lts"

# 5. Set startup command
az webapp config set \
  --name screenly \
  --resource-group screenly-rg \
  --startup-file "node server.js"

# 6. Deploy from local folder
az webapp up \
  --name screenly \
  --resource-group screenly-rg \
  --runtime "NODE:20-lts"
```

App will be live at: `https://screenly.azurewebsites.net`

---

### Option B — GitHub Actions CI/CD

1. Push this repo to GitHub
2. In Azure Portal → App Service → Deployment Center
3. Select GitHub → your repo → branch `main`
4. Azure auto-generates `.github/workflows/azure.yml`
5. Every push to `main` deploys automatically

---

### Option C — VS Code

1. Install **Azure App Service** extension
2. Right-click project folder → **Deploy to Web App**
3. Follow prompts — select subscription, app name, Node version

---

## Environment variables

Set in Azure Portal → App Service → Configuration → Application settings,
or via CLI:

```bash
az webapp config appsettings set \
  --name screenly \
  --resource-group screenly-rg \
  --settings NODE_ENV=production
```

## Project structure

```
screenly/
├── server.js        # Express entry point
├── package.json
├── web.config       # Azure IIS → iisnode routing (Windows plan)
├── .gitignore
└── public/
    └── index.html   # Landing page
```

## Notes

- `process.env.PORT` is set automatically by Azure — do not hardcode port
- Use **Linux** App Service plan (cheaper, faster cold start for Node)
- Free tier (F1) has 60 min/day compute — upgrade to B1 for production
