const app = require('./app');
const supertest = require('supertest');
const request = supertest(app);

describe('Test endpoint responses', () => {
    it('should return response', async () => {
        const response = await request.get('/demoApp');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Deployment successful to web app');
    });
});
