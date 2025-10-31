import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/menu', () => {
    return HttpResponse.json([
      { id: '1', name: 'Café', price: 150 },
      { id: '2', name: 'Té', price: 120 },
      { id: '3', name: 'Medialunas', price: 80 },
      { id: '4', name: 'Tostado', price: 200 },
    ]);
  }),

  http.post('/api/orders', async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(
      {
        id: Math.random().toString(36).substr(2, 9),
        status: 'confirmed',
        items: body,
        timestamp: new Date().toISOString(),
      },
      { status: 201 }
    );
  }),
];
