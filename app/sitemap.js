const BASE = 'https://fairweightdmv.com';

export default function sitemap() {
  const routes = ['', '/prices', '/buy', '/about', '/area', '/contact'];
  const now = new Date();
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === '/prices' ? 'daily' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
