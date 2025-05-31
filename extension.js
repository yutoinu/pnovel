// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const PNOVEL_MODE = { scheme: 'file', language: 'pnovel'};
console.log("whio")
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/*
function helloWorld() { 
    vscode.window.showInformationMessage('Hello, world!')
}
*/

class PnovelCompletionItemProvider {
    provideCompletionItems(document, position, token) {
        const completionItems = [
			{
				label: 'chapter: ',
				kind: vscode.CompletionItemKind.Function
			},
			{
				label: 'newpage',
				kind: vscode.CompletionItemKind.Function
			},
			{
				label: 'uploadedimage: ',
				kind: vscode.CompletionItemKind.Function
			},
			{
				label: 'pixivimage: ',
				kind: vscode.CompletionItemKind.Function
			},
			{
				label: 'jump: ',
				kind: vscode.CompletionItemKind.Function
			},
			{
				label: '[jumpuri: ? ]',
				kind: vscode.CompletionItemKind.Function
			},
			{
				label: '[rb: > ]',
				kind: vscode.CompletionItemKind.Function
			}
        ];
        let completionList = new vscode.CompletionList(completionItems, false);
        return Promise.resolve(completionList);
    }
}


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "pnovel" is now active!');
	context.subscriptions.push(vscode.languages.registerCompletionItemProvider(PNOVEL_MODE, new PnovelCompletionItemProvider(), '['));
	
	

	//context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
