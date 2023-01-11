import apiEndpointsEnum from '../enums/api-endpoints.enum';
import methodsEnum from '../enums/methods.enum';
import uiEndpoints from '../enums/ui-endpoints.enum';

namespace TemplateTypes {
  export type Methods = `${methodsEnum}`;
  export type ApiEndpoints = `${apiEndpointsEnum}`;
  export type UIEndpoints = `${uiEndpoints}`;
}

export default TemplateTypes;
