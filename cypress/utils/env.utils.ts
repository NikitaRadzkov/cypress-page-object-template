export const ENVS = {
  dev: 'https://www.google.com',
  stage: 'https://practice.automationtesting.in',
  prod: 'https://www.onliner.by'
};

/**
 * Trims `pathname` in link and return clear link.
 *
 * Example: from `https://www.google.com/` -> to `https://www.google.com`
 * @param str Url string
 */
const _trimSlash = (str: string) => new URL(str).origin;

/**
 * Validates url according to available properties in ENVS object.
 */
const _validateUrl = (obj: object, key: string): string => {
  if (Object.keys(obj).includes(key)) {
    return _trimSlash(obj[key]);
  } else {
    throw new Error(`Key "${key}" in not defined in ENVS.`);
  }
};

/**
 * Validates customUrl when `config.env.url` is `custom`.
 */
const _validateCustomUrl = (customUrl: string): string => {
  if (customUrl != undefined && (customUrl.indexOf('http://') == 0 || customUrl.indexOf('https://') == 0)) {
    return _trimSlash(customUrl);
  } else {
    throw new Error(
      `Your customUrl ("${customUrl}") is invalid (or undefined).
          Set 'customUrl' correctly (with 'http://' or 'https://') and re-run Cypress.`
    );
  }
};

/**
 * Evaluates Cypress' `baseUrl` with validators.
 * @param config
 * @param isFromEnv means whether config will be read from passed Cypress.env() value or Cypress.config()
 * If you want to get `baseUrl` during test run - call `Cypress.config().baseUrl`
 * @returns
 */
export const evalUrl = (config: Cypress.PluginConfigOptions | Cypress.ObjectLike, isFromEnv = false): string => {
  const valueToCheck = isFromEnv ? config : config.env;
  if (valueToCheck.url == 'custom') {
    return _validateCustomUrl(valueToCheck.customUrl);
  } else if (valueToCheck.url == undefined) {
    config.env.url = 'staging';
    return ENVS.staging;
  } else {
    return _validateUrl(ENVS, valueToCheck.url);
  }
};
