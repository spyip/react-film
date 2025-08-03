import { format } from 'prettier';
import parserESTree from 'prettier/plugins/estree';
import parserTypeScript from 'prettier/plugins/typescript';

export default async function prettify(code: string): Promise<string> {
  return await format(code, {
    parser: 'typescript',
    plugins: [parserTypeScript, parserESTree],

    arrowParens: 'avoid',
    bracketSameLine: false,
    bracketSpacing: true,
    endOfLine: 'auto',
    printWidth: 80,
    proseWrap: 'preserve',
    quoteProps: 'as-needed',
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: 'none'
  });
}
