"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const notifications_repository_1 = require("../../application/repositories/notifications-repository");
const products_repository_1 = require("../../application/repositories/products-repository");
const prisma_service_1 = require("./prisma/prisma.service");
const prisma_notifications_repository_1 = require("./prisma/repositories/prisma-notifications-repository");
const prisma_products_repository_1 = require("./prisma/repositories/prisma-products-repository");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaService,
            {
                provide: notifications_repository_1.NotificationsRepository,
                useClass: prisma_notifications_repository_1.PrismaNotificationsRepository,
            },
            {
                provide: products_repository_1.ProductsRepository,
                useClass: prisma_products_repository_1.PrismaProductsRepository,
            }
        ],
        exports: [notifications_repository_1.NotificationsRepository, products_repository_1.ProductsRepository]
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map