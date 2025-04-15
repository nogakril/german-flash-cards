import { useEffect, useState } from 'react';

import PublicGoogleSheetsParser from 'public-google-sheets-parser';

import { VocabEntity } from '../data/declerations';

const SHEET_ID = '1v98WlHxJgd7oMsfra2cAD5KH_xFEmQdZXTEQIlKn3Uc';

const mockItems: VocabEntity[] = [
  {
    word: 'essen',
    translation: 'eat',
    type: 'Verb',
    conjugation: {
      present: {
        ich: 'esse',
        du: 'isst',
        es: 'isst',
        wir: 'essen',
        ihr: 'esst',
        sie: 'essen',
      },
      past: 'gegessen',
    },
  },
  {
    word: 'Tisch',
    translation: 'Table',
    type: 'Noun',
    plural: 'Tische',
    article: 'der',
  },
];

const useSpreadsheetData = () => {
  const [items, setItems] = useState<VocabEntity[]>([]);

  useEffect(() => {
    // const options = { sheetName: 'Sheet1', useFormat: true };
    // const parser = new PublicGoogleSheetsParser(SHEET_ID, options);
    // parser.parse().then((data) => {
    //   const entities = data.map((item: any) => ({
    //     word: item.word,
    //     translation: item.translation,
    //     type: item.type,
    //     article: item.article,
    //     id: item.id,
    //     plural: item.plural,
    //   }));
    //   setItems(entities);
    setItems(mockItems);
  }, []);

  return items;
};

export default useSpreadsheetData;
