import { IDbFactory } from "@fluidframework/server-services-core";

import { Provider } from "nconf";
import { LevelDbFactory } from "./levelDb";
import { InMemoryDbFactory } from "./inMemorydb";

export async function getDbFactory(config: Provider): Promise<IDbFactory> {
	return config.get("db:inMemory")
		? new InMemoryDbFactory()
		: new LevelDbFactory(config.get("db:path"));
}
