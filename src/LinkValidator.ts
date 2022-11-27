import Response from "./Response";

export default class LinkValidator {
    constructor(private links: string[]) {
    }

    async handle(): Promise<Response[]> {
        let responses: Response[] = [];

        for (const link of this.links) {
            responses.push(new Response(link, await this.check(link)));
        }

        return responses;
    }

    private async check(link: string): Promise<number> {
        return (await fetch(link)).status;
    }
}
