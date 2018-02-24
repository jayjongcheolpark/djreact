export const getAllGameTitles = () => [
  {
    gameTitle: 'crime',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
  {
    gameTitle: 'life',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
  {
    gameTitle: 'nature',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
  {
    gameTitle: 'romance',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
  {
    gameTitle: 'drama',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
  {
    gameTitle: 'dating',
    description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.',
  },
]

export const getAllQuestionsByGameTitle = gameTitle => [
  {
    questionNumber: 1,
    questionString: 'Which Way?',
    answers: [
      { text: 'North', next: 2, animation: 'fadeout', effect: -20 },
      { text: 'East', next: 2, animation: 'fadeout', effect: -20 },
      { text: 'South', next: 3, animation: 'fadeout', effect: -20 },
      { text: 'West', next: 3, animation: 'fadeout', effect: -20 },
    ],
  },
  {
    questionNumber: 2,
    questionString: 'Where you go?',
    answers: [
      { text: 'North', next: 4, animation: 'fadeout', effect: -20 },
      { text: 'East', next: 4, animation: 'fadeout', effect: -20 },
      { text: 'South', next: 5, animation: 'fadeout', effect: -20 },
      { text: 'West', next: 5, animation: 'fadeout', effect: -20 },
    ],
  },
  {
    questionNumber: 3,
    questionString: 'Which direction do you want?',
    answers: [
      { text: 'North', next: 4, animation: 'fadeout', effect: -20 },
      { text: 'East', next: 4, animation: 'fadeout', effect: -20 },
      { text: 'South', next: 4, animation: 'fadeout', effect: -20 },
      { text: 'West', next: 4, animation: 'fadeout', effect: -20 },
    ],
  },
  {
    questionNumber: 4,
    questionString: 'What do you want to do?',
    answers: [
      { text: 'Eat', next: 5, animation: 'fadeout', effect: -20 },
      { text: 'Play', next: 5, animation: 'fadeout', effect: -20 },
      { text: 'Pray', next: 5, animation: 'fadeout', effect: -20 },
      { text: 'Drink', next: 5, animation: 'fadeout', effect: -20 },
    ],
  },
  {
    questionNumber: 5,
    questionString: 'The end',
    answers: [
      { text: 'The end', next: 1, animation: 'fadeout', effect: -20 },
      { text: 'The end', next: 1, animation: 'fadeout', effect: -20 },
      { text: 'The end', next: 1, animation: 'fadeout', effect: -20 },
      { text: 'The end', next: 1, animation: 'fadeout', effect: -20 },
    ],
  },
]
