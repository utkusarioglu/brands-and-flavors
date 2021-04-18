# Brands and Flavors

Ready to use Brand and flavor types, allowing stringent type safety for TS/JS
primitives.

## Features

You can define your own types using `Bnf` import, or you can use the
ever-growing list of types in this repo. Click [here](List.md) to see the list
of currently supported types. You can always send PR for types that you want
supported.

## Usage

### Using predefined types

Same type can be used as a flavor or a brand depending on the optional generic
value of `true`; If no generic is provided, the type will be a flavor.

```ts
import { Uuid } from 'brands-and-flavors';

const flavor: Uuid = 'some-uuid'; // flavor
const brand: Uuid<true> = 'some-uuid'; // brand
```

Note that flavors cannot be assigned to brands even if they are of the same
type. Brands _can_ be assigned to flavors.

### Defining your own types

It's possible to define your own types using `Bnf` import:

```ts
import type { Bnf } from 'brands-and-flavors';

type StudentCount<IsBrand = false> = Bnf<number, 'studentCount', IsBrand>;

// brand, cannot be statically assigned
const inputStudentCount: StudentCount<true>;

// flavor, can be statically assigned
const staticStudentCount: StudentCount = 5;
```

## What is this repo for?

To explain this, it's better to do a short explanation on brands and flavors.
What this repo solves will be clear afterwards.

### What are brands?

On certain occasions, storing values as primitives can be detrimental for type
safety. Think of this example:

```ts
const duration: number = 1000;
```

Here, it's not clear whether the duration is expressed in seconds, milliseconds
or even centuries. When this happens, we usually rely on more descriptive
variable names, meaning that we rely on human interpretation to ensure that the
data is consumed as intended.

Brands and flavors are tools for offloading this responsibility to typescript.
To achieve this, we use a rather unique feature of typescript: while values we
use are still primitives for js, the types that typescript sees can be more
complicated and descriptive. As an example:

```ts
type Milliseconds = number & { __brand: 'milliseconds' };
type Seconds = number & { __brand: 'seconds' };

const milliseconds = 10 as Milliseconds;
const seconds = milliseconds; // error
```

In this example, the `__brand` property of the intersection type ensures that
two types cannot be assigned to each other. When we package this structure as a
separate type, this is called a _Brand_.

Brands are great when you are using data that is never statically assigned. If
you try to assign a static value to a Brand, typescript won't let you:

```ts
// Using the same type definitions as above
const seconds: Seconds = 15; // error
```

This is because typescript expects the number to also satisfy
`{ __brand: 'second' }` property, which is clearly not possible. Brands work
great when the code doesn't contain any static values, when the code is expected
to pass along or only manipulate the data and never create it.

### What are Flavors?

There are occasions where we need to define a static value for a branded
variable. Flavors allow static assignments while still ensuring that unrelated
values cannot be used together. Here is an example:

```ts
// Notice that the __brand property is now optional
type MillisecondsFlavor = number & { __brand?: 'milliseconds' };
type SecondsFlavor = number & { __brand?: 'seconds' };

const seconds: SecondsFlavor = 15; // ok
const milliseconds: MillisecondsFlavor = seconds; // error
```

Using flavors, we are able to make sure that unrelated primitives do not mix
while still being able to assign static values to our variables.

### So then, what does this repo do?

This repo packages brands and flavors as a type named `Bnf`; which you can use
to create your own brands and flavors. But you can also consume the ready-made
Bnfs listed [here](List.md).
