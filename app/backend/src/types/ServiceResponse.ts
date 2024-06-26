export type ServiceMessage = { message: string };

type ServiceResponseErrorType = 'BAD_REQUEST' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'CONFLICT';

export type CreatedMatch = {
  id: number,
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress: boolean,
};

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: ServiceMessage
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL',
  data: T
};

export type ServiceResponseToken = {
  status: 'SUCCESSFUL',
  data: { token: string }
};

export type ServiceResponseRole = {
  status: 'SUCCESSFUL',
  data: { role: string }
};

export type ServiceResponseFinished = {
  status: 'SUCCESSFUL',
  data: { message: string }
};

export type ServiceResponseCreated = {
  status: 'SUCCESSFUL',
  data: CreatedMatch
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
