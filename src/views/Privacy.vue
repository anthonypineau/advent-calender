<template>
  <div class="flex flex-col items-center">
    <router-link to="/" class="btn btn-outline btn-primary mb-6 self-start">
      ← Zurück auf dem Kalender
    </router-link>

    <div class="max-w-3xl shadow-lg rounded-2xl p-6">
      <h1 class="text-2xl font-bold mb-4">
        Impressum und Datenschutzerklärung
      </h1>

      <h2 class="text-xl font-semibold mt-4">
        Angaben gemäß § 5 TMG (Impressum)
      </h2>
      <p>
        Name der Website: Interaktiver Adventskalender <br />
        Projektarbeit erstellt im Rahmen der Schule: 🧑‍🏫
        Heinrich-von-Trebra-Grundschule Marienberg <br />
        Betreuer / Entwickler: Anthony Pineau <br />
        E-Mail: (bitte eintragen) <br />
        Anschrift: Grundschule "Heinrich von Trebra" Silberallee 22 09496
        Marienberg <br />
        Hosting-Anbieter: GitHub, Inc., 88 Colin P. Kelly Jr. Street, San
        Francisco, CA 94107, USA –
        <a
          href="https://pages.github.com"
          target="_blank"
          rel="noopener noreferrer"
          >https://pages.github.com</a
        >
      </p>

      <h2 class="text-xl font-semibold mt-4">Zweck der Website</h2>
      <p>
        Diese Website bietet einen interaktiven Adventskalender, bei dem Nutzer
        täglich ein Türchen öffnen können. <br />
        Für die Nutzung der Website ist keine Registrierung erforderlich.
      </p>

      <h2 class="text-xl font-semibold mt-4">
        Verarbeitung personenbezogener Daten
      </h2>
      <p>
        Diese Website erfasst, speichert und verarbeitet keine personenbezogenen
        Daten (wie Name, E-Mail-Adresse, IP-Adresse usw.). <br />
        Es werden keine Daten an Dritte weitergegeben.
      </p>

      <h2 class="text-xl font-semibold mt-4">
        Cookies und lokaler Speicher (Local Storage)
      </h2>
      <h3 class="text-l font-semibold mt-2">Zweck</h3>
      <p>
        Die Website verwendet ausschließlich technisch notwendige Cookies bzw.
        den Local Storage, um zu speichern, welche Türchen im Adventskalender
        bereits geöffnet wurden. <br />
        Diese Informationen dienen nur der einwandfreien Funktion der Website
        und ermöglichen eine personalisierte Nutzung (damit geöffnete Türchen
        offen bleiben).
      </p>
      <h3 class="text-l font-semibold mt-2">Art und Speicherdauer</h3>
      <ul>
        <li>Name des Cookies/Local Storage Elements: openedCases</li>
        <li>
          Inhalt: Nummern der geöffneten Türchen (z. B. {1:true, 2:false})
        </li>
        <li>
          Speicherdauer: Bis zum Ende der Adventszeit oder bis der Nutzer die
          Daten in seinem Browser löscht.
        </li>
      </ul>
      <h3 class="text-l font-semibold mt-2">Einwilligung</h3>
      <p>
        Gemäß Art. 6 Abs. 1 lit. b DSGVO sowie den Richtlinien der
        Datenschutzkonferenz (DSK) ist keine Einwilligung erforderlich, da es
        sich um einen technisch notwendigen Speichermechanismus handelt. <br />
        Es werden keine Analyse-, Tracking- oder Werbecookies verwendet.
      </p>

      <h2 class="text-xl font-semibold mt-4">Rechte der Nutzer:innen</h2>
      <p>
        Gemäß der Datenschutz-Grundverordnung (DSGVO) haben Sie das Recht auf
        Auskunft, Berichtigung und Löschung personenbezogener Daten. <br />
        Da diese Website jedoch keine personenbezogenen Daten verarbeitet,
        finden diese Rechte hier keine Anwendung.
      </p>

      <h2 class="text-xl font-semibold mt-4">
        Sicherheit und Datenspeicherung
      </h2>
      <p>
        Es werden keine Daten an den Server gesendet. <br />
        Alle gespeicherten Informationen verbleiben lokal im Browser des Nutzers
        und können jederzeit über die Browsereinstellungen gelöscht werden.
      </p>

      <h2 class="text-xl font-semibold mt-4">Kontakt</h2>
      <p>
        Bei Fragen zum Datenschutz oder zu dieser Website wenden Sie sich bitte
        an:
        <a href="mailto:anthonypineau@outlook.de">anthonypineau@outlook.de</a>
      </p>

      <h2 class="text-xl font-semibold mt-4">
        Haftungsausschluss (Disclaimer)
      </h2>
      <p>
        Der Betreiber dieser Website übernimmt keine Haftung für externe Links.
        <br />
        Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber
        verantwortlich.
      </p>
    </div>
  </div>
</template>
