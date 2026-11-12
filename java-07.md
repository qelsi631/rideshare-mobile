# RideShare — Java 7 · Provo, korrigjo dhe shpjego

## Rasti im

Rasti 2 · Pa vende.

## Parashikimi

Kur udhëtimi i provës ka `0` vende të lira, detajet duhet të tregojnë se nuk ka vende dhe veprimi i kërkesës nuk duhet të premtojë rezervim. Faqja e kërkesës duhet ta shpjegojë qartë se gjendja është joaktive.

## Dy probleme ose paqartësi

1. Në faqen e kërkesës, kur udhëtimi kishte `0` vende, shfaqej vetëm titulli “Nuk ka vende të lira.” Nuk shpjegohej qartë se kërkesa ishte joaktive dhe se nuk premtonte rezervim.
2. Kartat e listës shfaqin nisjen, orën dhe vendet e lira, por nuk shfaqin vendtakimin. Përdoruesi duhet të hapë detajet për ta parë këtë informacion.

## Korrigjimi

Skedari: `aplikacioni/src/app/udhetimi/[id]/kerkesa/page.tsx`

Shtova tekstin “Kërkesa është joaktive dhe nuk premton rezervim.” në degën që trajton udhëtimet me `0` vende. Korrigjimi e bën kufizimin e simulimit të dukshëm dhe nuk krijon rezervim ose vend të ri.

## Provat

### Prova 1: Rrjedha e udhëtimit me vende

Hapat: Hap listën, zgjidh një udhëtim me vende të lira dhe ndiq të njëjtin ID te detajet dhe kërkesa.

Pritshmëria: Detajet duhet të kenë të njëjtin ID, orë dhe numër vendesh si karta; kërkesa duhet të jetë e shënuar si simulim dhe pa rezervim real.

Vëzhgimi: Plotësoje pas provës reale në shfletues.

### Prova 2: Udhëtimi pa vende

Hapat: Vendos `0` në kolonën `vende` për një udhëtim prove, rifresko listën dhe hap detajet.

Pritshmëria: Detajet duhet të shfaqin “Nuk ka vende të lira” dhe të mos ofrojnë veprim aktiv për kërkesë.

Vëzhgimi: Plotësoje pas provës reale në shfletues.

### Prova 3: Kërkesa për udhëtimin pa vende

Hapat: Hap adresën e kërkesës për të njëjtin ID me `0` vende, nëse adresa arrihet drejtpërdrejt.

Pritshmëria: Faqja duhet të shfaqë “Nuk ka vende të lira.” dhe “Kërkesa është joaktive dhe nuk premton rezervim.”

Vëzhgimi: Plotësoje pas provës reale në shfletues. Nëse kjo faqe nuk arrihet nga butoni i detajeve, shënoje si kufizim të provës.

## Ndryshimi i hyrjes

Hyrja e dytë është udhëtimi me `0` vende në vend të një udhëtimi me vende pozitive. Kjo teston degën e kushtit që çaktivizon kërkesën.

## Lidhjet e commit-eve

Para: Plotësoje me URL-në e commit-it para korrigjimit.

Pas: Plotësoje me URL-në e commit-it që përmban korrigjimin.

## Ndihma nga AI

Përdora AI për të lexuar kërkesat e Javës 7, për të identifikuar rrjedhën e faqes së kërkesës dhe për të sugjeruar një korrigjim të vogël për qartësinë e gjendjes pa vende. Kontrolli teknik i kodit u bë me `npm run lint`. Provat në shfletues, vëzhgimet dhe lidhjet e commit-eve duhet të plotësohen nga unë.
