# UltraStar Play GitHub Pages
This website is created using [nextjs](https://nextjs.org/).

After installing [nodejs](https://nodejs.org/), you use the following commands:

- npm install
    - Install all required packages
- npm run dev
    - Compile and deploy the website for testing
- npm build
    - Run code style checks and compile the website for deployment.
- npm export
    - Create a static website from the last created build.
    - The output of this command can be found in the `out` folder. The content of the `out` folder is the website that will be deployed to GitHub Pages.
    - You can test the generated static website by deploying it locally using `npx http-server ./out`

## Translations
Internationalization (i18n) for the [UltraStar website](https://github.com/UltraStar-Deluxe/ultrastar-play.github.io) has been prepared using `.yml` files.

The files are located in `ultrastar-play.github.io/public/locales/`

Behind the scenes, next-i18next uses these files to generate static HTML pages for every language.

To add a new language, the file `next-i18next.config.js` needs to be edited, more specifically the `locales` array.