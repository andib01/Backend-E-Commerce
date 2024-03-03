import e from 'express';
import Express from 'express';
const router = Express.Router();

router.get('/products', (req, res) => {
  res.sendStatus(200); // TODO #2
});

export default router;
