// Simple script to register and login a test user against the local server
// Usage: node test-auth.js

const base = 'http://localhost:5000/api/auth';

const payload = {
  name: 'Auto Tester',
  email: 'test+auto@test.local',
  password: 'Password123'
};

async function run() {
  try {
    console.log('Registering user...');
    const reg = await fetch(base + '/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const regBody = await reg.text();
    console.log('Register status:', reg.status);
    try { console.log('Register response:', JSON.parse(regBody)); } catch (e) { console.log(regBody); }

    console.log('\nLogging in...');
    const login = await fetch(base + '/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: payload.email, password: payload.password })
    });

    const loginBody = await login.text();
    console.log('Login status:', login.status);
    try { console.log('Login response:', JSON.parse(loginBody)); } catch (e) { console.log(loginBody); }
  } catch (err) {
    console.error('Request failed:', err && err.stack ? err.stack : err);
  }
}

run();
