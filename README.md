# syaheerdaniel.dev

My portfolio site. One static page, Tailwind CSS v4, served by Nginx on my VPS.

## Edit

```bash
npm install
npm run dev     # rebuilds public/assets/app.css while you edit public/index.html
npm run build   # minified CSS, commit it with your change
```

Push to `main` and GitHub Actions checks the CSS is built, then deploys over SSH (`deploy.sh` does a `git pull` on the server).
