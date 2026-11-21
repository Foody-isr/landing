import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';

// Synthetic public API for the marketing smoke suite. No database or provider calls.
const grid = JSON.parse(readFileSync(new URL('../src/lib/marketing/offer-grid.json', import.meta.url)));
const name = (en, fr, he) => ({ en, fr, he });
const capabilities = [
  { key: 'pos', name: name('POS', 'Caisse', 'קופה') },
  { key: 'qr_dine_in', name: name('Table QR', 'QR à table', 'QR בשולחן') },
  { key: 'website', name: name('Ordering website', 'Site de commande', 'אתר הזמנות') },
  { key: 'kitchen_workspace', name: name('Kitchen workspace', 'Espace cuisine', 'סביבת מטבח') },
];
const included = { pos: 2, chef: 0, kds: 0, employees: 3, pos_devices: 1 };
const products = Object.entries(grid.plans).map(([id, product]) => ({
  id, name: product.name,
  // Deliberately different from the static grid: prove that Pricing uses the API.
  monthly_minor: (grid.rates[id] + 7) * 100,
  included: id === 'restaurant' ? included : { ...included, pos: 0, chef: id === 'kitchen' ? 1 : 0 },
  capabilities: id === 'restaurant' ? ['pos', 'qr_dine_in'] : [id === 'ordering' ? 'website' : 'kitchen_workspace'],
}));
const tariffs = Object.entries({ ...grid.rates, ...grid.payments })
  .filter(([id]) => id !== 'extraPOSDevice' && !products.some(product => product.id === id))
  .map(([id, value]) => ({
    id, name: name(id, id, id), unit: id === 'virtualIncludedTransactions' ? 'quantity' : 'once',
    amount_minor: id === 'virtualIncludedTransactions' ? null : Math.round(value * 100),
    ...(id === 'virtualIncludedTransactions' ? { quantity: value } : {}),
  }));
tariffs.push({ id: 'extraEmployee', name: name('Additional employee', 'Employé supplémentaire', 'עובד נוסף'), unit: 'employee_month', amount_minor: 3100 });
tariffs.push({ id: 'extraPOSDevice', name: name('Additional POS device', 'Poste POS supplémentaire', 'עמדת קופה נוספת'), unit: 'device_month', amount_minor: null });
const catalogue = { version: 'synthetic-smoke', revision: 1, currency: 'ILS', capabilities, products, tariffs,
  plans: [{ id: 'synthetic-team', name: name('Synthetic team', 'Équipe de test', 'צוות לבדיקה'), monthly_minor: 99000,
    modules: ['restaurant', 'ordering'], included, capabilities: ['pos', 'qr_dine_in', 'website'], published: true }] };
const server = createServer((request, response) => {
  if (request.method !== 'GET' || request.url !== '/api/v1/public/foody-catalog') {
    response.writeHead(404).end(); return;
  }
  response.writeHead(200, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }).end(JSON.stringify(catalogue));
});
server.listen(3109, '127.0.0.1');
for (const signal of ['SIGTERM', 'SIGINT']) process.on(signal, () => server.close());
