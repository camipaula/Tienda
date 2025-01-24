"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecomendacionesController = void 0;
const common_1 = require("@nestjs/common");
const recomendaciones_service_1 = require("./recomendaciones.service");
let RecomendacionesController = class RecomendacionesController {
    constructor(recomendacionService) {
        this.recomendacionService = recomendacionService;
    }
    async guardarRecomendaciones(data) {
        return this.recomendacionService.guardarVarias(data.recomendaciones, data.username);
    }
    async getRecomendacionesByUsuario(username, fechaInicio, fechaFin) {
        return this.recomendacionService.getByUsuario(username, fechaInicio, fechaFin);
    }
};
exports.RecomendacionesController = RecomendacionesController;
__decorate([
    (0, common_1.Post)('guardar-recomendaciones'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecomendacionesController.prototype, "guardarRecomendaciones", null);
__decorate([
    (0, common_1.Get)('usuario'),
    __param(0, (0, common_1.Query)('username')),
    __param(1, (0, common_1.Query)('fechaInicio')),
    __param(2, (0, common_1.Query)('fechaFin')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], RecomendacionesController.prototype, "getRecomendacionesByUsuario", null);
exports.RecomendacionesController = RecomendacionesController = __decorate([
    (0, common_1.Controller)('recomendaciones'),
    __metadata("design:paramtypes", [recomendaciones_service_1.RecomendacionesService])
], RecomendacionesController);
//# sourceMappingURL=recomendaciones.controller.js.map