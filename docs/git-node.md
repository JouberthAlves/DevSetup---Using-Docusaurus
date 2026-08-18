---
sidebar_position: 2
---
# Git & Node
Git from git-scm, SSH to GitHub, Node via nvm-windows (LTS), then pnpm and Bun as globals.
## 1. Git
1. Download the installer from [git-scm.com](https://git-scm.com/download/win)
2. Next through the wizard (default editor and “Git from the command line” are fine)
3. Open **Git Bash** or **Windows Terminal** and check:
```bash
git --version
Identity (this is what I set — empty email):

git config user.email ""
If you want that on every repo, add --global:

git config --global user.email ""
git config --global user.name "Your Name"
I do not set a special core.autocrlf; I leave the installer default.
```
## 2. SSH for GitHub
I use SSH, not HTTPS. If you are not sure which key type you already have:

ls ~/.ssh
id_ed25519.pub → Ed25519 (current GitHub default)
id_rsa.pub → older RSA — still works
No key yet? Create Ed25519:

ssh-keygen -t ed25519 -C ""
Press Enter for the default path. Then start the agent and add the key:

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
Copy the public key:

cat ~/.ssh/id_ed25519.pub
GitHub → Settings → SSH and GPG keys → New SSH key → paste.

Test:

ssh -T git@github.com
You want a success message (or “successfully authenticated”). Clone with git@github.com:user/repo.git, not https://.

## 3. Node (nvm-windows)
Install nvm-windows (nvm-setup.exe)
Close and reopen the terminal
Install and use LTS:
nvm install lts
nvm use lts
node -v
npm -v
Do not rely on a random “Current” Node from nodejs.org (for example Node 26). LTS is the default I keep.

## 4. pnpm and Bun
After Node is on LTS:

npm install -g pnpm
npm install -g bun
Check:

pnpm -v
bun -v
This repo uses pnpm. Bun is there when I want it.