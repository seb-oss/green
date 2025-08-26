type TemplateOptions = {
        header: string;
        options: {
                imports?: string[];
        };
};

export default ({ header, options }: TemplateOptions): string => `${header}
        const imports = options.imports
                ? options.imports.map(item => `@_exported import ${item}`).join('')
                : '';
        return 
${imports}`;
}