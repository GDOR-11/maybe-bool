const Bool = {};
Object.defineProperties(Bool, {
    very_true:  { get: () => Math.random() > 0.01 },
    true:       { get: () => Math.random() > 0.1  },
    maybe:      { get: () => Math.random() > 0.5  },
    false:      { get: () => Math.random() > 0.9  },
    very_false: { get: () => Math.random() > 0.99 },
});
export default Bool;
