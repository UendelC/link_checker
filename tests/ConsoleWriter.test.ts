import chalk from "chalk";
import ConsoleWriter from "../src/ConsoleWriter";
import Response from "../src/Response";

it('prints all the links in blue', () => {
    console.log = jest.fn();

    const consoleWriter = new ConsoleWriter();
    const responses = [
        new Response('https://www.google.com', 200),
        new Response('https://www.google.com', 404)
    ];
    consoleWriter.handle(responses);

    expect(console.log).toHaveBeenCalledTimes(3);
});

it('prints a message if no links are found', () => {
    console.log = jest.fn();

    const consoleWriter = new ConsoleWriter();
    consoleWriter.handle([]);

    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(chalk.red('No links found'));
});

it('prints the path in green', () => {
    console.log = jest.fn();

    const consoleWriter = new ConsoleWriter();
    consoleWriter.forPath('path/to/file').handle([]);

    expect(console.log).toHaveBeenCalledWith(chalk.black.bgGreen('path/to/file'));
});