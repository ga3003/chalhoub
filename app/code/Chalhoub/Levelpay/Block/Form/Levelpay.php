<?php

namespace Chalhoub\Levelpay\Block\Form;

class Levelpay extends \Magento\OfflinePayments\Block\Form\AbstractInstruction
{
    /**
     * LevelPay template
     *
     * @var string
     */
    protected $_template = 'Chalhoub_Levelpay::form/levelpay.phtml';
}