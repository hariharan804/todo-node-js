import AutoLoad, { AutoloadPluginOptions } from "@fastify/autoload";
import { FastifyPluginAsync } from "fastify";
import v1 from "./routes/v1";
import { cpus } from "os";
import { join } from "path";

process.env.UV_THREADPOOL_SIZE = String(cpus().length);

export type AppOptions = {
  // Place your custom options for app below here.
} & Partial<AutoloadPluginOptions>;

// Pass --options via CLI arguments in command to enable these options.
const options: AppOptions = {};

const app: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts
): Promise<void> => {
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: opts,
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  void fastify.register(v1);

  /* Once Fastify is initialized, we define required functionalities */
  fastify.addHook("onReady", async () => {
    try {
      fastify.log.info("Fastify Server listening on", process.env.PORT);
    } catch (error) {
      fastify.log.error(error);
    }
  });
};

export default app;
export { app, options };
