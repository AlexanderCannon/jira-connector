"use strict";

module.exports = ServerInfoClient;

/**
 * Used to access Jira REST endpoints in '/rest/api/2/serverInfo'
 * @param {JiraConnector} jiraConnector
 * @constructor ServerInfoClient
 */
function ServerInfoClient(jiraConnector) {
    this.jiraConnector = jiraConnector;

    /**
     * Returns general information about the current JIRA server.
     *
     * @method getServerInfo
     * @memberOf ServerInfoClient#
     * @param opts The request options sent to the Jira API.
     * @param {boolean} [opts.doHealthCheck] Whether to perform a health check on the server.
     * @param [callback] Called when the server info has been retrieved.
     * @return {Promise} Resolved when the server info has been retrieved.
     */
    this.getServerInfo = function (opts, callback) {
        var options = {
            uri: this.jiraConnector.buildURL('/serverInfo'),
            method: 'GET',
            json: true,
            followAllRedirects: true,
            qs: {
                doHealthCheck: opts.doHealthCheck
            }
        };

        return this.jiraConnector.makeRequest(options, callback);
    }
}
