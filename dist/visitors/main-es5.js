(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/dropdown/fesm5/dropdown.js":
/*!***************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/dist/dropdown/fesm5/dropdown.js ***!
  \***************************************************************************************************/
/*! exports provided: Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Dropdown = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Dropdown, _super);
    function Dropdown() {
        var _this = _super.call(this) || this;
        _this.dropdownShown = false;
        return _this;
    }
    /**
     * @return {?}
     */
    Dropdown.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.setDropdownState(false);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    Dropdown.prototype.toggleDropdownMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
        this.dropdownShown = !this.dropdownShown;
    };
    /**
     * @param {?} state
     * @return {?}
     */
    Dropdown.prototype.setDropdownState = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.dropdownShown = state;
    };
    Dropdown.propDecorators = {
        onClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['document:click',] }]
    };
    return Dropdown;
}(shared__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));


//# sourceMappingURL=dropdown.js.map


/***/ }),

/***/ "../../dist/helpers/fesm5/helpers.js":
/*!*************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/dist/helpers/fesm5/helpers.js ***!
  \*************************************************************************************************/
/*! exports provided: ADMIN_URL, APSON_EMAIL, BASE_URL, CloudinaryWidget, LGAS, MEMBERS_URL, PaystackWidget, SCHOOL_TYPES, STATES, STUDENTS_URL, VISITORS_URL, getGender, scrollIntoView, selectedFilter, toMobileNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_URL", function() { return ADMIN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APSON_EMAIL", function() { return APSON_EMAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudinaryWidget", function() { return CloudinaryWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LGAS", function() { return LGAS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEMBERS_URL", function() { return MEMBERS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaystackWidget", function() { return PaystackWidget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHOOL_TYPES", function() { return SCHOOL_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES", function() { return STATES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STUDENTS_URL", function() { return STUDENTS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISITORS_URL", function() { return VISITORS_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGender", function() { return getGender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollIntoView", function() { return scrollIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedFilter", function() { return selectedFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toMobileNumber", function() { return toMobileNumber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");


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
    params = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, params, (_a = {}, _a[key] = value, _a.page = 1, _a));
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
    return ['Male Only', 'Female Only', 'Male & Female'][genderId];
});
/** @type {?} */
var toMobileNumber = (/**
 * @param {?} phone
 * @return {?}
 */
function (phone) {
    /** @type {?} */
    var suffix = '0';
    /** @type {?} */
    var firstLetter = phone.charAt(0);
    if (firstLetter === '2') {
        suffix = '+';
    }
    else if (firstLetter === '0' || firstLetter === '+') {
        suffix = '';
    }
    return "" + suffix + phone;
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var BASE_URL = 'https://apson.herokuapp.com';
// export const VISITORS_URL = 'http://localhost:4300';
// export const MEMBERS_URL = 'http://localhost:4400';
/** @type {?} */
var ADMIN_URL = 'http://localhost:4500';
/** @type {?} */
var STUDENTS_URL = 'http://localhost:4600';
// export const BASE_URL = 'http://localhost:4300';
/** @type {?} */
var MEMBERS_URL = 'https://members.apsonigeria.com';
/** @type {?} */
var VISITORS_URL = 'https://www.apsonigeria.com';
// export const ADMIN_URL = 'https://admin.apsonigeria.com';
// export const STUDENTS_URL = 'https://students.apsonigeria.com';
/** @type {?} */
var APSON_EMAIL = 'support@apsonigeria.com';
/** @type {?} */
var SCHOOL_TYPES = [
    'Cresche/Nursery',
    'Primary shoool',
    'Secondary school',
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PaystackWidget = /** @class */ (function () {
    function PaystackWidget(_a, onSuccess, onFailure) {
        var key = _a.key, ref = _a.ref, plan = _a.plan, email = _a.email;
        this.handler = PaystackPop.setup({
            key: key,
            email: email,
            ref: ref,
            plan: plan,
            callback: (/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                onSuccess(response);
            }),
            onClose: (/**
             * @return {?}
             */
            function () {
                onFailure();
            }),
        });
    }
    /**
     * @return {?}
     */
    PaystackWidget.prototype.open = /**
     * @return {?}
     */
    function () {
        this.handler.openIframe();
    };
    return PaystackWidget;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var defaultFunc = (/**
 * @param {?} params
 * @return {?}
 */
function (params) { });
/** @type {?} */
var styles = {
    palette: {
        window: '#FFFFFF',
        sourceBg: '#FBFBFB',
        windowBorder: '#00b09b',
        tabIcon: '#000000',
        inactiveTabIcon: '#0D2F5A',
        menuIcons: '#555a5f',
        link: '#00b09b',
        action: '#339933',
        inProgress: '#0433ff',
        complete: '#339933',
        error: '#cc0000',
        textDark: '#000000',
        textLight: '#FFFFFF',
    },
};
var CloudinaryWidget = /** @class */ (function () {
    function CloudinaryWidget(handleSuccess, handleFailure, ratio, preset, cropping) {
        if (handleSuccess === void 0) { handleSuccess = defaultFunc; }
        if (handleFailure === void 0) { handleFailure = defaultFunc; }
        if (ratio === void 0) { ratio = 1; }
        if (preset === void 0) { preset = 'profile'; }
        if (cropping === void 0) { cropping = true; }
        this.widget = window.cloudinary.createUploadWidget({
            cloudName: 'dvnrltpfi',
            uploadPreset: preset,
            cropping: cropping,
            croppingAspectRatio: ratio,
            croppingDefaultSelectionRatio: 0.8,
            resourceType: 'image',
            clientAllowedFormats: ['png', 'jpg', 'jpeg', 'gif'],
            maxImageWidth: 500,
            maxImageHeight: 500,
            multiple: false,
            styles: styles,
            buttonClass: 'd-none',
            sources: ['local', 'camera'],
        }, (/**
         * @param {?} error
         * @param {?} result
         * @return {?}
         */
        function (error, result) {
            if (!error && result && result.event === 'success') {
                return handleSuccess(result.info.secure_url);
            }
            handleFailure(error);
        }));
    }
    /**
     * @return {?}
     */
    CloudinaryWidget.prototype.open = /**
     * @return {?}
     */
    function () {
        this.widget.open();
    };
    return CloudinaryWidget;
}());


//# sourceMappingURL=helpers.js.map


/***/ }),

/***/ "../../dist/shared/fesm5/shared.js":
/*!***********************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/dist/shared/fesm5/shared.js ***!
  \***********************************************************************************************/
/*! exports provided: ActiveMemberGuard, AuthGuard, AuthService, BaseComponent, BaseDataComponent, HttpService, InterceptorService, Member, RequestService, School, SchoolService, ScriptLoaderService, ScriptStore, SharedModule, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveMemberGuard", function() { return ActiveMemberGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return PageTransitionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_cacheable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cacheable */ "../../node_modules/ngx-cacheable/index.js");
/* harmony import */ var ngx_cacheable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_cacheable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! helpers */ "../../dist/helpers/fesm5/helpers.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SubmitButtonComponent = /** @class */ (function () {
    function SubmitButtonComponent() {
        this.isBusy = false;
        this.disabled = false;
        this.type = 'submit';
        this.maxWidth = 'w-100';
        this.btnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    SubmitButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    SubmitButtonComponent.prototype.onClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.type === 'button') {
            this.btnClick.emit(event);
        }
    };
    SubmitButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'lib-submit-button',
                    template: "<button\n  type=\"type\"\n  class=\"btn-brand mt-4 btn-curved {{ maxWidth }}\"\n  [disabled]=\"isBusy || disabled\"\n  (click)=\"onClick($event)\"\n>\n  {{ text }}\n  <div class=\"spinner-border\" *ngIf=\"isBusy\"></div>\n</button>\n"
                }] }
    ];
    /** @nocollapse */
    SubmitButtonComponent.ctorParameters = function () { return []; };
    SubmitButtonComponent.propDecorators = {
        isBusy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        btnClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return SubmitButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.type = 'text';
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
    return InputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.data = [];
        this.disabled = false;
        this.isLoading = false;
        this.whenSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.notifyChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.whenSelected.emit(event);
    };
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
    return SelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BusyComponent = /** @class */ (function () {
    function BusyComponent() {
        this.text = 'Please wait...';
    }
    BusyComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'lib-busy',
                    template: "<div class=\"busy text-center\">\n  <img src=\"/assets/images/icons/busy.gif\" width=\"120\" />\n  <p>{{ text }}</p>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    BusyComponent.ctorParameters = function () { return []; };
    BusyComponent.propDecorators = {
        text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return BusyComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    /**
     * @template T
     * @param {?} endpoint
     * @param {?} params
     * @param {?} method
     * @return {?}
     */
    HttpService.prototype.request = /**
     * @template T
     * @param {?} endpoint
     * @param {?} params
     * @param {?} method
     * @return {?}
     */
    function (endpoint, params, method) {
        return this.http[method](helpers__WEBPACK_IMPORTED_MODULE_7__["BASE_URL"] + "/" + endpoint, params);
    };
    HttpService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    HttpService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
    ]; };
    /** @nocollapse */ HttpService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function HttpService_Factory() { return new HttpService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"])); }, token: HttpService, providedIn: "root" });
    return HttpService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    RequestService.prototype.updateMember = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.http.request('members', Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, data), 'patch');
    };
    /**
     * @param {?} data
     * @return {?}
     */
    RequestService.prototype.updateProfileImage = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.http.request('members/image', Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, data), 'patch');
    };
    /**
     * @param {?} data
     * @return {?}
     */
    RequestService.prototype.registerMember = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.http.request('members', Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, data), 'post');
    };
    /**
     * @param {?} paymentType
     * @return {?}
     */
    RequestService.prototype.requestPayment = /**
     * @param {?} paymentType
     * @return {?}
     */
    function (paymentType) {
        return this.http.request('payments/request', { params: { paymentType: paymentType } }, 'get');
    };
    /**
     * @param {?} query
     * @return {?}
     */
    RequestService.prototype.searchSchools = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return this.get('schools', query);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    RequestService.prototype.getSchool = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return this.get("schools/" + id);
    };
    /**
     * @param {?} ref
     * @return {?}
     */
    RequestService.prototype.validatePayment = /**
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        return this.http.request('payments', { ref: ref }, 'post');
    };
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    RequestService.prototype.post = /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    function (endpoint, data) {
        return this.http.request(endpoint, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, data), 'post');
    };
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    RequestService.prototype.patch = /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    function (endpoint, data) {
        return this.http.request(endpoint, Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, data), 'patch');
    };
    /**
     * @param {?} endpoint
     * @param {?=} data
     * @return {?}
     */
    RequestService.prototype.get = /**
     * @param {?} endpoint
     * @param {?=} data
     * @return {?}
     */
    function (endpoint, data) {
        if (data === void 0) { data = {}; }
        return this.http.request(endpoint, { params: data }, 'get');
    };
    RequestService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    RequestService.ctorParameters = function () { return [
        { type: HttpService }
    ]; };
    /** @nocollapse */ RequestService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function RequestService_Factory() { return new RequestService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpService)); }, token: RequestService, providedIn: "root" });
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ngx_cacheable__WEBPACK_IMPORTED_MODULE_5__["Cacheable"])({
            maxCacheCount: 1000,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], RequestService.prototype, "searchSchools", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ngx_cacheable__WEBPACK_IMPORTED_MODULE_5__["Cacheable"])({
            maxCacheCount: 1000,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [Number]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:returntype", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], RequestService.prototype, "getSchool", null);
    return RequestService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BaseComponent = /** @class */ (function () {
    function BaseComponent() {
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.isBusy = false;
        this.isEmpty = false;
        this.isError = false;
        this.loading = true;
        this.classReference = BaseComponent;
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
    BaseComponent.prototype.toggleLoaders = /**
     * @protected
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isBusy = value;
        this.hideAlert = value;
    };
    /**
     * @protected
     * @param {?} message
     * @param {?} title
     * @param {?} type
     * @return {?}
     */
    BaseComponent.prototype.showMessage = /**
     * @protected
     * @param {?} message
     * @param {?} title
     * @param {?} type
     * @return {?}
     */
    function (message, title, type) {
        this.response.message = message;
        this.response.title = title;
        this.response.type = type;
    };
    /**
     * @private
     * @param {?} array
     * @return {?}
     */
    BaseComponent.prototype.arrayValues = /**
     * @private
     * @param {?} array
     * @return {?}
     */
    function (array) {
        if (!Array.isArray(array)) {
            return [];
        }
        /** @type {?} */
        var errorGroup = [];
        array.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            errorGroup.push(Object.values(element));
        }));
        return errorGroup;
    };
    /**
     * @protected
     * @param {?} err
     * @return {?}
     */
    BaseComponent.prototype.handleError = /**
     * @protected
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this.toggleLoaders(false);
        var _a = err.error, data = _a.data, message = _a.message;
        data = this.arrayValues(data);
        /** @type {?} */
        var title = data.length === 0 ? '' : message;
        message = title ? data : message;
        this.showMessage(message, title, 'danger');
    };
    /**
     * @return {?}
     */
    BaseComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    BaseComponent.prototype.toggleMenu = /**
     * @return {?}
     */
    function () {
        BaseComponent.showMenu = !BaseComponent.showMenu;
    };
    BaseComponent.showMenu = false;
    return BaseComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var  /**
 * @abstract
 */
BaseDataComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(BaseDataComponent, _super);
    function BaseDataComponent() {
        var _this = _super.call(this) || this;
        _this.debouceTime = 500;
        _this.dataSize = 0;
        _this.data = [];
        _this.params = {
            page: 1,
            size: 1000,
        };
        return _this;
    }
    /**
     * @return {?}
     */
    BaseDataComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.populateTable();
    };
    /**
     * @return {?}
     */
    BaseDataComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    /**
     * @param {?} data
     * @param {?} totalRecords
     * @return {?}
     */
    BaseDataComponent.prototype.onPopulateTableComplete = /**
     * @param {?} data
     * @param {?} totalRecords
     * @return {?}
     */
    function (data, totalRecords) {
        this.loading = false;
        this.data = data;
        this.dataSize = totalRecords;
        this.isEmpty = data.length === 0;
    };
    /**
     * @param {?} observableKeyword
     * @return {?}
     */
    BaseDataComponent.prototype.registerSearchObservables = /**
     * @param {?} observableKeyword
     * @return {?}
     */
    function (observableKeyword) {
        var _this = this;
        this.registerObservables(observableKeyword, 'loading', (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            _this.filter(observableKeyword, value);
        }));
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    BaseDataComponent.prototype.handleSearch = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this[key + "$"].next(value);
    };
    /**
     * @param {?} observableKeyword
     * @param {?} loader
     * @param {?} callback
     * @return {?}
     */
    BaseDataComponent.prototype.registerObservables = /**
     * @param {?} observableKeyword
     * @param {?} loader
     * @param {?} callback
     * @return {?}
     */
    function (observableKeyword, loader, callback) {
        var _this = this;
        this.subscription.add(this[observableKeyword + "$"]
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this[loader] = true;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["debounceTime"])(this.debouceTime), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this[loader] = false;
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["distinctUntilChanged"])())
            .subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            callback(value);
        })));
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    BaseDataComponent.prototype.filter = /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    function (key, value) {
        this.params = Object(helpers__WEBPACK_IMPORTED_MODULE_7__["selectedFilter"])(this.params, key, value);
        this.populateTable();
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    BaseDataComponent.prototype.paginate = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var page = _a.page, size = _a.size;
        this.params.size = size;
        this.params.page = page;
        this.populateTable();
    };
    return BaseDataComponent;
}(BaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchoolBoxComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(SchoolBoxComponent, _super);
    function SchoolBoxComponent(requestService) {
        var _this = _super.call(this) || this;
        _this.requestService = requestService;
        _this.schoolParams = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        _this.size = 6;
        return _this;
    }
    /**
     * @return {?}
     */
    SchoolBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.params.size = this.size;
        this.initFilterSubscription();
        this.populateTable();
    };
    /**
     * @private
     * @param {?} response
     * @return {?}
     */
    SchoolBoxComponent.prototype.setSchoolData = /**
     * @private
     * @param {?} response
     * @return {?}
     */
    function (response) {
        var _a = response.data, result = _a.result, page = _a.page;
        this.loading = false;
        this.schools = result || [];
        this.isEmpty = this.schools.length === 0;
    };
    /**
     * @param {?} phone
     * @return {?}
     */
    SchoolBoxComponent.prototype.getMobileNumber = /**
     * @param {?} phone
     * @return {?}
     */
    function (phone) {
        return Object(helpers__WEBPACK_IMPORTED_MODULE_7__["toMobileNumber"])(phone);
    };
    /**
     * @private
     * @return {?}
     */
    SchoolBoxComponent.prototype.initFilterSubscription = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription.add(this.schoolParams.subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var key = _a.key, value = _a.value;
            if (key === 'state' && _this.params.lga) {
                delete _this.params.lga;
            }
            _this.params = Object(helpers__WEBPACK_IMPORTED_MODULE_7__["selectedFilter"])(_this.params, key, value);
            _this.populateTable();
        })));
    };
    /**
     * @return {?}
     */
    SchoolBoxComponent.prototype.populateTable = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loading = true;
        this.schools = [];
        this.subscription.add(this.requestService.searchSchools(this.params).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.setSchoolData(response);
        }), (/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this.loading = false;
            _this.isError = true;
        })));
    };
    /**
     * @return {?}
     */
    SchoolBoxComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    SchoolBoxComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'lib-school-box',
                    template: "<div class=\"row boxed-row\" *ngIf=\"!loading\">\n  <div class=\"col-6 col-lg-4 mb-4\" *ngFor=\"let school of schools\">\n    <div class=\"school-box card h-100\">\n      <span class=\"blog-category school-type bg-school-type-0\">{{\n        school.typeName\n      }}</span>\n      <a class=\"link-cover\" routerLink=\"/schools/{{ school.id }}\"></a>\n      <div class=\"school-box-cover\">\n        <img src=\"{{ school.cover }}\" width=\"100%\" />\n      </div>\n      <div class=\"school-box-content card-body\">\n        <a\n          *ngIf=\"school.contact\"\n          href=\"tel: {{ getMobileNumber(school.contact.phone) }}\"\n          class=\"blog-control school-btn-call transition\"\n          ><i class=\"fas fa-phone fa-flip-horizontal\"></i\n        ></a>\n        <h4 class=\"school-box-title text-capitalize\">{{ school.name }}</h4>\n        <ul class=\"fa-ul school-list\" *ngIf=\"school.location || school.contact\">\n          <li *ngIf=\"school.location\" class=\"text-sentence\">\n            <i class=\"fas fa-map-marker-alt fa-li text-secondary\"></i>\n            {{ school.fullAddress }}\n          </li>\n          <li *ngIf=\"school.contact\">\n            <i class=\"fas fa-li fa-phone fa-flip-horizontal text-secondary\"></i>\n            {{ getMobileNumber(school.contact.phone) }}\n          </li>\n        </ul>\n      </div>\n      <div class=\"school-footer card-footer\">\n        <!-- <div class=\"school-ratings float-left\">\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n          <i class=\"fas fa-star\"></i>\n        </div> -->\n        <a routerLink=\"/schools/{{ school.id }}\" class=\"blog-link-more\"\n          >Details <i class=\"fas fa-arrow-right transition\"></i\n        ></a>\n      </div>\n    </div>\n  </div>\n</div>\n<lib-busy *ngIf=\"loading\"></lib-busy>\n<lib-not-found-box\n  *ngIf=\"isEmpty && !loading\"\n  message=\"There is no school matching your search.\"\n  title=\"No schools found\"\n>\n</lib-not-found-box>\n"
                }] }
    ];
    /** @nocollapse */
    SchoolBoxComponent.ctorParameters = function () { return [
        { type: RequestService }
    ]; };
    SchoolBoxComponent.propDecorators = {
        schoolParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return SchoolBoxComponent;
}(BaseDataComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SimpleSelectComponent = /** @class */ (function () {
    function SimpleSelectComponent() {
        this.data = [];
        this.placeholder = 'Choose one';
        this.defaultValue = '';
        this.whenSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    SimpleSelectComponent.prototype.notifyChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.whenSelected.emit(value);
    };
    SimpleSelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'lib-simple-select',
                    template: "<select\n  class=\"form-control custom-select\"\n  [value]=\"defaultValue\"\n  (change)=\"notifyChange($event.target.value)\"\n>\n  <option value=\"\">{{ placeholder }}</option>\n  <option *ngFor=\"let item of data; let i = index\" value=\"{{ i }}\">\n    {{ item }}</option\n  >\n</select>\n"
                }] }
    ];
    SimpleSelectComponent.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        defaultValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        whenSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return SimpleSelectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(router) {
        this.router = router;
        this.icon = 'assets/images/icons/empty.svg';
    }
    NotFoundComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'lib-not-found-box',
                    template: "<div class=\"form pl-4 position-relative pr-4 pt-5 form-box pb-4 empty-data \">\n  <div class=\"form-group text-center mb-3 max-width-500\">\n    <img src=\"{{ icon }}\" width=\"150\" />\n    <h5 class=\"empty-data-title mt-5 mb-4 font-weight-bold text-uppercase\">{{ title }}</h5>\n    <p class=\"empty-data-description\">\n      {{ message }}\n    </p>\n  </div>\n</div>"
                }] }
    ];
    /** @nocollapse */
    NotFoundComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    NotFoundComponent.propDecorators = {
        icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        message: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
    return NotFoundComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BackButtonComponent = /** @class */ (function () {
    function BackButtonComponent(location) {
        this.location = location;
    }
    /**
     * @return {?}
     */
    BackButtonComponent.prototype.goBack = /**
     * @return {?}
     */
    function () {
        this.location.back();
    };
    BackButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'lib-back-button',
                    template: "<a\n  (click)=\"goBack()\"\n  class=\"link-back pointer transition text-white d-inline-block mt-4\"\n  ><i class=\"fas fa-arrow-left\"></i\n></a>\n"
                }] }
    ];
    /** @nocollapse */
    BackButtonComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
    ]; };
    return BackButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.type = 'warning';
    }
    /**
     * @return {?}
     */
    AlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.message = Array.isArray(this.message) ? this.message : [this.message];
    };
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
    return AlertComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PageTransitionComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(PageTransitionComponent, _super);
    function PageTransitionComponent(router) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.activeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.loading = false;
        return _this;
    }
    /**
     * @return {?}
     */
    PageTransitionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription.add(this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            BaseComponent.showMenu = false;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouteConfigLoadStart"]) {
                _this.loading = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouteConfigLoadEnd"]) {
                _this.loading = false;
            }
        })));
    };
    /**
     * @return {?}
     */
    PageTransitionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    PageTransitionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'lib-page-transition',
                    template: "<div class=\"progress page-loader\" *ngIf=\"loading\">\n  <div\n    class=\"progress-bar bg-danger progress-bar-striped progress-bar-animated\"\n    style=\"width: 100%\"\n  ></div>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    PageTransitionComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    PageTransitionComponent.propDecorators = {
        activeChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return PageTransitionComponent;
}(BaseComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SharedModule = /** @class */ (function () {
    function SharedModule() {
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
                        PageTransitionComponent,
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
                        PageTransitionComponent,
                    ],
                },] }
    ];
    return SharedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthService = /** @class */ (function () {
    function AuthService(router, httpService) {
        this.router = router;
        this.httpService = httpService;
        this.url = 'members';
    }
    /**
     * @param {?} data
     * @return {?}
     */
    AuthService.prototype.login = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        return this.httpService.request('members/login', Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, data), 'post');
    };
    /**
     * @param {?} member
     * @return {?}
     */
    AuthService.prototype.setMember = /**
     * @param {?} member
     * @return {?}
     */
    function (member) {
        this.initMember();
        this.member.next(member);
        localStorage.setItem('member', JSON.stringify(member));
    };
    /**
     * @return {?}
     */
    AuthService.prototype.getMember = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var member = localStorage.getItem('member');
        if (member) {
            return JSON.parse(member);
        }
        return null;
    };
    /**
     * @return {?}
     */
    AuthService.prototype.logout = /**
     * @return {?}
     */
    function () {
        this.member = null;
        localStorage.removeItem('member');
        this.router.navigateByUrl('/login');
    };
    /**
     * @private
     * @return {?}
     */
    AuthService.prototype.initMember = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.member) {
            this.member = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        }
    };
    /**
     * @return {?}
     */
    AuthService.prototype.gotoMembers = /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/members');
    };
    /**
     * @return {?}
     */
    AuthService.prototype.gotoVisitors = /**
     * @return {?}
     */
    function () {
        this.router.navigateByUrl('/');
    };
    /**
     * @return {?}
     */
    AuthService.prototype.gotoStudents = /**
     * @return {?}
     */
    function () {
        location.assign(helpers__WEBPACK_IMPORTED_MODULE_7__["STUDENTS_URL"]);
    };
    /**
     * @return {?}
     */
    AuthService.prototype.gotoAdmin = /**
     * @return {?}
     */
    function () {
        location.assign(helpers__WEBPACK_IMPORTED_MODULE_7__["ADMIN_URL"]);
    };
    /**
     * @param {?} url
     * @return {?}
     */
    AuthService.prototype.isLoggedIn = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.url = url;
        /** @type {?} */
        var member = this.getMember();
        if (member) {
            this.initMember();
            this.member.next(member);
            return true;
        }
        return false;
    };
    AuthService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
        { type: HttpService }
    ]; };
    /** @nocollapse */ AuthService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AuthService_Factory() { return new AuthService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(HttpService)); }, token: AuthService, providedIn: "root" });
    return AuthService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InterceptorService = /** @class */ (function () {
    function InterceptorService(authService) {
        this.authService = authService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    InterceptorService.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        /** @type {?} */
        var member = this.authService.getMember();
        if (member) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + member.token,
                },
            });
        }
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            if (err.status === 401) {
                _this.authService.logout();
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
        })));
    };
    InterceptorService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    InterceptorService.ctorParameters = function () { return [
        { type: AuthService }
    ]; };
    /** @nocollapse */ InterceptorService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function InterceptorService_Factory() { return new InterceptorService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(AuthService)); }, token: InterceptorService, providedIn: "root" });
    return InterceptorService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SchoolService = /** @class */ (function () {
    function SchoolService() {
        this.school = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
    }
    /**
     * @param {?} school
     * @return {?}
     */
    SchoolService.prototype.setValue = /**
     * @param {?} school
     * @return {?}
     */
    function (school) {
        this.school.next(school);
    };
    /**
     * @return {?}
     */
    SchoolService.prototype.get = /**
     * @return {?}
     */
    function () {
        return this.school;
    };
    /**
     * @return {?}
     */
    SchoolService.prototype.getValue = /**
     * @return {?}
     */
    function () {
        return this.school.getValue();
    };
    SchoolService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SchoolService.ctorParameters = function () { return []; };
    /** @nocollapse */ SchoolService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function SchoolService_Factory() { return new SchoolService(); }, token: SchoolService, providedIn: "root" });
    return SchoolService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ScriptStore = [
    {
        name: 'cloudinary',
        src: 'https://widget.cloudinary.com/v2.0/global/all.js',
    },
    { name: 'paystack', src: 'https://js.paystack.co/v1/inline.js' },
];
var ScriptLoaderService = /** @class */ (function () {
    function ScriptLoaderService() {
        var _this = this;
        this.scripts = {};
        ScriptStore.forEach((/**
         * @param {?} script
         * @return {?}
         */
        function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src,
            };
        }));
    }
    /**
     * @param {...?} scripts
     * @return {?}
     */
    ScriptLoaderService.prototype.load = /**
     * @param {...?} scripts
     * @return {?}
     */
    function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        /** @type {?} */
        var promises = [];
        scripts.forEach((/**
         * @param {?} script
         * @return {?}
         */
        function (script) { return promises.push(_this.loadScript(script)); }));
        return Promise.all(promises);
    };
    /**
     * @param {?} name
     * @return {?}
     */
    ScriptLoaderService.prototype.loadScript = /**
     * @param {?} name
     * @return {?}
     */
    function (name) {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            if (!_this.scripts[name].loaded) {
                /** @type {?} */
                var script_1 = document.createElement('script');
                script_1.type = 'text/javascript';
                script_1.src = _this.scripts[name].src;
                if (script_1.readyState) {
                    script_1.onreadystatechange = (/**
                     * @return {?}
                     */
                    function () {
                        if (script_1.readyState === 'loaded' ||
                            script_1.readyState === 'complete') {
                            script_1.onreadystatechange = null;
                            _this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    });
                }
                else {
                    script_1.onload = (/**
                     * @return {?}
                     */
                    function () {
                        _this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    });
                }
                script_1.onerror = (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return resolve({ script: name, loaded: false, status: 'Loaded' });
                });
                document.getElementsByTagName('head')[0].appendChild(script_1);
            }
            else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        }));
    };
    ScriptLoaderService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ScriptLoaderService.ctorParameters = function () { return []; };
    /** @nocollapse */ ScriptLoaderService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ScriptLoaderService_Factory() { return new ScriptLoaderService(); }, token: ScriptLoaderService, providedIn: "root" });
    return ScriptLoaderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var Member = /** @class */ (function () {
    function Member() {
    }
    return Member;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var School = /** @class */ (function () {
    function School() {
    }
    return School;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ActiveMemberGuard = /** @class */ (function () {
    function ActiveMemberGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    ActiveMemberGuard.prototype.canActivate = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        /** @type {?} */
        var isActive = this.authService.getMember().isActive;
        if (!isActive) {
            this.router.navigateByUrl('/members/membership-renewal');
        }
        return isActive;
    };
    ActiveMemberGuard.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ActiveMemberGuard.ctorParameters = function () { return [
        { type: AuthService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    /** @nocollapse */ ActiveMemberGuard.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ActiveMemberGuard_Factory() { return new ActiveMemberGuard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(AuthService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); }, token: ActiveMemberGuard, providedIn: "root" });
    return ActiveMemberGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    AuthGuard.prototype.canActivate = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        /** @type {?} */
        var authenticated = this.authService.isLoggedIn(state.url);
        if (!authenticated) {
            this.router.navigateByUrl('/login');
        }
        return authenticated;
    };
    AuthGuard.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: AuthService },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
    ]; };
    /** @nocollapse */ AuthGuard.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function AuthGuard_Factory() { return new AuthGuard(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(AuthService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"])); }, token: AuthGuard, providedIn: "root" });
    return AuthGuard;
}());


//# sourceMappingURL=shared.js.map


/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!**********************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-12 col-md-6\">\n        <h5 class=\"font-weight-bold text-uppercase\">Organizaton History</h5>\n        <p>Founded in 1995, the <strong>Association of Private School Owners of Nigeria</strong> was created to improve\n          the standard of quality eduction in Nigeria and promote the interest of proprietors of private schools and\n          other NGOs engaged in education related matters by creating a platform where members can function without any\n          hindrance. <a routerLink=\"/about\" class=\"blog-link-more\">Read more...</a></p>\n      </div>\n      <div class=\"col-sm-6 col-12 col-md-3\">\n        <h5 class=\"font-weight-bold text-uppercase\">Quick Links</h5>\n        <ul class=\"list-unstyled\">\n          <li>\n            <a routerLink=\"/\">Home</a>\n          </li>\n          <li>\n            <a routerLink=\"/blog\">Publications</a>\n          </li>\n          <li>\n            <a routerLink=\"/schools\">Member schools</a>\n          </li>\n          <li>\n            <a routerLink=\"/login\">Member login</a>\n          </li>\n          <li>\n            <a [href]=\"'https://www.getsmati.com'\" target=\"_blank\">getsmati.com</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-sm-6 col-md-3 col-12\">\n        <h5 class=\"font-weight-bold text-uppercase\">Support</h5>\n        <ul class=\"list-unstyled\">\n          <li>\n            <a routerLink=\"/contact\">Contact</a>\n          </li>\n          <li>\n            <a routerLink=\"/terms\">Terms &amp; Conditions</a>\n          </li>\n          <li>\n            <a routerLink=\"/privacy\">Privacy Policy</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"copyright\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-sm-9\">\n          <p>&copy; 2019 Association of Private School Owners of Nigeria. All Rights Reserved</p>\n        </div>\n        <div class=\"col-sm-3 text-center\">\n          <a [href]=\"'https://www.facebook.com/apsonigeria'\" class=\"social-item facebook\" target=\"_blank\"><i\n              class=\"fab fa-facebook-f transition\"></i></a>\n          <a [href]=\"'https://www.twitter.com/apsonigeria'\" class=\"social-item facebook twitter\" target=\"_blank\"><i\n              class=\"fab fa-twitter transition\"></i></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!**********************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/header/header.component.html ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<lib-page-transition\n  (activeChange)=\"classReference.showMenu = $event\"\n></lib-page-transition>\n<div class=\"nav-top alert sticky-top\">\n  <div class=\"container-fluid position-relative\">\n    <span\n      ><strong>News!</strong>Register for the 2019 Education for All Conference.\n      <a routerLink=\"/blog/9945645\" class=\"d-inline-block\">Click here</a></span\n    >\n  </div>\n</div>\n<nav\n  class=\"navbar navbar-light bg-light sticky-top navbar-expand-lg\"\n  id=\"navbar\"\n>\n  <div class=\"container-fluid\">\n    <a class=\"navbar-brand\" routerLink=\"/\">\n      <img src=\"assets/images/icons/icon.jpg\" width=\"40\" />\n      <span>APSON</span>\n    </a>\n    <button\n      (click)=\"toggleMenu()\"\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbarToggler8\"\n      aria-controls=\"navbarTogglerDemo01\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div\n      class=\"collapse navbar-collapse\"\n      id=\"navbarToggler8\"\n      [style.display]=\"classReference.showMenu ? 'block' : 'none'\"\n    >\n      <ul class=\"navbar-nav mt-2 mt-lg-0 ml-auto \">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"/\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/about\">About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/schools\">Schools</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/blog\">Publications</a>\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link btn-brand\" routerLink=\"/register\"\n            >Become a member</a\n          >\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!******************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/home/home.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero overlay\">\n  <div class=\"container-fluid\">\n    <div class=\"hero-inner\">\n      <h1>Building a legacy of quality education in Nigeria</h1>\n      <p>\n        APSON is the umbrella body of all private school owners and NGOs in\n        education related matters in Nigeria.\n      </p>\n      <div>\n        <a class=\"btn-brand btn-bordered btn-bordered-white\" routerLink=\"/about\"\n          >About us</a\n        >\n        <a class=\"btn-brand\" routerLink=\"/register\">Become a member</a>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"container\">\n    <header class=\"header\">\n      <span>What we do</span>\n      <h2>Promoting education for national development</h2>\n      <p>\n        <strong>The Association of Private School Owners of Nigeria</strong>\n        (APSON) was created to improve the standard of quality eduction in\n        Nigeria and promote the interest of proprietors of private schools by\n        creating a platform where members can function without any hindrance.\n      </p>\n    </header>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"mb-4 col-md-4 col-12\">\n        <div class=\"intro-box overlay bg-about-us card h-100\">\n          <div>\n            <span>Who we are</span>\n            <h3>About Us</h3>\n            <p>\n              Learn about our organization, our vision, mission and executives.\n            </p>\n            <a routerLink=\"/about\" class=\"btn-brand\">Learn about us</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"mb-4 col-sm-6 col-md-4 col-12\">\n        <div class=\"intro-box overlay bg-news card h-100\">\n          <div>\n            <span>Our publications</span>\n            <h3>News &amp; Events</h3>\n            <p>Stay updated with news, events and publications from APSON.</p>\n            <a routerLink=\"/blog\" class=\"btn-brand\">Get updated</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"mb-4 col-sm-6 col-md-4 col-12\">\n        <div class=\"intro-box overlay bg-schools card h-100\">\n          <div>\n            <span>Our schools</span>\n            <h3>Member schools</h3>\n            <p>Get direct access to the best private schools in Nigeria.</p>\n            <a routerLink=\"/schools\" class=\"btn-brand\">Find a school</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"section bg-grey\">\n  <div class=\"container-fluid position-relative\">\n    <header class=\"header-left\">\n      <span class=\"font-weight-bold position-relative pl-5\">Publicatons,</span>\n      <h2 class=\"font-weight-bold text-uppercase\">News & Events</h2>\n      <a routerLink=\"/blog\" class=\"blog-link-more float-right\"\n        >VIEW ALL <i class=\"fas fa-arrow-right\"></i\n      ></a>\n    </header>\n    <div class=\"row blog-slider boxed-row\">\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100 \">\n          <span class=\"blog-category bg-cat-news\">News</span>\n          <a routerLink=\"/blog/994343\" class=\"link-cover\"></a>\n          <div class=\"blog-image-wrapper\">\n            <img\n              src=\"assets/images/limbo/zach-vessels-1284924-unsplash.jpg\"\n              width=\"100%\"\n              class=\"blog-image\"\n            />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">How to start a private school in Nigeria</h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a routerLink=\"/blog/994343\" class=\"link-cover\"></a>\n          <span class=\"blog-category bg-cat-publication\">Publication</span>\n          <div class=\"blog-image-wrapper\">\n            <img\n              src=\"assets/images/limbo/joshua-oluwagbemiga-1435064-unsplash.jpg\"\n              width=\"100%\"\n              class=\"blog-image\"\n            />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">\n              How to start a private school in Nigeria.\n            </h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a routerLink=\"/blog/994343\" class=\"link-cover\"></a>\n          <span class=\"blog-category bg-cat-event\">Event</span>\n          <div class=\"blog-image-wrapper\">\n            <img\n              src=\"assets/images/limbo/annie-spratt-1215936-unsplash.jpg\"\n              width=\"100%\"\n              class=\"blog-image\"\n            />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">Register for the 2019 Education for all</h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a class=\"link-cover\" routerLink=\"/blog/994343\"></a>\n          <span class=\"blog-category bg-cat-event\">Event</span>\n          <div class=\"blog-image-wrapper\">\n            <img\n              src=\"assets/images/limbo/santi-vedri-707620-unsplash.jpg\"\n              width=\"100%\"\n              class=\"blog-image\"\n            />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">Register for the 2019 Education for all</h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a routerLink=\"/blog/994343\" class=\"link-cover\"></a>\n          <span class=\"blog-category bg-cat-publication\">Publication</span>\n          <div class=\"blog-image-wrapper\">\n            <img\n              src=\"assets/images/limbo/zach-vessels-1285339-unsplash.jpg\"\n              width=\"100%\"\n              class=\"blog-image\"\n            />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">Register for the 2019 Education for all</h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-6 mb-4\">\n        <div class=\"blog-box card h-100\">\n          <a routerLink=\"/blog/994343\" class=\"link-cover\"></a>\n          <span class=\"blog-category bg-cat-news\">News</span>\n          <div class=\"blog-image-wrapper\">\n            <img\n              src=\"assets/images/limbo/benny-jackson-222664-unsplash.jpg\"\n              width=\"100%\"\n              class=\"blog-image\"\n            />\n          </div>\n          <div class=\"blog-content\">\n            <span class=\"blog-date\">April 17, 2019</span>\n            <h4 class=\"blog-title\">Register for the 2019 Education for all</h4>\n            <span class=\"blog-link-more\">READ MORE &rarr;</span>\n          </div>\n        </div>\n      </div>\n    </div>\n    <button type=\"button\" class=\"btn blog-control transition\">\n      <i class=\"fas fa-arrow-left\"></i>\n    </button>\n    <button\n      type=\"button\"\n      class=\"btn blog-control transition blog-control-right\"\n    >\n      <i class=\"fas fa-arrow-right\"></i>\n    </button>\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"container\">\n    <header class=\"header\">\n      <span>Why join us</span>\n      <h2>100% SUPPORT FOR MEMBERS WELFARE</h2>\n      <p>\n        As the official and flagship organization of private school owners in\n        Nigeria, we constantly building an organization that puts it's members\n        welfare at the core center of our decision making process.\n      </p>\n    </header>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row position-relative\">\n      <div class=\"col-sm-4\">\n        <div class=\"why-item\">\n          <i class=\"fas why-item-icon fa-handshake\"></i>\n          <span class=\"why-item-subtitle\">Members welfare</span>\n          <h4>100% Support for Member's welfare</h4>\n          <p>\n            APSON creates an enabling environment to protect her members from\n            undue harassment, hindrance or encumbrances.\n          </p>\n          <a class=\"blog-link-more\" routerLink=\"/about\">Learn more</a>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"why-item\">\n          <i class=\"fas why-item-icon fa-map-marked-alt\"></i>\n          <span class=\"why-item-subtitle\">School directory</span>\n          <h4>Get your schools discovered</h4>\n          <p>\n            APSON provides an online platform where member schools are freely\n            advertised, making easy for the public to discover your schools.\n          </p>\n          <a routerLink=\"/schools\" class=\"blog-link-more\">Learn more</a>\n        </div>\n      </div>\n      <div class=\"col-sm-4\">\n        <div class=\"why-item\">\n          <i class=\"fas why-item-icon fa-laptop\"></i>\n          <span class=\"why-item-subtitle\">getsmati.com</span>\n          <h4>Free school management software</h4>\n          <p>\n            Make it easy for your students to pay fees, get results, connect\n            with their classmates with our state of the art student management\n            system.\n          </p>\n          <a\n            [href]=\"'https://www.getsmati.com'\"\n            class=\"blog-link-more\"\n            target=\"_blank\"\n            >Learn more</a\n          >\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<section class=\"section bg-grey\">\n  <div class=\"container-fluid position-relative\">\n    <header class=\"header-left\">\n      <span class=\"font-weight-bold position-relative pl-5\">Find Schools,</span>\n      <h2 class=\"font-weight-bold text-uppercase\">\n        Best private schools in Nigeria\n      </h2>\n    </header>\n    <lib-school-box></lib-school-box>\n    <div class=\"text-center btn-footer-grp\">\n      <a routerLink=\"/schools\" class=\"btn-brand\">Discover more schools</a>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/members/header/header.component.html":
/*!******************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/members/header/header.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"container-fluid\">\n    <ng-container *ngIf=\"commonService.fullWidth; else pageTittle\">\n      <a (click)=\"location.back()\" class=\"text-hover transition\">\n        <i\n          class=\"fas transition fa-arrow-circle-left mr-2 header-back-icon\"\n        ></i>\n        Back\n      </a>\n    </ng-container>\n    <ng-template #pageTittle>\n      <button\n        class=\"btn-menu btn btn-link\"\n        type=\"button\"\n        (click)=\"toggleMenu()\"\n      >\n        <span></span>\n        <span class=\"mt-1 w-75\"></span>\n        <span class=\"mt-1\"></span>\n      </button>\n      <h1 class=\"mb-0 d-inline-block\">\n        {{ commonService.getPageTitle() }}\n      </h1>\n    </ng-template>\n  </div>\n</header>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/members/members.component.html":
/*!************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/members/members.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"members-wrapper\">\n  <main class=\"min-vh-100 bg-grey\">\n    <lib-page-transition></lib-page-transition>\n\n    <ng-container *ngIf=\"commonService.isReady(); else setup\">\n      <app-navbar></app-navbar>\n      <app-member-header></app-member-header>\n\n      <aside class=\"right-panel\">\n        <section class=\"right-body pt-5 pb-5\">\n          <div class=\"container-fluid \">\n            <router-outlet></router-outlet>\n          </div>\n        </section>\n      </aside>\n\n      <div\n        class=\"backdrop\"\n        [class.hidden-menu]=\"classReference.showMenu\"\n        (click)=\"toggleMenu()\"\n      ></div>\n    </ng-container>\n\n    <ng-template #setup>\n      <app-setup></app-setup>\n    </ng-template>\n  </main>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/members/navbar/navbar.component.html":
/*!******************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/members/navbar/navbar.component.html ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"left-panel\" [class.hidden-menu]=\"classReference.showMenu\">\n  <button type=\"button\" class=\"btn btn-link btn-back\" (click)=\"toggleMenu()\">\n    <i class=\"fas fa-arrow-left\"></i>\n  </button>\n  <div class=\"left-content\">\n    <ng-container\n      *ngIf=\"commonService.getSchools().length; else addSchoolButton\"\n    >\n      <div class=\"left-panel-profile mt-3\">\n        <img\n          src=\"{{ commonService.getActiveSchool().logo }}\"\n          class=\"profile-image bg-white d-block ml-auto mr-auto\"\n          width=\"60\"\n          height=\"60\"\n        />\n        <div\n          class=\"drop-wrapper\"\n          [class.active]=\"dropdownShown\"\n          #dropdownWrapper\n        >\n          <div\n            class=\"drop drop-icon mt-3 text-center\"\n            (click)=\"toggleDropdownMenu($event)\"\n          >\n            <h4\n              class=\"font-weight-bold left-panel-profile-name text-capitalize\"\n            >\n              {{ commonService.getActiveSchool().name }}\n            </h4>\n            <p class=\"left-panel-email\">\n              {{ commonService.getActiveSchool().typeName }}\n            </p>\n            <i class=\"fas fa-caret-down drop-icon\"></i>\n          </div>\n          <div class=\"drop-menu\">\n            <a\n              *ngFor=\"let school of commonService.getSchools()\"\n              (click)=\"commonService.saveActiveSchool(school.id)\"\n              [class.active]=\"commonService.isActiveSchool(school)\"\n              >{{ school.name }}<br />({{ school.typeName }} school)</a\n            >\n            <a class=\"btn-brand\" routerLink=\"/members/add-school\"\n              >Add a new school</a\n            >\n          </div>\n        </div>\n      </div>\n    </ng-container>\n    <ng-template #addSchoolButton>\n      <a href=\"/#/members/add-school/\" class=\"btn-brand mt-4 w-100\"\n        >Add your school</a\n      >\n    </ng-template>\n\n    <ul class=\"fa-ul \">\n      <li routerLinkActive=\"active\">\n        <i class=\"fas fa-li transition fa-chart-line\"></i>\n        <a routerLink=\"/members/dashboard/\" class=\"transition\">Dashboard</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <i class=\"fas fa-li fa-user-graduate transition\"></i>\n        <a routerLink=\"/members/students/\" class=\"transition\">Students</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <i class=\"fas fa-li transition fa-file-signature\"></i>\n        <a routerLink=\"/members/scores/\" class=\"transition\">Score Sheet</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <i class=\"fas fa-li transition fa-cogs\"></i>\n        <a routerLink=\"/members/settings/\" class=\"transition\"\n          >School Settings</a\n        >\n      </li>\n      <li routerLinkActive=\"active\">\n        <i class=\"fas fa-li transition fa-user-cog\"></i>\n        <a routerLink=\"/members/profile/\" class=\"transition\">My Profile</a>\n      </li>\n      <li>\n        <i class=\"fas fa-li transition fa-sign-in-alt\"></i>\n        <a (click)=\"logout()\" class=\"transition pointer\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</aside>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/members/setup/setup.component.html":
/*!****************************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/members/setup/setup.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"setup min-vh-100 text-center\">\n    <img src=\"/assets/images/icons/setup.svg\" width=\"200\" />\n    <h4 class=\"empty-data-title mt-5 mb-4\">\n      <img src=\"/assets/images/icons/loader-half.gif\" width=\"40\" class=\"mr-3\" />\n      Setting up your workspace....\n    </h4>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../node_modules/raw-loader/index.js!./src/app/visitors.component.html":
/*!*****************************************************************************************************************************!*\
  !*** /Users/ejodamenokosun/Documents/GitHub/apson/apson-frontend/node_modules/raw-loader!./src/app/visitors.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"visitors-wrapper\">\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</main>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ "../../node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _visitors_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visitors.module */ "./src/app/visitors.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _members_members_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./members/members.module */ "./src/app/members/members.module.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                _visitors_module__WEBPACK_IMPORTED_MODULE_8__["VisitorsModule"],
                _members_members_module__WEBPACK_IMPORTED_MODULE_10__["MembersModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__["ServiceWorkerModule"].register('ngsw-worker.js', {
                    enabled: _environments_environment_prod__WEBPACK_IMPORTED_MODULE_7__["environment"].production,
                }),
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: shared__WEBPACK_IMPORTED_MODULE_6__["InterceptorService"],
                    multi: true,
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "../../node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        })
    ], FooterComponent);
    return FooterComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");



var HeaderComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HeaderComponent, _super);
    function HeaderComponent() {
        return _super.call(this) || this;
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "../../node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        })
    ], HeaderComponent);
    return HeaderComponent;
}(shared__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "../../node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/members/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/members/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: MembersHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersHeaderComponent", function() { return MembersHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dropdown */ "../../dist/dropdown/fesm5/dropdown.js");
/* harmony import */ var _services_common_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common-service.service */ "./src/app/members/services/common-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");






var MembersHeaderComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MembersHeaderComponent, _super);
    function MembersHeaderComponent(authService, commonService, location) {
        var _this = _super.call(this) || this;
        _this.authService = authService;
        _this.commonService = commonService;
        _this.location = location;
        return _this;
    }
    MembersHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.member = this.authService.getMember();
        this.subscription.add(this.authService.member.subscribe(function (member) {
            _this.member = member;
        }));
    };
    MembersHeaderComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    MembersHeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    MembersHeaderComponent.ctorParameters = function () { return [
        { type: shared__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_common_service_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
    ]; };
    MembersHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "../../node_modules/raw-loader/index.js!./src/app/members/header/header.component.html"),
        })
    ], MembersHeaderComponent);
    return MembersHeaderComponent;
}(dropdown__WEBPACK_IMPORTED_MODULE_3__["Dropdown"]));



