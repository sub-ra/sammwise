const sectest = () => {
  return {
    'type': 'panel',
    'name': 'Sicherheitstests',
    'elements': [
      {
        'type': 'radiogroup',
        'id': 'bef645da8ccd477bbd10685dd52ad40e',
        'title': 'Scannen Sie Anwendungen mit automatisierten Sicherheitstest-Tools?',
        'titleLocation': 'left',
        'description': 'Sie generieren dynamisch Eingaben für Sicherheitstests mit automatisierten Tools',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, einige davon'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, mindestens die Hälfte davon'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, die meisten oder alle davon'
          }
        ]
      },
      {
        'type': 'radiogroup',
        'id': 'c013b6f9d973425cb63f21f4f8b84c30',
        'title': 'Passen Sie die automatisierten Sicherheitstools an Ihre Anwendungen und Technologiestacks an?',
        'titleLocation': 'left',
        'description': 'Sie optimieren und wählen Tool-Funktionen aus, die zu Ihrer Anwendung oder Ihrem Technologiestack passen',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, einige davon'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, mindestens die Hälfte davon'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, die meisten oder alle davon'
          }
        ]
      },
      {
        'type': 'radiogroup',
        'id': '009a8fafe5dd41889947a6b2c6769bbe',
        'title': 'Integrieren Sie automatisierte Sicherheitstests in den Build- und Bereitstellungsprozess?',
        'titleLocation': 'left',
        'description': 'Management- und Geschäftsinteressenverfolgen und überprüfen Testergebnisse während des gesamten Entwicklungszyklus',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, teilweise'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, mindestens teilweise'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, weitgehend oder vollständig'
          }
        ]
      },
      {
        'type': 'radiogroup',
        'id': '77dd81adf35f43608408e548c4972136',
        'title': 'Überprüfen Sie manuell die Sicherheitsqualität ausgewählter Hochrisikokomponenten?',
        'titleLocation': 'left',
        'description': 'Es existieren Kriterien, um den Fokus des Prüfers auf Hochrisikokomponenten zu lenken',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, für einige Komponenten'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, für mindestens die Hälfte der Komponenten'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, für die meisten oder alle Komponenten'
          }
        ]
      },
      {
        'type': 'radiogroup',
        'id': '9a2af155ba424edfb321aa7592a09ed5',
        'title': 'Führen Sie Penetrationstests für Ihre Anwendungen in regelmäßigen Abständen durch?',
        'titleLocation': 'left',
        'description': 'Penetrationstests verwenden anwendungsspezifische Sicherheitstestfälle zur Bewertung der Sicherheit',
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
        'id': 'b73bf8f0462340659e252e6471c6e831',
        'title': 'Verwenden Sie die Ergebnisse der Sicherheitstests zur Verbesserung des Entwicklungslebenszyklus?',
        'titleLocation': 'left',
        'description': 'Sie verwenden Ergebnisse aus anderen Sicherheitsaktivitäten, um die integrierten Sicherheitstests während der Entwicklung zu verbessern',
        'choices': [
          {
            'value': 0,
            'weight': 1,
            'text': 'Nein'
          },
          {
            'value': '0.25',
            'weight': 1,
            'text': 'Ja, aber wir verbessern es ad-hoc'
          },
          {
            'value': '0.5',
            'weight': 1,
            'text': 'Ja, wir verbessern es in regelmäßigen Abständen'
          },
          {
            'value': 1,
            'weight': 1,
            'text': 'Ja, wir verbessern es mindestens jährlich'
          }
        ]
      }
    ],
    'title': 'Sicherheitstests',
    'state': 'collapsed'
  };
};
export default sectest;