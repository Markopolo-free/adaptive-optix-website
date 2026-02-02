// Entrypoint to run the audit/align script from src/scripts with project alias support
import auditAndAlignSolutionFeatureSlugs from '../scripts/audit-align-solution-feature-slugs';

auditAndAlignSolutionFeatureSlugs().then(console.log).catch(console.error);