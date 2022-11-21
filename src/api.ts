import axios from 'axios';
import { RawPollData } from './models/PollData';

export class API {
  public static async getData(): Promise<RawPollData | undefined> {
    try {
      const { data } = await axios.get<RawPollData>('https://api.dawum.de');
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
