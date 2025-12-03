# 🐝 Bee Ready - Scripps Spelling Bee Practice App

A web-based practice application designed to help students prepare for the Scripps National Spelling Bee with a realistic, contest-like environment.

## Features

### Contest-Like Environment
- **Word Pronunciation**: Auto-pronounce words using text-to-speech or click to hear them again
- **Word Information**: Access definition, usage in a sentence, and language of origin
- **Timed Mode**: Optional 2-minute timer per word for realistic practice
- **Score Tracking**: Real-time scoring with points based on difficulty level
- **Performance Analytics**: Detailed results showing accuracy and words to review

### Three Difficulty Levels

Based on Scripps National Spelling Bee structure:

- **One Bee (🐝)**: Beginner level - ~800 words
- **Two Bee (🐝🐝)**: Intermediate level - ~2,100 words
- **Three Bee (🐝🐝🐝)**: Advanced level - ~1,200 words

## Quick Start

1. Open `index.html` in a web browser
2. Select your difficulty level
3. Choose practice mode options (timed, auto-pronounce)
4. Click "Start Practice"
5. Use the info buttons to hear pronunciation, see definition, etc.
6. Type your spelling and submit
7. Review your results at the end

## Using Official Scripps Word Lists

This app currently includes sample words for demonstration. To use the official Scripps National Spelling Bee word lists:

### Official Resources

1. **School Spelling Bee Study List** (450 words)
   - Available at: [spellingbee.com](https://spellingbee.com/)
   - Requires school enrollment

2. **Words of the Champions** (4,000 words)
   - Available at: [spellingbee.com/study-list](https://spellingbee.com/study-list)
   - Includes all three difficulty levels
   - Also available as a paperback on Amazon

### How to Add Official Words

Edit the `words.js` file and add words to the appropriate arrays:

```javascript
// Example format
{
    word: "example",
    definition: "a thing characteristic of its kind",
    sentence: "Can you give me an example?",
    origin: "Latin"
}
```

**Arrays to update:**
- `wordDatabase.oneBee` - For One Bee difficulty
- `wordDatabase.twoBee` - For Two Bee difficulty
- `wordDatabase.threeBee` - For Three Bee difficulty

## Technical Details

### File Structure
```
bee-ready/
├── index.html      # Main HTML structure
├── styles.css      # Styling and animations
├── words.js        # Word database
├── app.js          # Application logic
└── README.md       # Documentation
```

### Browser Compatibility

- Modern browsers with ES6 support
- Web Speech API for pronunciation (Chrome, Edge, Safari)
- Responsive design for desktop and mobile

### Features Breakdown

#### Practice Mode
- Sequential word presentation
- Multiple attempts per session
- Skip functionality (counts as incorrect)
- Exit anytime to view results

#### Information Buttons
- 🔊 **Pronounce**: Hear the word spoken
- 📖 **Definition**: See the word's definition
- 💬 **Use in Sentence**: See example usage
- 🌍 **Language of Origin**: Learn the word's etymology

#### Scoring System
- One Bee words: 10 points
- Two Bee words: 20 points
- Three Bee words: 30 points

#### Results Screen
- Total words practiced
- Correct/incorrect count
- Accuracy percentage
- Final score
- List of missed words for review

## Educational Use

This app is designed for:
- Individual practice sessions
- Classroom spelling competitions
- Homeschool spelling curriculum
- Spelling bee preparation
- Vocabulary building

## License

This is an educational tool. All Scripps National Spelling Bee materials and trademarks are property of Scripps National Spelling Bee.

## Credits

Built for students preparing for spelling bee competitions. Word list structure based on official Scripps National Spelling Bee study materials.

For official Scripps resources: [spellingbee.com](https://spellingbee.com/)

---

**Note**: This app uses sample words for demonstration purposes. For official competition preparation, please obtain the School Spelling Bee Study List and Words of the Champions from Scripps National Spelling Bee.
