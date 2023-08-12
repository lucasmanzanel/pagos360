export interface Document {
    informed_date:      Date;
    request_id:         number;
    external_reference: string;
    payer_name:         PayerName;
    description:        string;
    payment_date:       Date;
    channel:            Channel;
    amount_paid:        number;
    net_fee:            number;
    iva_fee:            number;
    net_amount:         number;
    available_at:       Date;
}

export enum Channel {
    MastercardDebit = "Mastercard Debit",
}

export enum PayerName {
    FrancoAdrian = "Franco Adrian",
    IaraFryc = "Iara Fryc",
    LuisGandolfi = "Luis Gandolfi",
    Macerlo = "Macerlo",
    MauricioLinares = "Mauricio Linares",
}
