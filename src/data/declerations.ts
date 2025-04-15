export type VocabType = 'Adjective' | 'Noun' | 'Verb';

export type VocabArticle = 'der' | 'die' | 'das';

export type VocabEntity = {
  word: string;
  translation: string;
  type: VocabType;
  article?: VocabArticle;
  plural?: string;
  conjugation?: {
    present: VocabConjugation;
    past: string;
  };
};

export type VocabConjugation = {
  ich: string;
  du: string;
  es: string;
  wir: string;
  ihr: string;
  sie: string;
};

export type ViewType = 'cards' | 'type';
