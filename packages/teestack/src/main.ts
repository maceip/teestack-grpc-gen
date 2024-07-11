import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";

import { KeyManagerServiceClient } from "../pb/teestack.client";
import { worker } from "./mocks/browser";
import "./style.css";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

const pre = document.querySelector<HTMLPreElement>("#enclave");
const fetchButton = document.querySelector<HTMLButtonElement>("#fetch-btn");

const transport = new GrpcWebFetchTransport({
  baseUrl: "http://localhost:4000",
});

const client = new KeyManagerServiceClient(transport);

if (fetchButton) {
  fetchButton.addEventListener("click", () => {
    client.getEnclaveKey({ eoaAddress: "0x0" }).then(({ response }) => {
      // biome-ignore lint/style/noNonNullAssertion: trust me
      pre!.innerText = JSON.stringify(
        response,
        (_k, v) => (typeof v === "bigint" ? v.toString() : v),
        2,
      );
    });
  });
}
