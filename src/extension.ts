import * as vscode from '../.vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('extension.selectTheme', async () => {
    const theme = await vscode.window.showQuickPick([
      'Amber Theme',
      'Kaeya Theme',
      'Jean Theme'
    ], { placeHolder: 'Select a Genshin Impact Theme' });

    if (theme) {
      const config = vscode.workspace.getConfiguration('workbench');
      config.update('colorTheme', theme, vscode.ConfigurationTarget.Global);
    }
  });

  context.subscriptions.push(disposable);
}
