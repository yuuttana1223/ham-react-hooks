import { memo } from "react";

export const OperationLog = memo(
  ({ operationLog: { description, operatedAt } }) => {
    return (
      <>
        <tr>
          <td>{description}</td>
          <td>{operatedAt}</td>
        </tr>
      </>
    );
  }
);
