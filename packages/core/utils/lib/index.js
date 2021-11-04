'use strict';

/**
 * Export shared utilities
 */
const { buildQuery, hasDeepFilters } = require('./build-query');
const parseMultipartData = require('./parse-multipart');
const parseType = require('./parse-type');
const policy = require('./policy');
const templateConfiguration = require('./template-configuration');
const { yup, formatYupErrors } = require('./validators');
const {
  nameToSlug,
  nameToCollectionName,
  getCommonBeginning,
  escapeQuery,
  stringIncludes,
  stringEquals,
  isKebabCase,
  isCamelCase,
} = require('./string-formatting');
const { removeUndefined } = require('./object-formatting');
const { getConfigUrls, getAbsoluteAdminUrl, getAbsoluteServerUrl } = require('./config');
const { generateTimestampCode } = require('./code-generator');
const contentTypes = require('./content-types');
const webhook = require('./webhook');
const env = require('./env-helper');
const relations = require('./relations');
const setCreatorFields = require('./set-creator-fields');
const hooks = require('./hooks');
const providerFactory = require('./provider-factory');
const pagination = require('./pagination');
const sanitize = require('./sanitize');
const traverseEntity = require('./traverse-entity');

module.exports = {
  yup,
  formatYupErrors,
  policy,
  templateConfiguration,
  buildQuery,
  hasDeepFilters,
  parseMultipartData,
  sanitize,
  traverseEntity,
  parseType,
  nameToSlug,
  nameToCollectionName,
  getCommonBeginning,
  getConfigUrls,
  escapeQuery,
  removeUndefined,
  getAbsoluteAdminUrl,
  getAbsoluteServerUrl,
  generateTimestampCode,
  stringIncludes,
  stringEquals,
  isKebabCase,
  isCamelCase,
  contentTypes,
  webhook,
  env,
  relations,
  setCreatorFields,
  hooks,
  providerFactory,
  pagination,
};
