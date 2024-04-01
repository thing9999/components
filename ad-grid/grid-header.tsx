export interface GridHeaderProps {
  name: string;
  colspan?: number;
  $width?: string;
}

export const GridHeader = ({
  headerList,
}: {
  headerList: GridHeaderProps[];
}) => {
  return (
    <>
      <tr>
        {headerList.map((row) => (
          <th
            key={row.name}
            colSpan={row.colspan || 1}
            style={{ width: row.$width }}
          >
            {row.name}
          </th>
        ))}
      </tr>
    </>
  );
};
