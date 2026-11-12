# RideShare — Java 9 · Udhëtimet e preferuara

## Çfarë ndërtova

Shtova ruajtjen e udhëtimit të preferuar për përdoruesin e kyçur. Te faqja e detajeve, Arta mund të klikojë “☆ Ruaj udhëtimin”. Pamja ndryshon menjëherë në “★ Po ruhet…”, ndërsa serveri ruan çiftin përdorues–udhëtim në Neon. Pas suksesit shfaqet “★ I ruajtur” dhe preferimi lexohet përsëri pas rifreskimit.

Tabela `preferimet` përdor kufizimin `preferimet_nje_perdorues_nje_udhetim`, prandaj klikimet e përsëritura nuk krijojnë kopje. Ruajtja e preferimit nuk krijon rezervim.

## Skedarët kryesorë

- `aplikacioni/schema-java09.sql`
- `aplikacioni/src/lib/preferimet.ts`
- `aplikacioni/src/app/api/preferimet/route.ts`
- `aplikacioni/src/components/PreferimiUdhetimit.tsx`
- `aplikacioni/src/app/udhetimi/[id]/page.tsx`

## Provat që bëra

### Prova 1: Serveri konfirmon dhe preferimi mbetet

Hapat: U kyça si Arta, hapa udhëtimin me ID 2, klikova “Ruaj udhëtimin”, prita përgjigjen dhe rifreskova faqen.

Pritshmëria: Pamja kalon nga “Po ruhet…” në “I ruajtur”; pas rifreskimit preferimi mbetet i ruajtur. Në Neon duhet të ekzistojë një rresht për përdoruesin dhe udhëtimin.

Vëzhgimi: Plotësoje me rezultatin real dhe me pyetjen SQL të përdorur.

### Prova 2: Ruajtja refuzohet

Hapat: Nisa nga një udhëtim i paruajtur dhe shkaktova një gabim të kontrolluar në ruajtjen e serverit.

Pritshmëria: Pamja optimiste kthehet në yll bosh dhe shfaqet “Nuk u ruajt. Provo përsëri.”

Vëzhgimi: Plotësoje me mënyrën e provës dhe rezultatin real.

### Prova 3: Përsëritja nuk krijon kopje

Hapat: Klikova disa herë shpejt gjatë pritjes dhe pastaj rifreskova faqen.

Pritshmëria: Butoni nuk nis ruajtje të tjera gjatë pritjes dhe Neon ka vetëm një rresht për çiftin përdorues–udhëtim.

Vëzhgimi: Plotësoje me numrin real të rreshtave në Neon.

## Kontrolli në Neon

```sql
SELECT github_id, udhetim_id, krijuar_me
FROM preferimet
ORDER BY krijuar_me DESC;

SELECT github_id, udhetim_id, COUNT(*) AS kopje
FROM preferimet
GROUP BY github_id, udhetim_id
HAVING COUNT(*) > 1;
```

Pyetja e dytë duhet të kthejë zero rreshta.

## Çfarë mbetet për përmirësim

Heqja e preferimit është zgjerim opsional dhe nuk është implementuar këtë javë. Preferimi është personal dhe nuk dërgohet te shoferi.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)

Përdora AI për të analizuar kërkesat e Java 9, për të kontrolluar strukturën e migrimit dhe për të lidhur session ID me ruajtjen e preferimit. Vetë duhet të kryej provat reale në shfletues dhe të kontrolloj rreshtat në Neon.
