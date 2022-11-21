import { PollData } from '../models/PollData';
import { Survey } from '../models/Survey';
import { SurveyResult } from '../models/SurveyResult';
import { Order } from '../query';

export namespace Tasker {
  export function byID(order: Order = Order.Asc): (data: PollData) => PollData {
    let sortFunc: (a: Survey, b: Survey) => number;
    switch (order) {
      case Order.Asc:
        sortFunc = (a: Survey, b: Survey) => {
          if (a.tasker.id < b.tasker.id) return -1;
          else if (a.tasker.id > b.tasker.id) return 1;
          else return 0;
        };
        break;

      case Order.Desc:
        sortFunc = (a: Survey, b: Survey) => {
          if (a.tasker.id > b.tasker.id) return -1;
          else if (a.tasker.id < b.tasker.id) return 1;
          else return 0;
        };
        break;

      default:
        break;
    }

    return (d: PollData) => {
      return {
        parliaments: d.parliaments,
        institutes: d.institutes,
        taskers: d.taskers,
        parties: d.parties,
        surveys: d.surveys.sort(sortFunc),
      } as PollData;
    };
  }

  export function byName(order: Order = Order.Asc): (data: PollData) => PollData {
    let sortFunc: (a: Survey, b: Survey) => number;
    switch (order) {
      case Order.Asc:
        sortFunc = (a: Survey, b: Survey) => {
          if (a.tasker.name < b.tasker.name) return -1;
          else if (a.tasker.name > b.tasker.name) return 1;
          else return 0;
        };
        break;

      case Order.Desc:
        sortFunc = (a: Survey, b: Survey) => {
          if (a.tasker.name > b.tasker.name) return -1;
          else if (a.tasker.name < b.tasker.name) return 1;
          else return 0;
        };
        break;

      default:
        break;
    }

    return (d: PollData) => {
      return {
        parliaments: d.parliaments,
        institutes: d.institutes,
        taskers: d.taskers,
        parties: d.parties,
        surveys: d.surveys.sort(sortFunc),
      } as PollData;
    };
  }
}

export namespace Institute {
  export function byID(order: Order = Order.Asc): (data: PollData) => PollData {
    let sortFunc: (a: Survey, b: Survey) => number;
    switch (order) {
      case Order.Asc:
        sortFunc = (a: Survey, b: Survey) => {
          if (a.institute.id < b.institute.id) return -1;
          else if (a.institute.id > b.institute.id) return 1;
          else return 0;
        };
        break;

      case Order.Desc:
        sortFunc = (a: Survey, b: Survey) => {
          if (a.institute.id > b.institute.id) return -1;
          else if (a.institute.id < b.institute.id) return 1;
          else return 0;
        };
        break;

      default:
        break;
    }

    return (d: PollData) => {
      return {
        parliaments: d.parliaments,
        institutes: d.institutes,
        taskers: d.taskers,
        parties: d.parties,
        surveys: d.surveys.sort(sortFunc),
      } as PollData;
    };
  }

  export function byName(order: Order = Order.Asc): (data: PollData) => PollData {
    let sortFunc: (a: Survey, b: Survey) => number;
    switch (order) {
      case Order.Asc:
        sortFunc = (a: Survey, b: Survey) => {
          if (a.institute.name < b.institute.name) return -1;
          else if (a.institute.name > b.institute.name) return 1;
          else return 0;
        };
        break;

      case Order.Desc:
        sortFunc = (a: Survey, b: Survey) => {
          if (a.institute.name > b.institute.name) return -1;
          else if (a.institute.name < b.institute.name) return 1;
          else return 0;
        };
        break;

      default:
        break;
    }

    return (d: PollData) => {
      return {
        parliaments: d.parliaments,
        institutes: d.institutes,
        taskers: d.taskers,
        parties: d.parties,
        surveys: d.surveys.sort(sortFunc),
      } as PollData;
    };
  }
}

export namespace Parliament {
  export function byID(order: Order = Order.Asc): (data: PollData) => PollData {
    let sortFunc: (a: Survey, b: Survey) => number;
    switch (order) {
      case Order.Asc:
        sortFunc = (a: Survey, b: Survey) => {
          if (a.parliament.id < b.parliament.id) return -1;
          else if (a.parliament.id > b.parliament.id) return 1;
          else return 0;
        };
        break;

      case Order.Desc:
        sortFunc = (a: Survey, b: Survey) => {
          if (a.parliament.id > b.parliament.id) return -1;
          else if (a.parliament.id < b.parliament.id) return 1;
          else return 0;
        };
        break;

      default:
        break;
    }

    return (d: PollData) => {
      return {
        parliaments: d.parliaments,
        institutes: d.institutes,
        taskers: d.taskers,
        parties: d.parties,
        surveys: d.surveys.sort(sortFunc),
      } as PollData;
    };
  }

