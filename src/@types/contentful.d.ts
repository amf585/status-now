// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";

export interface IStatusFields {
  /** Current Mood */
  currentMood: "Happy" | "Neutral" | "Sad" | "Angry" | "Stressed";

  /** Call Availability */
  callAvailability: "Anytime" | "Ask" | "Emergency Only";

  /** In Meeting */
  inMeeting?: boolean | undefined;

  /** Headphones On */
  headphonesOn?: boolean | undefined;

  /** End of Workday */
  endOfWorkday?: string | undefined;

  /** Note */
  note?: string | undefined;

  /** entryName */
  entryName: string;

  /** URL Key */
  urlKey: string;
}

/** Individual status entry */

export interface IStatus extends Entry<IStatusFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "status";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "status";

export type IEntry = IStatus;

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
