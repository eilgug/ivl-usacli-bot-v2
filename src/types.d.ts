export interface ITeam {
    id: number | undefined;
    name: string;
    societa_id: number | undefined;
    territoriogioco_id: number | undefined;
    tipocampionatointeresse_id: number | undefined;
    sottozona: string | undefined;
    agente: string | undefined;
    note: string | undefined;
    note_admin: string | undefined;
    note_storico: string | undefined;
    logo: string | undefined;
    deleted_at: string | undefined;
    created_at: string | undefined;
    updated_at: string | undefined;
    flagnotvisible: number | undefined;
    stato_iscrizione: string | undefined;
    azioni: string | undefined;
    Societa: string | undefined;
    NumPalestre: number | undefined;
}

export interface ITerritory {
    id: number | undefined;
    name: string | undefined;
    note: string | undefined;
    codice_comitato: string | undefined;
    comune_comitato: string | undefined;
    provincia_comitato: string | undefined;
    deleted_at: string | undefined;
    created_at: string | undefined;
    updated_at: string | undefined;
    logo: string | undefined;
}

export interface ITerritorySerialized {
    id: number | undefined;
    name: string | undefined;
}

export interface IBuilding {
    palestra1_name: string;
    palestra1_indirizzo: string;
    palestra1_latitude: number;
    palestra1_longitude: number;
    palestra1_note: string;
    palestra1_comune: string;
    palestrarinvio_name: string;
    palestrarinvio_indirizzo: string;
    palestrarinvio_latitude: number;
    palestrarinvio_longitude: number;
    palestrarinvio_note: string;
    palestrarinvio_comune: string;
}

export interface IChampionship {
    id: number | undefined;
    territorio_id: number | undefined;
    tipocampionato_id: number | undefined;
    name: string | undefined;
    TipoCampionato: string | undefined;
}

export interface IChampionshipDataRequest {
    territorioId: string;
    inizio_stagione?: string;
    fine_stagione?: string;
}

