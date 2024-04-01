import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Select, SelectProps, SelectPropsOptions } from "../select";

interface SelectSearchProps
  extends Omit<Omit<SelectProps, "options">, "searchValue"> {
  searchOptions: SelectPropsOptions[];
  setSearchOptions: Dispatch<SetStateAction<SelectPropsOptions[]>>;
}

export const SelectSearch = (props: SelectSearchProps) => {
  const { searchOptions, setSearchOptions } = props;
  const [searchValue, setSearchValue] = useState<string>("");
  const [originOptionList, setOriginOptionList] =
    useState<SelectPropsOptions[]>(searchOptions);

  useEffect(() => {
    setSearchOptions(
      originOptionList.filter((raw) => {
        return (
          raw.label.includes(searchValue) ||
          raw.value.toString().includes(searchValue)
        );
      })
    );
  }, [searchValue]);

  return (
    <Select
      {...props}
      isWithSearch={true}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      options={searchOptions}
    />
  );
};
