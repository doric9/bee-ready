# Guide: Adding Real Scripps Spelling Bee Word Lists

## Option 1: Official Scripps Sources (Recommended)

### School Spelling Bee Study List (450 words)
1. Visit [spellingbee.com](https://spellingbee.com/)
2. Schools can access the official list through enrollment
3. Available as downloadable PDF with all word details

### Words of the Champions (4,000 words)
1. Available at [spellingbee.com/study-list](https://spellingbee.com/study-list)
2. Purchase paperback from Amazon: "Words of the Champions"
3. Divided into One Bee (800), Two Bee (2,100), Three Bee (1,200)

## Option 2: Using CSV Import Tool

I've created `import-words.html` - a tool to help you format and import words.

### Steps:
1. Open `import-words.html` in your browser
2. Prepare your data in CSV format (see format below)
3. Paste or upload the CSV
4. Click "Convert to JavaScript"
5. Copy the generated code into `words.js`

### CSV Format:
```csv
word,definition,sentence,origin,difficulty
absquatulate,to leave somewhere abruptly,He absquatulated from the party without saying goodbye.,Latin,2
```

**Columns:**
- `word`: The spelling word
- `definition`: Word definition
- `sentence`: Example sentence
- `origin`: Language of origin (Latin, Greek, French, etc.)
- `difficulty`: 1 (One Bee), 2 (Two Bee), or 3 (Three Bee)

## Option 3: Manual Entry

Edit `words.js` and add words to the appropriate array:

```javascript
// For One Bee words
wordDatabase.oneBee.push({
    word: "example",
    definition: "a thing characteristic of its kind",
    sentence: "Can you give me an example?",
    origin: "Latin"
});

// For Two Bee words
wordDatabase.twoBee.push({
    word: "acknowledge",
    definition: "to accept or admit the existence of",
    sentence: "Please acknowledge receipt of this letter.",
    origin: "Middle English"
});

// For Three Bee words
wordDatabase.threeBee.push({
    word: "concatenate",
    definition: "to link things together in a chain or series",
    sentence: "The program will concatenate the two strings.",
    origin: "Latin"
});
```

## Option 4: Third-Party Study Resources

Some educational websites provide Scripps-based word lists:

- **Spell Pundit** (spellpundit.com) - Comprehensive word lists
- **Spelling Bee Ninja** - Practice lists
- **Hexco Academic** - Study materials

**Note:** Always verify words match current Scripps official lists.

## Data Quality Checklist

When adding words, ensure:
- ✅ Correct spelling (case-sensitive initially, normalized in code)
- ✅ Clear, concise definitions
- ✅ Example sentences use the word correctly
- ✅ Accurate language of origin
- ✅ Appropriate difficulty classification

## Testing Your Data

After importing:
1. Open `index.html` in browser
2. Select each difficulty level
3. Test a few words from each level
4. Verify pronunciation, definitions, and sentences display correctly

## Need Help?

If you have a word list in a different format (Excel, JSON, PDF), I can help convert it to the required JavaScript format.
