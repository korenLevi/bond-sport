import { FC } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

type PerPageProps = {
  pageSizeOptions: number[];
  perPage: number;
  onPageSizeChange: (size: number) => void;
};

export const PerPage: FC<PerPageProps> = ({
  pageSizeOptions,
  perPage,
  onPageSizeChange,
}) => {
  return (
    <div>
      <DropdownButton
        id="dropdown-basic-button"
        title={`Per Page: ${perPage}`}
      >
        {pageSizeOptions.map((option) => (
          <Dropdown.Item key={option} onClick={() => onPageSizeChange(option)}>
            {option}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};
