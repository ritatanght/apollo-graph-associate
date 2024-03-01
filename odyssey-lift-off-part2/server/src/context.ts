import { TrackAPI } from "./datasources/track-api";

export type DataSourceContext = {
  dataSources: {
    // we don't need to instantiate the class
    // this is enough to give our type definition the information about the methods and properties available
    trackAPI: TrackAPI;
  };
};
