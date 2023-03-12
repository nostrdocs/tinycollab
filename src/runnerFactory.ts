import * as core from "@fluidframework/server-services-core";
import { TinyliciousResources } from "./resources";
import { TinyliciousRunner } from "./runner";

export class TinyliciousRunnerFactory implements core.IRunnerFactory<TinyliciousResources> {
	public async create(resources: TinyliciousResources): Promise<core.IRunner> {
		return new TinyliciousRunner(
			resources.webServerFactory,
			resources.config,
			resources.port,
			resources.orderManager,
			resources.tenantManager,
			resources.storage,
			resources.mongoManager,
		);
	}
}
