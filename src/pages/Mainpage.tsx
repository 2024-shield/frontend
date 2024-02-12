import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import styled from 'styled-components';
import Header from '../components/Header';
import Map from '../components/Map';
import Selectbox from '../components/Selectbox';
import '../styles/style.css';

interface Option {
  value: string;
  name: string;
}

const SelectboxStyle = styled.div`
  color: red;
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

const Main = () => {
  const [docityselected, setdocitySelected] = useState('Seoul');
  const [docityfilteredOptions, docitysetFilteredOptions] = useState<Option[]>([]);
  const [longitudeselected, setlongitudeSelected] = useState(127.0495556);
  const [latitudeselected, setlatitudeSelected] = useState(37.514575);

  const fetchData = async () => {
    try {
      const response = await fetch('../../data/docity.xlsx');
      const arrayBuffer = await response.arrayBuffer();
      const data = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      return XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as any[][];
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  };

  useEffect(() => {
    fetchData().then((jsonData) => {
      const newFilteredOptions: Option[] = jsonData
        .filter((row: any[]) => row[1] === docityselected)
        .map((row: any[]) => ({
          value: row[2],
          name: row[2],
        }));

      docitysetFilteredOptions(newFilteredOptions);

      if (newFilteredOptions.length > 0) {
        const selectedRow = jsonData.find((row: any[]) => row[2] === newFilteredOptions[0].value);
        if (selectedRow) {
          setlongitudeSelected(selectedRow[3]);
          setlatitudeSelected(selectedRow[4]);
        }
      }
    });
  }, [docityselected]);

  const doChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setdocitySelected(e.target.value);
  };

  const doChangeSecondSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelectedValue = e.target.value;

    fetchData().then((jsonData) => {
      const selectedRow = jsonData.find((row: any[]) => row[2] === newSelectedValue);
      if (selectedRow) {
        setlongitudeSelected(selectedRow[3]);
        console.log(selectedRow[3] + '이고요');
        setlatitudeSelected(selectedRow[4]);
        console.log(selectedRow[4] + '이고용');
      }
    });
  };

  return (
    <div className='Mainpage'>
      <Header />
      <SelectboxStyle className='selectBox'>
        <Selectbox 
          docityList={docityList} 
          docityselected={docityselected} 
          doChange={doChange} 
          docityfilteredOptions={docityfilteredOptions} 
          doChangeSecondSelect={doChangeSecondSelect} 
        />
      </SelectboxStyle>
      <div className='map'>
        <Map lat={latitudeselected} lng={longitudeselected} />
      </div>
    </div>
  );
};

export default Main;
