import { Flex } from "shared";
import "./index.scss";

interface IProps {
  message:string;
}
export default function ContainerError(props:IProps) {
  return (
    <Flex
      width="100%"
      padding="16px"
      margin="24px 0px"
      justifyContent="center"
      className="error-container rounded"
    >
      <p>{props.message}</p>
    </Flex>
  );
}
