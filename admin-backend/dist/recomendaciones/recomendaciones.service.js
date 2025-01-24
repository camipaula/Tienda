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
exports.RecomendacionesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const recomendaciones_schema_1 = require("./schemas/recomendaciones.schema");
let RecomendacionesService = class RecomendacionesService {
    constructor(recomendacionModel) {
        this.recomendacionModel = recomendacionModel;
    }
    async guardarVarias(recomendaciones, username) {
        const documentos = recomendaciones.map((recomendacion) => ({
            prendaId: recomendacion._id,
            nombre: recomendacion.nombre,
            formalidad: recomendacion.formalidad,
            edad: recomendacion.edad,
            userid: username,
        }));
        return await this.recomendacionModel.insertMany(documentos);
    }
    async getByUsuario(username, fechaInicio, fechaFin) {
        const filter = { username };
        if (fechaInicio || fechaFin) {
            filter.fecha = {};
            if (fechaInicio)
                filter.fecha.$gte = new Date(fechaInicio);
            if (fechaFin)
                filter.fecha.$lte = new Date(fechaFin);
        }
        const recomendaciones = await this.recomendacionModel.find(filter).exec();
        const uniqueRecomendaciones = recomendaciones.filter((value, index, self) => index === self.findIndex((t) => t.prendaId === value.prendaId));
        return uniqueRecomendaciones;
    }
};
exports.RecomendacionesService = RecomendacionesService;
exports.RecomendacionesService = RecomendacionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(recomendaciones_schema_1.Recomendacion.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RecomendacionesService);
//# sourceMappingURL=recomendaciones.service.js.map