import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
	<div>
		<h1>no code pics</h1>
		<p>images are a bad way to share code.</p>
		<ol>
			<li>images are not accessible to those with visual impairments</li>
			<li>images can not be copied, pasted, and edited</li>
			<li>images can not be indexed and searched</li>
		</ol>
		<p>so what is the solution? code blocks!</p>
		<p>
			begin the codeblock with <b>THREE</b> backticks (<code>&#96;</code>). if you are on Slack, syntax highlighting is not supported, so
			you can immediately paste your code and send the message. on Discord and other platforms, you can include a language next to the
			backticks (i.e. go, typescript, json).
		</p>
	</div>
`;