/***/ }),

/***/ "./src/app/members/members-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/members/members-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MembersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersRoutingModule", function() { return MembersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var _members_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./members.component */ "./src/app/members/members.component.ts");





var routes = [
    {
        path: 'members',
        canActivate: [shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        component: _members_component__WEBPACK_IMPORTED_MODULE_4__["MembersComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/members/dashboard',
            },
            {
                path: 'dashboard',
                pathMatch: 'full',
                canActivate: [shared__WEBPACK_IMPORTED_MODULE_3__["ActiveMemberGuard"]],
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/members/dashboard/dashboard.module.ts")).then(function (m) { return m.DashboardModule; });
                },
            },
            {
                path: 'students',
                pathMatch: 'full',
                canActivate: [shared__WEBPACK_IMPORTED_MODULE_3__["ActiveMemberGuard"]],
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | students-students-module */ "students-students-module").then(__webpack_require__.bind(null, /*! ./students/students.module */ "./src/app/members/students/students.module.ts")).then(function (m) { return m.StudentsModule; });
                },
            },
            {
                path: 'scores',
                pathMatch: 'full',
                canActivate: [shared__WEBPACK_IMPORTED_MODULE_3__["ActiveMemberGuard"]],
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | scores-scores-module */ "scores-scores-module").then(__webpack_require__.bind(null, /*! ./scores/scores.module */ "./src/app/members/scores/scores.module.ts")).then(function (m) { return m.ScoresModule; });
                },
            },
            {
                path: 'settings',
                pathMatch: 'full',
                canActivate: [shared__WEBPACK_IMPORTED_MODULE_3__["ActiveMemberGuard"]],
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "./src/app/members/settings/settings.module.ts")).then(function (m) { return m.SettingsModule; });
                },
            },
            {
                path: 'profile',
                pathMatch: 'full',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/members/profile/profile.module.ts")).then(function (m) { return m.ProfileModule; });
                },
            },
            {
                path: 'add-school',
                pathMatch: 'full',
                canActivate: [shared__WEBPACK_IMPORTED_MODULE_3__["ActiveMemberGuard"]],
                loadChildren: function () {
                    return Promise.all(/*! import() | add-school-add-school-module */[__webpack_require__.e("common"), __webpack_require__.e("add-school-add-school-module")]).then(__webpack_require__.bind(null, /*! ./add-school/add-school.module */ "./src/app/members/add-school/add-school.module.ts")).then(function (m) { return m.AddSchoolModule; });
                },
            },
            {
                path: 'membership-renewal',
                pathMatch: 'full',
                loadChildren: function () {
                    return Promise.all(/*! import() | make-payment-make-payment-module */[__webpack_require__.e("common"), __webpack_require__.e("make-payment-make-payment-module")]).then(__webpack_require__.bind(null, /*! ./make-payment/make-payment.module */ "./src/app/members/make-payment/make-payment.module.ts")).then(function (m) { return m.MakePaymentModule; });
                },
            },
        ],
    },
];
var MembersRoutingModule = /** @class */ (function () {
    function MembersRoutingModule() {
    }
    MembersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled',
                    onSameUrlNavigation: 'reload',
                    useHash: true,
                    urlUpdateStrategy: 'eager',
                }),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MembersRoutingModule);
    return MembersRoutingModule;
}());



