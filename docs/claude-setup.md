---
sidebar_position: 8
---

# Claude

Three pieces, all signed in to the same account:

| Piece | What it is | Where I use it |
| --- | --- | --- |
| **Claude** desktop app | Chat, plus the Code tab for working in a project folder | Thinking, writing, longer tasks |
| **Claude Code** CLI | The same agent in a terminal | Any repo, from Git Bash or Windows Terminal |
| **Claude Code** extension | The agent inside VS Code | Working in the editor with the file open |

You need a paid Claude plan or an Anthropic Console account to sign in to Claude Code.

## 1. Install

```powershell
winget install --id Anthropic.Claude -e
winget install --id Anthropic.ClaudeCode -e
```

Or use the native installer for the CLI:

```powershell
irm https://claude.ai/install.ps1 | iex
```

Claude Code on Windows needs **Git for Windows** (it runs shell commands through Git Bash). Install Git first ([Git & Node](./git-node.md)). Open a **new** terminal and check:

```bash
claude --version
claude doctor
```

`claude doctor` reports the install type, auto-update state and anything broken.

## 2. Sign in

1. Open a terminal in any project folder
2. Run `claude`
3. Pick **Claude account** and finish the sign-in in the browser

Inside a session `/login` switches accounts and `/status` shows who you are signed in as. The desktop app signs in on its own the first time you open it.

:::danger Never share the credentials file
Sign-in tokens live in `~/.claude/.credentials.json`. Do not commit it, paste it in an issue or put it in a screenshot. If it leaks, sign out and sign in again.
:::

## 3. VS Code extension

```bash
code --install-extension anthropic.claude-code
```

Open a project, then use the Claude icon in the activity bar (or run **Claude Code: Open** from the command palette). It uses the same account and the same `~/.claude` settings as the CLI.

## 4. Where the config lives

| File | Scope | Commit it? |
| --- | --- | --- |
| `~/.claude/settings.json` | All your projects | No, it is yours |
| `~/.claude/CLAUDE.md` | All your projects | No |
| `.claude/settings.json` | One repo, shared with the team | Yes |
| `.claude/settings.local.json` | One repo, only you | **No**, add to `.gitignore` |
| `CLAUDE.md` (repo root) | Instructions for this repo | Yes |
| `.claude/skills/<name>/SKILL.md` | A skill for this repo | Yes |
| `.mcp.json` | MCP servers for this repo | Yes, with no secrets in it |
| `~/.claude/.credentials.json` | Your sign-in | **Never** |

Everything else under `~/.claude` (`projects`, `sessions`, `file-history`, `cache`) is history and caches. Safe to ignore, and not worth backing up.

## 5. `settings.json`

A small, safe starting point for `~/.claude/settings.json`:

```json
{
  "permissions": {
    "allow": [
      "Bash(git status)",
      "Bash(git diff:*)",
      "Bash(git log:*)",
      "Bash(pnpm run:*)"
    ],
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(~/.ssh/**)"
    ]
  }
}
```

- `allow` lists commands Claude may run without asking
- `deny` blocks reads outright. Keep `.env` files and SSH keys here
- Anything not listed asks you first

Change permissions with `/permissions` inside a session, or edit the file directly. Start strict and allow things as you get tired of the prompt.

## 6. `CLAUDE.md`

`CLAUDE.md` is read at the start of every session. Keep it short and specific. Run `/init` in a repo to generate a first draft, then trim it.

```markdown
# Project notes

- Package manager: pnpm. Never use npm or yarn.
- Format with Prettier: no semicolons, double quotes, 2 spaces.
- Run `pnpm typecheck` before saying a change is done.
- Docs are the source of truth. Do not duplicate them in the README.
```

Rules that never change belong in `CLAUDE.md`. Rules that need a command to run (for example "format after every edit") belong in a **hook** in `settings.json`, because the harness runs hooks and the model only reads instructions.

## 7. Skills

A skill is a folder with a `SKILL.md` that Claude loads when the task matches its description.

```
.claude/skills/
  my-skill/
    SKILL.md
```

```markdown
---
name: my-skill
description: Use when the user asks for X. One sentence that says when to trigger.
---

Steps and rules for X go here.
```

Put skills in `.claude/skills/` inside a repo to share them with it, or in `~/.claude/skills/` to have them everywhere. The [Obsidian vault](./obsidian.md) keeps its skills this way.

## 8. MCP servers

MCP servers connect Claude to outside tools. Add one from a terminal:

```bash
claude mcp add --transport http <name> <url>
claude mcp list
```

Inside a session, `/mcp` shows status and handles sign-in for servers that need it. Add `--scope project` to write to `.mcp.json` so the whole repo shares it.

:::warning Treat MCP servers like installed software
A server can read what you give it and act with your accounts. Add only servers you trust, and never put tokens in `.mcp.json`.
:::

## 9. Commands I use daily

| Command | What it does |
| --- | --- |
| `claude` | Start a session in the current folder |
| `claude -c` | Continue the last session in this folder |
| `claude -r` | Pick an older session to resume |
| `/init` | Create a `CLAUDE.md` for the repo |
| `/permissions` | Review allow and deny rules |
| `/mcp` | MCP servers and their status |
| `/clear` | Start fresh in the same window |
| `/compact` | Shrink the conversation, keep the gist |

## Done when

- [ ] `claude --version` prints a version
- [ ] `claude` opens and shows your account
- [ ] The VS Code extension shows in the activity bar
- [ ] `~/.claude/settings.json` denies `.env` and `~/.ssh`
- [ ] `.claude/settings.local.json` is in your global or repo `.gitignore`

Next: [Obsidian](./obsidian.md).
