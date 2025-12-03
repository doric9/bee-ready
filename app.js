// Spelling Bee Practice App
// Main application logic

class SpellingBeeApp {
    constructor() {
        // Game state
        this.difficulty = null;
        this.timedMode = false;
        this.pronunciationMode = true;
        this.words = [];
        this.currentWordIndex = 0;
        this.currentWord = null;
        this.score = 0;
        this.correct = 0;
        this.incorrect = 0;
        this.missedWords = [];
        this.timer = null;
        this.timeRemaining = 120; // 2 minutes in seconds

        // DOM elements
        this.welcomeScreen = document.getElementById('welcomeScreen');
        this.practiceScreen = document.getElementById('practiceScreen');
        this.resultsScreen = document.getElementById('resultsScreen');
        this.difficultyBtns = document.querySelectorAll('.difficulty-btn');
        this.startBtn = document.getElementById('startBtn');
        this.spellingInput = document.getElementById('spellingInput');
        this.submitBtn = document.getElementById('submitBtn');
        this.skipBtn = document.getElementById('skipBtn');
        this.exitBtn = document.getElementById('exitBtn');
        this.timedModeCheckbox = document.getElementById('timedMode');
        this.pronunciationModeCheckbox = document.getElementById('pronunciationMode');

        // Info buttons
        this.pronounceBtn = document.getElementById('pronounceBtn');
        this.definitionBtn = document.getElementById('definitionBtn');
        this.sentenceBtn = document.getElementById('sentenceBtn');
        this.originBtn = document.getElementById('originBtn');

        // Initialize
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Difficulty selection
        this.difficultyBtns.forEach(btn => {
            btn.addEventListener('click', () => this.selectDifficulty(btn));
        });

        // Mode toggles
        this.timedModeCheckbox.addEventListener('change', (e) => {
            this.timedMode = e.target.checked;
        });

        this.pronunciationModeCheckbox.addEventListener('change', (e) => {
            this.pronunciationMode = e.target.checked;
        });

        // Start button
        this.startBtn.addEventListener('click', () => this.startPractice());

        // Practice controls
        this.submitBtn.addEventListener('click', () => this.checkSpelling());
        this.skipBtn.addEventListener('click', () => this.skipWord());
        this.exitBtn.addEventListener('click', () => this.exitPractice());

        // Enter key to submit
        this.spellingInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkSpelling();
            }
        });

        // Info buttons
        this.pronounceBtn.addEventListener('click', () => this.pronounceWord());
        this.definitionBtn.addEventListener('click', () => this.showDefinition());
        this.sentenceBtn.addEventListener('click', () => this.showSentence());
        this.originBtn.addEventListener('click', () => this.showOrigin());

        // Results screen buttons
        document.getElementById('practiceAgainBtn').addEventListener('click', () => {
            this.resetGame();
            this.startPractice();
        });

        document.getElementById('changeSettingsBtn').addEventListener('click', () => {
            this.resetGame();
            this.showScreen('welcome');
        });
    }

    selectDifficulty(btn) {
        // Remove selection from all buttons
        this.difficultyBtns.forEach(b => b.classList.remove('selected'));

        // Add selection to clicked button
        btn.classList.add('selected');

        // Set difficulty
        this.difficulty = parseInt(btn.dataset.level);

        // Enable start button
        this.startBtn.disabled = false;
    }

    startPractice() {
        if (!this.difficulty) {
            alert('Please select a difficulty level');
            return;
        }

        // Get words for selected difficulty
        this.words = shuffleArray(getWordsByDifficulty(this.difficulty));

        // Reset game state
        this.currentWordIndex = 0;
        this.score = 0;
        this.correct = 0;
        this.incorrect = 0;
        this.missedWords = [];

        // Show practice screen
        this.showScreen('practice');

        // Setup timer if timed mode
        if (this.timedMode) {
            document.getElementById('timerStat').style.display = 'block';
        } else {
            document.getElementById('timerStat').style.display = 'none';
        }

        // Load first word
        this.loadNextWord();
    }

    loadNextWord() {
        if (this.currentWordIndex >= this.words.length) {
            this.showResults();
            return;
        }

        // Clear previous state
        this.spellingInput.value = '';
        this.spellingInput.focus();
        document.getElementById('wordDetails').textContent = '';
        document.getElementById('feedback').textContent = '';
        document.getElementById('feedback').className = 'feedback';

        // Load new word
        this.currentWord = this.words[this.currentWordIndex];

        // Update display
        document.getElementById('wordNumber').textContent = `Word #${this.currentWordIndex + 1}`;

        // Set difficulty badge
        const badge = document.getElementById('currentDifficulty');
        const difficultyLevel = this.getDifficultyLevel(this.currentWord.word);
        badge.className = `difficulty-badge ${difficultyLevel}`;
        badge.textContent = difficultyLevel.replace('-', ' ').toUpperCase();

        // Update stats
        this.updateStats();

        // Auto-pronounce if enabled
        if (this.pronunciationMode) {
            setTimeout(() => this.pronounceWord(), 500);
        }

        // Start timer if timed mode
        if (this.timedMode) {
            this.startTimer();
        }
    }

    getDifficultyLevel(word) {
        if (wordDatabase.oneBee.some(w => w.word === word)) return 'one-bee';
        if (wordDatabase.twoBee.some(w => w.word === word)) return 'two-bee';
        if (wordDatabase.threeBee.some(w => w.word === word)) return 'three-bee';
        return 'one-bee';
    }

    pronounceWord() {
        if (!this.currentWord) return;

        // Use Web Speech API for pronunciation
        const utterance = new SpeechSynthesisUtterance(this.currentWord.word);
        utterance.rate = 0.8; // Slightly slower for clarity
        utterance.pitch = 1;
        utterance.volume = 1;

        window.speechSynthesis.cancel(); // Cancel any ongoing speech
        window.speechSynthesis.speak(utterance);

        // Visual feedback
        this.showInfo('🔊 Pronouncing: "' + this.currentWord.word + '"');
    }

    showDefinition() {
        if (!this.currentWord) return;
        this.showInfo('📖 Definition: ' + this.currentWord.definition);
    }

    showSentence() {
        if (!this.currentWord) return;
        this.showInfo('💬 Example: ' + this.currentWord.sentence);
    }

    showOrigin() {
        if (!this.currentWord) return;
        this.showInfo('🌍 Language of Origin: ' + this.currentWord.origin);
    }

    showInfo(text) {
        const detailsDiv = document.getElementById('wordDetails');
        detailsDiv.textContent = text;
    }

    checkSpelling() {
        const userSpelling = this.spellingInput.value.trim().toLowerCase();

        if (!userSpelling) {
            alert('Please enter a spelling');
            return;
        }

        const correctSpelling = this.currentWord.word.toLowerCase();
        const isCorrect = userSpelling === correctSpelling;

        // Stop timer
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }

        // Update stats
        if (isCorrect) {
            this.correct++;
            this.score += this.getPointsForDifficulty();
            this.showFeedback(true, correctSpelling);
        } else {
            this.incorrect++;
            this.missedWords.push({
                word: this.currentWord.word,
                userSpelling: userSpelling,
                correctSpelling: correctSpelling
            });
            this.showFeedback(false, correctSpelling);
        }

        this.updateStats();

        // Move to next word after delay
        setTimeout(() => {
            this.currentWordIndex++;
            this.loadNextWord();
        }, 2500);
    }

    skipWord() {
        if (confirm('Are you sure you want to skip this word? It will count as incorrect.')) {
            // Stop timer
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }

            this.incorrect++;
            this.missedWords.push({
                word: this.currentWord.word,
                userSpelling: '(skipped)',
                correctSpelling: this.currentWord.word
            });

            this.showFeedback(false, this.currentWord.word, true);
            this.updateStats();

            setTimeout(() => {
                this.currentWordIndex++;
                this.loadNextWord();
            }, 2000);
        }
    }

    getPointsForDifficulty() {
        const level = this.getDifficultyLevel(this.currentWord.word);
        switch(level) {
            case 'one-bee': return 10;
            case 'two-bee': return 20;
            case 'three-bee': return 30;
            default: return 10;
        }
    }

    showFeedback(isCorrect, correctSpelling, skipped = false) {
        const feedbackDiv = document.getElementById('feedback');

        if (skipped) {
            feedbackDiv.textContent = `Skipped! The correct spelling is: ${correctSpelling}`;
            feedbackDiv.className = 'feedback incorrect';
        } else if (isCorrect) {
            const messages = ['Correct!', 'Excellent!', 'Perfect!', 'Well done!', 'Outstanding!'];
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            feedbackDiv.textContent = `✓ ${randomMessage}`;
            feedbackDiv.className = 'feedback correct';
        } else {
            feedbackDiv.textContent = `✗ Incorrect. The correct spelling is: ${correctSpelling}`;
            feedbackDiv.className = 'feedback incorrect';
        }
    }

    startTimer() {
        this.timeRemaining = 120; // 2 minutes
        this.updateTimerDisplay();

        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            if (this.timeRemaining <= 0) {
                clearInterval(this.timer);
                this.timer = null;
                alert('Time is up! Moving to next word.');
                this.skipWord();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('timer').textContent = display;

        // Change color when time is running out
        const timerElement = document.getElementById('timer');
        if (this.timeRemaining <= 30) {
            timerElement.style.color = '#F44336';
        } else {
            timerElement.style.color = '#333';
        }
    }

    updateStats() {
        document.getElementById('score').textContent = this.score;
        document.getElementById('correct').textContent = this.correct;
        document.getElementById('incorrect').textContent = this.incorrect;
    }

    exitPractice() {
        if (confirm('Are you sure you want to exit? Your progress will be saved and results shown.')) {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
            this.showResults();
        }
    }

    showResults() {
        // Stop any ongoing speech
        window.speechSynthesis.cancel();

        // Stop timer
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }

        // Calculate stats
        const totalWords = this.correct + this.incorrect;
        const accuracy = totalWords > 0 ? Math.round((this.correct / totalWords) * 100) : 0;

        // Update results display
        document.getElementById('totalWords').textContent = totalWords;
        document.getElementById('finalCorrect').textContent = this.correct;
        document.getElementById('finalIncorrect').textContent = this.incorrect;
        document.getElementById('accuracy').textContent = accuracy + '%';
        document.getElementById('finalScore').textContent = this.score;

        // Show missed words
        const missedWordsDiv = document.getElementById('missedWords');
        if (this.missedWords.length > 0) {
            let html = '<h3>Words to Review:</h3><ul>';
            this.missedWords.forEach(item => {
                html += `<li><strong>${item.word}</strong> - You spelled: "${item.userSpelling}"</li>`;
            });
            html += '</ul>';
            missedWordsDiv.innerHTML = html;
            missedWordsDiv.style.display = 'block';
        } else {
            missedWordsDiv.innerHTML = '<h3>Perfect! No words missed! 🎉</h3>';
            missedWordsDiv.style.display = 'block';
        }

        // Show results screen
        this.showScreen('results');
    }

    resetGame() {
        this.currentWordIndex = 0;
        this.currentWord = null;
        this.score = 0;
        this.correct = 0;
        this.incorrect = 0;
        this.missedWords = [];

        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }

        window.speechSynthesis.cancel();
    }

    showScreen(screenName) {
        // Hide all screens
        this.welcomeScreen.classList.remove('active');
        this.practiceScreen.classList.remove('active');
        this.resultsScreen.classList.remove('active');

        // Show requested screen
        switch(screenName) {
            case 'welcome':
                this.welcomeScreen.classList.add('active');
                break;
            case 'practice':
                this.practiceScreen.classList.add('active');
                break;
            case 'results':
                this.resultsScreen.classList.add('active');
                break;
        }
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new SpellingBeeApp();
    console.log('Spelling Bee Practice App initialized');
});
