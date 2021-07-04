declare global {
    namespace Prism {
        function highlight(data: string, grammar: string, lang: string): string;
        const languages: Record<string, string>;
    }
}
export {};
