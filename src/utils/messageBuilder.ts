export class MessageBuilder {
    text: string;

    constructor() {
        this.text = '';
    }

    static formatAsBold(text: string) {
        return `*${text}*`;
    }

    static formatAsItalic(text: string) {
        return `_${text}_`;
    }
    static formatAsUnderlined(text: string) {
        return `~${text}~`;
    }

    static truncateString(input: string, maxLength: number): string {
        if (input.length <= maxLength) {
            return input;
        } else {
            return input.substring(0, maxLength - 3) + '...';
        }
    }

    addText(text: string, escape?: boolean) {
        this.text += escape ? `${this.escapeMarkdown(text)}\n` : `${text}\n`;
        return this;
    }

    addList(elements: string[]) {
        elements.forEach((el) => {
            let ele = `- ${el}\n`;
            let text = this.escapeMarkdown(ele);
            this.text += text;
        });
        return this;
    }

    build() {
        return this.text;
    }

    private escapeMarkdown(text: string): string {
        const escapedText = text.replace(/[-[\]|{}()+!`.,\\]/g, '\\$&');
        return escapedText;
    }
}
