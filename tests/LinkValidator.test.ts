import LinkValidator from "../src/LinkValidator";
import Response from "../src/Response";

it('returns a link of response with status code based on a list of links', async () => {
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        status: 200
    }));

    const linkValidator = new LinkValidator(['https://www.google.com']);
    const responses = await linkValidator.handle();

    expect(responses).toEqual([new Response('https://www.google.com', 200)]);
});