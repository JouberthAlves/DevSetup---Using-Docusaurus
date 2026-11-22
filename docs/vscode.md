---
sidebar_position: 7
---

# VS Code

One editor: **Visual Studio Code**. Quiet theme, JetBrains Mono, format on save with Prettier, Git Bash as the terminal. AI lives in [Claude](./claude-setup.md), not in editor chrome.

:::note Cursor users
Cursor is a VS Code fork and reads the same settings. Put the same JSON at `%APPDATA%\Cursor\User\settings.json` and install the extensions with `cursor --install-extension`. Remote extensions use the `anysphere.*` ids there.
:::

## 1. Install

```powershell
winget install --id Microsoft.VisualStudioCode -e
```

Or download it from [code.visualstudio.com](https://code.visualstudio.com). Then confirm the `code` command works in a **new** terminal:

```bash
code --version
```

## 2. Font

- **JetBrains Mono**, installed on Windows first (see [Apps → Fonts](./apps.md#3-fonts))
- Fallback: Fira Code
- Ligatures: on
- Size 14, line height 1.8

## 3. Theme and icons

- Color theme: **One Dark Pro Night Flat**
- File icons: **Symbols** (`miguelsolorio.symbols`)
- Product icons: **Fluent Icons** (`miguelsolorio.fluent-icons`)
- Activity bar: **top**
- Cursor colour: `#ffffffb5` (soft white, set in `workbench.colorCustomizations`)

## 4. Extensions

Install from the Extensions view, or from a terminal. All in one go:

```bash
code --install-extension esbenp.prettier-vscode
code --install-extension zhuangtongfa.material-theme
code --install-extension miguelsolorio.symbols
code --install-extension miguelsolorio.fluent-icons
code --install-extension anthropic.claude-code
code --install-extension ritwickdey.liveserver
code --install-extension prisma.prisma
```

| Extension | Id | Why |
| --- | --- | --- |
| Prettier | `esbenp.prettier-vscode` | Default formatter, runs on save |
| One Dark Pro | `zhuangtongfa.material-theme` | The colour theme |
| Symbols | `miguelsolorio.symbols` | File icons |
| Fluent Icons | `miguelsolorio.fluent-icons` | Product icons |
| Claude Code | `anthropic.claude-code` | Claude inside the editor ([setup](./claude-setup.md)) |
| Live Server | `ritwickdey.liveserver` | Local preview for static pages |
| Prisma | `prisma.prisma` | Schema highlighting and formatting |

Optional, when a project needs them:

| Extension | Id |
| --- | --- |
| DotENV | `mikestead.dotenv` |
| Code Spell Checker | `streetsidesoftware.code-spell-checker` |
| Code Spell Checker (Brazilian Portuguese) | `streetsidesoftware.code-spell-checker-portuguese-brazilian` |
| Rainbow CSV | `mechatroner.rainbow-csv` |
| vscode-pdf | `tomoki1207.pdf` |
| Remote - WSL | `ms-vscode-remote.remote-wsl` |
| Remote - SSH | `ms-vscode-remote.remote-ssh` |
| Dev Containers | `ms-vscode-remote.remote-containers` |

:::warning Prettier must be installed
`settings.json` below names `esbenp.prettier-vscode` as the default formatter. If it is missing, format on save silently does nothing. Install it first.
:::

## 5. Settings I change

Open it with `Ctrl + Shift + P` → **Preferences: Open User Settings (JSON)**. Path:

```
%APPDATA%\Code\User\settings.json
```

Highlights:

- Format on save with **Prettier** (no semicolons, double quotes, tab 2)
- Autosave after delay
- Minimap off, wrap at column 90, render whitespace
- Git: autofetch, smart commit, no confirm sync
- Explorer: file nesting, folders first
- Terminal default is **Git Bash**
- Live Server opens Chrome

Full file:

```json
{
  "workbench.colorTheme": "One Dark Pro Night Flat",
  "workbench.colorCustomizations": {
    "[One Dark Pro Night Flat]": {
      "editorCursor.foreground": "#ffffffb5"
    }
  },
  "workbench.iconTheme": "symbols",
  "workbench.productIconTheme": "fluent-icons",
  "editor.fontFamily": "JetBrains Mono, Fira Code, monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 1.8,
  "editor.minimap.enabled": false,
  "editor.renderLineHighlight": "gutter",
  "workbench.startupEditor": "none",
  "explorer.compactFolders": false,
  "window.autoDetectColorScheme": false,
  "workbench.preferredDarkColorTheme": "One Dark Pro Night Flat",
  "oneDarkPro.editorTheme": "One Dark Pro Night Flat",
  "editor.suggestSelection": "first",
  "javascript.suggest.autoImports": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.acceptSuggestionOnEnter": "on",
  "editor.quickSuggestions": {
    "other": true,
    "comments": false,
    "strings": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "prettier.singleQuote": false,
  "prettier.semi": false,
  "prettier.tabWidth": 2,
  "editor.tabSize": 2,
  "explorer.fileNesting.enabled": true,
  "explorer.fileNesting.patterns": {
    "package.json": ".eslint*, prettier*, tsconfig*, vite*, pnpm-, bun.lockb, nest, package-lock*",
    "tailwind.config.": "tailwind.config, postcss.config*",
    ".env": ".env*"
  },
  "explorer.sortOrder": "foldersNestsFiles",
  "terminal.integrated.defaultProfile.windows": "Git Bash",
  "files.autoSave": "afterDelay",
  "files.associations": {
    "*.css": "css",
    ".env*": "dotenv"
  },
  "editor.wordWrap": "bounded",
  "editor.wordWrapColumn": 90,
  "liveServer.settings.CustomBrowser": "chrome",
  "workbench.activityBar.location": "top",
  "workbench.panel.showLabels": false,
  "editor.renderWhitespace": "all",
  "git.autofetch": true,
  "explorer.confirmDelete": false,
  "git.confirmSync": false,
  "git.enableSmartCommit": true,
  "git.ignoreRebaseWarning": true
}
```

## 6. Settings Sync (optional)

Instead of pasting the file on every machine, sign in with GitHub: **Accounts menu → Turn on Settings Sync**. It carries settings, extensions, keybindings and snippets. The JSON above is still the source of truth if sync ever drifts.

## 7. Check the terminal

Open a terminal with `` Ctrl + ` ``. The prompt should be **Git Bash**. If it is PowerShell, run **Terminal: Select Default Profile** and pick Git Bash. Git must already be installed ([Git & Node](./git-node.md)).

## Done when

- [ ] `code --version` prints a version
- [ ] JetBrains Mono shows in the editor
- [ ] One Dark Pro Night Flat + Symbols icons
- [ ] Saving a file formats it with Prettier (no semicolons)
- [ ] New terminal is Git Bash
- [ ] Claude Code extension shows in the activity bar

Next: [Claude](./claude-setup.md).
