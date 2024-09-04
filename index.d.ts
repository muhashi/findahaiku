export type Options = {
    /**
    Whether to only return if the entire given text is a haiku.

    If false, returns a haiku if the first part of the given text is a haiku.

    @default true
    */
    readonly strict?: boolean;
};

/**
Split up text into the lines of a haiku, if it is possible to split it up into lines of 5-7-5 syllables.

If a haiku cannot be made from the text, returns an empty list.

@param input - Text to generate haiku from
@returns A list of strings corresponding to the haiku line

@example
```
import findahaiku from 'findahaiku';

findahaiku('An old silent pond, a frog jumps into the pond! Splash; silence - again...');
//=> ['An old silent pond,', 'a frog jumps into the pond!', 'Splash; silence - again...']
```
*/
export default function findahaiku(input: string, options?: Options): string[];
