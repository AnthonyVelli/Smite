'use strict';
import './gods.model';
import express from 'express';
import * as controller from './gods.controller';

const router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
export default router;