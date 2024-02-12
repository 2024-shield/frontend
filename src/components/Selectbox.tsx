interface Option {
    value: string;
    name: string;
  }
  
  interface SelectboxProps {
    docityList: Option[];
    docityselected: string;
    doChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    docityfilteredOptions: Option[];
    doChangeSecondSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  
  const Selectbox: React.FC<SelectboxProps> = ({
    docityList,
    docityselected,
    doChange,
    docityfilteredOptions,
    doChangeSecondSelect,
  }) => {
    return (
      <>
        <select onChange={doChange} className='select' value={docityselected}>
          {docityList.map((item) => {
            return (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            );
          })}
        </select>
        {docityfilteredOptions && docityfilteredOptions.length > 0 && (
          <select onChange={doChangeSecondSelect} className='select'>
            {docityfilteredOptions.map((item, index) => {
              return (
                <option value={item.value} key={index}>
                  {item.name}
                </option>
              );
            })}
          </select>
        )}
      </>
    );
  };
  
  export default Selectbox;
  