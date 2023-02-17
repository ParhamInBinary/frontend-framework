# Frontend ramverk

Inspirerad ifrån [stateofjs](https://stateofjs.com) där du som student väljer ett av de listade ramverken och skapar en enklare variant av sidan med det valda ramverket.

![Example](https://user-images.githubusercontent.com/17639389/210244688-34d58e7d-1c6c-4c43-a3ec-e01f89dd7abd.jpg)

## Uppgiftsbeskrivning

Utöver att en bygga en hemsida utifrån bilden ovan i det valda ramverket ska du också ska skriva en rapport och hålla en muntlig presentation om ramverket. Den muntliga presentationen skall hållas med hjälp av en powerpoint/keynote och vara ca 5-10 minuter lång.

Rapporten skall ha ca två A4 sidor brödtext och innehålla en referenslista med minst tre referenser till informationskällor på webben. Varje skrivet stycke i texten skall referera till minst en av dina referenser i referenslistan. Rapporten skall ha en relevant titel samt vara uppdelad i olika stycken, tex: Inledning, Bakgrund, Användning, Diskussion, Framtid. Ungefär 2/3 av rapporten ska beskriva ramverket med referenser medan 1/3 av rapporten är reflektion/egna tankar.

Du ska i din rapport och presentation beskriva ramverket, hur det används, vem som har skapat det, mm. Du ska även diskutera för- och nackdelar för när det är lämpligt att använda sig av det och hur det förhåller sig till React. Både den muntliga och skriftliga inlämning skall innehålla kodexempel från ditt egna kodprojekt med syftet att enklare förmedla innehållet i din text.


## Installation & Utveckling

1. Öppna projektet i VS Code.
2. Kör `npm i` i terminalen.
3. Kör `npm run dev` och starta browsern med alternativet `"o"` i ternimalen för att öppna projektet i webbläsaren.
4. Kör `npm test` i terminalen för att starta cypress och jämföra kraven för uppgiften.

### Lista av data-cy som ska finnas i koden

- `data-cy="chart-header"` övre delen av diagrammet som visar åren (2016-2022).
- `data-cy="chart-row"` varje rad i diagrammet som representerar ett ramverk.
- `data-cy="chart-cell"` varje cell i varje rad, gäller även tomma celler.
- `data-cy="chart-circle"` värdet som visas i en cell - en färgad cirkel med en procentsats.
- `data-cy="row-line"` den färgade linjen som går igenom varje rad.

## Inlämning

Kodprojektet ska zippas ihop och lämnas in på läroplattformen. Rapporten och presentationen ska exporteras till PDF och också lämnas in, dock separat från det zippade kodprojektet.

**Inlämningen skall alltså bestå av en zippad mapp och två PDF'er.**

### Krav för Godkänt

- [x] Uppgiften har lämnats in i tid (Kod, Rapport, Presentation).
- [x] Rapporten följer uppgiftsbeskrivningen ovan.
- [x] Readmefilen har uppdaterats enligt beskrivning ovan.
- [ ] Projektet här hostat på Netlify och går att nå via en demolänk i readme filen.
- [x] Git och GitHub har använts.
- [x] Sidan innehåller en header, footer och main.
- [x] Sidan är responsiv.
- [x] Sidan visar "retention" informationen som finns i [data filen](./data/index.js) i enlighet med bilden ovan.

_Gjorda krav ska kryssas för._

### Krav för Väl Godkänt

- [x] Sidan använder klient-routing för att gå till /retention när användaren besöker startsidan.
- [x] Sidan använder klient-routing för att gå till /retention när användaren klickar på länken i footern.
- [x] Sidan använder klient-routing för att gå till /interest när användaren klickar på länken i footern.
- [x] Sidan använder klient-routing för att gå till /usage när användaren klickar på länken i footern.
- [x] Sidan använder klient-routing för att gå till /awareness när användaren klickar på länken i footern.

_Gjorda krav ska kryssas för._
