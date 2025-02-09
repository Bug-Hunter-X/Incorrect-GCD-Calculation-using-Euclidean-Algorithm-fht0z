# Incorrect GCD Calculation using Euclidean Algorithm

This repository demonstrates a common error in implementing the Euclidean algorithm for finding the greatest common divisor (GCD) of two numbers in JavaScript. The provided code contains a bug that results in incorrect GCD calculations in certain scenarios.

## Bug Description

The `foo` function attempts to compute the GCD using recursion. The base case is when `a` and `b` are equal, returning `true`. However, this is incorrect because the GCD should be the value of `a` or `b` in that case. The recursive steps are correct. The bug primarily arises in scenarios where the GCD is not 1 and the recursion doesn't reach the intended base case effectively. For example, `foo(10, 2)` should return `true` (GCD is 2), but it incorrectly returns `false`. 

## Solution

The solution involves correctly defining the base case.  The function should return `a` (or `b`, since they will be equal) when the base case is reached, representing the GCD. The recursive steps remain unchanged.