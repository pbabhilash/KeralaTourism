define([
	'jquery',
	'underscore',
	'backbone',
	'bootstrap'
], function ($, _, Backbone) {
	/**
	 * Overriding the default templating syntax used by underscore to look more like
	 * handlebars or mustache
	 */
	_.templateSettings = {
		interpolate : /\{\{(.+?)\}\}/g,
        evaluate:  /<%([\s\S]+?)%>/g
	};

	/**
	 * A method used in the routing to allow for a view to do whatever setup work it needs to
	 * (aka fetch data) before rendering.  This insures every view at least has this method.  It
	 * is meant to be overridden in views having specific setup
	 */
	Backbone.View.prototype.setup = function () {};

	/**
	 * This method is to aide with garbage collection.  This ensures every view has a close method. It
	 * in turn will call any existing onClose method you may choose to add in a view for specifics
	 * around closing a particular view
	 * @param  {Boolean} [removeDOM] Pass as true if you want it to completely remove the view from the DOM.
	 *   WARNING: If passed as true, this may also remove the $el element from the page, based on how you define it
	 */
	Backbone.View.prototype.close = function (removeDOM) {
		var remove = (typeof removeDOM !== 'undefined' && removeDOM);
		if (remove) {
			this.remove();
		}
		this.unbind();
		this.undelegateEvents();
		if (this.onClose) {
			this.onClose();
		}
	};

	//listen for any ajax errors in the site
	$(document).ajaxError(function (event, jqxhr, settings, exception) {
		console.log(event, jqxhr, settings, exception);
	});

	/**
	 * Template setting used for replaceing placeholders for translation
	 * @type {Object}
	 */
	var translateTemplateSettings = {
		interpolate : /\{\{(.+?)\}\}/g,
        evaluate:  /<%([\s\S]+?)%>/g
	};

	/**
	 * Function used to replace translations placehoders in a template
	 * @param  {String} tepmplate    The template with placehoders for translations
	 * @param  {Object} translations An object containing translations that can be used for subsitutions
	 * @return {String}              A resulting string containing translations where there used to be placeholders
	 */
	var translate = function (tepmplate, translations) {
		var newContent = '';
		try {
			newContent = _.template(tepmplate, translateTemplateSettings)(translations);
		} catch (e) {
			console.log('could not translate', e);
		}
		return newContent;
	};

	/**
	 * Function used to replace translations placehoders in a template, then do the same with actual data
	 * @param  {String} tepmplate    The template with placehoders for translations
	 * @param  {Object} translations An object containing translations that can be used for subsitutions
	 * @return {String}              A resulting string containing translations & data where there used to be only placeholders
	 * @return {[type]}              [description]
	 */
	var translateAndMerge = function (template, translations, data) {
		var newContent = '';
		try {
			var tmpContent = _.template(template, translateTemplateSettings)(translations);
			newContent = _.template(tmpContent)(data);
		} catch (e) {
			console.log('could not translate and merge data', e);
		}
		return newContent;
	};

	return {
		translate: translate,
		translateAndMerge: translateAndMerge
	};
});
