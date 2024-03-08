export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		const path = url.pathname;

		let prefix = path.slice(1);
		if (prefix === 'slack') prefix = '';
		else if (!languages.includes(prefix)) prefix = 'language';

		let codeblock = `
\`\`\`${prefix}
your code goes here
\`\`\`
`;

		return new HTMLRewriter().on('head', new MetaTagInserter(codeblock)).transform(await env.ASSETS.fetch(request));
	},
};

class MetaTagInserter {
	constructor(content) {
		this.content = content;
	}

	element(element) {
		element.append(`<meta property="og:description" content="${this.content.replace(/"/g, '&quot;')}" />`, { html: true });
	}
}

const languages = [
	'bash',
	'brainfuck',
	'sh',
	'zsh',
	'c',
	'h',
	'cpp',
	'c++',
	'csharp',
	'cs',
	'css',
	'dockerfile',
	'docker',
	'go',
	'golang',
	'html',
	'java',
	'javascript',
	'js',
	'json',
	'jsx',
	'kotlin',
	'kt',
	'markdown',
	'md',
	'php',
	'powershell',
	'ps',
	'python',
	'py',
	'ruby',
	'rb',
	'rust',
	'rs',
	'sql',
	'swift',
	'typescript',
	'ts',
	'tsx',
	'yaml',
	'yml',
];
