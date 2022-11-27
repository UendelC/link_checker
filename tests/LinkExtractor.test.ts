import LinkExtractor from "../src/LinkExtractor";

it('returns a list of links of a string', () => {
    const links = (new LinkExtractor()).handle('https://www.google.com https://www.google.com');
    expect(links).toEqual(['https://www.google.com', 'https://www.google.com']);
});

it('returns an empty list if no links are found', () => {
    const links = (new LinkExtractor()).handle('Hello World!');
    expect(links).toEqual([]);
});