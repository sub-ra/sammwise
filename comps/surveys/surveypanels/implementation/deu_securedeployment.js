const securedeployment = () => {
  return {
    'type': 'panel',
    'name': 'Sichere Bereitstellung',
    'elements': [
      {
        'type': 'radiogroup',
        'id': '24697d43707b4d83a6a5819a9db9a75d',
        'title': 'Verwenden Sie wiederholbare Bereitstellungsprozesse?',
        'titleLocation': 'left',
        'description': 'Sie verfügen über ausreichende Informationen, um die Bereitstellungsprozesse auszuführen',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, für einige Anwendungen'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, für mindestens die Hälfte der Anwendungen'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, für die meisten oder alle Anwendungen'
          }
        ]
      },
      {
        'type': 'radiogroup',
        'id': '7ef6753cda0d4da6ad194e56650f584d',
        'title': 'Sind Bereitstellungsprozesse automatisiert und beinhalten Sicherheitsprüfungen?',
        'titleLocation': 'left',
        'description': 'Bereitstellungsprozesse sind in allen Phasen automatisiert',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, für einige Anwendungen'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, für mindestens die Hälfte der Anwendungen'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, für die meisten oder alle Anwendungen'
          }
        ]
      },
      {
        'type': 'radiogroup',
        'id': 'f87fddbf283a4c38b45a3125d827dd27',
        'title': 'Validieren Sie konsequent die Integrität bereitgestellter Artefakte?',
        'titleLocation': 'left',
        'description': 'Sie verhindern oder rollen die Bereitstellung zurück, wenn Sie einen Integritätsverstoß feststellen',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, für einige Anwendungen'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, für mindestens die Hälfte der Anwendungen'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, für die meisten oder alle Anwendungen'
          }
        ]
      },
      {
        'type': 'radiogroup',
        'id': '37c6a5618a6344b386eb872619cfe53f',
        'title': 'Begrenzen Sie den Zugriff auf Anwendungsgeheimnisse nach dem Prinzip des geringsten Privilegs?',
        'titleLocation': 'left',
        'description': 'Sie speichern Produktionsgeheimnisse an einem sicheren Ort',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, für einige Anwendungen'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, für mindestens die Hälfte der Anwendungen'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, für die meisten oder alle Anwendungen'
          }
        ]
      },
      {
        'type': 'radiogroup',
        'id': 'c5f66e97db174d8c9dc2d82fbad9d4e3',
        'title': 'Injizieren Sie Produktionsgeheimnisse in Konfigurationsdateien während der Bereitstellung?',
        'titleLocation': 'left',
        'description': 'Quellcode-Dateien enthalten keine aktiven Anwendungsgeheimnisse mehr',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, für einige Anwendungen'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, für mindestens die Hälfte der Anwendungen'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, für die meisten oder alle Anwendungen'
          }
        ]
      },
      {
        'type': 'radiogroup',
        'id': '50af7a14ddf2408fb4576e3972cf13e3',
        'title': 'Praktizieren Sie eine ordnungsgemäße Lebenszyklusverwaltung für Anwendungsgeheimnisse?',
        'titleLocation': 'left',
        'description': 'Sie generieren und synchronisieren Geheimnisse mithilfe einer geprüften Lösung',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, für einige Anwendungen'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, für mindestens die Hälfte der Anwendungen'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, für die meisten oder alle Anwendungen'
          }
        ]
      }
    ],
    'title': 'Sichere Bereitstellung',
    'state': 'collapsed'
  };
};
export default securedeployment;