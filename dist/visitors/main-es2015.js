(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/helpers/fesm2015/helpers.js":
/*!****************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/dist/helpers/fesm2015/helpers.js ***!
  \****************************************************************************************************/
/*! exports provided: ADMIN_URL, APSON_EMAIL, BASE_URL, LGAS, MEMBERS_URL, SCHOOL_TYPES, STATES, STUDENTS_URL, VISITORS_URL, getGender, scrollIntoView, selectedFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_URL", function() { return ADMIN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APSON_EMAIL", function() { return APSON_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LGAS", function() { return LGAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEMBERS_URL", function() { return MEMBERS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_TYPES", function() { return SCHOOL_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES", function() { return STATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STUDENTS_URL", function() { return STUDENTS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISITORS_URL", function() { return VISITORS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGender", function() { return getGender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollIntoView", function() { return scrollIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedFilter", function() { return selectedFilter; });
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LGAS = [
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
const STATES = [
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
const scrollIntoView = (/**
 * @param {?} element
 * @return {?}
 */
element => {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
    });
});
/** @type {?} */
const selectedFilter = (/**
 * @param {?} params
 * @param {?} key
 * @param {?=} value
 * @return {?}
 */
(params, key, value) => {
    params = Object.assign({}, params, { [key]: value, page: 1 });
    if (!value || !value.toString().trim().length) {
        delete params[key];
    }
    return params;
});
/** @type {?} */
const getGender = (/**
 * @param {?} genderId
 * @return {?}
 */
(genderId) => ['Male Only', 'Female Female', 'Male & Female'][genderId]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const BASE_URL = 'https://appson-backend.herokuapp.com';
// export const VISITORS_URL = 'http://localhost:4300';
// export const MEMBERS_URL = 'http://localhost:4400';
/** @type {?} */
const ADMIN_URL = 'http://localhost:4500';
/** @type {?} */
const STUDENTS_URL = 'http://localhost:4600';
// export const BASE_URL = 'http://localhost:4300';
/** @type {?} */
const MEMBERS_URL = 'https://members.apsonigeria.org';
/** @type {?} */
const VISITORS_URL = 'https://www.apsonigeria.org';
// export const ADMIN_URL = 'https://admin.apsonigeria.org';
// export const STUDENTS_URL = 'https://students.apsonigeria.org';
/** @type {?} */
const APSON_EMAIL = 'support@apsonigeria.org';
/** @type {?} */
const SCHOOL_TYPES = [
    'Cresche/Nursery',
    'Primary shoool',
    'Secondary school',
];


//# sourceMappingURL=helpers.js.map


/***/ }),

/***/ "../../dist/shared/fesm2015/shared.js":
/*!**************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/dist/shared/fesm2015/shared.js ***!
  \**************************************************************************************************/
