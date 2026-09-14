# Git Basics

## Learning Objectives
By the end of this section, students should be able to:
- Explain what Git is and why developers use it
- Initialize a Git repository
- Stage and commit changes with descriptive messages
- Inspect and view commit history
- Connect a local repository to GitHub and push code

---

## 1. The Problem Git Solves

Without version control, a project folder looks like this:

```
project-final/
project-final-2/
project-final-real/
project-final-real-LAST/
project-final-LAST-FINAL/
```

This approach is fragile. You can lose work, overwrite things accidentally, and have no clear history.

**Git solves this by:**
- Keeping a complete history of every change
- Letting you go back to any previous version
- Allowing multiple people to work on the same codebase safely

---

## 2. Git vs GitHub

This is one of the most common points of confusion for beginners.

| Git | GitHub |
|-----|--------|
| Software installed on your computer | A website/cloud platform |
| Manages version history locally | Stores and shares Git repositories online |
| Works completely offline | Requires an internet connection |
| Command-line tool | Has a web interface + API |

> **Think of it this way:** Git is the technology. GitHub is one place you can use Git with.
> Other platforms: GitLab, Bitbucket — they all use Git underneath.

**Git ≠ GitHub**

---

## 3. The Git Mental Model

This is the single most important concept to understand:

```
Working Directory
      ↓
   git add
      ↓
 Staging Area
      ↓
  git commit
      ↓
Local Repository
      ↓
   git push
      ↓
    GitHub
```

| Area               | Description                                          |
|--------------------|------------------------------------------------------|
| Working Directory  | Files on your computer that you are editing          |
| Staging Area       | Files you have selected to include in the next commit |
| Local Repository   | The saved history of commits on your machine         |
| Remote (GitHub)    | A copy of the repository hosted online               |

---

## 4. Installation & Setup

### Check if Git is installed
```bash
git --version
# Expected: git version 2.x.x
```

### One-time configuration
```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

Verify:
```bash
git config --list
```

Git attaches your name and email to every commit so that collaborators can see who made each change.

---

## 5. Creating a Project & Initialising Git

```bash
mkdir my-project
cd my-project
```

Create your files:
```
index.html
style.css
```

Then initialise Git:
```bash
git init
```

Output:
```
Initialized empty Git repository in .../my-project/.git/
```

Git creates a hidden `.git/` folder that stores the entire repository history. **Do not manually edit or delete this folder.**

---

## 6. Checking Status

```bash
git status
```

Before any files are staged, you will see:
```
Untracked files:
  index.html
  style.css
```

`Untracked` means Git sees these files but is not tracking them yet.

---

## 7. Staging Files

```bash
# Stage a specific file
git add index.html

# Stage all changed files at once
git add .
```

After staging:
```bash
git status
# Changes to be committed:
#   new file: index.html
#   new file: style.css
```

The files have moved from the Working Directory to the Staging Area.

---

## 8. Making a Commit

```bash
git commit -m "feat: create initial webpage"
```

A commit is a **snapshot** of your staged changes at this point in time.

### Writing Good Commit Messages

| Type       | When to use                              | Example                            |
|------------|------------------------------------------|------------------------------------|
| `feat:`    | Adding new functionality                 | `feat: add responsive navigation`  |
| `fix:`     | Fixing a bug                             | `fix: correct broken image path`   |
| `docs:`    | Updating documentation                   | `docs: update README instructions` |
| `style:`   | Formatting, no logic change              | `style: add consistent spacing`    |
| `refactor:`| Code restructure, no feature or bug fix  | `refactor: simplify card component`|

**Bad commit message:** `git commit -m "changes"`
**Good commit message:** `git commit -m "feat: add responsive card grid"`

The message should complete this sentence: *"This commit will..."*

---

## 9. Viewing History

```bash
# Full log with details
git log

