export namespace Bible {
  export enum Testaments {
    Old = "VT",
    New = "NT",
  }

  export type Book = {
    name: string;
    abbrev: string;
    chapters: number;
    testament: Testaments;
  };

  export type Chapter = {
    book: Omit<Book, "chapters">;
    number: number;
    verses: Verse[];
  };

  export type Verse = {
    book: Omit<Book, "chapters" | "testament">;
    chapter: number;
    number: number;
    text: string;
  };

  export const bookAbbrevs = {
    gn: "Gênesis",
    ex: "Êxodo",
    lv: "Levítico",
    nm: "Números",
    dt: "Deuteronômio",
    js: "Josué",
    jz: "Juízes",
    rt: "Rute",
    "1sm": "1º Samuel",
    "2sm": "2º Samuel",
    "1rs": "1º Reis",
    "2rs": "2º Reis",
    "1cr": "1º Crônicas",
    "2cr": "2º Crônicas",
    ed: "Esdras",
    ne: "Neemias",
    et: "Ester",
    job: "Jó",
    sl: "Salmos",
    pv: "Provérbios",
    ec: "Eclesiastes",
    ct: "Cânticos",
    is: "Isaías",
    jr: "Jeremias",
    lm: "Lamentações de Jeremias",
    ez: "Ezequiel",
    dn: "Daniel",
    os: "Oséias",
    jl: "Joel",
    am: "Amós",
    ob: "Obadias",
    jn: "Jonas",
    mq: "Miquéias",
    na: "Naum",
    hc: "Habacuque",
    sf: "Sofonias",
    ag: "Ageu",
    zc: "Zacarias",
    ml: "Malaquias",
    mt: "Mateus",
    mc: "Marcos",
    lc: "Lucas",
    jo: "João",
    at: "Atos",
    rm: "Romanos",
    "1co": "1ª Coríntios",
    "2co": "2ª Coríntios",
    gl: "Gálatas",
    ef: "Efésios",
    fp: "Filipenses",
    cl: "Colossenses",
    "1ts": "1ª Tessalonicenses",
    "2ts": "2ª Tessalonicenses",
    "1tm": "1ª Timóteo",
    "2tm": "2ª Timóteo",
    tt: "Tito",
    fm: "Filemom",
    hb: "Hebreus",
    tg: "Tiago",
    "1pe": "1ª Pedro",
    "2pe": "2ª Pedro",
    "1jo": "1ª João",
    "2jo": "2ª João",
    "3jo": "3ª João",
    jd: "Judas",
    ap: "Apocalipse",
  };
}
