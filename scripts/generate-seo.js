const fs = require('fs');
const path = require('path');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function normalizeBaseUrl(homepage) {
  if (!homepage || typeof homepage !== 'string') return '';
  // CRA homepage can be a URL or a path. We only support absolute URLs for sitemap/robots.
  if (!/^https?:\/\//i.test(homepage)) return '';
  return homepage.replace(/\/$/, '');
}

function writeFile(outPath, content) {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, content, 'utf8');
}

function generateSitemapXml(baseUrl) {
  const now = new Date().toISOString();
  const loc = baseUrl ? `${baseUrl}/` : '';

  if (!loc) {
    return `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<!-- sitemap.xml not generated with an absolute base URL. Set package.json \\"homepage\\" to an https:// URL. -->\n`;
  }

  return (
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `  <url>\n` +
    `    <loc>${loc}</loc>\n` +
    `    <lastmod>${now}</lastmod>\n` +
    `    <changefreq>monthly</changefreq>\n` +
    `    <priority>1.0</priority>\n` +
    `  </url>\n` +
    `</urlset>\n`
  );
}

function generateRobotsTxt(baseUrl) {
  const sitemapLine = baseUrl ? `Sitemap: ${baseUrl}/sitemap.xml\n` : '';

  return (
    `User-agent: *\n` +
    `Allow: /\n` +
    `\n` +
    sitemapLine
  );
}

function main() {
  const repoRoot = path.resolve(__dirname, '..');
  const pkg = readJson(path.join(repoRoot, 'package.json'));
  const baseUrl = normalizeBaseUrl(pkg.homepage);

  const publicDir = path.join(repoRoot, 'public');
  writeFile(path.join(publicDir, 'sitemap.xml'), generateSitemapXml(baseUrl));
  writeFile(path.join(publicDir, 'robots.txt'), generateRobotsTxt(baseUrl));

  // eslint-disable-next-line no-console
  console.log(`[seo] Wrote public/sitemap.xml and public/robots.txt (baseUrl=${baseUrl || 'none'})`);
}

main();
