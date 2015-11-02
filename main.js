'use strict';

var countryVATrate = {
    "All others (no VAT)": 0,
    "Austria": 20,
    "Belgium": 21,
    "Bulgaria": 20,
    "Cyprus": 19,
    "Croatia": 25,
    "Czech Republic": 21,
    "Denmark": 25,
    "Estonia": 20,
    "Finland": 24,
    "France": 20,
    "Greece": 23,
    "Germany": 19,
    "Hungary": 27,
    "Ireland": 23,
    "Italy": 22,
    "Latvia": 21,
    "Lithuania": 21,
    "Luxembourg": 17,
    "Malta": 18,
    "The Netherlands": 21,
    "Poland": 23,
    "Portugal": 23,
    "Rumania": 24,
    "Slovakia": 20,
    "Slovenia": 22,
    "Spain": 21,
    "Sweden": 25,
    "UK": 20,
};

var messages = {
    setup_fee: {
        English: 'Setup costs:',
        Deutsch: 'Einmalige Kosten:',
        Русский: 'Плата за установку:'
    },
    total_setup: {
        English: 'Total setup costs:',
        Deutsch: 'Gesamte einmalige Kosten:',
        Русский: 'Итого плата за установку:'
    },
    total_monthly: {
        English: 'Total monthly costs:',
        Deutsch: 'Gesamte monatliche Kosten:',
        Русский: 'Итого ежемесячная плата:'
    },
    total_additional: {
        English: 'Total additional costs:',
        Deutsch: 'Gesamte zusätzliche Kosten:',
        Русский: 'Итого дополнительная плата:'
    },
    monthly: {
        English: 'Monthly costs:',
        Deutsch: 'Monatliche Kosten:',
        Русский: 'Ежемесячная плата:'
    },
    vat_is_included: {
        English: '(incl. VAT __VATRATE__%)',
        Deutsch: '(inkl. __VATRATE__ % USt)',
        Русский: '(цены указаны с VAT __VATRATE__%)'
    },
    vat_isnt_included: {
        English: '(excl. VAT)',
        Deutsch: '(exkl. USt)',
        Русский: '(цены указаны без VAT)'
    },
    first_invoice_addition: {
        English: 'Additional payment for product(s) charged for entire month:',
        Deutsch: 'Zusätzliche kosten fuer Produkt(e) die fuer den gesamente Monat berechnet werden:',
        Русский: 'В первый счёт будет дополнительно включена плата за продукт(ы) лицензируемые помесячно:'
    },
    comment: {
        English: 'Comment:',
        Deutsch: 'Kommentar:',
        Русский: 'Комментарий:'
    },
    first_invoice_amount: {
        English: 'First invoice’s amount:',
        Deutsch: 'First invoice’s amount:',
        Русский: 'Сумма первого счёта:'
    },
    subsequent_amount: {
        English: 'Subsequent invoices amount:',
        Deutsch: 'Subsequent invoices amount:',
        Русский: 'Сумма в последующих счетах:'
    },
    /*
     template: {
     English: '',
     Deutsch: '',
     Русский: ''
     },
     */
};

