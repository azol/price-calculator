'use strict';

const countryVATrate = {
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
    "Greece": 24,
    "Germany": 19,
    "Hungary": 27,
    "Ireland": 23,
    "Italy": 22,
    "Latvia": 21,
    "Lithuania": 21,
    "Luxembourg": 17,
    "Malta": 18,
    "The Netherlands": 21,
    "Norway": 25,
    "Poland": 23,
    "Portugal": 23,
    "Republic of Belarus": 20,
    "Republic of Singapore": 7,
    "Romania": 19,
    "Russia": 20,
    "Slovakia": 20,
    "Slovenia": 22,
    "Spain": 21,
    "Sweden": 25,
    "Switzerland": 7.7,
    "UK": 20,
};

const messages = {
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
        Русский: '(цены указаны с НДС __VATRATE__%)'
    },
    vat_isnt_included: {
        English: '(excl. VAT)',
        Deutsch: '(zzgl. USt)',
        Русский: '(цены указаны без НДС)'
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

const servers = {
    SB: {
        monthly: 0, setup: 0,
        name: {
            English: 'Server SB',
            Deutsch: 'Server SB',
            Русский: 'Сервер SB'
        },
    },
    SB0: {
        monthly: 0, setup: 0,
        name: {
            English: 'Server SB',
            Deutsch: 'Server SB',
            Русский: 'Сервер SB'
        },
    },
    EX42: {
        name: {
            English: 'Server EX42',
            Deutsch: 'Server EX42',
            Русский: 'Сервер EX42'
        },
        location: {
            Germany: {monthly: 39, setup: 39},
            Finland: {monthly: 34, setup: 39}
        },
        comment: 'EX42: Intel® Core™ i7-6700 Quad-Core Skylake/64 GB/2 x 4TB SATA Ent'
    },
    EX42NVMe: {
        name: {
            English: 'Server EX42-NVMe',
            Deutsch: 'Server EX42-NVMe',
            Русский: 'Сервер EX42-NVMe'
        },
        location: {
            Germany: {monthly: 39, setup: 39},
            Finland: {monthly: 34, setup: 39}
        },
        comment: 'EX42-NVMe: Intel® Core™ i7-6700 Quad-Core Skylake/64 GB/2 x 512GB NVMe SSD'
    },
    EX52: {
        name: {
            English: 'Server EX52',
            Deutsch: 'Server EX52',
            Русский: 'Сервер EX52'
        },
        location: {
            Germany: {monthly: 59, setup: 59},
            Finland: {monthly: 54, setup: 59}
        },
        comment: 'EX52: Intel® Core™ i7-8700 Hexa-Core Coffee Lake/64 GB/2 x 8TB SATA Ent'
    },
    EX52NVMe: {
        name: {
            English: 'Server EX52-NVMe',
            Deutsch: 'Server EX52-NVMe',
            Русский: 'Сервер EX52-NVMe'
        },
        location: {
            Germany: {monthly: 59, setup: 59},
            Finland: {monthly: 54, setup: 59}
        },
        comment: 'EX52-NVMe: Intel® Core™ i7-8700 Hexa-Core Coffee Lake/64 GB/2 x 1TB NVMe'
    },
    EX62: {
        name: {
            English: 'Server EX62',
            Deutsch: 'Server EX62',
            Русский: 'Сервер EX62'
        },
        location: {
            Germany: {monthly: 69, setup: 69},
            Finland: {monthly: 64, setup: 69}
        },
        comment: 'EX62: Intel® Core™ i9-9900K Octa-Core Coffee Lake/64 GB/2 x 8TB SATA Ent'
    },
    EX62NVMe: {
        name: {
            English: 'Server EX62-NVMe',
            Deutsch: 'Server EX62-NVMe',
            Русский: 'Сервер EX62-NVMe'
        },
        location: {
            Germany: {monthly: 69, setup: 69},
            Finland: {monthly: 64, setup: 69}
        },
        comment: 'EX62-NVMe: Intel® Core™ i9-9900K Octa-Core Coffee Lake/64 GB/2 x 1TB NVMe SSD'
    },
    AX41: {
        name: {
            English: 'Server AX41',
            Deutsch: 'Server AX41',
            Русский: 'Сервер AX41'
        },
        location: {
            Germany: {monthly: 39, setup: 39}
        },
        comment: 'AX41: AMD Ryzen 5 3600 (6 cores)/64 GB/2 x 2 TB HDD'
    },
    AX41NVMe: {
        name: {
            English: 'Server AX41-NVMe',
            Deutsch: 'Server AX41-NVMe',
            Русский: 'Сервер AX41-NVMe'
        },
        location: {
            Germany: {monthly: 39, setup: 39}
        },
        comment: 'AX41-NVMe: AMD Ryzen 5 3600 (6 cores)/64 GB/2 x 512 GB NVMe SSD'
    },
    AX51: {
        name: {
            English: 'Server AX51',
            Deutsch: 'Server AX51',
            Русский: 'Сервер AX51'
        },
        location: {
            Germany: {monthly: 59, setup: 59}
        },
        comment: 'AX51: AMD Ryzen 7 3700X (8 cores)/64 GB ECC/2 x 8 TB HDD'
    },
    AX51NVMe: {
        name: {
            English: 'Server AX51-NVMe',
            Deutsch: 'Server AX51-NVMe',
            Русский: 'Сервер AX51-NVMe'
        },
        location: {
            Germany: {monthly: 59, setup: 59}
        },
        comment: 'AX51-NVMe: AMD Ryzen 7 3700X (8 cores)/64 GB ECC/2 x 1 TB NVMe SSD'
    },
    AX100: {
        name: {
            English: 'Server AX100',
            Deutsch: 'Server AX100',
            Русский: 'Сервер AX100'
        },
        location: {
            Germany: {monthly: 109, setup: 109}
        },
        comment: 'AX100: AMD Ryzen Threadripper 2950X 16 Core/128 GB\n\
AX100: up to 8x disks in total: all disk types with exception of NVMe (customer grade)'
    },
    AX160NVMe: {
        name: {
            English: 'Server AX160-NVMe',
            Deutsch: 'Server AX160-NVMe',
            Русский: 'Сервер AX160-NVMe'
        },
        location: {
            Germany: {monthly: 169, setup: 169},
            Finland: {monthly: 164, setup: 169}
        },
        comment: 'AX160-NVMe: AMD EPYC 7401P 24-Core/128 GB/2 x 960 GB NVMe\n\
AX160-NVMe: up to 8x disks in total (0..5x NVMe plus SSDs for the rest slots)\n\
AX160-NVMe: up to 12x RAM modules additional'
    },
    AX160SSD: {
        name: {
            English: 'Server AX160-SSD',
            Deutsch: 'Server AX160-SSD',
            Русский: 'Сервер AX160-SSD'
        },
        location: {
            Germany: {monthly: 179, setup: 179},
            Finland: {monthly: 174, setup: 179}
    },
        comment: 'AX160-SSD: AMD EPYC 7401P 24-Core/128 GB/2 x 1.92 TB SSD\n\
AX160-SSD: up to 8x disks in total (0..6x NVMe plus SSDs for the rest slots)\n\
AX160-SSD: up to 12x RAM modules additional'
    },
    AX161: {
        name: {
            English: 'Server AX161',
            Deutsch: 'Server AX161',
            Русский: 'Сервер AX161'
        },
        location: {
            Germany: {monthly: 119, setup: 119},
            Finland: {monthly: 109, setup: 119}
    },
        comment: 'AX161: AMD EPYC 7502P 32-core/128 GB ECC\n\
AX161: 0x SATA HDD + up to 8x NVMe/SATA SSDs\n\
AX161: 1x SATA HDD + up to 3x NVMe/SATA SSDs\n\
AX161: 2x SATA HDD + up to 2x NVMe/SATA SSDs\n\
AX161: 3x SATA HDD\n\
AX161: up to 12x 32 GB ECC RAM modules additional (512 GB max)\n\
AX161: 9..16x 64 GB ECC RAM modules (1024 GB max)'
    },
    PX62: {
        name: {
            English: 'Server PX62',
            Deutsch: 'Server PX62',
            Русский: 'Сервер PX62'
        },
        location: {
            Germany: {monthly: 79, setup: 79},
            Finland: {monthly: 74, setup: 79}
        },
        comment: 'PX62: E-2176G Hexa-Core/64 GB ECC/2 x 8TB SATA Ent'
    },
    PX62NVMe: {
        name: {
            English: 'Server PX62-NVMe',
            Deutsch: 'Server PX62-NVMe',
            Русский: 'Сервер PX62-NVMe'
        },
        location: {
            Germany: {monthly: 79, setup: 79},
            Finland: {monthly: 74, setup: 79}
        },
        comment: 'PX62-NVMe: E-2176G Hexa-Core/64 GB ECC/2 x 960GB NVMe SSD Datacenter Edition\n\
PX62-NVMe: 0x SATA HDD + up to 2x NVMe SSDs, up to 6x SATA SSDs, but maximum 8 disks in total\n\
PX62-NVMe: 1x SATA HDD + 1x NVMe SSD or 1x SATA SSD\n\
PX62-NVMe: 2x SATA HDDs'
    },
    PX92: {
        name: {
            English: 'Server PX92',
            Deutsch: 'Server PX92',
            Русский: 'Сервер PX92'
        },
        location: {
            Germany: {monthly: 99, setup: 99},
            Finland: {monthly: 94, setup: 99}
    },
        comment: 'PX92: Intel® Xeon® W-2145 Octa-Core Skylake W/128 GB DDR4 ECC\n\
PX92: SSD options: 8x NVMe and SSD (up to 4x NVMe or 6x SSD)\n\
PX92: HDD options: 1x HDD + 3x NVMe or SSD / 2x HDD + 2x NVMe or SSD / 3x HDD\n\
PX92: 480 GB NVMe SSD 3D XPoint -- 1x max.\n\
PX92: max 256 GB RAM DDR4 (4x 32GB)'
    },
    SX62: {
        name: {
            English: 'Server SX62',
            Deutsch: 'Server SX62',
            Русский: 'Сервер SX62'
        },
        location: {
            Germany: {monthly: 69, setup: 69},
            Finland: {monthly: 64, setup: 69}
        },
        comment: 'SX62: Intel® Xeon® E3-1270 v3 Quad-Core/32GB/4x 10TB SATA'
    },
    SX132: {
        name: {
            English: 'Server SX132',
            Deutsch: 'Server SX132',
            Русский: 'Сервер SX132'
        },
        location: {
            Germany: {monthly: 169, setup: 169},
            Finland: {monthly: 159, setup: 169}
        },
        comment: 'SX132: Intel® Xeon® E5-1650 v3 Hexa-Core Haswell/128GB/10x 10TB SATA Enterprise'
    },
    SX292: {
        name: {
            English: 'Server SX292',
            Deutsch: 'Server SX292',
            Русский: 'Сервер SX292'
        },
        location: {
            Germany: {monthly: 269, setup: 269},
            Finland: {monthly: 259, setup: 269}
        },
        comment: 'SX292: Intel® Xeon® E5-1650 v3 Hexa-Core Haswell/256GB/Hardware-RAID Controller/15x 10TB SATA'
    },
    SX61_old: {
        name: {
            English: 'Server SX61',
            Deutsch: 'Server SX61',
            Русский: 'Сервер SX61'
        },
        location: {
            Germany: {monthly: 69, setup: 69}
        },
        comment: 'SX61: Intel® Core i7-3770 Quad-Core/32GB/4x 6TB SATA'
    },
    SX131_old: {
        name: {
            English: 'Server SX131',
            Deutsch: 'Server SX131',
            Русский: 'Сервер SX131'
        },
        location: {
            Germany: {monthly: 169, setup: 169}
        },
        comment: 'SX131: Intel® Xeon® E5-1650v2 Hexa-Core/64GB/10x 6TB SATA'
    },
    SX291_old: {
        name: {
            English: 'Server SX291',
            Deutsch: 'Server SX291',
            Русский: 'Сервер SX291'
        },
        location: {
            Germany: {monthly: 249, setup: 249}
        },
        comment: 'SX291: Intel® Xeon® E5-1650v2 Hexa-Core/128GB/Hardware-RAID Controller/15x 6TB SATA'
    },
    DX152: {
        monthly: 159, setup: 159,
        number_of_cpus: 2,
        name: {
            English: 'DELL PowerEdge™ R640 DX152',
            Deutsch: 'DELL PowerEdge™ R640 DX152',
            Русский: 'DELL PowerEdge™ R640 DX152'
        },
        location: {
            Germany: {monthly: 159, setup: 159}
        },
        comment: "DX152: Dual Intel® Xeon® SP Silver 10-Core @ 2.20GHz/64GB DDR4 ECC/Dell PERC H730P/iDRAC\n\
R640: have an iDRAC (IP-KVM)\n\
R640: Drives are optional (240/480/960 GB, 1,92 TB SSD DC, 960 GB NVMe and 480 GB 3D XPoint)\n\
R640: Windows 'for EPYC'\n\
R640 DX152: max 768 GB RAM DDR4 (22x 32GB)"
    },
    DX181: {
        number_of_cpus: 1,
        name: {
            English: 'AMD EPYC™ 7551P DX180',
            Deutsch: 'AMD EPYC™ 7551P DX180',
            Русский: 'AMD EPYC™ 7551P DX180'
        },
        location: {
            Germany: {monthly: 189, setup: 189}
        },
        comment: "DX180: Singe AMD EPYC™ 7502P 32-Core/128GB DDR4 ECC/Dell PERC H730P/iDRAC\n\
DX180: have an iDRAC (IP-KVM)\n\
DX180: Drives are optional (240/480/960 GB, 1.92/3.84 TB SSD DC, 960 GB, 1.92/3.84 TB NVMe and 480 GB 3D XPoint)\n\
DX180: max 512 GB RAM DDR4 (12x 32GB)"
    },
    DX292: {
        number_of_cpus: 2,
        name: {
            English: 'DELL PowerEdge™ R640 DX292',
            Deutsch: 'DELL PowerEdge™ R640 DX292',
            Русский: 'DELL PowerEdge™ R640 DX292'
        },
        location: {
            Germany: {monthly: 219, setup: 219}
        },
        comment: "DX292: Dual Intel® Xeon® SP Gold 16-Core @ 2.10GHz/64GB DDR4 ECC/Dell PERC H730P/iDRAC\n\
R640: have an iDRAC (IP-KVM)\n\
R640: Drives are optional (240/480/960 GB, 1,92 TB SSD DC, 960 GB NVMe and 480 GB 3D XPoint)\n\
R640: Windows 'for EPYC'\n\
R640 DX292: max 768 GB RAM DDR4 (22x 32GB)"
    },
    DX141_old: {
        name: {
            English: 'DELL PowerEdge™ R530 DX141',
            Deutsch: 'DELL PowerEdge™ R530 DX141',
            Русский: 'DELL PowerEdge™ R530 DX141'
        },
        location: {
            Germany: {monthly: 109, setup: 109}
        },
        comment: "DX141: Single Intel® Xeon® E5-1650 v3 @ 3.5GHz Hexa-Core/64GB DDR4 ECC/Dell PERC H330/iDRAC\n\
R530: have an iDRAC (IP-KVM)\n\
R530: Drives are optional (2/4/10TB SATA, 600GB SAS, 240/480/960 GB and 1,92 TB GB SSD DC)\n\
R530 DX141: max 256 GB RAM DDR4 (6x 32GB)"
    },
    DX151_old: {
        name: {
            English: 'DELL PowerEdge™ R730 DX151',
            Deutsch: 'DELL PowerEdge™ R730 DX151',
            Русский: 'DELL PowerEdge™ R730 DX151'
        },
        location: {
            Germany: {monthly: 129, setup: 129}
        },
        comment: "DX151: Single Intel® Xeon® E5-2600 v3 @2.10GHz Octa-Core/64GB DDR4 ECC/Dell PERC H730/iDRAC\n\
R730: have an iDRAC (IP-KVM)\n\
R730: Drives are optional (2/4/10TB SATA, 600GB SAS, 240/480/960 GB and 1,92 TB GB SSD DC)\n\
R730 DX151: max 384 GB RAM DDR4 (10x 32GB)"
    },
    DX180_old: {
        number_of_cpus: 1,
        name: {
            English: 'AMD EPYC™ 7551P DX180',
            Deutsch: 'AMD EPYC™ 7551P DX180',
            Русский: 'AMD EPYC™ 7551P DX180'
        },
        location: {
            Germany: {monthly: 189, setup: 189}
        },
        comment: "DX180: Singe AMD EPYC™ 7551P 32-Core/128GB DDR4 ECC/Dell PERC H730P/iDRAC\n\
DX180: have an iDRAC (IP-KVM)\n\
DX180: Drives are optional (240/480/960 GB, 1,92 TB SSD DC, 960 GB NVMe and 480 GB 3D XPoint)\n\
DX180: Windows 'for EPYC'\n\
DX180: max 512 GB RAM DDR4 (12x 32GB)"
    },

    DX291_old: {
        number_of_cpus: 2,
        name: {
            English: 'DELL PowerEdge™ R730 DX291',
            Deutsch: 'DELL PowerEdge™ R730 DX291',
            Русский: 'DELL PowerEdge™ R730 DX291'
        },
        location: {
            Germany: {monthly: 189, setup: 189}
        },
        comment: "DX291: Dual Intel® Xeon® E5-2600 v3 @2.10GHz Octa-Core/128GB DDR4 ECC/Dell PERC H730/iDRAC\n\
R730: have an iDRAC (IP-KVM)\n\
R730: Drives are optional (2/4/10TB SATA, 600GB SAS, 240/480/960 GB and 1,92 TB GB SSD DC)\n\
R730 DX291: max 768 GB RAM DDR4 (20x 32GB)"
    },
    CX10: {
        name: {
            English: 'Server CX10',
            Deutsch: 'Server CX10',
            Русский: 'Сервер CX10'
        },
        location: {
            Germany: {monthly: 3.90, setup: 0}
        },
        comment: 'CX10: 1 vCore 2 GHz/1 GB/25 GB SSD/1 snapshot/2 TB'
    },
    CX20: {
        name: {
            English: 'Server CX20',
            Deutsch: 'Server CX20',
            Русский: 'Сервер CX20'
        },
        location: {
            Germany: {monthly: 6.90, setup: 0}
        },
        comment: 'CX20: 2 vCores 2 GHz/2 GB/50 GB SSD/2 snapshots/5 TB'
    },
    CX30: {
        name: {
            English: 'Server CX30',
            Deutsch: 'Server CX30',
            Русский: 'Сервер CX30'
        },
        location: {
            Germany: {monthly: 11.90, setup: 0}
        },
        comment: 'CX30: 2 vCores 2 GHz/4 GB/100 GB SSD/3 snapshots/8 TB'
    },
    CX40: {
        name: {
            English: 'Server CX40',
            Deutsch: 'Server CX40',
            Русский: 'Сервер CX40'
        },
        location: {
            Germany: {monthly: 19.90, setup: 0}
        },
        comment: 'CX40: 2 vCores 2 GHz/8 GB/200 GB SSD/4 snapshots/10 TB'
    },
    CX50: {
        name: {
            English: 'Server CX50',
            Deutsch: 'Server CX50',
            Русский: 'Сервер CX50'
        },
        location: {
            Germany: {monthly: 29.90, setup: 0}
        },
        comment: 'CX50: 4 vCores 2 GHz/16 GB/400 GB SSD/5 snapshots/20 TB'
    },
    CX60: {
        name: {
            English: 'Server CX60',
            Deutsch: 'Server CX60',
            Русский: 'Сервер CX60'
        },
        location: {
            Germany: {monthly: 49.90, setup: 0}
        },
        comment: 'CX60: 8 vCores 2 GHz/32 GB/600 GB SSD/6 snapshots/30 TB'
    },
    CPX11: {
        name: {
            English: 'Server CPX11',
            Deutsch: 'Server CPX11',
            Русский: 'Сервер CPX11'
        },
        location: {
            Finland: {monthly: 3.49, setup: 0},
            Germany: {monthly: 3.49, setup: 0}
        },
        comment: 'CPX11: 2 vCPU/2 GB/40 GB'
    },
    CPX21: {
        name: {
            English: 'Server CPX21',
            Deutsch: 'Server CPX21',
            Русский: 'Сервер CPX21'
        },
        location: {
            Finland: {monthly: 6.90, setup: 0},
            Germany: {monthly: 6.90, setup: 0}
        },
        comment: 'CPX21: 3 vCPU/4 GB/80 GB'
    },
    CPX31: {
        name: {
            English: 'Server CPX31',
            Deutsch: 'Server CPX31',
            Русский: 'Сервер CPX31'
        },
        location: {
            Finland: {monthly: 12.40, setup: 0},
            Germany: {monthly: 12.40, setup: 0}
        },
        comment: 'CPX31: 4 vCPU/8 GB/160 GB'
    },
    CPX41: {
        name: {
            English: 'Server CPX41',
            Deutsch: 'Server CPX41',
            Русский: 'Сервер CPX41'
        },
        location: {
            Finland: {monthly: 22.90, setup: 0},
            Germany: {monthly: 22.90, setup: 0}
        },
        comment: 'CPX41: 8 vCPU/16 GB/240 GB'
    },
    CPX51: {
        name: {
            English: 'Server CPX51',
            Deutsch: 'Server CPX51',
            Русский: 'Сервер CPX51'
        },
        location: {
            Finland: {monthly: 49.90, setup: 0},
            Germany: {monthly: 49.90, setup: 0}
        },
        comment: 'CPX51: 16 vCPU/32 GB/360 GB'
    },
    CX11: {
        name: {
            English: 'Server CX11',
            Deutsch: 'Server CX11',
            Русский: 'Сервер CX11'
        },
        location: {
            Finland: {monthly: 2.49, setup: 0},
            Germany: {monthly: 2.49, setup: 0}
        },
        comment: 'CX11: 1 vCPU/2 GB/20 GB'
    },
    CX21: {
        name: {
            English: 'Server CX21',
            Deutsch: 'Server CX21',
            Русский: 'Сервер CX21'
        },
        location: {
            Finland: {monthly: 4.90, setup: 0},
            Germany: {monthly: 4.90, setup: 0}
        },
        comment: 'CX21: 2 vCPU/4 GB/40 GB'
    },
    CX31: {
        name: {
            English: 'Server CX31',
            Deutsch: 'Server CX31',
            Русский: 'Сервер CX31'
        },
        location: {
            Finland: {monthly: 8.90, setup: 0},
            Germany: {monthly: 8.90, setup: 0}
        },
        comment: 'CX31: 2 vCPU/8 GB/80 GB'
    },
    CX41: {
        name: {
            English: 'Server CX41',
            Deutsch: 'Server CX41',
            Русский: 'Сервер CX41'
        },
        location: {
            Finland: {monthly: 15.90, setup: 0},
            Germany: {monthly: 15.90, setup: 0}
        },
        comment: 'CX41: 4 vCPU/16 GB/160 GB'
    },
    CX51: {
        name: {
            English: 'Server CX51',
            Deutsch: 'Server CX51',
            Русский: 'Сервер CX51'
        },
        location: {
            Finland: {monthly: 29.90, setup: 0},
            Germany: {monthly: 29.90, setup: 0}
        },
        comment: 'CX51: 8 vCPU/32 GB/240 GB'
    },
    CCX11: {
        name: {
            English: 'Server CCX11',
            Deutsch: 'Server CCX11',
            Русский: 'Сервер CCX11'
        },
        location: {
            Finland: {monthly: 19.90, setup: 0},
            Germany: {monthly: 19.90, setup: 0}
        },
        comment: 'CCX11: 2 vCPU/8 GB/80 GB'
    },
    CCX21: {
        name: {
            English: 'Server CCX21',
            Deutsch: 'Server CCX21',
            Русский: 'Сервер CCX21'
        },
        location: {
            Finland: {monthly: 34.90, setup: 0},
            Germany: {monthly: 34.90, setup: 0}
        },
        comment: 'CCX21: 4 vCPU/16 GB/160 GB'
    },
    CCX31: {
        name: {
            English: 'Server CCX31',
            Deutsch: 'Server CCX31',
            Русский: 'Сервер CCX31'
        },
        location: {
            Finland: {monthly: 69.90, setup: 0},
            Germany: {monthly: 69.90, setup: 0}
        },
        comment: 'CCX31: 8 vCPU/32 GB/240 GB'
    },
    CCX41: {
        name: {
            English: 'Server CCX41',
            Deutsch: 'Server CCX41',
            Русский: 'Сервер CCX41'
        },
        location: {
            Finland: {monthly: 139.90, setup: 0},
            Germany: {monthly: 139.90, setup: 0}
        },
        comment: 'CCX41: 16 vCPU/64 GB/360 GB'
    },
    CCX51: {
        name: {
            English: 'Server CCX51',
            Deutsch: 'Server CCX51',
            Русский: 'Сервер CCX51'
        },
        location: {
            Finland: {monthly: 269.90, setup: 0},
            Germany: {monthly: 269.90, setup: 0}
        },
        comment: 'CCX51: 32 vCPU/128 GB/540 GB'
    },
    BX10: {
        name: {
            English: 'Storage Box BX10',
            Deutsch: 'Storage Box BX10',
            Русский: 'Storage Box BX10'
        },
        location: {
            Germany: {monthly: 2.90, setup: 0}
        },
        comment: 'BX10: 100 GB/1 TB traffic'
    },
    BX20: {
        name: {
            English: 'Storage Box BX20',
            Deutsch: 'Storage Box BX20',
            Русский: 'Storage Box BX20'
        },
        location: {
            Germany: {monthly: 4.90, setup: 0}
        },
        comment: 'BX20: 500 GB/2 TB traffic'
    },
    BX30: {
        name: {
            English: 'Storage Box BX30',
            Deutsch: 'Storage Box BX30',
            Русский: 'Storage Box BX30'
        },
        location: {
            Germany: {monthly: 7.90, setup: 0}
        },
        comment: 'BX30: 1 TB/5 TB traffic'
    },
    BX40: {
        name: {
            English: 'Storage Box BX40',
            Deutsch: 'Storage Box BX40',
            Русский: 'Storage Box BX40'
        },
        location: {
            Germany: {monthly: 9.90, setup: 0}
        },
        comment: 'BX40: 2 TB/10 TB traffic'
    },
    BX50: {
        name: {
            English: 'Storage Box BX50',
            Deutsch: 'Storage Box BX50',
            Русский: 'Storage Box BX50'
        },
        location: {
            Germany: {monthly: 21.90, setup: 0}
        },
        comment: 'BX50: 5 TB/15 TB traffic'
    },
    BX60: {
        name: {
            English: 'Storage Box BX60',
            Deutsch: 'Storage Box BX60',
            Русский: 'Storage Box BX60'
        },
        location: {
            Germany: {monthly: 39.90, setup: 0}
        },
        comment: 'BX60: 10 TB/20 TB traffic'
    },
    COLOCATION_1_3: {
        name: {
            English: 'Colocation 1/3 Rack',
            Deutsch: 'Colocation 1/3 Rack',
            Русский: 'Colocation 1/3 Rack'
        },
        location: {
            Germany: {monthly: 100, setup: 100},
            Finland: {monthly: 139, setup: 139}
        },
        comment: '1/3 Rack: 14 units'
    },
    COLOCATION_BASIC: {
        name: {
            English: 'Colocation Rack Basic',
            Deutsch: 'Colocation Rack Basic',
            Русский: 'Colocation Rack Basic'
        },
        location: {
            Germany: {monthly: 167.2269, setup: 167.2269}
        },
        comment: 'Rack Basic: 42 units'
    },
    COLOCATION_ADVANCED: {
        name: {
            English: 'Colocation Rack Advanced',
            Deutsch: 'Colocation Rack Advanced',
            Русский: 'Colocation Rack Advanced'
        },
        location: {
            Germany: {monthly: 251.2605, setup: 251.2605},
            Finland: {monthly: 349, setup: 349}
        },
        comment: 'Rack Advanced: 47 units'
    },

    /*
     template: {
       number_of_cpus: 2,
       name: {
         English: '',
         Deutsch: '',
         Русский: ''
       },
       location: {
         Germany: {monthly: 0, setup: 0},
         Finland: {monthly: 0, setup: 0} // the last location is a default location
       },
       comment: 'line1\nline2'
     }
     */
};

const addons = {
    usb16: {
        monthly: 1.50,
        name: {
            English: '16 GB USB stick',
            Deutsch: '16 GB USB-Stick',
            Русский: '16 ГБ USB-накопитель'
        }
    },
    usb64: {
        monthly: 3.50,
        name: {
            English: '64 GB USB stick',
            Deutsch: '64 GB USB-Stick',
            Русский: '64 ГБ USB-накопитель'
        }
    },
    ddr4ecc32gb: {
        monthly: 12.00,
        name: {
            English: '32 GB DDR4 ECC RAM',
            Deutsch: '32 GB DDR4 ECC RAM',
            Русский: '32 ГБ DDR4 оперативной памяти ECC'
        }
    },
    ddr4ecc64gb: {
        monthly: 22.50,
        name: {
            English: '64 GB DDR4 ECC RAM',
            Deutsch: '64 GB DDR4 ECC RAM',
            Русский: '64 ГБ DDR4 оперативной памяти ECC'
        }
    },
    win_std_8cores: {
        monthly: 23.10, pay_entire_month: true,
        monthly_price_per_cpu: true,
        name: {
            English: 'Windows Server 2019 Standard Edition - 8 cores',
            Deutsch: 'Windows Server 2019 Standard Edition - 8 cores',
            Русский: 'Windows Server 2019 Standard Edition - 8 ядер'
        }
    },
    win_dc_8cores: {
        monthly: 143.30, pay_entire_month: true,
        monthly_price_per_cpu: true,
        name: {
            English: 'Windows Server 2019 Datacenter Edition - 8 cores',
            Deutsch: 'Windows Server 2019 Datacenter Edition - 8 cores',
            Русский: 'Windows Server 2019 Datacenter Edition - 8 ядер'
        }
    },
    win_std_10cores: {
        monthly: 29.20, pay_entire_month: true,
        monthly_price_per_cpu: true,
        name: {
            English: 'Windows Server 2019 Standard Edition - 10 cores',
            Deutsch: 'Windows Server 2019 Standard Edition - 10 cores',
            Русский: 'Windows Server 2019 Standard Edition - 10 ядер'
        }
    },
    win_dc_10cores: {
        monthly: 179.30, pay_entire_month: true,
        monthly_price_per_cpu: true,
        name: {
            English: 'Windows Server 2019 Datacenter Edition - 10 cores',
            Deutsch: 'Windows Server 2019 Datacenter Edition - 10 cores',
            Русский: 'Windows Server 2019 Datacenter Edition - 10 ядер'
        }
    },
    win_std_16cores: {
        monthly: 46.20, pay_entire_month: true,
        monthly_price_per_cpu: true,
        name: {
            English: 'Windows Server 2019 Standard Edition - 16 cores',
            Deutsch: 'Windows Server 2019 Standard Edition - 16 cores',
            Русский: 'Windows Server 2019 Standard Edition - 16 ядер'
        }
    },
    win_dc_16cores: {
        monthly: 286.60, pay_entire_month: true,
        monthly_price_per_cpu: true,
        name: {
            English: 'Windows Server 2019 Datacenter Edition - 16 cores',
            Deutsch: 'Windows Server 2019 Datacenter Edition - 16 cores',
            Русский: 'Windows Server 2019 Datacenter Edition - 16 ядер'
        }
    },
    win_std_24cores: {
        monthly: 69.30, pay_entire_month: true,
        monthly_price_per_cpu: true,
        name: {
            English: 'Windows Server 2019 Standard Edition - 24 cores',
            Deutsch: 'Windows Server 2019 Standard Edition - 24 cores',
            Русский: 'Windows Server 2019 Standard Edition - 24 ядра'
        }
    },
    win_dc_24cores: {
        monthly: 430.10, pay_entire_month: true,
        monthly_price_per_cpu: true,
        name: {
            English: 'Windows Server 2019 Datacenter Edition - 24 cores',
            Deutsch: 'Windows Server 2019 Datacenter Edition - 24 cores',
            Русский: 'Windows Server 2019 Datacenter Edition - 24 ядра'
        }
    },
    win_std_32cores: {
        monthly: 92.40, pay_entire_month: true,
        monthly_price_per_cpu: true,
        name: {
            English: 'Windows Server 2019 Standard Edition - 32 cores',
            Deutsch: 'Windows Server 2019 Standard Edition - 32 cores',
            Русский: 'Windows Server 2019 Standard Edition - 32 ядра'
        }
    },
    win_dc_32cores: {
        monthly: 560.35, pay_entire_month: true,
        monthly_price_per_cpu: true,
        name: {
            English: 'Windows Server 2019 Datacenter Edition - 32 cores',
            Deutsch: 'Windows Server 2019 Datacenter Edition - 32 cores',
            Русский: 'Windows Server 2019 Datacenter Edition - 32 ядра'
        }
    },
    plesk_web_admin: {
        monthly: 4.20, pay_entire_month: "yes",
        name: {
            English: "Plesk Onyx Web ADMIN Edition",
            Deutsch: "Plesk Onyx Web ADMIN Edition",
            Русский: "Plesk Onyx издание Web ADMIN"},
    },
    plesk_web_pro: {
        monthly: 6.20, pay_entire_month: "yes",
        name: {
            English: "Plesk Onyx Web PRO Edition",
            Deutsch: "Plesk Onyx Web PRO Edition",
            Русский: "Plesk Onyx издание Web PRO"},
    },
    plesk_web_host: {
        monthly: 18.70, pay_entire_month: "yes",
        name: {
            English: "Plesk Onyx Web HOST Edition",
            Deutsch: "Plesk Onyx Web HOST Edition",
            Русский: "Plesk Onyx издание Web HOST"},
    },
    plesk_power_pack: {
        monthly: 7.80, pay_entire_month: true,
        name: {
            English: 'Plesk Power Pack',
            Deutsch: 'Plesk Power Pack',
            Русский: 'Plesk Power Pack'
        }
    },
    cpanel: {
        monthly: 25.1261, pay_entire_month: true,
        name: {
            English: 'cPanel',
            Deutsch: 'cPanel',
            Русский: 'cPanel'
        }
    },
    raid4: {
        monthly: 21,
        name: {
            English: '4-Port Hardware RAID controller',
            Deutsch: '4-Port Hardware RAID-Controller',
            Русский: '4-портовый RAID-контроллер'
        }
    },
    ip: {
        monthly: 0.8403,
        name: {
            English: 'Additional IP address',
            Deutsch: 'Zusätzliche IP-Adresse',
            Русский: 'Дополнительный IP-адрес'
        }
    },
    subnet29: {
        monthly: 6.7227,
        name: {
            English: 'Subnet /29',
            Deutsch: 'Subnet /29',
            Русский: 'Подсеть /29'
        }
    },
    subnet28: {
        monthly: 13.4454,
        name: {
            English: 'Subnet /28',
            Deutsch: 'Subnet /28',
            Русский: 'Подсеть /28'
        }
    },
    subnet27: {
        monthly: 26.8908,
        name: {
            English: 'Subnet /27',
            Deutsch: 'Subnet /27',
            Русский: 'Подсеть /27'
        }
    },
    subnet26: {
        monthly: 53.7815,
        name: {
            English: 'Subnet /26',
            Deutsch: 'Subnet /26',
            Русский: 'Подсеть /26'
        }
    },
    subnet25: {
        monthly: 107.5630,
        name: {
            English: 'Subnet /25',
            Deutsch: 'Subnet /25',
            Русский: 'Подсеть /25'
        }
    },
    subnet24: {
        monthly: 215.1261,
        name: {
            English: 'Subnet /24',
            Deutsch: 'Subnet /24',
            Русский: 'Подсеть /24'
        }
    },
    failover_ip: {
        monthly: 4.2017,
        name: {
            English: 'Failover IP',
            Deutsch: 'Failover-IP',
            Русский: 'Failover IP'
        },
        comment: 'Failover IP: can`t be used with VMware ESXi'
    },
    failover_subnet29: {
        monthly: 15.1261,
        name: {
            English: 'Failover subnet /29',
            Deutsch: 'Failover Subnet /29',
            Русский: 'Failover подсеть /29'
        },
        comment: 'Failover subnet /29: can`t be used with VMware ESXi'
    },
    failover_subnet28: {
        monthly: 21.8487,
        name: {
            English: 'Failover subnet /28',
            Deutsch: 'Failover Subnet /28',
            Русский: 'Failover подсеть /28'
        },
        comment: 'Failover subnet /28: can`t be used with VMware ESXi'
    },
    failover_subnet27: {
        monthly: 35.2941,
        name: {
            English: 'Failover subnet /27',
            Deutsch: 'Failover Subnet /27',
            Русский: 'Failover подсеть /27'
        },
        comment: 'Failover subnet /27: can`t be used with VMware ESXi'
    },
    failover_subnet26: {
        monthly:  62.1849,
        name: {
            English: 'Failover subnet /26',
            Deutsch: 'Failover Subnet /26',
            Русский: 'Failover подсеть /26'
        },
        comment: 'Failover subnet /26: can`t be used with VMware ESXi'
    },
    failover_subnet25: {
        monthly:  115.9664,
        name: {
            English: 'Failover subnet /25',
            Deutsch: 'Failover Subnet /25',
            Русский: 'Failover подсеть /25'
        },
        comment: 'Failover subnet /25: can`t be used with VMware ESXi'
    },
    failover_subnet24: {
        monthly: 223.5294,
        name: {
            English: 'Failover subnet /24',
            Deutsch: 'Failover Subnet /24',
            Русский: 'Failover подсеть /24'
        },
        comment: 'Failover subnet /24: can`t be used with VMware ESXi'
    },
    vlan_subnet29: {
        monthly: 15.1261,
        name: {
            English: 'VLAN subnet /29',
            Deutsch: 'VLAN Subnet /29',
            Русский: 'VLAN подсеть /29'
        },
    },
    vlan_subnet28: {
        monthly: 21.8487,
        name: {
            English: 'VLAN subnet /28',
            Deutsch: 'VLAN Subnet /28',
            Русский: 'VLAN подсеть /28'
        },
    },
    vlan_subnet27: {
        monthly: 35.2941,
        name: {
            English: 'VLAN subnet /27',
            Deutsch: 'VLAN Subnet /27',
            Русский: 'VLAN подсеть /27'
        },
    },
    ssd240: {
        monthly: 4.00,
        name: {
            English: '240 GB SATA SSD',
            Deutsch: '240 GB SATA SSD',
            Русский: '240 ГБ SATA SSD'
        }
    },
    ssd500: {
        monthly: 6.00,
        name: {
            English: '500 GB SATA SSD',
            Deutsch: '500 GB SATA SSD',
            Русский: '500 ГБ SATA SSD'
        }
    },
    ssd1000: {
        monthly: 10.50,
        name: {
            English: '1 TB SATA SSD',
            Deutsch: '1 TB SATA SSD',
            Русский: '1 ТБ SATA SSD'
        }
    },
    ssd240de: {
        monthly: 5.00,
        name: {
            English: '240 GB SATA SSD Datacenter Edition',
            Deutsch: '240 GB SATA SSD Datacenter Edition',
            Русский: '240 ГБ SATA SSD Datacenter Edition'
        }
    },
    ssd480de: {
        monthly: 7.00,
        name: {
            English: '480 GB SATA SSD Datacenter Edition',
            Deutsch: '480 GB SATA SSD Datacenter Edition',
            Русский: '480 ГБ SATA SSD Datacenter Edition'
        }
    },
    ssd960de: {
        monthly: 11.50,
        name: {
            English: '960 GB SATA SSD Datacenter Edition',
            Deutsch: '960 GB SATA SSD Datacenter Edition',
            Русский: '960 ГБ SATA SSD Datacenter Edition'
        }
    },
    ssd1920_de: {
        monthly: 22.00,
        name: {
            English: '1.92 TB SATA SSD Datacenter Edition',
            Deutsch: '1,92 TB SATA SSD Datacenter Edition',
            Русский: '1,92 ТБ SATA SSD Datacenter Edition'
        }
    },
    ssd3840de: {
        monthly: 47.00,
        name: {
            English: '3.84 TB SATA SSD Datacenter Edition',
            Deutsch: '3,84 TB SATA SSD Datacenter Edition',
            Русский: '3,84 ТБ SATA SSD Datacenter Edition'
        },
        comment: "3.84 TB SATA SSD Datacenter Edition: for compatibility see https://wiki.hetzner.de/index.php/Root_Server_Hardware/en#Drives"
    },
    nvme512: {
        monthly: 7.50,
        name: {
            English: '512 GB NVMe SSD',
            Deutsch: '512 GB NVMe SSD',
            Русский: '512 ГБ NVMe SSD'
        },
        comment: "512 NVMe SSD: for compatibility see https://wiki.hetzner.de/index.php/Root_Server_Hardware/en#Drives"
    },
    nvme960de: {
        monthly: 13.00,
        name: {
            English: '960 GB NVMe SSD Datacenter Edition',
            Deutsch: '960 GB NVMe SSD Datacenter Edition',
            Русский: '960 ГБ NVMe SSD Datacenter Edition'
        },
        comment: "960 NVMe SSD Datacenter Edition: for compatibility see https://wiki.hetzner.de/index.php/Root_Server_Hardware/en#Drives"
    },
    nvme480_3d_xpoint: {
        monthly: 43.00,
        name: {
            English: '480 GB NVMe SSD 3D XPoint',
            Deutsch: '480 GB NVMe SSD 3D XPoint',
            Русский: '480 ГБ NVMe SSD 3D XPoint'
        },
        comment: "480 GB NVMe SSD 3D XPoint: for compatibility see https://wiki.hetzner.de/index.php/Root_Server_Hardware/en#Drives"
    },
    nvme1000: {
        monthly: 10.00,
        name: {
            English: '1 TB NVMe SSD',
            Deutsch: '1 TB NVMe SSD',
            Русский: '1 ТБ NVMe SSD'
        },
        comment: "1 TB NVMe SSD: for compatibility see https://wiki.hetzner.de/index.php/Root_Server_Hardware/en#Drives"
    },
    nvme1920de: {
        monthly: 24.50,
        name: {
            English: '1.92 TB NVMe SSD Datacenter Edition',
            Deutsch: '1,92 TB NVMe SSD Datacenter Edition',
            Русский: '1,92 ТБ NVMe SSD Datacenter Edition'
        },
        comment: "1.92 TB NVMe SSD Datacenter Edition: for compatibility see https://wiki.hetzner.de/index.php/Root_Server_Hardware/en#Drives"
    },
    nvme3840de: {
        monthly: 45.00,
        name: {
            English: '3.84 TB NVMe SSD Datacenter Edition',
            Deutsch: '3,84 TB NVMe SSD Datacenter Edition',
            Русский: '3,84 ТБ NVMe SSD Datacenter Edition'
        },
        comment: "3.84 TB NVMe SSD Datacenter Edition: for compatibility see https://wiki.hetzner.de/index.php/Root_Server_Hardware/en#Drives"
    },
    sas600: {
        monthly: 17.50,
        name: {
            English: '600 GB SAS Enterprise Hard Drive',
            Deutsch: '600 GB SAS Enterprise Hard Drive',
            Русский: '600 ГБ SAS Enterprise жесткий диск'
        },
        comment: '600 GB SAS Enterprise Hard Drive: is available only for DX141/151/291'
    },
    sata2000e: {
        monthly: 10.00,
        name: {
            English: '2 TB SATA Enterprise Hard Drive',
            Deutsch: '2 TB SATA Enterprise Hard Drive',
            Русский: '2 ТБ SATA Enterprise жесткий диск'
        },
    },
    sata4000e: {
        monthly: 13.00,
        name: {
            English: '4 TB SATA Enterprise Hard Drive',
            Deutsch: '4 TB SATA Enterprise Hard Drive',
            Русский: '4 ТБ SATA Enterprise жесткий диск'
        }
    },
    sata6000e: {
        monthly: 14.50,
        name: {
            English: '6 TB SATA Enterprise Hard Drive',
            Deutsch: '6 TB SATA Enterprise Hard Drive',
            Русский: '6 ТБ SATA Enterprise жесткий диск'
        }
    },
    sata8000e: {
        monthly: 18.00,
        name: {
            English: '8 TB SATA Enterprise Hard Drive',
            Deutsch: '8 TB SATA Enterprise Hard Drive',
            Русский: '8 ТБ SATA Enterprise жесткий диск'
        }
    },
    sata10000e: {
        monthly: 19.50,
        name: {
            English: '10 TB SATA Enterprise Hard Drive',
            Deutsch: '10 TB SATA Enterprise Hard Drive',
            Русский: '10 ТБ SATA Enterprise жесткий диск'
        }
    },
    sata12000e: {
        monthly: 26.50,
        name: {
            English: '12 TB SATA Enterprise Hard Drive',
            Deutsch: '12 TB SATA Enterprise Hard Drive',
            Русский: '12 ТБ SATA Enterprise жесткий диск'
        }
    },
    gbit_lan: {
        monthly: 1.00,
        name: {
            English: '1G LAN connection ',
            Deutsch: 'LAN Verbindung 1G',
            Русский: 'Подключение LAN 1G'
        }
    },
    ten_gbit_lan: {
        monthly: 2.50,
        name: {
            English: '10G LAN connection ',
            Deutsch: 'LAN Verbindung 10G',
            Русский: 'Подключение LAN 10G'
        }
    },
    gbit_nic: {
        monthly: 2.00,
        name: {
            English: '1G NIC',
            Deutsch: '1G NIC',
            Русский: '1G NIC'
        },
        comment: "1G NIC not compatible with Windows 2016 and 2019"
    },
    gbit_dual_nic: {
        monthly: 5.00,
        name: {
            English: 'DUAL 1G NIC',
            Deutsch: 'DUAL 1G NIC',
            Русский: 'Двойной 1G NIC'
        }
    },
    ten_gbit_nic: {
        monthly: 8.00,
        name: {
            English: '10G NIC',
            Deutsch: '10G NIC',
            Русский: '10G NIC'
        }
    },
    ten_gbit_dual_nic: {
        monthly: 12.00,
        name: {
            English: 'DUAL 10G NIC',
            Deutsch: 'DUAL 10G NIC',
            Русский: 'Двойной 10G NIC'
        }
    },
    ten_gbit_dual_nic_dell: {
        monthly: 15.50,
        name: {
            English: 'DUAL 10G NIC (Dell)',
            Deutsch: 'DUAL 10G NIC (Dell)',
            Русский: 'Двойной 10G NIC (Dell)'
        }
    },
    uplink_10_gbit: {
        monthly: 39.00,
        name: {
            English: '10G dedicated uplink',
            Deutsch: '10G dedicated Uplink',
            Русский: 'Выделенный 10G Uplink'
        },
        comment: '10G uplink: includes 10Gbit NIC. Available only for DX, PX, AX and EX-Skylake.'
    },

    switch_5port: {
        monthly: 2.00,
        name: {
            English: '5-Port Gbit switch',
            Deutsch: '5-Port Gbit-Switch',
            Русский: 'Коммутатор Гбит 5 портов'
        }
    },
    switch_8port: {
        monthly: 2.00,
        name: {
            English: '8-Port Gbit switch',
            Deutsch: '8-Port Gbit-Switch',
            Русский: 'Коммутатор Гбит 8 портов'
        }
    },
    switch_24port: {
        monthly: 13.00,
        name: {
            English: '24-Port Gbit switch',
            Deutsch: '24-Port Gbit-Switch',
            Русский: 'Коммутатор Гбит 24 порта'
        }
    },
    switch_48port: {
        monthly: 135.50,
        name: {
            English: '48-Port Gbit switch',
            Deutsch: '48-Port Gbit-Switch',
            Русский: 'Коммутатор Гбит 48 портов'
        }
    },
    switch_12port_10gbit: {
        monthly: 43.00,
        name: {
            English: '12-Port 10 Gbit switch',
            Deutsch: '12-Port 10 Gbit-Switch',
            Русский: 'Коммутатор 10 Гбит 12 портов'
        }
    },
    switch_48port_10gbit: {
        monthly: 332.00,
        name: {
            English: '48-Port 10 Gbit switch',
            Deutsch: '48-Port 10 Gbit-Switch',
            Русский: 'Коммутатор 10 Гбит 48 портов'
        }
    },
    switch_96port_10gbit: {
        monthly: 529.00,
        name: {
            English: '96-Port 10 Gbit switch',
            Deutsch: '96-Port 10 Gbit-Switch',
            Русский: 'Коммутатор 10 Гбит 96 портов'
        }
    },
    hdmi_emulator: {
        monthly: 1.00,
        name: {
            English: 'HDMI emulator',
            Deutsch: 'HDMI Emulator',
            Русский: 'HDMI эмулятор'
        }
    },
    rdp_license: {
        monthly: 7.50,
        name: {
            English: 'Additional RDP licence for Windows',
            Deutsch: 'Zusätzliche RDP-Lizenz für Windows',
            Русский: 'Дополнительная RDP-лицензия для Windows'
        }
    },
    place_reservation: {
        monthly: 8.3193,
        name: {
            English: 'Reservation of rack space',
            Deutsch: 'Platz Reservierung: Mietserver Stellfläche',
            Русский: 'Резервирование места в стойке'
        },
        comment: 'Reservation of rack space: no more then 50% of number of servers'
    },
    bbu: {
        monthly: 12.50,
        name: {
            English: 'BBU for RAID controller',
            Deutsch: 'BBU für RAID-Controller',
            Русский: 'BBU для RAID-контроллера'
        }
    },
    ecc_ram_upgrade: {
        monthly: 5,
        name: {
            English: 'Upgrade to ECC RAM',
            Deutsch: 'Upgrade auf ECC RAM',
            Русский: 'Установка ECC опеаративной памяти'
        }
    },
    ram_upgrade_64_to_128: {
        monthly: 20,
        name: {
            English: 'Upgrade from 64GB to 128GB non-ECC RAM',
            Deutsch: 'Upgrade von 64GB auf 128GB Non-ECC RAM',
            Русский: 'Увеличение RAM с 64 ГБ до 128 ГБ без ECC'
        }
    },
    ram_upgrade_64_to_128_ecc: {
        monthly: 30,
        name: {
            English: 'Upgrade from 64GB to 128GB ECC RAM',
            Deutsch: 'Upgrade von 64GB auf 128GB ECC RAM',
            Русский: 'Увеличение RAM с 64 ГБ до 128 ГБ с ECC'
        }
    },
    traffic_overusage: {
        monthly: 1.00,
        name: {
            English: 'Traffic overusage (TB)',
            Deutsch: 'Traffic overusage (TB)',
            Русский: 'Превышение трафика (ТБ)'
        }
    },
    block_storage_volume: {
        monthly: 0.04,
        name: {
            English: 'Block Storage Volume (GB)',
            Deutsch: 'Block Storage Volume (GB)',
            Русский: 'Том на блочном хранилище (ГБ)'
        },
        comment: 'Block Storage Volume: only for Cloud servers. Min 10GB, max 10,240GB'
    },
    backup100: {
        monthly: 2.90,
        name: {
            English: '100 GB Backup Space',
            Deutsch: '100 GB Backup Space',
            Русский: '100 ГБ места для резервных копий'
        }
    },
    backup500: {
        monthly: 4.90,
        name: {
            English: '500 GB Backup Space',
            Deutsch: '500 GB Backup Space',
            Русский: '500 ГБ места для резервных копий'
        }
    },
    backup1000: {
        monthly: 7.90,
        name: {
            English: '1,000 GB Backup Space',
            Deutsch: '1.000 GB Backup Space',
            Русский: '1.000 ГБ места для резервных копий'
        }
    },
    backup2000: {
        monthly: 9.90,
        name: {
            English: '2,000 GB Backup Space',
            Deutsch: '2.000 GB Backup Space',
            Русский: '2.000 ГБ места для резервных копий'
        }
    },
    backup5000: {
        monthly: 21.90,
        name: {
            English: '5,000 GB Backup Space',
            Deutsch: '5.000 GB Backup Space',
            Русский: '5.000 ГБ места для резервных копий'
        }
    },
    backup10000: {
        monthly: 39.90,
        name: {
            English: '10,000 GB Backup Space',
            Deutsch: '10.000 GB Backup Space',
            Русский: '10.000 ГБ места для резервных копий'
        }
    },
    // parameters should be set from GUI
    custom_addon: {
        monthly: 0, setup: 0,
        name: {
            English: '',
            Deutsch: '',
            Русский: ''
        }
    }
    /*
     template: {
     monthly: 0, setup: 0, pay_entire_month: true,
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

    // loadTestServers();
    updateCalculationResult();
    //$(document).foundation('tab', 'reflow');
    onChange();
}

function loadTestServers() {

    var i=1;
    workspace.currentServer=i;
    workspace.Servers[i] = new Server("EX42");
    updateCalculationResult();

    workspace.createNewTab();
    i=2;
    workspace.currentServer=i;
    workspace.Servers[i] = new Server("AX100");
    updateCalculationResult();

    workspace.createNewTab();

    onChange();
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

    if (selectedServerModel != workspace.Servers[workspace.currentServer].model_raw) {
        workspace.uncheckAllLocations();
        workspace.disableAllLocations();
        for (let location in servers[selectedServerModel].location) {
            workspace.enableLocationByValue(location);
        }
    }

    workspace.Servers[workspace.currentServer] = new Server(selectedServerModel);

    updateTabName();
    updateCalculationResult();
    updateGuiForSelectedServer();
}

/**
 * Checks if VAT is checked and returns price with or without VAT.
 * NOTE: prices are stored without any VAT (Netto)
 *
 * @param {Number} price Price to process.
 * @returns {Number} Price or price without VAT.
 */
function vatPrice(price) {
    if (workspace.vatPercentage !== 0) {
        return round(price * (100 + workspace.vatPercentage) / 100, 2);
    } else {
        return round(price, 2);
    }
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function updateGuiForSelectedServer() {
    var selectedServerModel = document.getElementById('select_servers').value;

    if (servers[selectedServerModel].noSetupFee === true) {
        workspace.setNoSetupFee(true);
    } else {
        // both 'false' and 'undefined' cases
        workspace.setNoSetupFee(false);
    }
}


function updateTabName() {
    document.getElementById("panel-" + workspace.currentServer).textContent = workspace.Servers[workspace.currentServer].tabName();
}

/**
 * In 'server' array set 'noSetupFee' for given 'modelName'.
 *
 * @param {String} modelName The server model name.
 * @param {boolean} setupFeeFlag Setup Fee flag: 'true' or 'false'.
 */
function updateNoSetupFee(modelName, setupFeeFlag) {
    servers[modelName].noSetupFee = setupFeeFlag;
}

/**
 * Updates textarea containing calculation result.
 */
function updateCalculationResult() {

    updateTabName();

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
    /**
     * Removes 'checked' attribute from all the radio buttons with 'loc' name
     */
    uncheckAllLocations: function() {
        const inp = document.getElementsByName('loc');
        for (let i = 0; i < inp.length; i++) {
            inp[i].checked = false;
        }
    },
    /**
     * Marks a button with value 'radioButtonValue' as checked (selected)
     *
     * Please note that all other buttons with name 'loc' will be unchecked automatically
     * @param {String} radioButtonValue
     */
    checkLocationByValue: function(radioButtonValue) {
        const inp = document.getElementsByName('loc');
        for (let i = 0; i < inp.length; i++) {
            if (inp[i].value === radioButtonValue) {
                inp[i].checked = true;
            }
        }
    },
    /**
     * Marks as disabled (inactive) all the radio buttons with 'loc' name
     */
    disableAllLocations: function() {
        const inp = document.getElementsByName('loc');
        for (let i = 0; i < inp.length; i++) {
            inp[i].disabled = true;
        }
    },
    /**
     * Marks a button with value 'radioButtonValue' as enabled (acrtive)
     * (applied only for radio buttons with name='loc')
     * @param {String} radioButtonValue
     */
    enableLocationByValue: function(radioButtonValue) {
        const inp = document.getElementsByName('loc');
        for (let i = 0; i < inp.length; i++) {
            if (inp[i].value === radioButtonValue) {
                inp[i].disabled = false;
            }
        }
    },
    /**
     * Returns currenly checked location from GUI
     */
    getCheckedLocation: function() {
        let checkedLocation;
        const inp = document.getElementsByName('loc');
        for (let i = 0; i < inp.length; i++) {
            if (inp[i].type == "radio" && inp[i].checked) {
                checkedLocation = inp[i].value;
            }
        }
        return checkedLocation;
    },
    setNoSetupFee: function(arg) {
        document.getElementById('no_setup_fee').checked = arg;
    },
    setCustomAddonText: function(arg) {
        document.getElementById('custom_addon').value = arg;
    },
    setCustomAddonSetupPrice: function(arg) {
        document.getElementById('custom_addon_setup_price').value = arg;
    },
    setCustomAddonMonthlyPrice: function(arg) {
        document.getElementById('custom_addon_monthly_price').value = arg;
    },
    getCustomAddonText: function() {
        return document.getElementById('custom_addon').value;
    },
    getCustomAddonSetupPrice: function() {
        return document.getElementById('custom_addon_setup_price').value;
    },
    getCustomAddonMonthlyPrice: function() {
        return document.getElementById('custom_addon_monthly_price').value;
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
                if (document.getElementById(addon).type === 'text') {
                    document.getElementById(addon).value = '';
                    document.getElementById(addon+'_setup_price').value = '';
                    document.getElementById(addon+'_monthly_price').value = '';
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
        this.disableAllLocations();
        this.uncheckAllLocations();
        this.setNoSetupFee(false);
        this.setCustomAddonText("");
        this.setCustomAddonSetupPrice("");
        this.setCustomAddonMonthlyPrice("");

        var el_num = this.Servers.length;

        var new_li = document.createElement('li');
        new_li.className = 'tab-title active';
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
            var sbNumber = this.Servers[this.currentServer].sbNumber;
            this.setSbNumber((isNaN(sbNumber)) ? "" : sbNumber);
            var numOfServers = this.Servers[this.currentServer].amount;
            this.setNumberOfServers((numOfServers !== 1) ? numOfServers : "");

            this.uncheckAllLocations();
            this.disableAllLocations();
            let loc;
            for (loc in this.Servers[this.currentServer].model.location) {
                this.enableLocationByValue(loc);
            }
            this.checkLocationByValue(this.Servers[this.currentServer].location);

            var noSetupFeeFlag = this.Servers[this.currentServer].model.noSetupFee;
            this.setNoSetupFee(noSetupFeeFlag !== undefined ? noSetupFeeFlag : false);

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
                        if (document.getElementById(currentAddon).type === 'text') {
                            document.getElementById(currentAddon).value = this.Servers[this.currentServer].serverAddons[i].name.English;
                            document.getElementById(currentAddon+"_setup_price").value = this.Servers[this.currentServer].serverAddons[i].setup;
                            document.getElementById(currentAddon+"_monthly_price").value = this.Servers[this.currentServer].serverAddons[i].monthly;
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
        var expr = /^(.*) ([0-9.]+ €)$/;

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
            return output.replace(/([0-9])\.([0-9]+ €)/g, "$1,$2");
        } else {
            // English currency format 1000.00 € -> € 1000.00
            return output.replace(/([0-9]+\.[0-9]+) (€)/g, "$2 $1");
        }
    },
    getCalculationStringBeautifiedOldFormat: function() {
        var output = '';
        var maxTextLength = 0;
        var maxPriceLength = 0;
        var expr = /^(.*) ([0-9.]+ €)$/;

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
            return output.replace(/([0-9])\.([0-9]+ €)/g, "$1,$2");
        } else {
            // English currency format 1000.00 € -> € 1000.00
            return output.replace(/([0-9]+\.[0-9]+) (€)/g, "$2 $1");
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
    this.sbNumber = (isNaN(parsedSbNumber) ? 0 : parsedSbNumber);

    // Create new SBxx server in 'servers' array
    if (theModel === 'SB' && this.sbNumber >= 0) {
        theModel = theModel + this.sbNumber;
        if (!servers.hasOwnProperty(theModel)) {
            var newSbModel = copyObject(servers.SB);

            // Calculate monthly price based on model name
            // example: SB39 costs:
            // - 39.00 €/month with German VAT
            // - 32.77 €/month without VAT
            newSbModel.monthly = this.sbNumber / (100 + countryVATrate.Germany) * 100;

            newSbModel.name.English += this.sbNumber;
            newSbModel.name.Deutsch += this.sbNumber;
            newSbModel.name.Русский += this.sbNumber;
            servers[theModel] = newSbModel;
        }

    }

    this.model = copyObject(servers[theModel]);

    const locationFromGUI = workspace.getCheckedLocation();
    if (typeof locationFromGUI == 'undefined') {
        this.location = this.getDefaultLocation();
        workspace.checkLocationByValue(this.location);
    } else {
        this.location = locationFromGUI;
    }

    if (this.location === 'Finland') {
        this.model.name.Deutsch += ' (Finnland)';
        this.model.name.English += ' (Finland)';
        this.model.name.Русский += ' (Финляндия)';
    }
    if (typeof this.model.location !== 'undefined') {
        this.model.monthly = this.model.location[this.location].monthly;
        this.model.setup = this.model.location[this.location].setup;
    }
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
            if (item.monthly > 0) {
                if (item.amount > 1) {
                    str += '\n' + item.amount + "x " +
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
            if (item.setup > 0) {
                if (item.amount > 1) {
                    str += '\n' + item.amount + "x " +
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

            if (newItem.model.noSetupFee === true) {
                theNewItem.setup = 0;
            }

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
                if ((item.name_raw == newItem.name_raw) && item.name_raw !== 'custom_addon') {
                    usedExistingItem = true;
                    item.amount += (newItem.amount !== undefined) ? newItem.amount : 1;
                    this.totalMonthly += item.monthly * ((newItem.amount !== undefined) ? newItem.amount : 1);
                    this.totalSetup += item.setup * ((newItem.amount !== undefined) ? newItem.amount : 1);
                }
            }
        }
        if (!usedExistingItem) {
            var theNewItem = {
                name_raw: newItem.name_raw,
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
        if (addon === 'custom_addon') {
            var newAddonName = workspace.getCustomAddonText();
            addonObj.name.English += newAddonName;
            addonObj.name.Deutsch += newAddonName;
            addonObj.name.Русский += newAddonName;
            addonObj.setup = workspace.getCustomAddonSetupPrice();
            addonObj.monthly = workspace.getCustomAddonMonthlyPrice();
        }
        if (amount !== undefined) addonObj.amount = amount;
        this.serverAddons.push( addonObj );
    },
    tabName: function() {
        var text = '';

        if (this.amount > 1) {
            text += this.amount + "x ";
        }

        text += (this.model_raw === 'SB0') ? 'Dummy' : this.model_raw;

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
        if (document.getElementById('custom_addon').value !== '') {
            this.addAddon(addon, 1);
        }
    },
    /**
     * return the last defined location
     */
    getDefaultLocation: function() {
        let defaultLocation;
        if (typeof this.model.location !== 'undefined') {
            // the last location is a default location
            for (let location in this.model.location) {
                defaultLocation = location;
            }
            return defaultLocation;
        } else {
            return undefined;
        }
    },
    getSetupPrice: function() {
        return ('setup' in this.model) ? this.model.setup : 0;
    },
    getMonthlyPrice: function() {
        return ('monthly' in this.model) ? this.model.monthly : 0;
    },
    getName: function() {
        return this.model.name[workspace.language];
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
