// Entrypoint to run the audit/align script from the root scripts folder
import auditAndAlignSolutionFeatureSlugs from '../../scripts/audit-align-solution-feature-slugs';

auditAndAlignSolutionFeatureSlugs().then(console.log).catch(console.error);