var servers = {
    SB: {
        monthly: 0, setup: 0,
        name: {
            English: 'Server SB',
            Deutsch: 'Server SB',
            Русский: 'Сервер SB'
        },
        comment: 'SB servers: no additional hardware'
    },
    SB0: {
        // dummy server. Used to avoid flexi-pack gets calculated for swithes
        monthly: 0, setup: 0, flexi_included: true,
        name: {
            English: 'Server SB',
            Deutsch: 'Server SB',
            Русский: 'Сервер SB'
        },
    },
    AX10: {
        monthly: 11.78, setup: 11.78,
        name: {
            English: 'Server AX10',
            Deutsch: 'Server AX10',
            Русский: 'Сервер AX10'
        },
        comment: 'AX10: Samsung Exynos-5422 Octa-Core/2 GB LPDDR3/32 GB MicroSD/10 TB'
    },
    AX20: {
        monthly: 17.73, setup: 17.73,
        name: {
            English: 'Server AX20',
            Deutsch: 'Server AX20',
            Русский: 'Сервер AX20'
        },
        comment: 'AX20: Samsung Exynos-5422 Octa-Core/2 GB LPDDR3/64 GB eMMC/10 TB'
    },
    AX30: {
        monthly: 23.68, setup: 23.68,
        name: {
            English: 'Server AX30',
            Deutsch: 'Server AX30',
            Русский: 'Сервер AX30'
        },
        comment: 'AX30: Samsung Exynos-5422 Octa-Core/2 GB LPDDR3/32 GB MicroSD + 240 GB SSD/10 TB'
    },
    EX40: {
        monthly: 49, setup: 49,
        name: {
            English: 'Server EX40',
            Deutsch: 'Server EX40',
            Русский: 'Сервер EX40'
        },
        comment: 'EX40: Intel® Core™ i7-4770 Quad-Core Haswell/32 GB/2 x 2TB SATA Ent/30 TB'
    },
    EX40SSD: {
        monthly: 59, setup: 59,
        name: {
            English: 'Server EX40-SSD',
            Deutsch: 'Server EX40-SSD',
            Русский: 'Сервер EX40-SSD'
        },
        comment: 'EX40-SSD: Intel® Core™ i7-4770 Quad-Core Haswell/32 GB/2 x 240GB SSD/30 TB'
    },
    EX40Hybrid: {
        monthly: 69, setup: 69,
        name: {
            English: 'Server EX40-Hybrid',
            Deutsch: 'Server EX40-Hybrid',
            Русский: 'Сервер EX40-Hybrid'
        },
        comment: 'EX40-Hybrid: Intel® Core™ i7-4770 Quad-Core Haswell/32 GB/2 x 240GB SSD/2 x 2TB SATA Ent/30 TB'
    },
    EX60: {
        monthly: 59, setup: 0,
        name: {
            English: 'Server EX60',
            Deutsch: 'Server EX60',
            Русский: 'Сервер EX60'
        },
        comment: 'EX60: Intel® Core™ i7-920 Quad-Core/48 GB/2 x 2TB SATA Ent/30 TB'
    },
    PX60: {
        monthly: 69, setup: 99,
        name: {
            English: 'Server PX60',
            Deutsch: 'Server PX60',
            Русский: 'Сервер PX60'
        },
        comment: 'PX60: E3-1270 v3 Quad-Core Haswell/32 GB ECC/2 x 2TB SATA Ent/2nd NIC/30 TB'
    },
    PX60SSD: {
        monthly: 79, setup: 99,
        name: {
            English: 'Server PX60-SSD',
            Deutsch: 'Server PX60-SSD',
            Русский: 'Сервер PX60-SSD'
        },
        comment: 'PX60-SSD: E3-1270 v3 Quad-Core Haswell/32 GB ECC/2 x 240GB SSD DC/2nd NIC/30 TB'
    },
    PX70: {
        monthly: 79, setup: 99,
        name: {
            English: 'Server PX70',
            Deutsch: 'Server PX70',
            Русский: 'Сервер PX70'
        },
        comment: 'PX70: E3-1270 v3 Quad-Core Haswell/32 GB ECC/2 x 4TB SATA Ent/2nd NIC/30 TB'
    },
    PX70SSD: {
        monthly: 99, setup: 99,
        name: {
            English: 'Server PX70-SSD',
            Deutsch: 'Server PX70-SSD',
            Русский: 'Сервер PX70-SSD'
        },
        comment: 'PX70-SSD: E3-1270 v3 Quad-Core Haswell/32 GB ECC/2 x 480GB SSD DC/2nd NIC/50 TB'
    },
    PX91: {
        monthly: 109, setup: 109,
        name: {
            English: 'Server PX91',
            Deutsch: 'Server PX91',
            Русский: 'Сервер PX91'
        },
        comment: 'PX91: Intel® Xeon® E5-1650 v3 Hexa-Core Haswell/64 GB DDR4 ECC/2 x 2TB SATA Ent/2nd NIC/50 TB'
    },
    PX91SSD: {
        monthly: 109, setup: 109,
        name: {
            English: 'Server PX91-SSD',
            Deutsch: 'Server PX91-SSD',
            Русский: 'Сервер PX91-SSD'
        },
        comment: 'PX91-SSD: Intel® Xeon® E5-1650 v3 Hexa-Core Haswell/64 GB DDR4 ECC/2 x 240GB SSD DC/2nd NIC/50 TB'
    },
    PX121: {
        monthly: 139, setup: 139,
        name: {
            English: 'Server PX121',
            Deutsch: 'Server PX121',
            Русский: 'Сервер PX121'
        },
        comment: 'PX121: Intel® Xeon® E5-1650 v3 Hexa-Core Haswell/128 GB ECC/2 x 4TB SATA Ent/2nd NIC/50 TB'
    },
    PX121SSD: {
        monthly: 139, setup: 139,
        name: {
            English: 'Server PX121-SSD',
            Deutsch: 'Server PX121-SSD',
            Русский: 'Сервер PX121-SSD'
        },
        comment: 'PX121-SSD: Intel® Xeon® E5-1650 v3 Hexa-Core Haswell/128 GB ECC/2 x 480GB SSD DC/2nd NIC/50 TB'
    },
    SX61: {
        monthly: 82.11, setup: 82.11,
        name: {
            English: 'Server SX61',
            Deutsch: 'Server SX61',
            Русский: 'Сервер SX61'
        },
        comment: 'SX61: Intel® Core i7-3770 Quad-Core/32GB/4x 6TB SATA/30 TB'
    },
    SX131: {
        monthly: 201.11, setup: 201.11,
        name: {
            English: 'Server SX131',
            Deutsch: 'Server SX131',
            Русский: 'Сервер SX131'
        },
        comment: 'SX131: Intel® Xeon® E5-1650v2 Hexa-Core/64GB/10x 6TB SATA/50 TB'
    },
    SX291: {
        monthly: 296.31, setup: 296.31,
        name: {
            English: 'Server SX291',
            Deutsch: 'Server SX291',
            Русский: 'Сервер SX291'
        },
        comment: 'SX291: Intel® Xeon® E5-1650v2 Hexa-Core/128GB/15x 6TB SATA/100 TB included'
    },
    DX141: {
        monthly: 149, setup: 199,
        flexi_included: true,
        name: {
            English: 'DELL PowerEdge™ R530 DX141',
            Deutsch: 'DELL PowerEdge™ R530 DX141',
            Русский: 'DELL PowerEdge™ R530 DX141'
        },
        comment: "DX141: Single Intel® Xeon® E5-1650 v3 @ 3.5GHz Hexa-Core/64GB DDR4 ECC/Dell PERC H330/50 TB\n\
R530: have an iDRAC (IP-KVM)\n\
R530: Drives are optional (2/4TB SATA, 600GB SAS, 240/480/960GB SSD DC)\n\
R530: Flexi-Pack is included\n\
R530 DX141: max 128 GB RAM DDR4 (2x 32GB)"
    },
    DX151: {
        monthly: 189, setup: 199,
        flexi_included: true,
        name: {
            English: 'DELL PowerEdge™ R730 DX151',
            Deutsch: 'DELL PowerEdge™ R730 DX151',
            Русский: 'DELL PowerEdge™ R730 DX151'
        },
        comment: "DX151: Single Intel® Xeon® E5-2600 v3 @2.40GHz Octa-Core/64GB DDR4 ECC/Dell PERC H730/50 TB\n\
R730: have an iDRAC (IP-KVM)\n\
R730: Drives are optional (2/4TB SATA, 600GB SAS and 240/480/960GB SSD)\n\
R730: Flexi-Pack is included\n\
R730 DX151: max 192 GB RAM DDR4 (4x 32GB)"
    },
    DX291: {
        monthly: 299, setup: 199,
        flexi_included: true,
        number_of_cpus: 2,
        name: {
            English: 'DELL PowerEdge™ R730 DX291',
            Deutsch: 'DELL PowerEdge™ R730 DX291',
            Русский: 'DELL PowerEdge™ R730 DX291'
        },
        comment: "DX291: Dual Intel® Xeon® E5-2600 v3 @2.40GHz Octa-Core/128GB DDR4 ECC/Dell PERC H730/100 TB\n\
R730: have an iDRAC (IP-KVM)\n\
R730: Drives are optional (2/4TB SATA, 600GB SAS and 240/480/960GB SSD)\n\
R730: Flexi-Pack is included\n\
R730 DX291: max 384 GB RAM DDR4 (8x 32GB)"
    },
    RACK20: {
        monthly: 199, setup: 0,
        name: {
            English: 'Dedicated Rack for up to 20 dedicated servers',
            Deutsch: 'Miet-Rack für bis zu 20 Root-Server',
            Русский: 'Выделенная стойка для 20 root-серверов'
        },
        comment: "RACK20: 24 port Gbit switch included\n\
RACK20: customer need at least 7 servers to order this rack\n\
RACK20: http://wiki.hetzner.de/index.php/Spezielle_Angebote/en#Dedicated_Rack_for_up_to_20_dedicated_servers"
    },
    CX10: {
        monthly: 4.64, setup: 0,
        name: {
            English: 'Server CX10',
            Deutsch: 'Server CX10',
            Русский: 'Сервер CX10'
        },
        comment: 'CX10: 1 vCore 2 GHz/1 GB/25 GB SSD/1 snapshot/2 TB'
    },
    CX20: {
        monthly: 8.21, setup: 0,
        name: {
            English: 'Server CX20',
            Deutsch: 'Server CX20',
            Русский: 'Сервер CX20'
        },
        comment: 'CX20: 2 vCores 2 GHz/2 GB/50 GB SSD/2 snapshots/5 TB'
    },
    CX30: {
        monthly: 14.16, setup: 0,
        name: {
            English: 'Server CX30',
            Deutsch: 'Server CX30',
            Русский: 'Сервер CX30'
        },
        comment: 'CX30: 2 vCores 2 GHz/4 GB/100 GB SSD/3 snapshots/8 TB'
    },
    CX40: {
        monthly: 23.68, setup: 0,
        name: {
            English: 'Server CX40',
            Deutsch: 'Server CX40',
            Русский: 'Сервер CX40'
        },
        comment: 'CX40: 2 vCores 2 GHz/8 GB/200 GB SSD/4 snapshots/10 TB'
    },
    CX50: {
        monthly: 35.58, setup: 0,
        name: {
            English: 'Server CX50',
            Deutsch: 'Server CX50',
            Русский: 'Сервер CX50'
        },
        comment: 'CX50: 4 vCores 2 GHz/16 GB/400 GB SSD/5 snapshots/20 TB'
    },
    CX60: {
        monthly: 59.38, setup: 0,
        name: {
            English: 'Server CX60',
            Deutsch: 'Server CX60',
            Русский: 'Сервер CX60'
        },
        comment: 'CX60: 8 vCores 2 GHz/32 GB/600 GB SSD/6 snapshots/30 TB'
    },
    BX10: {
        monthly: 3.45, setup: 0,
        name: {
            English: 'Storage Box BX10',
            Deutsch: 'Storage Box BX10',
            Русский: 'Storage Box BX10'
        },
        comment: 'BX10: 100 GB/1 TB traffic'
    },
    BX20: {
        monthly: 5.83, setup: 0,
        name: {
            English: 'Storage Box BX20',
            Deutsch: 'Storage Box BX20',
            Русский: 'Storage Box BX20'
        },
        comment: 'BX20: 500 GB/2 TB traffic'
    },
    BX30: {
        monthly: 9.40, setup: 0,
        name: {
            English: 'Storage Box BX30',
            Deutsch: 'Storage Box BX30',
            Русский: 'Storage Box BX30'
        },
        comment: 'BX30: 1 TB/5 TB traffic'
    },
    BX40: {
        monthly: 11.78, setup: 0,
        name: {
            English: 'Storage Box BX40',
            Deutsch: 'Storage Box BX40',
            Русский: 'Storage Box BX40'
        },
        comment: 'BX40: 2 TB/10 TB traffic'
    },
    BX50: {
        monthly: 26.06, setup: 0,
        name: {
            English: 'Storage Box BX50',
            Deutsch: 'Storage Box BX50',
            Русский: 'Storage Box BX50'
        },
        comment: 'BX50: 5 TB/15 TB traffic'
    },
    BX60: {
        monthly: 47.48, setup: 0,
        name: {
            English: 'Storage Box BX60',
            Deutsch: 'Storage Box BX60',
            Русский: 'Storage Box BX60'
        },
        comment: 'BX60: 10 TB/20 TB traffic'
    },

    /*
     template: {
     monthly: 0, setup: 0,
     flexi_included: true,
     number_of_cpus: 2,
     name: {
     English: '',
     Deutsch: '',
     Русский: ''
     },
     comment: 'line1\nline2',
     },
     */
};

