define([
    'uiComponent',
    'jquery',
    'Magento_Ui/js/modal/modal',
    'Magento_Customer/js/customer-data',
    'mage/translate',
    'mage/validation'
], function (Component, $, modal, storage, $t) {
    'use strict';

    var cacheKey = 'newsletter_popup';
    var getData = function () {
        return storage.get(cacheKey)();
    };

    var saveData = function (data) {
        storage.set(cacheKey, data);
    };

    if ($.isEmptyObject(getData())) {
        var newsletter_popup = {
            'newsletter_popup': false
        };
        saveData(newsletter_popup);
    }

    return Component.extend({
        ajaxUrl: '',
        responsive: true,
        title: false,
        modalClass: 'newsletter-modal',

        initialize: function () {
            this._super();
            var self = this;
            var options = {
                type: 'popup',
                innerScroll: false,
                title: this.title,
                modalClass: this.modalClass,
                responsive: this.responsive,
                buttons: [{
                    text: $.mage.__('Subscribe'),
                    class: 'action subscribe primary',
                    click: function() {
                        if ($('.newsletter-modal form').valid()) {
                            var email = $("input[name=newsletter-email]").val();
                            self.submitNewsletterForm(email, this);
                        }
                    }
                }]
            };

            var newsletter_modal = $('#newsletter-overlay');
            var popup = modal(options, newsletter_modal);

            newsletter_modal.css("display", "block");
            this.openModalOverlayModal();
        },

        submitNewsletterForm: function(email, modal) {
            $.ajax({
                url: this.ajaxUrl,
                dataType: 'json',
                type: 'POST',
                showLoader: true,
                data: {'email': email},
                complete: function (data) {
                    modal.closeModal();
                    var customerMessages = storage.get('messages')() || {},
                    messages = customerMessages.messages || [];
                    if (typeof data === 'object' && data.responseJSON.status == 1) {
                        messages.push({
                            text: $t(data.responseJSON.msg),
                            type: 'success'
                        });
                    } else {
                        messages.push({
                            text: $t(data.responseJSON.msg),
                            type: 'error'
                        });
                    }
                    customerMessages.messages = messages;
                    storage.set('messages', customerMessages);
                }
            });
        },

        openModalOverlayModal: function(){
            var modalContainer = $("#newsletter-overlay");
            if (getData().newsletter_popup) {
               return false;
            }

            this.setModalOverlay(true);
            modalContainer.modal('openModal');
        },

        setModalOverlay: function (data) {
            var obj = getData();
            obj.newsletter_popup = data;
            saveData(obj);
        }
    });
});