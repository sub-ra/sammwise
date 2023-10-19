const securebuild = () => {
  return {
    'type': 'panel',
    'name': 'Sicheres Erstellen',
    'elements': [
      {
        'type': 'radiogroup',
        'id': '70d6044a223b402c8e2b6f9d1e936641',
        'title': 'Ist Ihr gesamter Build-Prozess formell beschrieben?',
        'titleLocation': 'left',
        'description': 'Sie verfügen über ausreichende Informationen, um die Build-Prozesse nachzuvollziehen',
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
        'id': 'b5d33583538b4878bb4674a5f838b8ea',
        'title': 'Ist der Build-Prozess vollständig automatisiert?',
        'titleLocation': 'left',
        'description': 'Der Build-Prozess selbst erfordert keine menschliche Interaktion',
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
        'id': 'ee775955bf7f48d294c75f6384232f48',
        'title': 'Erzwingen Sie automatisierte Sicherheitsprüfungen in Ihren Build-Prozessen?',
        'titleLocation': 'left',
        'description': 'Builds schlagen fehl, wenn die Anwendung nicht den vordefinierten Sicherheitsrichtlinien entspricht',
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
        'id': '1e28b82cc3ba4e4ea2552746e17c25af',
        'title': 'Haben Sie solides Wissen über die von Ihnen verwendeten Abhängigkeiten?',
        'titleLocation': 'left',
        'description': 'Sie haben eine aktuelle Materialliste (BOM) für jede Anwendung',
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
        'id': 'ef798e60155d453186364c94a8f8935d',
        'title': 'Behandeln Sie das Risiko von Abhängigkeiten von Drittanbietern durch einen formalen Prozess?',
        'titleLocation': 'left',
        'description': 'Sie führen eine Liste von genehmigten Abhängigkeiten, die vordefinierten Kriterien entsprechen',
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
        'id': '418e98e2939546e69a24d0c3c4c8d217',
        'title': 'Verhindern Sie den Build von Software, wenn sie von Schwachstellen in Abhängigkeiten betroffen ist?',
        'titleLocation': 'left',
        'description': 'Ihr Build-System ist mit einem System zur Verfolgung des Risikos von Abhängigkeiten von Drittanbietern verbunden, wodurch der Build fehlschlägt, es sei denn, die Schwachstelle wird als falsch positiv bewertet oder das Risiko wird ausdrücklich akzeptiert',
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
    'title': 'Sicheres Erstellen',
    'state': 'expanded'
  };
};
export default securebuild;