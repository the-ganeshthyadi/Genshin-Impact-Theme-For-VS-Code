import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand('genshin-impact-theme-pack.selectTheme', async () => {
    const theme = await vscode.window.showQuickPick([
      'Raiden Shogun Theme'
    //   'Kaeya Theme',
    //   'Jean Theme'
    ], { placeHolder: 'Select a Theme' });

    if (theme) {
      const config = vscode.workspace.getConfiguration('workbench');
      config.update('colorTheme', theme, vscode.ConfigurationTarget.Global);
    }
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
