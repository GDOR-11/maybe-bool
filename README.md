# maybe-bool
A library that adds more booleans to javascript, inspired by the newly added maybe keyword in C#

## installation
```
npm install maybe-bool
```

## usage
```typescript
import Bool from "maybe-bool";

if(Bool.very_true)  console.log("you are 99% likely to see this message!");
if(Bool.true)       console.log("you are 90% likely to see this message!");
if(Bool.maybe)      console.log("you are 50% likely to see this message!");
if(Bool.false)      console.log("you are 10% likely to see this message!");
if(Bool.very_false) console.log("you are 1% likely to see this message!");
```
