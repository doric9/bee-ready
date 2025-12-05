// Simple Word List Obfuscation Script
// Run with: node obfuscate-words.js

const fs = require('fs');

// Read the words.js file
const wordsContent = fs.readFileSync('words.js', 'utf8');

// Extract the wordDatabase object
const match = wordsContent.match(/const wordDatabase = ({[\s\S]+?});[\s\S]+?\/\/ Helper/);
if (!match) {
    console.error('Could not find wordDatabase in words.js');
    process.exit(1);
}

const wordDatabaseStr = match[1];

// Convert to base64
const encoded = Buffer.from(wordDatabaseStr).toString('base64');

// Create obfuscated version
const obfuscated = `// Spelling Bee Word Database (Obfuscated)
const _0x1a2b = '${encoded}';
const wordDatabase = JSON.parse(Buffer.from(_0x1a2b, 'base64').toString('utf8'));

// Helper function to get words by difficulty
function getWordsByDifficulty(level) {
    switch(level) {
        case 1:
            return wordDatabase.oneBee;
        case 2:
            return [...wordDatabase.oneBee, ...wordDatabase.twoBee];
        case 3:
            return [...wordDatabase.oneBee, ...wordDatabase.twoBee, ...wordDatabase.threeBee];
        default:
            return wordDatabase.oneBee;
    }
}

// Helper function to shuffle array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
`;

// Write obfuscated version
fs.writeFileSync('words.obfuscated.js', obfuscated);
console.log('✅ Created words.obfuscated.js');
console.log('Replace words.js with this file to obfuscate the word list.');
