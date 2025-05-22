const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function createTag() {
    try {
        // Get current version
        const package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')));
        const version = package.version;
        const tagName = `v${version}`;

        // Create and push tag
        execSync(`git tag ${tagName}`);
        execSync(`git push origin ${tagName}`);

        console.log(`\x1b[32m✓ Tag ${tagName} created and pushed\x1b[0m`);
    } catch (error) {
        console.error('\x1b[31mFailed to create tag:\x1b[0m', error.message);
    }
}

createTag();