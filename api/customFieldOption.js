"use strict";

var errorStrings = require('./../lib/error');

module.exports = CustomFieldOptionClient;

/**
 * Used to access Jira REST endpoints in '/rest/api/2/customFieldOptions'
 *
 * @param {JiraConnector} jiraConnector
 * @constructor CustomFieldOptionClient
 */
function CustomFieldOptionClient(jiraConnector) {
    this.jiraConnector = jiraConnector;

    /**
     * Returns a full representation of the Custom Field Option that has the given id.
     *
     * @method getCustomFieldOption
     * @memberOf CustomFieldOptionClient#
     * @param {Object} opts The request options sent to the Jira API
     * @param {string} opts.fieldOptionId A String containing an Custom Field Option id
     * @param [callback] Called when data has been retrieved
     * @return {Promise} Resolved when data has been retrieved
     */
    this.getCustomFieldOption = function (opts, callback) {
        if (!opts.fieldOptionId) {
            throw new Error(errorStrings.NO_FIELD_OPTION_ID_ERROR);
        }

        var options = {
            uri: this.jiraConnector.buildURL('/customFieldOption/' + opts.fieldOptionId),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };

        return this.jiraConnector.makeRequest(options, callback);
    };
}
