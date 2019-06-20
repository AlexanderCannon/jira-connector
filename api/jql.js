"use strict";

module.exports = JqlClient;

/**
 * Used to access Jira REST endpoints in '/rest/api/2/jql/autocompletedata'
 *
 * @param {JiraConnector} jiraConnector
 * @constructor JqlClient
 */
function JqlClient(jiraConnector) {
    this.jiraConnector = jiraConnector;

    /**
     * Returns the auto complete data required for JQL searches.
     *
     * @method getAutoCompleteData
     * @memberOf JqlClient#
     * @param opts The options sent to the Jira API.  Ignored by this function.
     * @param [callback] Called when the autocomplete data is returned.
     * @return {Promise} Resolved when the autocomplete data is returned.
     */
    this.getAutoCompleteData = function (opts, callback) {
        var options = {
            uri: this.jiraConnector.buildURL('/jql/autocompletedata'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };

        return this.jiraConnector.makeRequest(options, callback)
    }
}
