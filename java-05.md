# RideShare — Java 5 · Hyrja dhe lejet

## Çfarë ndërtova

Ndërtova hyrjen me GitHub dhe panelin për përdoruesit e aplikacionit RideShare.

Identiteti tregon se cili përdorues është kyçur në aplikacion, përmes ID-së së tij në GitHub. Roli tregon se çfarë lejohet të bëjë përdoruesi, për shembull të jetë shofer ose udhëtar. Pronësia tregon se kujt i takon një udhëtim. Serveri e kontrollon pronësinë para se ta lejojë ndryshimin e orës.

## Provat që bëra

### Prova 1: Hyrja, rifreskimi dhe dalja

Hapa panelin `/panel` dhe u kyça me GitHub. Pas hyrjes, paneli shfaqi përshëndetjen, rolin tim si shofer dhe ID-në time në GitHub. Pas rifreskimit, paneli vazhdoi ta shfaqte përdoruesin e kyçur. Pas daljes, duhet të kontrollohet që paneli kërkon përsëri hyrje dhe nuk lejon qasje pa sesion aktiv.

### Prova 2: Shoferi ndryshon udhëtimin e vet

Si shofer i udhëtimit me ID 2, e ndryshova orën nga 08:15 në 08:25 përmes panelit. Paneli shfaqi mesazhin se ora u ruajt me sukses. Pastaj kontrollova listën e udhëtimeve dhe faqen e detajeve, ku u shfaq ora e re.

Në Neon SQL Editor verifikova se udhëtimi me ID 2 kishte orën 08:25 dhe ID-në time si shofer. Pas testimit, e riktheva orën në 08:15 dhe e kontrollova përsëri në databazë.

### Prova 3: Veprimi pa leje refuzohet

Nga formulari i panelit hapa Inspect dhe ndryshova përkohësisht ID-në e udhëtimit nga 2 në 1. Kur klikova “Ruaj orën”, sistemi shfaqi mesazhin:

“Nuk ke leje për këtë udhëtim. Ora nuk ndryshoi.”

Në Neon SQL Editor ekzekutova një pyetje për t'i kontrolluar udhëtimet me ID 1 dhe 2. Rezultati tregoi se ID 1 kishte mbetur në orën 08:00, me `shofer_id` `DEMO-SHOFER-2`, ndërsa ID 2 ishte në orën 08:15, me `shofer_id` `267811449`. Kjo konfirmoi se serveri e refuzoi ndryshimin e udhëtimit që nuk ishte në pronësinë time.

## Ku gjendet puna

Repository: https://github.com/drenshala17/rideshare-mobile

Skedarët e rinj dhe ndryshimet për Java 5 gjenden në dosjen `aplikacioni/`, përfshirë konfigurimin e autentifikimit, logjikën e panelit dhe skedarin `schema-java05.sql`.

Demo në Vercel: https://rideshare-mobile-tojj-oyy9ue9ax-drenshala.vercel.app/

## Çfarë mbetet për përmirësim

Kërkesa për vend në këtë version është ende simulim. Në një version të ardhshëm do të shtoja ruajtjen reale të kërkesave në databazë, kontrollin e vendeve të lira dhe njoftimin e shoferit kur një udhëtar dërgon kërkesë.

## Ndihma nga AI (Artificial Intelligence – inteligjencë artificiale)

Përdora inteligjencën artificiale për udhëzime gjatë konfigurimit të autentifikimit me GitHub, krijimit të tabelave në databazë dhe testimit të lejeve. Vetë i ekzekutova pyetjet SQL, testova ndryshimin e orës në panel dhe verifikova se sistemi e refuzonte ndryshimin e një udhëtimi që nuk ishte në pronësinë time.
