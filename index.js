import extractWords from 'extractwords';
import syllables from 'syllables';

const hasText = (str) => /[a-zA-Z]/.test(str);

export default function findahaiku(input, { strict = true } = {}) {
    if (typeof input !== 'string') {
        return [];
    }

    const haiku = [];
    const lineSyllables = [5, 7, 5];
    let currentLineIndex = 0;
    let currentLine = '';
    const words = extractWords(input, { punctuation: true });

    for (let word of words) {
        if (currentLineIndex >= lineSyllables.length && strict) return [];
        else if (currentLineIndex >= lineSyllables.length) return haiku;

        const wordSyllables = syllables(word);
        if ((!wordSyllables || wordSyllables <= 0) && hasText(word)) return [];

        lineSyllables[currentLineIndex] -= wordSyllables;
        currentLine += word;

        if (lineSyllables[currentLineIndex] < 0) {
            return [];
        } else if (lineSyllables[currentLineIndex] === 0) {
            haiku.push(currentLine);
            currentLine = '';
            currentLineIndex++;
        } else {
            // More words to come required to finish line, add a space before next word gets added
            currentLine += ' ';
        }
    }

    const noSyllablesLeft = lineSyllables.every((n) => n === 0);
    return noSyllablesLeft ? haiku : [];
}
