const snippets = [
  {
    title: "router.use",
    id: 1,
    snippet: `router.use((req, res, next) => {
        if (!req.user || !req.user.isAdmin) {
         res.status(401).json({ error: 'Unauthorized' });
         return;
        }
       
        next();
       })`,
  },
  {
    title: "console",
    id: 2,
    snippet: `const print = () => { console.log('checking');

}`,
  },
  {
    title: "indexOfSubstrings",
    id: 3,
    snippet: `const indexOfSubstrings = function* (str, searchValue) {
        let i = 0;
        while (true) {
          const r = str.indexOf(searchValue, i);
          if (r !== -1) {
            yield r;
            i = r + 1;
          } else return;
        }
      };`,
  },
  {
    title: "gcd",
    id: 4,
    snippet: `const gcd = (...arr) => {
        const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
        return [...arr].reduce((a, b) => _gcd(a, b));
      };`,
  },
  {
    title: "Binary Search",
    id: 5,
    snippet: `const binarySearch = (arr, item) => {
        let l = 0,
          r = arr.length - 1;
        while (l <= r) {
          const mid = Math.floor((l + r) / 2);
          const guess = arr[mid];
          if (guess === item) return mid;
          if (guess > item) r = mid - 1;
          else l = mid + 1;
        }
        return -1;
      };`,
  },
  {
    title: "copy",
    id: 6,
    snippet: `const copyToClipboard = str => {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText)
          return navigator.clipboard.writeText(str);
        return Promise.reject('The Clipboard API is not available.');
      };`,
  },
  {
    title: "hashBrowser",
    id: 7,
    snippet: `const hashBrowser = val =>
    crypto.subtle
      .digest('SHA-256', new TextEncoder('utf-8').encode(val))
      .then(h => {
        let hexes = [],
          view = new DataView(h);
        for (let i = 0; i < view.byteLength; i += 4)
          hexes.push(('00000000' + view.getUint32(i).toString(16)).slice(-8));
        return hexes.join('');
      });`,
  },
  {
    title: "rgb to object",
    id: 8,
    snippet: `const toRGBObject = rgbStr => {
        const [red, green, blue] = rgbStr.match(/\d+/g).map(Number);
        return { red, green, blue };
      };`,
  },
  {
    title: "Array of element's siblings",
    id: 9,
    snippet: `const getSiblings = el =>
    [...el.parentNode.childNodes].filter(node => node !== el);`,
  },
  {
    title: "Count weekdays between two days",
    id: 10,
    snippet: `const countWeekDaysBetween = (startDate, endDate) =>
    Array
      .from({ length: (endDate - startDate) / (1000 * 3600 * 24) })
      .reduce(count => {
        if (startDate.getDay() % 6 !== 0) count++;
        startDate = new Date(startDate.setDate(startDate.getDate() + 1));
        return count;
      }, 0);`,
  },
  {
    title: "Date range generator",
    id: 11,
    snippet: `const dateRangeGenerator = function* (start, end, step = 1) {
        let d = start;
        while (d < end) {
          yield new Date(d);
          d.setDate(d.getDate() + step);
        }
      };`,
  },
  {
    title: "Calculate SHA-256 hash",
    id: 12,
    snippet: `const crypto = require('crypto');

    const hashNode = val =>
      new Promise(resolve =>
        setTimeout(
          () => resolve(crypto.createHash('sha256').update(val).digest('hex')),
          0
        )
      );`,
  },
  {
    title: "CaesarCipher",
    id: 13,
    snippet: `const caesarCipher = (str, shift, decrypt = false) => {
        const s = decrypt ? (26 - shift) % 26 : shift;
        const n = s > 0 ? s : 26 + (s % 26);
        return [...str]
          .map((l, i) => {
            const c = str.charCodeAt(i);
            if (c >= 65 && c <= 90)
              return String.fromCharCode(((c - 65 + n) % 26) + 65);
            if (c >= 97 && c <= 122)
              return String.fromCharCode(((c - 97 + n) % 26) + 97);
            return l;
          })
          .join('');
      };`,
  },
];

module.exports = { snippets };
