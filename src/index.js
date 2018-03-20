//@flow strict

export class NonEmptySet<T> extends Set<T> {}
export class EmptySet<T> extends Set<T> {
  static ref: EmptySet<T> = new EmptySet()
}

export type FiniteSet<T> = NonEmptySet<T> | EmptySet<T>
export function isEmpty<T>(set: FiniteSet<T>): boolean %checks {
  return set instanceof EmptySet
}
export function isNotEmpty<T>(set: FiniteSet<T>): boolean %checks {
  return set instanceof NonEmptySet
}

export function nonEmptySet<T>(value: T): NonEmptySet<T> {
  return new NonEmptySet([value])
}

export function emptySet<T>(): EmptySet<T> {
  return EmptySet.ref
}

declare export function fromSet<T>(set: EmptySet<T>): EmptySet<T>
declare export function fromSet<T>(set: NonEmptySet<T>): NonEmptySet<T>
declare export function fromSet<T>(set: Set<T>): FiniteSet<T>
export function fromSet<T>(set: Set<T>): FiniteSet<T> {
  if (set instanceof EmptySet) return set
  if (set instanceof NonEmptySet) return set
  if (set.size > 0) return new NonEmptySet([...set])
  return EmptySet.ref
}

declare export function fromIterable<T>(set: EmptySet<T>): EmptySet<T>
declare export function fromIterable<T>(set: NonEmptySet<T>): NonEmptySet<T>
declare export function fromIterable<T>(iterable: Iterable<T>): FiniteSet<T>
export function fromIterable<T>(iterable: Iterable<T>): FiniteSet<T> {
  return fromSet(new Set([...iterable]))
}

declare export function remove<T>(
  values: EmptySet<T>,
  set: NonEmptySet<T>,
): NonEmptySet<T>
declare export function remove<T>(
  values: Iterable<T>,
  set: EmptySet<T>,
): EmptySet<T>
declare export function remove<T>(
  values: Iterable<T>,
  set: Set<T>,
): FiniteSet<T>
export function remove<T>(values: Iterable<T>, set: Set<T>): FiniteSet<T> {
  if (set instanceof EmptySet) return set
  for (const value of values) {
    set.delete(value)
    if (set.size === 0) return EmptySet.ref
  }
  return fromSet(set)
}

declare export function add<T>(
  values: EmptySet<T>,
  set: EmptySet<T>,
): EmptySet<T>
declare export function add<T>(
  values: NonEmptySet<T>,
  set: Set<T>,
): NonEmptySet<T>
declare export function add<T>(
  values: Iterable<T>,
  set: NonEmptySet<T>,
): NonEmptySet<T>
declare export function add<T>(values: Iterable<T>, set: Set<T>): FiniteSet<T>
export function add<T>(values: Iterable<T>, set: Set<T>): FiniteSet<T> {
  for (const value of values) set.add(value)
  return fromSet(set)
}
