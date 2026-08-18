---
sidebar_position: 3
---

# Cursor

Cursor only — no VS Code. I use **Tab autocomplete**, not Composer/Agent as the daily driver.

Install from [cursor.com](https://cursor.com). Terminal default is **Git Bash**.

## Font

- **JetBrains Mono** (install it on Windows first, then Cursor can use it)
- Fallback: Fira Code
- Ligatures: on
- Size 14, line height 1.8

## Theme and icons

- Color theme: **One Dark Pro Night Flat**
- File icons: **Symbols** (`miguelsolorio.symbols`)
- Product icons: **Fluent Icons** (`miguelsolorio.fluent-icons`)
- Activity bar: **top**

## AI

- **Tab** for inline completions (`cursor.cpp.enablePartialAccepts` on)
- I do not use chat/composer as the main workflow

Cursor settings: **Cursor Settings → Tab** (keep Tab on; leave Agent/Chat for when I ask).

## Extensions

Install from the marketplace (or `cursor --install-extension <id>`):

| Extension | Id |
|---|---|
| Prettier | `esbenp.prettier-vscode` |
| One Dark Pro | `zhuangtongfa.material-theme` |
| Symbols | `miguelsolorio.symbols` |
| Fluent Icons | `miguelsolorio.fluent-icons` |
| Live Server | `ritwickdey.liveserver` |
| DotENV | `mikestead.dotenv` |
| Code Spell Checker | `streetsidesoftware.code-spell-checker` |
| Code Spell Checker (Brazilian Portuguese) | `streetsidesoftware.code-spell-checker-portuguese-brazilian` |
| Rainbow CSV | `mechatroner.rainbow-csv` |
| Prisma | `prisma.prisma` |
| vscode-pdf | `tomoki1207.pdf` |
| Remote - WSL | `anysphere.remote-wsl` |
| Remote - SSH | `anysphere.remote-ssh` |
| Remote - Containers | `anysphere.remote-containers` |

## Settings I change

Path: `%APPDATA%\Cursor\User\settings.json`

Highlights:

- Format on save with **Prettier** (no semicolons, double quotes, tab 2)
- Autosave after delay
- Minimap off, wrap at column 90, render whitespace
- Git: autofetch, smart commit, no confirm sync
- Explorer: file nesting, folders first
- Live Server → Chrome

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
  "cursor.composer.codeBlockWordWrap": true,
  "explorer.confirmDelete": false,
  "cursor.cpp.enablePartialAccepts": true,
  "git.confirmSync": false,
  "git.enableSmartCommit": true,
  "git.ignoreRebaseWarning": true
}
```

## Done when

- [ ] JetBrains Mono shows in the editor
- [ ] One Dark Pro Night Flat + Symbols
- [ ] Tab completions work
- [ ] Save formats with Prettier (no semicolons)
- [ ] New terminal is Git Bash
