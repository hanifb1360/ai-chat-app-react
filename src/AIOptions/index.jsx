export const arrayItems = [
  {
    name: 'q&A',
    id: 'q&a',
    description: 'Answer questions based on existing knowledge',
    option: {
      model: 'text-davinci-003',
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['\n'],
    },
  },
  {
    name: 'Grammer Correction',
    id: 'grammerCollection',
    description: 'Corrects sentences into standarad English.',
  },
  {
    name: 'Summeriza for a 2nd grader',
    id: 'summary',
    description: 'Translates difficult text into simpler concepts.',
  },
  {
    name: 'English to other languages',
    id: 'translate',
    description:
      'Translates English to other languages like French, Spanish and other languages',
  },
  {
    name: 'Explain code',
    id: 'explainCode',
    description: 'Explans a complicated piece of code',
  },
  {
    name: 'JavaScript to Python',
    id: 'jstopy',
    description:
      'Converts simple JavaScript expressions into Python expressions',
  },
  {
    name: 'q&A',
    id: 'q&a',
    description: 'Answer questions based on existing knowledge',
  },
];
