const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
};
const base_url = " https://v6.exchangerate-api.com/v6/18cf23b9759c4a0ca771be18/latest/USD"
const api_key = "18cf23b9759c4a0ca771be18"
let dropdown = document.querySelectorAll(".dropdown select");
let btn = document.querySelector("#get");
let fromCurr = document.querySelector(".from select").value;
let toCurr = document.querySelector(".to select").value;
let conver = document.querySelector("#Converted");

for (const select of dropdown) {
    for (const curr in countryList) {
        let newoption = document.createElement("option");
        newoption.innerHTML = curr;
        newoption.value = curr;
        if (select.name === "from" && curr == "USD") {
            newoption.selected = "selected"
        } else if (select.name === "to" && curr === "INR") {
            newoption.selected = "selected"
        }
        select.append(newoption);
        select.addEventListener("change", (evt) => {
            updateflag(evt.target);
        });
    }
}
const updateflag = (element) => {
    let currcode = element.value
    console.log(currcode);
    let countrycode = countryList[currcode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
}
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amt = amount.value;
    if (!amt || isNaN(amt) || amt <= 0) {
        alert("Please enter a valid amount.");
        return;
    }
    fromCurr = String(fromCurr).toUpperCase();  // Ensure upper case format
    toCurr = String(toCurr).toUpperCase();      // Ensure upper case format

    // if (!isCurrencyValid(fromCurr) || !isCurrencyValid(toCurr)) {
    //     console.error("Invalid currency code detected!");
    //     return;
    // }
    const url = `${base_url}/${fromCurr}`;
    // console.log(url);

    // let response = await fetch(url);
    // let data = await response.json();
    // console.log('API Response:', data);  // Log the full API response

    let response = await fetch(url);

    // if (!response.ok) {
    //     throw new Error(`HTTP ERROR:${response.status}`)
    // }

    let data = await response.json();
    // console.log(data);


    // if (!data.conversion_rates[toCurr]) {
    //     throw new Error(`Invalid currency ${toCurr}`)
    // }
    let exchangerate=data.conversion_rates[toCurr]
    console.log(exchangerate);
    

    // try {

    //     let response = await fetch(url);

    //     if (!response.ok) {
    //         throw new Error(`HTTP ERROR:${response.status}`)
    //     }

    //     let data = await response.json();
    //     console.log(data);


    //     if (!data.conversion_rates[toCurr]) {
    //         throw new Error(`Invalid currency ${toCurr}`)
    //     }
    //     let exchangerate=data.conversion_rates[toCurr]
    //     let convertedamt=(amt*exchangerate).toFixed(2);
    //     conver.value=convertedamt;
    // } catch (error) {
    //     console.error("Error while fetching Exchange rates:",error.message);
    //     alert("Failed to fetch exchange rate. Please try again.")
    // }
})
