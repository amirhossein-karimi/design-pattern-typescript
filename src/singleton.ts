// singleton pattern
// https://en.wikipedia.org/wiki/Singleton_pattern

class Singleton {
    // instance property of the singleton class
    private static instance: Singleton;

    // private constructor to prevent new instances
    private constructor() { }

    // static method to get the instance of the singleton class
    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

// test of the singleton class
let singleton = Singleton.getInstance();
let singleton2 = Singleton.getInstance();
console.log(singleton === singleton2); // true