# Compact one-line format
git log --oneline
```

Example output of `git log --oneline`:
```
a82f123 feat: add responsive navigation
d91c211 feat: add hero section
f34bb00 feat: create initial webpage
```

Each entry has:
- A **commit hash** (unique identifier like `a82f123`)
- Your **commit message**

---

## 10. The Everyday Git Workflow

```bash
# 1. Check what has changed
git status

# 2. Stage changes
git add .

# 3. Commit with a descriptive message
git commit -m "feat: describe what you built"

# 4. Push to GitHub
git push
```

Repeat this cycle every time you finish a meaningful unit of work.

---

## 11. Connecting to GitHub

### Step 1 — Create a repository on GitHub
- Go to github.com → New Repository
- Give it a name (e.g., `boycode-demo`)
- Do **not** initialise with a README if you already have local files

### Step 2 — Connect your local repo to GitHub
```bash
git remote add origin https://github.com/your-username/boycode-demo.git
```

### Step 3 — Rename the branch to main
```bash
git branch -M main
```

### Step 4 — Push for the first time
```bash
git push -u origin main
```

The `-u` flag sets `origin main` as the default, so future pushes just need:
```bash
git push
```

### Verify remote is connected
```bash
git remote -v
# origin  https://github.com/your-username/boycode-demo.git (fetch)
# origin  https://github.com/your-username/boycode-demo.git (push)
```

---

## 12. Pulling Changes

`git push` uploads your commits to GitHub.
`git pull` downloads changes from GitHub and merges them into your local copy.

```bash
git pull
```

Use this when:
- You made changes on another computer
- A collaborator pushed code you need

---

## 13. Cloning an Existing Repository

If the project already exists on GitHub:
```bash
git clone https://github.com/example/boycode-demo.git
cd boycode-demo
```

This downloads a full copy of the repository including its entire history.

---

## 14. The .gitignore File

Create a file named `.gitignore` in the root of your project.

```
node_modules/
.env
dist/
.DS_Store
```

Git will skip these files and folders. They will never be committed.

**Why this matters:**
- `node_modules/` can be hundreds of megabytes — no need to commit it
- `.env` often contains API keys, passwords, and secrets — **never** commit these

---

## 15. Git Commands Cheat Sheet

| Command                         | Purpose                                     |
|---------------------------------|---------------------------------------------|
| `git init`                      | Create a new Git repository                 |
| `git status`                    | See what has changed                        |
| `git add .`                     | Stage all changes                           |
| `git add <file>`                | Stage a specific file                       |
| `git commit -m "message"`       | Save a snapshot with a message              |
| `git log`                       | View full commit history                    |
| `git log --oneline`             | View compact commit history                 |
| `git branch -M main`            | Rename current branch to main               |
| `git remote -v`                 | View connected remote repositories          |
| `git remote add origin <url>`   | Connect a GitHub repository                 |
| `git push`                      | Upload commits to GitHub                    |
| `git push -u origin main`       | Push and set default upstream               |
| `git pull`                      | Download and merge remote changes           |
| `git clone <url>`               | Copy a remote repository to your computer   |

---

## 16. Class Exercise

1. Create a folder and add some HTML/CSS files
2. Run `git init`
3. Run `git status` — observe untracked files
4. Run `git add .`
5. Run `git status` again — observe staged files
6. Run `git commit -m "feat: initial project setup"`
7. Run `git log --oneline`
8. Make a small change to your HTML
9. Run `git status`, `git add .`, `git commit -m "feat: update page heading"`
10. Run `git log --oneline` — you now have two commits
11. Connect to GitHub and push

---

## 17. Discussion Questions

1. What is the difference between Git and GitHub?
2. What are the three areas in the Git workflow before code reaches GitHub?
3. What does `git add .` do?
4. What is the difference between `git commit` and `git push`?
5. Why should you never commit your `.env` file?
6. What is the purpose of a commit message?
7. If a collaborator pushed changes to GitHub, how do you get those changes locally?
