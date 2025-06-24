const fs = require('fs');
const path = require('path');

function combineLatex(basePath, filePath, visited = new Set()) {

    console.log(`Opening ${filePath}`);

    if (visited.has(filePath)) {
        return '';
    }

    visited.add(filePath);

    const content = fs.readFileSync(filePath, 'utf8');

    return content.replace(/\\input\{([^\}]+)\}/g, (_, inputPath) => {

        const file = inputPath.endsWith('.tex') ? inputPath : inputPath + '.tex';

        const inputFile = path.resolve(basePath, file);

        if (!fs.existsSync(inputFile)) {
            throw new Error(`Missing file: ${inputFile}`);
        }

        return combineLatex(basePath, inputFile, visited);
    });
}

// Usage

const mainFile = path.resolve(process.argv[2] || 'main.tex');
const basePath = path.dirname(mainFile);
const outputFile = path.resolve(basePath, 'combined.tex');

const output = combineLatex(basePath, mainFile);

fs.writeFileSync(outputFile, output);

console.log("Done");