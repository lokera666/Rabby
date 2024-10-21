export interface ChainRaw {
  id: number;
  name: string;
  hex: string;
  enum: CHAINS_ENUM;
  serverId: string;
  network: string;
  nativeTokenSymbol: string;
  nativeTokenLogo: string;
  nativeTokenAddress: string;
  scanLink: string;
  nativeTokenDecimals: number;
  selectChainLogo?: string;
  eip: Record<string, boolean>;
  isTestnet?: boolean;
}

export type Chain = ChainRaw & {
  logo: string;
  whiteLogo?: string;
};

export enum CHAINS_ENUM {
  ETH = 'ETH',
  BSC = 'BSC',
  GNOSIS = 'GNOSIS',
  HECO = 'HECO',
  POLYGON = 'POLYGON',
  FTM = 'FTM',
  OKT = 'OKT',
  ARBITRUM = 'ARBITRUM',
  AVAX = 'AVAX',
  OP = 'OP',
  CELO = 'CELO',
  MOVR = 'MOVR',
  CRO = 'CRO',
  BOBA = 'BOBA',
  METIS = 'METIS',
  BTT = 'BTT',
  AURORA = 'AURORA',
  MOBM = 'MOBM',
  SBCH = 'SBCH',
  FUSE = 'FUSE',
  HMY = 'HMY',
  ASTAR = 'ASTAR',
  KLAY = 'KLAY',
  IOTX = 'IOTX',
  RSK = 'RSK',
  WAN = 'WAN',
  KCC = 'KCC',
  SGB = 'SGB',
  EVMOS = 'EVMOS',
  DFK = 'DFK',
  TLOS = 'TLOS',
  NOVA = 'NOVA',
  CANTO = 'CANTO',
  DOGE = 'DOGE',
  STEP = 'STEP',
  KAVA = 'KAVA',
  MADA = 'MADA',
  CFX = 'CFX',
  BRISE = 'BRISE',
  CKB = 'CKB',
  TOMB = 'TOMB',
  PZE = 'PZE',
  ERA = 'ERA',
  EOS = 'EOS',
  CORE = 'CORE',
  FLR = 'FLR',
  WEMIX = 'WEMIX',
  METER = 'METER',
  ETC = 'ETC',
  FSN = 'FSN',
  PULSE = 'PULSE',
  ROSE = 'ROSE',
  RONIN = 'RONIN',
  OAS = 'OAS',
  ZORA = 'ZORA',
  LINEA = 'LINEA',
  BASE = 'BASE',
  GETH = 'GETH',
  GARBITRUM = 'GARBITRUM',
  CGNOSIS = 'CGNOSIS',
  MANTLE = 'MANTLE',
  TENET = 'TENET',
  TBSC = 'TBSC',
  MPOLYGON = 'MPOLYGON',
  GOP = 'GOP',
  GBOBA = 'GBOBA',
  GBASE = 'GBASE',
  GLINEA = 'GLINEA',
  TFTM = 'TFTM',
  LYX = 'LYX',
  TLYX = 'TLYX',
  TDEBANK = 'TDEBANK',
  TMNT = 'TMNT',
  OPBNB = 'OPBNB',
  GERA = 'GERA',
  PMANTA = 'PMANTA',
  TOPBNB = 'TOPBNB',
  TTENET = 'TTENET',
  LOOT = 'LOOT',
  TLOOT = 'TLOOT',
  SETH = 'SETH',
  SSCROLL = 'SSCROLL',
  AZETA = 'AZETA',
  SHIB = 'SHIB',
  TAVAX = 'TAVAX',
  PSHIB = 'PSHIB',
  GMETIS = 'GMETIS',
  SARB = 'SARB',
  TSTLS = 'TSTLS',
  CFLR = 'CFLR',
  ACELO = 'ACELO',
  DBTT = 'DBTT',
  TEVMOS = 'TEVMOS',
  MANTA = 'MANTA',
  TDFK = 'TDFK',
  TWEMIX = 'TWEMIX',
  TSTEP = 'TSTEP',
  METC = 'METC',
  TFSN = 'TFSN',
  AMOBM = 'AMOBM',
  TKCC = 'TKCC',
  TIOTX = 'TIOTX',
  TPLS = 'TPLS',
  HETH = 'HETH',
  BKLAY = 'BKLAY',
  CSGB = 'CSGB',
  TKAVA = 'TKAVA',
  SCRL = 'SCRL',
  FX = 'FX',
  DFX = 'DFX',
  TAURORA = 'TAURORA',
  TCRO = 'TCRO',
  SMODE = 'SMODE',
  TIMXZE = 'TIMXZE',
  KTAIKO = 'KTAIKO',
  TCFX = 'TCFX',
  TX1 = 'TX1',
  TSBY = 'TSBY',
  TAZE = 'TAZE',
  BEAM = 'BEAM',
  TBEAM = 'TBEAM',
  TFRAX = 'TFRAX',
  TPEGO = 'TPEGO',
  TFRAME = 'TFRAME',
  PEGO = 'PEGO',
  ZKFAIR = 'ZKFAIR',
  TRSK = 'TRSK',
  TALOT = 'TALOT',
  FON = 'FON',
  BFC = 'BFC',
  TBFC = 'TBFC',
  ABERA = 'ABERA',
  ALOT = 'ALOT',
  XAI = 'XAI',
  TSAVM = 'TSAVM',
  GXAI = 'GXAI',
  SXAI = 'SXAI',
  SBLAST = 'SBLAST',
  ZETA = 'ZETA',
  RARI = 'RARI',
  HUBBLE = 'HUBBLE',
  TRARI = 'TRARI',
  MODE = 'MODE',
  MERLIN = 'MERLIN',
  DYM = 'DYM',
  EON = 'EON',
  BLAST = 'BLAST',
  SX = 'SX',
  PLATON = 'PLATON',
  MAP = 'MAP',
  FRAX = 'FRAX',
  AZE = 'AZE',
  KARAK = 'KARAK',
}
