export interface Outcome {
  id: number;
  name: string;
  description: string;
  nextSituation: number;
}

export const outcomes = [
  {
    id: 1,
    name: 'Successful Courtship',
    description: 'Your crush accepts the court and a marriage is arranged.',
    nextSituation: 2,
  },
  {
    id: 2,
    name: 'Rejection Roses',
    description: 'Your crush is alarmed by the gift and your suit is rejected.',
    nextSituation: 3,
  },
  {
    id: 3,
    name: 'Honeymoon Phase',
    description:
      'The wedding goes smoothly and you settle into a happy marriage.',
    nextSituation: 4,
  },
  {
    id: 4,
    name: 'Left at the Altar',
    description: 'The wedding falls apart and you are left at the altar.',
    nextSituation: 5,
  },
  {
    id: 5,
    name: 'Blind Date',
    description:
      'Your friend sets up a blind date with a mutual friend. You hit it off and get married.',
    nextSituation: 6,
  },
  {
    id: 6,
    name: 'Lonely and Sad',
    description:
      'Your friend is alarmed at your gift and stops contacting you.',
    nextSituation: 7,
  },
  {
    id: 7,
    name: 'Aging Together',
    description:
      'Your spouse recovers and you live happily together into old age.',
    nextSituation: 0,
  },
  {
    id: 8,
    name: 'Duel at Dawn',
    description:
      'Your spouses family takes the gift as an affront and their sibling challenges you to a duel. You fight valiantly but perish quickly.',
    nextSituation: 0,
  },
  {
    id: 9,
    name: 'Big Promotion',
    description:
      'Your boss and his family are impressed with you. You get a big promotion and marry one of his kids.',
    nextSituation: 0,
  },
  {
    id: 10,
    name: 'Struggling Artist',
    description:
      'Your boss is digusted and you are fired. You are forced to work as a struggling artist where you find little success until you eventually die of lead poisoning.',
    nextSituation: 0,
  },
  {
    id: 11,
    name: 'Beautiful Marriage',
    description:
      'Your spouse is happy with the gift and you spend the rest of your days together and happy.',
    nextSituation: 0,
  },
  {
    id: 12,
    name: 'Deadly Drink',
    description:
      'Your spouse is so angry at the gift they deliver you a cup of poisoned tea. You pass away and your spouse goes free.',
    nextSituation: 0,
  },
  {
    id: 13,
    name: 'Remarriage',
    description:
      'The widow appreciates the thoughtful gift and you become close before marrying.',
    nextSituation: 0,
  },
  {
    id: 14,
    name: 'Public Pain',
    description:
      'You are arrested as a suspect in the murder of your accquitance, found guilty, and hanged.',
    nextSituation: 0,
  },
];
