# RideShare — Java 8

## Çfarë ndërtova

Shtova komponentin `aplikacioni/src/components/ZgjedhVendtakimin.tsx` për zgjedhjen lokale të vendtakimit. Arta mund të shkruajë një vendtakim dhe ta konfirmojë, ose të kërkojë vendndodhjen vetëm pasi klikon butonin. Koordinatat nuk shfaqen dhe vendtakimi nuk dërgohet te shoferi.

Komponenti përdoret te `aplikacioni/src/app/udhetimi/[id]/page.tsx` dhe te faqja e pavarur e testimit `aplikacioni/src/app/java-08-test/page.tsx`.

## Provat që bëra

### Prova 1: Leja nuk kërkohet sapo hapet faqja

Hapat: Hapa `/java-08-test` pa klikuar butonin e vendndodhjes.

Pritshmëria: Shfaqet faqja dhe gjendja fillestare është `idle`; shfletuesi nuk kërkon leje.

Vëzhgimi: Plotësoje pas provës në shfletues.

### Prova 2: Konfirmimi i një vendtakimi manual

Hapat: Shkrova `Biblioteka` dhe klikova “Konfirmo në telefon”.

Pritshmëria: Shfaqet “Vendtakimi i konfirmuar: Biblioteka”.

Vëzhgimi: Plotësoje pas provës në shfletues.

### Prova 3: Ndryshimi pa konfirmim nuk ruhet

Hapat: Ndryshova fushën në `Parkingu`, por nuk klikova konfirmimin.

Pritshmëria: Vendtakimi i konfirmuar mbetet `Biblioteka`.

Vëzhgimi: Plotësoje pas provës në shfletues.

### Prova 4: Tekst vetëm me hapësira

Hapat: Vendosa vetëm hapësira në fushë dhe klikova “Konfirmo në telefon”.

Pritshmëria: Shfaqet gabimi dhe zgjedhja e mëparshme mbetet e pandryshuar.

Vëzhgimi: Plotësoje pas provës në shfletues.

### Prova 5: Pranimi i vendndodhjes

Hapat: Klikova “Përdor vendndodhjen time” dhe lejova lejen në mjedisin e testimit.

Pritshmëria: Gjendja bëhet `success`, vendtakimi mbushet me “Biblioteka” dhe shfaqet saktësia e simuluar `37 m`.

Vëzhgimi: Plotësoje pas provës në shfletues ose në testin automatik.

### Prova 6: Refuzimi i lejes

Hapat: Klikova butonin e vendndodhjes dhe refuzova lejen.

Pritshmëria: Gjendja bëhet `denied` dhe fusha manuale mbetet e përdorshme.

Vëzhgimi: Plotësoje pas provës në shfletues ose në testin automatik.

### Prova 7: Skadimi i leximit

Hapat: Prova u ekzekutua me gabimin e geolocation code `3`.

Pritshmëria: Gjendja bëhet `timeout` dhe shfaqet alternativa manuale.

Vëzhgimi: Plotësoje pas provës në testin automatik.

### Prova 8: Mungesa e mbështetjes

Hapat: Prova u ekzekutua në një mjedis pa `navigator.geolocation`.

Pritshmëria: Gjendja bëhet `unavailable` dhe përdoruesi mund ta shkruajë vendtakimin vetë.

Vëzhgimi: Plotësoje pas provës në testin automatik.

## Ku gjendet puna

- Komponenti: `aplikacioni/src/components/ZgjedhVendtakimin.tsx`
- Integrimi real: `aplikacioni/src/app/udhetimi/[id]/page.tsx`
- Faqja e provës: `aplikacioni/src/app/java-08-test/page.tsx`
- Konfigurimi i testit: `mobile-week08.json`

## Çfarë mbetet për përmirësim

Vendtakimi është ende zgjedhje lokale dhe nuk ruhet në databazë ose nuk dërgohet te shoferi. Hapi tjetër do të ishte ruajtja dhe dërgimi i kërkesës me kontrollin e lejeve.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)

Përdora AI për të lexuar kërkesat e Javës 8 dhe për të strukturuar komponentin klient për input-in, konfirmimin dhe geolocation API. Vetë duhet të provoj rrjedhat në shfletues dhe të kontrolloj rezultatet e testimit automatik.

## Prova me një hyrje të re

- Hyrja që provova: Plotësoje pas provës me tekst vetëm me hapësira ose ndryshim pa konfirmim.
- Parashikimi im para klikimit: Zgjedhja e fundit e konfirmuar nuk duhet të ndryshojë.
- Çfarë pashë realisht: Plotësoje pas provës.
- Skedari dhe funksioni që e shpjegojnë: `aplikacioni/src/components/ZgjedhVendtakimin.tsx`, funksionet `confirmMeeting` dhe `locateMeeting`.
- Çfarë kuptova ose korrigjova: Plotësoje pas provës.
