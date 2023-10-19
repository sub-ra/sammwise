const reqtest = () => {
  return {
    "type": "panel",
    "name": "Anforderungsgetriebenes Testen",
    "elements": [
      {
        "type": "radiogroup",
        "id": "cb085e0a25724700bc10c73cfcc8f6a5",
        "title": "Testen Sie Anwendungen auf die korrekte Funktionsweise von Standard-Sicherheitskontrollen?",
        "titleLocation": "left",
        "description": "Sicherheitstests überprüfen mindestens die Implementierung von Authentifizierung, Zugriffskontrolle, Eingabevalidierung, Codierung und Escape von Daten sowie Verschlüsselungskontrollen",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Nein"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Ja, einige davon"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Ja, mindestens die Hälfte davon"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Ja, die meisten oder alle davon"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "d6b26a63243d4142bd2a8317e2875a03",
        "title": "Schreiben und führen Sie konsequent Testskripte aus, um die Funktionalität von Sicherheitsanforderungen zu überprüfen?",
        "titleLocation": "left",
        "description": "Sie passen Tests an jede Anwendung an und überprüfen die erwartete Sicherheitsfunktionalität",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Nein"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Ja, einige davon"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Ja, mindestens die Hälfte davon"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Ja, die meisten oder alle davon"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "35413be30d9f415dbde45edbe3b17f31",
        "title": "Testen Sie Anwendungen automatisch auf Sicherheitsregressionen?",
        "titleLocation": "left",
        "description": "Sie schreiben konsequent Tests für alle identifizierten Fehler (möglicherweise über einem vordefinierten Schweregrad-Schwellenwert)",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Nein"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Ja, für einige Anwendungen"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Ja, für mindestens die Hälfte der Anwendungen"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Ja, für die meisten oder alle Anwendungen"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "749893a53df24c32bc887b6d5f7b3f7b",
        "title": "Testen Sie Anwendungen mithilfe von Zufalls- oder Fuzzing-Techniken?",
        "titleLocation": "left",
        "description": "Tests decken die meisten oder alle Haupteingabeparameter der Anwendung ab",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Nein"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Ja, für einige Anwendungen"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Ja, für mindestens die Hälfte der Anwendungen"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Ja, für die meisten oder alle Anwendungen"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "b2afb33fe6ef4b6e90e029059f7a7124",
        "title": "Erstellen Sie Missbrauchsfälle aus funktionalen Anforderungen und verwenden Sie sie, um Sicherheitstests durchzuführen?",
        "titleLocation": "left",
        "description": "Wichtige Geschäftsfunktionalitäten haben entsprechende Missbrauchsfälle",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Nein"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Ja, manchmal"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Ja, mindestens die Hälfte der Zeit"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Ja, die meiste oder alle Zeit"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "814caca2fc5241dcb90c48302ac031b2",
        "title": "Führen Sie Denial-of-Service- und Sicherheits-Stresstests durch?",
        "titleLocation": "left",
        "description": "Stresstests richten sich auf spezifische Anwendungsressourcen (z. B. Erschöpfung des Speichers durch das Speichern großer Datenmengen in einer Benutzersitzung)",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Nein"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Ja, manchmal"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Ja, mindestens die Hälfte der Zeit"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Ja, die meiste oder alle Zeit"
          }
        ]
      }
    ],
    "title": "Anforderungsgetriebenes Testen",
    "state": "collapsed"
  };
};

export default reqtest;
