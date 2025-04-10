export type VocabType = 'Adjective' | 'Noun' | 'Verb';

export type VocabArticle = 'der' | 'die' | 'das';

export type VocabEntity = {
  word: string;
  translation: string;
  type: VocabType;
  article: VocabArticle;
};
