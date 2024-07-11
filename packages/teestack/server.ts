import * as grpc from "@grpc/grpc-js";
import {
  IKeyManagerService,
  keyManagerServiceDefinition,
} from "./pb/teestack.grpc-server";
import { Enclave } from "./pb/teestack";

const server = new grpc.Server();

const service: IKeyManagerService = {
  getEnclaveKey: (_, callback) => {
    callback(null, {
      message: "bytes",
      status: 0,
    });
  },
  revokeKey: (_, callback) => {
    callback(null, {
      message: "bytes",
      status: 0,
    });
  },
  getRevocationList: (_, callback) => {
    const map: Map<string, Enclave> = new Map();
    map.set("admin", {
      tcb: "0x0",
      active: true,
      address: {
        ens: "maceip.eth",
        dns: "login.limo",
        chain: "homestead",
      },
    });
    callback(null, {
      message: "bytes",
      status: 0,
      enclaves: Object.fromEntries(map),
    });
  },

  bindtoEnclaveKey: (_, callback) => {
    callback(null, {
      cipher: "aes-gcm",
      expiry: 23423235,
      public: "0x000",
      private: "0x111",
    });
  },
};
server.addService(keyManagerServiceDefinition, service);

server.bindAsync(
  "0.0.0.0:1234",
  grpc.ServerCredentials.createInsecure(),
  () => {
    server.start();
    console.log("GRPC server running on port 1234");
  },
);
