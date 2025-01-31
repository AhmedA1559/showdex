/**
 * Labels for rendering group labels in the Pokemon presets dropdown.
 *
 * * Used to be all abbreviations, but since v0.1.3, these are now spelled out
 *   for less-common formats, like `'AG'` (Anything Goes) and `'BH'` (Balanced Hackmons).
 *
 * @since 0.1.0
 */
export const FormatLabels: Record<string, string> = {
  '1v1': '1v1',
  '2v2doubles': '2v2 Doubles',
  '4v4doublesdraft': '4v4 Doubles Draft',
  '6v6doublesdraft': '6v6 Doubles Draft',
  almostanyability: 'AAA',
  alternatium: 'Alternatium',
  anythinggoes: 'AG',
  balancedhackmons: 'BH',
  battlefactory: 'Battle Factory',
  battlespotsingles: 'B-Spot Singles',
  battlespotdoubles: 'B-Spot Doubles',
  battlestadiumsingles: 'BSS',
  battlestadiumsinglesseries1: 'BSS Series 1',
  battlestadiumsinglesseries2: 'BSS Series 2', // just a lil near-future-proofing lol
  battlestadiumdoubles: 'BSD',
  battlestadiumdoublesseries13: 'BSD Series 13',
  bdsp3v3singles: 'BDSP 3v3 Singles',
  bdspbattlefestivaldoubles: 'BDSP B-Fest Doubles',
  bdspcap: 'BDSP CAP',
  bdspdraft: 'BDSP Draft',
  bdspmonotype: 'BDSP Monotype',
  bdspnu: 'BDSP NU',
  bdspou: 'BDSP OU', // BrilliantDiamondShiningPearl
  bdsppurehackmons: 'BDSP Pure Hackmons',
  bdsprandombattle: 'BDSP Randoms',
  bdspru: 'BDSP RU',
  bdspubers: 'BDSP Ubers',
  bdspuu: 'BDSP UU',
  bssfactory: 'BSS Factory',
  camomons: 'Camomons',
  cap: 'CAP', // CreateAPokemon (no cap, always factual)
  cap1v1: 'CAP 1v1',
  caplc: 'CAP LC',
  challengecup: 'Challenge Cup',
  challengecup1v1: 'Challenge Cup 1v1',
  challengecup2v2: 'Challenge Cup 2v2',
  challengecup6v6: 'Challenge Cup 6v6',
  computergeneratedteams: 'CG Teams',
  crossevolution: 'Cross Evo',
  customgame: 'Customs',
  doublescustomgame: 'Customs Doubles',
  doubleshackmonscup: 'Hackmons Cup Doubles',
  doubleslc: 'LC Doubles',
  doublesou: 'OU Doubles',
  doublesubers: 'Ubers Doubles',
  doublesuu: 'UU Doubles',
  draft: 'Draft',
  freeforall: 'FFA',
  freeforallrandombattle: 'FFA Randoms',
  fullpotential: 'Full Potential',
  galardexdraft: 'Galar Dex Draft',
  gbusingles: 'GBU Singles',
  godlygift: 'Godly Gift',
  hackmonscup: 'Hackmons Cup',
  inheritance: 'Inheritance',
  japaneseou: 'Japanese OU',
  joltemonsrandombattle: 'JolteMons Randoms',
  lc: 'LC', // LittleCup
  lcuu: 'UU LC',
  letsgoou: 'LGPE OU', // LetsGoPikachuEevee
  letsgorandombattle: 'LGPE Randoms',
  linked: 'Linked',
  metronomebattle: 'Metronome',
  mixandmega: 'Mix & Mega',
  monotype: 'Monotype',
  monotypebattlefactory: 'B-Factory Monotype',
  monotyperandombattle: 'Monotype Randoms',
  multibility: 'Multibility',
  multirandombattle: 'Multibility Randoms',
  natdex4v4doublesdraft: 'NatDex 4v4 Doubles Draft',
  natdex6v6doublesdraft: 'NatDex 6v6 Doubles Draft',
  natdexdraft: 'NatDex Draft', // update (2023/01/06): think it's 'natdex' and not 'nationaldex' here
  natdexlcdraft: 'NatDex LC Draft',
  nationaldex: 'NatDex',
  nationaldexag: 'NatDex AG',
  nationaldexbh: 'NatDex BH',
  nationaldexmonotype: 'NatDex Monotype',
  nationaldexru: 'NatDex RU',
  nationaldexubers: 'NatDex Ubers',
  nationaldexuu: 'NatDex UU',
  natureswap: 'Nature Swap',
  nextou: 'Next OU',
  nfe: 'NFE', // NotFullyEvolved
  nintendocup1997: 'Nintendo Cup 1997',
  nintendocup2000: 'Nintendo Cup 2000',
  nu: 'NU', // NeverUsed
  ou: 'OU', // OverUsed
  oublitz: 'OU Blitz', // went w/ BZ for Blitz cause BL = BanList! (like in PUBL, UUBL, etc.)
  paldeadexdraft: 'Paldea Dex Draft',
  partnersincrime: 'Partners-in-Crime',
  pickyourteamrandombattle: 'PYT Randoms', // pretty young thing?
  pokebilities: 'Pokebilities',
  pu: 'PU', // PU (as in, "P-U, smells like ass"... I think)
  purehackmons: 'Pure Hackmons',
  randombattle: 'Randoms',
  randombattleblitz: 'Randoms Blitz',
  randombattlemayhem: 'Randoms Mayhem',
  randombattlenodmax: 'Randoms No-Dmax',
  randomdex: 'Randoms Dex',
  randomdoublesbattle: 'Randoms Doubles',
  revelationmons: 'Revelationmons',
  ru: 'RU', // RarelyUsed
  sharedpower: 'Shared Power',
  sharedpowerrandombattle: 'Shared Power Randoms',
  spikemuthcup: 'Spikemuth Cup',
  stabmons: 'STABmons', // SameTypeAttackBonus
  stadiumou: 'Stadium OU',
  superstaffbros4: 'Super Staff Bros 4',
  thelosersgame: 'The Loser\'s Game',
  tagteamsingles: 'Tag Team Singles',
  tradebacksou: 'Tradebacks OU',
  triplescustomgame: 'Customs Triples',
  ubers: 'Ubers',
  ultimatefinale: 'Ultimate Finale',
  unratedrandombattle: 'Unrated Randoms',
  uu: 'UU', // UnderUsed
  vgc2009: 'VGC 2009', // VideoGameChampionships
  vgc2010: 'VGC 2010',
  vgc2011: 'VGC 2011',
  vgc2012: 'VGC 2012',
  vgc2013: 'VGC 2013',
  vgc2014: 'VGC 2014',
  vgc2015: 'VGC 2015',
  vgc2016: 'VGC 2016',
  vgc2017: 'VGC 2017',
  vgc2018: 'VGC 2018',
  vgc2019: 'VGC 2019',
  vgc2020: 'VGC 2020',
  vgc2021: 'VGC 2021',
  vgc2022: 'VGC 2022',
  vgc2023: 'VGC 2023',
  vgc2023series1: 'VGC 2023 Series 1',
  vgc2023series2: 'VGC 2023 Series 2', // just another lil near-future-proofing... lol
  voltturnmayhem: 'VoltTurn Mayhem',
  zu: 'ZU', // ZeroUsed
};