/***/ }),

/***/ "./src/app/members/members.component.ts":
/*!**********************************************!*\
  !*** ./src/app/members/members.component.ts ***!
  \**********************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var _services_common_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/common-service.service */ "./src/app/members/services/common-service.service.ts");




var MembersComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MembersComponent, _super);
    function MembersComponent(commonService) {
        var _this = _super.call(this) || this;
        _this.commonService = commonService;
        return _this;
    }
    MembersComponent.prototype.ngOnInit = function () { };
    MembersComponent.ctorParameters = function () { return [
        { type: _services_common_service_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
    ]; };
    MembersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-members',
            template: __webpack_require__(/*! raw-loader!./members.component.html */ "../../node_modules/raw-loader/index.js!./src/app/members/members.component.html"),
        })
    ], MembersComponent);
    return MembersComponent;
}(shared__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/members/members.module.ts":
/*!*******************************************!*\
  !*** ./src/app/members/members.module.ts ***!
  \*******************************************/
/*! exports provided: MembersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersModule", function() { return MembersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/members/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var _members_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./members-routing.module */ "./src/app/members/members-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _members_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./members.component */ "./src/app/members/members.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/members/header/header.component.ts");
/* harmony import */ var _setup_setup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setup/setup.component */ "./src/app/members/setup/setup.component.ts");










