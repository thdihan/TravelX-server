import express from 'express';
import { VotesController } from './votes.controller';

const router = express.Router();

router.post('/add', VotesController.addVote);

router.put('/update', VotesController.updateVote);

router.delete('/delete', VotesController.deleteVote);

router.get('/', VotesController.getVotes);

export const VotesRoute = router;
