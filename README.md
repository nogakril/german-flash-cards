# German Flashcards 🇩🇪

A custom flashcard app to help memorize **German vocabulary**.  
I’m currently learning German, and I've found that most vocabulary learning apps are either too expensive or overly complicated.
This project is my attempt to create a minimal, personalized flashcard system that I can extend as I go. 
Still in progress!

---

## ✨ Features
- Add and review German vocabulary words
- Practice with flashcards to test recall
- Focused design for personal learning goals
- Free and customizable (no subscriptions!)

---

 ## 📊 Word List (Google Sheet)
The app fetches vocabulary from this Google Sheet:  
👉 [German Vocabulary Sheet](https://docs.google.com/spreadsheets/d/1v98WlHxJgd7oMsfra2cAD5KH_xFEmQdZXTEQIlKn3Uc/edit?gid=0#gid=0)

- To **add new words**, just edit the sheet.  
- Each row represents a word entry (e.g. German | English | Notes).  
- Changes will automatically be reflected in the app (next reload).

> If you want your own version, make a copy of the sheet (`File > Make a copy`) and update the sheet ID in the app code.

---

## 🚀 Getting Started
1. Clone the repo:
   ```bash
   git clone https://github.com/nogakril/flash-cards.git
   cd flash-cards
   ```
2. Install dependencies:
   ```bash
   npm install   # or yarn / pnpm install
   ```
3. Start the app:
   ```bash
   npm run dev
   ```
4. Open your browser at http://localhost:5173.

---

## Demo

Typing mode:
<img width="1475" height="466" alt="image" src="https://github.com/user-attachments/assets/6cf96eb8-e657-4b99-b805-1c45a332c31f" />

Flash cards mode:
<img width="1482" height="611" alt="image" src="https://github.com/user-attachments/assets/5cfc548f-2f4f-453e-8745-c58e83814652" />