var addons = {
    kvm: {
        monthly: 19, setup: 149, flexi_required: true,
        name: {
            English: 'KVM-over-IP Remote Management',
            Deutsch: 'KVM-over-IP Remote Management',
            Русский: 'KVM-over-IP удалённое управление'
        }
    },
    usb16: {
        setup: 35,
        name: {
            English: '16 GB USB stick',
            Deutsch: '16 GB USB-Stick',
            Русский: '16 ГБ USB-накопитель'
        }
    },
    usb64: {
        setup: 79,
        name: {
            English: '64 GB USB stick',
            Deutsch: '64 GB USB-Stick',
            Русский: '64 ГБ USB-накопитель'
        }
    },
    ddr3ecc32gb: {
        monthly: 29,
        name: {
            English: '32 GB DDR3 ECC RAM',
            Deutsch: '32 GB DDR3 ECC RAM',
            Русский: '32 ГБ DDR3 оперативной памяти ECC'
        },
        comment: "32 GB DDR3 ECC RAM: is available only for DELL R720\n\
32 GB DDR4 ECC RAM: maximum 8"
    },
    ddr4ecc32gb: {
        monthly: 39,
        name: {
            English: '32 GB DDR4 ECC RAM',
            Deutsch: '32 GB DDR4 ECC RAM',
            Русский: '32 ГБ DDR4 оперативной памяти ECC'
        },
        comment: "32 GB DDR4 ECC RAM: is available only for DELL R730\n\
32 GB DDR4 ECC RAM: maximum 8"
    },
    win_std: {
        monthly: 25, pay_entire_month: true,
        monthly_price_per_cpu: true,
        name: {
            English: 'Windows Server 2012 R2 Standard Edition',
            Deutsch: 'Windows Server 2012 R2 Standard Edition',
            Русский: 'Windows Server 2012 R2 Standard Edition'
        }
    },
    win_dc: {
        monthly: 155, pay_entire_month: true,
        monthly_price_per_cpu: true,
        name: {
            English: 'Windows Server 2012 R2 Datacenter Edition',
            Deutsch: 'Windows Server 2012 R2 Datacenter Edition',
            Русский: 'Windows Server 2012 R2 Datacenter Edition'
        }
    },
    plesk_web_admin: {
        monthly: 2.49, pay_entire_month: "yes",
        name: {
            English: "Plesk 12 Web ADMIN Edition",
            Deutsch: "Plesk 12 Web ADMIN Edition",
            Русский: "Plesk 12 издание Web ADMIN"},
    },
    plesk_web_app: {
        monthly: 3.49, pay_entire_month: "yes",
        name: {
            English: "Plesk 12 Web APP Edition",
            Deutsch: "Plesk 12 Web APP Edition",
            Русский: "Plesk 12 издание Web APP"},
    },
    plesk_web_pro: {
        monthly: 5.49, pay_entire_month: "yes",
        name: {
            English: "Plesk 12 Web PRO Edition",
            Deutsch: "Plesk 12 Web PRO Edition",
            Русский: "Plesk 12 издание Web PRO"},
    },
    plesk_web_host: {
        monthly: 24.99, pay_entire_month: "yes",
        name: {
            English: "Plesk 12 Web HOST Edition",
            Deutsch: "Plesk 12 Web HOST Edition",
            Русский: "Plesk 12 издание Web HOST"},
    },
    plesk_power_pack: {
        monthly: 9.9, pay_entire_month: true,
        name: {
            English: 'Plesk Power Pack',
            Deutsch: 'Plesk Power Pack',
            Русский: 'Plesk Power Pack'
        }
    },
    cpanel: {
        monthly: 29.9, pay_entire_month: true,
        name: {
            English: 'cPanel',
            Deutsch: 'cPanel',
            Русский: 'cPanel'
        }
    },
    raid4: {
        monthly: 15, flexi_required: true,
        name: {
            English: '4-Port Hardware RAID controller',
            Deutsch: '4-Port Hardware RAID-Controller',
            Русский: '4-портовый RAID-контроллер'
        }
    },
    ip: {
        monthly: 1,
        name: {
            English: 'Additional IP address',
            Deutsch: 'Zusätzliche IP-Adresse',
            Русский: 'Дополнительный IP-адрес'
        }
    },
    subnet29: {
        monthly: 8, flexi_required: false,
        name: {
            English: 'Subnet /29',
            Deutsch: 'Subnet /29',
            Русский: 'Подсеть /29'
        }
    },
    subnet28: {
        monthly: 16, flexi_required: false,
        name: {
            English: 'Subnet /28',
            Deutsch: 'Subnet /28',
            Русский: 'Подсеть /28'
        }
    },
    subnet27: {
        monthly: 32, flexi_required: false,
        name: {
            English: 'Subnet /27',
            Deutsch: 'Subnet /27',
            Русский: 'Подсеть /27'
        }
    },
    failover_ip: {
        monthly: 5, flexi_required: false,
        name: {
            English: 'Failover IP',
            Deutsch: 'Failover-IP',
            Русский: 'Failover IP'
        },
        comment: 'Failover IP: can`t be used with VMware ESXi'
    },
    failover_subnet29: {
        monthly: 18, flexi_required: false,
        name: {
            English: 'Failover subnet /29',
            Deutsch: 'Failover Subnet /29',
            Русский: 'Failover подсеть /29'
        },
        comment: 'Failover subnet /29: can`t be used with VMware ESXi'
    },
    failover_subnet28: {
        monthly: 26, flexi_required: false,
        name: {
            English: 'Failover subnet /28',
            Deutsch: 'Failover Subnet /28',
            Русский: 'Failover подсеть /28'
        },
        comment: 'Failover subnet /28: can`t be used with VMware ESXi'
    },
    failover_subnet27: {
        monthly: 42, flexi_required: false,
        name: {
            English: 'Failover subnet /27',
            Deutsch: 'Failover Subnet /27',
            Русский: 'Failover подсеть /27'
        },
        comment: 'Failover subnet /27: can`t be used with VMware ESXi'
    },
    ssd240: {
        monthly: 19, flexi_required: true,
        name: {
            English: '240 GB SSD',
            Deutsch: '240 GB SSD',
            Русский: '240 ГБ SSD'
        }
    },
    ssd240de: {
        monthly: 25, flexi_required: true,
        name: {
            English: '240 GB SSD Datacenter Edition',
            Deutsch: '240 GB SSD Datacenter Edition',
            Русский: '240 ГБ SSD Datacenter Edition'
        }
    },
    ssd300de: {
        monthly: 29, flexi_required: true,
        name: {
            English: '300 GB SSD Datacenter Edition',
            Deutsch: '300 GB SSD Datacenter Edition',
            Русский: '300 ГБ SSD Datacenter Edition'
        },
        comment: '300 GB SSD DC: only for Dell DX150'
    },
    ssd480de: {
        monthly: 39, flexi_required: true,
        name: {
            English: '480 GB SSD Datacenter Edition',
            Deutsch: '480 GB SSD Datacenter Edition',
            Русский: '480 ГБ SSD Datacenter Edition'
        }
    },
    ssd600: {
        monthly: 45, flexi_required: true,
        name: {
            English: '600 GB SSD',
            Deutsch: '600 GB SSD',
            Русский: '600 ГБ SSD'
        },
        comment: '600 GB SSD: only for Dell DX150'
    },
    ssd960de: {
        monthly: 49, flexi_required: true,
        name: {
            English: '960 GB SSD Datacenter Edition',
            Deutsch: '960 GB SSD Datacenter Edition',
            Русский: '960 ГБ SSD Datacenter Edition'
        }
    },
    sas600: {
        monthly: 25, flexi_required: true,
        name: {
            English: '600 GB SAS',
            Deutsch: '600 GB SAS',
            Русский: '600 ГБ SAS'
        },
        comment: '600 GB SAS: is available only for DELL R730'
    },
    sata2000e: {
        monthly: 15, flexi_required: true,
        name: {
            English: '2 TB enterprise SATA HDD',
            Deutsch: '2 TB Enterprise SATA HDD',
            Русский: '2 ТБ enterprise SATA HDD'
        },
    },
    sata3000e: {
        monthly: 25, flexi_required: true,
        name: {
            English: '3 TB enterprise SATA HDD',
            Deutsch: '3 TB Enterprise SATA HDD',
            Русский: '3 ТБ enterprise SATA HDD'
        }
    },
    sata4000e: {
        monthly: 30, flexi_required: true,
        name: {
            English: '4 TB enterprise SATA HDD',
            Deutsch: '4 TB Enterprise SATA HDD',
            Русский: '4 ТБ enterprise SATA HDD'
        }
    },
    gbit_nic: {
        setup: 29, flexi_required: true,
        name: {
            English: 'Additional Gbit NIC',
            Deutsch: 'Zusätzliche Gbit-NIC',
            Русский: 'Дополнительная 1Гбит сетевая карта'
        }
    },
    ten_gbit_nic: {
        monthly: 39, flexi_required: true,
        name: {
            English: 'Additional 10 Gbit NIC',
            Deutsch: 'Zusätzliche 10 Gbit-NIC',
            Русский: 'Дополнительная 10 Гбит сетевая карта'
        }
    },
    activate_second_onboard_nic: {
        flexi_required: true,
        name: {
            English: 'Activate 2nd onboard Gbit NIC',
            Deutsch: '2. Onboard Gbit NIC aktivieren',
            Русский: 'Включение 2ой встроенной 1Гбит карты'
        },
        comment: 'Activate 2nd onboard Gbit NIC: available only for PX servers'
    },
    install_via_lara: {
        setup: 25,
        name: {
            English: 'Installation via LARA',
            Deutsch: 'Installation via LARA',
            Русский: 'Установка ОС через LARA'
        }
    },
    switch_5port: {
        setup: 29, flexi_required: true,
        name: {
            English: '5-Port Gbit switch',
            Deutsch: '5-Port Gbit-Switch',
            Русский: 'Коммутатор Гбит 5 портов'
        }
    },
    switch_8port: {
        setup: 39, flexi_required: true,
        name: {
            English: '8-Port Gbit switch',
            Deutsch: '8-Port Gbit-Switch',
            Русский: 'Коммутатор Гбит 8 портов'
        }
    },
    switch_24port: {
        setup: 269, flexi_required: true,
        name: {
            English: '24-Port Gbit switch',
            Deutsch: '24-Port Gbit-Switch',
            Русский: 'Коммутатор Гбит 24 порта'
        }
    },
    switch_12port_10gbit: {
        setup: 999, flexi_required: true,
        name: {
            English: '12-Port 10 Gbit switch',
            Deutsch: '12-Port 10 Gbit-Switch',
            Русский: 'Коммутатор 10 Гбит 12 порта'
        }
    },
    rdp_license: {
        monthly: 7,
        name: {
            English: 'Additional RDP licence for Windows',
            Deutsch: 'Zusätzliche RDP-Lizenz für Windows',
            Русский: 'Дополнительная RDP-лицензия для Windows'
        }
    },
    place_reservation: {
        monthly: 9.90,
        name: {
            English: 'Reservation of rack space',
            Deutsch: 'Platz Reservierung: Mietserver Stellfläche',
            Русский: 'Резервирование места в стойке'
        },
        comment: 'Reservation of rack space: no more then 50% of number of servers'
    },
    bbu: {
        setup: 149,
        name: {
            English: 'BBU for RAID controller',
            Deutsch: 'BBU für RAID-Controller',
            Русский: 'BBU для RAID-контроллера'
        }
    },
    traffic_overusage: {
        monthly: 1.39,
        name: {
            English: 'Traffic overusage (TB)',
            Deutsch: 'Traffic overusage (TB)',
            Русский: 'Превышение трафика (ТБ)'
        }
    },
    kvm_module: {
        monthly: 3.90, setup: 19,
        name: {
            English: 'KVM-module',
            Deutsch: 'KVM-modul',
            Русский: 'KVM-модуль'
        },
        comment: 'KVM-module: only for PX servers'
    },
    backup100: {
        monthly: 3.45,
        name: {
            English: '100 GB Backup Space',
            Deutsch: '100 GB Backup Space',
            Русский: '100 ГБ места для резервных копий'
        }
    },
    backup500: {
        monthly: 5.83,
        name: {
            English: '500 GB Backup Space',
            Deutsch: '500 GB Backup Space',
            Русский: '500 ГБ места для резервных копий'
        }
    },
    backup1000: {
        monthly: 9.40,
        name: {
            English: '1,000 GB Backup Space',
            Deutsch: '1.000 GB Backup Space',
            Русский: '1.000 ГБ места для резервных копий'
        }
    },
    backup2000: {
        monthly: 11.78,
        name: {
            English: '2,000 GB Backup Space',
            Deutsch: '2.000 GB Backup Space',
            Русский: '2.000 ГБ места для резервных копий'
        }
    },
    backup5000: {
        monthly: 26.06,
        name: {
            English: '5,000 GB Backup Space',
            Deutsch: '5.000 GB Backup Space',
            Русский: '5.000 ГБ места для резервных копий'
        }
    },
    backup10000: {
        monthly: 47.48,
        name: {
            English: '10,000 GB Backup Space',
            Deutsch: '10.000 GB Backup Space',
            Русский: '10.000 ГБ места для резервных копий'
        }
    },
    flexi_pack: {
        monthly: 15, setup: 0,
        name: {
            English: 'Flexi-Pack',
            Deutsch: 'Flexi-Pack',
            Русский: 'Flexi-пакет'
        }
    }
    /*
     template: {
     monthly: 0, setup: 0, flexi_required: true, pay_entire_month: true,
     monthly_price_per_cpu: true,
     name: {
     English: '',
     Deutsch: '',
     Русский: ''
     },
     comment: 'line1\nline2',
     },
     */
};

