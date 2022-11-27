import chalk from 'chalk';
import Response from './Response';

export default class ConsoleWriter {
    private readonly console: typeof console = console;
    private readonly chalk: typeof chalk = chalk;

    forPath(path: string): this {
        this.console.log(this.chalk.black.bgGreen(path));
        return this;
    }

    handle(responses: Response[]): void {
        if (responses.length === 0) {
            this.console.log(this.chalk.red('No links found'));
            return;
        }

        this.console.log(this.chalk.yellow('Links:'));
        responses.forEach((response) => {
            this.console.table(response);
        });
    }
}