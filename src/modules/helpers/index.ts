import { IGenerateResponse } from '../types';
export class WordsHelper {
	shuffled = (text: string) => {
		let shuffledText = text
			.split('')
			.sort(() => Math.random() - 0.5)
			.join('')
			.toLocaleLowerCase();
		return this.manualShuffle(shuffledText.split(''));
	};

	manualShuffle = (arr: Array<string>) => {
		var ctr = arr.length,
			temp,
			index;

		// While there are elements in the array
		while (ctr > 0) {
			// Pick a random index
			index = Math.floor(Math.random() * ctr);
			// Decrease ctr by 1
			ctr--;
			// And swap the last element with it
			temp = arr[ctr];
			arr[ctr] = arr[index];
			arr[index] = temp;
		}
		return arr.join('');
	};

	response = <T>(property: string, data: T): IGenerateResponse => {
		return {
			[property]: data,
		};
	};

}
export default new WordsHelper();
