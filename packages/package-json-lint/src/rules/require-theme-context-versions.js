const semver = require('semver');

const versionSet = [
  { name: '@cerner/terra-docs', versionRange: '>=1.0.0' },
  { name: 'terra-abstract-modal', versionRange: '>=3.25.0' },
  { name: 'terra-action-footer', versionRange: '>=2.42.0' },
  { name: 'terra-action-header', versionRange: '>=2.43.0' },
  { name: 'terra-alert', versionRange: '>=4.29.0' },
  { name: 'terra-application-header-layout', versionRange: '>=3.28.0' },
  { name: 'terra-application-links', versionRange: '>=6.34.0' },
  { name: 'terra-application-name', versionRange: '>=3.30.0' },
  { name: 'terra-application-navigation', versionRange: '>=1.37.0' },
  { name: 'terra-application-utility', versionRange: '>=2.35.0' },
  { name: 'terra-application', versionRange: '>=1.19.0' },
  { name: 'terra-avatar', versionRange: '>=3.3.0' },
  { name: 'terra-badge', versionRange: '>=3.35.0' },
  { name: 'terra-brand-footer', versionRange: '>=2.24.0' },
  { name: 'terra-button-group', versionRange: '>=3.39.0' },
  { name: 'terra-button', versionRange: '>=3.36.0' },
  { name: 'terra-card', versionRange: '>=3.27.0' },
  { name: 'terra-cell-grid', versionRange: '>=1.5.0' },
  { name: 'terra-clinical-data-grid', versionRange: '>=2.25.0' },
  { name: 'terra-clinical-detail-view', versionRange: '>=3.20.0' },
  { name: 'terra-clinical-header', versionRange: '>=3.16.0' },
  { name: 'terra-clinical-item-display', versionRange: '>=3.18.0' },
  { name: 'terra-clinical-item-view', versionRange: '>=3.19.0' },
  { name: 'terra-clinical-label-value-view', versionRange: '>=3.20.0' },
  { name: 'terra-clinical-onset-picker', versionRange: '>=4.21.0' },
  { name: 'terra-collapsible-menu-view', versionRange: '>=6.34.0' },
  { name: 'terra-date-input', versionRange: '>=1.14.0' },
  { name: 'terra-date-picker', versionRange: '>=4.38.0' },
  { name: 'terra-date-time-picker', versionRange: '>=4.38.0' },
  { name: 'terra-demographics-banner', versionRange: '>=3.37.0' },
  { name: 'terra-dialog-modal', versionRange: '>=3.38.0' },
  { name: 'terra-dialog', versionRange: '>=2.42.0' },
  { name: 'terra-divider', versionRange: '>=3.27.0' },
  { name: 'terra-dropdown-button', versionRange: '>=1.14.0' },
  { name: 'terra-form-checkbox', versionRange: '>=4.3.0' },
  { name: 'terra-form-field', versionRange: '>=4.3.0' },
  { name: 'terra-form-fieldset', versionRange: '>=2.42.0' },
  { name: 'terra-form-input', versionRange: '>=3.5.0' },
  { name: 'terra-form-radio', versionRange: '>=4.5.0' },
  { name: 'terra-form-select', versionRange: '>=6.6.0' },
  { name: 'terra-form-textarea', versionRange: '>=4.5.0' },
  { name: 'terra-grid', versionRange: '>=6.21.0' },
  { name: 'terra-html-table', versionRange: '>=1.6.0' },
  { name: 'terra-hyperlink', versionRange: '>=2.34.0' },
  { name: 'terra-icon', versionRange: '>=3.32.0' },
  { name: 'terra-image', versionRange: '>=3.28.0' },
  { name: 'terra-layout', versionRange: '>=4.24.0' },
  { name: 'terra-list', versionRange: '>=4.31.0' },
  { name: 'terra-menu', versionRange: '>=6.34.0' },
  { name: 'terra-modal-manager', versionRange: '>=6.34.0' },
  { name: 'terra-navigation-side-menu', versionRange: '>=2.31.0' },
  { name: 'terra-notification-dialog', versionRange: '>=3.35.0' },
  { name: 'terra-overlay', versionRange: '>=3.49.0' },
  { name: 'terra-paginator', versionRange: '>=2.51.0' },
  { name: 'terra-popup', versionRange: '>=6.35.0' },
  { name: 'terra-profile-image', versionRange: '>=3.30.0' },
  { name: 'terra-progress-bar', versionRange: '>=4.23.0' },
  { name: 'terra-search-field', versionRange: '>=3.51.0' },
  { name: 'terra-section-header', versionRange: '>=2.37.0' },
  { name: 'terra-show-hide', versionRange: '>=2.35.0' },
  { name: 'terra-signature', versionRange: '>=2.30.0' },
  { name: 'terra-slide-group', versionRange: '>=4.21.0' },
  { name: 'terra-slide-panel', versionRange: '>=3.27.0' },
  { name: 'terra-spacer', versionRange: '>=3.40.0' },
  { name: 'terra-status-view', versionRange: '>=4.27.0' },
  { name: 'terra-switch', versionRange: '>=1.0.0' },
  { name: 'terra-table', versionRange: '>=4.8.0' },
  { name: 'terra-tabs', versionRange: '>=6.35.0' },
  { name: 'terra-tag', versionRange: '>=2.35.0' },
  { name: 'terra-text', versionRange: '>=4.31.0' },
  { name: 'terra-time-input', versionRange: '>=4.29.0' },
  { name: 'terra-toolbar', versionRange: '>=1.8.0' },
];

module.exports = {
  create: ({ ruleConfig, report }) => ({
    dependencies: (dependencies) => {
      const currentProblems = versionSet.map(({ name, versionRange }) => {
        const dependencyVersion = dependencies[name];
        if (dependencyVersion && !semver.satisfies(semver.minVersion(dependencyVersion), versionRange)) {
          return `${name}@${dependencyVersion} does not satisfy range requirement for no terra base peer dependencies: ${name}@${versionRange}`;
        }
        return undefined;
      }).filter(problem => !!problem);

      if (currentProblems.length) {
        const lintMessage = `The dependencies for this project do not have the minimum versions required for theming context:\n  ${currentProblems.join('\n  ')}`;
        report({
          lintId: 'require-theme-context-versions', severity: ruleConfig.severity, lintMessage,
        });
      }
    },
  }),
};