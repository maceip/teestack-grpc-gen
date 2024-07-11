import { rest } from 'msw';
import { EnclaveKey, EnclaveKeyResponse, RevocationListResponse, RevokeResponse } from '../../../pb/teestack';
import { grpcResponse } from './helpers';

export const teestackHandlers = [
    rest.post('/getEnclaveKey', (_req, res, _ctx) => {
        return res(grpcResponse(EnclaveKeyResponse.toBinary({
            message: '',
            status: 0
        })));
    }),
    rest.post('/revokeKey', (_req, res, _ctx) => {
        return res(grpcResponse(RevokeResponse.toBinary({
            message: '',
            status: 0
        })));
    }),
    rest.post('/getRevocationList', (_req, res, _ctx) => {
        return res(grpcResponse(RevocationListResponse.toBinary({
            message: '',
            status: 0,
            enclaves: {}
        })));
    }),
    rest.post('/bindtoEnclaveKey', (_req, res, _ctx) => {
        return res(grpcResponse(EnclaveKey.toBinary({
            cipher: '',
            public: '',
            private: '',
            expiry: 0
        })));
    })
];
