"use strict";

module.exports = IssueTypeClient;

/**
 * Used to access Jira REST endpoints in '/rest/api/2/issuetype'
 *
 * @param {JiraConnector} jiraConnector
 * @constructor IssueTypeClient
 */
function IssueTypeClient(jiraConnector) {
    this.jiraConnector = jiraConnector;

    /**
     * Returns a list of all issue types visible to the user
     *
     * @method getAllIssueTypes
     * @memberOf IssueTypeClient#
     * @param opts Ignored
     * @param {Function} [callback] Called when the issue types have been retrieved.
     * @return {Promise} Resolved when the issue types have been retrieved.
     */
    this.getAllIssueTypes = function (opts, callback) {
        var options = {
            uri: this.jiraConnector.buildURL('/issuetype'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };

        return this.jiraConnector.makeRequest(options, callback);
    };

    /**
     * Creates an issue type from a JSON representation and adds the issue newly
     * created issue type to the default issue type scheme.
     *
     * @method createIssueType
     * @memberOf IssueTypeClient#
     * @param {Object} issueType Object containing details of the new issueType.
     *      Schema:
     *      * "name" - The name of the issue type
     *      * "description" - Some description about the issue type
     *      * "type" - Can have either "subtask" or "standard" as value
     * @param {Function} [callback] Called when the issue type has been created.
     * @return {Promise} Resolved when the issue type has been created.
     */
    this.createIssueType = function (issueType, callback) {
        var options = {
            uri: this.jiraConnector.buildURL('/issuetype'),
            method: 'POST',
            json: true,
            followAllRedirects: true,
            body: issueType,
        };

        return this.jiraConnector.makeRequest(options, callback);
    };

    /**
     * Get a full representation of the issue type that has the given id.
     *
     * @method getIssueType
     * @memberOf IssueTypeClient#
     * @param {Object} opts The options sent to the Jira API
     * @param {String} opts.issueTypeId A String containing an issue type id
     * @param {Function} [callback] Called when the issue type has been retrieved.
     * @return {Promise} Resolved when the issue type has been retrieved.
     */
    this.getIssueType = function (opts, callback) {
        var options = {
            uri: this.jiraConnector.buildURL('/issuetype/' + opts.issueTypeId),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };

        return this.jiraConnector.makeRequest(options, callback);
    };

    /**
     * Deletes the specified issue type.
     * If the issue type has any associated issues, these issues will be
     * migrated to the alternative issue type specified in the parameter.
     * You can determine the alternative issue types by calling the /rest/api/2/issuetype/{id}/alternatives resource.
     *
     * @method deleteIssueType
     * @memberOf IssueTypeClient#
     * @param {Object} opts The options to send to the JIRA API
     * @param {String} opts.issueTypeId ID of the issueType to be deleted.
     * @param {String} opts.alternativeIssueTypeId the id of an issue type to which issues
     *          associated with the removed issue type will be migrated.
     * @param {Function} [callback] Called when the issue type has been deleted.
     * @return {Promise} Resolved when the issue type has been deleted.
     */
    this.deleteIssueType = function (opts, callback) {
        var options = {
            uri: this.jiraConnector.buildURL('/issuetype/' + opts.issueTypeId),
            method: 'DELETE',
            json: true,
            followAllRedirects: true,
            qs: {
                alternativeIssueTypeId: opts.alternativeIssueTypeId,
            },
        };

        return this.jiraConnector.makeRequest(options, callback);
    };

    /**
     * Updates the specified issue type from a JSON representation.
     *
     * @method updateIssueType
     * @memberOf IssueTypeClient#
     * @param {Object} opts The options sent to the Jira API
     * @param {String} opts.issueTypeId ID of the issue type to update.
     * @param {Object} opts.issueType Object containing details of the issueType to be updated.
     *      Schema:
     *      * "name" - The name of the issue type
     *      * "description" - Some description about the issue type
     *      * "avatarId" - Integer containing the avatar ID
     * @param {Function} [callback] Called when the issue type has been updated.
     * @return {Promise} Resolved when the issue type has been updated.
     */
    this.updateIssueType = function (opts, callback) {
        var options = {
            uri: this.jiraConnector.buildURL('/issuetype/' + opts.issueTypeId),
            method: 'PUT',
            json: true,
            followAllRedirects: true,
            body: opts.issueType,
        };

        return this.jiraConnector.makeRequest(options, callback);
    };

    /**
     * Returns a list of all alternative issue types for the given issue type id.
     * The list will contain these issues types, to which issues assigned to the given
     * issue type can be migrated. The suitable alternatives are issue types which are
     * assigned to the same workflow, the same field configuration and the same screen scheme.
     *
     * @method getAlternativeIssueTypes
     * @memberOf IssueTypeClient#
     * @param {Object} opts The options sent to the Jira API
     * @param {String} opts.issueTypeId A String containing an issue type id
     * @param {Function} [callback] Called when the issue type has been retrieved.
     * @return {Promise} Resolved when the issue type has been retrieved.
     */
    this.getAlternativeIssueTypes = function (opts, callback) {
        var options = {
            uri: this.jiraConnector.buildURL('/issuetype/' + opts.issueTypeId + '/alternatives'),
            method: 'GET',
            json: true,
            followAllRedirects: true
        };

        return this.jiraConnector.makeRequest(options, callback);
    };
}
