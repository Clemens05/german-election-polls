# German Election Polls

Get, query and sort german election polls.\
An internet connection is required.

## Usage

### Installing

```bash
npm install german-election-polls
```

### TypeScript Example

```ts
import { Polls, Query, Order, DataType } from 'german-election-polls';

(async () => {
  const polls = new Polls();

  await polls.update();

  const query = polls.select([
    Query.include([DataType.Surveys]),
    Query.Survey.Tasker.ID.isNot([4, 6]),
    Query.Survey.Release.isGreater(new Date('2021-11-21')),
    Query.Survey.Parliament.Shortcut.is(['Nordrhein-Westfalen (NRW)', 'Baden-Württemberg']),
    Query.Survey.Sort.byParticipants(Order.Asc),
    Query.Survey.Sort.allResults(Order.Desc),
  ]);
})();
```

### JavaScript Example

```js
const Polls = require('german-election-polls').Polls;
const Query = require('german-election-polls').Query;
const DataType = require('german-election-polls').DataType;
const Order = require('german-election-polls').Order;

(async () => {
  const polls = new Polls();

  await polls.update();

  const query = polls.select([
    Query.include([DataType.Surveys]),
    Query.Survey.Tasker.ID.isNot([4, 6]),
    Query.Survey.Release.isGreater(new Date('2021-11-21')),
    Query.Survey.Parliament.Shortcut.is(['Nordrhein-Westfalen (NRW)', 'Baden-Württemberg']),
    Query.Survey.Sort.byParticipants(Order.Asc),
    Query.Survey.Sort.allResults(Order.Desc),
  ]);

  console.log(query);
})();
```

## Where the data comes from / Legal

We are using the [DAWUM API](https://dawum.de/API) to collect all data.\
\
Data from [dawum.de](https://dawum.de) (License: [ODC-ODbL](https://opendatacommons.org/licenses/odbl/1-0/))\
Daten von [dawum.de](https://dawum.de) (Lizenz: [ODC-ODbL](https://opendatacommons.org/licenses/odbl/1-0/))\
\
This script only parses the data provided by DAWUM. Please make sure you understand the [licensing requirements](https://dawum.de) for the actual data.
