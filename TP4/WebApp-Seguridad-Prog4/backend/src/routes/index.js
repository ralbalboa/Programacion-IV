const express = require('express');
const csrf = require('csurf');
const router = express.Router();

// Configurar CSRF protection
const csrfProtection = csrf({ cookie: true });

// CSRF Token endpoint - debe estar ANTES de las rutas protegidas
router.get('/csrf-token', csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});

// Importar todas las rutas
const authRoutes = require('./auth');
const productRoutes = require('./products');
const captchaRoutes = require('./captcha');

// Usar las rutas
router.use('/', authRoutes);
router.use('/', productRoutes);
router.use('/', captchaRoutes);

// Importar rutas de vulnerabilidades con CSRF
const vulnerabilityRoutes = require('./vulnerabilities');
router.use('/', vulnerabilityRoutes(csrfProtection));

// Ruta de prueba
router.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'API funcionando correctamente' });
});

module.exports = router;
