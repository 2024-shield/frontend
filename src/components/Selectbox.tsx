import styled from 'styled-components';
import '../styles/style.css';

interface Option {
    value: string;
    name: string;
}
  
interface SelectboxProps {
    docityselected: string;
    doChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    docityfilteredOptions: Option[];
    doChangeSecondSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectboxStyle = styled.div`
  height: 4vh;
`;

const docityList: Option[] = [
    { value: 'Seoul', name: '서울특별시' },
    { value: 'Busan', name: '부산광역시' },
    { value: 'Daegu', name: '대구광역시' },
    { value: 'Incheon', name: '인천광역시' },
    { value: 'Gwangju', name: '광주광역시' },
    { value: 'Daejeon', name: '대전광역시' },
    { value: 'Ulsan', name: '울산광역시' },
    // { value: "Sejong", name: "세종특별자치시" },
    { value: 'Gyeonggi-do', name: '경기도' },
    { value: 'Gangwon-do', name: '강원도' },
    { value: 'Chungcheong-do', name: '충청도' },
    { value: 'Jeonla-do', name: '전라도' },
    { value: 'Gyeongsang-do', name: '경상도' },
    { value: 'Jeju', name: '제주' },
  ];
  
const Selectbox: React.FC<SelectboxProps> = ({
    docityselected,
    doChange,
    docityfilteredOptions,
    doChangeSecondSelect,
  }) => {
    return (
      <SelectboxStyle className='selectBox'>
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
      </SelectboxStyle>
    );
  };
  
  export default Selectbox;
  