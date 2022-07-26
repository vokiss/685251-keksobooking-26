import './form.js';
import './formvalid.js';
import {getFetchError} from './util.js';
import {renderAdds} from './map.js';
import {getData} from './api.js';

getData(renderAdds, getFetchError);
