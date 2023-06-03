'use strict';

module.exports = {
  description: 'Add React context',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'enter context name?',
      default: 'MyContext',
    },
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: '../../contexts/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './contexts/contextTemplate.hbs',
      },
      {
        type: 'add',
        path: '../../contexts/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: './contexts/contextTemplate.test.hbs',
      },
    ];

    return actions;
  },
};
