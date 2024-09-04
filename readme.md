# findahaiku

> Split up text into the lines of a haiku, if it is possible to split it up into lines of 5-7-5 syllables.

If a haiku cannot be made from the text, returns an empty list.

Uses the [CMU Pronouncing Dictionary]() (contains over 134k words, ~1MB packed) to test words for syllable counts. If a word is not in the dictionary, a haiku will not be able to be made.

## Install

```sh
npm install findahaiku
```

## Usage

```js
import findahaiku from 'findahaiku';

findahaiku('An old silent pond, a frog jumps into the pond! Splash; silence - again...');
//=> ['An old silent pond,', 'a frog jumps into the pond!', 'Splash; silence - again...']

findahaiku('Not a haiku!');
//=> []

findahaiku('This is much much much much much much much much much much much much much much much much much much much much too long to be a haiku.');
//=> []

findahaiku('This may be a real haiku, but it contains a word that is unknnnooooowwwwnnn!');
//=> []

findahaiku('This is much much much much much much much much much much much much much much much much much much much much too long to be a haiku.', { strict: false });
//=> ['This is much much much', 'much much much much much much much', 'much much much much much']
```

## API

### findahaiku(input, options?)

#### input

Type: `string`

Text to generate a haiku from.

#### options

Type: `object`

##### strict

Type: `boolean`\
Default: `true`

Whether to only return if the entire given text is a haiku.

If false, returns a haiku if the first part of the given text is a haiku.