var MembersModule = /** @class */ (function () {
    function MembersModule() {
    }
    MembersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"],
                _members_component__WEBPACK_IMPORTED_MODULE_7__["MembersComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["MembersHeaderComponent"],
                _setup_setup_component__WEBPACK_IMPORTED_MODULE_9__["SetupComponent"],
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _members_routing_module__WEBPACK_IMPORTED_MODULE_5__["MembersRoutingModule"]],
        })
    ], MembersModule);
    return MembersModule;
}());



/***/ }),

/***/ "./src/app/members/navbar/navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/members/navbar/navbar.component.ts ***!
  \****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dropdown */ "../../dist/dropdown/fesm5/dropdown.js");
/* harmony import */ var _services_common_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/common-service.service */ "./src/app/members/services/common-service.service.ts");





var NavbarComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](NavbarComponent, _super);
    function NavbarComponent(authService, commonService) {
        var _this = _super.call(this) || this;
        _this.authService = authService;
        _this.commonService = commonService;
        return _this;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.member = this.authService.getMember();
        this.subscription.add(this.authService.member.subscribe(function (member) {
            _this.member = member;
        }));
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: shared__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_common_service_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "../../node_modules/raw-loader/index.js!./src/app/members/navbar/navbar.component.html"),
        })
    ], NavbarComponent);
    return NavbarComponent;
}(dropdown__WEBPACK_IMPORTED_MODULE_3__["Dropdown"]));



