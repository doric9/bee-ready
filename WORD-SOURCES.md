# Word List Sources for Bee Ready

## Official Scripps National Spelling Bee Sources

### ⭐ Best Option: Official Scripps Lists (Recommended)

**School Spelling Bee Study List (450 words)**
- Official source: [spellingbee.com](https://spellingbee.com/)
- Available to enrolled schools via Educator Portal
- Contains words for grades 1-8

**Words of the Champions (4,000 words)**
- Official source: [spellingbee.com/study-list](https://spellingbee.com/study-list)
- Purchase on Amazon (paperback)
- Divided into One Bee (800), Two Bee (2,100), Three Bee (1,200)

**Word Club App** (Free)
- Download from app stores
- Includes all 4,000 words from Words of Champions
- Free spelling and vocabulary games

---

## Public Domain & Open Source Alternatives

### Option 1: GitHub Public Domain Word Lists

**Repository**: [MichaelWehar/Public-Domain-Word-Lists](https://github.com/MichaelWehar/Public-Domain-Word-Lists)
- License: Public Domain
- Format: Plain text and CSV
- Contains various word lists

**Repository**: [AlinaWan/SpellingBeeDictionary](https://github.com/AlinaWan/SpellingBeeDictionary)
- License: CC0 1.0 (Public Domain)
- Format: Text files
- Curated spelling bee word list

### Option 2: SCOWL Word Lists

**SCOWL** (Spell Checker Oriented Word Lists)
- Free and open source
- Contains ~40,000 words
- Different difficulty levels available
- Used by many spelling bee projects

### Option 3: School District PDFs

Many school districts post their spelling bee lists publicly:
- [Ren Academy 2024-2025 Study List](https://renacademy.org/dynamic/content/1106/943/2025_slsl_all_450_words_only_3401498895_bhTCj.pdf)
- [Noble LA Words and Definitions](https://www.noblela.org/accnt_12135/site_12136/Documents/Words-and-Definitions.pdf)
- [Murray Spelling Bee Full List](https://murrayspellingbee.com/pdf/full-list.pdf)

⚠️ **Note**: These are often marked "Do not post to Web" - use for personal/educational purposes only.

---

## How to Add Words to Bee Ready

### Method 1: Use the Import Tool (Easiest)

1. Open `import-words.html` in your browser
2. Prepare data in CSV format:
   ```csv
   word,definition,sentence,origin,difficulty
   example,a thing characteristic of its kind,Can you give me an example?,Latin,1
   ```
3. Upload or paste your CSV
4. Click "Convert to JavaScript"
5. Copy the generated code to `words.js`

### Method 2: Manual Entry

Edit `words.js` directly:

```javascript
wordDatabase.oneBee.push({
    word: "your word",
    definition: "the definition",
    sentence: "Example sentence here.",
    origin: "Latin"
});
```

### Method 3: PDF to CSV Conversion

If you have PDF word lists:

1. **Online Tools**:
   - [PDF to Excel Converter](https://www.ilovepdf.com/pdf_to_excel)
   - [Tabula](https://tabula.technology/) - Extract tables from PDFs
   - [Adobe Acrobat](https://www.adobe.com/acrobat/online/pdf-to-excel.html)

2. **Manual Extraction**:
   - Copy text from PDF
   - Paste into Excel/Google Sheets
   - Format as CSV
   - Use our import tool

### Method 4: Web Scraping (Advanced)

For developers comfortable with Python:

```python
import requests
from bs4 import BeautifulSoup
import csv

# Example: Scrape publicly available word lists
# (Always check site's robots.txt and terms of service)
```

---

## Recommended Workflow

### For Competition Preparation (Official)
1. ✅ Enroll in Scripps National Spelling Bee
2. ✅ Access official 450-word study list
3. ✅ Purchase "Words of the Champions"
4. ✅ Use our import tool to add to Bee Ready

### For General Practice (Free)
1. ✅ Download public domain lists from GitHub
2. ✅ Use SCOWL word lists
3. ✅ Classify by difficulty (1=easy, 2=medium, 3=hard)
4. ✅ Add definitions from dictionary API or manually
5. ✅ Import using our tool

---

## Data Quality Tips

When adding words, ensure:
- ✅ **Correct spelling** (verified against dictionary)
- ✅ **Clear definitions** (age-appropriate)
- ✅ **Good example sentences** (shows word usage)
- ✅ **Accurate origins** (Latin, Greek, French, etc.)
- ✅ **Appropriate difficulty** (1, 2, or 3)

---

## Free Dictionary APIs (for adding definitions)

If you have word lists without definitions:

1. **Merriam-Webster API**
   - [dictionaryapi.com](https://dictionaryapi.com/)
   - Free tier available

2. **Dictionary API**
   - [dictionaryapi.dev](https://dictionaryapi.dev/)
   - Completely free

3. **Wordnik API**
   - [developer.wordnik.com](https://developer.wordnik.com/)
   - Free tier available

---

## Legal & Ethical Notes

- ⚠️ Scripps lists are copyrighted - obtain legally
- ✅ Public domain sources are freely usable
- ✅ Always credit sources when applicable
- ⚠️ Respect "Do not post to Web" notices
- ✅ Use for personal/educational purposes

---

## Need Help?

Having trouble converting your word lists? You can:
1. Use the `import-words.html` tool
2. Check the `data-import-guide.md` for detailed instructions
3. Review sample data in the tool for format examples

---

**Sources:**
- [Scripps National Spelling Bee](https://spellingbee.com/)
- [MichaelWehar/Public-Domain-Word-Lists](https://github.com/MichaelWehar/Public-Domain-Word-Lists)
- [AlinaWan/SpellingBeeDictionary](https://github.com/AlinaWan/SpellingBeeDictionary)
- [Ren Academy Study List](https://renacademy.org/)
- [Noble LA Words](https://www.noblela.org/)
