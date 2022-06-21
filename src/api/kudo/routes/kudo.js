'use strict';

/**
 * kudo router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::kudo.kudo');
