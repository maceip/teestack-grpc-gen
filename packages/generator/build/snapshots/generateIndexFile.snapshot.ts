import { teestackHandlers } from './teestack';
import { randomnessHandlers } from './randomness';
import { dockerfileHandlers } from './dockerfile';

export const handlers = [
    ...teestackHandlers,
    ...randomnessHandlers,
    ...dockerfileHandlers
];
