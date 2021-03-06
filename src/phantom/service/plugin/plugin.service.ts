/*
 * Copyright 2017 Tarik Curto - centro.tarik@live.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

declare const page: {evaluate:Function, render: Function};

export abstract class PluginService{

    constructor() {

    }

    /**
     * Evaluate JS on instanced page.
     *
     * @param callback
     * @param {Object} data Client properties of evaluation
     */
    public evaluate(callback: Function, data: Object = {}){

        //PhantomJS don't has support for Function.property.bind(), Function.property.apply()
        //Explanation: https://groups.google.com/forum/#!msg/phantomjs/r0hPOmnCUpc/uxusqsl2LNoJ
        return page.evaluate(callback, data);
    }

    public screenshot(captureName: string){

        page.render(captureName + ".png");
    }
}