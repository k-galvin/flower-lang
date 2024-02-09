export interface Situation {
  id: number;
  name: string;
  description: string;
  type: string;
  flowers: number[];
  goodOutcome: number;
  badOutcome: number;
}

export const situations = [
  {
    id: 1,
    name: 'Crush',
    description: 'Build a bouquet to express your feelings for your crush.',
    type: 'romantic',
    flowers: [1, 3, 5, 9, 23, 24],
    goodOutcome: 1,
    badOutcome: 2,
  },
  {
    id: 2,
    name: 'Wedding Bells',
    description:
      'Your wedding is quickly approaching. Choose the flowers that will make up the wedding bouquet.',
    type: 'romantic',
    flowers: [6, 8, 10, 21, 27, 30],
    possibleOutcomes: '',
    goodOutcome: 3,
    badOutcome: 4,
  },
  {
    id: 3,
    name: 'Gift to Friend',
    description: '',
    type: 'friendly',
    flowers: [12, 14, 15, 19, 28, 26],
    goodOutcome: 5,
    badOutcome: 6,
  },
  {
    id: 4,
    name: 'Spouse Sickness',
    description:
      'Your spouse comes down with the influenza. Build a bouquet that conveys your desire for them to get better',
    type: 'romantic',
    flowers: [3, 13, 17, 4, 26, 29],
    goodOutcome: 7,
    badOutcome: 8,
  },
  {
    id: 5,
    name: 'Gift to Boss',
    description:
      'Your boss has invited you to his home for an important dinner. Build a bouquet that conveys your admiration and respect.',
    type: 'professional',
    flowers: [17, 17, 18, 19, 21, 24],
    goodOutcome: 9,
    badOutcome: 10,
  },
  {
    id: 6,
    name: 'Anniversary',
    description:
      'Build a bouquet to gift to your spouse on the event of your 5th anniversary.',
    type: 'romantic',
    flowers: [2, 4, 7, 9, 23, 28],
    goodOutcome: 11,
    badOutcome: 12,
  },
  {
    id: 7,
    name: 'Funeral Blooms',
    description:
      'An acquaintance passes suddenly. Build a bouquet in order to offer the family your condolences.',
    type: 'sad',
    flowers: [11, 16, 20, 22, 25, 29],
    goodOutcome: 13,
    badOutcome: 14,
  },
];
