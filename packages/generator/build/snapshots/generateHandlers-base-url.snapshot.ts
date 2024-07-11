import { rest } from 'msw';
import { EnclaveKey, EnclaveKeyResponse, RevocationListResponse, RevokeResponse } from '../../../pb/teestack';
import { grpcResponse } from './helpers';

export const teestackHandlers = [
    rest.post('https://teestack.com/api/getEnclaveKey', (_req, res, _ctx) => {
        return res(grpcResponse(EnclaveKeyResponse.toBinary({
            message: '',
            status: 0
        })));
    }),
    rest.post('https://teestack.com/api/revokeKey', (_req, res, _ctx) => {
        return res(grpcResponse(RevokeResponse.toBinary({
            message: '',
            status: 0
        })));
    }),
    rest.post('https://teestack.com/api/getRevocationList', (_req, res, _ctx) => {
        return res(grpcResponse(RevocationListResponse.toBinary({
            message: '',
            status: 0,
            enclaves: {}
        })));
    }),
    rest.post('https://teestack.com/api/bindtoEnclaveKey', (_req, res, _ctx) => {
        return res(grpcResponse(EnclaveKey.toBinary({
            cipher: '',
            public: '',
            private: '',
            expiry: 0
        })));
    })
];
