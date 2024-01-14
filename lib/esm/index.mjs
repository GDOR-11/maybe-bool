"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperties(globalThis, {
    VeryTrue: { get: () => Math.random() > 0.01 },
    True: { get: () => Math.random() > 0.1 },
    Maybe: { get: () => Math.random() > 0.5 },
    False: { get: () => Math.random() > 0.9 },
    VeryFalse: { get: () => Math.random() > 0.99 },
});
