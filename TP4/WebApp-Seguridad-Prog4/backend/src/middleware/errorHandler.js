// Middleware para manejo de errores CSRF específico
const csrfErrorHandler = (err, req, res, next) => {
  if (err.code === 'EBADCSRFTOKEN') {
    return res.status(403).json({
      error: 'CSRF token validation failed'
    });
  }
  next(err);
};

// Middleware para manejo de errores global
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Manejar errores específicos de CSRF
  if (err.code === 'EBADCSRFTOKEN') {
    return res.status(403).json({
      error: 'CSRF token validation failed'
    });
  }

  // VULNERABLE: Expone detalles del error en producción
  res.status(err.status || 500).json({
    error: {
      message: err.message,
      // VULNERABLE: Expone el stack trace
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
      details: err
    }
  });
};

// Middleware para rutas no encontradas
const notFound = (req, res, next) => {
  const error = new Error(`No encontrado - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

module.exports = {
  errorHandler,
  csrfErrorHandler,
  notFound
};
