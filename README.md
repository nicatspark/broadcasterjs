# broadcasterjs

#### A simple yet powerful pub/sub javascript event bus

- easy to use
- framework agnostic
- unintrusive as a dependency
- minimal footprint
- optimised for SPA applications

[Demo app available](https:broadcasterjs.hervy.se)

---

### Usage

No need to initialize separately. Import the 'broadcast' factory function and use to your hearts content.

##### START SUBSCRIPTION IN REACT

```typescript
useEffect(() => {
  broadcast.on(['BROADCAST-ID', flagReceivedFunction])
}, [flagReceivedFunction])
```

##### START SUBSCRIPTION VANILLA JS

```typescript
broacaster.on([
  'BROADCAST-ID',
  ({ detail }) => {
    document.body.append(detail + ' ')
  },
])
```

```typescript
broacaster.once([
  'BROADCAST-ID',
  ({ detail }) => {
    document.body.append(detail + ' ')
  },
])
```

##### END SUBSCRIPTION

```typescript
broacaster.off([
  'BROADCAST-ID',
  ({ detail }) => {
    document.body.append(detail + ' ')
  },
])
```

##### PUBLISH IN REACT & VANILLLA JS

```typescript
broadcast.emit('BROADCAST-ID', 'Hello world')
```

##### TO VISUALLY INSPECT

Click elements tab i chrome devtools,
select event-listeners tab in second pane.
Active listeners begin with 'broadcast-' + flag name. Expand each listener to see each unique subscriber.

##### TO DEBUG

Add `?debug=broadcasterjs` to your url and open your devtools console.

##### ADVANCED

The broadcaster functions `on`,`once`,`off` takes an optional third value and `emit` takes an optional third argument in the form of a settings object.

```typescript
{
  debug: boolean
  debugGlobal: boolean
  allowDoublettesSubscribers: boolean
}
```

Broadcasterjs does prevent doublettes with the same subscriber combination (flag + callback function). If you for some reason would want the same combination on another place in the code either just add a minor change, a comment etc or send in the settings object with `allowDoublettesSubscribers` set to true.
