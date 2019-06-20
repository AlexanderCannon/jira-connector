"use strict";

module.exports = PriorityClient;

/**
 * Used to access Jira REST endpoints in '/rest/api/2/priority'
 *
 * @param {JiraConnector} jiraConnector
 * @constructor PriorityClient
 */
function PriorityClient(jiraConnector) {
    this.jiraConnector = jiraConnector;

    /**
     * Returns a list of all priorities visible to the user
     *
     * @method getAllPriorities
     * @memberOf PriorityClient#
     * @param opts Ignored
     * @param [callback] Called when the priorities have been retrieved.
     * @return {Promise} Resolved when the priorities have been retrieved.
     */
    this.getAllPriorities = function (opts, callback) {
        var options = {
            uri: this.jiraConnector.buildURL('/priority'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };

        return this.jiraConnector.makeRequest(options, callback);
    };

    /**
     * Get a full representation of the priority that has the given id.
     *
     * @method getPriority
     * @memberOf PriorityClient#
     * @param opts The options sent to the Jira API
     * @param opts.priorityId A String containing a priority id
     * @param [callback] Called when the priority has been retrieved.
     * @return {Promise} Resolved when the priority has been retrieved.
     */
    this.getPriority = function (opts, callback) {
        var options = {
            uri: this.jiraConnector.buildURL('/priority/' + opts.priorityId),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };

        return this.jiraConnector.makeRequest(options, callback);
    };
}