  export function byShortcut(order: Order = Order.Asc): (data: PollData) => PollData {
    let sortFunc: (a: Survey, b: Survey) => number;
    switch (order) {
      case Order.Asc:
        sortFunc = (a: Survey, b: Survey) => {
          if (a.parliament.shortcut < b.parliament.shortcut) return -1;
          else if (a.parliament.shortcut > b.parliament.shortcut) return 1;
          else return 0;
        };
        break;

      case Order.Desc:
        sortFunc = (a: Survey, b: Survey) => {
          if (a.parliament.shortcut > b.parliament.shortcut) return -1;
          else if (a.parliament.shortcut < b.parliament.shortcut) return 1;
          else return 0;
        };
        break;

      default:
        break;
    }

    return (d: PollData) => {
      return {
        parliaments: d.parliaments,
        institutes: d.institutes,
        taskers: d.taskers,
        parties: d.parties,
        surveys: d.surveys.sort(sortFunc),
      } as PollData;
    };
  }

  export function byName(order: Order = Order.Asc): (data: PollData) => PollData {
    let sortFunc: (a: Survey, b: Survey) => number;
    switch (order) {
      case Order.Asc:
        sortFunc = (a: Survey, b: Survey) => {
          if (a.parliament.name < b.parliament.name) return -1;
          else if (a.parliament.name > b.parliament.name) return 1;
          else return 0;
        };
        break;

      case Order.Desc:
        sortFunc = (a: Survey, b: Survey) => {
          if (a.parliament.name > b.parliament.name) return -1;
          else if (a.parliament.name < b.parliament.name) return 1;
          else return 0;
        };
        break;

      default:
        break;
    }

    return (d: PollData) => {
      return {
        parliaments: d.parliaments,
        institutes: d.institutes,
        taskers: d.taskers,
        parties: d.parties,
        surveys: d.surveys.sort(sortFunc),
      } as PollData;
    };
  }

  export function byElection(order: Order = Order.Asc): (data: PollData) => PollData {
    let sortFunc: (a: Survey, b: Survey) => number;
    switch (order) {
      case Order.Asc:
        sortFunc = (a: Survey, b: Survey) => {
          if (a.parliament.election < b.parliament.election) return -1;
          else if (a.parliament.election > b.parliament.election) return 1;
          else return 0;
        };
        break;

      case Order.Desc:
        sortFunc = (a: Survey, b: Survey) => {
          if (a.parliament.election > b.parliament.election) return -1;
          else if (a.parliament.election < b.parliament.election) return 1;
          else return 0;
        };
        break;

      default:
        break;
    }

    return (d: PollData) => {
      return {
        parliaments: d.parliaments,
        institutes: d.institutes,
        taskers: d.taskers,
        parties: d.parties,
        surveys: d.surveys.sort(sortFunc),
      } as PollData;
    };
  }
}

export function byRelease(order: Order = Order.Asc): (data: PollData) => PollData {
  let sortFunc: (a: Survey, b: Survey) => number;
  switch (order) {
    case Order.Asc:
      sortFunc = (a: Survey, b: Survey) => {
        if (a.release < b.release) return -1;
        else if (a.release > b.release) return 1;
        else return 0;
      };
      break;

    case Order.Desc:
      sortFunc = (a: Survey, b: Survey) => {
        if (a.release > b.release) return -1;
        else if (a.release < b.release) return 1;
        else return 0;
      };
      break;

    default:
      break;
  }

  return (d: PollData) => {
    return {
      parliaments: d.parliaments,
      institutes: d.institutes,
      taskers: d.taskers,
      parties: d.parties,
      surveys: d.surveys.sort(sortFunc),
    } as PollData;
  };
}

export function byParticipants(order: Order = Order.Asc): (data: PollData) => PollData {
  let sortFunc: (a: Survey, b: Survey) => number;
  switch (order) {
    case Order.Asc:
      sortFunc = (a: Survey, b: Survey) => {
        if (a.participants < b.participants) return -1;
        else if (a.participants > b.participants) return 1;
        else return 0;
      };
      break;

    case Order.Desc:
      sortFunc = (a: Survey, b: Survey) => {
        if (a.participants > b.participants) return -1;
        else if (a.participants < b.participants) return 1;
        else return 0;
      };
      break;

    default:
      break;
  }

  return (d: PollData) => {
    return {
      parliaments: d.parliaments,
      institutes: d.institutes,
      taskers: d.taskers,
      parties: d.parties,
      surveys: d.surveys.sort(sortFunc),
    } as PollData;
  };
}

export function allResults(order: Order = Order.Asc): (data: PollData) => PollData {
  let sortFunc: (a: SurveyResult, b: SurveyResult) => number;
  switch (order) {
    case Order.Asc:
      sortFunc = (a: SurveyResult, b: SurveyResult) => {
        if (a.result < b.result) return -1;
        else if (a.result > b.result) return 1;
        else return 0;
      };
      break;

    case Order.Desc:
      sortFunc = (a: SurveyResult, b: SurveyResult) => {
        if (a.result > b.result) return -1;
        else if (a.result < b.result) return 1;
        else return 0;
      };
      break;

    default:
      break;
  }

  return (d: PollData) => {
    d.surveys.forEach((survey) => {
      survey.results.sort(sortFunc);
    });

    return d;
  };
}
