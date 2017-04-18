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
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_service_1 = require("./src/phantom/service/api/api.service");
var apiService = new api_service_1.ApiService();
apiService.setUrl("http://www.google.es");
apiService.addPlugin('Plugin1PluginService', "C:\\Users\\tarikcurto\\Documents\\Work\\github\\tarikcurto\\node-webdriver\\src\\phantom\\service\\plugin\\plugin1-plugin.service.js");
var output = apiService.build();
console.log(output);
//# sourceMappingURL=index.js.map