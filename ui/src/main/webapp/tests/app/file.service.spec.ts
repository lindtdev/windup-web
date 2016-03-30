/// <reference path="../../../../../node_modules/angular2/ts/typings/jasmine/jasmine.d.ts" />

import {provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {
    beforeEach,
    beforeEachProviders,
    describe,
    expect,
    it,
    inject,
    injectAsync
} from 'angular2/testing';

import 'rxjs/Rx';

import {REST_BASE} from '../../app/constants';

import {FileService} from "../../app/services/file.service";


describe("File Service", () => {
    beforeEachProviders(() => [
        HTTP_PROVIDERS,
        provide(REST_BASE, {useValue: REST_BASE.toString()}),
        FileService
    ]);

    it('file exists call', injectAsync([FileService], (service:FileService) => {
        return service.pathExists("src/main/java").toPromise()
            .then(result => {
                expect(result).toEqual(true);
            }, error => {
                expect(false).toBeTruthy("Service call failed due to: " + error);
            });
    }));
});