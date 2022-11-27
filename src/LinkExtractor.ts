export default class LinkExtractor {
    private readonly regex: RegExp = /https?:\/\/[^\s)]+/g;

    handle(text: string): string[] {
        return text.match(this.regex) || [];
    }
}
