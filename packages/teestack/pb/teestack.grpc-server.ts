// @generated by protobuf-ts 2.9.4 with parameter server_grpc1
// @generated from protobuf file "teestack.proto" (syntax proto3)
// tslint:disable
import { EnclaveKey } from "./teestack";
import { BindtoEnclaveKeyReqest } from "./teestack";
import { RevocationListResponse } from "./teestack";
import { RevocationListRequest } from "./teestack";
import { RevokeResponse } from "./teestack";
import { RevokeKeyRequest } from "./teestack";
import { EnclaveKeyResponse } from "./teestack";
import { GetEnclaveKeyRequest } from "./teestack";
import type * as grpc from "@grpc/grpc-js";
/**
 * @generated from protobuf service KeyManagerService
 */
export interface IKeyManagerService extends grpc.UntypedServiceImplementation {
    /**
     * @generated from protobuf rpc: GetEnclaveKey(GetEnclaveKeyRequest) returns (EnclaveKeyResponse);
     */
    getEnclaveKey: grpc.handleUnaryCall<GetEnclaveKeyRequest, EnclaveKeyResponse>;
    /**
     * @generated from protobuf rpc: RevokeKey(RevokeKeyRequest) returns (RevokeResponse);
     */
    revokeKey: grpc.handleUnaryCall<RevokeKeyRequest, RevokeResponse>;
    /**
     * @generated from protobuf rpc: GetRevocationList(RevocationListRequest) returns (RevocationListResponse);
     */
    getRevocationList: grpc.handleUnaryCall<RevocationListRequest, RevocationListResponse>;
    /**
     * @generated from protobuf rpc: BindtoEnclaveKey(BindtoEnclaveKeyReqest) returns (EnclaveKey);
     */
    bindtoEnclaveKey: grpc.handleUnaryCall<BindtoEnclaveKeyReqest, EnclaveKey>;
}
/**
 * @grpc/grpc-js definition for the protobuf service KeyManagerService.
 *
 * Usage: Implement the interface IKeyManagerService and add to a grpc server.
 *
 * ```typescript
 * const server = new grpc.Server();
 * const service: IKeyManagerService = ...
 * server.addService(keyManagerServiceDefinition, service);
 * ```
 */
export const keyManagerServiceDefinition: grpc.ServiceDefinition<IKeyManagerService> = {
    getEnclaveKey: {
        path: "/KeyManagerService/GetEnclaveKey",
        originalName: "GetEnclaveKey",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => EnclaveKeyResponse.fromBinary(bytes),
        requestDeserialize: bytes => GetEnclaveKeyRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(EnclaveKeyResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(GetEnclaveKeyRequest.toBinary(value))
    },
    revokeKey: {
        path: "/KeyManagerService/RevokeKey",
        originalName: "RevokeKey",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => RevokeResponse.fromBinary(bytes),
        requestDeserialize: bytes => RevokeKeyRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(RevokeResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(RevokeKeyRequest.toBinary(value))
    },
    getRevocationList: {
        path: "/KeyManagerService/GetRevocationList",
        originalName: "GetRevocationList",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => RevocationListResponse.fromBinary(bytes),
        requestDeserialize: bytes => RevocationListRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(RevocationListResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(RevocationListRequest.toBinary(value))
    },
    bindtoEnclaveKey: {
        path: "/KeyManagerService/BindtoEnclaveKey",
        originalName: "BindtoEnclaveKey",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => EnclaveKey.fromBinary(bytes),
        requestDeserialize: bytes => BindtoEnclaveKeyReqest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(EnclaveKey.toBinary(value)),
        requestSerialize: value => Buffer.from(BindtoEnclaveKeyReqest.toBinary(value))
    }
};