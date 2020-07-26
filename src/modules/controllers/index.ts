import { Request, Response } from 'express';
import helper from '../helpers';
import { word } from '../../data';
export class WordController {
	startGame = (req: Request, res: Response) => {
		const { response, shuffled } = helper;
		let { number } = req.body;
		try {
			return res.status(200).json(
				response('data', {
					originalWord: word[number],
					shuffledWord: shuffled(word[number]),
					totalQuestions: word.length,
					remainingQuestions: word.length - number,
					allWords: word,
				})
			);
		} catch (error) {
			return res.status(500).json(
				response('error', {
					serverError: 'something wrong please try again later',
				})
			);
		}
	};
}
export default new WordController();
