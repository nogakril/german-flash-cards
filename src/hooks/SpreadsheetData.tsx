import { useEffect, useState } from 'react';

import PublicGoogleSheetsParser from 'public-google-sheets-parser';

import { VocabConjugation, VocabEntity } from '../data/declerations';

const SHEET_ID = '1v98WlHxJgd7oMsfra2cAD5KH_xFEmQdZXTEQIlKn3Uc';

// const mockItems: VocabEntity[] = [
//   {
//     word: 'nett',
//     translation: 'nice',
//     type: 'Adjective',
//   },
//   {
//     word: 'essen',
//     translation: 'eat',
//     type: 'Verb',
//     conjugation: {
//       present: {
//         ich: 'esse',
//         du: 'isst',
//         es: 'isst',
//         wir: 'essen',
//         ihr: 'esst',
//         sie: 'essen',
//       },
//       past: 'gegessen',
//     },
//   },
//   {
//     word: 'Tisch',
//     translation: 'Table',
//     type: 'Noun',
//     plural: 'Tische',
//     article: 'der',
//   },
// ];

const useSpreadsheetData = () => {
  const [items, setItems] = useState<VocabEntity[]>([]);

  useEffect(() => {
    const options = { sheetName: 'Sheet1', useFormat: true };
    const parser = new PublicGoogleSheetsParser(SHEET_ID, options);
    parser.parse().then((data) => {
      const entities = data.map((item: any) => ({
        word: item.word,
        translation: item.translation,
        type: item.type,
        article: item.article,
        id: item.id,
        plural: item.plural,
        conjugation: {
          past: item.past,
          present: {
            ich: item.presentIch,
            du: item.presentDu,
            es: item.presentEs,
            wir: item.presentWir,
            ihr: item.presentIhr,
            sie: item.presentSie,
          } as VocabConjugation,
        },
      }));
      setItems(entities);
    });
    // setItems(mockItems);
  }, []);

  return items;
};

export default useSpreadsheetData;
