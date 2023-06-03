'use strict';

module.exports = {
  description: 'Add React component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'enter component name?',
      default: 'MyComponent',
    },
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: '../../components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './components/componentTemplate.hbs',
      },
      {
        type: 'add',
        path: '../../components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: './components/componentTemplate.test.hbs',
      },
    ];

    return actions;
  },
};