$(document).foundation();

/**
 * Init application.
 */
function onLoad() {
    //workspace.setLanguage('English');
    //updateDate();
    //updateCalculationResult();
//        serverItems.clear();
//        addonItems.clear();
//        additionalPaymentItems.clear();
//        serverCommentItems.clear();
//        addonCommentItems.clear();


    workspace.Servers[workspace.currentServer] = new Server("SB");
    prepareWorkspace();
    //workspace.copyCurrentServerTab();

    //loadTestData_3servers();
    updateCalculationResult();
    //$(document).foundation('tab', 'reflow');
}

function loadTestData_3servers() {

    var i=1;
    workspace.currentServer=i;
    workspace.Servers[i] = new Server("PX60");
    updateCalculationResult();
    workspace.copyCurrentServerTab();

    i=2;
    workspace.currentServer=i;
    workspace.Servers[i] = new Server("PX70");
    updateCalculationResult();
    workspace.copyCurrentServerTab();

    i=3;
    workspace.currentServer=i;
    workspace.Servers[i] = new Server("PX91");
    updateCalculationResult();
    workspace.copyCurrentServerTab();

    i=4;
    workspace.currentServer=i;
    workspace.Servers[i] = new Server("EX40");
    updateCalculationResult();

//    workspace.copyCurrentServerTab();

}

