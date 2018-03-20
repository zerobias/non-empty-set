# non-empty-set

Statically typed countable es6 Set instances

## Install

```bash
npm install --save non-empty-set
```

or using yarn

```bash
yarn add non-empty-set
```

### API

**Types**

* `NonEmptySet<T>`: `Set<T>`
* `EmptySet<T>`: `Set<T>`
* `FiniteSet<T>`: `EmptySet<T> | NonEmptySet<T>`

**Create**

* `function emptySet<T>(): EmptySet<T>`
* `function nonEmptySet<T>(value: T): NonEmptySet<T>`
* `function fromSet<T>(set: Set<T>): FiniteSet<T>`
* `function fromIterable<T>(iterable: Iterable<T>): FiniteSet<T>`

**Change**

* `function add<T>(values: Iterable<T>, set: Set<T>): FiniteSet<T>`
* `function remove<T>(values: Iterable<T>, set: Set<T>): FiniteSet<T>`

**Validate**

* `function isEmpty<T>(set: FiniteSet<T>): boolean`
* `function isNotEmpty<T>(set: FiniteSet<T>): boolean`