/**
 * Formats where abilities and moves should be locked to legal values.
 *
 * * Do not use this array directly; instead, use the `legalLockedFormat()` utility since some special
 *   handling is required for some formats.
 *   - As of v1.1.1, any format starting **and** ending with a forward-slash (`/`) will be converted
 *     into a `RegExp` and `test()`'d.
 *   - Otherwise, the format after stripping the `'gen#'` prefix will be tested with `endsWith()`.
 * * Formats not in this array should allow any illegal abilities and moves to be selected.
 *   - However, if no Pokemon legal abilities and/or moves are available,
 *     all abilities and/or moves will be shown, including illegal ones.
 *   - This case would most likely be caused by Pokemon not being present in the `dex`'s generation.
 *   - See `buildAbilityOptions()` and `buildMoveOptions()` for implementation details.
 * * `showAllOptions` of `ShowdexCalcdexSettings` should take precedence over this behavior.
 * * Note that this list is not final and is subject to change in subsequent versions.
 *
 * @since 1.0.1
 */
export const LegalLockedFormats: string[] = [
  '1v1',
  '2v2doubles',
  // 'battlefactory',
  // 'battlestadiumdoublesseries13',
  // 'battlestadiumsingles',
  '/^battlespot/', // e.g., 'battlespotsingles', 'battlespotdoubles'
  '/^battlestadium/', // e.g., 'battlestadiumsingles', 'battlestadiumdoublesseries13',
  // 'bdspbattlefestivaldoubles',
  // 'bdspdoublesou',
  // 'bdsplc',
  // 'bdspmonotype',
  // 'bdspnu',
  // 'bdspou',
  // 'bdsprandombattle',
  // 'bdspru',
  // 'bdspubers',
  // 'bdspuu',
  '/^bdsp/', // e.g., 'bdspou'
  // 'bssfactory',
  'computergeneratedteams',
  'doubleslc',
  'doublesou',
  'doublesubers',
  'doublesuu',
  '/draft$/', // e.g., '6v6doublesdraft'
  '/factory/', // e.g., 'battlefactory', 'bssfactory'
  // 'freeforallrandombattle',
  'lc',
  'lcuu',
  // 'letsgorandombattle',
  '/^letsgo/', // e.g., 'letsgorandombattle', 'letsgoou'
  'monotype',
  // 'multirandombattle',
  'nationaldex',
  'nationaldexmonotype',
  'nationaldexru',
  'nationaldexuu',
  'nfe',
  'nu',
  'ou',
  'oublitz',
  'pu',
  // 'randombattle',
  // 'randombattleblitz',
  // 'randomdoublesbattle',
  '/random/', // e.g., 'randombattle', 'unratedrandombattle', 'randombattleblitz'
  'ru',
  'ubers',
  // 'unratedrandombattle',
  'uu',
  // 'vgc2009',
  // 'vgc2010',
  // 'vgc2011',
  // 'vgc2012',
  // 'vgc2013',
  // 'vgc2014',
  // 'vgc2015',
  // 'vgc2016',
  // 'vgc2017',
  // 'vgc2018',
  // 'vgc2019',
  // 'vgc2020',
  // 'vgc2021',
  // 'vgc2022',
  // 'vgc2023',
  '/^vgc/', // e.g., 'vgc2022', 'vgc2023series1'
  'zu',
];
