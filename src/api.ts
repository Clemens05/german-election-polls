import axios from 'axios';
import { Env } from './environment';
import { RawPollData } from './models/PollData';

export class API {
  public static async getData(): Promise<RawPollData | undefined> {
    try {
      const { data } = await axios.get<RawPollData>(Env.API_URL);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return undefined;
      } else {
        return undefined;
      }
    }
  }
}
