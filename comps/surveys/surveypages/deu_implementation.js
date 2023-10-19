import defectmanagementJSON from '../surveypanels/implementation/defectmanagement';
import securebuildJSON from '../surveypanels/implementation/securebuild';
import securedeploymentJSON from '../surveypanels/implementation/securedeployment';
//Skeleton of the Page 
var tosend = {
    name: 'Implementation',
    elements: [{}]
};
//Push elements to Skeleton 
tosend.elements.push(securebuildJSON());
tosend.elements.push(securedeploymentJSON());
tosend.elements.push(defectmanagementJSON());
const implementationJSON = () => {
    return tosend;
};
export default implementationJSON;