import { p as polka, a as applyHandler } from './apply-handler-bf68f629.js';
import 'http';
import 'querystring';
import '$handler_file';

const server = polka();

applyHandler(server);

var vercelRender = (req, res) => server.handler(req, res);

export { vercelRender as default };
