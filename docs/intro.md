---
sidebar_position: 1
slug: /intro
---

# Start here

This is the whole recipe for a fresh Windows 11 machine, in the order I run it: install Windows, activate it, clean it, install the apps, then configure Git, Node, VS Code, Claude and Obsidian.

This is **my** machine, not a corporate image. Follow it if the tradeoffs match yours.

## The order

| Step | Guide | What you end up with |
| --- | --- | --- |
| 1 | [Install Windows 11](./install-windows.md) | A clean install from a USB drive, drivers and updates done |
| 2 | [Activate Windows](./activate-windows.md) | A genuine, activated Windows tied to your account |
| 3 | [Clean Windows](./windows-cleanup.md) | No bundled AI, Xbox, games or Edge browser. Restore point first |
| 4 | [Apps to download](./apps.md) | Every app, installed with one `winget` script |
| 5 | [Git & Node](./git-node.md) | Git, SSH to GitHub, Node LTS via nvm-windows, pnpm, bun |
| 6 | [VS Code](./vscode.md) | Font, theme, formatter, extensions and the full `settings.json` |
| 7 | [Claude](./claude-setup.md) | Claude desktop, Claude Code CLI, the VS Code extension and config files |
| 8 | [Obsidian](./obsidian.md) | A Git-backed vault, theme, plugins and an `AGENTS.md` for Claude |

## Before you start

- A USB drive with **8 GB or more** (it will be erased)
- A second device to download things while the PC is being installed
- Your **Microsoft account** and your Windows licence (see [Activate Windows](./activate-windows.md))
- Your **GitHub** and **Claude** accounts
- Backups of anything you want to keep. A clean install erases the system drive

:::caution Read the risks
Uninstalling system apps can break widgets, the Store or Windows Update, and Edge often comes back after an update. Create a restore point before the cleanup step.
:::

## Whole-machine checklist

Tick these at the very end. Each guide also has its own "Done when" list.

- [ ] Windows is installed, updated and **activated**
- [ ] Copilot, Xbox, preinstalled games and Edge are gone (WebView2 stays)
- [ ] `winget` apps are installed
- [ ] `git`, `node`, `pnpm` and `bun` print versions, and `ssh -T git@github.com` authenticates
- [ ] VS Code opens with JetBrains Mono and One Dark Pro Night Flat, and saves with Prettier
- [ ] `claude` runs in a terminal and you are signed in
- [ ] Obsidian opens your vault and `git status` inside it is clean
