/**
 * Defines Webpack globals into an Angular Service.
 *
 */

class service {

  constructor() {
    /*eslint no-undef: "off"*/
    this.appName = 'Media App Name';
    // this.environment = ENVIRONMENT_VARS.environment;
    // this.featureFlags = ENVIRONMENT_VARS.featureFlags;
    // this.googleMaps = ENVIRONMENT_VARS.googleMaps || null;
    // this.languages = ENVIRONMENT_VARS.languages;
    // this.locales = ENVIRONMENT_VARS.locales;
    // this.platform = ENVIRONMENT_VARS.platform;
    // this.distanceUnit = ENVIRONMENT_VARS.distanceUnit || 'miles';
    //
    // this.defaultUrl = ENVIRONMENT_VARS.urls.default || 'home';
    // this.gatewayUrl = ENVIRONMENT_VARS.urls.gateway || '';
    // this.ssoSignoutUrl = ENVIRONMENT_VARS.urls.ssoSignout || '';
    // this.intercom = ENVIRONMENT_VARS.intercom || {};
    // this.version = ENVIRONMENT_VARS.version;
    // this.mapQuest = ENVIRONMENT_VARS.mapQuest || {};
  }

}

export default angular
  .module('common.services.rlConfig', [])
  .service('rlConfig', service)
  .name;
