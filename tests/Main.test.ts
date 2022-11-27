import Main from '../src/Main';
import fs from 'fs';

it('can have its file paths set as a list of a single file when given a path to a file', () => {
    fs.writeFileSync("files/test.txt", "Hello World!");
    const main = new Main();
    main.make('files/test.txt');
    expect(main.filePath).toContain('files/test.txt');
});

it('can have its file paths set as a list of files when given a path to a directory', () => {
    fs.writeFileSync("files/test.txt", "Hello World!");
    fs.writeFileSync("files/test2.txt", "Hello World!");
    const main = new Main();
    main.make('files');
    expect(main.filePath).toContain('files/test.txt');
    expect(main.filePath).toContain('files/test2.txt');

    fs.unlinkSync("files/test.txt");
    fs.unlinkSync("files/test2.txt");
});