/***/ }),

/***/ "./src/app/members/services/common-service.service.ts":
/*!************************************************************!*\
  !*** ./src/app/members/services/common-service.service.ts ***!
  \************************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");



var CommonService = /** @class */ (function () {
    function CommonService(router) {
        this.router = router;
        this.pageTitle = 'Dashboard';
        this.schools = [];
        this.ready = false;
        this.fullWidth = false;
    }
    CommonService.prototype.setPageTitle = function (title) {
        this.pageTitle = title;
    };
    CommonService.prototype.getPageTitle = function () {
        return this.pageTitle;
    };
    CommonService.prototype.isReady = function () {
        return this.ready;
    };
    CommonService.prototype.setReady = function (ready) {
        this.ready = ready;
    };
    CommonService.prototype.findSchool = function (schoolId) {
        var school = this.schools.find(function (school) { return school.id === schoolId; });
        return school || this.schools[this.schools.length - 1];
    };
    CommonService.prototype.setActiveSchool = function (schoolId) {
        var id = schoolId || localStorage.getItem('activeSchoolId');
        if (id) {
            this.activeSchool = this.findSchool(id);
        }
    };
    CommonService.prototype.saveActiveSchool = function (schoolId) {
        localStorage.setItem('activeSchoolId', schoolId);
        this.setReady(false);
    };
    CommonService.prototype.getActiveSchool = function () {
        return this.activeSchool;
    };
    CommonService.prototype.isActiveSchool = function (school) {
        return this.activeSchool.id === school.id;
    };
    CommonService.prototype.setSchools = function (schools) {
        this.schools = schools;
    };
    CommonService.prototype.getSchools = function () {
        return this.schools;
    };
    CommonService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/members/setup/setup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/members/setup/setup.component.ts ***!
  \**************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var _services_common_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common-service.service */ "./src/app/members/services/common-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");





var SetupComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SetupComponent, _super);
    function SetupComponent(requestService, authService, commonService, router) {
        var _this = _super.call(this) || this;
        _this.requestService = requestService;
        _this.authService = authService;
        _this.commonService = commonService;
        _this.router = router;
        return _this;
    }
    SetupComponent.prototype.ngOnInit = function () {
        var _this = this;
        var member = this.authService.getMember();
        this.subscription.add(this.requestService
            .get("schools/", { memberId: member.id, size: 1000, order: 'name,ASC' })
            .subscribe(function (response) {
            var result = response.data.result;
            _this.commonService.setSchools(result || []);
            _this.commonService.setActiveSchool(null);
            _this.commonService.setReady(true);
        }, function (error) {
            _this.isBusy = false;
        }));
    };
    SetupComponent.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
        this.router.navigateByUrl('/members/dashboard');
    };
    SetupComponent.ctorParameters = function () { return [
        { type: shared__WEBPACK_IMPORTED_MODULE_2__["RequestService"] },
        { type: shared__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_common_service_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    SetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setup',
            template: __webpack_require__(/*! raw-loader!./setup.component.html */ "../../node_modules/raw-loader/index.js!./src/app/members/setup/setup.component.html"),
        })
    ], SetupComponent);
    return SetupComponent;
}(shared__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");




var LoginGuard = /** @class */ (function () {
    function LoginGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        var authenticated = this.authService.isLoggedIn('member');
        if (authenticated) {
            this.authService.gotoMembers();
        }
        return !authenticated;
    };
    LoginGuard.ctorParameters = function () { return [
        { type: shared__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/visitors-routing.module.ts":
/*!********************************************!*\
  !*** ./src/app/visitors-routing.module.ts ***!
  \********************************************/
/*! exports provided: VisitorsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsRoutingModule", function() { return VisitorsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/login.guard */ "./src/app/services/login.guard.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _visitors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visitors.component */ "./src/app/visitors.component.ts");






var routes = [
    {
        path: '',
        component: _visitors_component__WEBPACK_IMPORTED_MODULE_5__["VisitorsComponent"],
        children: [
            {
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                pathMatch: 'full',
            },
            {
                path: 'about',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | about-about-module */ "about-about-module").then(__webpack_require__.bind(null, /*! ./about/about.module */ "./src/app/about/about.module.ts")).then(function (m) { return m.AboutModule; });
                },
            },
            {
                path: 'contact',
                loadChildren: function () {
                    return Promise.all(/*! import() | contact-contact-module */[__webpack_require__.e("common"), __webpack_require__.e("contact-contact-module")]).then(__webpack_require__.bind(null, /*! ./contact/contact.module */ "./src/app/contact/contact.module.ts")).then(function (m) { return m.ContactModule; });
                },
            },
            {
                path: 'privacy',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | privacy-privacy-module */ "privacy-privacy-module").then(__webpack_require__.bind(null, /*! ./privacy/privacy.module */ "./src/app/privacy/privacy.module.ts")).then(function (m) { return m.PrivacyModule; });
                },
            },
            {
                path: 'terms',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | terms-terms-module */ "terms-terms-module").then(__webpack_require__.bind(null, /*! ./terms/terms.module */ "./src/app/terms/terms.module.ts")).then(function (m) { return m.TermsModule; });
                },
            },
            {
                path: 'login',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "./src/app/login/login.module.ts")).then(function (m) { return m.LoginModule; });
                },
                canActivate: [_services_login_guard__WEBPACK_IMPORTED_MODULE_3__["LoginGuard"]],
            },
            {
                path: 'register',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | register-register-module */ "register-register-module").then(__webpack_require__.bind(null, /*! ./register/register.module */ "./src/app/register/register.module.ts")).then(function (m) { return m.RegsiterModule; });
                },
            },
            {
                path: 'reset-password',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | reset-password-reset-password-module */ "reset-password-reset-password-module").then(__webpack_require__.bind(null, /*! ./reset-password/reset-password.module */ "./src/app/reset-password/reset-password.module.ts")).then(function (m) { return m.ResetPasswordModule; });
                },
            },
            {
                path: 'forgot-password',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | forgot-password-forgot-password-module */ "forgot-password-forgot-password-module").then(__webpack_require__.bind(null, /*! ./forgot-password/forgot-password.module */ "./src/app/forgot-password/forgot-password.module.ts")).then(function (m) { return m.ForgotPasswordModule; });
                },
            },
            {
                path: 'blog',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | blogs-blogs-module */ "blogs-blogs-module").then(__webpack_require__.bind(null, /*! ./blogs/blogs.module */ "./src/app/blogs/blogs.module.ts")).then(function (m) { return m.BlogModule; });
                },
            },
            {
                path: 'blog/news',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | blogs-blogs-module */ "blogs-blogs-module").then(__webpack_require__.bind(null, /*! ./blogs/blogs.module */ "./src/app/blogs/blogs.module.ts")).then(function (m) { return m.BlogModule; });
                },
            },
            {
                path: 'blog/publications',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | blogs-blogs-module */ "blogs-blogs-module").then(__webpack_require__.bind(null, /*! ./blogs/blogs.module */ "./src/app/blogs/blogs.module.ts")).then(function (m) { return m.BlogModule; });
                },
            },
            {
                path: 'blog/:id',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | single-blog-single-blog-module */ "single-blog-single-blog-module").then(__webpack_require__.bind(null, /*! ./single-blog/single-blog.module */ "./src/app/single-blog/single-blog.module.ts")).then(function (m) { return m.SingleBlogModule; });
                },
            },
            {
                path: 'schools',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | schools-schools-module */ "schools-schools-module").then(__webpack_require__.bind(null, /*! ./schools/schools.module */ "./src/app/schools/schools.module.ts")).then(function (m) { return m.SchoolsModule; });
                },
            },
            {
                path: 'schools/:id',
                loadChildren: function () {
                    return Promise.all(/*! import() | single-school-single-school-module */[__webpack_require__.e("common"), __webpack_require__.e("single-school-single-school-module")]).then(__webpack_require__.bind(null, /*! ./single-school/single-school.module */ "./src/app/single-school/single-school.module.ts")).then(function (m) { return m.SingleSchoolModule; });
                },
            },
        ],
    },
];
var VisitorsRoutingModule = /** @class */ (function () {
    function VisitorsRoutingModule() {
    }
    VisitorsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled',
                    onSameUrlNavigation: 'reload',
                    useHash: true,
                    urlUpdateStrategy: 'eager',
                }),
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], VisitorsRoutingModule);
    return VisitorsRoutingModule;
}());



