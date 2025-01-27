"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_module_1 = require("./user/user.module");
const app_service_1 = require("./app.service");
const app_controller_1 = require("./app.controller");
const ropa_module_1 = require("./ropa/ropa.module");
const weather_module_1 = require("./weather/weather.module");
const color_module_1 = require("./color/color.module");
const recomendaciones_module_1 = require("./recomendaciones/recomendaciones.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb+srv://ropacore:ropacore@cluster0.mi2yl.mongodb.net/ropacoredb?retryWrites=true&w=majority&appName=Cluster0'),
            user_module_1.UserModule,
            ropa_module_1.RopaModule,
            weather_module_1.WeatherModule,
            color_module_1.ColorModule,
            recomendaciones_module_1.RecomendacionesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map