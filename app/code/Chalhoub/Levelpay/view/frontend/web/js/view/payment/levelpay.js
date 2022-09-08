define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'level_cod',
                component: 'Chalhoub_Levelpay/js/view/payment/method-renderer/levelpay-method'
            }
        );
        return Component.extend({});
    }
);