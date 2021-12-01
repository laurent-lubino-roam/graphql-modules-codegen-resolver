import fs from 'fs';
import { ActionType, NodePlopAPI } from 'plop';

const LIST_OPTIONS_GLOBAL = ['new', 'existing'];
const LIST_OPTIONS_MODULES = fs
  .readdirSync('./src/modules')
  .filter((path) => path.substr(0, 2) !== '__' && path.substr(path.length - 3) !== '.ts');

export default function generateFiles(plop: NodePlopAPI): void {
  plop.addHelper('decidePath', (newOrExisting: string, name: string, path?: string) =>
    newOrExisting === 'new' ? name : path
  );
  plop.setGenerator('Generate new module', {
    description: 'Create all files required for new module',
    prompts: [
      {
        type: 'list',
        name: 'newOrExisting',
        message: 'Do you want to create a new module or add to existing one?',
        choices: LIST_OPTIONS_GLOBAL,
      },
      {
        type: 'list',
        name: 'path',
        message: 'Select existing module',
        choices: LIST_OPTIONS_MODULES,
        when(answers) {
          return answers.newOrExisting === LIST_OPTIONS_GLOBAL[1];
        },
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter module name',
      },
    ],
    actions(answers) {
      const files: { [key: string]: ActionType } = {
        ...(answers?.newOrExisting === 'new'
          ? {
              module: {
                type: 'add',
                path: './src/modules/{{decidePath newOrExisting (camelCase name) path}}/{{camelCase name}}.module.ts',
                templateFile: './plop-templates/module.hbs',
                skipIfExists: true,
              },
              applicationImport: {
                type: 'modify',
                path: './src/modules/application.ts',
                pattern: /(\/\/ -- PREPEND IMPORT HERE --)/gi,
                template: `import { {{camelCase name}}Module } from './{{camelCase name}}/{{camelCase name}}.module';\n// -- PREPEND IMPORT HERE --`,
              },
              applicationExport: {
                type: 'modify',
                path: './src/modules/application.ts',
                pattern: /(\/\/ -- PREPEND EXPORT HERE --)/gi,
                template: '{{camelCase name}}Module,\n    // -- PREPEND EXPORT HERE --',
              },
            }
          : {}),
        schema: {
          type: 'add',
          path: './src/modules/{{decidePath newOrExisting (camelCase name) path}}/schemas/{{camelCase name}}.schema.gql',
          templateFile: './plop-templates/schema.hbs',
          skipIfExists: true,
        },
        resolver: {
          type: 'add',
          path: './src/modules/{{decidePath newOrExisting (camelCase name) path}}/resolvers/{{camelCase name}}.resolver.ts',
          templateFile: './plop-templates/resolver.hbs',
          skipIfExists: true,
        },
        provider: {
          type: 'add',
          path: './src/modules/{{decidePath newOrExisting (camelCase name) path}}/providers/{{camelCase name}}.provider.ts',
          templateFile: './plop-templates/provider.hbs',
          skipIfExists: true,
        },
        test: {
          type: 'add',
          path: './src/modules/{{decidePath newOrExisting (camelCase name) path}}/__tests__/{{camelCase name}}.test.ts',
          templateFile: './plop-templates/test.hbs',
          skipIfExists: true,
        },
      };

      return Object.values(files);
    },
  });
}
