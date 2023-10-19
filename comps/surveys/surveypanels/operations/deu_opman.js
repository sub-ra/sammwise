const opman = () => {
  return {
    'type': 'panel',
    'name': 'Operational Management',
    'elements': [
      {
        'type': 'radiogroup',
        'id': '41b0c2ab37774000b2b81077605bbd93',
        'title': 'Schützen und behandeln Sie Informationen gemäß den Schutzanforderungen für auf jeder Anwendung gespeicherte und verarbeitete Daten?',
        'titleLocation': 'left',
        'description': 'Sie kennen die von jeder Anwendung verarbeiteten und gespeicherten Datenkomponenten',
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
        'id': '424c004afec041058e89c396c9e88930',
        'title': 'Führen Sie einen Datenkatalog, einschließlich Typen, Sensitivitätsstufen und Verarbeitungs- und Speicherorten?',
        'titleLocation': 'left',
        'description': 'Der Datenkatalog ist in einem zugänglichen Ort gespeichert',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, für einige unserer Daten'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, für mindestens die Hälfte unserer Daten'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, für die meisten oder alle unserer Daten'
          }
        ]
      },
      {
        'type': 'radiogroup',
        'id': '8176c4588bdd4e979e3c82566450696a',
        'title': 'Überprüfen und aktualisieren Sie regelmäßig den Datenkatalog und Ihre Datenschutzrichtlinien und -verfahren?',
        'titleLocation': 'left',
        'description': 'Sie haben eine automatisierte Überwachung zur Erkennung von versuchten oder tatsächlichen Verletzungen der Datenschutzrichtlinie eingerichtet',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, wir tun es auf Anfrage'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, wir tun es alle paar Jahre'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, wir tun es mindestens jährlich'
          }
        ]
      },
      {
        'type': 'radiogroup',
        'id': 'b50d81aba3734cb59d618fd74bc5c99e',
        'title': 'Identifizieren und entfernen Sie Systeme, Anwendungen, Anwendungsabhängigkeiten oder Dienste, die nicht mehr verwendet werden, das Ende ihrer Lebensdauer erreicht haben oder nicht mehr aktiv entwickelt oder unterstützt werden?',
        'titleLocation': 'left',
        'description': 'Sie verwenden keine nicht unterstützten Anwendungen oder Abhängigkeiten',
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
        'id': 'f9c5a8649ddf4168b6f62d0018a32704',
        'title': 'Folgen Sie einem etablierten Prozess zur Entfernung aller zugehörigen Ressourcen im Rahmen der Stilllegung nicht verwendeter Systeme, Anwendungen, Anwendungsabhängigkeiten oder Dienste?',
        'titleLocation': 'left',
        'description': 'Sie dokumentieren den Supportstatus für alle veröffentlichten Versionen Ihrer Produkte an einem zugänglichen Ort',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, manchmal'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, mindestens die Hälfte der Zeit'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, die meiste oder die gesamte Zeit'
          }
        ]
      },
      {
        'type': 'radiogroup',
        'id': '54ad3e4182844623b3290901c1a1932d',
        'title': 'Bewerten Sie regelmäßig den Lebenszyklusstatus und den Supportstatus aller Softwarekomponenten und zugrunde liegenden Infrastrukturkomponenten und schätzen Sie deren Lebensdauer ab?',
        'titleLocation': 'left',
        'description': 'Ihr Prozess zur Lebenszyklusverwaltung ist festgelegt',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, für einige der Assets'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, für mindestens die Hälfte der Assets'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, für die meisten oder alle der Assets'
          }
        ]
      }
    ],
    'title': 'Operational Management',
    'state': 'collapsed'
  };
};
export default opman;