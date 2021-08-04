import { Optional } from "core/types/CommonTypes";
import "./index.scss";

interface IProps {
  value: Optional<string | number>;
  label: string;
}
export default function HeaderLabel(props: IProps) {
  return (
    <div className="header-label-container">
      <p className="value">{props.value}</p>
      <p className="label">{props.label}</p>
    </div>
  );
}
