import FileReader from "../src/FileReader";
import fs from "fs";

test('the file path is constructed correctly', () => {
    const fileReader = new FileReader("src/Main.ts");
    expect(fileReader.filePath).toBe("src/Main.ts");
});

it('prints the content of a file', () => {
    fs.writeFileSync("test.txt", "Hello World!");
    const fileReader = new FileReader("test.txt");
    expect(fileReader.handle()).resolves.toBe("Hello World!");
});