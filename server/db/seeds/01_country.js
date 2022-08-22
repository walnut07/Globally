/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('UTC').del()
  await knex('UTC').insert([
    {
      country: 'Afghanistan',
      city: 'Kabul',
      UTCOffset: '04:30',
      isAheadOfUTC: true
    } ,
    {
      country: 'Aland Islands',
      city: 'Mariehamn',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Albania',
      city: 'Tirane',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Algeria',
      city: 'Algiers',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'American Samoa',
      city: 'Pago_Pago',
      UTCOffset: '11:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Andorra',
      city: 'Andorra',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Angola',
      city: 'Luanda',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Anguilla',
      city: 'Anguilla',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Antarctica',
      city: 'Troll',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Antarctica',
      city: 'Palmer',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Antarctica',
      city: 'Rothera',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Antarctica',
      city: 'Syowa',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Antarctica',
      city: 'Mawson',
      UTCOffset: '05:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Antarctica',
      city: 'Vostok',
      UTCOffset: '06:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Antarctica',
      city: 'Davis',
      UTCOffset: '07:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Antarctica',
      city: 'Casey',
      UTCOffset: '08:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Antarctica',
      city: 'DumontDUrville',
      UTCOffset: '10:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Antarctica',
      city: 'McMurdo',
      UTCOffset: '12:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Antigua And Barbuda',
      city: 'Antigua',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Argentina',
      city: 'Buenos_Aires',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Argentina',
      city: 'Catamarca',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Argentina',
      city: 'Cordoba',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Argentina',
      city: 'Jujuy',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Argentina',
      city: 'La_Rioja',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Argentina',
      city: 'Mendoza',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Argentina',
      city: 'Rio_Gallegos',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Argentina',
      city: 'Salta',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Argentina',
      city: 'San_Juan',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Argentina',
      city: 'San_Luis',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Argentina',
      city: 'Tucuman',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Argentina',
      city: 'Ushuaia',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Armenia',
      city: 'Yerevan',
      UTCOffset: '04:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Aruba',
      city: 'Aruba',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Australia',
      city: 'Perth',
      UTCOffset: '08:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Australia',
      city: 'Eucla',
      UTCOffset: '08:45',
      isAheadOfUTC: true
    } ,
    {
      country: 'Australia',
      city: 'Adelaide',
      UTCOffset: '09:30',
      isAheadOfUTC: true
    } ,
    {
      country: 'Australia',
      city: 'Broken_Hill',
      UTCOffset: '09:30',
      isAheadOfUTC: true
    } ,
    {
      country: 'Australia',
      city: 'Darwin',
      UTCOffset: '09:30',
      isAheadOfUTC: true
    } ,
    {
      country: 'Australia',
      city: 'Brisbane',
      UTCOffset: '10:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Australia',
      city: 'Currie',
      UTCOffset: '10:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Australia',
      city: 'Hobart',
      UTCOffset: '10:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Australia',
      city: 'Lindeman',
      UTCOffset: '10:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Australia',
      city: 'Melbourne',
      UTCOffset: '10:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Australia',
      city: 'Sydney',
      UTCOffset: '10:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Australia',
      city: 'Lord_Howe',
      UTCOffset: '10:30',
      isAheadOfUTC: true
    } ,
    {
      country: 'Australia',
      city: 'Macquarie',
      UTCOffset: '11:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Austria',
      city: 'Vienna',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Azerbaijan',
      city: 'Baku',
      UTCOffset: '04:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Bahamas',
      city: 'Nassau',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Bahrain',
      city: 'Bahrain',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Bangladesh',
      city: 'Dhaka',
      UTCOffset: '06:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Barbados',
      city: 'Barbados',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Belarus',
      city: 'Minsk',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Belgium',
      city: 'Brussels',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Belize',
      city: 'Belize',
      UTCOffset: '06:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Benin',
      city: 'Porto-Novo',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Bermuda',
      city: 'Bermuda',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Bhutan',
      city: 'Thimphu',
      UTCOffset: '06:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Bolivia',
      city: 'La_Paz',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Bonaire, Saint Eustatius And Saba',
      city: 'Kralendijk',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Bosnia And Herzegovina',
      city: 'Sarajevo',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Botswana',
      city: 'Gaborone',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Brazil',
      city: 'Noronha',
      UTCOffset: '02:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Brazil',
      city: 'Araguaina',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Brazil',
      city: 'Bahia',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Brazil',
      city: 'Belem',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Brazil',
      city: 'Fortaleza',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Brazil',
      city: 'Maceio',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Brazil',
      city: 'Recife',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Brazil',
      city: 'Santarem',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Brazil',
      city: 'Sao_Paulo',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Brazil',
      city: 'Boa_Vista',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Brazil',
      city: 'Campo_Grande',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Brazil',
      city: 'Cuiaba',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Brazil',
      city: 'Manaus',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Brazil',
      city: 'Porto_Velho',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Brazil',
      city: 'Eirunepe',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Brazil',
      city: 'Rio_Branco',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'British Indian Ocean Territory',
      city: 'Chagos',
      UTCOffset: '06:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'British Virgin Islands',
      city: 'Tortola',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Brunei',
      city: 'Brunei',
      UTCOffset: '08:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Bulgaria',
      city: 'Sofia',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Burundi',
      city: 'Bujumbura',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Cambodia',
      city: 'Phnom_Penh',
      UTCOffset: '07:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Cameroon',
      city: 'Douala',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Canada',
      city: 'St_Johns',
      UTCOffset: '02:30',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Glace_Bay',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Goose_Bay',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Halifax',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Moncton',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Blanc-Sablon',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Iqaluit',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Nipigon',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Pangnirtung',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Thunder_Bay',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Toronto',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Atikokan',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Rainy_River',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Rankin_Inlet',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Resolute',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Winnipeg',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Cambridge_Bay',
      UTCOffset: '06:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Edmonton',
      UTCOffset: '06:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Inuvik',
      UTCOffset: '06:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Regina',
      UTCOffset: '06:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Swift_Current',
      UTCOffset: '06:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Yellowknife',
      UTCOffset: '06:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Creston',
      UTCOffset: '07:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Dawson',
      UTCOffset: '07:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Dawson_Creek',
      UTCOffset: '07:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Fort_Nelson',
      UTCOffset: '07:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Vancouver',
      UTCOffset: '07:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Canada',
      city: 'Whitehorse',
      UTCOffset: '07:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Cape Verde',
      city: 'Cape_Verde',
      UTCOffset: '01:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Cayman Islands',
      city: 'Cayman',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Central African Republic',
      city: 'Bangui',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Chad',
      city: 'Ndjamena',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Chile',
      city: 'Punta_Arenas',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Chile',
      city: 'Santiago',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Chile',
      city: 'Easter',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'China',
      city: 'Urumqi',
      UTCOffset: '06:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'China',
      city: 'Shanghai',
      UTCOffset: '08:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Christmas Island',
      city: 'Christmas',
      UTCOffset: '07:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Cocos Islands',
      city: 'Cocos',
      UTCOffset: '06:30',
      isAheadOfUTC: true
    } ,
    {
      country: 'Colombia',
      city: 'Bogota',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Comoros',
      city: 'Comoro',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Cook Islands',
      city: 'Rarotonga',
      UTCOffset: '10:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Costa Rica',
      city: 'Costa_Rica',
      UTCOffset: '06:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Croatia',
      city: 'Zagreb',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Cuba',
      city: 'Havana',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Curacao',
      city: 'Curacao',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Cyprus',
      city: 'Famagusta',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Cyprus',
      city: 'Nicosia',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Czech Republic',
      city: 'Prague',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Democratic Republic Of The Congo',
      city: 'Kinshasa',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Democratic Republic Of The Congo',
      city: 'Lubumbashi',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Denmark',
      city: 'Copenhagen',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Djibouti',
      city: 'Djibouti',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Dominica',
      city: 'Dominica',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Dominican Republic',
      city: 'Santo_Domingo',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'East Timor',
      city: 'Dili',
      UTCOffset: '09:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Ecuador',
      city: 'Guayaquil',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Ecuador',
      city: 'Galapagos',
      UTCOffset: '06:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Egypt',
      city: 'Cairo',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'El Salvador',
      city: 'El_Salvador',
      UTCOffset: '06:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Equatorial Guinea',
      city: 'Malabo',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Eritrea',
      city: 'Asmara',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Estonia',
      city: 'Tallinn',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Ethiopia',
      city: 'Addis_Ababa',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Falkland Islands',
      city: 'Stanley',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Faroe Islands',
      city: 'Faroe',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Fiji',
      city: 'Fiji',
      UTCOffset: '12:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Finland',
      city: 'Helsinki',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'France',
      city: 'Paris',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'French Guiana',
      city: 'Cayenne',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'French Polynesia',
      city: 'Gambier',
      UTCOffset: '09:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'French Polynesia',
      city: 'Marquesas',
      UTCOffset: '09:30',
      isAheadOfUTC: false
    } ,
    {
      country: 'French Polynesia',
      city: 'Tahiti',
      UTCOffset: '10:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'French Southern Territories',
      city: 'Kerguelen',
      UTCOffset: '05:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Gabon',
      city: 'Libreville',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Georgia',
      city: 'Tbilisi',
      UTCOffset: '04:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Germany',
      city: 'Berlin',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Germany',
      city: 'Busingen',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Gibraltar',
      city: 'Gibraltar',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Greece',
      city: 'Athens',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Greenland',
      city: 'Godthab',
      UTCOffset: '02:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Greenland',
      city: 'Thule',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Grenada',
      city: 'Grenada',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Guadeloupe',
      city: 'Guadeloupe',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Guam',
      city: 'Guam',
      UTCOffset: '10:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Guatemala',
      city: 'Guatemala',
      UTCOffset: '06:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Guernsey',
      city: 'Guernsey',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Guyana',
      city: 'Guyana',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Haiti',
      city: 'Port-au-Prince',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Honduras',
      city: 'Tegucigalpa',
      UTCOffset: '06:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Hong Kong',
      city: 'Hong_Kong',
      UTCOffset: '08:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Hungary',
      city: 'Budapest',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'India',
      city: 'Kolkata',
      UTCOffset: '05:30',
      isAheadOfUTC: true
    } ,
    {
      country: 'Indonesia',
      city: 'Jakarta',
      UTCOffset: '07:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Indonesia',
      city: 'Pontianak',
      UTCOffset: '07:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Indonesia',
      city: 'Makassar',
      UTCOffset: '08:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Indonesia',
      city: 'Jayapura',
      UTCOffset: '09:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Iran',
      city: 'Tehran',
      UTCOffset: '04:30',
      isAheadOfUTC: true
    } ,
    {
      country: 'Iraq',
      city: 'Baghdad',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Ireland',
      city: 'Dublin',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Isle Of Man',
      city: 'Isle_of_Man',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Israel',
      city: 'Jerusalem',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Italy',
      city: 'Rome',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Jamaica',
      city: 'Jamaica',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Japan',
      city: 'Tokyo',
      UTCOffset: '09:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Jersey',
      city: 'Jersey',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Jordan',
      city: 'Amman',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Kazakhstan',
      city: 'Aqtau',
      UTCOffset: '05:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Kazakhstan',
      city: 'Aqtobe',
      UTCOffset: '05:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Kazakhstan',
      city: 'Atyrau',
      UTCOffset: '05:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Kazakhstan',
      city: 'Oral',
      UTCOffset: '05:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Kazakhstan',
      city: 'Almaty',
      UTCOffset: '06:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Kazakhstan',
      city: 'Qyzylorda',
      UTCOffset: '06:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Kenya',
      city: 'Nairobi',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Kiribati',
      city: 'Tarawa',
      UTCOffset: '12:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Kiribati',
      city: 'Enderbury',
      UTCOffset: '13:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Kiribati',
      city: 'Kiritimati',
      UTCOffset: '14:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Kuwait',
      city: 'Kuwait',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Kyrgyzstan',
      city: 'Bishkek',
      UTCOffset: '06:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Laos',
      city: 'Vientiane',
      UTCOffset: '07:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Latvia',
      city: 'Riga',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Lebanon',
      city: 'Beirut',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Lesotho',
      city: 'Maseru',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Libya',
      city: 'Tripoli',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Liechtenstein',
      city: 'Vaduz',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Lithuania',
      city: 'Vilnius',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Luxembourg',
      city: 'Luxembourg',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Macao',
      city: 'Macau',
      UTCOffset: '08:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Macedonia',
      city: 'Skopje',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Madagascar',
      city: 'Antananarivo',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Malawi',
      city: 'Blantyre',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Malaysia',
      city: 'Kuala_Lumpur',
      UTCOffset: '08:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Malaysia',
      city: 'Kuching',
      UTCOffset: '08:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Maldives',
      city: 'Maldives',
      UTCOffset: '05:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Malta',
      city: 'Malta',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Marshall Islands',
      city: 'Kwajalein',
      UTCOffset: '12:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Marshall Islands',
      city: 'Majuro',
      UTCOffset: '12:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Martinique',
      city: 'Martinique',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Mauritius',
      city: 'Mauritius',
      UTCOffset: '04:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Mayotte',
      city: 'Mayotte',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Mexico',
      city: 'Bahia_Banderas',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Mexico',
      city: 'Cancun',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Mexico',
      city: 'Matamoros',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Mexico',
      city: 'Merida',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Mexico',
      city: 'Mexico_City',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Mexico',
      city: 'Monterrey',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Mexico',
      city: 'Chihuahua',
      UTCOffset: '06:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Mexico',
      city: 'Mazatlan',
      UTCOffset: '06:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Mexico',
      city: 'Ojinaga',
      UTCOffset: '06:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Mexico',
      city: 'Hermosillo',
      UTCOffset: '07:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Mexico',
      city: 'Tijuana',
      UTCOffset: '07:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Micronesia',
      city: 'Chuuk',
      UTCOffset: '10:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Micronesia',
      city: 'Kosrae',
      UTCOffset: '11:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Micronesia',
      city: 'Pohnpei',
      UTCOffset: '11:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Moldova',
      city: 'Chisinau',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Monaco',
      city: 'Monaco',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Mongolia',
      city: 'Hovd',
      UTCOffset: '07:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Mongolia',
      city: 'Choibalsan',
      UTCOffset: '08:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Mongolia',
      city: 'Ulaanbaatar',
      UTCOffset: '08:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Montenegro',
      city: 'Podgorica',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Montserrat',
      city: 'Montserrat',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Morocco',
      city: 'Casablanca',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Mozambique',
      city: 'Maputo',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Myanmar',
      city: 'Yangon',
      UTCOffset: '06:30',
      isAheadOfUTC: true
    } ,
    {
      country: 'Namibia',
      city: 'Windhoek',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Nauru',
      city: 'Nauru',
      UTCOffset: '12:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Nepal',
      city: 'Kathmandu',
      UTCOffset: '05:45',
      isAheadOfUTC: true
    } ,
    {
      country: 'Netherlands',
      city: 'Amsterdam',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'New Caledonia',
      city: 'Noumea',
      UTCOffset: '11:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'New Zealand',
      city: 'Auckland',
      UTCOffset: '12:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'New Zealand',
      city: 'Chatham',
      UTCOffset: '12:45',
      isAheadOfUTC: true
    } ,
    {
      country: 'Nicaragua',
      city: 'Managua',
      UTCOffset: '06:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Niger',
      city: 'Niamey',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Nigeria',
      city: 'Lagos',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Niue',
      city: 'Niue',
      UTCOffset: '11:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Norfolk Island',
      city: 'Norfolk',
      UTCOffset: '11:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'North Korea',
      city: 'Pyongyang',
      UTCOffset: '08:30',
      isAheadOfUTC: true
    } ,
    {
      country: 'Northern Mariana Islands',
      city: 'Saipan',
      UTCOffset: '10:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Norway',
      city: 'Oslo',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Oman',
      city: 'Muscat',
      UTCOffset: '04:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Pakistan',
      city: 'Karachi',
      UTCOffset: '05:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Palau',
      city: 'Palau',
      UTCOffset: '09:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Palestinian Territory',
      city: 'Gaza',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Palestinian Territory',
      city: 'Hebron',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Panama',
      city: 'Panama',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Papua New Guinea',
      city: 'Port_Moresby',
      UTCOffset: '10:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Papua New Guinea',
      city: 'Bougainville',
      UTCOffset: '11:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Paraguay',
      city: 'Asuncion',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Peru',
      city: 'Lima',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Philippines',
      city: 'Manila',
      UTCOffset: '08:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Pitcairn',
      city: 'Pitcairn',
      UTCOffset: '08:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Poland',
      city: 'Warsaw',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Portugal',
      city: 'Madeira',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Portugal',
      city: 'Lisbon',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Puerto Rico',
      city: 'Puerto_Rico',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Qatar',
      city: 'Qatar',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Republic Of The Congo',
      city: 'Brazzaville',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Reunion',
      city: 'Reunion',
      UTCOffset: '04:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Romania',
      city: 'Bucharest',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Kaliningrad',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Kirov',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Moscow',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Simferopol',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Volgograd',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Astrakhan',
      UTCOffset: '04:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Samara',
      UTCOffset: '04:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Saratov',
      UTCOffset: '04:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Ulyanovsk',
      UTCOffset: '04:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Yekaterinburg',
      UTCOffset: '05:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Omsk',
      UTCOffset: '06:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Barnaul',
      UTCOffset: '07:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Krasnoyarsk',
      UTCOffset: '07:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Novokuznetsk',
      UTCOffset: '07:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Novosibirsk',
      UTCOffset: '07:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Tomsk',
      UTCOffset: '07:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Irkutsk',
      UTCOffset: '08:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Chita',
      UTCOffset: '09:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Khandyga',
      UTCOffset: '09:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Yakutsk',
      UTCOffset: '09:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Ust-Nera',
      UTCOffset: '10:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Vladivostok',
      UTCOffset: '10:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Magadan',
      UTCOffset: '11:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Sakhalin',
      UTCOffset: '11:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Srednekolymsk',
      UTCOffset: '11:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Anadyr',
      UTCOffset: '12:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Russia',
      city: 'Kamchatka',
      UTCOffset: '12:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Rwanda',
      city: 'Kigali',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Saint Barthelemy',
      city: 'St_Barthelemy',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Saint Kitts And Nevis',
      city: 'St_Kitts',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Saint Lucia',
      city: 'St_Lucia',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Saint Martin',
      city: 'Marigot',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Saint Pierre And Miquelon',
      city: 'Miquelon',
      UTCOffset: '02:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Saint Vincent And The Grenadines',
      city: 'St_Vincent',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Samoa',
      city: 'Apia',
      UTCOffset: '13:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'San Marino',
      city: 'San_Marino',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Sao Tome And Principe',
      city: 'Sao_Tome',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Saudi Arabia',
      city: 'Riyadh',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Serbia',
      city: 'Belgrade',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Seychelles',
      city: 'Mahe',
      UTCOffset: '04:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Singapore',
      city: 'Singapore',
      UTCOffset: '08:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Sint Maarten',
      city: 'Lower_Princes',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Slovakia',
      city: 'Bratislava',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Slovenia',
      city: 'Ljubljana',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Solomon Islands',
      city: 'Guadalcanal',
      UTCOffset: '11:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Somalia',
      city: 'Mogadishu',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'South Africa',
      city: 'Johannesburg',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'South Georgia And The South Sandwich Islands',
      city: 'South_Georgia',
      UTCOffset: '02:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'South Korea',
      city: 'Seoul',
      UTCOffset: '09:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'South Sudan',
      city: 'Juba',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Spain',
      city: 'Canary',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Spain',
      city: 'Ceuta',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Spain',
      city: 'Madrid',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Sri Lanka',
      city: 'Colombo',
      UTCOffset: '05:30',
      isAheadOfUTC: true
    } ,
    {
      country: 'Sudan',
      city: 'Khartoum',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Suriname',
      city: 'Paramaribo',
      UTCOffset: '03:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Svalbard And Jan Mayen',
      city: 'Longyearbyen',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Swaziland',
      city: 'Mbabane',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Sweden',
      city: 'Stockholm',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Switzerland',
      city: 'Zurich',
      UTCOffset: '02:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Syria',
      city: 'Damascus',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Taiwan',
      city: 'Taipei',
      UTCOffset: '08:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Tajikistan',
      city: 'Dushanbe',
      UTCOffset: '05:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Tanzania',
      city: 'Dar_es_Salaam',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Thailand',
      city: 'Bangkok',
      UTCOffset: '07:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Tokelau',
      city: 'Fakaofo',
      UTCOffset: '13:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Tonga',
      city: 'Tongatapu',
      UTCOffset: '13:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Trinidad And Tobago',
      city: 'Port_of_Spain',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Tunisia',
      city: 'Tunis',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Turkey',
      city: 'Istanbul',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Turkmenistan',
      city: 'Ashgabat',
      UTCOffset: '05:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Turks And Caicos Islands',
      city: 'Grand_Turk',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Tuvalu',
      city: 'Funafuti',
      UTCOffset: '12:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'U.S. Virgin Islands',
      city: 'St_Thomas',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'Uganda',
      city: 'Kampala',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Ukraine',
      city: 'Kiev',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Ukraine',
      city: 'Uzhgorod',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'Ukraine',
      city: 'Zaporozhye',
      UTCOffset: '03:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'United Arab Emirates',
      city: 'Dubai',
      UTCOffset: '04:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'United Kingdom',
      city: 'London',
      UTCOffset: '01:00',
      isAheadOfUTC: true
    } ,
    {
      country: 'United States',
      city: 'Detroit',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Indianapolis',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Marengo',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Petersburg',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Vevay',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Vincennes',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Winamac',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Louisville',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Monticello',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'New_York',
      UTCOffset: '04:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Chicago',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Knox',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Tell_City',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Menominee',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Beulah',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Center',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'New_Salem',
      UTCOffset: '05:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Boise',
      UTCOffset: '06:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Denver',
      UTCOffset: '06:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Los_Angeles',
      UTCOffset: '07:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Phoenix',
      UTCOffset: '07:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Anchorage',
      UTCOffset: '08:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Juneau',
      UTCOffset: '08:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Metlakatla',
      UTCOffset: '08:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Nome',
      UTCOffset: '08:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Sitka',
      UTCOffset: '08:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Yakutat',
      UTCOffset: '08:00',
      isAheadOfUTC: false
    } ,
    {
      country: 'United States',
      city: 'Adak',
      UTCOffset: '09:00',
      isAheadOfUTC: false
    } ,
        
  ]);
};
