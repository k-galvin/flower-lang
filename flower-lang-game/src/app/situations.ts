export interface Situation {
  id: number;
  name: string;
  description: string;
  type: string;
  flowerIds: number[];
  goodOutcomeIndex: number;
  badOutcomeIndex: number;
}

export const situations = [
  {
    id: 1,
    name: 'Crush',
    description: 'Build a bouquet to express your feelings for your crush.',
    type: 'romantic',
    flowerIds: [1, 3, 5, 9, 23, 24],
    goodOutcomeIndex: 0,
    badOutcomeIndex: 1,
  },
  {
    id: 2,
    name: 'Wedding Bells',
    description:
      'Your wedding is quickly approaching. Choose the flowers that will make up the wedding bouquet.',
    type: 'romantic',
    flowerIds: [6, 8, 10, 21, 27, 30],
    goodOutcomeIndex: 2,
    badOutcomeIndex: 3,
  },
  {
    id: 3,
    name: 'Gift to Friend',
    description: '',
    type: 'friendly',
    flowerIds: [12, 14, 15, 19, 28, 26],
    goodOutcomeIndex: 4,
    badOutcomeIndex: 5,
  },
  {
    id: 4,
    name: 'Spouse Sickness',
    description:
      'Your spouse comes down with the influenza. Build a bouquet that conveys your desire for them to get better',
    type: 'romantic',
    flowerIds: [3, 13, 17, 4, 26, 29],
    goodOutcomeIndex: 6,
    badOutcomeIndex: 7,
  },
  {
    id: 5,
    name: 'Gift to Boss',
    description:
      'Your boss has invited you to his home for an important dinner. Build a bouquet that conveys your admiration and respect.',
    type: 'professional',
    flowerIds: [16, 17, 18, 19, 21, 24],
    goodOutcomeIndex: 8,
    badOutcomeIndex: 9,
  },
  {
    id: 6,
    name: 'Anniversary',
    description:
      'Build a bouquet to gift to your spouse on the event of your 5th anniversary.',
    type: 'romantic',
    flowerIds: [2, 4, 7, 9, 23, 28],
    goodOutcomeIndex: 10,
    badOutcomeIndex: 11,
  },
  {
    id: 7,
    name: 'Funeral Blooms',
    description:
      'An acquaintance passes suddenly. Build a bouquet in order to offer the family your condolences.',
    type: 'sad',
    flowerIds: [11, 16, 20, 22, 25, 29],
    goodOutcomeIndex: 12,
    badOutcomeIndex: 13,
  },
];
