const express = require('express');
const csrf = require('csurf');
const vulnerabilityController = require('../controllers/vulnerabilityController');
const { uploadMiddleware, uploadFile } = require('../controllers/uploadController');

const defaultCsrfProtection = csrf({ cookie: true });

// Crear router base
const createRouter = (csrfProtection) => {
  const router = express.Router();
  
  const protection = csrfProtection || defaultCsrfProtection;

  // Command Injection
  router.post('/ping', vulnerabilityController.ping);

  // CSRF - Transferencia (protegida con CSRF)
  router.post('/transfer', protection, vulnerabilityController.transfer);

  // Local File Inclusion
  router.get('/file', vulnerabilityController.readFile);

  // File Upload
  router.post('/upload', uploadMiddleware, uploadFile);

  return router;
};

// Exportar como router por defecto (para compatibilidad con tests)
//module.exports = createRouter();

// También exportar como función
module.exports = createRouter;
