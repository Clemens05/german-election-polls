# German Election Polls

## Usage

### Installing

```bash
npm install german-election-polls
```

### Examples

```ts
import polls from 'german-election-polls';

(async () => {
  await poll.shared.update();

  const query = poll.shared.select([
    Query.include([DataType.Surveys]),
    Query.Survey.Tasker.ID.isNot([4, 6]),
    Query.Survey.Release.isGreater(new Date('2021-11-21')),
    Query.Survey.Parliament.Shortcut.is(['Nordrhein-Westfalen (NRW)', 'Baden-Württemberg']),
    Query.Survey.Sort.byParticipants(Order.Asc),
    Query.Survey.Sort.allResults(Order.Desc),
  ]);
})();
```

## Where the data comes from

We are using the [DAWUM API](https://dawum.de/API) to collect all data.\
\
Data from [dawum.de](https://dawum.de) (License: [ODC-ODbL](https://opendatacommons.org/licenses/odbl/1-0/))\
Daten von [dawum.de](https://dawum.de) (Lizenz: [ODC-ODbL](https://opendatacommons.org/licenses/odbl/1-0/))\
