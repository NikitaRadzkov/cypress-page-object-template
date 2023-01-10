import apiEndpointsEnum from '../enums/api-endpoints.enum';
import methodsEnum from '../enums/methods.enum';

namespace TemplateTypes {
  export type Methods = `${methodsEnum}`;
  export type ApiEndpoints = `${apiEndpointsEnum}`;
}

export default TemplateTypes;
