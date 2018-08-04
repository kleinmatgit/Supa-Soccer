import delay from './delay';

const allCompetitions = {
  'count': 145,
  'filters': {},
  'competitions': [
    {
      'id': 2144,
      'area': {
        'id': 2000,
        'name': 'Afghanistan'
      },
      'name': 'Playoffs 2/3',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 212,
        'startDate': '2018-05-22',
        'endDate': '2018-05-27',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-07-13T13:34:06Z'
    },
    {
      'id': 2006,
      'area': {
        'id': 2001,
        'name': 'Africa'
      },
      'name': 'WC Qualification',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 7,
        'startDate': '2015-10-07',
        'endDate': '2017-11-14',
        'currentMatchday': 6
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-04T23:54:04Z'
    },
    {
      'id': 2023,
      'area': {
        'id': 2011,
        'name': 'Argentina'
      },
      'name': 'Primera B Nacional',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 25,
        'startDate': '2017-09-16',
        'endDate': '2018-06-03',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-04T23:54:51Z'
    },
    {
      'id': 2024,
      'area': {
        'id': 2011,
        'name': 'Argentina'
      },
      'name': 'Superliga Argentina',
      'code': null,
      'plan': 'TIER_TWO',
      'currentSeason': {
        'id': 26,
        'startDate': '2017-08-26',
        'endDate': '2018-05-15',
        'currentMatchday': 27
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-04T23:55:34Z'
    },
    {
      'id': 2025,
      'area': {
        'id': 2011,
        'name': 'Argentina'
      },
      'name': 'Supercopa Argentina',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 27,
        'startDate': '2018-03-15',
        'endDate': '2018-03-15',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-04T23:54:32Z'
    },
    {
      'id': 2026,
      'area': {
        'id': 2015,
        'name': 'Australia'
      },
      'name': 'FFA Cup',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 28,
        'startDate': '2018-02-10',
        'endDate': '2018-08-07',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-04T23:56:06Z'
    },
    {
      'id': 2008,
      'area': {
        'id': 2015,
        'name': 'Australia'
      },
      'name': 'A League',
      'code': null,
      'plan': 'TIER_TWO',
      'currentSeason': {
        'id': 9,
        'startDate': '2017-10-06',
        'endDate': '2018-05-05',
        'currentMatchday': 27
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-04T23:55:48Z'
    },
    {
      'id': 2022,
      'area': {
        'id': 2016,
        'name': 'Austria'
      },
      'name': 'Playoffs 1/2',
      'code': null,
      'plan': 'TIER_TWO',
      'currentSeason': {
        'id': 24,
        'startDate': '2018-05-31',
        'endDate': '2018-06-03',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-09T12:48:54Z'
    },
    {
      'id': 2027,
      'area': {
        'id': 2016,
        'name': 'Austria'
      },
      'name': 'ÖFB Cup',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 162,
        'startDate': '2018-07-20',
        'endDate': '2018-07-22',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-04T23:56:42Z'
    },
    {
      'id': 2012,
      'area': {
        'id': 2016,
        'name': 'Austria'
      },
      'name': 'Bundesliga',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 208,
        'startDate': '2018-07-27',
        'endDate': '2019-03-17',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-04T23:57:43Z'
    },
    {
      'id': 2020,
      'area': {
        'id': 2016,
        'name': 'Austria'
      },
      'name': 'Erste Liga',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 161,
        'startDate': '2018-07-27',
        'endDate': '2019-06-01',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-04T23:56:31Z'
    },
    {
      'id': 2010,
      'area': {
        'id': 2023,
        'name': 'Belgium'
      },
      'name': 'Supercoupe de Belgique',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 165,
        'startDate': '2018-07-22',
        'endDate': '2018-07-22',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-04T23:58:10Z'
    },
    {
      'id': 2028,
      'area': {
        'id': 2023,
        'name': 'Belgium'
      },
      'name': 'Coupe de Belgique',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 166,
        'startDate': '2018-07-29',
        'endDate': '2018-07-29',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-04T23:58:29Z'
    },
    {
      'id': 2032,
      'area': {
        'id': 2023,
        'name': 'Belgium'
      },
      'name': 'Playoffs II',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 34,
        'startDate': '2018-03-31',
        'endDate': '2018-05-23',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-02T13:08:02Z'
    },
    {
      'id': 2009,
      'area': {
        'id': 2023,
        'name': 'Belgium'
      },
      'name': 'Jupiler Pro League',
      'code': null,
      'plan': 'TIER_TWO',
      'currentSeason': {
        'id': 163,
        'startDate': '2018-07-27',
        'endDate': '2019-03-17',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-04T23:58:02Z'
    },
    {
      'id': 2033,
      'area': {
        'id': 2023,
        'name': 'Belgium'
      },
      'name': 'Division 1B',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 164,
        'startDate': '2018-08-03',
        'endDate': '2019-03-01',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-02T13:16:25Z'
    },
    {
      'id': 2034,
      'area': {
        'id': 2028,
        'name': 'Bolivia'
      },
      'name': 'LFPB',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 36,
        'startDate': '2018-01-27',
        'endDate': '2018-11-28',
        'currentMatchday': 1
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-04T23:58:44Z'
    },
    {
      'id': 2035,
      'area': {
        'id': 2030,
        'name': 'Bosnia and Herzegovina'
      },
      'name': 'Premier Liga',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 167,
        'startDate': '2018-07-21',
        'endDate': '2019-02-09',
        'currentMatchday': 1
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-04T23:58:57Z'
    },
    {
      'id': 2037,
      'area': {
        'id': 2032,
        'name': 'Brazil'
      },
      'name': 'Copa do Brasil',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 39,
        'startDate': '2018-01-30',
        'endDate': '2018-08-17',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-04T23:59:26Z'
    },
    {
      'id': 2038,
      'area': {
        'id': 2032,
        'name': 'Brazil'
      },
      'name': 'Série D',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 40,
        'startDate': '2018-04-21',
        'endDate': '2018-07-24',
        'currentMatchday': 6
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-04T23:59:34Z'
    },
    {
      'id': 2036,
      'area': {
        'id': 2032,
        'name': 'Brazil'
      },
      'name': 'Série C',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 38,
        'startDate': '2018-04-14',
        'endDate': '2018-08-12',
        'currentMatchday': 15
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-04T23:59:15Z'
    },
    {
      'id': 2013,
      'area': {
        'id': 2032,
        'name': 'Brazil'
      },
      'name': 'Série A',
      'code': null,
      'plan': 'TIER_ONE',
      'currentSeason': {
        'id': 15,
        'startDate': '2018-04-14',
        'endDate': '2018-12-02',
        'currentMatchday': 14
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-04T23:52:06Z'
    },
    {
      'id': 2029,
      'area': {
        'id': 2032,
        'name': 'Brazil'
      },
      'name': 'Série B',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 31,
        'startDate': '2018-04-14',
        'endDate': '2018-11-24',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-04T23:59:52Z'
    },
    {
      'id': 2039,
      'area': {
        'id': 2035,
        'name': 'Bulgaria'
      },
      'name': 'Kupa na Bulgarija',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 41,
        'startDate': '2017-09-19',
        'endDate': '2018-05-09',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:00:10Z'
    },
    {
      'id': 2040,
      'area': {
        'id': 2035,
        'name': 'Bulgaria'
      },
      'name': 'A PFG',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 168,
        'startDate': '2018-07-20',
        'endDate': '2019-03-16',
        'currentMatchday': 1
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:01:01Z'
    },
    {
      'id': 2041,
      'area': {
        'id': 2040,
        'name': 'Canada'
      },
      'name': 'Canadian Championship',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 43,
        'startDate': '2018-06-07',
        'endDate': '2018-07-26',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:01:12Z'
    },
    {
      'id': 2042,
      'area': {
        'id': 2045,
        'name': 'Chile'
      },
      'name': 'Playoffs 1/2',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 44,
        'startDate': '2017-11-25',
        'endDate': '2017-12-21',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:01:23Z'
    },
    {
      'id': 2043,
      'area': {
        'id': 2045,
        'name': 'Chile'
      },
      'name': 'Supercopa de Chile',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 45,
        'startDate': '2018-01-26',
        'endDate': '2018-01-26',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:01:51Z'
    },
    {
      'id': 2048,
      'area': {
        'id': 2045,
        'name': 'Chile'
      },
      'name': 'Primera División',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 51,
        'startDate': '2018-02-03',
        'endDate': '2018-12-01',
        'currentMatchday': 16
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:01:37Z'
    },
    {
      'id': 2044,
      'area': {
        'id': 2046,
        'name': 'China PR'
      },
      'name': 'Chinese Super League',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 46,
        'startDate': '2018-03-02',
        'endDate': '2018-11-11',
        'currentMatchday': 13
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:02:13Z'
    },
    {
      'id': 2045,
      'area': {
        'id': 2049,
        'name': 'Colombia'
      },
      'name': 'Liga Postobón',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 47,
        'startDate': '2018-02-03',
        'endDate': '2018-11-11',
        'currentMatchday': 1
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:02:42Z'
    },
    {
      'id': 2046,
      'area': {
        'id': 2049,
        'name': 'Colombia'
      },
      'name': 'Superliga de Colombia',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 48,
        'startDate': '2018-02-01',
        'endDate': '2018-02-08',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:02:32Z'
    },
    {
      'id': 2047,
      'area': {
        'id': 2058,
        'name': 'Croatia'
      },
      'name': 'Prva Liga',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 170,
        'startDate': '2018-07-28',
        'endDate': '2019-05-25',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:02:52Z'
    },
    {
      'id': 2049,
      'area': {
        'id': 2062,
        'name': 'Czech Republic'
      },
      'name': 'Synot Liga',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 171,
        'startDate': '2018-07-20',
        'endDate': '2019-04-27',
        'currentMatchday': 1
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:03:02Z'
    },
    {
      'id': 2050,
      'area': {
        'id': 2065,
        'name': 'Denmark'
      },
      'name': 'Superliga',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 172,
        'startDate': '2018-07-13',
        'endDate': '2019-03-17',
        'currentMatchday': 2
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:03:14Z'
    },
    {
      'id': 2141,
      'area': {
        'id': 2065,
        'name': 'Denmark'
      },
      'name': 'Play Offs 1/2',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': null,
      'numberOfAvailableSeasons': 0,
      'lastUpdated': '2018-07-13T13:34:22Z'
    },
    {
      'id': 2051,
      'area': {
        'id': 2065,
        'name': 'Denmark'
      },
      'name': 'DBU Pokalen',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 173,
        'startDate': '2018-08-08',
        'endDate': '2018-08-08',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:03:32Z'
    },
    {
      'id': 2052,
      'area': {
        'id': 2069,
        'name': 'Ecuador'
      },
      'name': 'Copa Pilsener Serie A',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 55,
        'startDate': '2018-02-17',
        'endDate': '2018-12-09',
        'currentMatchday': 1
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:03:51Z'
    },
    {
      'id': 2053,
      'area': {
        'id': 2072,
        'name': 'England'
      },
      'name': 'National League',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 174,
        'startDate': '2018-08-04',
        'endDate': '2019-04-27',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:03:58Z'
    },
    {
      'id': 2030,
      'area': {
        'id': 2072,
        'name': 'England'
      },
      'name': 'League One',
      'code': null,
      'plan': 'TIER_TWO',
      'currentSeason': {
        'id': 152,
        'startDate': '2018-08-04',
        'endDate': '2019-05-04',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:05:21Z'
    },
    {
      'id': 2054,
      'area': {
        'id': 2072,
        'name': 'England'
      },
      'name': 'League Two',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 153,
        'startDate': '2018-08-04',
        'endDate': '2019-05-04',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:04:12Z'
    },
    {
      'id': 2055,
      'area': {
        'id': 2072,
        'name': 'England'
      },
      'name': 'FA Cup',
      'code': null,
      'plan': 'TIER_TWO',
      'currentSeason': {
        'id': 207,
        'startDate': '2018-08-11',
        'endDate': '2018-08-11',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:04:26Z'
    },
    {
      'id': 2016,
      'area': {
        'id': 2072,
        'name': 'England'
      },
      'name': 'Championship',
      'code': null,
      'plan': 'TIER_ONE',
      'currentSeason': {
        'id': 154,
        'startDate': '2018-08-03',
        'endDate': '2019-05-05',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-04T23:52:49Z'
    },
    {
      'id': 2056,
      'area': {
        'id': 2072,
        'name': 'England'
      },
      'name': 'FA Community Shield',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 60,
        'startDate': '2018-08-05',
        'endDate': '2018-08-05',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:05:10Z'
    },
    {
      'id': 2139,
      'area': {
        'id': 2072,
        'name': 'England'
      },
      'name': 'Football League Cup',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 176,
        'startDate': '2018-08-14',
        'endDate': '2018-08-16',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:04:49Z'
    },
    {
      'id': 2021,
      'area': {
        'id': 2072,
        'name': 'England'
      },
      'name': 'Premier League',
      'code': null,
      'plan': 'TIER_ONE',
      'currentSeason': {
        'id': 151,
        'startDate': '2018-08-10',
        'endDate': '2019-05-12',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 26,
      'lastUpdated': '2018-06-04T23:52:26Z'
    },
    {
      'id': 2057,
      'area': {
        'id': 2075,
        'name': 'Estonia'
      },
      'name': 'Meistriliiga',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 61,
        'startDate': '2018-03-03',
        'endDate': '2018-11-10',
        'currentMatchday': 19
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:05:52Z'
    },
    {
      'id': 2018,
      'area': {
        'id': 2077,
        'name': 'Europe'
      },
      'name': 'European Championship',
      'code': null,
      'plan': 'TIER_ONE',
      'currentSeason': {
        'id': 20,
        'startDate': '2016-06-10',
        'endDate': '2016-07-10',
        'currentMatchday': 3
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:06:55Z'
    },
    {
      'id': 2058,
      'area': {
        'id': 2077,
        'name': 'Europe'
      },
      'name': 'UEFA Women\'s EURO',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 62,
        'startDate': '2017-07-16',
        'endDate': '2017-08-06',
        'currentMatchday': 3
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:06:08Z'
    },
    {
      'id': 2007,
      'area': {
        'id': 2077,
        'name': 'Europe'
      },
      'name': 'WC Qualification',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 8,
        'startDate': '2016-09-04',
        'endDate': '2017-11-14',
        'currentMatchday': 10
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:06:41Z'
    },
    {
      'id': 2001,
      'area': {
        'id': 2077,
        'name': 'Europe'
      },
      'name': 'UEFA Champions League',
      'code': null,
      'plan': 'TIER_ONE',
      'currentSeason': {
        'id': 175,
        'startDate': '2018-06-26',
        'endDate': '2018-08-01',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 5,
      'lastUpdated': '2018-06-05T00:06:27Z'
    },
    {
      'id': 2031,
      'area': {
        'id': 2080,
        'name': 'Finland'
      },
      'name': 'Veikkausliiga',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 33,
        'startDate': '2018-04-07',
        'endDate': '2018-10-27',
        'currentMatchday': 20
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:07:06Z'
    },
    {
      'id': 2059,
      'area': {
        'id': 2080,
        'name': 'Finland'
      },
      'name': 'Suomen Cup',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 63,
        'startDate': '2018-01-19',
        'endDate': '2018-05-12',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:07:27Z'
    },
    {
      'id': 2136,
      'area': {
        'id': 2081,
        'name': 'France'
      },
      'name': 'Trophée des Champions',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 206,
        'startDate': '2018-08-04',
        'endDate': '2018-08-04',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:08:21Z'
    },
    {
      'id': 2015,
      'area': {
        'id': 2081,
        'name': 'France'
      },
      'name': 'Ligue 1',
      'code': null,
      'plan': 'TIER_ONE',
      'currentSeason': {
        'id': 177,
        'startDate': '2018-08-10',
        'endDate': '2019-05-25',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:07:58Z'
    },
    {
      'id': 2138,
      'area': {
        'id': 2081,
        'name': 'France'
      },
      'name': 'Coupe de France',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 147,
        'startDate': '2017-11-10',
        'endDate': '2018-05-08',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:08:30Z'
    },
    {
      'id': 2142,
      'area': {
        'id': 2081,
        'name': 'France'
      },
      'name': 'Ligue 2',
      'code': null,
      'plan': 'TIER_TWO',
      'currentSeason': {
        'id': 210,
        'startDate': '2018-07-27',
        'endDate': '2019-05-17',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-07-13T13:35:31Z'
    },
    {
      'id': 2135,
      'area': {
        'id': 2081,
        'name': 'France'
      },
      'name': 'Coupe de la Ligue',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 144,
        'startDate': '2017-08-08',
        'endDate': '2018-03-31',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:07:42Z'
    },
    {
      'id': 2143,
      'area': {
        'id': 2081,
        'name': 'France'
      },
      'name': 'Playoffs 1/2',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 211,
        'startDate': '2018-05-23',
        'endDate': '2018-05-27',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-07-12T14:32:17Z'
    },
    {
      'id': 2002,
      'area': {
        'id': 2088,
        'name': 'Germany'
      },
      'name': 'Bundesliga',
      'code': null,
      'plan': 'TIER_ONE',
      'currentSeason': {
        'id': 155,
        'startDate': '2018-08-24',
        'endDate': '2019-05-18',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 22,
      'lastUpdated': '2018-06-05T00:10:05Z'
    },
    {
      'id': 2140,
      'area': {
        'id': 2088,
        'name': 'Germany'
      },
      'name': '3. Liga',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 149,
        'startDate': '2017-07-21',
        'endDate': '2018-05-22',
        'currentMatchday': 38
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:08:51Z'
    },
    {
      'id': 2129,
      'area': {
        'id': 2088,
        'name': 'Germany'
      },
      'name': 'Regionalliga',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 178,
        'startDate': '2018-07-12',
        'endDate': '2019-05-18',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:08:41Z'
    },
    {
      'id': 2133,
      'area': {
        'id': 2088,
        'name': 'Germany'
      },
      'name': 'Frauen Bundesliga',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 142,
        'startDate': '2017-09-02',
        'endDate': '2018-06-03',
        'currentMatchday': 22
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:09:39Z'
    },
    {
      'id': 2011,
      'area': {
        'id': 2088,
        'name': 'Germany'
      },
      'name': 'DFB-Pokal',
      'code': null,
      'plan': 'TIER_TWO',
      'currentSeason': {
        'id': 13,
        'startDate': '2017-08-11',
        'endDate': '2018-05-19',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:09:18Z'
    },
    {
      'id': 2134,
      'area': {
        'id': 2088,
        'name': 'Germany'
      },
      'name': 'DFL Super Cup',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 143,
        'startDate': '2017-08-05',
        'endDate': '2017-08-05',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:10:19Z'
    },
    {
      'id': 2004,
      'area': {
        'id': 2088,
        'name': 'Germany'
      },
      'name': '2. Bundesliga',
      'code': null,
      'plan': 'TIER_TWO',
      'currentSeason': {
        'id': 157,
        'startDate': '2018-08-03',
        'endDate': '2019-05-19',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 23,
      'lastUpdated': '2018-06-05T00:09:05Z'
    },
    {
      'id': 2132,
      'area': {
        'id': 2093,
        'name': 'Greece'
      },
      'name': 'Super League',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 141,
        'startDate': '2017-08-19',
        'endDate': '2018-05-07',
        'currentMatchday': 30
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:10:59Z'
    },
    {
      'id': 2131,
      'area': {
        'id': 2093,
        'name': 'Greece'
      },
      'name': 'Greek Cup',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 140,
        'startDate': '2017-08-20',
        'endDate': '2018-05-12',
        'currentMatchday': 3
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:10:49Z'
    },
    {
      'id': 2128,
      'area': {
        'id': 2106,
        'name': 'Hungary'
      },
      'name': 'NB I',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 179,
        'startDate': '2018-07-21',
        'endDate': '2019-05-19',
        'currentMatchday': 1
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:11:33Z'
    },
    {
      'id': 2130,
      'area': {
        'id': 2106,
        'name': 'Hungary'
      },
      'name': 'Magyar Kupa',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 139,
        'startDate': '2017-09-19',
        'endDate': '2018-05-23',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:11:19Z'
    },
    {
      'id': 2127,
      'area': {
        'id': 2107,
        'name': 'Iceland'
      },
      'name': 'Úrvalsdeild',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 136,
        'startDate': '2018-04-27',
        'endDate': '2018-09-29',
        'currentMatchday': 13
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:13:31Z'
    },
    {
      'id': 2126,
      'area': {
        'id': 2108,
        'name': 'India'
      },
      'name': 'I-League',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 135,
        'startDate': '2017-11-25',
        'endDate': '2018-03-08',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:13:45Z'
    },
    {
      'id': 2125,
      'area': {
        'id': 2113,
        'name': 'Israel'
      },
      'name': 'Ligat ha\'Al',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 205,
        'startDate': '2018-08-25',
        'endDate': '2019-03-09',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:13:57Z'
    },
    {
      'id': 2124,
      'area': {
        'id': 2114,
        'name': 'Italy'
      },
      'name': 'Supercoppa',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 159,
        'startDate': '2019-01-12',
        'endDate': '2019-01-12',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:14:07Z'
    },
    {
      'id': 2121,
      'area': {
        'id': 2114,
        'name': 'Italy'
      },
      'name': 'Serie B',
      'code': null,
      'plan': 'TIER_TWO',
      'currentSeason': {
        'id': 130,
        'startDate': '2017-08-25',
        'endDate': '2018-06-16',
        'currentMatchday': 42
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:14:34Z'
    },
    {
      'id': 2019,
      'area': {
        'id': 2114,
        'name': 'Italy'
      },
      'name': 'Serie A',
      'code': null,
      'plan': 'TIER_ONE',
      'currentSeason': {
        'id': 21,
        'startDate': '2017-08-19',
        'endDate': '2018-05-20',
        'currentMatchday': 38
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:14:16Z'
    },
    {
      'id': 2122,
      'area': {
        'id': 2114,
        'name': 'Italy'
      },
      'name': 'Coppa Italia',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 131,
        'startDate': '2017-07-29',
        'endDate': '2018-05-09',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:14:51Z'
    },
    {
      'id': 2123,
      'area': {
        'id': 2114,
        'name': 'Italy'
      },
      'name': 'Serie C',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 132,
        'startDate': '2017-08-26',
        'endDate': '2018-06-16',
        'currentMatchday': 38
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:15:10Z'
    },
    {
      'id': 2120,
      'area': {
        'id': 2116,
        'name': 'Japan'
      },
      'name': 'Super Cup',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 129,
        'startDate': '2018-02-10',
        'endDate': '2018-02-10',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:15:43Z'
    },
    {
      'id': 2117,
      'area': {
        'id': 2116,
        'name': 'Japan'
      },
      'name': 'J. League Division 2',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 126,
        'startDate': '2018-02-25',
        'endDate': '2018-11-16',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:16:01Z'
    },
    {
      'id': 2118,
      'area': {
        'id': 2116,
        'name': 'Japan'
      },
      'name': 'J.League Cup',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 127,
        'startDate': '2018-03-07',
        'endDate': '2018-06-09',
        'currentMatchday': 6
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:16:15Z'
    },
    {
      'id': 2119,
      'area': {
        'id': 2116,
        'name': 'Japan'
      },
      'name': 'J. League',
      'code': null,
      'plan': 'TIER_TWO',
      'currentSeason': {
        'id': 128,
        'startDate': '2018-02-23',
        'endDate': '2018-12-01',
        'currentMatchday': 17
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:15:28Z'
    },
    {
      'id': 2116,
      'area': {
        'id': 2129,
        'name': 'Latvia'
      },
      'name': 'Virslīga',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 125,
        'startDate': '2018-03-31',
        'endDate': '2018-11-10',
        'currentMatchday': 15
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:16:27Z'
    },
    {
      'id': 2115,
      'area': {
        'id': 2135,
        'name': 'Lithuania'
      },
      'name': 'A Lyga',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 124,
        'startDate': '2018-02-24',
        'endDate': '2018-10-21',
        'currentMatchday': 20
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:16:41Z'
    },
    {
      'id': 2114,
      'area': {
        'id': 2143,
        'name': 'Malta'
      },
      'name': 'Premier League',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 160,
        'startDate': '2018-08-17',
        'endDate': '2018-08-17',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:16:54Z'
    },
    {
      'id': 2112,
      'area': {
        'id': 2149,
        'name': 'Mexico'
      },
      'name': 'SuperCopa MX',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 121,
        'startDate': '2018-07-15',
        'endDate': '2018-07-15',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:17:16Z'
    },
    {
      'id': 2113,
      'area': {
        'id': 2149,
        'name': 'Mexico'
      },
      'name': 'Liga MX',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 186,
        'startDate': '2018-07-21',
        'endDate': '2018-11-25',
        'currentMatchday': 1
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:17:36Z'
    },
    {
      'id': 2111,
      'area': {
        'id': 2149,
        'name': 'Mexico'
      },
      'name': 'Copa MX',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 187,
        'startDate': '2018-07-25',
        'endDate': '2018-09-06',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:17:06Z'
    },
    {
      'id': 2109,
      'area': {
        'id': 2163,
        'name': 'Netherlands'
      },
      'name': 'KNVB Beker',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 117,
        'startDate': '2017-08-19',
        'endDate': '2018-04-22',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:18:06Z'
    },
    {
      'id': 2003,
      'area': {
        'id': 2163,
        'name': 'Netherlands'
      },
      'name': 'Eredivisie',
      'code': null,
      'plan': 'TIER_ONE',
      'currentSeason': {
        'id': 156,
        'startDate': '2018-08-10',
        'endDate': '2019-05-12',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:17:50Z'
    },
    {
      'id': 2110,
      'area': {
        'id': 2163,
        'name': 'Netherlands'
      },
      'name': 'Johan Cruijff Schaal',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 182,
        'startDate': '2018-08-04',
        'endDate': '2018-08-04',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:18:23Z'
    },
    {
      'id': 2005,
      'area': {
        'id': 2163,
        'name': 'Netherlands'
      },
      'name': 'Jupiler League',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 180,
        'startDate': '2018-08-17',
        'endDate': '2019-05-03',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:18:42Z'
    },
    {
      'id': 2108,
      'area': {
        'id': 2171,
        'name': 'Northern Ireland'
      },
      'name': 'League Cup',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 203,
        'startDate': '2018-08-04',
        'endDate': '2018-08-04',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:19:13Z'
    },
    {
      'id': 2107,
      'area': {
        'id': 2171,
        'name': 'Northern Ireland'
      },
      'name': 'Premiership',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 204,
        'startDate': '2018-08-04',
        'endDate': '2019-03-23',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:19:02Z'
    },
    {
      'id': 2104,
      'area': {
        'id': 2173,
        'name': 'Norway'
      },
      'name': 'Playoffs 1/2',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 112,
        'startDate': '2017-11-29',
        'endDate': '2017-12-02',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:20:23Z'
    },
    {
      'id': 2105,
      'area': {
        'id': 2173,
        'name': 'Norway'
      },
      'name': '1. divisjon',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 113,
        'startDate': '2018-04-02',
        'endDate': '2018-11-11',
        'currentMatchday': 16
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:19:26Z'
    },
    {
      'id': 2106,
      'area': {
        'id': 2173,
        'name': 'Norway'
      },
      'name': 'Tippeligaen',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 114,
        'startDate': '2018-03-11',
        'endDate': '2018-11-25',
        'currentMatchday': 17
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:20:12Z'
    },
    {
      'id': 2103,
      'area': {
        'id': 2175,
        'name': 'Oceania'
      },
      'name': 'WC Qualification',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 111,
        'startDate': '2015-08-31',
        'endDate': '2017-09-05',
        'currentMatchday': 6
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:20:43Z'
    },
    {
      'id': 2102,
      'area': {
        'id': 2181,
        'name': 'Panama'
      },
      'name': 'Liga Panameña de Fútbol',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 110,
        'startDate': '2017-07-15',
        'endDate': '2018-05-20',
        'currentMatchday': 18
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:21:02Z'
    },
    {
      'id': 2101,
      'area': {
        'id': 2184,
        'name': 'Peru'
      },
      'name': 'Primera División',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 109,
        'startDate': '2018-02-03',
        'endDate': '2018-11-25',
        'currentMatchday': 7
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:21:16Z'
    },
    {
      'id': 2099,
      'area': {
        'id': 2186,
        'name': 'Poland'
      },
      'name': 'Superpuchar Polski',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 107,
        'startDate': '2018-07-14',
        'endDate': '2018-07-14',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:21:44Z'
    },
    {
      'id': 2100,
      'area': {
        'id': 2186,
        'name': 'Poland'
      },
      'name': 'Puchar Polski',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 198,
        'startDate': '2018-08-08',
        'endDate': '2018-08-08',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:21:31Z'
    },
    {
      'id': 2097,
      'area': {
        'id': 2187,
        'name': 'Portugal'
      },
      'name': 'Supertaça Cândido de Oliveira',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 104,
        'startDate': '2018-08-04',
        'endDate': '2018-08-04',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:22:37Z'
    },
    {
      'id': 2098,
      'area': {
        'id': 2187,
        'name': 'Portugal'
      },
      'name': 'Taça de Portugal',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 105,
        'startDate': '2017-09-02',
        'endDate': '2018-05-20',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:22:53Z'
    },
    {
      'id': 2017,
      'area': {
        'id': 2187,
        'name': 'Portugal'
      },
      'name': 'Primeira Liga',
      'code': null,
      'plan': 'TIER_ONE',
      'currentSeason': {
        'id': 183,
        'startDate': '2018-08-12',
        'endDate': '2019-05-19',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:21:58Z'
    },
    {
      'id': 2096,
      'area': {
        'id': 2187,
        'name': 'Portugal'
      },
      'name': 'Liga2 Cabovisão',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 184,
        'startDate': '2018-08-12',
        'endDate': '2019-05-19',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:22:19Z'
    },
    {
      'id': 2095,
      'area': {
        'id': 2192,
        'name': 'Republic of Ireland'
      },
      'name': 'Premier Division',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 101,
        'startDate': '2018-02-16',
        'endDate': '2018-10-26',
        'currentMatchday': 26
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:23:09Z'
    },
    {
      'id': 2093,
      'area': {
        'id': 2194,
        'name': 'Romania'
      },
      'name': 'Supercupa României',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 202,
        'startDate': '2018-07-14',
        'endDate': '2018-07-14',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:23:54Z'
    },
    {
      'id': 2094,
      'area': {
        'id': 2194,
        'name': 'Romania'
      },
      'name': 'Liga I',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 185,
        'startDate': '2018-07-20',
        'endDate': '2019-03-02',
        'currentMatchday': 1
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:24:07Z'
    },
    {
      'id': 2092,
      'area': {
        'id': 2194,
        'name': 'Romania'
      },
      'name': 'Liga II',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 98,
        'startDate': '2017-08-04',
        'endDate': '2018-06-13',
        'currentMatchday': 38
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:23:34Z'
    },
    {
      'id': 2089,
      'area': {
        'id': 2195,
        'name': 'Russia'
      },
      'name': 'Russian Cup',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 95,
        'startDate': '2017-07-14',
        'endDate': '2018-05-09',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:25:07Z'
    },
    {
      'id': 2137,
      'area': {
        'id': 2195,
        'name': 'Russia'
      },
      'name': 'RFPL',
      'code': null,
      'plan': 'TIER_TWO',
      'currentSeason': {
        'id': 201,
        'startDate': '2018-07-28',
        'endDate': '2019-05-26',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:24:22Z'
    },
    {
      'id': 2090,
      'area': {
        'id': 2195,
        'name': 'Russia'
      },
      'name': 'Playoffs 1/2',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 96,
        'startDate': '2018-05-17',
        'endDate': '2018-05-20',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:24:32Z'
    },
    {
      'id': 2091,
      'area': {
        'id': 2195,
        'name': 'Russia'
      },
      'name': 'Russian Super Cup',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 199,
        'startDate': '2018-07-27',
        'endDate': '2018-07-27',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:24:42Z'
    },
    {
      'id': 2088,
      'area': {
        'id': 2195,
        'name': 'Russia'
      },
      'name': 'FNL',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 200,
        'startDate': '2018-07-17',
        'endDate': '2019-05-25',
        'currentMatchday': 2
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:24:58Z'
    },
    {
      'id': 2085,
      'area': {
        'id': 2204,
        'name': 'Scotland'
      },
      'name': 'Championship',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 197,
        'startDate': '2018-08-04',
        'endDate': '2019-05-04',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:25:43Z'
    },
    {
      'id': 2086,
      'area': {
        'id': 2204,
        'name': 'Scotland'
      },
      'name': 'Playoffs 2/3',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 92,
        'startDate': '2018-05-02',
        'endDate': '2018-05-13',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:25:54Z'
    },
    {
      'id': 2087,
      'area': {
        'id': 2204,
        'name': 'Scotland'
      },
      'name': 'Scottish Cup',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 93,
        'startDate': '2017-08-12',
        'endDate': '2018-05-19',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:26:07Z'
    },
    {
      'id': 2084,
      'area': {
        'id': 2204,
        'name': 'Scotland'
      },
      'name': 'Premier League',
      'code': null,
      'plan': 'TIER_TWO',
      'currentSeason': {
        'id': 196,
        'startDate': '2018-08-04',
        'endDate': '2019-04-06',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:25:23Z'
    },
    {
      'id': 2083,
      'area': {
        'id': 2219,
        'name': 'South Africa'
      },
      'name': 'ABSA Premiership',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 89,
        'startDate': '2017-08-18',
        'endDate': '2018-06-02',
        'currentMatchday': 30
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:26:20Z'
    },
    {
      'id': 2081,
      'area': {
        'id': 2220,
        'name': 'South America'
      },
      'name': 'Copa Sudamericana',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 87,
        'startDate': '2018-02-13',
        'endDate': '2018-08-17',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:26:52Z'
    },
    {
      'id': 2082,
      'area': {
        'id': 2220,
        'name': 'South America'
      },
      'name': 'WC Qualification',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 88,
        'startDate': '2015-10-08',
        'endDate': '2017-10-11',
        'currentMatchday': 18
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:27:01Z'
    },
    {
      'id': 2080,
      'area': {
        'id': 2220,
        'name': 'South America'
      },
      'name': 'Copa America',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 85,
        'startDate': null,
        'endDate': null,
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:26:43Z'
    },
    {
      'id': 2077,
      'area': {
        'id': 2224,
        'name': 'Spain'
      },
      'name': 'Segunda División',
      'code': null,
      'plan': 'TIER_TWO',
      'currentSeason': {
        'id': 81,
        'startDate': '2017-08-18',
        'endDate': '2018-06-16',
        'currentMatchday': 42
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:27:45Z'
    },
    {
      'id': 2014,
      'area': {
        'id': 2224,
        'name': 'Spain'
      },
      'name': 'Primera Division',
      'code': null,
      'plan': 'TIER_ONE',
      'currentSeason': {
        'id': 16,
        'startDate': '2017-08-18',
        'endDate': '2018-05-20',
        'currentMatchday': 38
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:27:54Z'
    },
    {
      'id': 2078,
      'area': {
        'id': 2224,
        'name': 'Spain'
      },
      'name': 'Supercopa de España',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 83,
        'startDate': '2018-08-11',
        'endDate': '2018-08-14',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:27:12Z'
    },
    {
      'id': 2079,
      'area': {
        'id': 2224,
        'name': 'Spain'
      },
      'name': 'Copa del Rey',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 84,
        'startDate': '2017-08-30',
        'endDate': '2018-04-21',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:27:31Z'
    },
    {
      'id': 2073,
      'area': {
        'id': 2233,
        'name': 'Sweden'
      },
      'name': 'Allsvenskan',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 77,
        'startDate': '2018-04-01',
        'endDate': '2018-11-11',
        'currentMatchday': 14
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:28:10Z'
    },
    {
      'id': 2074,
      'area': {
        'id': 2233,
        'name': 'Sweden'
      },
      'name': 'Superettan',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 78,
        'startDate': '2018-03-31',
        'endDate': '2018-11-10',
        'currentMatchday': 16
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:28:27Z'
    },
    {
      'id': 2075,
      'area': {
        'id': 2233,
        'name': 'Sweden'
      },
      'name': 'Playoffs 2/3',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 79,
        'startDate': '2017-11-08',
        'endDate': '2017-11-11',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:28:43Z'
    },
    {
      'id': 2076,
      'area': {
        'id': 2233,
        'name': 'Sweden'
      },
      'name': 'Playoffs 1/2',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 80,
        'startDate': '2017-11-15',
        'endDate': '2017-11-19',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:28:54Z'
    },
    {
      'id': 2071,
      'area': {
        'id': 2234,
        'name': 'Switzerland'
      },
      'name': 'Schweizer Pokal',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 194,
        'startDate': '2018-08-18',
        'endDate': '2018-08-18',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:29:06Z'
    },
    {
      'id': 2072,
      'area': {
        'id': 2234,
        'name': 'Switzerland'
      },
      'name': 'Super League',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 195,
        'startDate': '2018-07-21',
        'endDate': '2019-05-25',
        'currentMatchday': 1
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:29:55Z'
    },
    {
      'id': 2069,
      'area': {
        'id': 2247,
        'name': 'Turkey'
      },
      'name': 'TFF Süper Kupa',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 73,
        'startDate': '2017-08-06',
        'endDate': '2017-08-06',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:30:33Z'
    },
    {
      'id': 2070,
      'area': {
        'id': 2247,
        'name': 'Turkey'
      },
      'name': 'Süper Lig',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 192,
        'startDate': '2018-08-12',
        'endDate': '2019-05-26',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:30:48Z'
    },
    {
      'id': 2068,
      'area': {
        'id': 2247,
        'name': 'Turkey'
      },
      'name': '1. Lig',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 193,
        'startDate': '2018-08-11',
        'endDate': '2019-05-18',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:30:10Z'
    },
    {
      'id': 2065,
      'area': {
        'id': 2253,
        'name': 'Ukraine'
      },
      'name': 'Kubok Ukrainy',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 190,
        'startDate': '2018-07-17',
        'endDate': '2018-07-18',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:31:33Z'
    },
    {
      'id': 2066,
      'area': {
        'id': 2253,
        'name': 'Ukraine'
      },
      'name': 'Playoffs 1/2',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 70,
        'startDate': '2018-05-23',
        'endDate': '2018-05-27',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-02T14:03:07Z'
    },
    {
      'id': 2067,
      'area': {
        'id': 2253,
        'name': 'Ukraine'
      },
      'name': 'Superkubok Ukrainy',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 191,
        'startDate': '2018-07-21',
        'endDate': '2018-07-21',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:30:59Z'
    },
    {
      'id': 2064,
      'area': {
        'id': 2253,
        'name': 'Ukraine'
      },
      'name': 'Premier Liha',
      'code': null,
      'plan': 'TIER_THREE',
      'currentSeason': {
        'id': 189,
        'startDate': '2018-07-22',
        'endDate': '2018-10-06',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:31:17Z'
    },
    {
      'id': 2063,
      'area': {
        'id': 2257,
        'name': 'Uruguay'
      },
      'name': 'Primera División',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 67,
        'startDate': '2018-02-03',
        'endDate': '2018-10-28',
        'currentMatchday': 1
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:31:55Z'
    },
    {
      'id': 2062,
      'area': {
        'id': 2262,
        'name': 'Venezuela'
      },
      'name': 'Primera División',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 66,
        'startDate': '2018-01-27',
        'endDate': '2018-11-04',
        'currentMatchday': 1
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:32:09Z'
    },
    {
      'id': 2061,
      'area': {
        'id': 2263,
        'name': 'Vietnam'
      },
      'name': 'V-League',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 65,
        'startDate': '2018-03-10',
        'endDate': '2018-10-06',
        'currentMatchday': 20
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-05T00:33:30Z'
    },
    {
      'id': 2060,
      'area': {
        'id': 2264,
        'name': 'Wales'
      },
      'name': 'Welsh Premier League',
      'code': null,
      'plan': 'TIER_FOUR',
      'currentSeason': {
        'id': 188,
        'startDate': '2018-08-10',
        'endDate': '2019-01-12',
        'currentMatchday': null
      },
      'numberOfAvailableSeasons': 2,
      'lastUpdated': '2018-06-05T00:34:00Z'
    },
    {
      'id': 2000,
      'area': {
        'id': 2267,
        'name': 'World'
      },
      'name': 'FIFA World Cup',
      'code': null,
      'plan': 'TIER_ONE',
      'currentSeason': {
        'id': 1,
        'startDate': '2018-06-14',
        'endDate': '2018-07-15',
        'currentMatchday': 3
      },
      'numberOfAvailableSeasons': 1,
      'lastUpdated': '2018-06-04T00:02:58Z'
    }
  ]
};
const competitions = {
  'Ligue 1': {
    'id': 2015,
    'area': {
      'id': 2081,
      'name': 'France'
    },
    'name': 'Ligue 1',
    'code': null,
    'plan': 'TIER_ONE',
    'currentSeason': {
      'id': 177,
      'startDate': '2018-08-10',
      'endDate': '2019-05-25',
      'currentMatchday': null
    },
    'seasons': [
      {
        'id': 177,
        'startDate': '2018-08-10',
        'endDate': '2019-05-25',
        'currentMatchday': null
      },
      {
        'id': 17,
        'startDate': '2017-08-04',
        'endDate': '2018-05-27',
        'currentMatchday': 38
      }
    ],
    'lastUpdated': '2018-06-05T00:07:58Z'
  },
  'La Liga': {
    'id': 2014,
    'area': {
      'id': 2224,
      'name': 'Spain'
    },
    'name': 'Primera Division',
    'code': null,
    'plan': 'TIER_ONE',
    'currentSeason': {
      'id': 281,
      'startDate': '2018-08-17',
      'endDate': '2019-05-26',
      'currentMatchday': null
    },
    'seasons': [
      {
        'id': 281,
        'startDate': '2018-08-17',
        'endDate': '2019-05-26',
        'currentMatchday': null
      },
      {
        'id': 16,
        'startDate': '2017-08-18',
        'endDate': '2018-05-20',
        'currentMatchday': 38
      }
    ],
    'lastUpdated': '2018-06-05T00:27:54Z'
  }
};
const competitionMatches = {
  'Ligue 1': {
    'matchday1': {
      'count': 10,
      'filters': {
        'matchday': '1'
      },
      'competition': {
        'id': 2015,
        'area': {
          'id': 2081,
          'name': 'France'
        },
        'name': 'Ligue 1',
        'code': null,
        'plan': 'TIER_ONE',
        'lastUpdated': '2018-06-05T00:07:58Z'
      },
      'matches': [
        {
          'id': 238996,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-10T18:45:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-16T16:01:31Z',
          'homeTeam': {
            'id': 516,
            'name': 'Olympique de Marseille'
          },
          'awayTeam': {
            'id': 511,
            'name': 'Toulouse FC'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 238999,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-11T15:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-16T16:01:31Z',
          'homeTeam': {
            'id': 543,
            'name': 'FC Nantes'
          },
          'awayTeam': {
            'id': 548,
            'name': 'AS Monaco FC'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 238990,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-11T18:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-16T16:01:31Z',
          'homeTeam': {
            'id': 518,
            'name': 'Montpellier HSC'
          },
          'awayTeam': {
            'id': 528,
            'name': 'Dijon Football Côte d\'Or'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 238992,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-11T18:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-16T16:01:31Z',
          'homeTeam': {
            'id': 521,
            'name': 'Lille OSC'
          },
          'awayTeam': {
            'id': 529,
            'name': 'Stade Rennais FC 1901'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 238995,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-11T18:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-16T16:01:31Z',
          'homeTeam': {
            'id': 527,
            'name': 'AS Saint-Étienne'
          },
          'awayTeam': {
            'id': 538,
            'name': 'En Avant Guingamp'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 238997,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-11T18:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-16T16:01:32Z',
          'homeTeam': {
            'id': 522,
            'name': 'OGC de Nice Côte d\'Azur'
          },
          'awayTeam': {
            'id': 547,
            'name': 'Stade de Reims'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 238998,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-11T18:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-16T16:01:32Z',
          'homeTeam': {
            'id': 532,
            'name': 'Angers SCO'
          },
          'awayTeam': {
            'id': 556,
            'name': 'Nîmes Olympique'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 238993,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-12T13:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-16T16:01:32Z',
          'homeTeam': {
            'id': 523,
            'name': 'Olympique Lyonnais'
          },
          'awayTeam': {
            'id': 530,
            'name': 'Amiens SC'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 238994,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-12T15:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-16T16:01:32Z',
          'homeTeam': {
            'id': 526,
            'name': 'FC Girondins de Bordeaux'
          },
          'awayTeam': {
            'id': 576,
            'name': 'RC Strasbourg Alsace'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 238991,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-12T19:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-16T16:01:32Z',
          'homeTeam': {
            'id': 524,
            'name': 'Paris Saint-Germain FC'
          },
          'awayTeam': {
            'id': 514,
            'name': 'SM Caen'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        }
      ]
    },
    'matchday2': {
      'count': 10,
      'filters': {
        'matchday': '2'
      },
      'competition': {
        'id': 2015,
        'area': {
          'id': 2081,
          'name': 'France'
        },
        'name': 'Ligue 1',
        'code': null,
        'plan': 'TIER_ONE',
        'lastUpdated': '2018-06-05T00:07:58Z'
      },
      'matches': [
        {
          'id': 239000,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-17T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 2,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-12T11:14:58Z',
          'homeTeam': {
            'id': 529,
            'name': 'Stade Rennais FC 1901'
          },
          'awayTeam': {
            'id': 532,
            'name': 'Angers SCO'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 239001,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-17T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 2,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-12T11:14:58Z',
          'homeTeam': {
            'id': 511,
            'name': 'Toulouse FC'
          },
          'awayTeam': {
            'id': 526,
            'name': 'FC Girondins de Bordeaux'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 239002,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-17T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 2,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-12T11:14:58Z',
          'homeTeam': {
            'id': 547,
            'name': 'Stade de Reims'
          },
          'awayTeam': {
            'id': 523,
            'name': 'Olympique Lyonnais'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 239003,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-17T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 2,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-12T11:14:58Z',
          'homeTeam': {
            'id': 548,
            'name': 'AS Monaco FC'
          },
          'awayTeam': {
            'id': 521,
            'name': 'Lille OSC'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 239004,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-17T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 2,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-12T11:14:58Z',
          'homeTeam': {
            'id': 514,
            'name': 'SM Caen'
          },
          'awayTeam': {
            'id': 522,
            'name': 'OGC de Nice Côte d\'Azur'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 239005,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-17T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 2,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-12T11:14:58Z',
          'homeTeam': {
            'id': 538,
            'name': 'En Avant Guingamp'
          },
          'awayTeam': {
            'id': 524,
            'name': 'Paris Saint-Germain FC'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 239006,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-17T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 2,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-12T11:14:58Z',
          'homeTeam': {
            'id': 528,
            'name': 'Dijon Football Côte d\'Or'
          },
          'awayTeam': {
            'id': 543,
            'name': 'FC Nantes'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 239007,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-17T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 2,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-12T11:14:58Z',
          'homeTeam': {
            'id': 556,
            'name': 'Nîmes Olympique'
          },
          'awayTeam': {
            'id': 516,
            'name': 'Olympique de Marseille'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 239008,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-17T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 2,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-12T11:14:58Z',
          'homeTeam': {
            'id': 576,
            'name': 'RC Strasbourg Alsace'
          },
          'awayTeam': {
            'id': 527,
            'name': 'AS Saint-Étienne'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 239009,
          'season': {
            'id': 177,
            'startDate': '2018-08-10',
            'endDate': '2019-05-25',
            'currentMatchday': null
          },
          'utcDate': '2018-08-17T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 2,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-12T11:14:58Z',
          'homeTeam': {
            'id': 530,
            'name': 'Amiens SC'
          },
          'awayTeam': {
            'id': 518,
            'name': 'Montpellier HSC'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        }
      ]
    },
  },
  'La Liga': {
    'matchday1': {
      'count': 10,
      'filters': {
        'matchday': '1'
      },
      'competition': {
        'id': 2014,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'Primera Division',
        'code': null,
        'plan': 'TIER_ONE',
        'lastUpdated': '2018-06-05T00:27:54Z'
      },
      'matches': [
        {
          'id': 246112,
          'season': {
            'id': 281,
            'startDate': '2018-08-19',
            'endDate': '2019-05-26',
            'currentMatchday': null
          },
          'utcDate': '2018-08-18T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-26T10:49:16Z',
          'homeTeam': {
            'id': 86,
            'name': 'Real Madrid CF'
          },
          'awayTeam': {
            'id': 82,
            'name': 'Getafe CF'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 246113,
          'season': {
            'id': 281,
            'startDate': '2018-08-19',
            'endDate': '2019-05-26',
            'currentMatchday': null
          },
          'utcDate': '2018-08-18T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-26T10:49:16Z',
          'homeTeam': {
            'id': 81,
            'name': 'FC Barcelona'
          },
          'awayTeam': {
            'id': 263,
            'name': 'Deportivo Alavés'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 246114,
          'season': {
            'id': 281,
            'startDate': '2018-08-19',
            'endDate': '2019-05-26',
            'currentMatchday': null
          },
          'utcDate': '2018-08-18T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-26T10:49:16Z',
          'homeTeam': {
            'id': 95,
            'name': 'Valencia CF'
          },
          'awayTeam': {
            'id': 78,
            'name': 'Club Atlético de Madrid'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 246115,
          'season': {
            'id': 281,
            'startDate': '2018-08-19',
            'endDate': '2019-05-26',
            'currentMatchday': null
          },
          'utcDate': '2018-08-18T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-26T10:49:16Z',
          'homeTeam': {
            'id': 77,
            'name': 'Athletic Club'
          },
          'awayTeam': {
            'id': 745,
            'name': 'CD Leganés'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 246116,
          'season': {
            'id': 281,
            'startDate': '2018-08-19',
            'endDate': '2019-05-26',
            'currentMatchday': null
          },
          'utcDate': '2018-08-18T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-26T10:49:16Z',
          'homeTeam': {
            'id': 90,
            'name': 'Real Betis Balompié'
          },
          'awayTeam': {
            'id': 88,
            'name': 'Levante UD'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 246117,
          'season': {
            'id': 281,
            'startDate': '2018-08-19',
            'endDate': '2019-05-26',
            'currentMatchday': null
          },
          'utcDate': '2018-08-18T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-26T10:49:16Z',
          'homeTeam': {
            'id': 87,
            'name': 'Rayo Vallecano de Madrid'
          },
          'awayTeam': {
            'id': 559,
            'name': 'Sevilla FC'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 246118,
          'season': {
            'id': 281,
            'startDate': '2018-08-19',
            'endDate': '2019-05-26',
            'currentMatchday': null
          },
          'utcDate': '2018-08-18T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-26T10:49:16Z',
          'homeTeam': {
            'id': 558,
            'name': 'RC Celta de Vigo'
          },
          'awayTeam': {
            'id': 80,
            'name': 'RCD Espanyol de Barcelona'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 246119,
          'season': {
            'id': 281,
            'startDate': '2018-08-19',
            'endDate': '2019-05-26',
            'currentMatchday': null
          },
          'utcDate': '2018-08-18T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-26T10:49:16Z',
          'homeTeam': {
            'id': 298,
            'name': 'Girona FC'
          },
          'awayTeam': {
            'id': 250,
            'name': 'Real Valladolid CF'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 246120,
          'season': {
            'id': 281,
            'startDate': '2018-08-19',
            'endDate': '2019-05-26',
            'currentMatchday': null
          },
          'utcDate': '2018-08-18T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-26T10:49:16Z',
          'homeTeam': {
            'id': 94,
            'name': 'Villarreal CF'
          },
          'awayTeam': {
            'id': 92,
            'name': 'Real Sociedad de Fútbol'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        },
        {
          'id': 246121,
          'season': {
            'id': 281,
            'startDate': '2018-08-19',
            'endDate': '2019-05-26',
            'currentMatchday': null
          },
          'utcDate': '2018-08-18T00:00:00Z',
          'status': 'SCHEDULED',
          'matchday': 1,
          'stage': 'REGULAR_SEASON',
          'group': 'Regular Season',
          'lastUpdated': '2018-07-26T10:49:16Z',
          'homeTeam': {
            'id': 278,
            'name': 'SD Eibar'
          },
          'awayTeam': {
            'id': 299,
            'name': 'SD Huesca'
          },
          'score': {
            'winner': null,
            'duration': 'REGULAR',
            'fullTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'halfTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'extraTime': {
              'homeTeam': null,
              'awayTeam': null
            },
            'penalties': {
              'homeTeam': null,
              'awayTeam': null
            }
          },
          'referees': []
        }
      ]
    },
  }
};
const competitionStandings = {
  'Ligue 1': {
    'filters': {},
    'competition': {
      'id': 2015,
      'area': {
        'id': 2081,
        'name': 'France'
      },
      'name': 'Ligue 1',
      'code': null,
      'plan': 'TIER_ONE',
      'lastUpdated': '2018-06-05T00:07:58Z'
    },
    'season': {
      'id': 177,
      'startDate': '2018-08-10',
      'endDate': '2019-05-25',
      'currentMatchday': null
    },
    'standings': [
      {
        'stage': 'REGULAR_SEASON',
        'type': 'TOTAL',
        'group': null,
        'table': [
          {
            'position': 1,
            'team': {
              'id': 518,
              'name': 'Montpellier HSC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 2,
            'team': {
              'id': 524,
              'name': 'Paris Saint-Germain FC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 3,
            'team': {
              'id': 521,
              'name': 'Lille OSC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 4,
            'team': {
              'id': 523,
              'name': 'Olympique Lyonnais',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 5,
            'team': {
              'id': 526,
              'name': 'FC Girondins de Bordeaux',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 6,
            'team': {
              'id': 529,
              'name': 'Stade Rennais FC 1901',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 7,
            'team': {
              'id': 527,
              'name': 'AS Saint-Étienne',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 8,
            'team': {
              'id': 511,
              'name': 'Toulouse FC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 9,
            'team': {
              'id': 516,
              'name': 'Olympique de Marseille',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 10,
            'team': {
              'id': 522,
              'name': 'OGC de Nice Côte d\'Azur',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 11,
            'team': {
              'id': 547,
              'name': 'Stade de Reims',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 12,
            'team': {
              'id': 532,
              'name': 'Angers SCO',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 13,
            'team': {
              'id': 543,
              'name': 'FC Nantes',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 14,
            'team': {
              'id': 548,
              'name': 'AS Monaco FC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 15,
            'team': {
              'id': 514,
              'name': 'SM Caen',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 16,
            'team': {
              'id': 538,
              'name': 'En Avant Guingamp',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 17,
            'team': {
              'id': 528,
              'name': 'Dijon Football Côte d\'Or',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 18,
            'team': {
              'id': 556,
              'name': 'Nîmes Olympique',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 19,
            'team': {
              'id': 576,
              'name': 'RC Strasbourg Alsace',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 20,
            'team': {
              'id': 530,
              'name': 'Amiens SC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          }
        ]
      },
      {
        'stage': 'REGULAR_SEASON',
        'type': 'HOME',
        'group': null,
        'table': [
          {
            'position': 1,
            'team': {
              'id': 518,
              'name': 'Montpellier HSC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 2,
            'team': {
              'id': 524,
              'name': 'Paris Saint-Germain FC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 3,
            'team': {
              'id': 521,
              'name': 'Lille OSC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 4,
            'team': {
              'id': 523,
              'name': 'Olympique Lyonnais',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 5,
            'team': {
              'id': 526,
              'name': 'FC Girondins de Bordeaux',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 6,
            'team': {
              'id': 529,
              'name': 'Stade Rennais FC 1901',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 7,
            'team': {
              'id': 527,
              'name': 'AS Saint-Étienne',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 8,
            'team': {
              'id': 511,
              'name': 'Toulouse FC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 9,
            'team': {
              'id': 516,
              'name': 'Olympique de Marseille',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 10,
            'team': {
              'id': 522,
              'name': 'OGC de Nice Côte d\'Azur',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 11,
            'team': {
              'id': 547,
              'name': 'Stade de Reims',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 12,
            'team': {
              'id': 532,
              'name': 'Angers SCO',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 13,
            'team': {
              'id': 543,
              'name': 'FC Nantes',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 14,
            'team': {
              'id': 548,
              'name': 'AS Monaco FC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 15,
            'team': {
              'id': 514,
              'name': 'SM Caen',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 16,
            'team': {
              'id': 538,
              'name': 'En Avant Guingamp',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 17,
            'team': {
              'id': 528,
              'name': 'Dijon Football Côte d\'Or',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 18,
            'team': {
              'id': 556,
              'name': 'Nîmes Olympique',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 19,
            'team': {
              'id': 576,
              'name': 'RC Strasbourg Alsace',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 20,
            'team': {
              'id': 530,
              'name': 'Amiens SC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          }
        ]
      },
      {
        'stage': 'REGULAR_SEASON',
        'type': 'AWAY',
        'group': null,
        'table': [
          {
            'position': 1,
            'team': {
              'id': 518,
              'name': 'Montpellier HSC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 2,
            'team': {
              'id': 524,
              'name': 'Paris Saint-Germain FC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 3,
            'team': {
              'id': 521,
              'name': 'Lille OSC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 4,
            'team': {
              'id': 523,
              'name': 'Olympique Lyonnais',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 5,
            'team': {
              'id': 526,
              'name': 'FC Girondins de Bordeaux',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 6,
            'team': {
              'id': 529,
              'name': 'Stade Rennais FC 1901',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 7,
            'team': {
              'id': 527,
              'name': 'AS Saint-Étienne',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 8,
            'team': {
              'id': 511,
              'name': 'Toulouse FC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 9,
            'team': {
              'id': 516,
              'name': 'Olympique de Marseille',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 10,
            'team': {
              'id': 522,
              'name': 'OGC de Nice Côte d\'Azur',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 11,
            'team': {
              'id': 547,
              'name': 'Stade de Reims',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 12,
            'team': {
              'id': 532,
              'name': 'Angers SCO',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 13,
            'team': {
              'id': 543,
              'name': 'FC Nantes',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 14,
            'team': {
              'id': 548,
              'name': 'AS Monaco FC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 15,
            'team': {
              'id': 514,
              'name': 'SM Caen',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 16,
            'team': {
              'id': 538,
              'name': 'En Avant Guingamp',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 17,
            'team': {
              'id': 528,
              'name': 'Dijon Football Côte d\'Or',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 18,
            'team': {
              'id': 556,
              'name': 'Nîmes Olympique',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 19,
            'team': {
              'id': 576,
              'name': 'RC Strasbourg Alsace',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 20,
            'team': {
              'id': 530,
              'name': 'Amiens SC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          }
        ]
      }
    ]
  },
  'La Liga': {
    'filters': {},
    'competition': {
      'id': 2014,
      'area': {
        'id': 2224,
        'name': 'Spain'
      },
      'name': 'Primera Division',
      'code': null,
      'plan': 'TIER_ONE',
      'lastUpdated': '2018-06-05T00:27:54Z'
    },
    'season': {
      'id': 281,
      'startDate': '2018-08-19',
      'endDate': '2019-05-26',
      'currentMatchday': null
    },
    'standings': [
      {
        'stage': 'REGULAR_SEASON',
        'type': 'TOTAL',
        'group': null,
        'table': [
          {
            'position': 1,
            'team': {
              'id': 86,
              'name': 'Real Madrid CF',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 2,
            'team': {
              'id': 81,
              'name': 'FC Barcelona',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 3,
            'team': {
              'id': 95,
              'name': 'Valencia CF',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 4,
            'team': {
              'id': 78,
              'name': 'Club Atlético de Madrid',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 5,
            'team': {
              'id': 88,
              'name': 'Levante UD',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 6,
            'team': {
              'id': 559,
              'name': 'Sevilla FC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 7,
            'team': {
              'id': 77,
              'name': 'Athletic Club',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 8,
            'team': {
              'id': 82,
              'name': 'Getafe CF',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 9,
            'team': {
              'id': 92,
              'name': 'Real Sociedad de Fútbol',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 10,
            'team': {
              'id': 90,
              'name': 'Real Betis Balompié',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 11,
            'team': {
              'id': 80,
              'name': 'RCD Espanyol de Barcelona',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 12,
            'team': {
              'id': 87,
              'name': 'Rayo Vallecano de Madrid',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 13,
            'team': {
              'id': 558,
              'name': 'RC Celta de Vigo',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 14,
            'team': {
              'id': 250,
              'name': 'Real Valladolid CF',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 15,
            'team': {
              'id': 298,
              'name': 'Girona FC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 16,
            'team': {
              'id': 94,
              'name': 'Villarreal CF',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 17,
            'team': {
              'id': 299,
              'name': 'SD Huesca',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 18,
            'team': {
              'id': 263,
              'name': 'Deportivo Alavés',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 19,
            'team': {
              'id': 745,
              'name': 'CD Leganés',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 20,
            'team': {
              'id': 278,
              'name': 'SD Eibar',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          }
        ]
      },
      {
        'stage': 'REGULAR_SEASON',
        'type': 'HOME',
        'group': null,
        'table': [
          {
            'position': 1,
            'team': {
              'id': 86,
              'name': 'Real Madrid CF',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 2,
            'team': {
              'id': 81,
              'name': 'FC Barcelona',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 3,
            'team': {
              'id': 95,
              'name': 'Valencia CF',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 4,
            'team': {
              'id': 78,
              'name': 'Club Atlético de Madrid',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 5,
            'team': {
              'id': 88,
              'name': 'Levante UD',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 6,
            'team': {
              'id': 559,
              'name': 'Sevilla FC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 7,
            'team': {
              'id': 77,
              'name': 'Athletic Club',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 8,
            'team': {
              'id': 82,
              'name': 'Getafe CF',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 9,
            'team': {
              'id': 92,
              'name': 'Real Sociedad de Fútbol',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 10,
            'team': {
              'id': 90,
              'name': 'Real Betis Balompié',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 11,
            'team': {
              'id': 80,
              'name': 'RCD Espanyol de Barcelona',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 12,
            'team': {
              'id': 87,
              'name': 'Rayo Vallecano de Madrid',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 13,
            'team': {
              'id': 558,
              'name': 'RC Celta de Vigo',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 14,
            'team': {
              'id': 250,
              'name': 'Real Valladolid CF',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 15,
            'team': {
              'id': 298,
              'name': 'Girona FC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 16,
            'team': {
              'id': 94,
              'name': 'Villarreal CF',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 17,
            'team': {
              'id': 299,
              'name': 'SD Huesca',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 18,
            'team': {
              'id': 263,
              'name': 'Deportivo Alavés',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 19,
            'team': {
              'id': 745,
              'name': 'CD Leganés',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 20,
            'team': {
              'id': 278,
              'name': 'SD Eibar',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          }
        ]
      },
      {
        'stage': 'REGULAR_SEASON',
        'type': 'AWAY',
        'group': null,
        'table': [
          {
            'position': 1,
            'team': {
              'id': 86,
              'name': 'Real Madrid CF',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 2,
            'team': {
              'id': 81,
              'name': 'FC Barcelona',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 3,
            'team': {
              'id': 95,
              'name': 'Valencia CF',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 4,
            'team': {
              'id': 78,
              'name': 'Club Atlético de Madrid',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 5,
            'team': {
              'id': 88,
              'name': 'Levante UD',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 6,
            'team': {
              'id': 559,
              'name': 'Sevilla FC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 7,
            'team': {
              'id': 77,
              'name': 'Athletic Club',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 8,
            'team': {
              'id': 82,
              'name': 'Getafe CF',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 9,
            'team': {
              'id': 92,
              'name': 'Real Sociedad de Fútbol',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 10,
            'team': {
              'id': 90,
              'name': 'Real Betis Balompié',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 11,
            'team': {
              'id': 80,
              'name': 'RCD Espanyol de Barcelona',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 12,
            'team': {
              'id': 87,
              'name': 'Rayo Vallecano de Madrid',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 13,
            'team': {
              'id': 558,
              'name': 'RC Celta de Vigo',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 14,
            'team': {
              'id': 250,
              'name': 'Real Valladolid CF',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 15,
            'team': {
              'id': 298,
              'name': 'Girona FC',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 16,
            'team': {
              'id': 94,
              'name': 'Villarreal CF',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 17,
            'team': {
              'id': 299,
              'name': 'SD Huesca',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 18,
            'team': {
              'id': 263,
              'name': 'Deportivo Alavés',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 19,
            'team': {
              'id': 745,
              'name': 'CD Leganés',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          },
          {
            'position': 20,
            'team': {
              'id': 278,
              'name': 'SD Eibar',
              'crestURI': null
            },
            'playedGames': 0,
            'won': 0,
            'draw': 0,
            'lost': 0,
            'points': 0,
            'goalsFor': 0,
            'goalsAgainst': 0,
            'goalDifference': 0
          }
        ]
      }
    ]
  }
};
const competitionTeams = {
  'Ligue 1': {
    'count': 20,
    'filters': {},
    'competition': {
      'id': 2015,
      'area': {
        'id': 2081,
        'name': 'France'
      },
      'name': 'Ligue 1',
      'code': null,
      'plan': 'TIER_ONE',
      'lastUpdated': '2018-06-05T00:07:58Z'
    },
    'season': {
      'id': 177,
      'startDate': '2018-08-10',
      'endDate': '2019-05-25',
      'currentMatchday': null
    },
    'teams': [
      {
        'id': 511,
        'area': {
          'id': null,
          'name': null
        },
        'name': 'Toulouse FC',
        'shortName': 'Toulouse FC',
        'tla': 'TOU',
        'address': '1 allée Gabriel Biénèsm, BP 54023 Toulouse 31028',
        'phone': '+33 (0892) 704000',
        'website': 'http://www.tfc.info',
        'email': null,
        'founded': 1937,
        'clubColors': 'Violet / White',
        'venue': null,
        'lastUpdated': null
      },
      {
        'id': 514,
        'area': {
          'id': null,
          'name': null
        },
        'name': 'SM Caen',
        'shortName': 'SM Caen',
        'tla': 'SMC',
        'address': 'Boulevard G. Pompidou Caen 14000',
        'phone': '+33 (0892) 700148',
        'website': 'http://www.smcaen.fr',
        'email': 'lglaize@smcaen.fr',
        'founded': 1892,
        'clubColors': 'Red / Blue',
        'venue': null,
        'lastUpdated': null
      },
      {
        'id': 516,
        'area': {
          'id': null,
          'name': null
        },
        'name': 'Olympique de Marseille',
        'shortName': 'Marseille',
        'tla': 'MAR',
        'address': 'La Commanderie, 33, traverse de La Martine Marseille 13012',
        'phone': '+33 (049) 1765609',
        'website': 'http://www.om.net',
        'email': 'om@olympiquedemarseille.com',
        'founded': 1898,
        'clubColors': 'White / Blue',
        'venue': null,
        'lastUpdated': null
      },
      {
        'id': 518,
        'area': {
          'id': null,
          'name': null
        },
        'name': 'Montpellier HSC',
        'shortName': 'Montpellier',
        'tla': 'MON',
        'address': 'Domaine de Grammont CS 79041 Montpellier 34967',
        'phone': '+33 (0467) 154600',
        'website': 'http://www.mhscfoot.com',
        'email': 'accueil@mhscfoot.com',
        'founded': 1970,
        'clubColors': 'Blue / Orange',
        'venue': null,
        'lastUpdated': null
      },
      {
        'id': 521,
        'area': {
          'id': null,
          'name': null
        },
        'name': 'Lille OSC',
        'shortName': 'Lille OSC',
        'tla': 'OSC',
        'address': 'Grand Rue 59, 780 Camphin-en-Pévèle Lille null',
        'phone': '+33 (0892) 685672',
        'website': 'http://www.losc.fr',
        'email': 'losclillemetropole.500054@ligue59-62.fr',
        'founded': 1944,
        'clubColors': 'White / Red',
        'venue': null,
        'lastUpdated': null
      },
      {
        'id': 522,
        'area': {
          'id': 2081,
          'name': 'France'
        },
        'name': 'OGC de Nice Côte d\'Azur',
        'shortName': 'OGC Nice',
        'tla': 'NIC',
        'address': '35, avenue du Ray Nice 06100',
        'phone': '+33 (089) 2700238',
        'website': 'http://www.ogcnice.com',
        'email': 'ogcnice.association@orange.fr',
        'founded': 1904,
        'clubColors': 'Red / Black',
        'venue': null,
        'lastUpdated': '2018-06-02T12:59:09Z'
      },
      {
        'id': 523,
        'area': {
          'id': null,
          'name': null
        },
        'name': 'Olympique Lyonnais',
        'shortName': 'Olympique Lyon',
        'tla': 'OLY',
        'address': '350 avenue Jean Jaurès Lyon 69007',
        'phone': '+33 (0426) 296532',
        'website': 'http://www.olweb.fr',
        'email': 'olympique-lyonnais@lrafoot.org',
        'founded': 1896,
        'clubColors': 'White / Red / Blue',
        'venue': null,
        'lastUpdated': null
      },
      {
        'id': 524,
        'area': {
          'id': 2081,
          'name': 'France'
        },
        'name': 'Paris Saint-Germain FC',
        'shortName': 'PSG',
        'tla': 'PSG',
        'address': '24, rue de Commandant Guibaud Paris 7501',
        'phone': '+33 (0139) 733467',
        'website': 'http://www.psg.fr',
        'email': 'communaute@psg.fr',
        'founded': 1904,
        'clubColors': 'Red / Blue / White',
        'venue': null,
        'lastUpdated': '2018-06-02T12:59:09Z'
      },
      {
        'id': 526,
        'area': {
          'id': null,
          'name': null
        },
        'name': 'FC Girondins de Bordeaux',
        'shortName': 'Bordeaux',
        'tla': 'BOR',
        'address': 'Rue Joliot-Curie, Le Haillan Bordeaux 33185',
        'phone': '+33 (0556) 161122',
        'website': 'http://www.girondins.com',
        'email': 'cberteau@girondins.com',
        'founded': 1881,
        'clubColors': 'Blue / White',
        'venue': null,
        'lastUpdated': null
      },
      {
        'id': 527,
        'area': {
          'id': null,
          'name': null
        },
        'name': 'AS Saint-Étienne',
        'shortName': 'Saint-Étienne',
        'tla': 'ETI',
        'address': '11 rue de Verdun L\'Étrat 42580',
        'phone': '+33 (0477) 929899',
        'website': 'http://www.asse.fr',
        'email': 'asse@lrafoot.org',
        'founded': 1919,
        'clubColors': 'Green / White',
        'venue': null,
        'lastUpdated': null
      },
      {
        'id': 528,
        'area': {
          'id': null,
          'name': null
        },
        'name': 'Dijon Football Côte d\'Or',
        'shortName': 'Dijon',
        'tla': null,
        'address': '9 rue Ernest Champaux Dijon 21000',
        'phone': '+33 (0380) 650977',
        'website': 'http://www.dfco.fr',
        'email': 'sportif.asso@dfco.fr',
        'founded': 1936,
        'clubColors': 'Red / White',
        'venue': null,
        'lastUpdated': null
      },
      {
        'id': 529,
        'area': {
          'id': null,
          'name': null
        },
        'name': 'Stade Rennais FC 1901',
        'shortName': 'Stade Rennes',
        'tla': 'REN',
        'address': 'La Piverdière - Chemin de la Taupinais CS 5390 Rennes 35039',
        'phone': '+33 (0820) 000035',
        'website': 'http://www.staderennais.com',
        'email': '4500015@footlbf.fr',
        'founded': 1901,
        'clubColors': 'Red / Black',
        'venue': null,
        'lastUpdated': null
      },
      {
        'id': 530,
        'area': {
          'id': null,
          'name': null
        },
        'name': 'Amiens SC',
        'shortName': 'Amiens SC',
        'tla': null,
        'address': 'Stade de la Licorne Rue du Chapitre Amiens 80016',
        'phone': '+33 (0322) 665800',
        'website': 'http://www.amiensfootball.com',
        'email': 'gilbert.morel@amiensfootball.com',
        'founded': 1901,
        'clubColors': 'Black / White / Grey',
        'venue': null,
        'lastUpdated': null
      },
      {
        'id': 532,
        'area': {
          'id': null,
          'name': null
        },
        'name': 'Angers SCO',
        'shortName': 'Angers SCO',
        'tla': null,
        'address': '73 boulevard Jacques Portet, BP 20212 Angers 49002',
        'phone': '+33 (0892) 390820',
        'website': 'http://www.angers-sco.fr',
        'email': null,
        'founded': 1919,
        'clubColors': 'Black / White / Gold',
        'venue': null,
        'lastUpdated': null
      },
      {
        'id': 538,
        'area': {
          'id': null,
          'name': null
        },
        'name': 'En Avant Guingamp',
        'shortName': 'EA Guingamp',
        'tla': 'GUI',
        'address': '15, bd Clemenceau B.P. 50222 Guingamp 22202',
        'phone': '+33 (0296) 401313',
        'website': 'http://www.eaguingamp.com',
        'email': 'site@eaguingamp.com',
        'founded': 1912,
        'clubColors': 'Red / Black',
        'venue': null,
        'lastUpdated': null
      },
      {
        'id': 543,
        'area': {
          'id': null,
          'name': null
        },
        'name': 'FC Nantes',
        'shortName': 'FC Nantes',
        'tla': 'NAN',
        'address': 'Centre Sportif José Arribas, La Jonelière Nantes 44240',
        'phone': '+33 (0892) 707937',
        'website': 'http://www.fcnantes.com',
        'email': 'contact@fcnantes.com',
        'founded': 1943,
        'clubColors': 'Green / Yellow',
        'venue': null,
        'lastUpdated': null
      },
      {
        'id': 547,
        'area': {
          'id': null,
          'name': null
        },
        'name': 'Stade de Reims',
        'shortName': 'Stade de Reims',
        'tla': 'REI',
        'address': '26 rue Robert-Fulton Reims 51100',
        'phone': '+33 (0891) 024933',
        'website': 'http://www.stade-de-reims.com',
        'email': 'contact@stade-de-reims.com',
        'founded': 1909,
        'clubColors': 'Red / White / Cyan',
        'venue': null,
        'lastUpdated': null
      },
      {
        'id': 548,
        'area': {
          'id': 2152,
          'name': 'Monaco'
        },
        'name': 'AS Monaco FC',
        'shortName': 'Monaco',
        'tla': 'MON',
        'address': 'Avenue des Castellans Monaco 98000',
        'phone': '+33 (377) 92057473',
        'website': 'http://www.asmonaco.com',
        'email': null,
        'founded': 1919,
        'clubColors': 'Red / White',
        'venue': null,
        'lastUpdated': '2018-06-02T12:59:10Z'
      },
      {
        'id': 556,
        'area': {
          'id': null,
          'name': null
        },
        'name': 'Nîmes Olympique',
        'shortName': 'Nîmes',
        'tla': null,
        'address': 'Stade des Costières 123<br>Avenue de la Bouvine Nîmes 30900',
        'phone': '+33 (0466) 290876',
        'website': 'http://www.nimes-olympique.com',
        'email': 'nimesolympiqueassociation@wanadoo.fr',
        'founded': 1901,
        'clubColors': 'Red / White',
        'venue': null,
        'lastUpdated': null
      },
      {
        'id': 576,
        'area': {
          'id': null,
          'name': null
        },
        'name': 'RC Strasbourg Alsace',
        'shortName': 'RC Strasbourg',
        'tla': null,
        'address': 'null Strasbourg null',
        'phone': null,
        'website': 'http://www.rcstrasbourgalsace.fr',
        'email': null,
        'founded': 1906,
        'clubColors': 'Blue / White',
        'venue': null,
        'lastUpdated': null
      }
    ]
  },
  'La Liga': {
    'count': 20,
    'filters': {},
    'competition': {
      'id': 2014,
      'area': {
        'id': 2224,
        'name': 'Spain'
      },
      'name': 'Primera Division',
      'code': null,
      'plan': 'TIER_ONE',
      'lastUpdated': '2018-06-05T00:27:54Z'
    },
    'season': {
      'id': 281,
      'startDate': '2018-08-19',
      'endDate': '2019-05-26',
      'currentMatchday': null
    },
    'teams': [
      {
        'id': 77,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'Athletic Club',
        'shortName': 'Athletic Club',
        'tla': 'BIL',
        'address': 'Ibaigane, Alameda Mazarredo, 23 Bilbao 48009',
        'phone': '+34 (944) 240877',
        'website': 'http://www.athletic-club.eus',
        'email': 'prensa@athletic-club.net',
        'founded': 1898,
        'clubColors': 'Red / White / Black',
        'venue': null,
        'lastUpdated': '2018-06-02T14:14:40Z'
      },
      {
        'id': 78,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'Club Atlético de Madrid',
        'shortName': 'Club Atlético',
        'tla': 'ATM',
        'address': 'Paseo Virgen del Puerto, 67 Madrid 28005',
        'phone': '+34 (913) 669048',
        'website': 'http://www.clubatleticodemadrid.com',
        'email': 'comunicacion@clubatleticodemadrid.com',
        'founded': 1903,
        'clubColors': 'Red / White / Blue',
        'venue': null,
        'lastUpdated': '2018-06-02T12:59:05Z'
      },
      {
        'id': 80,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'RCD Espanyol de Barcelona',
        'shortName': 'Espanyol',
        'tla': 'ESP',
        'address': 'Avenida Baix Llobregat, 100 Cornellà de Llobregat 08940',
        'phone': '+34 (932) 927700',
        'website': 'http://www.rcdespanyol.com',
        'email': 'info@rcdespanyol',
        'founded': 1900,
        'clubColors': 'Blue / White',
        'venue': null,
        'lastUpdated': '2018-06-02T14:14:58Z'
      },
      {
        'id': 81,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'FC Barcelona',
        'shortName': 'Barcelona',
        'tla': 'FCB',
        'address': 'Avenida Arístides Maillol s/n Barcelona 08028',
        'phone': '+34 (902) 189900',
        'website': 'http://www.fcbarcelona.com',
        'email': 'secretaria@fcbarcelona.com',
        'founded': 1899,
        'clubColors': 'Red / Navy Blue / Orange',
        'venue': null,
        'lastUpdated': '2018-06-02T12:58:09Z'
      },
      {
        'id': 82,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'Getafe CF',
        'shortName': 'Getafe',
        'tla': 'FCG',
        'address': 'Avenida Teresa de Calcuta, s/n Getafe 28903',
        'phone': '+34 (916) 959643',
        'website': 'http://www.getafecf.com',
        'email': 'fsantos@getafecf.com',
        'founded': 1946,
        'clubColors': 'Blue / White',
        'venue': null,
        'lastUpdated': '2018-06-02T14:15:07Z'
      },
      {
        'id': 86,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'Real Madrid CF',
        'shortName': 'Real Madrid',
        'tla': 'MAD',
        'address': 'Avenida Concha Espina, 1 Madrid 28036',
        'phone': '+34 (913) 984300',
        'website': 'http://www.realmadrid.com',
        'email': 'atencionpublico@corp.realmadrid.com',
        'founded': 1902,
        'clubColors': 'White / Purple',
        'venue': null,
        'lastUpdated': '2018-06-02T12:58:10Z'
      },
      {
        'id': 87,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'Rayo Vallecano de Madrid',
        'shortName': 'Rayo Vallecano',
        'tla': 'VALL',
        'address': 'Calle del Payaso Fofó, s/n Madrid 28018',
        'phone': '+34 (914) 782253',
        'website': 'http://www.rayovallecano.es',
        'email': 'info@rayovallecano.es',
        'founded': 1924,
        'clubColors': 'White / Red',
        'venue': null,
        'lastUpdated': '2018-06-02T14:13:30Z'
      },
      {
        'id': 88,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'Levante UD',
        'shortName': 'Levante',
        'tla': 'LUD',
        'address': 'Calle San Vicente de Paúl, 44 Valencia 46019',
        'phone': '+34 (902) 220304',
        'website': 'http://www.levanteud.com',
        'email': 'admon@levanteud.es',
        'founded': 1909,
        'clubColors': 'Crimson / Blue',
        'venue': null,
        'lastUpdated': '2018-06-02T14:15:39Z'
      },
      {
        'id': 90,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'Real Betis Balompié',
        'shortName': 'Real Betis',
        'tla': 'BET',
        'address': 'Avenida de Heliópolis, s/n Sevilla 41012',
        'phone': '+34 (902) 191907',
        'website': 'http://www.realbetisbalompie.es',
        'email': 'info@realbetisbalompie.es',
        'founded': 1907,
        'clubColors': 'Green / White',
        'venue': null,
        'lastUpdated': '2018-06-02T14:15:53Z'
      },
      {
        'id': 92,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'Real Sociedad de Fútbol',
        'shortName': 'Real Sociedad',
        'tla': 'RSS',
        'address': 'Anoeta Pasalekua, 1 San Sebastián 20014',
        'phone': '+34 (943) 462833',
        'website': 'http://www.realsociedad.com',
        'email': 'realsoc@realsociedad.com',
        'founded': 1903,
        'clubColors': 'Blue / White',
        'venue': null,
        'lastUpdated': '2018-06-02T14:16:05Z'
      },
      {
        'id': 94,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'Villarreal CF',
        'shortName': 'Villarreal',
        'tla': 'VCF',
        'address': 'Camino Miralcamp, s/n Villarreal 12540',
        'phone': '+34 (964) 500250',
        'website': 'http://www.villarrealcf.es',
        'email': 'villarrealcf@villarrealcf.es',
        'founded': 1923,
        'clubColors': 'Yellow / Blue',
        'venue': null,
        'lastUpdated': '2018-06-02T14:16:09Z'
      },
      {
        'id': 95,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'Valencia CF',
        'shortName': 'Valencia',
        'tla': 'VAL',
        'address': 'Plaza del Valencia Club de Fútbol, 2 Valencia 46010',
        'phone': '+34 (902) 011919',
        'website': 'http://www.valenciacf.com',
        'email': 'informacion@valenciacf.es',
        'founded': 1919,
        'clubColors': 'White / Orange / Black',
        'venue': null,
        'lastUpdated': '2018-06-02T14:16:17Z'
      },
      {
        'id': 250,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'Real Valladolid CF',
        'shortName': 'Valladolid',
        'tla': null,
        'address': 'Avenida del Mundial, 82 Valladolid 47014',
        'phone': '+34 (983) 360342',
        'website': 'http://www.realvalladolid.es',
        'email': 'realvalladolid@realvalladolid.es',
        'founded': 1928,
        'clubColors': 'Violet / White',
        'venue': null,
        'lastUpdated': '2018-06-02T14:14:05Z'
      },
      {
        'id': 263,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'Deportivo Alavés',
        'shortName': 'Alavés',
        'tla': 'ALA',
        'address': 'Mendizorroza, Paseo Cervantes, s/n Vitoria 01007',
        'phone': '+34 (945) 131018',
        'website': 'http://www.alaves.com',
        'email': 'deportivoalavessad@alaves.com',
        'founded': 1921,
        'clubColors': 'Blue / White',
        'venue': null,
        'lastUpdated': '2018-06-02T14:17:01Z'
      },
      {
        'id': 278,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'SD Eibar',
        'shortName': 'Eibar',
        'tla': 'EIB',
        'address': 'Ipurua Kalea, 2 Eibar 20600',
        'phone': '+34 (943) 201831',
        'website': 'http://www.sdeibar.com',
        'email': 'sdeibar@sdeibar.com',
        'founded': 1940,
        'clubColors': 'Red / Blue',
        'venue': null,
        'lastUpdated': '2018-06-02T14:17:33Z'
      },
      {
        'id': 298,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'Girona FC',
        'shortName': 'Girona FC',
        'tla': 'GFC',
        'address': 'Avinguda de Montilivi, 141 Girona 17003',
        'phone': '+34 (902) 548454',
        'website': 'http://www.gironafc.cat',
        'email': 'info@gironafc.cat',
        'founded': 1930,
        'clubColors': 'Red / White / Blue',
        'venue': null,
        'lastUpdated': '2018-06-02T14:18:06Z'
      },
      {
        'id': 299,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'SD Huesca',
        'shortName': 'Huesca',
        'tla': null,
        'address': 'Calle Cocoron, s/n null 22004',
        'phone': '+34 (974) 212679',
        'website': 'http://www.sdhuesca.es',
        'email': 'info@sdhuesca.es',
        'founded': 1910,
        'clubColors': 'Crimson / Navy Blue',
        'venue': null,
        'lastUpdated': '2018-06-02T14:15:00Z'
      },
      {
        'id': 558,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'RC Celta de Vigo',
        'shortName': 'Celta Vigo',
        'tla': 'VIG',
        'address': 'Calle del Conde de Gondomar, 1 Vigo 36203',
        'phone': '+34 (986) 110900',
        'website': 'http://www.celtavigo.net',
        'email': 'comunicacion@celtavigo.net',
        'founded': 1923,
        'clubColors': 'Sky Blue / White',
        'venue': null,
        'lastUpdated': '2018-06-02T14:18:40Z'
      },
      {
        'id': 559,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'Sevilla FC',
        'shortName': 'Sevilla',
        'tla': 'SEV',
        'address': 'Calle Sevilla Fútbol Club, s/n Sevilla 41005',
        'phone': '+34 (902) 510011',
        'website': 'http://www.sevillafc.es',
        'email': 'sevillafc@sevillafc.es',
        'founded': 1905,
        'clubColors': 'White / Red',
        'venue': null,
        'lastUpdated': '2018-06-02T12:51:15Z'
      },
      {
        'id': 745,
        'area': {
          'id': 2224,
          'name': 'Spain'
        },
        'name': 'CD Leganés',
        'shortName': 'Leganés',
        'tla': 'LEG',
        'address': 'Calle Arquitectura, s/n Leganés 28914',
        'phone': '+34 (916) 888629',
        'website': 'http://www.deportivoleganes.com',
        'email': 'comunicacion@deportivoleganes.com',
        'founded': 1928,
        'clubColors': 'Blue / White',
        'venue': null,
        'lastUpdated': '2018-06-02T14:19:05Z'
      }
    ]
  }
};

class MatchApi {

  static getCompetitionTierOne() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], allCompetitions.competitions.filter(
          (competition) => { return competition.plan === 'TIER_ONE';} )));
      }, delay);
    });
  }

  static getCompetition(competition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, competitions[competition]));
      }, delay);
    });
  }

  static getCompetitionMatches(competition, matchday) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], competitionMatches[competition]['matchday' + matchday].matches));
      }, delay);
    });
  }

  static getCompetitionStandings(competition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], competitionStandings[competition].standings[0].table));
      }, delay);
    });
  }

  static getCompetitionTeams(competition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], competitionTeams[competition].teams));
      }, delay);
    });
  }
}

export default MatchApi;