/***/ }),

/***/ "./src/app/visitors.component.ts":
/*!***************************************!*\
  !*** ./src/app/visitors.component.ts ***!
  \***************************************/
/*! exports provided: VisitorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsComponent", function() { return VisitorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var VisitorsComponent = /** @class */ (function () {
    function VisitorsComponent() {
    }
    VisitorsComponent.prototype.ngOnInit = function () { };
    VisitorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            selector: 'app-visitors',
            template: __webpack_require__(/*! raw-loader!./visitors.component.html */ "../../node_modules/raw-loader/index.js!./src/app/visitors.component.html"),
        })
    ], VisitorsComponent);
    return VisitorsComponent;
}());



/***/ }),

/***/ "./src/app/visitors.module.ts":
/*!************************************!*\
  !*** ./src/app/visitors.module.ts ***!
  \************************************/
/*! exports provided: VisitorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorsModule", function() { return VisitorsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _visitors_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visitors-routing.module */ "./src/app/visitors-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared */ "../../dist/shared/fesm5/shared.js");
/* harmony import */ var _visitors_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visitors.component */ "./src/app/visitors.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");










var VisitorsModule = /** @class */ (function () {
    function VisitorsModule() {
    }
    VisitorsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _visitors_component__WEBPACK_IMPORTED_MODULE_7__["VisitorsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _visitors_routing_module__WEBPACK_IMPORTED_MODULE_4__["VisitorsRoutingModule"]],
        })
    ], VisitorsModule);
    return VisitorsModule;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true
};


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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map