const strategy = () => {
  return {
    'type': 'panel',
    'name': 'Strategie und Kennzahlen',
    'elements': [
      {
        name: 'Frage1',
        'type': 'radiogroup',
        'id': '64f49a28334e4a40a04e534225a941d2',
        'title': 'Verstehen Sie den unternehmensweiten Risikoappetit für Ihre Anwendungen?',
        'titleLocation': 'left',
        'description': 'Sie erfassen den Risikoappetit der Führungsebene Ihrer Organisation',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, es deckt allgemeine Risiken ab'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, es deckt organisations-spezifische Risiken ab'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, es deckt Risiken und Chancen ab'
          }
        ]
      },
      {
        'type': 'radiogroup',
        'id': '8fd0374f0b63476eacb3cadca99b1538',
        'title': 'Haben Sie einen strategischen Plan für die Anwendungssicherheit und nutzen Sie ihn für Entscheidungen?',
        'titleLocation': 'left',
        'description': 'Der Plan spiegelt die Geschäftsprioritäten und den Risikoappetit der Organisation wider',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, wir überprüfen ihn jährlich'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, wir konsultieren den Plan vor wichtigen Entscheidungen'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, wir konsultieren den Plan oft und er ist auf unsere Anwendungssicherheitsstrategie abgestimmt'
          }
        ]
      },
      {
        'type': 'radiogroup',
        'id': '74eaee0cbf454a46adeb2619850bbcb3',
        'title': 'Überprüfen und aktualisieren Sie regelmäßig den Strategischen Plan für die Anwendungssicherheit?',
        'titleLocation': 'left',
        'description': 'Sie überprüfen und aktualisieren den Plan als Reaktion auf signifikante Veränderungen in der Geschäftsumgebung, der Organisation oder deren Risikoappetit',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, aber die Überprüfung erfolgt ad-hoc'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, wir überprüfen ihn zu festen Zeiten'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, wir überprüfen ihn mindestens jährlich'
          }
        ]
      },
      {
        'type': 'radiogroup',
        'id': '6aa85d5f3c03428aa064447fa50fa66b',
        'title': 'Verwenden Sie eine Reihe von Kennzahlen, um die Effektivität und Effizienz des Anwendungssicherheitsprogramms über Anwendungen hinweg zu messen?',
        'titleLocation': 'left',
        'description': 'Sie dokumentieren jede Metrik, einschließlich einer Beschreibung der Quellen, der Abdeckung der Messung und Anleitungen zur Erklärung von Trends in der Anwendungssicherheit',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, für eine Kategorie von Metriken'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, für zwei Kategorien von Metriken'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, für alle drei Kategorien von Metriken'
          }
        ]
      },
      {
        'type': 'radiogroup',
        'id': '26f12b057f2b44f386d9af391383b590',
        'title': 'Haben Sie Key Performance Indicators (KPIs) aus verfügbaren Metriken zur Anwendungssicherheit definiert?',
        'titleLocation': 'left',
        'description': 'Sie definieren KPIs, nachdem genügend Informationen vorliegen, um realistische Ziele festzulegen',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, für einige der Metriken'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, für mindestens die Hälfte der Metriken'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, für die meisten oder alle der Metriken'
          }
        ]
      },
      {
        'type': 'radiogroup',
        'id': 'efdc34fbb75b405b8107d63d58fa7286',
        'title': 'Aktualisieren Sie die Strategie und Roadmap zur Anwendungssicherheit basierend auf Metriken und KPIs zur Anwendungssicherheit?',
        'titleLocation': 'left',
        'description': 'Sie überprüfen KPIs mindestens jährlich hinsichtlich ihrer Effizienz und Effektivität',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, aber die Überprüfung erfolgt ad-hoc'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, wir überprüfen sie zu festen Zeiten'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, wir überprüfen sie mindestens jährlich'
          }
        ]
      }
    ],
    'title': 'Strategie und Kennzahlen',
    'state': 'expanded'
  };
};
export default strategy;