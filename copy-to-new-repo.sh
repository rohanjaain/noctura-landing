#!/bin/bash

# Script to copy Noctura landing page to a new repository
# Usage: ./copy-to-new-repo.sh /path/to/new/repo

if [ $# -eq 0 ]; then
    echo "Usage: $0 /path/to/new/repo"
    echo "Example: $0 ~/repos/noctura-landing"
    exit 1
fi

NEW_REPO_PATH="$1"

if [ ! -d "$NEW_REPO_PATH" ]; then
    echo "Creating new repository directory: $NEW_REPO_PATH"
    mkdir -p "$NEW_REPO_PATH"
fi

echo "Copying files to: $NEW_REPO_PATH"

# Copy essential project files
cp package.json "$NEW_REPO_PATH/"
cp package-lock.json "$NEW_REPO_PATH/"
cp tsconfig.json "$NEW_REPO_PATH/"
cp tsconfig.node.json "$NEW_REPO_PATH/"
cp tsconfig.app.json "$NEW_REPO_PATH/"
cp vite.config.ts "$NEW_REPO_PATH/"
cp tailwind.config.js "$NEW_REPO_PATH/"
cp postcss.config.js "$NEW_REPO_PATH/"
cp .eslintrc.cjs "$NEW_REPO_PATH/"
cp prettier.config.js "$NEW_REPO_PATH/"
cp .gitignore "$NEW_REPO_PATH/"

# Copy source code
cp -r src "$NEW_REPO_PATH/"

# Copy public assets
cp -r public "$NEW_REPO_PATH/"

# Copy documentation
cp README.md "$NEW_REPO_PATH/"
cp GITHUB_PAGES_DEPLOYMENT.md "$NEW_REPO_PATH/"
cp start.sh "$NEW_REPO_PATH/"

# Copy this script
cp copy-to-new-repo.sh "$NEW_REPO_PATH/"

echo "✅ All files copied successfully!"
echo ""
echo "Next steps:"
echo "1. cd $NEW_REPO_PATH"
echo "2. git init"
echo "3. git add ."
echo "4. git commit -m 'Initial commit: Noctura landing page'"
echo "5. Create new repo on GitHub"
echo "6. git remote add origin <your-new-repo-url>"
echo "7. git push -u origin main"
echo "8. npm install"
echo "9. npm run build"
echo "10. npm run deploy" 