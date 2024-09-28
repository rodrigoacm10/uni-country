export interface Country {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  tld?: string[]; // Domínio de topo (ex: .br, .us)
  cca2: string; // Código de duas letras do país
  cca3: string; // Código de três letras do país
  ccn3?: string; // Código numérico do país
  cioc?: string; // Código olímpico do país
  independent?: boolean; // Se é um país independente
  status: string; // Status político
  unMember: boolean; // Se é membro da ONU
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  capital?: string[]; // Capital do país
  region: string; // Região (ex: Américas)
  subregion?: string; // Sub-região (ex: América do Sul)
  languages?: {
    [key: string]: string; // Idiomas falados no país
  };
  translations?: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  population: number; // População
  latlng: [number, number]; // Coordenadas de latitude e longitude
  area: number; // Área do país em km²
  flag: string; // URL da bandeira do país
  flags: {
    svg: string; // Bandeira no formato SVG
    png: string; // Bandeira no formato PNG
  };
  timezones: string[]; // Fuso horários do país
  borders?: string[]; // Países vizinhos (códigos)
}