/**
 * Updates Date input field to todays date.
 */
// function updateDate() {
//     var today = new Date();
//     document.getElementById('ordering_date').value =
//         today.getFullYear() + '/' +
//         (today.getMonth() + 1) + '/' +
//         today.getDate();
// }

/**
 * Called each time we change something in the form.
 */
function onChange() {
    var selectedServerModel = document.getElementById('select_servers').value;
    workspace.Servers[workspace.currentServer] = new Server(selectedServerModel);

    updateCalculationResult();
}

function vatPrice(price) {
    if (workspace.vatPercentage !== 0) {
        var cleanPrice = round(price / (100 + countryVATrate.Germany) * 100, 4);
        return round(cleanPrice * (100 + workspace.vatPercentage) / 100, 2);
    } else {
        return round(price / (100 + countryVATrate.Germany) * 100, 2);
    }
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}


/**
 * Updates textarea containing calculation result.
 */
function updateCalculationResult() {

    var serverToCalculate = workspace.Servers[workspace.currentServer];

    document.getElementById("panel-" + workspace.currentServer).textContent = workspace.Servers[workspace.currentServer].tabName();

    var calculationTextBeautified = workspace.getCalculationStringBeautifiedWrapper_2();
    var numberOfLinesInCalculationText = calculationTextBeautified.split(/\n|\r|\n\r/).length;
    document.getElementById('output').rows = numberOfLinesInCalculationText;
    document.getElementById('output').innerHTML = calculationTextBeautified;

}



function prepareWorkspace() {

    var today = new Date();
    workspace.setOrderingDate(today.getFullYear() + '/' +
            (today.getMonth() + 1) + '/' +
            today.getDate()
    );
    workspace.setLanguage('English');
    workspace.setVatPercentageByCountry('All others (no VAT)');

    // updateDate();
    //updateCalculationResult();


}

function Workspace() {
    this.language = undefined;
    this.orderingDate = undefined;
    this.vatPercentage = undefined;
    this.newOutputFormat = undefined;
    this.currentServer = 1;
    this.Servers = [];
}

