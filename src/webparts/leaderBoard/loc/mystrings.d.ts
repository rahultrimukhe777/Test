declare interface ILeaderBoardWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'LeaderBoardWebPartStrings' {
  const strings: ILeaderBoardWebPartStrings;
  export = strings;
}
