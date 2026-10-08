# RideShare — Java 3

Ruaje këtë skedar si `java-03.md` pranë README në repository-n tënd, jashtë dosjes `aplikacioni/`. Mos shto `.txt` pas emrit. Zëvendëso të gjitha shenjat e plotësimit me atë që ndodhi vërtet. Mjafton një fjali e qartë për çdo provë, por trego çfarë prite dhe çfarë pe.

## Çfarë ndërtova
Përfundova listën me tri udhëtime, faqen e detajeve për çdo udhëtim, ekranin e kërkesës së simuluar në pritje dhe faqen 404 kur ID-ja nuk ekziston.

## Provat që bëra
### Prova 1: Lista në telefon
Hapa faqen kryesore; prisja tri karta pa lëvizje anash dhe pashë tri udhëtime me orën, nisjen, destinacionin, vendtakimin dhe vendet e lira.

### Prova 2: Detajet e udhëtimit të dytë
Klikova kartën 2; u hap adresa /udhetimi/2 dhe pashë nisjen Fushë Kosovë, destinacionin AAB, orën 08:15 dhe vendtakimin Te stacioni kryesor.
Te karta 3 u shfaqën zero vende dhe veprimi për kërkesë nuk ishte i disponueshëm; te /udhetimi/99 pashë mesazhin “Udhëtimi nuk u gjet” dhe lidhjen për kthim te lista.

### Prova 3: Kërkesa në pritje
Klikova Kërko vend te udhëtimi 2; prisja “Simulim: Në pritje”, pa rezervim real, dhe pashë ekranin e pritjes me sqarimin se kërkesa nuk i dërgohet shoferit. U ktheva me sukses te detajet dhe lista.

## Çfarë do të përmirësoj
Javën tjetër do të shtoj ruajtjen reale të kërkesës dhe konfirmimin nga shoferi; tani rrjedha është vetëm demonstrim.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)
AI më ndihmoi të krijoj strukturën e Next.js, komponentin e kartës dhe rrugët e App Router-it. Vetë kontrollova build-in, listën në shfletues, kërkesën në pritje dhe adresën 404.
