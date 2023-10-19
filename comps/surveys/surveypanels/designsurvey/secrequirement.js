const secrequirement = () => {
  return ({
      "type": "panel",
      "name": "Sicherheitsanforderungen",
      "elements": [
          {
              "type": "radiogroup",
              "id": "645207bf33584cc6a535e42bae7667c9",
              "title": "Legen Projektteams Sicherheitsanforderungen während der Entwicklung fest?",
              "titleLocation": "left",
              "description": "Teams leiten Sicherheitsanforderungen aus funktionalen Anforderungen und Kunden- oder Organisationsanliegen ab",
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
              "id": "2d458a65858c48af94f25f9858bd8ed7",
              "title": "Definieren, strukturieren und priorisieren Sie in den Artefakten des Sicherheitsanforderungserhebungsprozesses?",
              "titleLocation": "left",
              "description": "Sicherheitsanforderungen berücksichtigen domänenspezifisches Wissen, wenn sie Richtlinien und Anleitungen für die Produktentwicklung anwenden",
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
                      "text": "Ja, meistens oder immer"
                  }
              ]
          },
          {
              "type": "radiogroup",
              "id": "dad421c501994b0fa2b2ab94ffe61176",
              "title": "Verwenden Sie ein standardisiertes Anforderungsframework, um die Erhebung von Sicherheitsanforderungen zu optimieren?",
              "titleLocation": "left",
              "description": "Ein Sicherheitsanforderungs-Framework steht Projektteams zur Verfügung",
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
              "id": "795e7ddd03f2443c851e34fc6e023d71",
              "title": "Überprüfen Stakeholder die Zusammenarbeit mit Anbietern hinsichtlich Sicherheitsanforderungen und Methodik?",
              "titleLocation": "left",
              "description": "Sie ziehen in Erwägung, spezifische Sicherheitsanforderungen, Aktivitäten und Prozesse bei der Erstellung von Vereinbarungen mit Dritten einzubeziehen",
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
                      "text": "Ja, meistens oder immer"
                  }
              ]
          },
          {
              "type": "radiogroup",
              "id": "dffdd9659e6243d7bcbcbc0dff4429fc",
              "title": "Erfüllen Anbieter die Sicherheitsverantwortlichkeiten und Qualitätsmaßstäbe der vom Unternehmen definierten Service-Level-Vereinbarungen?",
              "titleLocation": "left",
              "description": "Sie diskutieren Sicherheitsanforderungen mit dem Anbieter bei der Erstellung von Anbietervereinbarungen",
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
                      "text": "Ja, meistens oder immer"
                  }
              ]
          },
          {
              "type": "radiogroup",
              "id": "497753e656514aa6bdf3030bebcb3fbe",
              "title": "Sind Anbieter mit den standardmäßigen Sicherheitskontrollen und Softwareentwicklungstools und -prozessen abgestimmt, die das Unternehmen verwendet?",
              "titleLocation": "left",
              "description": "Der Anbieter verfügt über einen sicheren SDLC, der sicheres Bauen, sicheres Bereitstellen, Fehlermanagement und Vorfallmanagement beinhaltet, die sich mit denen in Ihrer Organisation abstimmen",
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
                      "text": "Ja, meistens oder immer"
                  }
              ]
          }
      ],
      "title": "Sicherheitsanforderungen",
      "state": "collapsed"
  });
}
export default secrequirement;