export interface IMatch {
    id: number | undefined;
    girone_id: number | undefined;
    data_orario: string | undefined;
    palestra_id: number | undefined;
    squadra_casa_id: number | undefined;
    squadra_ospite_id: number | undefined;
    note_partita: string | undefined;
    data_orario_rinvio: string | undefined;
    squadra_rinviante_id: number | undefined;
    palestra_rinvio_id: number | undefined;
    scambio_casa_rinvio: number | undefined;
    primo_arbitro_designato_id: number | undefined;
    stato_designazione_primo_arbitro: string | undefined;
    secondo_arbitro_designato_id: number | undefined;
    stato_designazione_secondo_arbitro: string | undefined;
    ris_set_casa: number | undefined;
    ris_set_ospite: number | undefined;
    ris_punti1set_casa: number | undefined;
    ris_punti1set_ospite: number | undefined;
    ris_punti2set_casa: number | undefined;
    ris_punti2set_ospite: number | undefined;
    ris_punti3set_casa: number | undefined;
    ris_punti3set_ospite: number | undefined;
    ris_punti4set_casa: number | undefined;
    ris_punti4set_ospite: number | undefined;
    ris_punti5set_casa: number | undefined;
    ris_punti5set_ospite: number | undefined;
    assenti_distinta_casa: string | undefined;
    assenti_distinta_ospite: string | undefined;
    orario_inizio_effettivo: string | undefined;
    orario_arrivo_arbitro: null;
    motivazione_ritardo: string | undefined;
    squadra_in_ritardo: null;
    distinta_sq_casa_ok: number | undefined;
    distinta_sq_ospite_ok: number | undefined;
    disponibilita_palestra: string | undefined;
    disponibilita_campo: string | undefined;
    descrizione_anomalie_campo: null;
    segnapunti_visivo: number | undefined;
    referto: number | undefined;
    refertista: string | undefined;
    defibrillatore: number | undefined;
    addetto_defibrillatore: string | undefined;
    provvedimenti_casa: number | undefined;
    descrizione_provvedimenti_casa: null;
    provvedimenti_ospite: number | undefined;
    descrizione_provvedimenti_ospite: null;
    sospensioni_incidenti: number | undefined;
    descrizione_sospensioni_incidenti: null;
    note_arbitro: null;
    deleted_at: null;
    created_at: string | undefined;
    updated_at: string | undefined;
    giornata: string | undefined;
    rete_ok: number | undefined;
    astine_ok: number | undefined;
    spostamento_selfservice: any | undefined;
    partita_deleted_at: null;
    territorio_id: number | undefined;
    Territorio: string | undefined;
    campionato_id: number | undefined;
    Campionato: string | undefined;
    GironeName: string | undefined;
    girone_pubblicato: number | undefined;
    autoarbitrato: number | undefined;
    formula: string | undefined;
    palestra1_id: number | undefined;
    palestra1_name: string | undefined;
    palestra1_indirizzo: string | undefined;
    palestra1_latitude: number | undefined;
    palestra1_longitude: number | undefined;
    palestra1_note: string | undefined;
    palestra1_comune: string | undefined;
    palestrarinvio_id: number | undefined;
    palestrarinvio_name: null;
    palestrarinvio_indirizzo: null;
    palestrarinvio_latitude: number | undefined;
    palestrarinvio_longitude: number | undefined;
    palestrarinvio_note: null;
    palestrarinvio_comune: null;
    squadra_casa_name: string | undefined;
    squadra_casa_logo: string | undefined;
    societa_squadra_casa_id: number | undefined;
    npalestre_sq_casa: number | undefined;
    squadra_ospite_name: string | undefined;
    squadra_ospite_logo: string | undefined;
    societa_squadra_ospite_id: number | undefined;
    npalestre_sq_ospite: number | undefined;
    squadra_rinviante_name: null;
    primoarbitro_name: string | undefined;
    secondoarbitro_name: null;
    azioni: string | undefined;
    Info: string | undefined;
    DataGioco: string | undefined;
    GironeATabellone: boolean | undefined;
    Palestra: string | undefined;
    Palestra_indirizzo: string | undefined;
    Palestra_lat: number | undefined;
    Palestra_long: number | undefined;
    note_palestra: string | undefined;
    AbilitatoESSS: boolean | undefined;
    distinta_casa: string | undefined;
    distinta_ospite: string | undefined;
    AllarmePalestre: string | undefined;
}

export interface IMatchRows {
    rows: IMatch[];
}

export interface IMatchesDataRequest {
    girone_id: string;
    territorio_id: string;
    campionato_id: string;
    inizio_stagione: string;
    fine_stagione: string;
    societa_id: string;
    squadra_id: string;
    pubblicato: number; // 1
    search?: string;
    sort?: string;
    order?: string;
    offset: number; // 0
    limit: number; // 20
}

export interface ILeaderboard {
    name: string;
    Punteggio: string;
    PartiteGiocate: string;
    PartiteVinte: string;
    SetVinti: string;
    SetPersi: string;
    PuntiVinti: string;
    PuntiPersi: string;
}

export interface ILeaderboardDataRequest {
    _a: string | undefined;
    inizio_stagione: string;
    fine_stagione: string;
}

export interface IGroup {
    id: number;
    campionato_id: number;
    tipologia_id: number;
    name: string;
    note: string | undefined;
    deleted_at: string | undefined;
    created_at: string;
    updated_at: string;
    pubblicato: number;
    data_inizio_girone: string | undefined;
    data_fine_girone: string | undefined;
    TipoCompetizione: string | undefined;
    Campionato: string | undefined;
    Partite: string | undefined;
    azioni: string | undefined;
}

export interface IGroupDataRequest {
    territorio_id: string;
    campionato_id: string;
    return_all: number; // 1
    inizio_stagione: string;
    fine_stagione: string;
}
