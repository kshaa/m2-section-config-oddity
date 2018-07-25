define([
    'jquery', // Because everything requires jQuery
    'Magento_Customer/js/section-config'
], function($, sectionConfig) {
    return function(page) {
        sectionConfig.getAffectedSections(page);
    }
});
