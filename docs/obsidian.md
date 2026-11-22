---
sidebar_position: 9
---

# Obsidian

Notes live as plain Markdown files in a folder. Obsidian is the viewer and editor; **Git** is the backup and history; **Claude** can read the same folder. The vault is just a repo.

## 1. Install

```powershell
winget install --id Obsidian.Obsidian -e
```

Or download it from [obsidian.md](https://obsidian.md). Obsidian needs no account to use. An account is only for paid services like Sync or Publish.

## 2. Create the vault as a Git repo

Keep the vault next to your code, for example in `Desktop\www`:

```bash
mkdir -p ~/Desktop/www/my-vault
cd ~/Desktop/www/my-vault
git init
```

1. Open Obsidian → **Open folder as vault**
2. Choose that folder. Obsidian creates a `.obsidian/` folder inside it
3. The vault is the **repo root**, which is where `.obsidian/` lives

If you already have a vault on GitHub, clone it instead and open the clone:

```bash
git clone git@github.com:<you>/<vault>.git
```

Use a **private** repo for personal notes.

## 3. What to ignore in Git

`.obsidian/` holds settings you want on every machine (theme, plugins, appearance) and UI state you do not. Version the first, ignore the second. Put this in `.gitignore` at the vault root:

```gitignore
# Obsidian UI state: changes on every pane you move and conflicts between machines
**/.obsidian/workspace.json
**/.obsidian/workspace-mobile.json

# Cache and trash
**/.obsidian/cache
.trash/

# Operating system
.DS_Store
Thumbs.db
desktop.ini
```

Everything else in `.obsidian/` (themes, plugins, `appearance.json`) stays committed, so a new machine looks identical after a `git clone`.

## 4. Appearance

**Settings → Appearance**

| Setting | Value |
| --- | --- |
| Base colour scheme | Dark (`obsidian`) |
| Accent colour | `#ff0000` |
| Theme | **Willemstad** |
| Show ribbon | On |

Install a theme: **Appearance → Themes → Manage → search → Install and use**. Themes I keep downloaded and can switch to: Willemstad (the active one), Ember Glazz, Encore, Transparent.

The settings end up in `.obsidian/appearance.json`:

```json
{
  "cssTheme": "Willemstad",
  "accentColor": "#ff0000",
  "theme": "obsidian",
  "showRibbon": true
}
```

## 5. Core plugins

Core plugins ship with Obsidian. **Settings → Core plugins**.

**On:** File explorer, Search, Quick switcher, Graph view, Backlinks, Outgoing links, Canvas, Tags view, Properties, Page preview, Daily notes, Templates, Note composer, Command palette, Editor status, Bookmarks, Outline, Word count, File recovery, Bases, Sync.

**Off:** Footnotes, Slash commands, Markdown importer, Zettelkasten prefixer, Random note, Slides, Audio recorder, Workspaces, Publish, Web viewer.

Sync is Obsidian's paid service. If you use Git for history, leave Sync off and turn it on only if you want live sync to a phone.

## 6. Community plugins

**Settings → Community plugins → Turn on community plugins → Browse.**

| Plugin | Id | What it does |
| --- | --- | --- |
| Style Settings | `obsidian-style-settings` | Exposes theme options (colours, sizes) in a settings panel |
| Relay | `system3-relay` | Shared vaults and live collaboration. Optional, only if you collaborate |

`.obsidian/community-plugins.json` records which ones are enabled:

```json
["system3-relay", "obsidian-style-settings"]
```

:::warning Community plugins run code
A community plugin can read every note in the vault. Install only what you need and prefer plugins with a clear author and recent updates.
:::

## 7. App settings

**Settings → Files and links**

- **Always update internal links**: on, so renaming a note fixes every link to it
- **Confirm file deletion**: off, because deleted files go to `.trash/` and are still in Git

In `.obsidian/app.json`:

```json
{
  "promptDelete": false,
  "alwaysUpdateLinks": true
}
```

## 8. Folder layout

Notes live in one folder inside the vault, so the repo root stays clean for config:

```
my-vault/
  .obsidian/        settings, themes, plugins
  .claude/skills/   skills for Claude Code
  .gitignore
  Notes/            everything you write
    INDEX.md        the map: links to every area
    AGENTS.md       rules for AI agents
    00 Inbox/       raw captures, sorted later
    10 Notes/       finished notes
    20 Projects/    one folder per project
    90 System/      rules, templates, how the vault works
```

Numeric prefixes keep folders in a fixed order in the file explorer. Each area has its own `INDEX` note that links to the rest, so you (and Claude) have one place to start.

## 9. Use Claude on the vault

Open a terminal at the vault root and run `claude`. Give it instructions in a file that any agent can read:

1. Create `Notes/AGENTS.md` with the rules: where notes go, what never to rename, where to start reading (`INDEX.md`)
2. Create a `CLAUDE.md` that imports it, so Claude loads the rules at the start of every session:

```markdown
@Notes/AGENTS.md
```

The file is called `AGENTS.md` (plural) because that is the name other tools look for. `AGENT.md` is read by nobody.

Skills for the vault go in `.claude/skills/` at the repo root. Details in [Claude → Skills](./claude-setup.md#7-skills).

:::tip Small, reversible changes
In `AGENTS.md`, tell the agent to propose small changes and never rename or move notes unless you ask. Git makes every edit reversible, but fewer surprises is better than a clean revert.
:::

## 10. Daily Git routine

```bash
git status
git add -A
git commit -m "notes: <what changed>"
git push
```

On a second machine:

```bash
git pull
```

Close Obsidian before a large `git pull`, or it can overwrite files while Git is rewriting them.

## Done when

- [ ] Obsidian opens the vault folder
- [ ] `git status` inside the vault is clean
- [ ] `.obsidian/workspace.json` is ignored
- [ ] Theme and plugins match the tables above
- [ ] `claude` in the vault root reads your `AGENTS.md`

You are done. Go back to [Start here](./intro.md) for the full checklist.
