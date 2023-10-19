const threatassessment = () => {
    return ({
        "type": "panel",
        "name": "Bedrohungsbeurteilung",
        "elements": [
            {
                "type": "radiogroup",
                "id": "71c02652a9ba4b10a0cc0179c7ce869f",
                "title": "Klassifizieren Sie Anwendungen nach Geschäftsrisiken anhand eines einfachen und vordefinierten Fragenkatalogs?",
                "titleLocation": "left",
                "description": "Eine vereinbarte Risikoklassifikation existiert",
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
                "id": "897306b66f16454eab7b5a2355d31c11",
                "title": "Verwenden Sie zentralisierte und quantifizierte Anwendungsrisikoprofile zur Bewertung des Geschäftsrisikos?",
                "titleLocation": "left",
                "description": "Das Anwendungsrisikoprofil entspricht dem organisatorischen Risikostandard",
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
                "id": "7e541611f3c749f285ac27f0a9ba7d55",
                "title": "Überprüfen und aktualisieren Sie regelmäßig die Risikoprofile Ihrer Anwendungen?",
                "titleLocation": "left",
                "description": "Der organisatorische Risikostandard berücksichtigt historisches Feedback zur Verbesserung der Bewertungsmethode",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "Nein"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Ja, sporadisch"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Ja, bei Änderung der Anwendung"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Ja, mindestens jährlich"
                    }
                ]
            },
            {
                "type": "radiogroup",
                "id": "e9dcf4f79e2e487fb74df5e15a14a91b",
                "title": "Identifizieren und verwalten Sie Architekturmängel mit Bedrohungsmodellierung?",
                "titleLocation": "left",
                "description": "Sie führen eine Bedrohungsmodellierung für hochriskante Anwendungen durch",
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
                "id": "42cfabd13db34fd0b35e92af917eb1b8",
                "title": "Verwenden Sie eine standardisierte Methodik, die auf Ihren Anwendungsrisikostufen basiert?",
                "titleLocation": "left",
                "description": "Sie schulen Ihre Architekten, Sicherheitsbeauftragten und andere Stakeholder darin, wie man praktische Bedrohungsmodellierung durchführt",
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
                "id": "cd639e5458ca4f60be60bc9d47314648",
                "title": "Überprüfen und aktualisieren Sie regelmäßig die Methodik zur Bedrohungsmodellierung für Ihre Anwendungen?",
                "titleLocation": "left",
                "description": "Die Methodik des Bedrohungsmodells berücksichtigt historisches Feedback zur Verbesserung",
                "choices": [
                    {
                        "value": 0,
                        "weight": 1,
                        "text": "Nein"
                    },
                    {
                        "value": 0.25,
                        "weight": 1,
                        "text": "Ja, die Überprüfung erfolgt ad-hoc"
                    },
                    {
                        "value": 0.5,
                        "weight": 1,
                        "text": "Ja, wir überprüfen es regelmäßig"
                    },
                    {
                        "value": 1,
                        "weight": 1,
                        "text": "Ja, wir überprüfen es mindestens jährlich"
                    }
                ]
            }
        ],
        "title": "Bedrohungsbeurteilung",
        "state": "expanded"
    });
}
export default threatassessment;
