import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { styled } from 'styled-components';
import Header from '../components/Header';
import Map from '../components/Map';
import Selectbox from '../components/Selectbox';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

interface Option {
  value: string;
  name: string;
}

const InfoStyle = styled.div`
  height: 10vh;
  border: 3px solid #4350A7;
  padding: 10px 0px;
  margin: 2vh;
  display: flex;
  align-items: center;
`

const H4Style = styled.h4`
  color: #4350A7;
  margin: 0px 0px 0px 10px;
`

const InfoTextStyle = styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
`

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
        setlatitudeSelected(selectedRow[4]);
      }
    });
  };

  return (
    <div className='Mainpage'>
      <Header />
        <Selectbox
              docityselected={docityselected}
              doChange={doChange}
              docityfilteredOptions={docityfilteredOptions}
              doChangeSecondSelect={doChangeSecondSelect}/>

        <InfoStyle>
            <FontAwesomeIcon icon={faCircleInfo} style={{color: "#4350A7"}} size='2xl' id="iconinfo"/>
            
            <InfoTextStyle>
              {/* <FontAwesomeIcon icon={faFire} style={{color: "#4350A7"}}  size='xl' id="iconfire"/>
              <H4Style>클릭 시 화재 정보 확인 가능</H4Style> */}
              <H4Style>지도가 제대로 로드되지 않는다면</H4Style>
              <H4Style>새로고침을 진행해주세요</H4Style>
            </InfoTextStyle>
        </InfoStyle>

        <div className='map'>
            <Map lat={latitudeselected} lng={longitudeselected} />
        </div>
    </div>
  );
};

export default Main;
