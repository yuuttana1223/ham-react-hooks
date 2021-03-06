import { ADD_OPERATION_LOG, DELETE_ALL_OPERATION_LOGS } from "../actions";

export const operationLogsReducer = (operationLogs = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const operationLog = {
        description: action.description,
        operatedAt: action.operatedAt,
      };
      return [operationLog, ...operationLogs];
    case DELETE_ALL_OPERATION_LOGS:
      return [];
    default:
      return operationLogs;
  }
};
