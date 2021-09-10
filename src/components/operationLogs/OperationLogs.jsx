import { memo, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { OperationLog } from "./OperationLog";

export const OperationLogs = memo(() => {
  const {
    state: { operationLogs },
  } = useContext(AppContext);

  return (
    <>
      <h4>操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>日時</th>
          </tr>
        </thead>
        <tbody>
          {operationLogs.map((operationLog, index) => (
            <OperationLog key={index} operationLog={operationLog} />
          ))}
        </tbody>
      </table>
    </>
  );
});
