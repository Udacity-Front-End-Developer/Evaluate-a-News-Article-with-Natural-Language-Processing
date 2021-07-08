const supertest = require('supertest');
const app = require('../src/server/app.js');

// import { getData } from '../src/client/js/getData.js';

describe('Post to /analyse', () => {
	test('it should respond with a data object', async () => {
		const response = await supertest(app)
			.get('/test')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200);
		expect(response.body).toEqual({});
	});
});
