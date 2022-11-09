# Changelog

## 0.4.0

Depends on `OverlayScrollbars` version `^2.0.0` and `Vue` version `^3.2.25`.

### Features

- `OverlayScrollbarsComponent` has now the `events` property
- `OverlayScrollbarsComponent` has now the `element` property
- `OverlayScrollbarsComponent` emits now all `OverlayScrollbars` events as "native" Vue events
- The `useOverlayScrollbars` composable was added for advanced usage 

### Breaking Changes

- The `extensions` property is removed from `OverlayScrollbarsComponent`
- The `osInstance()` function from the `OverlayScrollbarsComponent` `ref` is renamed to `instance()`
- The `osTarget()` function from the `OverlayScrollbarsComponent` `ref` is renamed to `element()`