# Krav

## För G så ska följande krav uppfyllas:

    - [x] Webbanrop görs information från en eller flera webbtjänster visas i webbapplikationen (Undvik CORS-problem och använd helst HTTPS, för applikationen ska fungera bra som publicerad; Visa åtminstone tio värden; Använd inte Cities-tjänsten eller någon annan webbtjänst som har tagits upp som ett exempel)
    - [x] Textinterpolering ({{ och }}) används
    - [x] Attributinterpolering (v-bind eller dess kortform) används (key-props (relaterade till v-for) räknas inte)
    - [x] Villkorlig rendering (v-if) används
    - [x] Listrendering (v-for) används
    - [x] Händelser (v-on eller dess kortform) används
    - [ ] v-model (och värdet som matas in) används
    - [x] En Single Page Application, bestående av minst två webbsidor, ska skapas med Vue Router (Använd både router-link och router-view)
    - [x] Minst en icke-Vue-Router-.vue-komponent (alltså en komponent som inte är en “view”) ska skapas (App.vue räknas inte)
    - [x] Minst en komponent ska ta emot, och använda, minst en prop (via props-nyckeln)

## För VG ska kraven för G vara uppfyllda. Dessutom ska följande krav uppfyllas:

    - [x] Använd någonting annat än fetch (till exempel Axios) för att göra webbanrop
    - [x] Minst en beräknad egenskap (computed) används
    - [ ] Minst en bevakare (watch) används
    - [x] Alla props ska vara typsäkra
    - [ ] Minst ett custom event används (skickas och tas emot)
    - [x] Använd minst ett Vue Router-adressparametervärde
