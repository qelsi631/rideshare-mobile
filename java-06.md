# RideShare — Java 6 · PWA dhe puna offline

## Çfarë ndërtova
Manifesti në `aplikacioni/src/app/manifest.ts` i jep aplikacionit emrin RideShare AAB, pamjen standalone, adresën e nisjes dhe ikonat publike 192x192 dhe 512x512. Service worker-i në `aplikacioni/public/sw.js` ruan vetëm faqen `offline.html`, ikonat dhe përgjigjen publike të listës së udhëtimeve. Kur serveri nuk arrihet, ai lexon kopjen e fundit; faqet private, hyrja dhe kërkesat POST nuk ruhen. Faqja `offline.html` i shfaq udhëtimet vetëm për lexim, pa profile, email ose rezervime.

## Provat që bëra
### Prova 1: Manifesti dhe vizita online
U verifikua rruga `/manifest.webmanifest` përmes build-it të Next.js, i cili e raportoi si route statike. Manifesti ka emrin `RideShare AAB`; `icon-192.png` është 192x192 dhe `icon-512.png` është 512x512. U verifikua gjithashtu se skedari `offline.html` dhe service worker-i përdorin adresat e sakta të ikonave. Nuk u krye një instalim real nga shfletuesi në këtë provë, prandaj nuk mund të konfirmoj nëse shfletuesi ofroi instalim ose nëse lista u ruajt gjatë një vizite reale.

### Prova 2: Pa internet dhe pas rifreskimit
Nuk u krye ende simulim real i ndërprerjes së internetit në shfletues, ndaj nuk mund të deklaroj se u shfaqën tri karta ose të jap një kohë ruajtjeje të parë. Sipas kodit, service worker-i përdor përgjigjen e fundit të ruajtur dhe `offline.html` shfaq kohën nga header-i `x-rideshare-saved-at`, si dhe mesazhin se lista mund të jetë e vjetruar. Pamja nuk konfirmon rezervim sepse butoni `Kërko vend` është i çaktivizuar dhe faqja është vetëm lexuese.

### Prova 3: Lidhja rikthehet
Nuk u ndryshua dhe nuk u mat ora e udhëtimit me ID 2 në Neon gjatë kësaj pune. Prandaj nuk ka orë të vjetër ose të re për t'u raportuar dhe nuk u bë rikthim në databazë. Sjellja e parashikuar është që offline të shfaqet kopja e fundit e ruajtur, ndërsa pas `Rifresko listën`, kur lidhja rikthehet, kërkohet lista e re nga serveri dhe kopja përditësohet.

## Ku gjendet puna
Repository lokal: `rideshare-mobile/aplikacioni/`. Skedarët e shtuar ose të përditësuar janë `aplikacioni/src/app/manifest.ts`, `aplikacioni/src/app/api/udhetimet/route.ts`, `aplikacioni/public/sw.js`, `aplikacioni/public/offline.html`, `aplikacioni/src/components/Pwa.tsx` dhe `aplikacioni/src/app/layout.tsx`. Nuk u dha një link publik repository-je ose Vercel dhe nuk u publikua demo gjatë kësaj pune.

## Çfarë mbetet për përmirësim
Në vizitën e parë pa kopje, service worker-i nuk mund të marrë listën nga serveri dhe API-ja kthen `503` me `{"error":"no_snapshot"}`; faqja shfaq se ende nuk ka listë të ruajtur dhe kërkon hapjen e aplikacionit me internet. Kufizimi kryesor është se offline ruan vetëm një kopje publike për lexim. Ajo mund të jetë e vjetruar, nuk përmban të dhëna private dhe nuk lejon rezervime ose konfirmime pa lidhje me serverin.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
Përdora AI për të krijuar dhe lidhur manifestin, endpoint-in publik, service worker-in, faqen `offline.html` dhe komponentin React `Pwa`. Provova vetë lint-in dhe kontrollin TypeScript; të dyja kaluan. Kontrollova gjithashtu përmasat e ikonave dhe sintaksën JavaScript të service worker-it dhe faqes offline. Build-i u tentua, por në Windows/OneDrive dështoi me `EPERM` gjatë fshirjes së një skedari në `.next/static`, jo për shkak të gabimeve të kodit.