/*! exports provided: AuthService, BaseComponent, BaseDataComponent, HttpService, InterceptorService, Member, RequestService, School, SchoolService, ScriptLoaderService, ScriptStore, SharedModule, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDataComponent", function() { return BaseDataComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Member", function() { return Member; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "School", function() { return School; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolService", function() { return SchoolService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptLoaderService", function() { return ScriptLoaderService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return BackButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return SubmitButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return AlertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return InputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return SelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return SimpleSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return BusyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return SchoolBoxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_cacheable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cacheable */ "../../node_modules/ngx-cacheable/index.js");
/* harmony import */ var ngx_cacheable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_cacheable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helpers */ "../../dist/helpers/fesm2015/helpers.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SubmitButtonComponent {
    constructor() {
        this.isBusy = false;
        this.disabled = false;
        this.type = 'submit';
        this.maxWidth = 'w-100';
        this.btnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.type === 'button') {
            this.btnClick.emit(event);
        }
    }
}
SubmitButtonComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'lib-submit-button',
                template: "<button\n  type=\"type\"\n  class=\"btn-brand mt-4 btn-curved {{ maxWidth }}\"\n  [disabled]=\"isBusy || disabled\"\n  (click)=\"onClick($event)\"\n>\n  {{ text }}\n  <div class=\"spinner-border\" *ngIf=\"isBusy\"></div>\n</button>\n"
            }] }
];
/** @nocollapse */
SubmitButtonComponent.ctorParameters = () => [];
SubmitButtonComponent.propDecorators = {
    isBusy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    btnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InputComponent {
    constructor() {
        this.type = 'text';
    }
}
InputComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'lib-input',
                template: "<div class=\"form-group\">\n  <label for=\"{{ name }}\">{{ title }}</label>\n  <ng-container *ngIf=\"type === 'textarea'; else textfield\">\n    <textarea\n      class=\"form-control\"\n      id=\"{{ name }}\"\n      [formControl]=\"formData.controls[name]\"\n      >{{ formData.controls[name].value }}\n</textarea\n    >\n  </ng-container>\n  <ng-template #textfield>\n    <input\n      type=\"{{ type }}\"\n      class=\"form-control\"\n      id=\"{{ name }}\"\n      [formControl]=\"formData.controls[name]\"\n      [value]=\"formData.controls[name].value\"\n    />\n  </ng-template>\n\n  <span\n    class=\"display-error\"\n    *ngIf=\"formData.controls[name].invalid && formData.controls[name].dirty\"\n    >{{ invalidText }}</span\n  >\n</div>\n"
            }] }
];
InputComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    formData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    invalidText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SelectComponent {
    constructor() {
        this.data = [];
        this.disabled = false;
        this.isLoading = false;
        this.whenSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    notifyChange(event) {
        this.whenSelected.emit(event);
    }
}
SelectComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'lib-select',
                template: "<div class=\"form-group\">\n  <label for=\"{{ title }}\">{{ title }}\n    <img *ngIf=\"isLoading\" src=\"/assets/images/icons/loading.gif\" width=\"20\" /></label>\n  <select class=\"form-control custom-select\" [formControl]=\"formData.controls[name]\"\n    [value]=\"formData.controls[name].value\" (change)=\"notifyChange(formData.controls[name].value)\"\n    [attr.disabled]=\"disabled || isLoading ? 'true' : null\">\n    <option value=\"\">-- Choose one --</option>\n    <option *ngFor=\"let item of data; let i = index\" value=\"{{ i }}\">\n      {{ item }}</option>\n  </select>\n  <span class=\"display-error\"\n    *ngIf=\"formData.controls[name].invalid && formData.controls[name].dirty\">{{ invalidText }}.</span>\n</div>"
            }] }
];
SelectComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    formData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    invalidText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    isLoading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    whenSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BusyComponent {
    constructor() {
        this.text = 'Please wait...';
    }
}
BusyComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'lib-busy',
                template: "<div class=\"busy text-center\">\n  <img src=\"/assets/images/icons/busy.gif\" width=\"120\" />\n  <p>{{ text }}</p>\n</div>\n"
            }] }
];
/** @nocollapse */
BusyComponent.ctorParameters = () => [];
BusyComponent.propDecorators = {
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HttpService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @template T
     * @param {?} endpoint
     * @param {?} params
     * @param {?} method
     * @return {?}
     */
    request(endpoint, params, method) {
        return this.http[method](`${helpers__WEBPACK_IMPORTED_MODULE_7__["BASE_URL"]}/${endpoint}`, params);
    }
}
HttpService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
HttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
/** @nocollapse */ HttpService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function HttpService_Factory() { return new HttpService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); }, token: HttpService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class RequestService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    updateMember(data) {
        return this.http.request('members', Object.assign({}, data), 'patch');
    }
    /**
     * @param {?} data
     * @return {?}
     */
    updateProfileImage(data) {
        return this.http.request('members/image', Object.assign({}, data), 'patch');
    }
    /**
     * @param {?} data
     * @return {?}
     */
    registerMember(data) {
        return this.http.request('members', Object.assign({}, data), 'post');
    }
    /**
     * @param {?} paymentType
     * @return {?}
     */
    requestPayment(paymentType) {
        return this.http.request('payments/request', { params: { paymentType } }, 'get');
    }
    /**
     * @param {?} query
     * @return {?}
     */
    searchSchools(query) {
        return this.get('schools', query);
    }
    /**
     * @param {?} ref
     * @return {?}
     */
    validatePayment(ref) {
        return this.http.request('payments', { ref }, 'post');
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    post(endpoint, data) {
        return this.http.request(endpoint, Object.assign({}, data), 'post');
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    patch(endpoint, data) {
        return this.http.request(endpoint, Object.assign({}, data), 'patch');
    }
    /**
     * @param {?} endpoint
     * @param {?=} data
     * @return {?}
     */
    get(endpoint, data = {}) {
        return this.http.request(endpoint, { params: data }, 'get');
    }
}
RequestService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
RequestService.ctorParameters = () => [
    { type: HttpService }
];
/** @nocollapse */ RequestService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function RequestService_Factory() { return new RequestService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpService)); }, token: RequestService, providedIn: "root" });
Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
    Object(ngx_cacheable__WEBPACK_IMPORTED_MODULE_5__["Cacheable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
], RequestService.prototype, "searchSchools", null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BaseComponent {
    constructor() {
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.isBusy = false;
        this.isEmpty = false;
        this.isError = false;
        this.loading = true;
        this.hideAlert = true;
        this.show404 = true;
        this.response = {
            title: '',
            message: [],
            type: '',
        };
    }
    /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    toggleLoaders(value) {
        this.isBusy = value;
        this.hideAlert = value;
    }
    /**
     * @protected
     * @param {?} message
     * @param {?} title
     * @param {?} type
     * @return {?}
     */
    showMessage(message, title, type) {
        this.response.message = message;
        this.response.title = title;
        this.response.type = type;
    }
    /**
     * @private
     * @param {?} array
     * @return {?}
     */
    arrayValues(array) {
        if (!Array.isArray(array)) {
            return [];
        }
        /** @type {?} */
        const errorGroup = [];
        array.forEach((/**
         * @param {?} element
         * @return {?}
         */
        (element) => {
            errorGroup.push(Object.values(element));
        }));
        return errorGroup;
    }
    /**
     * @protected
     * @param {?} err
     * @return {?}
     */
    handleError(err) {
        this.toggleLoaders(false);
        let { error: { data, message }, } = err;
        data = this.arrayValues(data);
        /** @type {?} */
        const title = data.length === 0 ? '' : message;
        message = title ? data : message;
        this.showMessage(message, title, 'danger');
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    toggleMenu() { }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class BaseDataComponent extends BaseComponent {
    constructor() {
        super();
        this.debouceTime = 500;
        this.dataSize = 0;
        this.data = [];
        this.params = {
            page: 1,
            size: 1000,
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.populateTable();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    /**
     * @param {?} data
     * @param {?} totalRecords
     * @return {?}
     */
    onPopulateTableComplete(data, totalRecords) {
        this.loading = false;
        this.data = data;
        this.dataSize = totalRecords;
        this.isEmpty = data.length === 0;
    }
    /**
     * @param {?} observableKeyword
     * @return {?}
     */
    registerSearchObservables(observableKeyword) {
        this.registerObservables(observableKeyword, 'loading', (/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            this.filter(observableKeyword, value);
        }));
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    handleSearch(key, value) {
        this[`${key}$`].next(value);
    }
    /**
     * @param {?} observableKeyword
     * @param {?} loader
     * @param {?} callback
     * @return {?}
     */
    registerObservables(observableKeyword, loader, callback) {
        this.subscription.add(this[`${observableKeyword}$`]
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this[loader] = true;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(this.debouceTime), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this[loader] = false;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        (value) => {
            callback(value);
        })));
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    filter(key, value) {
        this.params = Object(helpers__WEBPACK_IMPORTED_MODULE_7__["selectedFilter"])(this.params, key, value);
        this.populateTable();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    paginate({ page, size }) {
        this.params.size = size;
        this.params.page = page;
        this.populateTable();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchoolBoxComponent extends BaseDataComponent {
    /**
     * @param {?} requestService
     */
    constructor(requestService) {
        super();
        this.requestService = requestService;
        this.schoolParams = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.size = 6;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.params.size = this.size;
        this.initFilterSubscription();
        this.populateTable();
    }
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    setSchoolData(response) {
        const { data: { result, page }, } = response;
        this.loading = false;
        this.schools = result || [];
        this.isEmpty = this.schools.length === 0;
    }
    /**
     * @private
     * @return {?}
     */
    initFilterSubscription() {
        this.subscription.add(this.schoolParams.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ({ key, value }) => {
            if (key === 'state' && this.params.lga) {
                delete this.params.lga;
            }
            this.params = Object(helpers__WEBPACK_IMPORTED_MODULE_7__["selectedFilter"])(this.params, key, value);
            this.populateTable();
        })));
    }
    /**
     * @return {?}
     */
    populateTable() {
        this.loading = true;
        this.schools = [];
        this.subscription.add(this.requestService.searchSchools(this.params).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            this.setSchoolData(response);
        }), (/**
         * @param {?} _
         * @return {?}
         */
        _ => {
            this.loading = false;
            this.isError = true;
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
SchoolBoxComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'lib-school-box',
                template: "<div class=\"row boxed-row\" *ngIf=\"!loading\">\n  <div class=\"col-6 col-lg-4 mb-4\" *ngFor=\"let school of schools\">\n    <div class=\"school-box card h-100\">\n      <span class=\"blog-category school-type bg-school-type-0\">{{\n        school.typeName\n      }}</span>\n      <a class=\"link-cover\" routerLink=\"/schools/{{ school.id }}\"></a>\n      <div class=\"school-box-cover\">\n        <img src=\"{{ school.cover }}\" width=\"100%\" />\n      </div>\n      <div class=\"school-box-content card-body\">\n        <a\n          *ngIf=\"school.contact\"\n          href=\"tel: {{ school.contact.phone }}\"\n          class=\"blog-control school-btn-call transition\"\n          ><i class=\"fas fa-phone fa-flip-horizontal\"></i\n        ></a>\n        <h4 class=\"school-box-title\">{{ school.name }}</h4>\n        <ul class=\"fa-ul school-list\" *ngIf=\"school.location || school.contact\">\n          <li *ngIf=\"school.location\">\n            <i class=\"fas fa-map-marker-alt fa-li text-secondary\"></i>\n            {{ school.fullAddress }}\n          </li>\n          <li *ngIf=\"school.contact\">\n            <i class=\"fas fa-li fa-phone fa-flip-horizontal text-secondary\"></i>\n            {{ school.contact.phone }}\n          </li>\n        </ul>\n      </div>\n      <div class=\"school-footer card-footer\">\n        <!-- <div class=\"school-ratings float-left\">\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n        </div> -->\n        <a routerLink=\"/schools/{{ school.id }}\" class=\"blog-link-more\"\n          >Details <i class=\"fas fa-arrow-right transition\"></i\n        ></a>\n      </div>\n    </div>\n  </div>\n</div>\n<lib-busy *ngIf=\"loading\"></lib-busy>\n<lib-not-found-box\n  *ngIf=\"isEmpty && !loading\"\n  message=\"There is no school matching your search.\"\n  title=\"No schools found\"\n>\n</lib-not-found-box>\n"
            }] }
];
/** @nocollapse */
SchoolBoxComponent.ctorParameters = () => [
    { type: RequestService }
];
SchoolBoxComponent.propDecorators = {
    schoolParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SimpleSelectComponent {
    constructor() {
        this.data = [];
        this.placeholder = 'Choose one';
        this.defaultValue = '';
        this.whenSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    notifyChange(value) {
        this.whenSelected.emit(value);
    }
}
SimpleSelectComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'lib-simple-select',
                template: "<select class=\"form-control custom-select\" [value]=\"defaultValue\" (change)=\"notifyChange($event.target.value)\">\n  <option value=\"\">-- {{placeholder}} --</option>\n  <option *ngFor=\"let item of data; let i = index\" value=\"{{ i }}\">\n    {{ item }}</option>\n</select>"
            }] }
];
SimpleSelectComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    defaultValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    whenSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NotFoundComponent {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
        this.icon = 'assets/images/icons/empty.svg';
    }
}
NotFoundComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'lib-not-found-box',
                template: "<div class=\"form pl-4 position-relative pr-4 pt-5 form-box pb-4 empty-data \">\n  <div class=\"form-group text-center mb-3 max-width-500\">\n    <img src=\"{{ icon }}\" width=\"150\" />\n    <h5 class=\"empty-data-title mt-5 mb-4 font-weight-bold text-uppercase\">{{ title }}</h5>\n    <p class=\"empty-data-description\">\n      {{ message }}\n    </p>\n  </div>\n</div>"
            }] }
];
/** @nocollapse */
NotFoundComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
NotFoundComponent.propDecorators = {
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BackButtonComponent {
    /**
     * @param {?} location
     */
    constructor(location) {
        this.location = location;
    }
    /**
     * @return {?}
     */
    goBack() {
        this.location.back();
    }
}
BackButtonComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'lib-back-button',
                template: "<a\n  (click)=\"goBack()\"\n  class=\"link-back pointer transition text-white d-inline-block mt-4\"\n  ><i class=\"fas fa-arrow-left\"></i\n></a>\n"
            }] }
];
/** @nocollapse */
BackButtonComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AlertComponent {
    constructor() {
        this.type = 'warning';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.message = Array.isArray(this.message) ? this.message : [this.message];
    }
}
AlertComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'lib-alert',
                template: "<div class=\"alert alert-{{ type }} mb-4\">\n  <strong class=\"d-block mb-2\" *ngIf=\"title\">{{ title }}</strong>\n  <ul class=\"d-block mt-0 mb-0 list-unstyled\">\n    <li *ngFor=\"let item of message\" class=\"mb-2\">{{ item }}</li>\n  </ul>\n</div>\n"
            }] }
];
AlertComponent.propDecorators = {
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharedModule {
}
SharedModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    BackButtonComponent,
                    SubmitButtonComponent,
                    AlertComponent,
                    InputComponent,
                    SelectComponent,
                    SimpleSelectComponent,
                    BusyComponent,
                    SchoolBoxComponent,
                    NotFoundComponent,
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
                exports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    BackButtonComponent,
                    SubmitButtonComponent,
                    AlertComponent,
                    InputComponent,
                    SelectComponent,
                    BusyComponent,
                    SimpleSelectComponent,
                    SchoolBoxComponent,
                    NotFoundComponent,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AuthService {
    /**
     * @param {?} router
     * @param {?} httpService
     */
    constructor(router, httpService) {
        this.router = router;
        this.httpService = httpService;
        this.url = helpers__WEBPACK_IMPORTED_MODULE_7__["MEMBERS_URL"];
    }
    /**
     * @param {?} data
     * @return {?}
     */
    login(data) {
        return this.httpService.request('members/login', Object.assign({}, data), 'post');
    }
    /**
     * @param {?} member
     * @return {?}
     */
    setMember(member) {
        this.initMember();
        this.member.next(member);
        localStorage.setItem('member', JSON.stringify(member));
    }
    /**
     * @return {?}
     */
    getMember() {
        /** @type {?} */
        const member = localStorage.getItem('member');
        if (member) {
            return JSON.parse(member);
        }
        return null;
    }
    /**
     * @return {?}
     */
    logout() {
        this.member = null;
        localStorage.removeItem('member');
        this.router.navigateByUrl('/login');
    }
    /**
     * @private
     * @return {?}
     */
    initMember() {
        if (!this.member) {
            this.member = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        }
    }
    /**
     * @return {?}
     */
    gotoMembers() {
        location.assign(helpers__WEBPACK_IMPORTED_MODULE_7__["MEMBERS_URL"]);
    }
    /**
     * @return {?}
     */
    gotoVisitors() {
        location.assign(helpers__WEBPACK_IMPORTED_MODULE_7__["VISITORS_URL"]);
    }
    /**
     * @return {?}
     */
    gotoStudents() {
        location.assign(helpers__WEBPACK_IMPORTED_MODULE_7__["STUDENTS_URL"]);
    }
    /**
     * @return {?}
     */
    gotoAdmin() {
        location.assign(helpers__WEBPACK_IMPORTED_MODULE_7__["ADMIN_URL"]);
    }
    /**
     * @param {?} url
     * @return {?}
     */
    isLoggedIn(url) {
        this.url = url;
        /** @type {?} */
        const member = this.getMember();
        if (member) {
            this.initMember();
            this.member.next(member);
            return true;
        }
        return false;
    }
}
AuthService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: HttpService }
];
/** @nocollapse */ AuthService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AuthService_Factory() { return new AuthService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpService)); }, token: AuthService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InterceptorService {
    /**
     * @param {?} authService
     */
    constructor(authService) {
        this.authService = authService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        /** @type {?} */
        const member = this.authService.getMember();
        if (member) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${member.token}`,
                },
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            if (err.status === 401) {
                this.authService.logout();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
        })));
    }
}
InterceptorService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
InterceptorService.ctorParameters = () => [
    { type: AuthService }
];
/** @nocollapse */ InterceptorService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function InterceptorService_Factory() { return new InterceptorService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(AuthService)); }, token: InterceptorService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SchoolService {
    constructor() {
        this.school = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
    }
    /**
     * @param {?} school
     * @return {?}
     */
    setValue(school) {
        this.school.next(school);
    }
    /**
     * @return {?}
     */
    get() {
        return this.school;
    }
    /**
     * @return {?}
     */
    getValue() {
        return this.school.getValue();
    }
}
SchoolService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SchoolService.ctorParameters = () => [];
/** @nocollapse */ SchoolService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function SchoolService_Factory() { return new SchoolService(); }, token: SchoolService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ScriptStore = [
    {
        name: 'cloudinary',
        src: 'https://widget.cloudinary.com/v2.0/global/all.js',
    },
    { name: 'paystack', src: 'https://js.paystack.co/v1/inline.js' },
];
class ScriptLoaderService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((/**
         * @param {?} script
         * @return {?}
         */
        (script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src,
            };
        }));
    }
    /**
     * @param {...?} scripts
     * @return {?}
     */
    load(...scripts) {
        /** @type {?} */
        const promises = [];
        scripts.forEach((/**
         * @param {?} script
         * @return {?}
         */
        script => promises.push(this.loadScript(script))));
        return Promise.all(promises);
    }
    /**
     * @param {?} name
     * @return {?}
     */
    loadScript(name) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            if (!this.scripts[name].loaded) {
                /** @type {?} */
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.scripts[name].src;
                if (script.readyState) {
                    script.onreadystatechange = (/**
                     * @return {?}
                     */
                    () => {
                        if (script.readyState === 'loaded' ||
                            script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    });
                }
                else {
                    script.onload = (/**
                     * @return {?}
                     */
                    () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    });
                }
                script.onerror = (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => resolve({ script: name, loaded: false, status: 'Loaded' }));
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        }));
    }
}
ScriptLoaderService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ScriptLoaderService.ctorParameters = () => [];
/** @nocollapse */ ScriptLoaderService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ScriptLoaderService_Factory() { return new ScriptLoaderService(); }, token: ScriptLoaderService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Member {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class School {
}


//# sourceMappingURL=shared.js.map


/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!********************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/about/about.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero-section section overlay bg-about\">\n  <div class=\"container-fluid position-relative\">\n    <h1 class=\"text-center\">About us</h1>\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"container-fluid\">\n    <header class=\"header\">\n      <span>What we do</span>\n      <h2>Promoting education for national development</h2>\n    </header>\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <p>The <strong>Association of Private School Owners of Nigeria</strong> (APSON) is the official umbrella body of\n          all proprietors of private schools and other Non Governmetal Organizations (NGOs) engaged in education related\n          matters in Nigeria. </p>\n        <p>Founded in 1995, the association was created to promote the interest of private school owners and improve the\n          standard of quality eduction in Nigeria. The association is duly registered with corporate Affairs commission\n          with certificate number <ins>082240</ins>. </p>\n      </div>\n      <div class=\"col-sm-6\">\n        <p>As the official flagship organization of private school owners in Nigeria, we are constantly building an\n          organization that puts it's members welfare at the core center of our decision making process. </p>\n        <p>APSON provides a strong support system that ensures that members are protected from undue harrassments and\n          can operate smoothly without encumbrances and hindrance.</p>\n        <p>We constantly collaborate with the relevant governmental agencies and other stakeholders in education sector.\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"section bg-grey\">\n  <div class=\"container-fluid\">\n    <header class=\"header\">\n      <span>Leadership</span>\n      <h2>The Executives</h2>\n    </header>\n    <div class=\"row\">\n      <div class=\"mb-4 col-12 col-sm-6 col-md-4\">\n        <div class=\"blog-box card h-100 text-center exco-box pb-5 pt-4\">\n          <img src=\"assets/images/excos/12.jpg\" width=\"100%\" class=\"transition mt-4 mb-4\" />\n          <h4 class=\"blog-title card-body mb-2 \">Bishop Dr. Opukeme Eseimokumor Godly (JP)</h4>\n          <span class=\"blog-date\">National President</span>\n        </div>\n      </div>\n      <div class=\"mb-4 col-12 col-sm-6 col-md-4\">\n        <div class=\"blog-box card h-100 text-center exco-box pb-5 pt-4\">\n          <img src=\"assets/images/excos/13.jpg\" width=\"100%\" class=\"transition mt-4 mb-4\" />\n          <h4 class=\"blog-title mb-2 card-body\">Hon. Martins Owamagbe Osakue</h4>\n          <span class=\"blog-date\">Chairman BoT</span>\n        </div>\n      </div>\n      <div class=\"mb-4 col-12 col-sm-6 col-md-4\">\n        <div class=\"blog-box card h-100 text-center exco-box pb-5 pt-4\">\n          <img src=\"assets/images/excos/11.jpg\" width=\"100%\" class=\"transition mt-4 mb-4\" />\n          <h4 class=\"blog-title mb-2 card-body\">Deaconess Onerime oluwatoyin Florence</h4>\n          <span class=\"blog-date\">Southwest Zonal President</span>\n        </div>\n      </div>\n      <div class=\"mb-4 col-12 col-sm-6 col-md-4\">\n        <div class=\"blog-box card h-100 text-center exco-box pb-5 pt-4\">\n          <img src=\"assets/images/excos/10.jpg\" width=\"100%\" class=\"transition mt-4 mb-4\" />\n          <h4 class=\"blog-title mb-2 card-body\">Nemi Ekiotenne</h4>\n          <span class=\"blog-date\">Bayelsa Chairperson</span>\n        </div>\n      </div>\n      <div class=\"mb-4 col-12 col-sm-6 col-md-4\">\n        <div class=\"blog-box card h-100 text-center exco-box pb-5 pt-4\">\n          <img src=\"assets/images/excos/9.jpg\" width=\"100%\" class=\"transition mt-4 mb-4\" />\n          <h4 class=\"blog-title mb-2 card-body\">Dr. Patience Epelle</h4>\n          <span class=\"blog-date\">National Secretary. Training and Seminar</span>\n        </div>\n      </div>\n      <div class=\"mb-4 col-12 col-sm-6 col-md-4\">\n        <div class=\"blog-box card h-100 text-center exco-box pb-5 pt-4\">\n          <img src=\"assets/images/excos/8.jpg\" width=\"100%\" class=\"transition mt-4 mb-4\" />\n          <h4 class=\"blog-title mb-2 card-body\">Comrade Vayero Isaac Ejogbamu</h4>\n          <span class=\"blog-date\">Delta State Chairperson</span>\n        </div>\n      </div>\n      <div class=\"mb-4 col-12 col-sm-6 col-md-4\">\n        <div class=\"blog-box card h-100 text-center exco-box pb-5 pt-4\">\n          <img src=\"assets/images/excos/7.jpg\" class=\"transition mt-4 mb-4\" />\n          <h4 class=\"blog-title mb-2 card-body\">Alh Abdurrahman Marafa</h4>\n          <span class=\"blog-date\">National Secretary</span>\n        </div>\n      </div>\n      <div class=\"mb-4 col-12 col-sm-6 col-md-4\">\n        <div class=\"blog-box card h-100 text-center exco-box pb-5 pt-4\">\n          <img src=\"assets/images/excos/6.jpg\" width=\"100%\" class=\"transition mt-4 mb-4\" />\n          <h4 class=\"blog-title mb-2 card-body\">Deacon Ojakorotu Etaverho Lucky (JP)</h4>\n          <span class=\"blog-date\">Deputy National President</span>\n        </div>\n      </div>\n      <div class=\"mb-4 col-12 col-sm-6 col-md-4\">\n        <div class=\"blog-box card h-100 text-center exco-box pb-5 pt-4\">\n          <img src=\"assets/images/excos/5.jpg\" width=\"100%\" class=\"transition mt-4 mb-4\" />\n          <h4 class=\"blog-title mb-2\">Haj.Rashidat Oluremi Sani</h4>\n          <span class=\"blog-date\">Welfare/Organising Secretary</span>\n        </div>\n      </div>\n      <div class=\"mb-4 col-12 col-sm-6 col-md-4\">\n        <div class=\"blog-box card h-100 text-center exco-box pb-5 pt-4\">\n          <img src=\"assets/images/excos/4.jpg\" width=\"100%\" class=\"transition mt-4 mb-4\" />\n          <h4 class=\"blog-title mb-2\">Obanla-amoo flourish Busola</h4>\n          <span class=\"blog-date\">National Treasurer</span>\n        </div>\n      </div>\n      <div class=\"mb-4 col-12 col-sm-6 col-md-4\">\n        <div class=\"blog-box card h-100 text-center exco-box pb-5 pt-4\">\n          <img src=\"assets/images/excos/3.jpg\" width=\"100%\" class=\"transition mt-4 mb-4\" />\n          <h4 class=\"blog-title mb-2\">Bishop Jerry Eze</h4>\n          <span class=\"blog-date\">Legal Advisor 2</span>\n        </div>\n      </div>\n      <div class=\"mb-4 col-12 col-sm-6 col-md-4\">\n        <div class=\"blog-box card h-100 text-center exco-box pb-5 pt-4\">\n          <img src=\"assets/images/excos/2.jpg\" width=\"100%\" class=\"transition mt-4 mb-4\" />\n          <h4 class=\"blog-title mb-2\"></h4>\n          <span class=\"blog-date\"></span>\n        </div>\n      </div>\n      <div class=\"mb-4 col-12 col-sm-6 col-md-4\">\n        <div class=\"blog-box card h-100 text-center exco-box pb-5 pt-4\">\n          <img src=\"assets/images/excos/1.jpg\" width=\"100%\" class=\"transition mt-4 mb-4\" />\n          <h4 class=\"blog-title mb-2\"></h4>\n          <span class=\"blog-date\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"container\">\n    <header class=\"header\">\n      <span>Why join us</span>\n      <h2>100% SUPPORT FOR MEMBERS WELFARE</h2>\n      <p>As the official and flagship organization of private school owners in Nigeria, we constantly building an\n        organization that puts it's members welfare at the core center of our decision making process. </p>\n    </header>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row position-relative\">\n      <div class=\"col-sm-4\">\n        <div class=\"why-item\">\n          <i class=\"fas why-item-icon fa-handshake\"></i>\n          <span class=\"why-item-subtitle\">Members welfare</span>\n          <h4>100% Support for Member's welfare</h4>\n          <p>APSON creates an enabling environment to protect her members from undue harassment, hindrance or\n            encumbrances.</p>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"why-item\">\n          <i class=\"fas why-item-icon fa-map-marked-alt\"></i>\n          <span class=\"why-item-subtitle\">School directory</span>\n          <h4>Get your schools discovered</h4>\n          <p>APSON provides an online platform where member schools are freely advertised, making easy for the public to\n            discover your schools.</p>\n          <a routerLink=\"/schools\" class=\"blog-link-more\">Learn more</a>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"why-item\">\n          <i class=\"fas why-item-icon fa-laptop\"></i>\n          <span class=\"why-item-subtitle\">getsmati.com</span>\n          <h4>Free school management software</h4>\n          <p>Make it easy for your students to pay fees, get results, connect with their classmates with our state of\n            the art student management system.</p>\n          <a [href]=\"'https://www.getsmati.com'\" class=\"blog-link-more\" target=\"_blank\">Learn more</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"section bg-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"mb-4 col-sm-6 col-12\">\n        <div class=\"intro-box overlay bg-news card h-100\">\n          <div>\n            <span>Our publications</span>\n            <h3>News &amp; Events</h3>\n            <p>Stay updated with news, events and publications from APSON.</p>\n            <a routerLink=\"/blog\" class=\"btn-brand\">Get updated</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"mb-4 col-sm-6 col-12\">\n        <div class=\"intro-box overlay bg-schools card h-100\">\n          <div>\n            <span>Our schools</span>\n            <h3>Member schools</h3>\n            <p>Get direct access to the best private schools in Nigeria.</p>\n            <a routerLink=\"/schools\" class=\"btn-brand\">Find a school</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/blogs/blogs.component.html":
/*!********************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/blogs/blogs.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero-section section bg-contact overlay contact-section\">\n  <div class=\"container-fluid position-relative\">\n    <h1 class=\"text-center\">Publications</h1>\n  </div>\n</section>\n<section class=\"nav-section\">\n  <div class=\"container-fluid\">\n    <ul class=\"nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/blog\" routerLinkActive=\"active\"\n          [routerLinkActiveOptions]=\"{exact: true}\">All</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/blog/news/\" routerLinkActive=\"active\">News/Events</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/blog/publications/\" routerLinkActive=\"active\">Publications</a>\n      </li>\n    </ul>\n  </div>\n</section>\n<section class=\"section bg-grey\">\n  <div class=\"container-fluid\">\n    <div class=\"row blog-slider boxed-row\">\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100 \">\n          <span class=\"blog-category bg-cat-news\">News</span>\n          <a routerLink=\"/blog/998345\" class=\"link-cover\"></a>\n          <div class=\"blog-image-wrapper\">\n            <img src=\"assets/images/limbo/zach-vessels-1284924-unsplash.jpg\" width=\"100%\" class=\"blog-image\" />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">How to start a private school in Nigeria</h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a routerLink=\"/blog/9987456\" class=\"link-cover\"></a>\n          <span class=\"blog-category bg-cat-publication\">Publication</span>\n          <div class=\"blog-image-wrapper\">\n            <img src=\"assets/images/limbo/joshua-oluwagbemiga-1435064-unsplash.jpg\" width=\"100%\" class=\"blog-image\" />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">How to start a private school in Nigeria.</h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a routerLink=\"/blog/994343\" class=\"link-cover\"></a>\n          <span class=\"blog-category bg-cat-event\">Event</span>\n          <div class=\"blog-image-wrapper\">\n            <img src=\"assets/images/limbo/annie-spratt-1215936-unsplash.jpg\" width=\"100%\" class=\"blog-image\" />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">Register for the 2019 Education for all </h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a class=\"link-cover\" routerLink=\"/blog/994343\"></a>\n          <span class=\"blog-category bg-cat-event\">Event</span>\n          <div class=\"blog-image-wrapper\">\n            <img src=\"assets/images/limbo/santi-vedri-707620-unsplash.jpg\" width=\"100%\" class=\"blog-image\" />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">Register for the 2019 Education for all </h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a routerLink=\"/blog/994343\" class=\"link-cover\"></a>\n          <span class=\"blog-category bg-cat-publication\">Publication</span>\n          <div class=\"blog-image-wrapper\">\n            <img src=\"assets/images/limbo/zach-vessels-1285339-unsplash.jpg\" width=\"100%\" class=\"blog-image\" />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">Register for the 2019 Education for all </h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a routerLink=\"/blog/994343\" class=\"link-cover\"></a>\n          <span class=\"blog-category bg-cat-news\">News</span>\n          <div class=\"blog-image-wrapper\">\n            <img src=\"assets/images/limbo/benny-jackson-222664-unsplash.jpg\" width=\"100%\" class=\"blog-image\" />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">Register for the 2019 Education for all </h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/contact-box/contact-box.component.html":
/*!********************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/contact-box/contact-box.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n  class=\"contact-form form\"\n  [formGroup]=\"formGroup\"\n  (submit)=\"sendMessage()\"\n>\n  <lib-alert\n    [message]=\"response.message\"\n    [title]=\"response.title\"\n    [type]=\"response.type\"\n    *ngIf=\"!hideAlert\"\n  ></lib-alert>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <lib-input\n        name=\"name\"\n        type=\"text\"\n        title=\"Your name\"\n        [formData]=\"formGroup\"\n        invalidText=\"Your name is required\"\n      ></lib-input>\n    </div>\n    <div class=\"col-sm-6\">\n      <div class=\"form-group\">\n        <label>Subject</label>\n        <select\n          id=\"subject\"\n          class=\"form-control custom-select\"\n          name=\"subject\"\n          formControlName=\"subject\"\n        >\n          <option value=\"Enquiry\">Enquiry</option>\n          <option value=\"Complaint\">Complaint</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-sm-6\">\n      <lib-input\n        name=\"email\"\n        type=\"email\"\n        title=\"Email\"\n        [formData]=\"formGroup\"\n        invalidText=\"A valid email address is required\"\n      ></lib-input>\n    </div>\n    <div class=\"col-sm-6\">\n      <lib-input\n        name=\"phone\"\n        type=\"tel\"\n        title=\"Phone\"\n        [formData]=\"formGroup\"\n        invalidText=\"Phone number is required\"\n      ></lib-input>\n    </div>\n  </div>\n  <lib-input\n    name=\"message\"\n    type=\"textarea\"\n    title=\"Message\"\n    [formData]=\"formGroup\"\n    invalidText=\"Enter the message you wish to send.\"\n  ></lib-input>\n  <div class=\"mt-4\">\n    <lib-submit-button\n      text=\"Send Message\"\n      [disabled]=\"isBusy || formGroup.invalid\"\n      [isBusy]=\"isBusy\"\n    ></lib-submit-button>\n  </div>\n</form>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero-section section bg-contact overlay contact-section\">\n  <div class=\"container-fluid position-relative\">\n    <h1 class=\"text-center\">Contact us</h1>\n  </div>\n</section>\n<section class=\"section contact-section\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-2 col-md-2 d-md-block d-none\">\n        <h3 class=\"contact-section-subtitle\">Contact Details:</h3>\n      </div>\n      <div class=\"col-md-4 col-sm-12\">\n        <h2 class=\"text-uppercase\">APSON Headquarters</h2>\n        <p>\n          No. 2 Etete road, Off Adesuwa Grammer School road, Benin City, Edo\n          state, Nigeria\n        </p>\n      </div>\n      <div class=\"col-md-3 col-sm-12\">\n        <h2 class=\"text-uppercase\">Email</h2>\n        <p>\n          <a [href]=\"'mailto:support@apsonigeria.org'\"\n            >support@apsonigeria.org</a\n          >\n        </p>\n      </div>\n      <div class=\"col-md-3 col-sm-12\" #scrollView>\n        <h2 class=\"text-uppercase\">Phone</h2>\n        <p><a [href]=\"'tel:+2348094561245'\">+234 (0)809 456 1245</a></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid contact-form-wrapper\">\n    <div class=\"row\">\n      <div class=\"col-lg-2 col-md-2\">\n        <h3 class=\"contact-section-subtitle subtitle\">Write Us:</h3>\n      </div>\n      <div class=\"col-sm-12 col-md-10\">\n        <app-contact-box [scrollView]=\"scrollView\"></app-contact-box>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!**********************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-12 col-md-6\">\n        <h5 class=\"font-weight-bold text-uppercase\">Organizaton History</h5>\n        <p>Founded in 1995, the <strong>Association of Private School Owners of Nigeria</strong> was created to improve\n          the standard of quality eduction in Nigeria and promote the interest of proprietors of private schools and\n          other NGOs engaged in education related matters by creating a platform where members can function without any\n          hindrance. <a routerLink=\"/about\" class=\"blog-link-more\">Read more...</a></p>\n      </div>\n      <div class=\"col-sm-6 col-12 col-md-3\">\n        <h5 class=\"font-weight-bold text-uppercase\">Quick Links</h5>\n        <ul class=\"list-unstyled\">\n          <li>\n            <a routerLink=\"/\">Home</a>\n          </li>\n          <li>\n            <a routerLink=\"/blog\">Publications</a>\n          </li>\n          <li>\n            <a routerLink=\"/schools\">Member schools</a>\n          </li>\n          <li>\n            <a routerLink=\"/login\">Member login</a>\n          </li>\n          <li>\n            <a [href]=\"'https://www.getsmati.com'\" target=\"_blank\">getsmati.com</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-6 col-md-3 col-12\">\n        <h5 class=\"font-weight-bold text-uppercase\">Support</h5>\n        <ul class=\"list-unstyled\">\n          <li>\n            <a routerLink=\"/contact\">Contact</a>\n          </li>\n          <li>\n            <a routerLink=\"/terms\">Terms &amp; Conditions</a>\n          </li>\n          <li>\n            <a routerLink=\"/privacy\">Privacy Policy</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"copyright\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-9\">\n          <p>&copy; 2019 Association of Private School Owners of Nigeria. All Rights Reserved</p>\n        </div>\n        <div class=\"col-sm-3 text-center\">\n          <a [href]=\"'https://www.facebook.com/apsonigeria'\" class=\"social-item facebook\" target=\"_blank\"><i\n              class=\"fab fa-facebook-f transition\"></i></a>\n          <a [href]=\"'https://www.twitter.com/apsonigeria'\" class=\"social-item facebook twitter\" target=\"_blank\"><i\n              class=\"fab fa-twitter transition\"></i></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/forgot-password/forgot-password.component.html ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-grey\">\n  <div class=\"container-fluid contact-form-wrapper\">\n    <div\n      class=\"shadow-sm bg-white login-wrapper position-relative overflow-hidden\"\n    >\n      <div class=\"row position-static\">\n        <div class=\"column-left col-12 col-md-5 colum-left bg-login\">\n          <div class=\"h-100\">\n            <lib-back-button></lib-back-button>\n            <h1 class=\"text-white font-weight-bold column-left-title\">\n              Recover Password!\n            </h1>\n          </div>\n        </div>\n        <div class=\"col-md-7 offset-md-5 col-12\">\n          <form role=\"form\" class=\"form pl-4 position-relative pr-4 pt-5\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Email Address</label>\n              <input type=\"text\" class=\"form-control\" id=\"name\" name=\"email\" />\n            </div>\n            <div class=\"text-center mt-4 btn-curved w-100\">\n              <lib-submit-button\n                [text]=\"'Send me recovery link'\"\n              ></lib-submit-button>\n            </div>\n          </form>\n          <div class=\"text-center mt-5 login-footer\">\n            <p class=\"text-muted\">\n              Back to\n              <a\n                routerLink=\"/login\"\n                class=\"d-inline-block btn-underlined blog-link-more ml-1\"\n                >Log in</a\n              >\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!**********************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/header/header.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-top alert sticky-top\">\n  <div class=\"container-fluid position-relative\">\n    <span><strong>News!</strong>Register for the 2019 Education for All Conference. <a routerLink=\"/blog/9945645\"\n        class=\"d-inline-block\">Click here</a></span>\n  </div>\n</div>\n<nav class=\"navbar navbar-light bg-light sticky-top navbar-expand-lg\" id=\"navbar\">\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" routerLink=\"/\">\n      <img src=\"assets/images/icons/icon.jpg\" width=\"40\" />\n      <span>APSON</span>\n    </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler8\"\n      aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarToggler8\">\n      <ul class=\"navbar-nav mt-2 mt-lg-0 ml-auto \">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/about\">About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/schools\">Schools</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/blog\">Publications</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-brand\" routerLink=\"/register\">Become a member</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!******************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/home/home.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero overlay\">\n  <div class=\"container-fluid\">\n    <div class=\"hero-inner\">\n      <h1>Building a legacy of quality education in Nigeria</h1>\n      <p>\n        APSON is the umbrella body of all private school owners and NGOs in\n        education related matters in Nigeria.\n      </p>\n      <div>\n        <a class=\"btn-brand btn-bordered btn-bordered-white\" routerLink=\"/about\"\n          >About us</a\n        >\n        <a class=\"btn-brand\" routerLink=\"/register\">Become a member</a>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"container\">\n    <header class=\"header\">\n      <span>What we do</span>\n      <h2>Promoting education for national development</h2>\n      <p>\n        <strong>The Association of Private School Owners of Nigeria</strong>\n        (APSON) was created to improve the standard of quality eduction in\n        Nigeria and promote the interest of proprietors of private schools by\n        creating a platform where members can function without any hindrance.\n      </p>\n    </header>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"mb-4 col-md-4 col-12\">\n        <div class=\"intro-box overlay bg-about-us card h-100\">\n          <div>\n            <span>Who we are</span>\n            <h3>About Us</h3>\n            <p>\n              Learn about our organization, our vision, mission and executives.\n            </p>\n            <a routerLink=\"/about\" class=\"btn-brand\">Learn about us</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"mb-4 col-sm-6 col-md-4 col-12\">\n        <div class=\"intro-box overlay bg-news card h-100\">\n          <div>\n            <span>Our publications</span>\n            <h3>News &amp; Events</h3>\n            <p>Stay updated with news, events and publications from APSON.</p>\n            <a routerLink=\"/blog\" class=\"btn-brand\">Get updated</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"mb-4 col-sm-6 col-md-4 col-12\">\n        <div class=\"intro-box overlay bg-schools card h-100\">\n          <div>\n            <span>Our schools</span>\n            <h3>Member schools</h3>\n            <p>Get direct access to the best private schools in Nigeria.</p>\n            <a routerLink=\"/schools\" class=\"btn-brand\">Find a school</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"section bg-grey\">\n  <div class=\"container-fluid position-relative\">\n    <header class=\"header-left\">\n      <span class=\"font-weight-bold position-relative pl-5\">Publicatons,</span>\n      <h2 class=\"font-weight-bold text-uppercase\">News & Events</h2>\n      <a routerLink=\"/blog\" class=\"blog-link-more float-right\"\n        >VIEW ALL <i class=\"fas fa-arrow-right\"></i\n      ></a>\n    </header>\n    <div class=\"row blog-slider boxed-row\">\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100 \">\n          <span class=\"blog-category bg-cat-news\">News</span>\n          <a routerLink=\"/blog/994343\" class=\"link-cover\"></a>\n          <div class=\"blog-image-wrapper\">\n            <img\n              src=\"assets/images/limbo/zach-vessels-1284924-unsplash.jpg\"\n              width=\"100%\"\n              class=\"blog-image\"\n            />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">How to start a private school in Nigeria</h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a routerLink=\"/blog/994343\" class=\"link-cover\"></a>\n          <span class=\"blog-category bg-cat-publication\">Publication</span>\n          <div class=\"blog-image-wrapper\">\n            <img\n              src=\"assets/images/limbo/joshua-oluwagbemiga-1435064-unsplash.jpg\"\n              width=\"100%\"\n              class=\"blog-image\"\n            />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">\n              How to start a private school in Nigeria.\n            </h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a routerLink=\"/blog/994343\" class=\"link-cover\"></a>\n          <span class=\"blog-category bg-cat-event\">Event</span>\n          <div class=\"blog-image-wrapper\">\n            <img\n              src=\"assets/images/limbo/annie-spratt-1215936-unsplash.jpg\"\n              width=\"100%\"\n              class=\"blog-image\"\n            />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">Register for the 2019 Education for all</h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a class=\"link-cover\" routerLink=\"/blog/994343\"></a>\n          <span class=\"blog-category bg-cat-event\">Event</span>\n          <div class=\"blog-image-wrapper\">\n            <img\n              src=\"assets/images/limbo/santi-vedri-707620-unsplash.jpg\"\n              width=\"100%\"\n              class=\"blog-image\"\n            />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">Register for the 2019 Education for all</h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a routerLink=\"/blog/994343\" class=\"link-cover\"></a>\n          <span class=\"blog-category bg-cat-publication\">Publication</span>\n          <div class=\"blog-image-wrapper\">\n            <img\n              src=\"assets/images/limbo/zach-vessels-1285339-unsplash.jpg\"\n              width=\"100%\"\n              class=\"blog-image\"\n            />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">Register for the 2019 Education for all</h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a routerLink=\"/blog/994343\" class=\"link-cover\"></a>\n          <span class=\"blog-category bg-cat-news\">News</span>\n          <div class=\"blog-image-wrapper\">\n            <img\n              src=\"assets/images/limbo/benny-jackson-222664-unsplash.jpg\"\n              width=\"100%\"\n              class=\"blog-image\"\n            />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">Register for the 2019 Education for all</h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <button type=\"button\" class=\"btn blog-control transition\">\n      <i class=\"fas fa-arrow-left\"></i>\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn blog-control transition blog-control-right\"\n    >\n      <i class=\"fas fa-arrow-right\"></i>\n    </button>\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"container\">\n    <header class=\"header\">\n      <span>Why join us</span>\n      <h2>100% SUPPORT FOR MEMBERS WELFARE</h2>\n      <p>\n        As the official and flagship organization of private school owners in\n        Nigeria, we constantly building an organization that puts it's members\n        welfare at the core center of our decision making process.\n      </p>\n    </header>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row position-relative\">\n      <div class=\"col-sm-4\">\n        <div class=\"why-item\">\n          <i class=\"fas why-item-icon fa-handshake\"></i>\n          <span class=\"why-item-subtitle\">Members welfare</span>\n          <h4>100% Support for Member's welfare</h4>\n          <p>\n            APSON creates an enabling environment to protect her members from\n            undue harassment, hindrance or encumbrances.\n          </p>\n          <a class=\"blog-link-more\" routerLink=\"/about\">Learn more</a>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"why-item\">\n          <i class=\"fas why-item-icon fa-map-marked-alt\"></i>\n          <span class=\"why-item-subtitle\">School directory</span>\n          <h4>Get your schools discovered</h4>\n          <p>\n            APSON provides an online platform where member schools are freely\n            advertised, making easy for the public to discover your schools.\n          </p>\n          <a routerLink=\"/schools\" class=\"blog-link-more\">Learn more</a>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"why-item\">\n          <i class=\"fas why-item-icon fa-laptop\"></i>\n          <span class=\"why-item-subtitle\">getsmati.com</span>\n          <h4>Free school management software</h4>\n          <p>\n            Make it easy for your students to pay fees, get results, connect\n            with their classmates with our state of the art student management\n            system.\n          </p>\n          <a\n            [href]=\"'https://www.getsmati.com'\"\n            class=\"blog-link-more\"\n            target=\"_blank\"\n            >Learn more</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"section bg-grey\">\n  <div class=\"container-fluid position-relative\">\n    <header class=\"header-left\">\n      <span class=\"font-weight-bold position-relative pl-5\">Find Schools,</span>\n      <h2 class=\"font-weight-bold text-uppercase\">\n        Best private schools in Nigeria\n      </h2>\n    </header>\n    <lib-school-box></lib-school-box>\n    <div class=\"text-center btn-footer-grp\">\n      <a routerLink=\"/schools\" class=\"btn-brand\">Discover more schools</a>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!********************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/login/login.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-grey\">\n  <div class=\"container-fluid contact-form-wrapper\">\n    <div\n      class=\"shadow-sm bg-white login-wrapper position-relative overflow-hidden\"\n    >\n      <div class=\"row position-static\">\n        <div class=\"column-left col-12 col-md-5 colum-left bg-login\">\n          <div class=\"h-100\">\n            <lib-back-button></lib-back-button>\n            <h1 class=\"text-white font-weight-bold column-left-title\">\n              Log in to APSON\n            </h1>\n          </div>\n        </div>\n        <div class=\"col-md-7 offset-md-5 col-12\">\n          <form\n            class=\"form pl-4 position-relative pr-4 pt-5\"\n            (ngSubmit)=\"onLogin()\"\n            novalidate\n          >\n            <lib-alert\n              [title]=\"response.title\"\n              [type]=\"response.type\"\n              [message]=\"response.message\"\n              *ngIf=\"!hideAlert\"\n            ></lib-alert>\n            <div class=\"form-group\">\n              <label for=\"username\">Email Address or Phone Number</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"name\"\n                [formControl]=\"formData.get('username')\"\n                [value]=\"formData.get('username').value\"\n              />\n              <span\n                class=\"display-error\"\n                *ngIf=\"\n                  formData.get('username').invalid &&\n                  (formData.get('username').dirty ||\n                    formData.get('username').touched)\n                \"\n                >Enter your email or phone number</span\n              >\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input\n                type=\"password\"\n                class=\"form-control\"\n                id=\"password\"\n                [formControl]=\"formData.get('password')\"\n                [value]=\"formData.get('password').value\"\n              />\n              <span\n                class=\"display-error\"\n                *ngIf=\"\n                  formData.get('password').invalid &&\n                  (formData.get('password').dirty ||\n                    formData.get('password').touched)\n                \"\n                >Password is required</span\n              >\n            </div>\n            <div class=\"text-center\">\n              <lib-submit-button\n                [text]=\"'Login to APSON'\"\n                [isBusy]=\"isBusy\"\n                [disabled]=\"formData.invalid\"\n              ></lib-submit-button>\n            </div>\n            <div class=\"text-center mt-5\">\n              <a\n                routerLink=\"/forgot-password/\"\n                class=\"d-inline-block text-muted btn-underlined\"\n                ><small>Forgot Password?</small></a\n              >\n            </div>\n          </form>\n          <div class=\"text-center mt-5 login-footer\">\n            <p class=\"text-muted\">\n              Not a member yet?\n              <a\n                routerLink=\"/register/\"\n                class=\"d-inline-block btn-underlined blog-link-more ml-1\"\n                >Register Now</a\n              >\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section min-vh-100\">\n  <div class=\"container-fluid text-center mt-3 pt-5\">\n    <img src=\"assets/images/icons/not-found.svg\" class=\"img-fluid\" width=\"300\" />\n    <h1 class=\"text-secondary font-weight-bold mt-5 text-md\">PAGE NOT FOUND</h1>\n    <h6 class=\"mt-2\">\n      We can't seem to find the page you're looking for.</h6>\n    <a class=\"nav-link btn-brand mt-5 mb-5\" routerLink=\"/\">Back to home page</a>\n  </div>\n</section>"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/privacy/privacy.component.html":
/*!************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/privacy/privacy.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero-section section\" data-pg-collapsed>\n  <div class=\"container-fluid position-relative\">\n    <h1 class=\"text-uppercase text-center\">Privacy Policy</h1>\n  </div>\n</section>\n<section class=\"section terms-section\" data-pg-collapsed>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"terms-intro\">\n          <div>\n            <h4>1. Collection of Data</h4>\n            <p>\n              When you register, log in or subscribe to our newsletter, we\n              collect the personal information you give us such as your name,\n              address and email address etc.\n            </p>\n            <p>\n              When you browse our site, we also automatically receive your\n              computer’s internet protocol (IP) address in order to provide us\n              with information that helps us learn about your browser and\n              operating system. Email marketing (if applicable): With your\n              permission, we may send your emails about our store, new products\n              and other updates.\n            </p>\n          </div>\n          <div>\n            <h4>2. Sharing of Data</h4>\n            <p>\n              Your personal details are not rented or sold to any external\n              companies or advertisers under any circumstances.\n            </p>\n            <p>\n              In general, the third-party providers used by us will only\n              collect, use and disclose your information to the extent necessary\n              to allow them to perform the services they provide to us. However,\n              certain third-party service providers, such as payment gateways\n              and other payment transaction processors, have their own privacy\n              policies in respect to the information we are required to provide\n              to them for your purchase-related transactions.\n            </p>\n            <p>\n              For these providers, we recommend that you read their privacy\n              policies so you can understand the manner in which your personal\n              information will be handled by these providers. In particular,\n              remember that certain providers may be located in or have\n              facilities that are located a different jurisdiction than either\n              you or us. So if you elect to proceed with a transaction that\n              involves the services of a third-party service provider, then your\n              information may become subject to the laws of the jurisdiction(s)\n              in which that service provider or its facilities are located.\n            </p>\n            <p>\n              Once you leave our store’s website or are redirected to a\n              third-party website or application, you are no longer governed by\n              this Privacy Policy or our website’s\n              <a href=\"terms.html\" class=\"blog-link-more\">Terms of Service</a>.\n            </p>\n            <p>\n              When you click on links on our store, they may direct you away\n              from our site. We are not responsible for the privacy practices of\n              other sites and encourage you to read their privacy statements.\n            </p>\n            <p>\n              We may disclose your personal information if we are required by\n              law to do so or if you violate our Terms of Service.\n            </p>\n          </div>\n          <div>\n            <h4>3. Security</h4>\n            <p>\n              To protect your personal information, we take reasonable\n              precautions and follow industry best practices to make sure it is\n              not inappropriately lost, misused, accessed, disclosed, altered or\n              destroyed.\n            </p>\n            <p>\n              If you provide us with your credit card information, the\n              information is encrypted using secure socket layer technology\n              (SSL) and stored with a AES-256 encryption. Although no method of\n              transmission over the Internet or electronic storage is 100%\n              secure, we follow all PCI-DSS requirements and implement\n              additional generally accepted industry standards.\n            </p>\n          </div>\n          <div>\n            <h4>4. Cookies</h4>\n            <p>\n              Like many web sites, we use \"Cookies,\" which are data files placed\n              on a web browser when it is used to visit the Sites to facilitate\n              site navigation and to personalize your experience, including\n              tailoring advertisements.\n            </p>\n            <p>\n              The information we collect is what you provide us with when you\n              signup for a newsletter, or when making a purchase. For example,\n              this may be your name, address, or contact information. Cookies\n              can also identify session information like the pages you view, how\n              long your session was, transactions, and your basic demographic\n              information (origin, gender, age).\n            </p>\n            <p>\n              Disabling cookies on your device is possible by changing your\n              browser settings. You can use opt-out programs, like ‘NAI’s\n              Consumer opt-out’ or ‘Google Analytics opt-out browser add-on,’ to\n              prevent cookies from being used. If you decide to do this, know\n              that our site may not function properly.\n            </p>\n          </div>\n          <div>\n            <h4>5. Changes to this Privacy Policy</h4>\n            <p>\n              We reserve the right to modify this privacy policy at any time, so\n              please review it frequently. Changes and clarifications will take\n              effect immediately upon their posting on the website. If we make\n              material changes to this policy, we will notify you here that it\n              has been updated, so that you are aware of what information we\n              collect, how we use it, and under what circumstances, if any, we\n              use and/or disclose it.\n            </p>\n            <p>\n              If our store is acquired or merged with another company, your\n              information may be transferred to the new owners so that we may\n              continue to sell products to you.\n            </p>\n          </div>\n          <div>\n            <h4>Contact Details</h4>\n            <p>\n              You retain the right to ask for your data. If there is something\n              incorrect you can have it changed or removed. If you wish to\n              cancel your account or request that we no longer use your Personal\n              Information to provide you service, you may contact us by clicking\n              <a routerLink=\"/contact\">here</a> or send us an email using\n              <a [href]=\"'mailto:support@apsonigeria.org'\"\n                >support@apsonigeria.org</a\n              >\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!**************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/register/register.component.html ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-grey min-vh-100\">\n  <div class=\"container-fluid contact-form-wrapper\">\n    <div\n      class=\"shadow-sm bg-white login-wrapper position-relative overflow-hidden mw-100\"\n    >\n      <div class=\"row position-static\">\n        <div class=\"column-left col-12 col-md-5 colum-left bg-register\">\n          <div class=\"h-100\">\n            <lib-back-button></lib-back-button>\n            <h1 class=\"text-white font-weight-bold column-left-title mt-3\">\n              Register with APSON\n            </h1>\n          </div>\n        </div>\n        <div class=\"col-md-7 offset-md-5 col-12\">\n          <form\n            (ngSubmit)=\"onRegisterMember()\"\n            role=\"form\"\n            class=\"form pl-4 position-relative pr-4 pt-5 register\"\n          >\n            <lib-alert\n              [title]=\"response.title\"\n              [type]=\"response.type\"\n              [message]=\"response.message\"\n              *ngIf=\"!hideAlert\"\n            ></lib-alert>\n            <lib-input\n              [title]=\"'Full Name'\"\n              [type]=\"'text'\"\n              [formData]=\"formData\"\n              [name]=\"'name'\"\n              [invalidText]=\"'Your name is required'\"\n            ></lib-input>\n            <div class=\"form-group\">\n              <label for=\"state\">State of residence</label>\n              <select\n                class=\"form-control custom-select\"\n                [formControl]=\"formData.get('state')\"\n                [value]=\"formData.get('state').value\"\n              >\n                <option value=\"\">-- Choose one --</option>\n                <option value=\"0\">Abia</option>\n                <option value=\"1\">Adamawa</option>\n                <option value=\"2\">Akwa Ibom</option>\n                <option value=\"3\">Anambra</option>\n                <option value=\"4\">Bauchi</option>\n                <option value=\"5\">Bayelsa</option>\n                <option value=\"6\">Benue</option>\n                <option value=\"7\">Borno</option>\n                <option value=\"8\">Cross River</option>\n                <option value=\"9\">Delta</option>\n                <option value=\"10\">Ebonyi</option>\n                <option value=\"11\">Edo</option>\n                <option value=\"12\">Ekiti</option>\n                <option value=\"13\">Enugu</option>\n                <option value=\"14\">FCT</option>\n                <option value=\"15\">Gombe</option>\n                <option value=\"16\">Imo</option>\n                <option value=\"17\">Jigawa</option>\n                <option value=\"18\">Kaduna</option>\n                <option value=\"19\">Kano</option>\n                <option value=\"20\">Katsina</option>\n                <option value=\"21\">Kebbi</option>\n                <option value=\"22\">Kogi</option>\n                <option value=\"23\">Kwara</option>\n                <option value=\"24\">Lagos</option>\n                <option value=\"25\">Nasarawa</option>\n                <option value=\"26\">Niger</option>\n                <option value=\"27\">Ogun</option>\n                <option value=\"28\">Ondo</option>\n                <option value=\"29\">Osun</option>\n                <option value=\"30\">Oyo</option>\n                <option value=\"31\">Plateau</option>\n                <option value=\"32\">Rivers</option>\n                <option value=\"33\">Sokoto</option>\n                <option value=\"34\">Taraba</option>\n                <option value=\"35\">Yobe</option>\n                <option value=\"36\">Zamfara</option>\n              </select>\n              <span\n                class=\"display-error\"\n                *ngIf=\"\n                  formData.get('state').invalid &&\n                  (formData.get('state').dirty || formData.get('state').touched)\n                \"\n                >Your state is required.</span\n              >\n            </div>\n            <lib-input\n              [title]=\"'Email Address'\"\n              [type]=\"'email'\"\n              [formData]=\"formData\"\n              [name]=\"'email'\"\n              [invalidText]=\"'Enter a valid email address'\"\n            ></lib-input>\n            <div class=\"form-group\">\n              <label for=\"sex\" class=\"d-block\">Sex</label>\n              <div class=\"custom-control custom-radio d-inline-block mr-5\">\n                <input\n                  id=\"sexMale\"\n                  [formControl]=\"formData.get('sex')\"\n                  value=\"Male\"\n                  type=\"radio\"\n                  class=\"custom-control-input\"\n                />\n                <label\n                  class=\"custom-control-label font-weight-normal\"\n                  for=\"sexMale\"\n                  >Male</label\n                >\n              </div>\n              <div class=\"custom-control custom-radio d-inline-block\">\n                <input\n                  id=\"sexFemale\"\n                  [formControl]=\"formData.get('sex')\"\n                  value=\"Female\"\n                  type=\"radio\"\n                  class=\"custom-control-input\"\n                />\n                <label\n                  class=\"custom-control-label font-weight-normal\"\n                  for=\"sexFemale\"\n                  >Female</label\n                >\n              </div>\n            </div>\n            <lib-input\n              [title]=\"'Phone number'\"\n              [type]=\"'tel'\"\n              [formData]=\"formData\"\n              [name]=\"'phone'\"\n              [invalidText]=\"'Phone number is required'\"\n            ></lib-input>\n            <lib-input\n              [title]=\"'Choose a password'\"\n              [type]=\"'password'\"\n              [formData]=\"formData\"\n              [name]=\"'password'\"\n              [invalidText]=\"'Choose a password'\"\n            ></lib-input>\n            <div class=\"text-center mt-4 btn-curved w-100\">\n              <lib-submit-button\n                [text]=\"'Register with APSON'\"\n                [isBusy]=\"isBusy\"\n                [disabled]=\"formData.invalid\"\n              ></lib-submit-button>\n            </div>\n          </form>\n          <div class=\"text-center mt-5 login-footer\">\n            <p class=\"text-muted\">\n              Already a member?\n              <a\n                routerLink=\"/login\"\n                class=\"d-inline-block btn-underlined blog-link-more ml-1\"\n                >Login</a\n              >\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/reset-password/reset-password.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/reset-password/reset-password.component.html ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-grey\">\n  <div class=\"container-fluid contact-form-wrapper\">\n    <div\n      class=\"shadow-sm bg-white login-wrapper position-relative overflow-hidden\"\n    >\n      <div class=\"row position-static\">\n        <div class=\"column-left col-12 col-md-5 colum-left bg-login\">\n          <div class=\"h-100\">\n            <a\n              routerLink=\"/login\"\n              class=\"link-back transition text-white d-inline-block mt-4\"\n              ><i class=\"fas fa-arrow-left\"></i\n            ></a>\n            <h1 class=\"text-white font-weight-bold column-left-title\">\n              Reset Password\n            </h1>\n          </div>\n        </div>\n        <div class=\"col-md-7 offset-md-5 col-12\">\n          <form role=\"form\" class=\"form pl-4 position-relative pr-4 pt-5\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">New Password</label>\n              <input\n                type=\"password\"\n                class=\"form-control\"\n                id=\"name\"\n                name=\"password\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Re-enter new password</label>\n              <input\n                type=\"password\"\n                class=\"form-control\"\n                id=\"name\"\n                name=\"password2\"\n              />\n            </div>\n            <div class=\"text-center mt-4 btn-curved w-100\">\n              <lib-submit-button\n                [text]=\"'Reset my password'\"\n              ></lib-submit-button>\n            </div>\n          </form>\n          <div class=\"text-center mt-5 login-footer\">\n            <p class=\"text-muted\">\n              Back to\n              <a\n                routerLink=\"/login\"\n                class=\"d-inline-block btn-underlined blog-link-more ml-1\"\n                >Login</a\n              >\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/schools/schools.component.html":
/*!************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/schools/schools.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero-section section overlay hero-school\">\n  <div class=\"container-fluid position-relative\">\n    <h1>Find the best private schools in Nigeria.</h1>\n    <div class=\"select-group form\">\n      <div class=\"row\">\n        <div class=\"col-md-4 col-12\">\n          <lib-simple-select\n            placeholder=\"All States\"\n            [data]=\"states\"\n            (whenSelected)=\"filterByState($event)\"\n          >\n          </lib-simple-select>\n        </div>\n        <div class=\"col-md-4 col-12\">\n          <lib-simple-select\n            placholder=\"All LGAs\"\n            (whenSelected)=\"filter('lga', $event)\"\n            [data]=\"lgas\"\n          ></lib-simple-select>\n        </div>\n        <div class=\"col-md-4 col-12\">\n          <div class=\"input-group\">\n            <lib-simple-select\n              placeholder=\"All types\"\n              [data]=\"types\"\n              (whenSelected)=\"filter('type', $event)\"\n            >\n            </lib-simple-select>\n            <div class=\"input-group-append\">\n              <a\n                (click)=\"scrollToResults(results)\"\n                class=\"btn btn-link input-group-text btn-brand scroll pointer\"\n              >\n                <i class=\"fas fa-arrow-down\"></i\n              ></a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"section bg-grey school-section-content\" id=\"results\" #results>\n  <div class=\"position-relative container-fluid\">\n    <lib-school-box\n      [schoolParams]=\"schoolParams\"\n      [size]=\"1000\"\n    ></lib-school-box>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/single-blog/single-blog.component.html":
/*!********************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/single-blog/single-blog.component.html ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section blog-post-section\">\n  <div class=\"container\">\n    <div class=\"blog-inner-content\">\n      <h1 class=\"blog-page-title blog-post-title\">\n        How to start a private school in Nigeria.\n      </h1>\n      <small class=\"blog-post-date\"\n        ><i class=\"fas fa-calendar-alt\"></i> July 4th, 2019</small\n      >\n      <img\n        src=\"assets/images/limbo/zach-vessels-1314101-unsplash.jpg\"\n        width=\"100%\"\n        class=\"rounded blog-cover-img\"\n      />\n      <div class=\"text-content\">\n        <p>\n          <strong>Pellentesque habitant morbi tristique</strong> senectus et\n          netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,\n          feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero\n          sit amet quam egestas semper.\n          <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo.\n          Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat\n          wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet,\n          wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum\n          rutrum orci, sagittis tempus lacus enim ac dui.\n          <a routerLink=\"#!\">Donec non enim</a> in turpis pulvinar facilisis. Ut\n          felis.\n        </p>\n        <h2>Header Level 2</h2>\n        <ol>\n          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n          <li>Aliquam tincidunt mauris eu risus.</li>\n        </ol>\n        <blockquote class=\"blockquote blockquote-primary\">\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus\n          magna. Cras in mi at felis aliquet congue. Ut a est eget ligula\n          molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis\n          mollis, tellus est malesuada tellus, at luctus turpis elit sit amet\n          quam. Vivamus pretium ornare est.\n        </blockquote>\n        <h3>Header Level 3</h3>\n        <p>\n          Pellentesque habitant morbi tristique senectus et netus et malesuada\n          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,\n          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam\n          egestas semper. Aenean ultricies mi vitae est. Mauris placerat\n          eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.\n          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet,\n          wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum\n          rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in\n          turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus\n          faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.\n          Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,\n          facilisis luctus, metus\n        </p>\n        <ul>\n          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n          <li>Aliquam tincidunt mauris eu risus.</li>\n        </ul>\n        <p>\n          <img\n            src=\"https://d19m59y37dris4.cloudfront.net/directory/1-2/img/photo/photo-1499695867787-121ffb7950bf.jpg\"\n            alt=\"Example blog post alt\"\n            class=\"img-fluid\"\n          />\n        </p>\n\n        <p>\n          Pellentesque habitant morbi tristique senectus et netus et malesuada\n          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,\n          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam\n          egestas semper. Aenean ultricies mi vitae est. Mauris placerat\n          eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.\n          Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet,\n          wisi.\n        </p>\n        <p>\n          Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum\n          orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis\n          pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus\n          faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.\n          Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,\n          facilisis luctus, metus\n        </p>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"section bg-grey\">\n  <div class=\"container-fluid position-relative\">\n    <header class=\"header-left\">\n      <h2 class=\"font-weight-bold text-uppercase\">Recommended for you</h2>\n      <a routerLink=\"/blog\" class=\"blog-link-more float-right\"\n        >VIEW ALL <i class=\"fas fa-arrow-right\"></i\n      ></a>\n    </header>\n    <div class=\"row blog-slider boxed-row\">\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100 \">\n          <span class=\"blog-category bg-cat-news\">News</span>\n          <a routerLink=\"/blog/983409\" class=\"link-cover\"></a>\n          <div class=\"blog-image-wrapper\">\n            <img\n              src=\"assets/images/limbo/zach-vessels-1284924-unsplash.jpg\"\n              width=\"100%\"\n              class=\"blog-image\"\n            />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">How to start a private school in Nigeria</h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a routerLink=\"/blog/983409\" class=\"link-cover\"></a>\n          <span class=\"blog-category bg-cat-publication\">Publication</span>\n          <div class=\"blog-image-wrapper\">\n            <img\n              src=\"assets/images/limbo/joshua-oluwagbemiga-1435064-unsplash.jpg\"\n              width=\"100%\"\n              class=\"blog-image\"\n            />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">\n              How to start a private school in Nigeria.\n            </h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a routerLink=\"/blog/983409\" class=\"link-cover\"></a>\n          <span class=\"blog-category bg-cat-event\">Event</span>\n          <div class=\"blog-image-wrapper\">\n            <img\n              src=\"assets/images/limbo/annie-spratt-1215936-unsplash.jpg\"\n              width=\"100%\"\n              class=\"blog-image\"\n            />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">Register for the 2019 Education for all</h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <button type=\"button\" class=\"btn blog-control transition\">\n      <i class=\"fas fa-arrow-left\"></i>\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn blog-control transition blog-control-right\"\n    >\n      <i class=\"fas fa-arrow-right\"></i>\n    </button>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/single-school/single-school.component.html":
/*!************************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/single-school/single-school.component.html ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"loading; else schoolTemplate\">\n  <lib-busy></lib-busy>\n</ng-container>\n<ng-template #schoolTemplate>\n  <section\n    class=\"hero-single-school\"\n    [style.backgroundImage]=\"getCover()\"\n  ></section>\n  <section class=\"section school-section\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-5\">\n          <div class=\"school-cta shadow sticky-top mb-5\">\n            <img [attr.src]=\"school.logo\" width=\"20\" class=\"school-badge\" />\n            <h1 class=\"mb-4 school-subtitle text-center\">\n              {{ school.name }}\n            </h1>\n            <ul class=\"fa-ul school-list\">\n              <li *ngIf=\"school.location\">\n                <i class=\"fas fa-map-marker-alt fa-li blog-link-more\"></i>\n                <a [href]=\"toMapAddress()\" target=\"_blank\">{{\n                  school.fullAddress\n                }}</a>\n              </li>\n              <li *ngIf=\"school.contact\">\n                <i\n                  class=\"fas fa-li fa-flip-horizontal fa-envelope blog-link-more\"\n                ></i>\n                <a [href]=\"toEmailAddress()\" class=\"text-overflow\">{{\n                  school.email\n                }}</a>\n              </li>\n              <li *ngIf=\"school.contact\">\n                <i\n                  class=\"fas fa-li fa-flip-horizontal fa-link blog-link-more\"\n                ></i>\n                <a\n                  [href]=\"school.website\"\n                  target=\"_blank\"\n                  class=\"text-overflow\"\n                  >{{ school.website }}</a\n                >\n              </li>\n              <li *ngIf=\"school.contact\">\n                <i\n                  class=\"fas fa-li fa-phone fa-flip-horizontal blog-link-more text-phone \"\n                ></i>\n                <a [href]=\"toPhone()\">{{ school.phone }}</a>\n              </li>\n            </ul>\n            <a\n              (click)=\"scrollToContact(contact)\"\n              class=\"btn-brand mt-4 w-100 pointer text-uppercase scroll\"\n              >Contact us</a\n            >\n          </div>\n        </div>\n        <div class=\"col-md-7 col-lg-8\">\n          <h4 class=\"mb-4 school-subtitle mt-4\">About Us</h4>\n          <ul class=\"list-inline text-sm mb-4 mt-4 school-summary\">\n            <li class=\"list-inline-item mr-3\">\n              <i class=\"fas blog-link-more fa-user-graduate\"></i>\n              {{ school.typeName }}\n            </li>\n            <li class=\"list-inline-item mr-3\">\n              <i class=\"fas fa-calendar-alt blog-link-more\"></i> Founded\n              {{ school.founded }}\n            </li>\n            <li class=\"list-inline-item mr-3\">\n              <i class=\"fas fa-users blog-link-more\"></i> Accepts\n              {{ getGender() }}\n            </li>\n          </ul>\n          <div class=\"school-details\">\n            <div\n              class=\"text-block text-muted font-weight-light text-sentence\"\n              [innerHTML]=\"school.details\"\n            ></div>\n          </div>\n          <div class=\"text-block\" *ngIf=\"school.amenities\">\n            <hr class=\"mt-5 mb-4\" />\n            <h2 class=\"school-subtitle mb-4\">Amenities</h2>\n            <ul class=\"list-unstyled text-muted school-summary mb-0\">\n              <li class=\"mb-2\" *ngIf=\"school.amenities.laboratory\">\n                <i class=\"fas mr-1 fa-bong blog-link-more\"></i>\n                <span class=\"text-sm\">Science Laboratory</span>\n              </li>\n              <li class=\"mb-2\" *ngIf=\"school.amenities.computer\">\n                <i class=\"fas mr-1 fa-desktop blog-link-more\"></i>\n                <span class=\"text-sm\">Computer Laboratory</span>\n              </li>\n              <li class=\"mb-2\" *ngIf=\"school.amenities.library\">\n                <i class=\"fas mr-1 fa-book blog-link-more\"></i>\n                <span class=\"text-sm\">Library</span>\n              </li>\n              <li class=\"mb-3\" *ngIf=\"school.amenities.vehicle\">\n                <i class=\"fas mr-1 fa-bus-alt blog-link-more\"></i>\n                <span class=\"text-sm\">School Vehicle</span>\n              </li>\n              <li class=\"mb-2\" *ngIf=\"school.amenities.boarding\">\n                <i class=\"fas mr-1 blog-link-more fa-house-damage\"></i>\n                <span class=\"text-sm\">Boarding Facility</span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"text-block\" *ngIf=\"school.gallery\">\n            <hr class=\"mb-4 mt-5\" />\n            <h2 class=\"mb-4 school-subtitle\">Gallery</h2>\n            <div class=\"card-columns\">\n              <div class=\"card\">\n                <img\n                  class=\"card-img-top\"\n                  src=\"assets/images/limbo/santi-vedri-707620-unsplash.jpg\"\n                  alt=\"Card image cap\"\n                />\n              </div>\n              <div class=\"card\" *ngFor=\"let image of school.gallery\">\n                <img\n                  class=\"card-img-top\"\n                  [attr.src]=\"image\"\n                  alt=\"{{\n                    school.name.concat(', ').concat(school.fullAddress)\n                  }}\"\n                />\n              </div>\n            </div>\n          </div>\n          <div class=\"contact-form form mb-5 \" id=\"contact\" #contact>\n            <hr class=\"mt-5 mb-5\" />\n            <h2 class=\"school-subtitle mb-1 \">Contact Us</h2>\n            <p class=\"mb-5 support-text\">\n              Feel free to contact us for more information concerning our\n              school, admission procedures and requirements.\n            </p>\n            <app-contact-box\n              [receiver]=\"school.contact ? school.contact.email : defaultEmail\"\n              [scrollView]=\"contact\"\n            ></app-contact-box>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</ng-template>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/terms/terms.component.html":
/*!********************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/terms/terms.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero-section section\" data-pg-collapsed>\n  <div class=\"container-fluid position-relative\">\n    <h1 class=\"text-uppercase text-center\">Terms &amp; Conditions</h1>\n  </div>\n</section>\n<section class=\"section terms-section\" data-pg-collapsed>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"terms-intro\">\n          <div>\n            <h4>1. Introduction</h4>\n            <p>\n              Thank you for visiting our site which is owned and operated by the\n              Association of Private School Owners of Nigeria (APSON),\n              (collectively, “We”, “Us”, or “Our”). Please read these terms of\n              use (“Terms of Use”) carefully before using the services of this\n              site (the “Site”). THESE TERMS AND CONDITIONS SET FORTH THE\n              LEGALLY BINDING TERMS AND CONDITIONS FOR YOUR USE OF THIS SITE\n              (THE “SITE”) AND THE RELATED SERVICES, FEATURES, CONTENT, APPS,\n              WIDGETS OFFERED OR ANY PURCHASES YOU MAKE VIA THE SITE.\n            </p>\n            <p>\n              These Terms and Conditions apply to all users of the Site,\n              including, without limitation, users who are contributors of\n              content, information and other materials or services on the Site.\n              Your access and use of the Site will be subject to the version of\n              the Terms and Conditions posted on the Site at the time of use. If\n              you do not agree with the Terms and Conditions, then you do not\n              have the right to access, view, download or otherwise use the Site\n              or purchase any product and, accordingly, you should not do so.\n            </p>\n            <p>\n              Any dispute regarding the interpretation or application of these\n              Terms and Conditions shall be governed by and construed in\n              accordance with Nigerian laws and shall be exclusively settled by\n              the courts of Nigeria.\n            </p>\n          </div>\n          <div>\n            <h4>2. Eligibility</h4>\n            <p>\n              By using this site, you represent that you are at least the age of\n              majority in your state or province of residence, or that you are\n              the age of majority in your state or province of residence and you\n              have given us your consent to allow any of your minor dependents\n              to use this site.\n            </p>\n          </div>\n          <div>\n            <h4>3. Prohibited Use</h4>\n            <p>\n              You may not use our products for any illegal or unauthorized\n              purpose nor may you, in the use of the Service, violate any laws\n              in your jurisdiction (including but not limited to copyright\n              laws). You must not transmit any worms or viruses or any code of a\n              destructive nature. A breach or violation of any of the Terms will\n              result in an immediate termination of your Services.\n            </p>\n            <p>\n              In addition to other prohibitions as set forth in the Terms of\n              Service, you are prohibited from using the site or its content:\n              (a) for any unlawful purpose; (b) to solicit others to perform or\n              participate in any unlawful acts; (c) to violate any\n              international, federal, provincial or state regulations, rules,\n              laws, or local ordinances; (d) to infringe upon or violate our\n              intellectual property rights or the intellectual property rights\n              of others; (e) to harass, abuse, insult, harm, defame, slander,\n              disparage, intimidate, or discriminate based on gender, sexual\n              orientation, religion, ethnicity, race, age, national origin, or\n              disability; (f) to submit false or misleading information; (g) to\n              upload or transmit viruses or any other type of malicious code\n              that will or may be used in any way that will affect the\n              functionality or operation of the Service or of any related\n              website, other websites, or the Internet; (h) to collect or track\n              the personal information of others; (i) to spam, phish, pharm,\n              pretext, spider, crawl, or scrape; (j) for any obscene or immoral\n              purpose; or (k) to interfere with or circumvent the security\n              features of the Service or any related website, other websites, or\n              the Internet. We reserve the right to terminate your use of the\n              Service or any related website for violating any of the prohibited\n              uses.\n            </p>\n          </div>\n          <div>\n            <h4>4. Content Permission</h4>\n            <p>\n              We reserve the right to refuse service to anyone for any reason at\n              any time. You understand that your content (not including credit\n              card information), may be transferred unencrypted and involve (a)\n              transmissions over various networks; and (b) changes to conform\n              and adapt to technical requirements of connecting networks or\n              devices. Credit card information is always encrypted during\n              transfer over networks.\n            </p>\n            <p>\n              You agree not to reproduce, duplicate, copy, sell, resell or\n              exploit any portion of the Service, use of the Service, or access\n              to the Service or any contact on the website through which the\n              service is provided, without express written permission by us. The\n              headings used in this agreement are included for convenience only\n              and will not limit or otherwise affect these Terms.\n            </p>\n          </div>\n          <div>\n            <h4>5. Accuracy of Information</h4>\n            <p>\n              We are not responsible if information made available on this site\n              is not accurate, complete or current. The material on this site is\n              provided for general information only and should not be relied\n              upon or used as the sole basis for making decisions without\n              consulting primary, more accurate, more complete or more timely\n              sources of information. Any reliance on the material on this site\n              is at your own risk.\n            </p>\n            <p>\n              This site may contain certain historical information. Historical\n              information, necessarily, is not current and is provided for your\n              reference only. We reserve the right to modify the contents of\n              this site at any time, but we have no obligation to update any\n              information on our site. You agree that it is your responsibility\n              to monitor changes to our site.\n            </p>\n          </div>\n          <div>\n            <h4>6. Product Modifications</h4>\n            <p>\n              Prices for our products and services are subject to change without\n              notice. We reserve the right at any time to modify or discontinue\n              the Service (or any part or content thereof) without notice at any\n              time. We shall not be liable to you or to any third-party for any\n              modification, price change, suspension or discontinuance of the\n              Service.\n            </p>\n          </div>\n          <div>\n            <h4>7. Use of Third Pary Tools</h4>\n            <p>\n              We may provide you with access to third-party tools over which we\n              neither monitor nor have any control nor input.\n            </p>\n            <p>\n              You acknowledge and agree that we provide access to such tools ”as\n              is” and “as available” without any warranties, representations or\n              conditions of any kind and without any endorsement. We shall have\n              no liability whatsoever arising from or relating to your use of\n              optional third-party tools.\n            </p>\n            <p>\n              Any use by you of optional tools offered through the site is\n              entirely at your own risk and discretion and you should ensure\n              that you are familiar with and approve of the terms on which tools\n              are provided by the relevant third-party provider(s). We may also,\n              in the future, offer new services and/or features through the\n              website (including, the release of new tools and resources). Such\n              new features and/or services shall also be subject to these Terms\n              of Service.\n            </p>\n          </div>\n          <div>\n            <h4>8. Third Party Links</h4>\n            <p>\n              Certain content, products and services available via our Service\n              may include materials from third-parties.\n            </p>\n            <p>\n              Third-party links on this site may direct you to third-party\n              websites that are not affiliated with us. We are not responsible\n              for examining or evaluating the content or accuracy and we do not\n              warrant and will not have any liability or responsibility for any\n              third-party materials or websites, or for any other materials,\n              products, or services of third-parties.\n            </p>\n            <p>\n              We are not liable for any harm or damages related to the purchase\n              or use of goods, services, resources, content, or any other\n              transactions made in connection with any third-party websites.\n              Please review carefully the third-party's policies and practices\n              and make sure you understand them before you engage in any\n              transaction. Complaints, claims, concerns, or questions regarding\n              third-party products should be directed to the third-party.\n            </p>\n          </div>\n          <div>\n            <h4>9. Your Comments and Feedbacks</h4>\n            <p>\n              If, at our request, you send certain specific submissions (for\n              example contest entries) or without a request from us you send\n              creative ideas, suggestions, proposals, plans, or other materials,\n              whether online, by email, by postal mail, or otherwise\n              (collectively, 'comments'), you agree that we may, at any time,\n              without restriction, edit, copy, publish, distribute, translate\n              and otherwise use in any medium any comments that you forward to\n              us. We are and shall be under no obligation (1) to maintain any\n              comments in confidence; (2) to pay compensation for any comments;\n              or (3) to respond to any comments.\n            </p>\n            <p>\n              We may, but have no obligation to, monitor, edit or remove content\n              that we determine in our sole discretion are unlawful, offensive,\n              threatening, libelous, defamatory, pornographic, obscene or\n              otherwise objectionable or violates any party’s intellectual\n              property or these Terms of Service. You agree that your comments\n              will not violate any right of any third-party, including\n              copyright, trademark, privacy, personality or other personal or\n              proprietary right.\n            </p>\n            <p>\n              You further agree that your comments will not contain libelous or\n              otherwise unlawful, abusive or obscene material, or contain any\n              computer virus or other malware that could in any way affect the\n              operation of the Service or any related website. You may not use a\n              false e-mail address, pretend to be someone other than yourself,\n              or otherwise mislead us or third-parties as to the origin of any\n              comments. You are solely responsible for any comments you make and\n              their accuracy. We take no responsibility and assume no liability\n              for any comments posted by you or any third-party.\n            </p>\n          </div>\n          <div>\n            <h4>10. Errors and Omissions</h4>\n            <p>\n              Occasionally there may be information on our site or in the\n              Service that contains typographical errors, inaccuracies or\n              omissions that may relate to product descriptions, pricing,\n              promotions, offers, product shipping charges, transit times and\n              availability. We reserve the right to correct any errors,\n              inaccuracies or omissions, and to change or update information or\n              cancel orders if any information in the Service or on any related\n              website is inaccurate at any time without prior notice (including\n              after you have submitted your order).\n            </p>\n            <p>\n              We undertake no obligation to update, amend or clarify information\n              in the Service or on any related website, including without\n              limitation, pricing information, except as required by law. No\n              specified update or refresh date applied in the Service or on any\n              related website, should be taken to indicate that all information\n              in the Service or on any related website has been modified or\n              updated.\n            </p>\n          </div>\n          <div>\n            <h4>11. Disclaimer</h4>\n            <p>\n              We do not guarantee, represent or warrant that your use of our\n              service will be uninterrupted, timely, secure or error-free. We do\n              not warrant that the results that may be obtained from the use of\n              the service will be accurate or reliable.\n            </p>\n            <p>\n              You agree that from time to time we may remove the service for\n              indefinite periods of time or cancel the service at any time,\n              without notice to you. You expressly agree that your use of, or\n              inability to use, the service is at your sole risk. The service\n              and all products and services delivered to you through the service\n              are (except as expressly stated by us) provided 'as is' and 'as\n              available' for your use, without any representation, warranties or\n              conditions of any kind, either express or implied, including all\n              implied warranties or conditions of merchantability, merchantable\n              quality, fitness for a particular purpose, durability, title, and\n              non-infringement.\n            </p>\n            <p>\n              In no case shall flawless beauty by angel brinks, our directors,\n              officers, employees, affiliates, agents, contractors, interns,\n              suppliers, service providers or licensors be liable for any\n              injury, loss, claim, or any direct, indirect, incidental,\n              punitive, special, or consequential damages of any kind,\n              including, without limitation lost profits, lost revenue, lost\n              savings, loss of data, replacement costs, or any similar damages,\n              whether based in contract, tort (including negligence), strict\n              liability or otherwise, arising from your use of any of the\n              service or any products procured using the service, or for any\n              other claim related in any way to your use of the service or any\n              product, including, but not limited to, any errors or omissions in\n              any content, or any loss or damage of any kind incurred as a\n              result of the use of the service or any content (or product)\n              posted, transmitted, or otherwise made available via the service,\n              even if advised of their possibility.\n            </p>\n            <p>\n              Because some states or jurisdictions do not allow the exclusion or\n              the limitation of liability for consequential or incidental\n              damages, in such states or jurisdictions, our liability shall be\n              limited to the maximum extent permitted by law.\n            </p>\n          </div>\n          <div>\n            <h4>12. Indemnification</h4>\n            <p>\n              You agree to indemnify, defend and hold harmless the Association\n              of Private School Owners of Nigeria (APSON) and our parent,\n              subsidiaries, affiliates, partners, officers, directors, agents,\n              contractors, licensors, service providers, subcontractors,\n              suppliers, interns and employees, harmless from any claim or\n              demand, including reasonable attorneys’ fees, made by any\n              third-party due to or arising out of your breach of these Terms of\n              Service or the documents they incorporate by reference, or your\n              violation of any law or the rights of a third-party.\n            </p>\n          </div>\n          <div>\n            <h4>13. Severability</h4>\n            <p>\n              In the event that any provision of these Terms of Service is\n              determined to be unlawful, void or unenforceable, such provision\n              shall nonetheless be enforceable to the fullest extent permitted\n              by applicable law, and the unenforceable portion shall be deemed\n              to be severed from these Terms of Service, such determination\n              shall not affect the validity and enforceability of any other\n              remaining provisions.\n            </p>\n          </div>\n          <div>\n            <h4>14. Termination</h4>\n            <p>\n              The obligations and liabilities of the parties incurred prior to\n              the termination date shall survive the termination of this\n              agreement for all purposes. These Terms of Service are effective\n              unless and until terminated by either you or us. You may terminate\n              these Terms of Service at any time by notifying us that you no\n              longer wish to use our Services, or when you cease using our site.\n            </p>\n            <p>\n              If in our sole judgment you fail, or we suspect that you have\n              failed, to comply with any term or provision of these Terms of\n              Service, we also may terminate this agreement at any time without\n              notice and you will remain liable for all amounts due up to and\n              including the date of termination; and/or accordingly may deny you\n              access to our Services (or any part thereof)\n            </p>\n          </div>\n          <div>\n            <h4>15. Enforcement of Agreement</h4>\n            <p>\n              The failure of us to exercise or enforce any right or provision of\n              these Terms of Service shall not constitute a waiver of such right\n              or provision. These Terms of Service and any policies or operating\n              rules posted by us on this site or in respect to The Service\n              constitutes the entire agreement and understanding between you and\n              us and govern your use of the Service, superseding any prior or\n              contemporaneous agreements, communications and proposals, whether\n              oral or written, between you and us (including, but not limited\n              to, any prior versions of the Terms of Service). Any ambiguities\n              in the interpretation of these Terms of Service shall not be\n              construed against the drafting party.\n            </p>\n          </div>\n          <div>\n            <h4>16. Changes to Terms and Conditions</h4>\n            <p>\n              You can review the most current version of the Terms of Service at\n              any time at this page. We reserve the right, at our sole\n              discretion, to update, change or replace any part of these Terms\n              of Service by posting updates and changes to our website.\n            </p>\n            <p>\n              It is your responsibility to check our website periodically for\n              changes. Your continued use of or access to our website or the\n              Service following the posting of any changes to these Terms of\n              Service constitutes acceptance of those changes.\n            </p>\n          </div>\n          <div>\n            <h4>Contact Details</h4>\n            <p>\n              For questions and clarifications about our terms and conditions,\n              you may contact by clicking\n              <a routerLink=\"/contact\" class=\"blog-link-more\">here</a> or send\n              us an email using\n              <a\n                [href]=\"'mailto:support@apsonigeria.com'\"\n                class=\"blog-link-more\"\n                >support@apsonigeria.com</a\n              >\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() { }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "../../node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacy/privacy.component */ "./src/app/privacy/privacy.component.ts");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./terms/terms.component */ "./src/app/terms/terms.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blogs/blogs.component */ "./src/app/blogs/blogs.component.ts");
/* harmony import */ var _schools_schools_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./schools/schools.component */ "./src/app/schools/schools.component.ts");
/* harmony import */ var _single_school_single_school_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./single-school/single-school.component */ "./src/app/single-school/single-school.component.ts");
/* harmony import */ var _single_blog_single_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./single-blog/single-blog.component */ "./src/app/single-blog/single-blog.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _services_login_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/login.guard */ "./src/app/services/login.guard.ts");


















const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'privacy', component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_6__["PrivacyComponent"] },
    { path: 'terms', component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_7__["TermsComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], canActivate: [_services_login_guard__WEBPACK_IMPORTED_MODULE_17__["LoginGuard"]] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'reset-password', component: _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_10__["ResetPasswordComponent"] },
    { path: 'forgot-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_11__["ForgotPasswordComponent"] },
    { path: 'blog', component: _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_12__["BlogsComponent"], pathMatch: 'full' },
    { path: 'blog/news', component: _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_12__["BlogsComponent"], pathMatch: 'full' },
    { path: 'blog/publications', component: _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_12__["BlogsComponent"], pathMatch: 'full' },
    { path: 'schools', component: _schools_schools_component__WEBPACK_IMPORTED_MODULE_13__["SchoolsComponent"], pathMatch: 'full' },
    { path: 'schools/:id', component: _single_school_single_school_component__WEBPACK_IMPORTED_MODULE_14__["SingleSchoolComponent"] },
    { path: 'blog/:id', component: _single_blog_single_blog_component__WEBPACK_IMPORTED_MODULE_15__["SingleBlogComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                onSameUrlNavigation: 'reload',
                useHash: true,
            }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blogs/blogs.component */ "./src/app/blogs/blogs.component.ts");
/* harmony import */ var _schools_schools_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./schools/schools.component */ "./src/app/schools/schools.component.ts");
/* harmony import */ var _single_school_single_school_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./single-school/single-school.component */ "./src/app/single-school/single-school.component.ts");
/* harmony import */ var _single_blog_single_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./single-blog/single-blog.component */ "./src/app/single-blog/single-blog.component.ts");
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./terms/terms.component */ "./src/app/terms/terms.component.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./privacy/privacy.component */ "./src/app/privacy/privacy.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm2015/shared.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/service-worker */ "../../node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _contact_box_contact_box_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./contact-box/contact-box.component */ "./src/app/contact-box/contact-box.component.ts");



























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
            _blogs_blogs_component__WEBPACK_IMPORTED_MODULE_12__["BlogsComponent"],
            _schools_schools_component__WEBPACK_IMPORTED_MODULE_13__["SchoolsComponent"],
            _single_school_single_school_component__WEBPACK_IMPORTED_MODULE_14__["SingleSchoolComponent"],
            _single_blog_single_blog_component__WEBPACK_IMPORTED_MODULE_15__["SingleBlogComponent"],
            _terms_terms_component__WEBPACK_IMPORTED_MODULE_16__["TermsComponent"],
            _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_17__["PrivacyComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
            _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__["ForgotPasswordComponent"],
            _reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_21__["ResetPasswordComponent"],
            _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_23__["PageNotFoundComponent"],
            _contact_box_contact_box_component__WEBPACK_IMPORTED_MODULE_26__["ContactBoxComponent"],
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            shared__WEBPACK_IMPORTED_MODULE_22__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_24__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].production,
            }),
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: shared__WEBPACK_IMPORTED_MODULE_22__["InterceptorService"],
                multi: true,
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/blogs/blogs.component.ts":
/*!******************************************!*\
  !*** ./src/app/blogs/blogs.component.ts ***!
  \******************************************/
/*! exports provided: BlogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogsComponent", function() { return BlogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let BlogsComponent = class BlogsComponent {
    constructor() { }
    ngOnInit() { }
};
BlogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blogs',
        template: __webpack_require__(/*! raw-loader!./blogs.component.html */ "../../node_modules/raw-loader/index.js!./src/app/blogs/blogs.component.html"),
    })
], BlogsComponent);



/***/ }),

/***/ "./src/app/contact-box/contact-box.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contact-box/contact-box.component.ts ***!
  \******************************************************/
/*! exports provided: ContactBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactBoxComponent", function() { return ContactBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm2015/shared.js");
/* harmony import */ var helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers */ "../../dist/helpers/fesm2015/helpers.js");





let ContactBoxComponent = class ContactBoxComponent extends shared__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"] {
    constructor(formBuilder, requestService) {
        super();
        this.formBuilder = formBuilder;
        this.requestService = requestService;
        this.receiver = helpers__WEBPACK_IMPORTED_MODULE_4__["APSON_EMAIL"];
        this.formGroup = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            subject: ['Enquiry', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            receiver: [this.receiver],
        });
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    sendMessage() {
        this.toggleLoaders(true);
        this.subscription.add(this.requestService.post('contact', this.formGroup.value).subscribe(() => {
            this.toggleLoaders(false);
            Object(helpers__WEBPACK_IMPORTED_MODULE_4__["scrollIntoView"])(this.scrollView);
            this.formGroup.reset({
                name: '',
                phone: '',
                message: '',
                email: '',
                subject: 'Enquiry',
                receiver: this.receiver,
            });
            this.showMessage('Thank you for your message. Our representative will contact you shortly.', 'Message Sent', 'success');
        }, error => {
            this.handleError(error);
        }));
    }
};
ContactBoxComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: shared__WEBPACK_IMPORTED_MODULE_3__["RequestService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactBoxComponent.prototype, "scrollView", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ContactBoxComponent.prototype, "receiver", void 0);
ContactBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-box',
        template: __webpack_require__(/*! raw-loader!./contact-box.component.html */ "../../node_modules/raw-loader/index.js!./src/app/contact-box/contact-box.component.html"),
    })
], ContactBoxComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "../../node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() { }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "../../node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor() { }
    ngOnInit() { }
};
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "../../node_modules/raw-loader/index.js!./src/app/forgot-password/forgot-password.component.html"),
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "../../node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "../../node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm2015/shared.js");




let LoginComponent = class LoginComponent extends shared__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"] {
    constructor(formBuilder, authService) {
        super();
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.formData = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onLogin() {
        this.toggleLoaders(true);
        this.subscription.add(this.authService.login(this.formData.value).subscribe(response => {
            const { data } = response;
            this.hideAlert = false;
            this.showMessage('Redirecting you...', 'Log in successful', 'success');
            this.authService.setMember(data);
            this.authService.gotoMembers();
        }, error => {
            this.handleError(error);
        }));
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: shared__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "../../node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let PageNotFoundComponent = class PageNotFoundComponent {
};
PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "../../node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
    })
], PageNotFoundComponent);



/***/ }),

/***/ "./src/app/privacy/privacy.component.ts":
/*!**********************************************!*\
  !*** ./src/app/privacy/privacy.component.ts ***!
  \**********************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let PrivacyComponent = class PrivacyComponent {
    constructor() { }
    ngOnInit() { }
};
PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacy',
        template: __webpack_require__(/*! raw-loader!./privacy.component.html */ "../../node_modules/raw-loader/index.js!./src/app/privacy/privacy.component.html"),
    })
], PrivacyComponent);



/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm2015/shared.js");




let RegisterComponent = class RegisterComponent extends shared__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"] {
    constructor(authService, formBuilder, requestService) {
        super();
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.requestService = requestService;
        this.formData = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sex: ['Male'],
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onRegisterMember() {
        this.toggleLoaders(true);
        this.subscription.add(this.requestService.registerMember(this.formData.value).subscribe(response => {
            const { data } = response;
            this.authService.setMember(data);
            this.toggleLoaders(false);
            this.showMessage('Registration successful', '', 'success');
            this.authService.gotoMembers();
        }, error => {
            this.handleError(error);
        }));
    }
};
RegisterComponent.ctorParameters = () => [
    { type: shared__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: shared__WEBPACK_IMPORTED_MODULE_3__["RequestService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "../../node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let ResetPasswordComponent = class ResetPasswordComponent {
    constructor() { }
    ngOnInit() { }
};
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: __webpack_require__(/*! raw-loader!./reset-password.component.html */ "../../node_modules/raw-loader/index.js!./src/app/reset-password/reset-password.component.html"),
    })
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/schools/schools.component.ts":
/*!**********************************************!*\
  !*** ./src/app/schools/schools.component.ts ***!
  \**********************************************/
/*! exports provided: SchoolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchoolsComponent", function() { return SchoolsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers */ "../../dist/helpers/fesm2015/helpers.js");




let SchoolsComponent = class SchoolsComponent {
    constructor() {
        this.schoolParams = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.states = helpers__WEBPACK_IMPORTED_MODULE_3__["STATES"];
        this.lgas = [];
        this.types = helpers__WEBPACK_IMPORTED_MODULE_3__["SCHOOL_TYPES"];
    }
    scrollToResults(element) {
        Object(helpers__WEBPACK_IMPORTED_MODULE_3__["scrollIntoView"])(element);
    }
    filterByState(state) {
        this.filter('state', state);
        this.lgas = state ? helpers__WEBPACK_IMPORTED_MODULE_3__["LGAS"][state] : [];
    }
    filter(key, value) {
        this.schoolParams.next({ key, value });
    }
};
SchoolsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-schools',
        template: __webpack_require__(/*! raw-loader!./schools.component.html */ "../../node_modules/raw-loader/index.js!./src/app/schools/schools.component.html"),
    })
], SchoolsComponent);



/***/ }),

/***/ "./src/app/services/login.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/services/login.guard.ts ***!
  \*****************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm2015/shared.js");
/* harmony import */ var helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helpers */ "../../dist/helpers/fesm2015/helpers.js");





let LoginGuard = class LoginGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        const authenticated = this.authService.isLoggedIn(helpers__WEBPACK_IMPORTED_MODULE_4__["MEMBERS_URL"]);
        if (authenticated) {
            this.authService.gotoMembers();
        }
        return !authenticated;
    }
};
LoginGuard.ctorParameters = () => [
    { type: shared__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], LoginGuard);



/***/ }),

/***/ "./src/app/single-blog/single-blog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/single-blog/single-blog.component.ts ***!
  \******************************************************/
/*! exports provided: SingleBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleBlogComponent", function() { return SingleBlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let SingleBlogComponent = class SingleBlogComponent {
    constructor() { }
    ngOnInit() { }
};
SingleBlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-blog',
        template: __webpack_require__(/*! raw-loader!./single-blog.component.html */ "../../node_modules/raw-loader/index.js!./src/app/single-blog/single-blog.component.html"),
    })
], SingleBlogComponent);



/***/ }),

/***/ "./src/app/single-school/single-school.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/single-school/single-school.component.ts ***!
  \**********************************************************/
/*! exports provided: SingleSchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSchoolComponent", function() { return SingleSchoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! helpers */ "../../dist/helpers/fesm2015/helpers.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm2015/shared.js");





let SingleSchoolComponent = class SingleSchoolComponent extends shared__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
    constructor(activedRoute, requestService, router) {
        super();
        this.activedRoute = activedRoute;
        this.requestService = requestService;
        this.router = router;
        this.defaultEmail = helpers__WEBPACK_IMPORTED_MODULE_3__["APSON_EMAIL"];
    }
    ngOnInit() {
        this.loading = true;
        const { snapshot: { params: { id }, }, } = this.activedRoute;
        this.subscription.add(this.requestService.get(`schools/${id}`).subscribe(({ data }) => {
            this.school = data;
            this.setFullAddress();
            this.setContactDetails();
            this.loading = false;
        }, _ => {
            this.router.navigateByUrl('/not-found');
        }));
    }
    toMapAddress() {
        return `https://maps.google.com?q=${this.school.fullAddress}`;
    }
    toPhone() {
        return `tel:${this.school.phone}`;
    }
    setFullAddress() {
        if (this.school.location) {
            const { location: { address, city, stateName }, } = this.school;
            this.school.fullAddress = `${address}, ${city}, ${stateName}`;
        }
    }
    setContactDetails() {
        if (this.school.contact) {
            const { contact: { email, phone, website }, } = this.school;
            this.school.email = email;
            this.school.phone = ['0', '+', '234'].includes(phone.charAt(0))
                ? phone
                : `0${phone}`;
            this.school.website = website;
        }
    }
    toEmailAddress() {
        return `mailto:${this.school.email}`;
    }
    getCover() {
        return `url(${this.school.cover})`;
    }
    getGender() {
        return Object(helpers__WEBPACK_IMPORTED_MODULE_3__["getGender"])(this.school.gender);
    }
    scrollToContact(element) {
        Object(helpers__WEBPACK_IMPORTED_MODULE_3__["scrollIntoView"])(element);
    }
};
SingleSchoolComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: shared__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SingleSchoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-school',
        template: __webpack_require__(/*! raw-loader!./single-school.component.html */ "../../node_modules/raw-loader/index.js!./src/app/single-school/single-school.component.html"),
    })
], SingleSchoolComponent);



/***/ }),

/***/ "./src/app/terms/terms.component.ts":
/*!******************************************!*\
  !*** ./src/app/terms/terms.component.ts ***!
  \******************************************/
/*! exports provided: TermsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsComponent", function() { return TermsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");


let TermsComponent = class TermsComponent {
    constructor() { }
    ngOnInit() { }
};
TermsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms',
        template: __webpack_require__(/*! raw-loader!./terms.component.html */ "../../node_modules/raw-loader/index.js!./src/app/terms/terms.component.html"),
    })
], TermsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/projects/visitors/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map