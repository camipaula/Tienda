export declare enum AdminRole {
    ADMIN = "Admin",
    USER = "User"
}
export declare enum Formalidad {
    Formal = "Formal",
    Semiformal = "Semiformal",
    Casual = "Casual"
}
export declare class User {
    name: string;
    password: string;
    role: AdminRole;
    formalidad: Formalidad;
    edad: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
