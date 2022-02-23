# broadcasterjs

#### A simple yet powerful pub/sub javascript event bus

- easy to use
- framework agnostic
- minimal footprint
- optimised for SPA applications
- unintrusive as a dependency
- no own dependencies

- Here you can [report issues or contribute](https://github.com/nicatspark/broadcasterjs)
- [Demo app available](http://broadcasterjs.hervy.se)
- [Source code of the demo app](https://github.com/nicatspark/broadcasterjs-demo-app)

---

### Usage

No need to initialize separately. Import the 'broadcast' factory function and use to your hearts content.

##### START SUBSCRIPTION IN REACT

```typescript
useEffect(() => {
  broadcast.on(['MYBROADCAST-ID', myFlagEmittedCallbackFunction])
  return () => broadcast.off(['MYBROADCAST-ID', myFlagEmittedCallbackFunction])
}, [myFlagEmittedCallbackFunction])
```

The return function is optional, BroadcasterJS is managing this anyway but React migth warn about memory leaks never the less.

##### START SUBSCRIPTION VANILLA JS

```typescript
broacast.on([
  'MYBROADCAST-ID',
  ({ detail }) => {
    document.body.append(detail + ' ')
  },
])
```

```typescript
broacast.once([
  'MYBROADCAST-ID',
  ({ detail }) => {
    document.body.append(detail + ' ')
  },
])
```

##### END SUBSCRIPTION

```typescript
broacast.off([
  'MYBROADCAST-ID',
  ({ detail }) => {
    document.body.append(detail + ' ')
  },
])
```

##### PUBLISH IN REACT & VANILLLA JS (place anywhere)

```typescript
broadcast.emit('MYBROADCAST-ID', 'Hello world')
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
  debug: boolean (false)
  debugGlobal: boolean (false)
  allowDoublettesSubscribers: boolean (false)
  useLatestSubscriberScope?: boolean (false) // <- internal use
  suppresDebug?: boolean (false) // <- internal use
}
```

Broadcasterjs does prevent doublettes with the same subscriber combination (flag + callback function). If you for some reason would want the same combination on another place in the code either just add a minor change, a comment in the callback function etc or send in the settings object with `allowDoublettesSubscribers` set to true.
