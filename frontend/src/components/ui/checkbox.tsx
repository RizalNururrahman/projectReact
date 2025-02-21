import React from "react";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";

interface CheckboxComponentProps {
  checked?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
  label?: string;
}

const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  checked,
  onChange,
  label,
}) => {
  return (
    <Checkbox checked={checked} onChange={onChange}>
      {label}
    </Checkbox>
  );
};

export default CheckboxComponent;
