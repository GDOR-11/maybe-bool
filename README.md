# maybe-bool
A library that adds more booleans to javascript, inspired by the newly added maybe keyword in C#

## installation
```
npm install maybe-bool
```

## usage
```typescript
import "maybe-bool";

if(DefinitelyTrue)  console.log("you are 99.9% likely to see this message!");
if(VeryTrue)        console.log("you are 99% likely to see this message!");
if(True)            console.log("you are 90% likely to see this message!");
if(Maybe)           console.log("you are 50% likely to see this message!");
if(False)           console.log("you are 10% likely to see this message!");
if(VeryFalse)       console.log("you are 1%  likely to see this message!");
if(DefinitelyFalse) console.log("you are 0.1% likely to see this message!");
```
