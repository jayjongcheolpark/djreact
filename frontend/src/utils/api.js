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
    questionString:
      'You find yourself stranded on an island. It has an eerie feel to it. Something feels unsettling to you. Off in the distance you see a path that leads into the wilderness.',
    answers: [
      { text: 'Sit tight', next: 2, animation: 'health', effect: -100 },
      { text: 'Into the wilderness', next: 3, animation: 'water', effect: -20 },
    ],
  },
  {
    questionNumber: 2,
    questionString: 'You die of boredom and starvation',
    answers: [],
  },
  {
    questionNumber: 3,
    questionString:
      'You venture into the wilderness. You hear the sounds of birds chirping, insects hissing. The vast diversity of the place wonders you. Suddenly, as you walk along the trail, you see the path diverges, one leading to a cave and another leading to a waterfall.',
    answers: [
      { text: 'Cave', next: 5, animation: 'fadeout', effect: -100 },
      { text: 'Waterfall', next: 4, animation: 'fadeout', effect: -100 },
    ],
  },
  {
    questionNumber: 4,
    questionString: 'You fall into the waterfall and you drown.',
    answers: [],
  },
  {
    questionNumber: 5,
    questionString: 'You walk in, the cave collapses and you die.',
    answers: [],
  },
]
