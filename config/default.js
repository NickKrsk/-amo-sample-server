module.exports = {
  apps: {
    'auth-server': {
      port: 8000,
      'redirect-uri': 'https://test3.services.mobilon.ru/',
    },
    'admin-web': {
      port: 33033,
    },
    api: {
      port: 3000,
    }
  },
  mongodb: 'mongodb+srv://sa:qwertyqwerty@cluster0.z9pze.mongodb.net/crmpad?',
};