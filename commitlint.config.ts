import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-atom',
  formatter: '@commitlint/format',
  rules: {
    'type-enum': [
      RuleConfigSeverity.Warning,
      'always',
      ['fix', 'feat', 'docs', 'style', 'refactor', 'perf', 'test', 'build', 'ci']
    ]
  }
};

export default Configuration;
