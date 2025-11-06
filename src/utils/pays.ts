const pays = [
    {
        CODE: "AD",
        NOM: "Andorre",
        VILLE: "Andore-la-Vieille",
    },
    {
        CODE: "AE",
        NOM: "Émirats arabes unis",
        VILLE: "Dubaï",
    },
    {
        CODE: "AF",
        NOM: "Afghanistan",
        VILLE: "Kaboul",
    },
    {
        CODE: "AG",
        NOM: "Antigua-et-Barbuda",
        VILLE: "Saint John's",
    },
    {
        CODE: "AI",
        NOM: "Anguilla",
        VILLE: "The Valley",
    },
    {
        CODE: "AL",
        NOM: "Albanie",
        VILLE: "Saranda",
    },
    {
        CODE: "AM",
        NOM: "Arménie",
        VILLE: "Erevan",
    },
    {
        CODE: "AO",
        NOM: "Angola",
        VILLE: "Luanda",
    },
    {
        CODE: "AQ",
        NOM: "Antarctique",
        VILLE: "Port Lockroy",
    },
    {
        CODE: "AR",
        NOM: "Argentine",
        VILLE: "Buenos Aires",
    },
    {
        CODE: "AS",
        NOM: "Samoa américaines",
        VILLE: "Pago Pago",
    },
    {
        CODE: "AT",
        NOM: "Autriche",
        VILLE: "Vienne",
    },
    {
        CODE: "AU",
        NOM: "Australie",
        VILLE: "Sydney",
    },
    {
        CODE: "AW",
        NOM: "Aruba",
        VILLE: "Oranjestad",
    },
    {
        CODE: "AX",
        NOM: "Îles Åland",
        VILLE: "Mariehamn",
    },
    {
        CODE: "AZ",
        NOM: "Azerbaïdjan",
        VILLE: "Bakou",
    },
    {
        CODE: "BA",
        NOM: "Bosnie-Herzégovine",
        VILLE: "Sarajevo",
    },
    {
        CODE: "BB",
        NOM: "Barbade",
        VILLE: "Bridgetown",
    },
    {
        CODE: "BD",
        NOM: "Bangladesh",
        VILLE: "Cox's Bazar",
    },
    {
        CODE: "BE",
        NOM: "Belgique",
        VILLE: "Bruges",
    },
    {
        CODE: "BF",
        NOM: "Burkina Faso",
        VILLE: "Ouagadougou",
    },
    {
        CODE: "BG",
        NOM: "Bulgarie",
        VILLE: "Sofia",
    },
    {
        CODE: "BH",
        NOM: "Bahreïn",
        VILLE: "Manama",
    },
    {
        CODE: "BI",
        NOM: "Burundi",
        VILLE: "Bujumbura",
    },
    {
        CODE: "BJ",
        NOM: "Bénin",
        VILLE: "Ganvié",
    },
    {
        CODE: "BL",
        NOM: "Saint-Barthélemy",
        VILLE: "Gustavia",
    },
    {
        CODE: "BM",
        NOM: "Bermudes",
        VILLE: "Hamilton",
    },
    {
        CODE: "BN",
        NOM: "Brunei",
        VILLE: "Bandar Seri Begawan",
    },
    {
        CODE: "BO",
        NOM: "Bolivie",
        VILLE: "La Paz",
    },
    {
        CODE: "BQ",
        NOM: "Pays-Bas caribéens",
        VILLE: "Willemstad",
    },
    {
        CODE: "BR",
        NOM: "Brésil",
        VILLE: "Rio de Janeiro",
    },
    {
        CODE: "BS",
        NOM: "Bahamas",
        VILLE: "Nassau",
    },
    {
        CODE: "BT",
        NOM: "Bhoutan",
        VILLE: "Timphou",
    },
    {
        CODE: "BV",
        NOM: "Île Bouvet",
        VILLE: "Île Bouvet",
    },
    {
        CODE: "BW",
        NOM: "Botswana",
        VILLE: "Maun",
    },
    {
        CODE: "BY",
        NOM: "Biélorussie",
        VILLE: "Minsk",
    },
    {
        CODE: "BZ",
        NOM: "Belize",
        VILLE: "San Pedro",
    },
    {
        CODE: "CA",
        NOM: "Canada",
        VILLE: "Toronto",
    },
    {
        CODE: "CC",
        NOM: "Îles Cocos",
        VILLE: "West Island",
    },
    {
        CODE: "CD",
        NOM: "Congo-Kinshasa",
        VILLE: "Kinshasa",
    },
    {
        CODE: "CF",
        NOM: "République centrafricaine",
        VILLE: "Bangui",
    },
    {
        CODE: "CG",
        NOM: "Congo-Brazzaville",
        VILLE: "Brazzaville",
    },
    {
        CODE: "CH",
        NOM: "Suisse",
        VILLE: "Zurich",
    },
    {
        CODE: "CI",
        NOM: "Côte d'Ivoire",
        VILLE: "",
    },
    {
        CODE: "CK",
        NOM: "Îles Cook",
        VILLE: "Abidjan",
    },
    {
        CODE: "CL",
        NOM: "Chili",
        VILLE: "Santiago",
    },
    {
        CODE: "CM",
        NOM: "Cameroun",
        VILLE: "Douala",
    },
    {
        CODE: "CN",
        NOM: "Chine",
        VILLE: "Pékin",
    },
    {
        CODE: "CO",
        NOM: "Colombie",
        VILLE: "Bogota",
    },
    {
        CODE: "CODE",
        NOM: "NOM",
        VILLE: "VILLE",
    },
    {
        CODE: "CR",
        NOM: "Costa Rica",
        VILLE: "San José",
    },
    {
        CODE: "CU",
        NOM: "Cuba",
        VILLE: "La Havane",
    },
    {
        CODE: "CV",
        NOM: "Cap-Vert",
        VILLE: "Santa Maria",
    },
    {
        CODE: "CW",
        NOM: "Curaçao",
        VILLE: "Willemstad",
    },
    {
        CODE: "CX",
        NOM: "Île Christmas",
        VILLE: "Flying Fish Cove",
    },
    {
        CODE: "CY",
        NOM: "Chypre",
        VILLE: "Paphos",
    },
    {
        CODE: "CZ",
        NOM: "Tchéquie",
        VILLE: "Prague",
    },
    {
        CODE: "DE",
        NOM: "Allemagne",
        VILLE: "Berlin",
    },
    {
        CODE: "DJ",
        NOM: "Djibouti",
        VILLE: "Djibouti",
    },
    {
        CODE: "DK",
        NOM: "Danemark",
        VILLE: "Copenhague",
    },
    {
        CODE: "DM",
        NOM: "Dominique",
        VILLE: "Roseau",
    },
    {
        CODE: "DO",
        NOM: "République dominicaine",
        VILLE: "Punta Cana",
    },
    {
        CODE: "DZ",
        NOM: "Algérie",
        VILLE: "Alger",
    },
    {
        CODE: "EC",
        NOM: "Équateur",
        VILLE: "Quito",
    },
    {
        CODE: "EE",
        NOM: "Estonie",
        VILLE: "Tallinn",
    },
    {
        CODE: "EG",
        NOM: "Égypte",
        VILLE: "Le Caire",
    },
    {
        CODE: "EH",
        NOM: "Sahara occidental",
        VILLE: "Dakhla",
    },
    {
        CODE: "ER",
        NOM: "Érythrée",
        VILLE: "Asmara",
    },
    {
        CODE: "ES",
        NOM: "Espagne",
        VILLE: "Madrid",
    },
    {
        CODE: "ET",
        NOM: "Éthiopie",
        VILLE: "Addis-Abeba",
    },
    {
        CODE: "FI",
        NOM: "Finlande",
        VILLE: "Helsinki",
    },
    {
        CODE: "FJ",
        NOM: "Fidji",
        VILLE: "Suva",
    },
    {
        CODE: "FK",
        NOM: "Îles Malouines (Îles Falkland)",
        VILLE: "Port Stanley",
    },
    {
        CODE: "FM",
        NOM: "Micronésie",
        VILLE: "Kolonia",
    },
    {
        CODE: "FO",
        NOM: "Îles Féroé",
        VILLE: "Tórshavn",
    },
    {
        CODE: "FR",
        NOM: "France",
        VILLE: "Paris",
    },
    {
        CODE: "GA",
        NOM: "Gabon",
        VILLE: "Libreville",
    },
    {
        CODE: "GB",
        NOM: "Royaume-Uni",
        VILLE: "Londres",
    },
    {
        CODE: "GD",
        NOM: "Grenade",
        VILLE: "Saint-Georges",
    },
    {
        CODE: "GE",
        NOM: "Géorgie",
        VILLE: "Tbilissi",
    },
    {
        CODE: "GF",
        NOM: "Guyane française",
        VILLE: "Cayenne",
    },
    {
        CODE: "GG",
        NOM: "Guernesey",
        VILLE: "Saint-Peter-Port",
    },
    {
        CODE: "GH",
        NOM: "Ghana",
        VILLE: "Accra",
    },
    {
        CODE: "GI",
        NOM: "Gibraltar",
        VILLE: "Gibraltar",
    },
    {
        CODE: "GL",
        NOM: "Groenland",
        VILLE: "Ilulissat",
    },
    {
        CODE: "GM",
        NOM: "Gambie",
        VILLE: "Kololi",
    },
    {
        CODE: "GN",
        NOM: "Guinée",
        VILLE: "Conakry",
    },
    {
        CODE: "GP",
        NOM: "Guadeloupe",
        VILLE: "Pointe-à-Pitre",
    },
    {
        CODE: "GQ",
        NOM: "Guinée équatoriale",
        VILLE: "Malabo",
    },
    {
        CODE: "GR",
        NOM: "Grèce",
        VILLE: "Athènes",
    },
    {
        CODE: "GS",
        NOM: "Géorgie du Sud-et-les Îles Sandwich du Sud",
        VILLE: "King Edward Point",
    },
    {
        CODE: "GT",
        NOM: "Guatemala",
        VILLE: "Antigua",
    },
    {
        CODE: "GU",
        NOM: "Guam",
        VILLE: "Tumon",
    },
    {
        CODE: "GW",
        NOM: "Guinée-Bissau",
        VILLE: "Bissau",
    },
    {
        CODE: "GY",
        NOM: "Guyana",
        VILLE: "Georgetown",
    },
    {
        CODE: "HK",
        NOM: "Hong Kong",
        VILLE: "Hong Kong",
    },
    {
        CODE: "HM",
        NOM: "Îles Heard-et-MacDonald",
        VILLE: "Îles Heard-et-MacDonald",
    },
    {
        CODE: "HN",
        NOM: "Honduras",
        VILLE: "Tegucigalpa",
    },
    {
        CODE: "HR",
        NOM: "Croatie",
        VILLE: "Dubrovnik",
    },
    {
        CODE: "HT",
        NOM: "Haïti",
        VILLE: "Port-au-Prince",
    },
    {
        CODE: "HU",
        NOM: "Hongrie",
        VILLE: "Budapest",
    },
    {
        CODE: "ID",
        NOM: "Indonésie",
        VILLE: "Bali",
    },
    {
        CODE: "IE",
        NOM: "Irlande",
        VILLE: "Dublin",
    },
    {
        CODE: "IL",
        NOM: "Israël",
        VILLE: "Jérusalem",
    },
    {
        CODE: "IM",
        NOM: "Île de Man",
        VILLE: "Douglas",
    },
    {
        CODE: "IN",
        NOM: "Inde",
        VILLE: "Delhi",
    },
    {
        CODE: "IO",
        NOM: "Territoire britannique de l'océan Indien",
        VILLE: "Diego Garcia",
    },
    {
        CODE: "IQ",
        NOM: "Irak",
        VILLE: "Bagdad",
    },
    {
        CODE: "IR",
        NOM: "Iran",
        VILLE: "Ispahan",
    },
    {
        CODE: "IS",
        NOM: "Islande",
        VILLE: "Reykjavik",
    },
    {
        CODE: "IT",
        NOM: "Italie",
        VILLE: "Rome",
    },
    {
        CODE: "JE",
        NOM: "Jersey",
        VILLE: "Saint-Hélier",
    },
    {
        CODE: "JM",
        NOM: "Jamaïque",
        VILLE: "Montego Bay",
    },
    {
        CODE: "JO",
        NOM: "Jordanie",
        VILLE: "Pétra",
    },
    {
        CODE: "JP",
        NOM: "Japon",
        VILLE: "Tokyo",
    },
    {
        CODE: "KE",
        NOM: "Kenya",
        VILLE: "Nairobi",
    },
    {
        CODE: "KG",
        NOM: "Kirghizstan",
        VILLE: "Bichkek",
    },
    {
        CODE: "KH",
        NOM: "Cambodge",
        VILLE: "Siem Reap",
    },
    {
        CODE: "KI",
        NOM: "Kiribati",
        VILLE: "Tarawa-Sud",
    },
    {
        CODE: "KM",
        NOM: "Comores",
        VILLE: "Moroni",
    },
    {
        CODE: "KN",
        NOM: "Saint-Christophe-et-Niévès",
        VILLE: "Basseterre",
    },
    {
        CODE: "KP",
        NOM: "Corée du Nord",
        VILLE: "Pyongyang",
    },
    {
        CODE: "KR",
        NOM: "Corée du Sud",
        VILLE: "Séoul",
    },
    {
        CODE: "KW",
        NOM: "Koweït",
        VILLE: "Koweît City",
    },
    {
        CODE: "KY",
        NOM: "Îles Caïmans",
        VILLE: "George Town",
    },
    {
        CODE: "KZ",
        NOM: "Kazakhstan",
        VILLE: "Almaty",
    },
    {
        CODE: "LA",
        NOM: "Laos",
        VILLE: "Luang Prabang",
    },
    {
        CODE: "LB",
        NOM: "Liban",
        VILLE: "Beyrouth",
    },
    {
        CODE: "LC",
        NOM: "Sainte-Lucie",
        VILLE: "Gros Islet",
    },
    {
        CODE: "LI",
        NOM: "Liechtenstein",
        VILLE: "Vaduz",
    },
    {
        CODE: "LK",
        NOM: "Sri Lanka",
        VILLE: "Colombo",
    },
    {
        CODE: "LR",
        NOM: "Liberia",
        VILLE: "Monrovia",
    },
    {
        CODE: "LS",
        NOM: "Lesotho",
        VILLE: "Maseru",
    },
    {
        CODE: "LT",
        NOM: "Lituanie",
        VILLE: "Vilnius",
    },
    {
        CODE: "LU",
        NOM: "Luxembourg",
        VILLE: "Luxembourg-Ville",
    },
    {
        CODE: "LV",
        NOM: "Lettonie",
        VILLE: "Riga",
    },
    {
        CODE: "LY",
        NOM: "Libye",
        VILLE: "Tripoli",
    },
    {
        CODE: "MA",
        NOM: "Maroc",
        VILLE: "Marrakech",
    },
    {
        CODE: "MC",
        NOM: "Monaco",
        VILLE: "Monte-Carlo",
    },
    {
        CODE: "MD",
        NOM: "Moldavie",
        VILLE: "Chișinău",
    },
    {
        CODE: "ME",
        NOM: "Monténégro",
        VILLE: "Kotor",
    },
    {
        CODE: "MF",
        NOM: "Saint-Martin",
        VILLE: "Philipsburg",
    },
    {
        CODE: "MG",
        NOM: "Madagascar",
        VILLE: "Nosy Be",
    },
    {
        CODE: "MH",
        NOM: "Îles Marshall",
        VILLE: "Majuro",
    },
    {
        CODE: "MK",
        NOM: "Macédoine du Nord",
        VILLE: "Ohrid",
    },
    {
        CODE: "ML",
        NOM: "Mali",
        VILLE: "Bamako",
    },
    {
        CODE: "MM",
        NOM: "Myanmar (Birmanie)",
        VILLE: "Bagan",
    },
    {
        CODE: "MN",
        NOM: "Mongolie",
        VILLE: "Oulan-Bator",
    },
    {
        CODE: "MO",
        NOM: "Macao",
        VILLE: "Macao",
    },
    {
        CODE: "MP",
        NOM: "Îles Mariannes du Nord",
        VILLE: "Saipan",
    },
    {
        CODE: "MQ",
        NOM: "Martinique",
        VILLE: "Fort-de-France",
    },
    {
        CODE: "MR",
        NOM: "Mauritanie",
        VILLE: "Nouakchott",
    },
    {
        CODE: "MS",
        NOM: "Montserrat",
        VILLE: "Plymouth",
    },
    {
        CODE: "MT",
        NOM: "Malte",
        VILLE: "La Valette",
    },
    {
        CODE: "MU",
        NOM: "Maurice",
        VILLE: "Port-Louis",
    },
    {
        CODE: "MV",
        NOM: "Maldives",
        VILLE: "Malé",
    },
    {
        CODE: "MW",
        NOM: "Malawi",
        VILLE: "Lilongwe",
    },
    {
        CODE: "MX",
        NOM: "Mexique",
        VILLE: "Mexico",
    },
    {
        CODE: "MY",
        NOM: "Malaisie",
        VILLE: "Kuala Lumpur",
    },
    {
        CODE: "MZ",
        NOM: "Mozambique",
        VILLE: "Maputo",
    },
    {
        CODE: "NA",
        NOM: "Namibie",
        VILLE: "Windhoek",
    },
    {
        CODE: "NC",
        NOM: "Nouvelle-Calédonie",
        VILLE: "Nouméa",
    },
    {
        CODE: "NE",
        NOM: "Niger",
        VILLE: "Niamey",
    },
    {
        CODE: "NF",
        NOM: "Île Norfolk",
        VILLE: "Kingston",
    },
    {
        CODE: "NG",
        NOM: "Nigeria",
        VILLE: "Lagos",
    },
    {
        CODE: "NI",
        NOM: "Nicaragua",
        VILLE: "Managua",
    },
    {
        CODE: "NL",
        NOM: "Pays-Bas",
        VILLE: "Amsterdam",
    },
    {
        CODE: "NO",
        NOM: "Norvège",
        VILLE: "Oslo",
    },
    {
        CODE: "NP",
        NOM: "Népal",
        VILLE: "Katmandou",
    },
    {
        CODE: "NR",
        NOM: "Nauru",
        VILLE: "Yaren",
    },
    {
        CODE: "NU",
        NOM: "Niue",
        VILLE: "Alofi",
    },
    {
        CODE: "NZ",
        NOM: "Nouvelle-Zélande",
        VILLE: "Auckland",
    },
    {
        CODE: "OM",
        NOM: "Oman",
        VILLE: "Mascate",
    },
    {
        CODE: "PA",
        NOM: "Panama",
        VILLE: "Panama",
    },
    {
        CODE: "PE",
        NOM: "Pérou",
        VILLE: "Lima",
    },
    {
        CODE: "PF",
        NOM: "Polynésie française",
        VILLE: "Papeete",
    },
    {
        CODE: "PG",
        NOM: "Papouasie-Nouvelle-Guinée",
        VILLE: "Port Moresby",
    },
    {
        CODE: "PH",
        NOM: "Philippines",
        VILLE: "Manille",
    },
    {
        CODE: "PK",
        NOM: "Pakistan",
        VILLE: "Karachi",
    },
    {
        CODE: "PL",
        NOM: "Pologne",
        VILLE: "Varsovie",
    },
    {
        CODE: "PM",
        NOM: "Saint-Pierre-et-Miquelon",
        VILLE: "Saint-Pierre",
    },
    {
        CODE: "PN",
        NOM: "Îles Pitcairn",
        VILLE: "Adamstown",
    },
    {
        CODE: "PR",
        NOM: "Porto Rico",
        VILLE: "San Juan",
    },
    {
        CODE: "PS",
        NOM: "Palestine",
        VILLE: "Jérusalem",
    },
    {
        CODE: "PT",
        NOM: "Portugal",
        VILLE: "Lisbonne",
    },
    {
        CODE: "PW",
        NOM: "Palaos",
        VILLE: "Ngerulmud",
    },
    {
        CODE: "PY",
        NOM: "Paraguay",
        VILLE: "Asuncion",
    },
    {
        CODE: "QA",
        NOM: "Qatar",
        VILLE: "Doha",
    },
    {
        CODE: "RE",
        NOM: "La Réunion",
        VILLE: "Saint-Denis",
    },
    {
        CODE: "RO",
        NOM: "Roumanie",
        VILLE: "Bucarest",
    },
    {
        CODE: "RS",
        NOM: "Serbie",
        VILLE: "Belgrade",
    },
    {
        CODE: "RU",
        NOM: "Russie",
        VILLE: "Moscou",
    },
    {
        CODE: "RW",
        NOM: "Rwanda",
        VILLE: "Kigali",
    },
    {
        CODE: "SA",
        NOM: "Arabie saoudite",
        VILLE: "Riyad",
    },
    {
        CODE: "SB",
        NOM: "Îles Salomon",
        VILLE: "Honiara",
    },
    {
        CODE: "SC",
        NOM: "Seychelles",
        VILLE: "Victoria",
    },
    {
        CODE: "SD",
        NOM: "Soudan",
        VILLE: "Khartoum",
    },
    {
        CODE: "SE",
        NOM: "Suède",
        VILLE: "Stockholm",
    },
    {
        CODE: "SG",
        NOM: "Singapour",
        VILLE: "Singapour",
    },
    {
        CODE: "SH",
        NOM: "Sainte-Hélène",
        VILLE: "Jamestown",
    },
    {
        CODE: "SI",
        NOM: "Slovénie",
        VILLE: "Ljubljana",
    },
    {
        CODE: "SJ",
        NOM: "Svalbard et Jan Mayen",
        VILLE: "Longyearbyen",
    },
    {
        CODE: "SK",
        NOM: "Slovaquie",
        VILLE: "Bratislava",
    },
    {
        CODE: "SL",
        NOM: "Sierra Leone",
        VILLE: "Freetown",
    },
    {
        CODE: "SM",
        NOM: "Saint-Marin",
        VILLE: "Saint-Marin",
    },
    {
        CODE: "SN",
        NOM: "Sénégal",
        VILLE: "Dakar",
    },
    {
        CODE: "SO",
        NOM: "Somalie",
        VILLE: "Mogadiscio",
    },
    {
        CODE: "SR",
        NOM: "Suriname",
        VILLE: "Paramaribo",
    },
    {
        CODE: "SS",
        NOM: "Soudan du Sud",
        VILLE: "Juba",
    },
    {
        CODE: "ST",
        NOM: "Sao Tomé-et-Principe",
        VILLE: "São Tomé",
    },
    {
        CODE: "SV",
        NOM: "Salvador",
        VILLE: "San Salvador",
    },
    {
        CODE: "SX",
        NOM: "Saint-Martin (partie néerlandaise)",
        VILLE: "Philipsburg",
    },
    {
        CODE: "SY",
        NOM: "Syrie",
        VILLE: "Damas",
    },
    {
        CODE: "SZ",
        NOM: "Eswatini",
        VILLE: "Mbabane",
    },
    {
        CODE: "TC",
        NOM: "Îles Turques-et-Caïques",
        VILLE: "Cockburn Town",
    },
    {
        CODE: "TD",
        NOM: "Tchad",
        VILLE: "N'Djaména",
    },
    {
        CODE: "TF",
        NOM: "Terres australes françaises",
        VILLE: "Port-aux-Français",
    },
    {
        CODE: "TG",
        NOM: "Togo",
        VILLE: "Lomé",
    },
    {
        CODE: "TH",
        NOM: "Thaïlande",
        VILLE: "Bangkok",
    },
    {
        CODE: "TJ",
        NOM: "Tadjikistan",
        VILLE: "Douchanbé",
    },
    {
        CODE: "TK",
        NOM: "Tokelau",
        VILLE: "Fakaofo",
    },
    {
        CODE: "TL",
        NOM: "Timor oriental",
        VILLE: "Dili",
    },
    {
        CODE: "TM",
        NOM: "Turkménistan",
        VILLE: "Achgabat",
    },
    {
        CODE: "TN",
        NOM: "Tunisie",
        VILLE: "Tunis",
    },
    {
        CODE: "TO",
        NOM: "Tonga",
        VILLE: "Nuku'alofa",
    },
    {
        CODE: "TR",
        NOM: "Turquie",
        VILLE: "Istanbul",
    },
    {
        CODE: "TT",
        NOM: "Trinité-et-Tobago",
        VILLE: "Port of Spain",
    },
    {
        CODE: "TV",
        NOM: "Tuvalu",
        VILLE: "Funafuti",
    },
    {
        CODE: "TW",
        NOM: "Taïwan",
        VILLE: "Taipei",
    },
    {
        CODE: "TZ",
        NOM: "Tanzanie",
        VILLE: "Dar es Salaam",
    },
    {
        CODE: "UA",
        NOM: "Ukraine",
        VILLE: "Kyiv",
    },
    {
        CODE: "UG",
        NOM: "Ouganda",
        VILLE: "Kampala",
    },
    {
        CODE: "UM",
        NOM: "Îles mineures éloignées des États-Unis",
        VILLE: "Johnston Atoll",
    },
    {
        CODE: "US",
        NOM: "États-Unis",
        VILLE: "New York",
    },
    {
        CODE: "UY",
        NOM: "Uruguay",
        VILLE: "Montevideo",
    },
    {
        CODE: "UZ",
        NOM: "Ouzbékistan",
        VILLE: "Tachkent",
    },
    {
        CODE: "VA",
        NOM: "État de la Cité du Vatican",
        VILLE: "Vatican",
    },
    {
        CODE: "VC",
        NOM: "Saint-Vincent-et-les Grenadines",
        VILLE: "Kingstown",
    },
    {
        CODE: "VE",
        NOM: "Venezuela",
        VILLE: "Caracas",
    },
    {
        CODE: "VG",
        NOM: "Îles Vierges britanniques",
        VILLE: "Road Town",
    },
    {
        CODE: "VI",
        NOM: "Îles Vierges des États-Unis",
        VILLE: "Charlotte Amalie",
    },
    {
        CODE: "VN",
        NOM: "Viêt Nam",
        VILLE: "Hanoï",
    },
    {
        CODE: "VU",
        NOM: "Vanuatu",
        VILLE: "Port-Vila",
    },
    {
        CODE: "WF",
        NOM: "Wallis-et-Futuna",
        VILLE: "Mata-Utu",
    },
    {
        CODE: "WS",
        NOM: "Samoa",
        VILLE: "Apia",
    },
    {
        CODE: "XK",
        NOM: "Kosovo",
        VILLE: "Pristina",
    },
    {
        CODE: "YE",
        NOM: "Yémen",
        VILLE: "Sanaa",
    },
    {
        CODE: "YT",
        NOM: "Mayotte",
        VILLE: "Mamoudzou",
    },
    {
        CODE: "ZA",
        NOM: "Afrique du Sud",
        VILLE: "Le Cap",
    },
    {
        CODE: "ZM",
        NOM: "Zambie",
        VILLE: "Lusaka",
    },
    {
        CODE: "ZW",
        NOM: "Zimbabwe",
        VILLE: "Harare",
    },
];

export default pays;
