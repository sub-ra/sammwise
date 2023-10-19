var tosend = {
  name: 'Details',
  elements: [
    {
      'type': 'text',
      'name': 'Unternehmen'
    },
    {
      'type': 'text',
      'name': 'Anwendungs- oder Projektname'
    },
    {
      'type': 'text',
      'name': 'Anwendungs- oder Projektbeschreibung'
    }
  ],
  'description': 'Diese Angaben sind fakultativ und dienen lediglich dazu, die erhaltenen Ergebnisse zu kategorisieren, z.B.: Titel des Ergebnisdokuments etc. '
};
const detailsJSON = () => {
  return tosend;
};
export default detailsJSON;