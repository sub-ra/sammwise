const incman = () => {
  return {
    "type": "panel",
    "name": "Incident Management",
    "elements": [
      {
        "type": "radiogroup",
        "id": "1e005e11997f4929a12fdb939599e77e",
        "title": "Analysieren Sie regelmäßig Logdaten auf Sicherheitsvorfälle?",
        "titleLocation": "left",
        "description": "Sie haben einen Ansprechpartner für die Erstellung von Sicherheitsvorfällen",
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
        "id": "13b9816c06444ba99584e657bfa5833d",
        "title": "Folgen Sie einem dokumentierten Prozess zur Erkennung von Vorfällen?",
        "titleLocation": "left",
        "description": "Der Prozess hat einen dedizierten Verantwortlichen",
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
        "id": "09744a244f8d4076bec35130da92ea2b",
        "title": "Überprüfen und aktualisieren Sie regelmäßig den Prozess zur Erkennung von Vorfällen?",
        "titleLocation": "left",
        "description": "Sie führen mindestens einmal jährlich Überprüfungen durch",
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
        "id": "0d889a913d484eb39b80f096f3a66019",
        "title": "Reagieren Sie auf erkannte Vorfälle?",
        "titleLocation": "left",
        "description": "Sie haben eine definierte Person oder Rolle für die Bearbeitung von Vorfällen",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Nein"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Ja, für einige Vorfälle"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Ja, für mindestens die Hälfte der Vorfälle"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Ja, für die meisten oder alle Vorfälle"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "dbb83b0d5b504db6a170710df4df347f",
        "title": "Verwenden Sie einen wiederholbaren Prozess zur Bearbeitung von Vorfällen?",
        "titleLocation": "left",
        "description": "Sie haben eine vereinbarte Einstufung von Vorfällen",
        "choices": [
          {
            "value": 0,
            "weight": 1,
            "text": "Nein"
          },
          {
            "value": 0.25,
            "weight": 1,
            "text": "Ja, für einige Arten von Vorfällen"
          },
          {
            "value": 0.5,
            "weight": 1,
            "text": "Ja, für mindestens die Hälfte der Arten von Vorfällen"
          },
          {
            "value": 1,
            "weight": 1,
            "text": "Ja, für die meisten oder alle Arten von Vorfällen"
          }
        ]
      },
      {
        "type": "radiogroup",
        "id": "91bd2bdc1c734d8dbffc30e37158ab00",
        "title": "Haben Sie ein dediziertes Incident-Response-Team verfügbar?",
        "titleLocation": "left",
        "description": "Das Team führt Root-Cause-Analysen für alle Sicherheitsvorfälle durch, es sei denn, es gibt einen spezifischen Grund, dies nicht zu tun",
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
            "text": "Ja, die meiste oder die gesamte Zeit"
          }
        ]
      }
    ],
    "title": "Incident Management",
    "state": "expanded"
  };
}

export default incman;
