'use strict';

/**
 * kudo service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kudo.kudo');
