export declare class Content {
    private readonly content;
    get value(): string;
    validateContentLength(content: string): boolean;
    constructor(content: string);
}
