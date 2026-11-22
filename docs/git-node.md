---
sidebar_position: 6
---

# Git & Node

Git from git-scm, SSH to GitHub, Node via nvm-windows (LTS), then pnpm and Bun as globals.

## 1. Git

1. Install it with `winget install --id Git.Git -e` (done in [Apps](./apps.md)), or download the installer from [git-scm.com](https://git-scm.com/download/win)
2. If you use the installer, next through the wizard (default editor and “Git from the command line” are fine)
3. Open **Git Bash** or **Windows Terminal** and check:

```bash
git --version
```

Identity (this is what I set — empty email):

```bash
git config user.email ""
```

If you want that on every repo, add `--global`:

```bash
git config --global user.email ""
git config --global user.name "Your Name"
```

I do not set a special `core.autocrlf`; I leave the installer default.

## 2. SSH for GitHub

I use SSH, not HTTPS. If you are not sure which key type you already have:

```bash
ls ~/.ssh
```

- `id_ed25519.pub` → Ed25519 (current GitHub default)
- `id_rsa.pub` → older RSA — still works

**No key yet?** Create Ed25519:

```bash
ssh-keygen -t ed25519 -C ""
```

Press Enter for the default path. Then start the agent and add the key:

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

Copy the **public** key:

```bash
cat ~/.ssh/id_ed25519.pub
```

GitHub → **Settings → SSH and GPG keys → New SSH key** → paste.

Test:

```bash
ssh -T git@github.com
```

You want a success message (or “successfully authenticated”). Clone with `git@github.com:user/repo.git`, not `https://`.

## 3. Node (nvm-windows)

1. Install [nvm-windows](https://github.com/coreybutler/nvm-windows/releases) (`winget install --id CoreyButler.NVMforWindows -e`, or `nvm-setup.exe`)
2. Close and reopen the terminal
3. Install and use **LTS**:

```bash
nvm install lts
nvm use lts
node -v
npm -v
```

Do not grab whatever “Current” Node nodejs.org is promoting. The rule is **LTS**, whatever number that is today. Even-numbered releases become LTS in October, so a new major version is only safe once nodejs.org marks it LTS. `nvm install lts` always resolves the right one.

Several versions side by side:

```bash
nvm list
nvm use 22
```

## 4. pnpm and Bun

After Node is on LTS:

```bash
npm install -g pnpm
npm install -g bun
```

Check:

```bash
pnpm -v
bun -v
```

This repo uses **pnpm**. Bun is there when I want it.

## 5. Done when

- [ ] `git --version` works
- [ ] `ssh -T git@github.com` authenticates
- [ ] `node -v` is an LTS
- [ ] `pnpm -v` and `bun -v` print versions

Next: [VS Code](./vscode.md).
