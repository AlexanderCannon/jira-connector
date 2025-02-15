"use strict";

module.exports = SecurityLevelClient;

/**
 * Used to access Jira REST endpoints in '/rest/api/2/securitylevel'
 *
 * @param {JiraConnector} jiraConnector
 * @constructor SecurityLevelClient
 */
function SecurityLevelClient(jiraConnector) {
    this.jiraConnector = jiraConnector;

    /**
     * Get a full representation of the security level that has the given id.
     *
     * @method getSecurityLevel
     * @memberOf SecurityLevelClient#
     * @param opts The request options to send to the Jira API.
     * @param opts.securityLevelId The id of the security level to retrieve
     * @param [callback] Called when the security level has been retrieved.
     * @return {Promise} Resolved when the security level has been retrieved.
     */
    this.getSecurityLevel = function (opts, callback) {
        var options = {
            uri: this.jiraConnector.buildURL('/securitylevel/' + opts.securityLevelId),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };

        return this.jiraConnector.makeRequest(options, callback);
    }
}