Workspace.prototype = {
    constructor: Workspace,
    setOrderingDate: function(arg) {
        this.orderingDate = arg;
        document.getElementById('ordering_date').value = arg;
    },
    setLanguage: function(arg) {
        this.language = arg;
        document.getElementById('select_languages').value = arg;
        for (var addon in addons) {
            var labelElement = document.querySelector("label[for='" + addon + "']");
            if (labelElement) {
                var additionalText = labelElement.getAttribute('data-addtext');
                var labelValueToSet = addons[addon].name[workspace.language];
                labelElement.innerHTML = (additionalText) ? labelValueToSet + ' ' + '<mark>' + additionalText + '</mark>' : labelValueToSet;
            }
        }
    },
    setVatPercentageByCountry: function(arg) {
        this.vatPercentage = (countryVATrate[arg] !== undefined) ? countryVATrate[arg] : 0;
    },
    setNewOutputFormat: function(arg) {
        this.newOutputFormat = arg;
        document.getElementById('new_format_output').checked = arg;
    },
    setServer: function(arg) {
        document.getElementById('select_servers').value = arg;
    },
    setSbNumber: function(arg) {
        document.getElementById('sb_number').value = arg;
    },
    setNumberOfServers: function(arg) {
        document.getElementById('number_of_servers').value = arg;
    },
    clearAddons: function() {
        for (var addon in addons) {
            if (document.getElementById(addon)) {
                if (document.getElementById(addon).type === 'checkbox') {
                    document.getElementById(addon).checked = false;
                }
                if (document.getElementById(addon).type === 'number') {
                    document.getElementById(addon).value = '';
                }
            }
        }
        document.getElementById('select_backup').value = 'no';
        document.getElementById('select_plesk').value  = 'no';
    },
    deleteCurrentTab: function() {

        var serverToRemoveIndex = this.currentServer;

        if (this.Servers.length == 2) {
            // we don't want to remove last server, so we add new one
            workspace.createNewTab();
        }

//            var tab;
//            tab = document.getElementById('panel-' + serverToRemoveIndex);
//            tab.parentNode.parentNode.removeChild(tab.parentNode);

        var panel;
        panel = document.getElementById('panel-' + serverToRemoveIndex);
        panel.parentNode.remove();

        // shift ID names
        for (var i = parseInt(serverToRemoveIndex, 10) + 1; i < this.Servers.length; i++) {
            panel = document.getElementById('panel-' + i);
            panel.id = 'panel-' + (i - 1);
            panel.href = '#panel-' + (i - 1);
        }

        this.Servers.splice(serverToRemoveIndex, 1);
        this.currentServer = (serverToRemoveIndex <= 2) ? 1 : serverToRemoveIndex - 1;

        this.activateTabX("panel-" + this.currentServer);

        var ttt = {};
        ttt.id = "panel-" + this.currentServer;
        this.loadData(ttt);

    },
    dropActiveClass: function() {
        //debugger;
        var elts = document.getElementsByClassName('active');
        for (var i=elts.length -1 ; i >= 0; i--) {
            if (elts[i].className !== undefined) {
                this.removeClass(elts[i], 'active');
            }
        }

    },
    activateTabX: function(arg) {

        var tab = document.getElementById(arg).parentNode;
        tab.className = tab.className + " active";

        $(document).foundation('tab', 'reflow');

    },
    createNewTab: function() {
        this.dropActiveClass();
        this.clearAddons();
        this.setServer("SB");
        this.setSbNumber('');
        this.setNumberOfServers("");

        var el_num = this.Servers.length;

        var new_li = document.createElement('li');
        new_li.className = 'tab-title active';

        var a = document.createElement('li');
        new_li.innerHTML = '<a href="#panel-' + el_num + '" onclick="workspace.loadData(this)" id="panel-' + el_num + '">SB0</a>';



        var li_node = document.getElementById("panel-" + (workspace.Servers.length - 1)).parentNode;
        li_node.parentNode.insertBefore(new_li, li_node.nextSibling);

        this.currentServer = el_num;

        workspace.Servers[this.currentServer] = new Server("SB");

        this.activateTabX("panel-" + this.currentServer);
        updateCalculationResult();
    },
    removeClass: function(obj, cls) {

        //debugger;
        var classes = obj.className.split(' ');

        for (var i = 0; i < classes.length; i++) {
            if (classes[i] == cls) {
                classes.splice(i, 1); // удалить класс
                i--;
            }
        }
        obj.className = classes.join(' ');
    },
    copyCurrentServerTab: function() {

//debugger;
        var newElementNumber = (this.Servers.length === 0) ? 1 : this.Servers.length;

        //deactivate currently active elements
        //this.removeClass(document.getElementsByClassName('active')[0], 'active');
        this.dropActiveClass();

        var newLiElement = document.createElement('li');
        newLiElement.className = 'tab-title active';
        // <a href="#panel-1 " onclick="workspace.loadData(this)" id="1">SB0</a>
        newLiElement.innerHTML = '<a href="#panel-' + newElementNumber + '" ' +
                'onclick="workspace.loadData(this)" ' +
                'id="panel-' + newElementNumber + '">placeholder</a>';

        var liTotalNode = document.getElementById('panel-' + (workspace.Servers.length - 1)).parentNode;
        liTotalNode.parentNode.insertBefore(newLiElement, liTotalNode.nextSibling);

        this.Servers[newElementNumber] = this.Servers[this.currentServer];
        this.currentServer = newElementNumber;
        //$(document).foundation('tab', 'reflow');

        var ttt = {};
        //new Object();
        ttt.id = "panel-" + this.currentServer;
        this.loadData(ttt);
        $(document).foundation('tab', 'reflow');

        //updateCalculationResult();
    },
    loadData: function(arg) {
        this.currentServer = parseInt(arg.id.replace("panel-", ""));

        if (this.Servers[this.currentServer]) {

            this.clearAddons();
            this.setServer(this.Servers[this.currentServer].model_raw.replace(/SB.*/, "SB"));
            var sbNumber = this.Servers[this.currentServer].sbServerMonthlyPrice;
            this.setSbNumber((isNaN(sbNumber)) ? "" : sbNumber);
            var numOfServers = this.Servers[this.currentServer].amount;
            this.setNumberOfServers((numOfServers !== 1) ? numOfServers : "");

            if (this.Servers[this.currentServer].serverAddons) {
                for (var i = 0; i < this.Servers[this.currentServer].serverAddons.length; i++) {
                    var currentAddon = this.Servers[this.currentServer].serverAddons[i].name_raw;

                    if (document.getElementById(currentAddon)) {
                        if (document.getElementById(currentAddon).type === 'checkbox') {
                            document.getElementById(currentAddon).checked = true;
                        }
                        if (document.getElementById(currentAddon).type === 'number') {
                            document.getElementById(currentAddon).value = this.Servers[this.currentServer].serverAddons[i].amount;
                        }
                    } else {
                        var backup_expr = /^backup([0-9]+)$/;
                        var plesk_expr = /^plesk_([_a-z]+)$/;
                        var temp;

                        temp = currentAddon.match(backup_expr);
                        if (temp !== null) {
                            document.getElementById('select_backup').value = temp[1];
                        }

                        temp = currentAddon.match(plesk_expr);
                        if (temp !== null) {
                            document.getElementById('select_plesk').value = temp[1];
                        }
                    }
                }
            }
        } else {
            this.setServer("SB");
        }
        updateCalculationResult();
    },
    getSetupPriceTotalVatted: function() {
        return vatPrice(serverItems.getSetupTotal() + addonItems.getSetupTotal());
    },
    getFirstInvoiceAmountVatted: function() {
        return this.getMonthlyPriceTotalVatted() + this.getAdditionalPaymentTotalVatted() + this.getSetupPriceTotalVatted();
    },
    getMonthlyInvoiceAmountVatted: function() {
        return this.getMonthlyPriceTotalVatted();
    },
    getAdditionalPaymentTotalVatted: function() {
        return vatPrice(additionalPaymentItems.getSetupTotal());
    },
    formatFirstInvoiceString: function() {
        var str = '';
        if (this.getSetupPriceTotalVatted() !== 0 || this.getAdditionalPaymentTotalVatted() !== 0) {
            str += messages.first_invoice_amount[workspace.language] + ' '  + this.getFirstInvoiceAmountVatted().toFixed(2) + ' €' + '.';
            str += '\n' + messages.subsequent_amount[workspace.language] + ' ' + this.getMonthlyInvoiceAmountVatted().toFixed(2) + ' €' + '.';
        }
        return str;
    },
    formatSetupPriceString: function() {
        var str = "";
        if (this.getSetupPriceTotalVatted() !== 0) {
            str += messages.setup_fee[workspace.language];
            str += serverItems.getItemsSetupString();
            str += addonItems.getItemsSetupString();
        } else {
            return "";
        }
        str += '\n-';
        str += '\n' + messages.total_setup[workspace.language] + ' ' + this.getSetupPriceTotalVatted().toFixed(2) + ' €';
        return str;
    },
    getCalculationString: function() {
        return  ((this.formatMonthlyPriceString()      === '' || !this.getMonthlyPriceTotalVatted())      ? '' : this.formatMonthlyPriceString()      + '\n\n' ) +
                ((this.formatSetupPriceString()        === '' || !this.getSetupPriceTotalVatted())        ? '' : this.formatSetupPriceString()        + '\n\n' ) +
                ((this.formatAdditionalPaymentString() === '' || !this.getAdditionalPaymentTotalVatted()) ? '' : this.formatAdditionalPaymentString() + '\n\n' ) +
                ((this.formatFirstInvoiceString()      === '' ) ? '' : this.formatFirstInvoiceString() + '\n\n' ) +
                this.formatCommentString();
    },
    getCalculationStringOldFormat: function() {
        return  ((this.formatSetupPriceString()        === '' || !this.getSetupPriceTotalVatted())        ? '' : this.formatSetupPriceString()        + '\n\n' ) +
                ((this.formatMonthlyPriceString()      === '' || !this.getMonthlyPriceTotalVatted())      ? '' : this.formatMonthlyPriceString()      + '\n\n' ) +
                this.formatCommentString() +
                ((this.formatAdditionalPaymentStringOldFormat() === '' || !this.getAdditionalPaymentTotalVatted()) ? '' : ('\n' + this.formatAdditionalPaymentStringOldFormat()));
    },
    getCalculationStringBeautifiedWrapper_2: function() {

        addonItems.clear();
        serverItems.clear();
        additionalPaymentItems.clear();
        serverCommentItems.clear();
        addonCommentItems.clear();

        for (var i = 0; i < workspace.Servers.length; i++) {
            var server = workspace.Servers[i];
            if (server !== undefined) {
                var serversAdded = 0;
                while (serversAdded++ < server.amount) {

                    serverItems.addItem(server);
                    serverCommentItems.addItem(server);
                    var flexiCalculated = false;
                    for (var j = 0; j < server.serverAddons.length; j++) {
                        var addon = server.serverAddons[j];
                        var addonsAdded = 0;

                        // addons
                        if (addon.monthly_price_per_cpu === true && server.model.number_of_cpus > 1) {
                            addonsAdded = 0;
                            while (server.model.number_of_cpus > addonsAdded++) {
                                addonItems.addItem(addon);
                                addonCommentItems.addItem(addon);
                            }
                        } else {
                            addonItems.addItem(addon);
                            addonCommentItems.addItem(addon);
                        }

                        // flexi-pack
                        if (!flexiCalculated && addon.flexi_required === true && server.model.flexi_included !== true) {
                            flexiCalculated = true;
                            addonItems.addItem(addons.flexi_pack);
                        }

                        // payment for products charged for entire month
                        if (addon.pay_entire_month) {
                            if (addon.monthly_price_per_cpu === true && server.model.number_of_cpus > 1) {
                                addonsAdded = 0;
                                while (server.model.number_of_cpus > addonsAdded++) {
                                    additionalPaymentItems.addItem(addon);
                                }
                            } else {
                                additionalPaymentItems.addItem(addon);
                            }
                        }

                    }
                }
            }
        }


        if (workspace.newOutputFormat) {
            return this.getCalculationStringBeautified();
        } else {
            return this.getCalculationStringBeautifiedOldFormat();
        }
    },
    getCalculationStringBeautifiedWrapper: function() {
        if (workspace.newOutputFormat) {
            return this.getCalculationStringBeautified();
        } else {
            return this.getCalculationStringBeautifiedOldFormat();
        }
    },
    getCalculationStringBeautified: function() {
        var INDENT = '    ';
        var output = '';
        var maxTextLength = 0;
        var maxPriceLength = 0;
        var expr = /^(.*) ([0-9\.]+ €)$/;

        var lines = this.getCalculationString().split('\n');
        var line = '';
        var temp = '';

        for(var n = 0; n < lines.length; n++) {
            line = lines[n];

            temp = line.match(expr);

            if (temp !== null) {
                var textLen = temp[1].length + 1;
                var priceLen = temp[2].length;
                if (textLen > maxTextLength) {
                    maxTextLength = textLen;
                }

                if (priceLen > maxPriceLength) {
                    maxPriceLength = priceLen;
                }
            }
        }

        for(var i = 0; i < lines.length; i++) {
            line = lines[i];

            temp = line.match(expr);

            if (line === '-') {
                output += INDENT;
                for (var j = 0; j < maxTextLength + maxPriceLength; j++) {
                    output += '-';
                }
                output += '\n';

            } else if (temp === null) {

                output += line + '\n';

            } else {
                var text  = temp[1];
                var price = temp[2];

                output += INDENT + text;
                for (var k = 0; k < maxTextLength - text.length + maxPriceLength - price.length; k++) {
                    output += ' ';
                }
                output += price + '\n';

            }
        }
        // German numbers format 1000.00 -> 1000,00
        if (workspace.language === 'Deutsch' || workspace.language === 'Русский') {
            return output.replace(/([0-9])\.([0-9])/g, "$1,$2");
        } else {
            // English currency format 1000.00 € -> € 1000.00
            return output.replace(/([0-9]+\.[0-9]+) (.)/g, "$2 $1");
        }
    },
    getCalculationStringBeautifiedOldFormat: function() {
        var output = '';
        var maxTextLength = 0;
        var maxPriceLength = 0;
        var expr = /^(.*) ([0-9\.]+ €)$/;

        var lines = this.getCalculationStringOldFormat().split('\n');
        var line = '';
        var temp = '';

        for(var n = 0; n < lines.length; n++) {
            line = lines[n];

            temp = line.match(expr);

            if (temp !== null) {
                var textLen = temp[1].length + 1;
                var priceLen = temp[2].length;
                if (textLen > maxTextLength) {
                    maxTextLength = textLen;
                }

                if (priceLen > maxPriceLength) {
                    maxPriceLength = priceLen;
                }
            }
        }

        for(var i = 0; i < lines.length; i++) {
            line = lines[i];

            temp = line.match(expr);

            if (line === '-') {
                for (var j = 0; j < 3; j++) {
                    output += '-';
                }
                output += '\n';

            } else if (temp === null) {

                output += line + '\n';

            } else {
                var text  = temp[1];
                var price = temp[2];

                output += text;
                for (var k = 0; k < maxTextLength - text.length + maxPriceLength - price.length; k++) {
                    output += ' ';
                }
                output += price + '\n';

            }
        }

        // German numbers format 1000.00 -> 1000,00
        if (workspace.language === 'Deutsch' || workspace.language === 'Русский') {
            return output.replace(/([0-9])\.([0-9])/g, "$1,$2");
        } else {
            // English currency format 1000.00 € -> € 1000.00
            return output.replace(/([0-9]+\.[0-9]+) (.)/g, "$2 $1");
        }
    },
    formatMonthlyPriceString: function() {
        var str = "";
        if (this.getMonthlyPriceTotalVatted() !== 0) {
            str += messages.monthly[workspace.language];
            str += serverItems.getItemsMonthlyString();
            str += addonItems.getItemsMonthlyString();
        } else {
            return "";
        }
        str += '\n-';
        str += '\n' + messages.total_monthly[workspace.language] + ' ' + this.getMonthlyPriceTotalVatted().toFixed(2) + ' €';
        return str;
    },
    formatCommentString: function() {
        var str = '';

        if (workspace.vatPercentage !== 0) {
            str += messages.vat_is_included[workspace.language].replace(/__VATRATE__/, workspace.vatPercentage);
        } else {
            str += messages.vat_isnt_included[workspace.language];
        }

        if (serverCommentItems.getListOfItems() !== "" || addonCommentItems.getListOfItems() !== "") {
            str += "\n\n" + serverCommentItems.getListOfItems();
            str += addonCommentItems.getListOfItems();
        }
        return str;

    },
    prepareComments: function() {
        var str = "";

        for (var ii = 0; ii < workspace.Servers.length; ii++) {
            var server = workspace.Servers[ii];
            if (server !== undefined) {
                if ('comment' in server.model) {
                    str += '\n' + server.model.comment;
                }
                for (var i = 0; i < server.serverAddons.length; i++) {
                    var addonObj = server.serverAddons[i];
                    if ('comment' in addonObj) {
                        str += '\n' + addonObj.comment;
                    }
                }
            }
        }
        return str;
    },
    formatAdditionalPaymentString: function() {
        var str = '';
        if (additionalPaymentItems.getSetupTotal() !== 0) {
            str += '\n' + messages.first_invoice_addition[workspace.language];
            str += additionalPaymentItems.getItemsSetupString();
            str += '\n-';
            str += '\n' + messages.total_additional[workspace.language] + ' ' + vatPrice(additionalPaymentItems.getSetupTotal()).toFixed(2) + ' €';
        }
        return str;
    },
    formatAdditionalPaymentStringOldFormat: function() {
        var str = '';
        if (additionalPaymentItems.getSetupTotal() !== 0) {
            str += '\n' + messages.first_invoice_addition[workspace.language];
            str += additionalPaymentItems.getItemsSetupString();
            str += '\n-\n' + messages.total_additional[workspace.language] + ' ' + vatPrice(additionalPaymentItems.getSetupTotal()).toFixed(2) + ' €';
        }
        return str;
    },
    getMonthlyPriceTotalVatted: function() {
        return vatPrice(addonItems.getMonthlyTotal() + serverItems.getMonthlyTotal());
    },

};

