
/** Server **/
import * as Default_Service from './src/app/services/command.service.spec';
import * as Single_Service from './src/app/services/math.service.spec';
import * as Has_Dependence_Service from './src/app/services/triangle.service.spec';

/** Pipe **/
import * as Simple_Pipe from './src/app/pipes/transfer-name.pipe.spec';

/** Component */
import * as Default_Component from './src/app/components/command-button/command-button.component.spec';
import * as Simple_Component from './src/app/components/terminal/terminal.component.spec';


console.log(
  Simple_Pipe,
  Default_Service,
  Has_Dependence_Service,
  Single_Service,
  Default_Component,
  Simple_Component,
);