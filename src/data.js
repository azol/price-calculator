export const vatRates = {
    "All others (no VAT)": 0,
    "Australia": 10,
    "Austria": 20,
    "Belgium": 21,
    "Bulgaria": 20,
    "Croatia": 25,
    "Cyprus": 19,
    "Czech Republic": 21,
    "Denmark": 25,
    "Estonia": 20,
    "Finland": 24,
    "France": 20,
    "Germany": 19,
    "Greece": 24,
    "Hungary": 27,
    "Ireland": 21,
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
    "South Africa": 15,
    "Spain": 21,
    "Sweden": 25,
    "Switzerland": 7.7,
    "UK": 20,
};

export const languages = ['English', 'Deutsch', 'Русский'];

export const servers = {
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
            Germany: { monthly: 39, setup: 39 },
            Finland: { monthly: 34, setup: 39 }
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
            Germany: { monthly: 39, setup: 39 },
            Finland: { monthly: 34, setup: 39 }
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
            Germany: { monthly: 59, setup: 59 },
            Finland: { monthly: 54, setup: 59 }
        },
        comment: 'EX52: Intel® Core™ i7-8700 Hexa-Core Coffee Lake/128 GB/2 x 8TB SATA Ent'
    },
    EX52NVMe: {
        name: {
            English: 'Server EX52-NVMe',
            Deutsch: 'Server EX52-NVMe',
            Русский: 'Сервер EX52-NVMe'
        },
        location: {
            Germany: { monthly: 59, setup: 59 },
            Finland: { monthly: 54, setup: 59 }
        },
        comment: 'EX52-NVMe: Intel® Core™ i7-8700 Hexa-Core Coffee Lake/128 GB/2 x 1TB NVMe'
    },
    EX62: {
        name: {
            English: 'Server EX62',
            Deutsch: 'Server EX62',
            Русский: 'Сервер EX62'
        },
        location: {
            Germany: { monthly: 69, setup: 69 },
            Finland: { monthly: 64, setup: 69 }
        },
        comment: 'EX62: Intel® Core™ i9-9900K Octa-Core Coffee Lake/128 GB/2 x 8TB SATA Ent'
    },
    EX62NVMe: {
        name: {
            English: 'Server EX62-NVMe',
            Deutsch: 'Server EX62-NVMe',
            Русский: 'Сервер EX62-NVMe'
        },
        location: {
            Germany: { monthly: 69, setup: 69 },
            Finland: { monthly: 64, setup: 69 }
        },
        comment: 'EX62-NVMe: Intel® Core™ i9-9900K Octa-Core Coffee Lake/128 GB/2 x 1TB NVMe SSD'
    },
    AX41: {
        name: {
            English: 'Server AX41',
            Deutsch: 'Server AX41',
            Русский: 'Сервер AX41'
        },
        location: {
            Germany: { monthly: 39, setup: 39 },
            Finland: { monthly: 34, setup: 39 }
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
            Germany: { monthly: 39, setup: 39 },
            Finland: { monthly: 34, setup: 39 }
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
            Germany: { monthly: 59, setup: 59 },
            Finland: { monthly: 54, setup: 59 }
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
            Germany: { monthly: 59, setup: 59 },
            Finland: { monthly: 54, setup: 59 }
        },
        comment: 'AX51-NVMe: AMD Ryzen 7 3700X (8 cores)/64 GB ECC/2 x 1 TB NVMe SSD'
    },
    AX61NVMe: {
        name: {
            English: 'Server AX61-NVMe',
            Deutsch: 'Server AX61-NVMe',
            Русский: 'Сервер AX61-NVMe'
        },
        location: {
            Germany: { monthly: 89, setup: 89 },
            Finland: { monthly: 84, setup: 89 }
        },
        comment: 'AX61-NVMe: AMD Ryzen 9 3900 (12 cores)/128 GB ECC/2 x 1.92 TB NVMe SSD'
    },
    AX101: {
        name: {
            English: 'Server AX101',
            Deutsch: 'Server AX101',
            Русский: 'Сервер AX101'
        },
        location: {
            Germany: { monthly: 99, setup: 199 },
            Finland: { monthly: 94, setup: 199 }
        },
        comment: 'AX101: AMD Ryzen 9 5950X 16-core Zen3/128GB DDR4 ECC/2x 3,8TB DC NVMe SSD'
    },
    AX161: {
        name: {
            English: 'Server AX161',
            Deutsch: 'Server AX161',
            Русский: 'Сервер AX161'
        },
        location: {
            Germany: { monthly: 119, setup: 119 },
            Finland: { monthly: 109, setup: 119 }
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
            Germany: { monthly: 79, setup: 79 },
            Finland: { monthly: 74, setup: 79 }
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
            Germany: { monthly: 79, setup: 79 },
            Finland: { monthly: 74, setup: 79 }
        },
        comment: 'PX62-NVMe: E-2176G Hexa-Core/64 GB ECC/2 x 960GB NVMe SSD Datacenter Edition\n\
PX62-NVMe: 0x SATA HDD + up to 2x NVMe SSDs, up to 6x SATA SSDs, but maximum 8 disks in total\n\
PX62-NVMe: 1x SATA HDD + 1x NVMe SSD or 1x SATA SSD\n\
PX62-NVMe: 2x SATA HDDs'
    },
    PX93: {
        name: {
            English: 'Server PX93',
            Deutsch: 'Server PX93',
            Русский: 'Сервер PX93'
        },
        location: {
            Germany: { monthly: 119, setup: 119 },
            Finland: { monthly: 109, setup: 119 }
        },
        comment: 'PX93: Intel® Xeon® W-2295 18-Core Cascade-lake W/128 GB DDR4 ECC\n\
PX93: SSD options: 8x NVMe and SSD (up to 8x NVMe SSDs or 6x SSD)\n\
PX93: HDD options: 1x HDD + 3x NVMe or SSDs / 2x HDD + 2x NVMe or SSD / 3x HDD\n\
PX93: 480 GB NVMe SSD 3D XPoint -- 8x\n\
PX93: up to 4x 32 GB ECC RAM modules additional (256 GB max)\n\
PX93: 5..8x 64 GB ECC RAM modules (512 GB max) (default RAM will be removed with NO price reduction)'
    },
    SX64: {
        name: {
            English: 'Server SX64',
            Deutsch: 'Server SX64',
            Русский: 'Сервер SX64'
        },
        location: {
            Germany: { monthly: 79, setup: 99 },
            Finland: { monthly: 74, setup: 99 }
        },
        comment: 'SX64: AMD Ryzen 5 3600/64GB DDR4 ECC/4x 16TB SATA Enterprise'
    },
    SX134: {
        name: {
            English: 'Server SX134',
            Deutsch: 'Server SX134',
            Русский: 'Сервер SX134'
        },
        location: {
            Germany: { monthly: 199, setup: 299 },
            Finland: { monthly: 189, setup: 299 }
        },
        comment: 'SX134: AMD Ryzen 7 3700X/128GB DDR4 ECC\n\
SX134: 2x 960GB DC NVMe SSD/10x 16TB SATA Enterprise'
    },
    SX294: {
        name: {
            English: 'Server SX294',
            Deutsch: 'Server SX294',
            Русский: 'Сервер SX294'
        },
        location: {
            Germany: { monthly: 319, setup: 499 },
            Finland: { monthly: 309, setup: 499 }
        },
        comment: 'SX294: Intel® Xeon® W-2145 Octa-Core Skylake W/256GB DDR4 ECC\n\
SX294: 2x 3.84TB DC NVMe SSD/14x 16TB SATA Enterprise'
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
            Finland: { monthly: 159, setup: 159 },
            Germany: { monthly: 159, setup: 159 }
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
            English: 'DELL PowerEdge™ R6515 DX181',
            Deutsch: 'DELL PowerEdge™ R6515 DX181',
            Русский: 'DELL PowerEdge™ R6515 DX181'
        },
        location: {
            Finland: { monthly: 189, setup: 189 },
            Germany: { monthly: 189, setup: 189 }
        },
        comment: "DX181: Singe AMD EPYC™ 7502P 32-Core/128GB DDR4 ECC/Dell PERC H730P/iDRAC\n\
DX181: have an iDRAC (IP-KVM)\n\
DX181: Drives are optional (240/480/960 GB, 1.92/3.84 TB SSD DC, 960 GB, 1.92/3.84 TB NVMe and 480 GB 3D XPoint)\n\
DX181: up to 12x 32 GB ECC RAM modules additional (512 GB max)\n\
DX181: 9..16x 64 GB ECC RAM modules (1024 GB max)"
    },
    DX292: {
        number_of_cpus: 2,
        name: {
            English: 'DELL PowerEdge™ R640 DX292',
            Deutsch: 'DELL PowerEdge™ R640 DX292',
            Русский: 'DELL PowerEdge™ R640 DX292'
        },
        location: {
            Finland: { monthly: 219, setup: 219 },
            Germany: { monthly: 219, setup: 219 }
        },
        comment: "DX292: Dual Intel® Xeon® SP Gold 16-Core @ 2.10GHz/64GB DDR4 ECC/Dell PERC H730P/iDRAC\n\
R640: have an iDRAC (IP-KVM)\n\
R640: Drives are optional (240/480/960 GB, 1,92 TB SSD DC, 960 GB NVMe and 480 GB 3D XPoint)\n\
R640: Windows 'for EPYC'\n\
R640 DX292: max 768 GB RAM DDR4 (22x 32GB)"
    },
    CPX11: {
        name: {
            English: 'Server CPX11',
            Deutsch: 'Server CPX11',
            Русский: 'Сервер CPX11'
        },
        location: {
            Finland: { monthly: 3.49, setup: 0 },
            Germany: { monthly: 3.49, setup: 0 }
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
            Finland: { monthly: 6.90, setup: 0 },
            Germany: { monthly: 6.90, setup: 0 }
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
            Finland: { monthly: 12.40, setup: 0 },
            Germany: { monthly: 12.40, setup: 0 }
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
            Finland: { monthly: 22.90, setup: 0 },
            Germany: { monthly: 22.90, setup: 0 }
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
            Finland: { monthly: 49.90, setup: 0 },
            Germany: { monthly: 49.90, setup: 0 }
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
            Finland: { monthly: 2.49, setup: 0 },
            Germany: { monthly: 2.49, setup: 0 }
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
            Finland: { monthly: 4.90, setup: 0 },
            Germany: { monthly: 4.90, setup: 0 }
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
            Finland: { monthly: 8.90, setup: 0 },
            Germany: { monthly: 8.90, setup: 0 }
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
            Finland: { monthly: 15.90, setup: 0 },
            Germany: { monthly: 15.90, setup: 0 }
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
            Finland: { monthly: 29.90, setup: 0 },
            Germany: { monthly: 29.90, setup: 0 }
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
            Finland: { monthly: 19.90, setup: 0 },
            Germany: { monthly: 19.90, setup: 0 }
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
            Finland: { monthly: 34.90, setup: 0 },
            Germany: { monthly: 34.90, setup: 0 }
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
            Finland: { monthly: 69.90, setup: 0 },
            Germany: { monthly: 69.90, setup: 0 }
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
            Finland: { monthly: 139.90, setup: 0 },
            Germany: { monthly: 139.90, setup: 0 }
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
            Finland: { monthly: 269.90, setup: 0 },
            Germany: { monthly: 269.90, setup: 0 }
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
            Germany: { monthly: 2.90, setup: 0 }
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
            Germany: { monthly: 4.90, setup: 0 }
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
            Germany: { monthly: 7.90, setup: 0 }
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
            Germany: { monthly: 9.90, setup: 0 }
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
            Germany: { monthly: 21.90, setup: 0 }
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
            Germany: { monthly: 39.90, setup: 0 }
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
            Germany: { monthly: 100, setup: 100 },
            Finland: { monthly: 139, setup: 139 }
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
            Germany: { monthly: 167.2269, setup: 167.2269 }
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
            Germany: { monthly: 251.2605, setup: 251.2605 },
            Finland: { monthly: 349, setup: 349 }
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

export const addons = {
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
    win_std_12cores: {
        monthly: 34.70, pay_entire_month: true,
        monthly_price_per_cpu: true,
        name: {
            English: 'Windows Server 2019 Standard Edition - 12 cores',
            Deutsch: 'Windows Server 2019 Standard Edition - 12 cores',
            Русский: 'Windows Server 2019 Standard Edition - 12 ядер'
        }
    },
    win_dc_12cores: {
        monthly: 215.00, pay_entire_month: true,
        monthly_price_per_cpu: true,
        name: {
            English: 'Windows Server 2019 Datacenter Edition - 12 cores',
            Deutsch: 'Windows Server 2019 Datacenter Edition - 12 cores',
            Русский: 'Windows Server 2019 Datacenter Edition - 12 ядер'
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
    win_std_18cores: {
        monthly: 52.00, pay_entire_month: true,
        monthly_price_per_cpu: true,
        name: {
            English: 'Windows Server 2019 Standard Edition - 18 cores',
            Deutsch: 'Windows Server 2019 Standard Edition - 18 cores',
            Русский: 'Windows Server 2019 Standard Edition - 18 ядер'
        }
    },
    win_dc_18cores: {
        monthly: 322.40, pay_entire_month: true,
        monthly_price_per_cpu: true,
        name: {
            English: 'Windows Server 2019 Datacenter Edition - 18 cores',
            Deutsch: 'Windows Server 2019 Datacenter Edition - 18 cores',
            Русский: 'Windows Server 2019 Datacenter Edition - 18 ядер'
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
        monthly: 4.60, pay_entire_month: "yes",
        name: {
            English: "Plesk Onyx Web ADMIN Edition",
            Deutsch: "Plesk Onyx Web ADMIN Edition",
            Русский: "Plesk Onyx издание Web ADMIN"
        },
    },
    plesk_web_pro: {
        monthly: 6.80, pay_entire_month: "yes",
        name: {
            English: "Plesk Onyx Web PRO Edition",
            Deutsch: "Plesk Onyx Web PRO Edition",
            Русский: "Plesk Onyx издание Web PRO"
        },
    },
    plesk_web_host: {
        monthly: 20.60, pay_entire_month: "yes",
        name: {
            English: "Plesk Onyx Web HOST Edition",
            Deutsch: "Plesk Onyx Web HOST Edition",
            Русский: "Plesk Onyx издание Web HOST"
        },
    },
    plesk_power_pack: {
        monthly: 7.80, pay_entire_month: true,
        name: {
            English: 'Plesk Power Pack',
            Deutsch: 'Plesk Power Pack',
            Русский: 'Plesk Power Pack'
        }
    },
    cpanel_100: {
        monthly: 34.50, pay_entire_month: true,
        name: {
            English: 'cPanel 100',
            Deutsch: 'cPanel 100',
            Русский: 'cPanel 100'
        }
    },
    cpanel_150: {
        monthly: 38.90, pay_entire_month: true,
        name: {
            English: 'cPanel 150',
            Deutsch: 'cPanel 150',
            Русский: 'cPanel 150'
        }
    },
    cpanel_200: {
        monthly: 47.60, pay_entire_month: true,
        name: {
            English: 'cPanel 200',
            Deutsch: 'cPanel 200',
            Русский: 'cPanel 200'
        }
    },
    cpanel_250: {
        monthly: 56.40, pay_entire_month: true,
        name: {
            English: 'cPanel 250',
            Deutsch: 'cPanel 250',
            Русский: 'cPanel 250'
        }
    },
    cpanel_300: {
        monthly: 65.10, pay_entire_month: true,
        name: {
            English: 'cPanel 300',
            Deutsch: 'cPanel 300',
            Русский: 'cPanel 300'
        }
    },
    cpanel_350: {
        monthly: 73.90, pay_entire_month: true,
        name: {
            English: 'cPanel 350',
            Deutsch: 'cPanel 350',
            Русский: 'cPanel 350'
        }
    },
    cpanel_400: {
        monthly: 82.60, pay_entire_month: true,
        name: {
            English: 'cPanel 400',
            Deutsch: 'cPanel 400',
            Русский: 'cPanel 400'
        }
    },
    cpanel_450: {
        monthly: 91.40, pay_entire_month: true,
        name: {
            English: 'cPanel 450',
            Deutsch: 'cPanel 450',
            Русский: 'cPanel 450'
        }
    },
    cpanel_500: {
        monthly: 100.10, pay_entire_month: true,
        name: {
            English: 'cPanel 500',
            Deutsch: 'cPanel 500',
            Русский: 'cPanel 500'
        }
    },
    cpanel_600: {
        monthly: 117.60, pay_entire_month: true,
        name: {
            English: 'cPanel 600',
            Deutsch: 'cPanel 600',
            Русский: 'cPanel 600'
        }
    },
    cpanel_700: {
        monthly: 135.10, pay_entire_month: true,
        name: {
            English: 'cPanel 700',
            Deutsch: 'cPanel 700',
            Русский: 'cPanel 700'
        }
    },
    cpanel_800: {
        monthly: 152.60, pay_entire_month: true,
        name: {
            English: 'cPanel 800',
            Deutsch: 'cPanel 800',
            Русский: 'cPanel 800'
        }
    },
    cpanel_900: {
        monthly: 170.10, pay_entire_month: true,
        name: {
            English: 'cPanel 900',
            Deutsch: 'cPanel 900',
            Русский: 'cPanel 900'
        }
    },
    cpanel_1000: {
        monthly: 187.60, pay_entire_month: true,
        name: {
            English: 'cPanel 1000',
            Deutsch: 'cPanel 1000',
            Русский: 'cPanel 1000'
        }
    },
    cpanel_1500: {
        monthly: 275.10, pay_entire_month: true,
        name: {
            English: 'cPanel 1500',
            Deutsch: 'cPanel 1500',
            Русский: 'cPanel 1500'
        }
    },
    cpanel_2000: {
        monthly: 362.60, pay_entire_month: true,
        name: {
            English: 'cPanel 2000',
            Deutsch: 'cPanel 2000',
            Русский: 'cPanel 2000'
        }
    },
    cpanel_2500: {
        monthly: 450.10, pay_entire_month: true,
        name: {
            English: 'cPanel 2500',
            Deutsch: 'cPanel 2500',
            Русский: 'cPanel 2500'
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
    raid16: {
        monthly: 46,
        name: {
            English: '16-Port Hardware RAID-controller',
            Deutsch: '16-Port Hardware RAID-Controller',
            Русский: '16-портовый RAID-контроллер'
        },
        comment: '16-Port Hardware RAID-controller: only for SX133 and SX293'
    },
    ip: {
        monthly: 0.8403,
        setup: 19,
        name: {
            English: 'Additional IP address',
            Deutsch: 'Zusätzliche IP-Adresse',
            Русский: 'Дополнительный IP-адрес'
        }
    },
    subnet29: {
        monthly: 6.7227,
        setup: 152,
        name: {
            English: 'Subnet /29',
            Deutsch: 'Subnet /29',
            Русский: 'Подсеть /29'
        }
    },
    subnet28: {
        monthly: 13.4454,
        setup: 304,
        name: {
            English: 'Subnet /28',
            Deutsch: 'Subnet /28',
            Русский: 'Подсеть /28'
        }
    },
    subnet27: {
        monthly: 26.8908,
        setup: 608,
        name: {
            English: 'Subnet /27',
            Deutsch: 'Subnet /27',
            Русский: 'Подсеть /27'
        }
    },
    subnet26: {
        monthly: 53.7815,
        setup: 1216,
        name: {
            English: 'Subnet /26',
            Deutsch: 'Subnet /26',
            Русский: 'Подсеть /26'
        }
    },
    subnet25: {
        monthly: 107.5630,
        setup: 2432,
        name: {
            English: 'Subnet /25',
            Deutsch: 'Subnet /25',
            Русский: 'Подсеть /25'
        }
    },
    subnet24: {
        monthly: 215.1261,
        setup: 4864,
        name: {
            English: 'Subnet /24',
            Deutsch: 'Subnet /24',
            Русский: 'Подсеть /24'
        }
    },
    failover_ip: {
        monthly: 4.2017,
        setup: 19,
        name: {
            English: 'Failover IP',
            Deutsch: 'Failover-IP',
            Русский: 'Failover IP'
        },
        comment: 'Failover IP: can`t be used with VMware ESXi'
    },
    failover_subnet29: {
        monthly: 15.1261,
        setup: 152,
        name: {
            English: 'Failover subnet /29',
            Deutsch: 'Failover Subnet /29',
            Русский: 'Failover подсеть /29'
        },
        comment: 'Failover subnet /29: can`t be used with VMware ESXi'
    },
    failover_subnet28: {
        monthly: 21.8487,
        setup: 304,
        name: {
            English: 'Failover subnet /28',
            Deutsch: 'Failover Subnet /28',
            Русский: 'Failover подсеть /28'
        },
        comment: 'Failover subnet /28: can`t be used with VMware ESXi'
    },
    failover_subnet27: {
        monthly: 35.2941,
        setup: 608,
        name: {
            English: 'Failover subnet /27',
            Deutsch: 'Failover Subnet /27',
            Русский: 'Failover подсеть /27'
        },
        comment: 'Failover subnet /27: can`t be used with VMware ESXi'
    },
    failover_subnet26: {
        monthly: 62.1849,
        setup: 1216,
        name: {
            English: 'Failover subnet /26',
            Deutsch: 'Failover Subnet /26',
            Русский: 'Failover подсеть /26'
        },
        comment: 'Failover subnet /26: can`t be used with VMware ESXi'
    },
    failover_subnet25: {
        monthly: 115.9664,
        setup: 2432,
        name: {
            English: 'Failover subnet /25',
            Deutsch: 'Failover Subnet /25',
            Русский: 'Failover подсеть /25'
        },
        comment: 'Failover subnet /25: can`t be used with VMware ESXi'
    },
    failover_subnet24: {
        monthly: 223.5294,
        setup: 4864,
        name: {
            English: 'Failover subnet /24',
            Deutsch: 'Failover Subnet /24',
            Русский: 'Failover подсеть /24'
        },
        comment: 'Failover subnet /24: can`t be used with VMware ESXi'
    },
    vlan_subnet29: {
        monthly: 15.1261,
        setup: 152,
        name: {
            English: 'VLAN subnet /29',
            Deutsch: 'VLAN Subnet /29',
            Русский: 'VLAN подсеть /29'
        },
    },
    vlan_subnet28: {
        monthly: 21.8487,
        setup: 304,
        name: {
            English: 'VLAN subnet /28',
            Deutsch: 'VLAN Subnet /28',
            Русский: 'VLAN подсеть /28'
        },
    },
    vlan_subnet27: {
        monthly: 35.2941,
        setup: 608,
        name: {
            English: 'VLAN subnet /27',
            Deutsch: 'VLAN Subnet /27',
            Русский: 'VLAN подсеть /27'
        },
    },
    vlan_subnet26: {
        monthly: 62.1849,
        setup: 1216,
        name: {
            English: 'VLAN subnet /26',
            Deutsch: 'VLAN Subnet /26',
            Русский: 'VLAN подсеть /26'
        },
    },
    vlan_subnet25: {
        monthly: 115.9664,
        setup: 2432,
        name: {
            English: 'VLAN subnet /25',
            Deutsch: 'VLAN Subnet /25',
            Русский: 'VLAN подсеть /25'
        },
    },
    vlan_subnet24: {
        monthly: 223.5294,
        setup: 4864,
        name: {
            English: 'VLAN subnet /24',
            Deutsch: 'VLAN Subnet /24',
            Русский: 'VLAN подсеть /24'
        },
    },
    ssd1000: {
        monthly: 7.50,
        name: {
            English: '1 TB SATA SSD',
            Deutsch: '1 TB SATA SSD',
            Русский: '1 ТБ SATA SSD'
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
        monthly: 20.00,
        name: {
            English: '1.92 TB SATA SSD Datacenter Edition',
            Deutsch: '1,92 TB SATA SSD Datacenter Edition',
            Русский: '1,92 ТБ SATA SSD Datacenter Edition'
        }
    },
    ssd3840de: {
        monthly: 36.50,
        name: {
            English: '3.84 TB SATA SSD Datacenter Edition',
            Deutsch: '3,84 TB SATA SSD Datacenter Edition',
            Русский: '3,84 ТБ SATA SSD Datacenter Edition'
        },
        comment: "3.84 TB SATA SSD Datacenter Edition: for compatibility see https://wiki.hetzner.de/index.php/Root_Server_Hardware/en#Drives"
    },
    nvme512: {
        monthly: 6.00,
        name: {
            English: '512 GB NVMe SSD',
            Deutsch: '512 GB NVMe SSD',
            Русский: '512 ГБ NVMe SSD'
        },
        comment: "512 NVMe SSD: for compatibility see https://wiki.hetzner.de/index.php/Root_Server_Hardware/en#Drives"
    },
    nvme960de: {
        monthly: 13.50,
        name: {
            English: '960 GB NVMe SSD Datacenter Edition',
            Deutsch: '960 GB NVMe SSD Datacenter Edition',
            Русский: '960 ГБ NVMe SSD Datacenter Edition'
        },
        comment: "960 NVMe SSD Datacenter Edition: for compatibility see https://wiki.hetzner.de/index.php/Root_Server_Hardware/en#Drives"
    },
    nvme480_3d_xpoint: {
        monthly: 47.00,
        name: {
            English: '480 GB NVMe SSD 3D XPoint',
            Deutsch: '480 GB NVMe SSD 3D XPoint',
            Русский: '480 ГБ NVMe SSD 3D XPoint'
        },
        comment: "480 GB NVMe SSD 3D XPoint: for compatibility see https://wiki.hetzner.de/index.php/Root_Server_Hardware/en#Drives"
    },
    nvme1000: {
        monthly: 9.50,
        name: {
            English: '1 TB NVMe SSD',
            Deutsch: '1 TB NVMe SSD',
            Русский: '1 ТБ NVMe SSD'
        },
        comment: "1 TB NVMe SSD: for compatibility see https://wiki.hetzner.de/index.php/Root_Server_Hardware/en#Drives"
    },
    nvme2000: {
        monthly: 16.00,
        name: {
            English: '2 TB NVMe SSD',
            Deutsch: '2 TB NVMe SSD',
            Русский: '2 ТБ NVMe SSD'
        },
        comment: "2 TB NVMe SSD: for compatibility see https://wiki.hetzner.de/index.php/Root_Server_Hardware/en#Drives"
    },
    nvme1920de: {
        monthly: 22.00,
        name: {
            English: '1.92 TB NVMe SSD Datacenter Edition',
            Deutsch: '1,92 TB NVMe SSD Datacenter Edition',
            Русский: '1,92 ТБ NVMe SSD Datacenter Edition'
        },
        comment: "1.92 TB NVMe SSD Datacenter Edition: for compatibility see https://wiki.hetzner.de/index.php/Root_Server_Hardware/en#Drives"
    },
    nvme3840de: {
        monthly: 38.50,
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
        monthly: 9.00,
        name: {
            English: '2 TB SATA Enterprise Hard Drive',
            Deutsch: '2 TB SATA Enterprise Hard Drive',
            Русский: '2 ТБ SATA Enterprise жесткий диск'
        },
    },
    sata6000e: {
        monthly: 15.00,
        name: {
            English: '6 TB SATA Enterprise Hard Drive',
            Deutsch: '6 TB SATA Enterprise Hard Drive',
            Русский: '6 ТБ SATA Enterprise жесткий диск'
        }
    },
    sata12000e: {
        monthly: 24.00,
        name: {
            English: '12 TB SATA Enterprise Hard Drive',
            Deutsch: '12 TB SATA Enterprise Hard Drive',
            Русский: '12 ТБ SATA Enterprise жесткий диск'
        }
    },
    sata16000e: {
        monthly: 27.00,
        name: {
            English: '16 TB SATA Enterprise Hard Drive',
            Deutsch: '16 TB SATA Enterprise Hard Drive',
            Русский: '16 ТБ SATA Enterprise жесткий диск'
        }
    },
    gbit_lan: {
        monthly: 1.00,
        name: {
            English: '1 Gbit LAN connection ',
            Deutsch: 'LAN Verbindung 1 Gbit',
            Русский: 'Подключение LAN 1 Гбит'
        }
    },
    ten_gbit_lan: {
        monthly: 2.50,
        name: {
            English: '10 Gbit LAN connection ',
            Deutsch: 'LAN Verbindung 10 Gbit',
            Русский: 'Подключение LAN 10 Гбит'
        }
    },
    gbit_nic: {
        monthly: 2.00,
        name: {
            English: '1 Gbit NIC',
            Deutsch: '1 Gbit NIC',
            Русский: '1 Гбит NIC'
        },
        comment: "1 Gbit NIC not compatible with Windows 2016 and 2019"
    },
    gbit_dual_nic: {
        monthly: 2.50,
        name: {
            English: 'Dual 1 Gbit NIC',
            Deutsch: 'Dual 1 Gbit NIC',
            Русский: 'Двойной 1 Гбит NIC'
        }
    },
    ten_gbit_nic: {
        monthly: 8.00,
        name: {
            English: '10 Gbit NIC',
            Deutsch: '10 Gbit NIC',
            Русский: '10 Гбит NIC'
        }
    },
    ten_gbit_dual_nic_x520: {
        monthly: 12.00,
        name: {
            English: 'Dual 10 Gbit NIC (Intel X520-DA2)',
            Deutsch: 'Dual 10 Gbit NIC (Intel X520-DA2)',
            Русский: 'Двойной 10 Гбит NIC (Intel X520-DA2)'
        },
        comment: 'Dual 10 Gbit (Intel X520-DA2): Not available DX-Server, AX41(-NVMe), AX51(-NVMe), AX61(-NVMe)'
    },
    ten_gbit_dual_nic_x710: {
        monthly: 14.00,
        name: {
            English: 'Dual 10 Gbit NIC (Intel X710-DA2)',
            Deutsch: 'Dual 10 Gbit (Intel X710-DA2)',
            Русский: 'Двойной 10 Гбит NIC (Intel X710-DA2)'
        },
        comment: 'Dual 10 Gbit NIC (Intel X710-DA2): Suitable for AX41(-NVMe), AX51(-NVMe), AX61(-NVMe). Not available for AX160-models'
    },
    ten_gbit_dual_nic_dell: {
        monthly: 15.50,
        name: {
            English: 'Dual 10 Gbit NIC (Dell)',
            Deutsch: 'Dual 10 Gbit NIC (Dell)',
            Русский: 'Двойной 10 Гбит NIC (Dell)'
        }
    },
    uplink_10_gbit: {
        monthly: 39.00,
        name: {
            English: '10 Gbit Uplink',
            Deutsch: '10 Gbit Uplink',
            Русский: '10 Гбит Uplink'
        },
        comment: '10 Gbit Uplink: includes 10 Gbit NIC. Available only for DX, PX, AX and EX-Skylake.'
    },

    switch_5port: {
        monthly: 2.00,
        name: {
            English: '5-Port 1 Gbit switch',
            Deutsch: '5-Port 1 Gbit-Switch',
            Русский: 'Коммутатор 1 Гбит 5 портов'
        }
    },
    switch_8port: {
        monthly: 2.00,
        name: {
            English: '8-Port 1 Gbit switch',
            Deutsch: '8-Port 1 Gbit-Switch',
            Русский: 'Коммутатор 1 Гбит 8 портов'
        }
    },
    switch_24port: {
        monthly: 13.00,
        name: {
            English: '24-Port 1 Gbit switch',
            Deutsch: '24-Port 1 Gbit-Switch',
            Русский: 'Коммутатор 1 Гбит 24 порта'
        }
    },
    switch_48port: {
        monthly: 130.00,
        name: {
            English: '48-Port 1 Gbit switch',
            Deutsch: '48-Port 1 Gbit-Switch',
            Русский: 'Коммутатор 1 Гбит 48 портов'
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
        monthly: 311.00,
        name: {
            English: '48-Port 10 Gbit switch',
            Deutsch: '48-Port 10 Gbit-Switch',
            Русский: 'Коммутатор 10 Гбит 48 портов'
        }
    },
    switch_96port_10gbit: {
        monthly: 495.00,
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
        monthly: 8.25,
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
    remote_hands: {
        setup: 17.65,
        name: {
            English: 'remote hands',
            Deutsch: 'Remote Hands',
            Русский: 'удаленные руки'
        }
    },
    server_move: {
        setup: 32.77,
        name: {
            English: 'server move',
            Deutsch: 'Serverumzug',
            Русский: 'перенос сервера'
        }
    },
    server_move_dell: {
        setup: 70.59,
        name: {
            English: 'server move (Dell)',
            Deutsch: 'Serverumzug (Dell)',
            Русский: 'перенос сервера (Dell)'
        }
    },
    server_rebuild_and_move: {
        setup: 99.00,
        name: {
            English: 'server move and rebuilt in other chassis type',
            Deutsch: 'Serverumzug und Umbau in anderes Gehäuse',
            Русский: 'перенос сервера с пересборкой в другой корпус'
        }
    },
    replace_ram: {
        setup: 32.77,
        name: {
            English: 'Replace all RAM modules without a specific reason',
            Deutsch: 'Tausch aller RAM Bausteine ohne konkrete Begründung',
            Русский: 'Замена всех модулей памяти без конкретной причины'
        }
    },
    replace_hardware_part: {
        setup: 32.77,
        name: {
            English: 'Replace any hardware part without a specific reason',
            Deutsch: 'Tausch sonstiger Komponenten ohne konkrete Begründung',
            Русский: 'Замена компонента сервера без конкретной причины'
        },
        comment: "Replace any hardware part: raid controller, additional network card, drives ...\n\
Replace any hardware part: Raid Controller, separate Netzwerkkarte, Platten ..."
    },
    replace_entire_server: {
        setup: 57.98,
        name: {
            English: 'Replace the entire server without a specific reason',
            Deutsch: 'Tausch des kompletten Servers ohne konkrete Begründung',
            Русский: 'Замена сервера без конкретной причины'
        },
        comment: "Replace the entire server: we will transfer the existing drives to the new server\n\
Replace the entire server: Übernahme der Festplatten in das neue System"
    },
    gigabit_optic_sfp: {
        monthly: 0.5,
        name: {
            English: '1 Gbit optics SFP',
            Deutsch: '1 Gbit Optik SFP',
            Русский: 'Оптический модуль 1G SFP'
        }
    },
    ten_gigabit_optic_sfp_plus: {
        monthly: 1.5,
        name: {
            English: '10 Gbit optics SFP+',
            Deutsch: '10 Gbit Optik SFP+',
            Русский: 'Оптический модуль 10 Гбит SFP+'
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
