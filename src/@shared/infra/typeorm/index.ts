import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "saas_picode",
    synchronize: false,
    logging: false,
    entities: ["src/modules/**/entities/*.ts"],
    migrations: ["src/shared/infra/typeorm/migrations/*.ts"],
    

});

AppDataSource.initialize().then(() => {
    console.log("Data Source has been initialized!");
}).catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