function Server(theModel) {
    var parsedSbNumber = parseInt(document.getElementById('sb_number').value);
    this.sbServerMonthlyPrice = (isNaN(parsedSbNumber) ? 0 : parsedSbNumber);
    if (theModel === 'SB' && this.sbServerMonthlyPrice >= 0) {
        theModel = theModel + this.sbServerMonthlyPrice;
        if (!servers.hasOwnProperty(theModel)) {
            var newSbModel = copyObject(servers.SB);
            //var newSbModel = new Server("SB");
            newSbModel.monthly = this.sbServerMonthlyPrice;
            newSbModel.name.English += this.sbServerMonthlyPrice;
            newSbModel.name.Deutsch += this.sbServerMonthlyPrice;
            newSbModel.name.Русский += this.sbServerMonthlyPrice;
            servers[theModel] = newSbModel;
        }

    }
    this.model = servers[theModel];
    this.model_raw = theModel;
    var number_of_servers = parseInt(document.getElementById('number_of_servers').value);
    this.amount = (number_of_servers > 1) ? number_of_servers : 1;
    this.serverAddons = [];
    this.newOutputFormat = (document.getElementById('new_format_output').checked);
    this.findAndAddAddons();
}

function GeneralItems() {
    this.clear();
}

GeneralItems.prototype = {
    constructor: GeneralItems,
    addItem: function(newItem){
        document.console.log("not implemented yeat. please write own addItem code");
    },
    getItemsMonthlyString: function() {
        var str = "";
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item.monthly !== 0) {
                if (item.amount > 1) {
                    str += '\n' + item.amount + 'x' +
                            item.name +
                            ' (' + vatPrice(item.monthly).toFixed(2) + ' €) ' +
                            vatPrice(item.amount * item.monthly).toFixed(2) + ' €';
                } else {
                    str += '\n' + item.name + ' ' + vatPrice(item.monthly).toFixed(2) + ' €';
                }
            }
        }
        return str;
    },
    getItemsSetupString: function() {
        var str = "";
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item.setup !== 0) {
                if (item.amount > 1) {
                    str += '\n' + item.amount + 'x' +
                            item.name +
                            ' (' + vatPrice(item.setup).toFixed(2) + ' €) ' +
                            vatPrice(item.amount * item.setup).toFixed(2) + ' €';
                } else {
                    str += '\n' + item.name + ' ' + vatPrice(item.setup).toFixed(2) + ' €';
                }
            }
        }
        return str;
    },
    getMonthlyTotal: function() {
        return this.totalMonthly;
    },
    getSetupTotal: function() {
        return this.totalSetup;
    },
    clear: function() {
        this.totalMonthly = 0;
        this.totalSetup = 0;
        this.items = [];
    }

};

function CommentItems() {
    this.clear();
}

CommentItems.prototype = {
    constructor: CommentItems,
    addItem: function(newItem){
        document.console.log("not implemented yeat. please write own addItem code");
    },
    getListOfItems: function() {
        var str = "";
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            str += '\n' + item.name;
        }
        return str;
    },
    clear: function() {
        this.items = [];
    }
};

