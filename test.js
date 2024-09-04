import test from 'ava';
import findahaiku from './index.js';


test('returns a valid haiku when input has 5-7-5 syllables', t => {
    const input = 'An old silent pond, a frog jumps into the pond! Splash; silence - again...';
    const expected = [
        'An old silent pond,',
        'a frog jumps into the pond!',
        'Splash; silence - again...'
    ];
    const result = findahaiku(input);
    t.deepEqual(result, expected);
});

test('returns empty array when input cannot form a haiku', t => {
    const input = 'This text does not have enough syllables';
    const result = findahaiku(input);
    t.deepEqual(result, []);
});

test('returns empty array when input is an empty string', t => {
    const input = '';
    const result = findahaiku(input);
    t.deepEqual(result, []);
});

test('returns empty array when input has too many syllables', t => {
    const input = 'This text has way too many syllables to ever form a haiku of any kind at all';
    const result = findahaiku(input);
    t.deepEqual(result, []);
});

test('returns a valid haiku when input has extra spaces but still valid 5-7-5 syllable pattern', t => {
    const input = ' An old silent pond,   a frog jumps into the pond!   Splash; silence - again... ';
    const expected = [
        'An old silent pond,',
        'a frog jumps into the pond!',
        'Splash; silence - again...'
    ];
    const result = findahaiku(input);
    t.deepEqual(result, expected);
});

test('returns empty array when input has random punctuation but not valid syllables', t => {
    const input = 'Random, text! with; odd punctuation.';
    const result = findahaiku(input);
    t.deepEqual(result, []);
});

test('handles haiku with various punctuation (commas, semicolons, ellipsis)', t => {
    const input = 'A world of dew drops; and within every drop, a world of struggle...';
    const expected = [
        'A world of dew drops;',
        'and within every drop,',
        'a world of struggle...'
    ];
    const result = findahaiku(input);
    t.deepEqual(result, expected);
});

test('handles haiku with punctuation at the beginning of lines', t => {
    const input = '!An old silent pond. A frog jumps in!Again,now. Splash - silence again.';
    const expected = [
        '!An old silent pond.',
        'A frog jumps in!Again,now.',
        'Splash - silence again.'
    ];
    const result = findahaiku(input);
    t.deepEqual(result, expected);
});

test('handles haiku with mixed punctuation and spacing', t => {
    const input = 'Autumn moonlight day; a worm digs silently now into the chestnut...';
    const expected = [
        'Autumn moonlight day;',
        'a worm digs silently now',
        'into the chestnut...'
    ];
    const result = findahaiku(input);
    t.deepEqual(result, expected);
});

test('handles haiku with punctuation and quotes', t => {
    const input = '"In the twilight rain," whispers the wind, stupidly. "frogs croak quietly."';
    const expected = [
        '"In the twilight rain,"',
        'whispers the wind, stupidly.',
        '"frogs croak quietly."'
    ];
    const result = findahaiku(input);
    t.deepEqual(result, expected);
});

test('returns a valid haiku when input has more than 5-7-5 syllables with strict option set to false', t => {
    const input = 'An old silent pond, a frog jumps into the pond! Splash; silence - again... Too bad!!';
    const expected = [
        'An old silent pond,',
        'a frog jumps into the pond!',
        'Splash; silence - again...'
    ];
    const result = findahaiku(input, { strict: false });
    t.deepEqual(result, expected);
});
