# browserstorage-ttl
Localstorage with time to live / expiry, if expiry is zero uses SessionStorage

# Usage

`npm install browserstorage-ttl`

In your file

```javascript
import Storage from 'browserstorage-ttl';


Storage.set('key', 'value', 30);  // 30 minutes as ttl
const k = Storage.get('key');
console.log(k); // value

Storage.set('anotherkey', 'anothervalue', 0);  // 0 minutes as ttl, will use sessionStorage
const t = Storage.get('anotherkey');

console.log(t); // anothervalue

```
