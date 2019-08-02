(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('helpers', ['exports'], factory) :
    (global = global || self, factory(global.helpers = {}));
}(this, function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LGAS = [
        [
            'Aba North',
            'Aba South',
            'Arochukwu',
            'Bende',
            'Ikawuno',
            'Ikwuano',
            'Isiala-Ngwa North',
            'Isiala-Ngwa South',
            'Isikwuato',
            'Isuikwuato',
            'Nneochi',
            'Obi Ngwa',
            'Obi Ngwa',
            'Obioma Ngwa',
            'Obioma-Ngwa',
            'Ohafia',
            'Ohaozara',
            'Osisioma',
            'Ugwunagbo',
            'Ukwa West',
            'Ukwu East',
            'Umuahia',
            'Umuahia North',
            'Umuahia South',
            'Umuahia-North',
            'Umunneochi',
        ],
        [
            'Demsa',
            'Fufore',
            'Ganye',
            'Girei',
            'Gombi',
            'Guyuk',
            'Hong',
            'Jada',
            'Jimeta',
            'Lamurde',
            'Madagali',
            'Maiha',
            'Mayo-Belwa',
            'Michika',
            'Mubi-North',
            'Mubi-South',
            'Numan',
            'Shelleng',
            'Song',
            'Toungo',
            'Yola',
        ],
        [
            'Abak',
            'Eastern-Obolo',
            'Eket',
            'Ekpe-Atani',
            'Esit Ekit',
            'Essien-Udim',
            'Etim-Ekpo',
            'Etinam',
            'Ibeno',
            'Ibesikpo-Asutan',
            'Ibiono-Ibom',
            'Ika',
            'Ikono',
            'Ikot-Abasi',
            'Ikot-Ekpene',
            'Ini',
            'Itu',
            'Mbo',
            'Mkpat-Enin',
            'Nsit-Ibom',
            'Nsit-Ubium',
            'Obot-Akara',
            'Okobo',
            'Onna',
            'Oron',
            'Oruk Anam',
            'Udung-Uko',
            'Ukanefun',
            'Uquo Ibeno',
            'Uru Offong Oruko',
            'Uruan',
            'Uruk-Anam',
            'Uyo',
        ],
        [
            'Aguata',
            'Akwa North',
            'Anambra',
            'Anambra-West',
            'Anaocha',
            'Awka-North',
            'Awka-South',
            'Ayamelum',
            'Dunukofia',
            'Ekwusigo',
            'Idemili',
            'Idemili-North',
            'Idemili-South',
            'Ihiala',
            'Imo',
            'Nibo',
            'Njikoka',
            'Nnewi',
            'Nnewi-North',
            'Nnewi-South',
            'Ogbaru',
            'Olumba',
            'Onitsha-North',
            'Onitsha-South',
            'Orumba-North',
            'Orumba-South',
            'Oti',
            'Otu-Ocha',
            'Ubuluizor Ihiala',
            'Uyi',
        ],
        [
            'Alkaleri',
            'Bauchi',
            'Bogoro',
            'Damban',
            'Darazo',
            'Dass',
            'Gamawa',
            'Ganjuwa',
            'Giade',
            'Itas/Gadau',
            "Jama'Are",
            'Katagum',
            'Kirfi',
            'Misau',
            'Ningi',
            'Shira',
            'Tafawa-Balewa',
            'Toro',
            'Warji',
            'Zaki',
        ],
        [
            'Adagbabiri',
            'Brass',
            'Ekeremor',
            'Kembe',
            'Kolokuma',
            'Kolokuma/Opkuma',
            'Nembe',
            'Ogbia',
            'Sagbama',
            'Southern-Ijaw',
            'Toru-Abubo',
            'Yenegoa',
        ],
        [
            'Ado',
            'Agatu',
            'Apa',
            'Buruku',
            'Gboko',
            'Guma',
            'Gwer-East',
            'Gwer-West',
            'Katsina-Ala',
            'Konshisha',
            'Kwande',
            'Logo',
            'Makurdi',
            'Ogbadibo',
            'Ohimini',
            'Oju',
            'Okpokwu',
            'Otukpo',
            'Oturkpa',
            'Tarka',
            'Ukum',
            'Ushongo',
            'Vandeikya',
        ],
        [
            'Abadan',
            'Askira-Uba',
            'Bama',
            'Bayo',
            'Biu',
            'Chibok',
            'Damboa',
            'Dikwa',
            'Gubio',
            'Guzamala',
            'Gwoza',
            'Hawul',
            'Jere',
            'Kaga',
            'Kala/Balge',
            'Konduga',
            'Kukawa',
            'Kwaya-Kusar',
            'Mafa',
            'Magumeri',
            'Maiduguri',
            'Marte',
            'Mobbar',
            'Mongunu',
            'Ngala',
            'Nganzai',
            'Shani',
        ],
        [
            'Abi',
            'Abuochichie',
            'Akamkpa',
            'Akpabuyo',
            'Bakassi',
            'Bekwara',
            'Biasi',
            'Boki',
            'Calabar-Municipal',
            'Calabar-South',
            'Etunk',
            'Ikom',
            'Obanliku',
            'Obubra',
            'Obudu',
            'Odukpani',
            'Ogoja',
            'Ugep-North',
            'Yakurr',
            'Yala',
        ],
        [
            'Aniocha North',
            'Aniocha-North',
            'Aniocha-South',
            'Bomadi',
            'Burutu',
            'Effurun',
            'Ethiope-East',
            'Ethiope-West',
            'Idu',
            'Ika-Ne',
            'Ika-North-East',
            'Ika-South',
            'Ikpemili',
            'Isoko-North',
            'Isoko-South',
            'Ndokwa-East',
            'Ndokwa-North',
            'Ndokwa-South',
            'Ndokwa-West',
            'Okpe',
            'Okwuani',
            'Oleh',
            'Oshielli-North',
            'Oshimili',
            'Oshimili-North',
            'Oshimili-South',
            'Osimili',
            'Osimili-North',
            'Osimili-South',
            'Patani',
            'Sapele',
            'Udokwa',
            'Udu',
            'Ughelli-North',
            'Ughelli-South',
            'Ukwuani',
            'Uraun',
            'Urwie',
            'Uvie',
            'Uvwei',
            'Uvwie',
            'Uwvie',
            'Warri-Central',
            'Warri-North',
            'Warri-South',
        ],
        [
            'Abakaliki',
            'Afikpo-North',
            'Afikpo-South',
            'Bomadim',
            'Ebonyi',
            'Ezza-North',
            'Ezza-South',
            'Ikwo',
            'Ishielu',
            'Ivo',
            'Izzi',
            'Obaukwu',
            'Ohakwu',
            'Onicha',
            'Ukaba',
        ],
        [
            'Afokpella',
            'Afuze',
            'Agbazilo',
            'Akoko Edo',
            'Akoko-Edo',
            'Egor',
            'Esan-Central',
            'Esan-North-East',
            'Esan-North-East',
            'Esan-South-East',
            'Esan-West',
            'Etsako-Central',
            'Etsako-East',
            'Etsako-West',
            'Igueben',
            'Iguobano North East',
            'Ikpoba-Okha',
            'Ohunmwode',
            'Ologbo',
            'Opoji Irrua',
            'Opoji Irrua',
            'Oredo',
            'Orhionmwon',
            'Ovia-North-East',
            'Ovia-South-West',
            'Owan East',
            'Owan-East',
            'Owan-West',
            'Uhunmwonde',
        ],
        [
            'Ado-Ekiti',
            'Aiyekire',
            'Efon',
            'Ekiti-East',
            'Ekiti-South-West',
            'Ekiti-West',
            'Emure/Ise/Orun',
            'Gbonyin',
            'Ido-Osi',
            'Ijero',
            'Ikare',
            'Ikere',
            'Ikole',
            'Ilejemeje',
            'Irepodun/Ifelodun',
            'Ise-Orun',
            'Moba',
            'Oye',
        ],
        [
            'Aninri',
            'Awgu',
            'Enugu-East',
            'Enugu-North',
            'Enugu-South',
            'Ezeagu',
            'Igbo-Etiti',
            'Igbo-Eze-North',
            'Igbo-Eze-South',
            'Isi-Uzo',
            'Nkanu-East',
            'Nkanu-West',
            'Nsukka',
            'Nukanu East',
            'Oji-River',
            'Udenu',
            'Udi',
            'Uzo-Uwani',
        ],
        ['Abaji', 'Abuja Municipal', 'Gwagwalada', 'Kuje', 'Bwari', 'Kwali'],
        [
            'Akko',
            'Balanga',
            'Billiri',
            'Dukku',
            'Funakaye',
            'Gombe',
            'Kaltungo',
            'Kwami',
            'Nafada/Bajoga',
            'Shomgom',
            'Yamaltu/Deba',
        ],
        [
            'Aboh-Mbaise',
            'Ahiazu-Mbaise',
            'Dral-Esat',
            'Ehime-Mbano',
            'Ezeobodo',
            'Ezinihitte',
            'Ideato',
            'Ideato-North',
            'Ideato-South',
            'Ihitte/Uboma',
            'Ikeduru',
            'Isiala-Mbano',
            'Isu',
            'Mbaitoli',
            'Mbano',
            'Ngor-Okpala',
            'Njaba',
            'Nkwerre',
            'Nwangele',
            'Obowo',
            'Oguta',
            'Ohaji-Egbema',
            'Okigwe',
            'Onuimo',
            'Orlu',
            'Oro-West',
            'Orsu',
            'Oru-East',
            'Oru-West',
            'Owerri-Municipal',
            'Owerri-North',
            'Owerri-West',
            'Ugiri-Ike Ikeduru',
            'Ugiri-Ikedikeduru',
            'Unbano',
            'Zinihitte',
        ],
        [
            'Auyo',
            'Babura',
            'Biriniwa',
            'Birnin-Kudu',
            'Bosuwa',
            'Buji',
            'Dutse',
            'Gagarawa',
            'Garki',
            'Gumel',
            'Guri',
            'Gwaram',
            'Gwiwa',
            'Hadejia',
            'Jahun',
            'Kafin-Hausa',
            'Kaugama',
            'Kazaure',
            'Kirkasamma',
            'Maigatari',
            'Malam-Maduri',
            'Miga',
            'Ringim',
            'Roni',
            'Sule-Tankarkar',
            'Taura',
            'Yankwashi',
        ],
        [
            'Aleiro',
            'Arewa-Dandi',
            'Argungu',
            'Augie',
            'Bagudo',
            'Birnin-Kebbi',
            'Bumza',
            'Dandi',
            'Danko',
            'Fakai',
            'Gwandu',
            'Jega',
            'Kalgo',
            'Koko-Besse',
            'Maiyama',
            'Ngaski',
            'Sakaba',
            'Shanga',
            'Suru',
            'Wasagu',
            'Yauri',
            'Zuru',
        ],
        [
            'Birnin-Gwari',
            'Chikun',
            'Giwa',
            'Gwagwada',
            'Igabi',
            'Ikara',
            'Jaba',
            "Jema'A",
            'Kachia',
            'Kaduna-North',
            'Kagarko',
            'Kajuru',
            'Kaura',
            'Kauru',
            'Koka/Kawo',
            'Kubah',
            'Kudan',
            'Lere',
            'Makarfi',
            'Sabon-Gari',
            'Sanga',
            'Soba',
            'Tudun-Wada/Makera',
            'Zango-Kataf',
            'Zaria',
        ],
        [
            'Ajingi',
            'Albasu',
            'Bagwai',
            'Bebeji',
            'Bichi',
            'Bunkure',
            'Dala',
            'Dambatta',
            'Dawakin-Kudu',
            'Dawakin-Tofa',
            'Doguwa',
            'Fagge',
            'Gabasawa',
            'Garko',
            'Garun-Mallam',
            'Gaya',
            'Gezawa',
            'Gwale',
            'Gwarzo',
            'Kano-Municipal',
            'Karaye',
            'Kibiya',
            'Kiru',
            'Kumbotso',
            'Kunchi',
            'Kura',
            'Madobi',
            'Makoda',
            'Minjibir',
            'Nasarawa',
            'Rano',
            'Rimin-Gado',
            'Rogo',
            'Shanono',
            'Sumaila',
            'Takai',
            'Tarauni',
            'Tofa',
            'Tsanyawa',
            'Tudun-Wada',
            'Ungogo',
            'Warawa',
            'Wudil',
        ],
        [
            'Adavi',
            'Ajaokuta',
            'Ankpa',
            'Dekina',
            'Ibaji',
            'Idah',
            'Igalamela',
            'Ijumu',
            'Ikoyi-Ijumu',
            'Kabba/Bunu',
            'Kogi',
            'Lokoja',
            'Mopa-Muro-Mopi',
            'Obaji',
            'Ofu',
            'Ogori/Magongo',
            'Okehi',
            'Okene',
            'Olamaboro',
            'Omala',
            'Oru',
            'Oyi',
            'Yagba-East',
            'Yagba-West',
        ],
        [
            'Bakori',
            'Batagarawa',
            'Batsari',
            'Baure',
            'Bindawa',
            'Charanchi',
            'Dan-Musa',
            'Dandume',
            'Danji',
            'Daura',
            'Dutsi',
            'Dutsinma',
            'Faskari',
            'Funtua',
            'Ingawa',
            'Jibia',
            'Kafur',
            'Kaita',
            'Kankara',
            'Kankia',
            'Katsina',
            'Kurfi',
            'Kusada',
            'Mai-Adua',
            'Malumfashi',
            'Mani',
            'Mashi',
            'Matazu',
            'Musawa',
            'Rimi',
            'Sabuwa',
            'Safana',
            'Sandamu',
            'Zango',
        ],
        [
            'Asa',
            'Baruten',
            'Edu',
            'Ekiti',
            'Ilorin-East',
            'Ilorin-South',
            'Ilorin-West',
            'Isin',
            'Kaiama',
            'Moro',
            'Offa',
            'Oke-Ero',
            'Oyun',
            'Pategi',
        ],
        [
            'Agege',
            'Ajeromi-Ifelodun',
            'Alimosho',
            'Amuwo-Odofin',
            'Apapa',
            'Badagry',
            'Epe',
            'Eti-Osa',
            'Ibeju-Lekki',
            'Ifako-Ijaiye',
            'Ikeja',
            'Ikorodu',
            'Island',
            'Kosofe',
            'Lagos-Island',
            'Lagos-Mainland',
            'Mushin',
            'Ojo',
            'Oshodi-Isolo',
            'Shomolu',
            'Somolu',
            'Suru-Lere',
            'Yewa-South',
        ],
        [
            'Akwanga',
            'Awe',
            'Doma',
            'Karu',
            'Keana',
            'Keffi',
            'Kokona',
            'Lafia',
            'Nassawara',
            'Nassawara Eggon',
            'Obi',
            'Wambu',
        ],
        [
            'Agaie',
            'Agwara',
            'Bida',
            'Borgu',
            'Bosso',
            'Chanchaga',
            'Edati',
            'Gbako',
            'Gurara',
            'Katcha',
            'Kontagora',
            'Lapai',
            'Lavun',
            'Magama',
            'Mariga',
            'Mashegu',
            'Mokwa',
            'Muya',
            'Paikoro',
            'Rafi',
            'Rijau',
            'Shiroro',
            'Suleja',
            'Tafa',
            'Wushishi',
        ],
        [
            'Abeokuta-North',
            'Abeokuta-South',
            'Abor Mbaise',
            'Ado-Odo/Ota',
            'Adoodo-Ota',
            'Ewekoro',
            'Idarapo',
            'Iffo-Otta',
            'Ifo',
            'Igbado-North',
            'Igbado-South',
            'Ijebu-East',
            'Ijebu-North',
            'Ijebu-North-East',
            'Ijebu-Ode',
            'Ikenne',
            'Ilishan Remo',
            'Ilugun-Alaro',
            'Imeko-Afon',
            'Ipokia',
            'Lgayekpe',
            'Obafemi-Owode',
            'Odedah',
            'Odogbolu',
            'Ogun-Waterside',
            'Remo-North',
            'Sagamu',
            'Shagamu',
            'Yewa',
        ],
        [
            'Akoko',
            'Akoko-North',
            'Akoko-North-West',
            'Akoko-South',
            'Akoko-South-East',
            'Akure',
            'Akure-North',
            'Akure-South',
            'Ese-Odo',
            'Idanre',
            'Ifedore',
            'Igbisin',
            'Ikale',
            'Ilaje',
            'Ilaje-West',
            'Ile-Oluji-Okeigbo',
            'Irele',
            'Odigbo',
            'Oka Ak0Ko',
            'Okiti Pupa Ijuodo',
            'Okiti-Pupa',
            'Ondo',
            'Ondo West',
            'Ondo-East',
            'Ose',
            'Owo',
        ],
        [
            'Atakumosa',
            'Atakumosa East',
            'Ayeda-Ade',
            'Ayedire',
            'Boluwaduro',
            'Boripe',
            'Ede',
            'Ede North',
            'Egbedore',
            'Ejigbo',
            'Ife',
            'Ife North',
            'Ife South',
            'Ife-Central',
            'Ife-East',
            'Ifelodun',
            'Ila',
            'Ilesa-East',
            'Ilesa-West',
            'Ilesha',
            'Ilesha West',
            'Irepodun',
            'Irewole',
            'Isokan',
            'Iwo',
            'Obokun',
            'Odo-Otin',
            'Ola Oluwa',
            'Olorunda',
            'Ori-Ade',
            'Orolu',
            'Osogbo',
        ],
        [
            'Afijio',
            'Akinyele',
            'Atiba',
            'Atigbo',
            'Egbeda',
            'Ibadan-Central',
            'Ibadan-North-East',
            'Ibadan-North-West',
            'Ibadan-South-East',
            'Ibadan-South-West',
            'Ibarapa-Central',
            'Ibarapa-East',
            'Ibarapa-North',
            'Ido',
            'Ifedayo',
            'Ifeloju',
            'Irepo',
            'Iseyin',
            'Itseiwaju',
            'Iwajowa',
            'Kajola',
            'Lagelu',
            'Odo-Oluwa',
            'Ogbomosho-North',
            'Ogbomosho-South',
            'Olorunsogo',
            'Oluyole',
            'Ona-Ara',
            'Orelope',
            'Ori-Ire',
            'Oyo-West',
            'Saki-East',
            'Saki-West',
            'Surulere',
        ],
        [
            'Barkin-Ladi',
            'Bassa',
            'Bokkos',
            'Jos-East',
            'Jos-North',
            'Jos-South',
            'Kanam',
            'Kanke',
            'Langtang-North',
            'Langtang-South',
            'Mangu',
            'Mikang',
            'Pankshin',
            "Quan'Anpan",
            'Riyom',
            'Shendam',
            'Wase',
        ],
        [
            'Aboa/Odual',
            'Ahoada-East',
            'Ahoada-West',
            'Akukutoru',
            'Andoni',
            'Asari-Toru',
            'Bonny',
            'Buguma',
            'Degema',
            'Eleme',
            'Elfane',
            'Emuoha',
            'Etche',
            'Gokana',
            'Ikwerre',
            'Khana',
            'Obia/Akpor',
            'Ogba-Egbema-Ndoni',
            'Ogba/Egbema/Ndoni',
            'Ogu/Bolo',
            'Okirika',
            'Omuma',
            'Opobo/Nkoro',
            'Oyigbo',
            'Port-Harcourt',
            'Tai',
        ],
        [
            'Binji',
            'Bodinga',
            'Dange-Shuni',
            'Gada',
            'Goronyo',
            'Gudu',
            'Gwadabawa',
            'Illela',
            'Kebbe',
            'Kware',
            'Raba',
            'Sabo-Birni',
            'Shagari',
            'Silame',
            'Sokoto-North',
            'Sokoto-South',
            'Tambuwal',
            'Tangaza',
            'Tureta',
            'Wamakko',
            'Wurno',
            'Yabo',
        ],
        [
            'Ardo-Kola',
            'Bali',
            'Donga',
            'Gashaka',
            'Gassol',
            'Ibi',
            'Jalingo',
            'Karim-Lamido',
            'Kurmi',
            'Lau',
            'Oilingo',
            'Sardauna',
            'Takum',
            'Ussa',
            'Wukari',
            'Yorro',
            'Zing',
        ],
        [
            'Bade',
            'Borsali',
            'Damaturu',
            'Fika',
            'Fune',
            'Geidam',
            'Gogaram',
            'Gujba',
            'Gulani',
            'Jakusko',
            'Karasuwa',
            'Machina',
            'Nangere',
            'Nguru',
            'Potiskum',
            'Tarmua',
            'Yunusari',
            'Yusufari ',
        ],
        [
            'Anka',
            'Bakura',
            'Bukkuyum',
            'Bungudu',
            'Gumi',
            'Gusau',
            'Isa',
            'Kaura-Namoda',
            'Kiyawa',
            'Maradun',
            'Maru',
            'Shinkafi',
            'Talata-Mafara',
            'Tsafe',
            'Zurmi',
        ],
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var STATES = [
        'Abia',
        'Adamawa',
        'Akwa Ibom',
        'Anambra',
        'Bauchi',
        'Bayelsa',
        'Benue',
        'Borno',
        'Cross River',
        'Delta',
        'Ebonyi',
        'Edo',
        'Ekiti',
        'Enugu',
        'FCT',
        'Gombe',
        'Imo',
        'Jigawa',
        'Kaduna',
        'Kano',
        'Katsina',
        'Kebbi',
        'Kogi',
        'Kwara',
        'Lagos',
        'Nassarawa',
        'Niger',
        'Ogun',
        'Ondo',
        'Osun',
        'Oyo',
        'Plataeu',
        'Rivers',
        'Sokoto',
        'Taraba',
        'Yobe',
        'Zamfara',
    ];

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var scrollIntoView = (/**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    });
    /** @type {?} */
    var selectedFilter = (/**
     * @param {?} params
     * @param {?} key
     * @param {?=} value
     * @return {?}
     */
    function (params, key, value) {
        var _a;
        params = __assign({}, params, (_a = {}, _a[key] = value, _a.page = 1, _a));
        if (!value || !value.toString().trim().length) {
            delete params[key];
        }
        return params;
    });
    /** @type {?} */
    var getGender = (/**
     * @param {?} genderId
     * @return {?}
     */
    function (genderId) {
        return ['Male', 'Female', 'Male & Female'][genderId];
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var BASE_URL = 'https://appson-backend.herokuapp.com';
    // export const VISITORS_URL = 'http://localhost:4300';
    // export const MEMBERS_URL = 'http://localhost:4400';
    /** @type {?} */
    var ADMIN_URL = 'http://localhost:4500';
    /** @type {?} */
    var STUDENTS_URL = 'http://localhost:4600';
    // export const BASE_URL = 'http://localhost:4300';
    /** @type {?} */
    var MEMBERS_URL = 'https://members.apsonigeria.org';
    /** @type {?} */
    var VISITORS_URL = 'https://www.apsonigeria.org';
    // export const ADMIN_URL = 'https://admin.apsonigeria.org';
    // export const STUDENTS_URL = 'https://students.apsonigeria.org';
    /** @type {?} */
    var SCHOOL_TYPES = [
        'Cresche/Nursery',
        'Primary shoool',
        'Secondary school',
    ];

    exports.ADMIN_URL = ADMIN_URL;
    exports.BASE_URL = BASE_URL;
    exports.LGAS = LGAS;
    exports.MEMBERS_URL = MEMBERS_URL;
    exports.SCHOOL_TYPES = SCHOOL_TYPES;
    exports.STATES = STATES;
    exports.STUDENTS_URL = STUDENTS_URL;
    exports.VISITORS_URL = VISITORS_URL;
    exports.getGender = getGender;
    exports.scrollIntoView = scrollIntoView;
    exports.selectedFilter = selectedFilter;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=helpers.umd.js.map
