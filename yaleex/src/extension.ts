
import * as vscode from 'vscode';
import axios from 'axios'

export async function activate(context: vscode.ExtensionContext) {

	const url = "https://raw.githubusercontent.com/cbot918/cbot918/main/README.md"
	const res = await axios.get(url) 
	console.log(res.data)
	let users = [{"name":"yale", "job":"cook"},{"name":"node", "job":"coder"}]
	let disposable = vscode.commands.registerCommand('yaleex.test', async () => {

		const user = await vscode.window.showQuickPick(users, {
			matchOnDetail : true
		})


		vscode.window.showInformationMessage('Hello World from yaleEx!');
	});

	context.subscriptions.push(disposable);	
}

export function deactivate() {}