function ServerItems() {
    GeneralItems.call(this);
    this.clear();
    this.addItem = function(newItem){
        var usedExistingItem = false;
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item !== undefined) {
                if (item.name == newItem.getName()) {
                    usedExistingItem = true;
                    item.amount += 1;
                    this.totalMonthly += item.monthly;
                    this.totalSetup += item.setup;
                }
            }
        }
        if (!usedExistingItem) {
            var theNewItem = {
                name: newItem.getName(),
                setup: (newItem.model.setup !== undefined) ? newItem.model.setup : 0,
                monthly: (newItem.model.monthly !== undefined) ? newItem.model.monthly : 0,
                amount: 1

            };
            this.items.push(theNewItem);
            this.totalMonthly += theNewItem.monthly;
            this.totalSetup += theNewItem.setup;
        }
    };
}
ServerItems.prototype = Object.create(GeneralItems.prototype);

function AddonItems() {
    GeneralItems.call(this);
    this.clear();
    this.addItem = function(newItem) {
        var usedExistingItem = false;
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item !== undefined) {
                if (item.name == newItem.name[workspace.language]) {
                    usedExistingItem = true;
                    item.amount += (newItem.amount !== undefined) ? newItem.amount : 1;
                    this.totalMonthly += item.monthly * ((newItem.amount !== undefined) ? newItem.amount : 1);
                    this.totalSetup += item.setup * ((newItem.amount !== undefined) ? newItem.amount : 1);
                }
            }
        }
        if (!usedExistingItem) {
            var theNewItem = {
                name: newItem.name[workspace.language],
                setup: (newItem.setup !== undefined) ? newItem.setup : 0,
                monthly: (newItem.monthly !== undefined) ? newItem.monthly : 0,
                amount: (newItem.amount !== undefined) ? newItem.amount : 1
            };
            this.items.push(theNewItem);
            this.totalMonthly += theNewItem.monthly * theNewItem.amount;
            this.totalSetup += theNewItem.setup * theNewItem.amount;
        }
    };
}
AddonItems.prototype = Object.create(GeneralItems.prototype);

function AdditionalPaymentItems() {
    GeneralItems.call(this);
    this.clear();
    this.addItem = function(newItem) {
        // please note that we store partial monthly fee of an addon as a setup fee here
        if (newItem.pay_entire_month) {
            var usedExistingItem = false;
            var orderingDate = new Date(document.getElementById('ordering_date').value);
            var daysInMonth = new Date(orderingDate.getFullYear(), orderingDate.getMonth() + 1, 0).getDate();
            var orderingDay = orderingDate.getDate();
            for (var i = 0; i < this.items.length; i++) {
                var item = this.items[i];
                if (item !== undefined) {
                    if (item.name == newItem.name[workspace.language]) {
                        usedExistingItem = true;
                        item.setup = newItem.monthly / daysInMonth * (orderingDay - 1);
                        item.amount += (newItem.amount !== undefined) ? newItem.amount : 1;
                        this.totalSetup += item.setup * ((newItem.amount !== undefined) ? newItem.amount : 1);
                    }
                }
            }
            if (!usedExistingItem) {
                var theNewItem = {
                    name: newItem.name[workspace.language],
                    setup: (newItem.monthly !== undefined) ? (newItem.monthly / daysInMonth * (orderingDay - 1)) : 0,
                    amount: (newItem.amount !== undefined) ? newItem.amount : 1
                };
                this.items.push(theNewItem);
                this.totalSetup += theNewItem.setup * theNewItem.amount;
            }
        }
    };
}
AdditionalPaymentItems.prototype = Object.create(GeneralItems.prototype);

function ServerCommentItems() {
    CommentItems.call(this);
    this.clear();
    this.addItem = function(newItem) {
        var itemAlreadyAdded = false;
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item !== undefined && item.name === newItem.model.comment) {
                itemAlreadyAdded = true;
            }
        }
        if (!itemAlreadyAdded && newItem.model.comment !== undefined) {
            var theNewItem = {
                name: newItem.model.comment
            };
            this.items.push(theNewItem);
        }
    };
}
ServerCommentItems.prototype = Object.create(CommentItems.prototype);

function AddonCommentItems() {
    CommentItems.call(this);
    this.clear();
    this.addItem = function(newItem) {
        var itemAlreadyAdded = false;
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item !== undefined && item.name === newItem.comment) {
                itemAlreadyAdded = true;
            }
        }
        if (!itemAlreadyAdded && newItem.comment !== undefined) {
            var theNewItem = {
                name: newItem.comment
            };
            this.items.push(theNewItem);
        }
    };
}
AddonCommentItems.prototype = Object.create(CommentItems.prototype);

function copyObject(object) {
    return (JSON.parse(JSON.stringify(object)));
}

Server.prototype = {
    constructor: Server,
    addAddon: function(addon, amount) {
        var addonObj = copyObject(addons[addon]);
        addonObj.name_raw = addon;
        if (addon === 'backup100' && this.model.monthly >= 49) {
            addonObj.monthly = 0;
            addonObj.setup = 0;
        }
        if (amount !== undefined) addonObj.amount = amount;
        this.serverAddons.push( addonObj );
    },
    tabName: function() {
        var text = '';

        if (this.amount > 1) {
            text += this.amount + "x";
        }

        text += this.model_raw;

        if (this.serverAddons.length > 0) {
            text += "+" + this.serverAddons.length;
        }

        return text;
    },
    findAndAddAddons: function () {
        for (var addon in addons) {
            if (document.getElementById(addon)) {
                if (document.getElementById(addon).type === 'checkbox') {
                    if (document.getElementById(addon).checked) {
                        this.addAddon(addon);
                    }
                }
                if (document.getElementById(addon).type === 'number') {
                    var amount = parseInt(document.getElementById(addon).value);
                    if (amount) {
                        this.addAddon(addon, amount);
                    }
                }
            }
        }
        if (document.getElementById('select_backup').value !== 'no') {
            this.addAddon('backup' + document.getElementById('select_backup').value);
        }
        if (document.getElementById('select_plesk').value !== 'no') {
            this.addAddon('plesk_' + document.getElementById('select_plesk').value);
        }
    },

    getSetupPrice: function() {
        return ('setup' in this.model) ? this.model.setup : 0;
    },
    getSetupPriceVatted: function() {
        return this.vatPrice( this.getSetupPrice() );
    },
    getMonthlyPrice: function() {
        return ('monthly' in this.model) ? this.model.monthly : 0;
    },
    getMonthlyPriceVatted: function() {
        return this.vatPrice( this.getMonthlyPrice() );
    },
    getName: function() {
        return this.model.name[workspace.language];
    },

    /**
     * Checks if VAT is checked and returns price with or without VAT.
     * NOTE: prices are stored with German VAT, so it has to be removed
     *
     * @param {Number} price Price to process.
     * @returns {Number} Price or price without VAT.
     */
    vatPrice: function(price) {
        if (workspace.vatPercentage !== 0) {
            var cleanPrice = this.round(price / (100 + countryVATrate.Germany) * 100, 4);
            return this.round(cleanPrice * (100 + workspace.vatPercentage) / 100, 2);
        } else {
            return this.round(price / (100 + countryVATrate.Germany) * 100, 2);
        }
    },
    /**
     * Returns rounded value to a decimal place.
     *
     * Using just a Math.round() is a common solution but sometimes a decimal of 5
     * is rounded down instead of up:
     * Math.round(1.005*100)/100; // 1 instead of 1.01
     *
     * Better solution is using numbers represented in exponential notation.
     *
     * @param {Number} value Value to round.
     * @param {Number} decimals Number of decimal places.
     * @returns {Number} Rounded value.
     */
    round: function(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }
};

var serverItems = new ServerItems();
var addonItems = new AddonItems();
var additionalPaymentItems = new AdditionalPaymentItems();
var serverCommentItems = new ServerCommentItems();
var addonCommentItems = new AddonCommentItems();
var workspace = new Workspace();
