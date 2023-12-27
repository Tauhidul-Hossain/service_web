const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

(async () => {
    const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
    const pages = await globby([
        'pages/*.js',
        'content/**/*.mdx',
        '!pages/_*.js',
        'pages/api'
    ]);

    const sitemap = `
    <?xml version="1.0" encoding = "UTF-8"
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <!--Base URL-->
    <url>
    <loc>https://app.gcncbd.com/</loc>
    </url>            ${pages}
            .map((page) => {
                const path = ""

    })        
    `
})();