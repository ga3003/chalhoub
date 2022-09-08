# chalhoub

This repository contains the module required to complete the busniness case.

Backend:

Case study would be to create order using graphql API’s

- Create registered customer token
- Add items to cart
- Update item with size/color
- Add shipping and billing details including shipping method
- Create new payment method, LEVEL_COD , zero payment, similar to COD
- Create order with LEVEL_COD

Same for guest as well.

Output should be given in an step by step guide with demo (for both guest and registered user) in postman or any API interface tools.

Frontend:

Design newsletter popup to collect newsletter email, save data without refreshing page, asynchronously.

Popup should have less/requires customizations.

––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

For Backend business case, I have prepared a postman document (https://documenter.getpostman.com/view/18065489/VVBTUnX1). This document have step by step process for the guest user & registered user. Annd after enabling our LeveelPay payment method, we can use levelPay for the payment in the APIs.

For Frontend businness case, we need to install the NewsletterPopup module.

Basic steps to follow:

- Either clone this repository or down the app folder and place in the magento root directory.
- Open terminal, move to the magento root direcotry.
- Execute below commands:
  - php bin/magento setup:upgrade
  - rm -rf pub/static/frontend/* var/view_preprocessed/pub/static/frontend/*
  - php bin/magento setup:static-content:deploy -f
  - php bin/magento cache:clean
- After this go to magento admin, then Stores → Configuration → Sales → Payment Method → Level COD Payment. Enable the payment method.
