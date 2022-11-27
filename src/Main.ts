#!/usr/bin/env node

import ConsoleWriter from "./ConsoleWriter";
import FileReader from "./FileReader";
import LinkExtractor from "./LinkExtractor";
import fs from "fs";
import LinkValidator from "./LinkValidator";

export default class Main {
    public filePath: string[] = [];

    public make(target: string): this {
        if (! fs.existsSync(target)){
            console.log("File not found in path: " + target);
            return this;
        }

        if (fs.lstatSync(target).isFile()) {
            this.filePath = [target];
        }

        if (fs.lstatSync(target).isDirectory()) {
            this.filePath = fs.readdirSync(target).map(file => `${target}/${file}`);
        }

        return this;

    }

    public async run(): Promise<void> {
        this.filePath.forEach(async file => {
            const content = await new FileReader(file).handle();
            const links = new LinkExtractor().handle(content);
            const linksStatus = await new LinkValidator(links).handle();
            new ConsoleWriter().forPath(file).handle(linksStatus);
        });
    }
}

new Main().make(process.argv[2]).run();
