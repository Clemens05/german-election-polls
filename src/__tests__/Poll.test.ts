import { inspect } from 'util';
import { Polls, Query } from '../index';
import { DataType, Order } from '../query';

test('Query 001', async () => {
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

  console.log(inspect(query.surveys, false, null, true));
});
