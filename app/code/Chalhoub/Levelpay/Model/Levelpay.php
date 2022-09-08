<?php

namespace Chalhoub\Levelpay\Model;

/**
 * Level Cash on delivery payment method model
 */
class Levelpay extends \Magento\Payment\Model\Method\AbstractMethod
{
    const PAYMENT_METHOD_LEVEL_COD_CODE = 'level_cod';

    /**
     * Payment method code
     *
     * @var string
     */
    protected $_code = self::PAYMENT_METHOD_LEVEL_COD_CODE;

    /**
     * LevelPay payment block paths
     *
     * @var string
     */
    protected $_formBlockType = \Chalhoub\Levelpay\Block\Form\Levelpay::class;

    /**
     * Info instructions block path
     *
     * @var string
     */
    protected $_infoBlockType = \Magento\Payment\Block\Info\Instructions::class;

    /**
     * Availability option
     *
     * @var bool
     */
    protected $_isOffline = true;

    /**
     * Get instructions text from config
     *
     * @return string
     */
    public function getInstructions()
    {
        return trim($this->getConfigData('instructions'));
    }
}
