import { inspect } from 'util';
import poll, { Query } from '../index';
import { DataType, Order } from '../query';

test('Query', async () => {
  await poll.shared.update();

  const query = poll.shared.select([
    Query.include([DataType.Surveys]),
    Query.Survey.Tasker.ID.isNot([4, 6]),
    Query.Survey.Release.isGreater(new Date('2021-11-21')),
    Query.Survey.Parliament.Shortcut.is(['Nordrhein-Westfalen (NRW)', 'Baden-Württemberg']),
    Query.Survey.Sort.byParticipants(Order.Asc),
    Query.Survey.Sort.allResults(Order.Desc),
  ]);

  console.log(inspect(query.surveys, false, null, true));
});
