import React, { useState } from 'react';
import styles from './UserVocabulary.module.css';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

function Vocabulary() {
    const [word, setWord] = useState('');
    const [transcription, setTranscription] = useState('');
    const [translation, setTranslation] = useState('');
    const [words, setWords] = useState([
        { word: 'apple', transcription: '[ˈæp.əl]', translation: 'яблуко', img: '../../../assets/img/apple.png' },
        { word: 'book', transcription: '[bʊk]', translation: 'книга', img: '../../../assets/img/book.png' },
        { word: 'cat', transcription: '[kæt]', translation: 'кіт', img: '../../../assets/img/cat.png' },
        { word: 'dog', transcription: '[dɔɡ]', translation: 'пес', img: '../../../assets/img/dog.png' },
        { word: 'house', transcription: '[haʊs]', translation: 'будинок', img: '../../../assets/img/house.png' },
        { word: 'school', transcription: '[skuːl]', translation: 'школа', img: '../../../assets/img/school.png' },
        { word: 'friend', transcription: '[frɛnd]', translation: 'друг', img: '../../../assets/img/friend.png' },
        { word: 'water', transcription: '[ˈwɔː.tər]', translation: 'вода', img: '../../../assets/img/water.png' },
        { word: 'food', transcription: '[fuːd]', translation: 'їжа', img: '../../../assets/img/food.png' },
        { word: 'happy', transcription: '[ˈhæp.i]', translation: 'щасливий', img: '../../../assets/img/happy.png' },
    ]);
    const [foundWord, setFoundWord] = useState(true);
    const [showAddWord, setShowAddWord] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const handleSearch = () => {
        if (!word.trim()) return;
        const index = words.findIndex((w) => w.word.toLowerCase() === word.toLowerCase());
        const exists = index !== -1;
        setFoundWord(exists);
        setShowAddWord(!exists);
        if (exists) {
            setHighlightedIndex(index);
            setTimeout(() => setHighlightedIndex(-1), 2000);
        }
    };

    const handleAddWord = () => {
        if (translation) {
            const newWord = { word, transcription, translation, img: '../../../assets/img/default.png' };
            setWords([...words, newWord]);
            setWord('');
            setTranscription('');
            setTranslation('');
            setShowAddWord(false);
        }
    };

    return (
        <div className={styles.vocabulary}>
            <div className={styles.contentContainer}>
                <Header />
                <div className={styles.section}>
                    <div className={styles.searchedDiv}>
                        <input
                            type="text"
                            placeholder="Уведіть слово"
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                        />
                        <button onClick={handleSearch}>Шукати</button>
                    </div>
                    <div className={styles.box}>
                        {words.map((entry, index) => (
                            <div
                                className={`${styles.wordEntry} ${highlightedIndex === index ? styles.highlight : ''}`}
                                key={index}
                            >
                                <span>{entry.word}</span>
                                <span>{entry.transcription}</span>
                                <span>{entry.translation}</span>
                                <span>
                                    <img src={entry.img} alt={entry.word} />
                                </span>
                            </div>
                        ))}
                        {!foundWord && word && (
                            <div style={{ color: 'red', marginTop: '20px' }}>Слово "{word}" не знайдено.</div>
                        )}
                    </div>
                    {showAddWord && (
                        <div className={styles.addWordContainer}>
                            <p>Додайте нове слово до словника:</p>
                            <input
                                type="text"
                                placeholder="Транскрипція (необов'язково)"
                                value={transcription}
                                onChange={(e) => setTranscription(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Переклад (обов'язково)"
                                value={translation}
                                onChange={(e) => setTranslation(e.target.value)}
                            />
                            <button onClick={handleAddWord}>Додати слово</button>
                            <button onClick={() => setShowAddWord(false)}>Скасувати</button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Vocabulary;
