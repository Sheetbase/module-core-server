import { Options } from './types';

import { OptionService } from './option';
import { HttpService } from './http';
import { RequestService } from './request';
import { ResponseService } from './response';
import { RouterService } from './router';

export function app(options?: Options) {
    const Option = new OptionService(options);
    const Router = new RouterService();
    const Request = new RequestService();
    const Response = new ResponseService(Option);
    const HTTP = new HttpService(Option, Response, Router);
    return {
        Option,
        Router,
        Request,
        Response,
        HTTP,
    };
}

export { app as sheetbase };