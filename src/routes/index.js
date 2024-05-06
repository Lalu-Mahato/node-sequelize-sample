const router = require('express').Router();

router.get('/health-check', async (req, res) => res.send({ message: 'App running... ' }));

module.exports = router;
