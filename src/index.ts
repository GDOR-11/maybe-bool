export default class Bool {
    get very_true() {
        return Math.random() > 0.01;
    }
    get true() {
        return Math.random() > 0.1;
    }
    get maybe() {
        return Math.random() > 0.5;
    }
    get false() {
        return Math.random() > 0.9;
    }
    get very_false() {
        return Math.random() > 0.99;
    }
}
