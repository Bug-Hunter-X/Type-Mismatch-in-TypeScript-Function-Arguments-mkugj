# Type Mismatch in TypeScript Function Arguments

This repository demonstrates a common type error in TypeScript: providing incorrect argument types to a function.

## Bug Description

The `add` function is defined to accept two numbers as arguments. However, the code calls `add` with a string ("1") and a number (2).  TypeScript's type system detects this mismatch and throws an error.

## Solution

The solution involves ensuring that the arguments passed to the `add` function are of the correct type. This can be done through explicit type conversion or by ensuring that the values passed are numbers from the beginning.
