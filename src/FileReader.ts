import fs from 'fs';
import chalk from 'chalk';

export default class FileReader {
    private readonly encoding: BufferEncoding = 'utf8';
    protected fs: typeof fs = fs;
    protected chalk: typeof chalk = chalk;

    constructor(public readonly filePath: string) {
        this.filePath = filePath;
    }

    async handle(): Promise<string> {
        return await this.fs.promises.readFile(this.filePath, this.encoding);
    }
}
