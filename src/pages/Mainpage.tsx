import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import { styled } from 'styled-components';
import Header from '../components/Header';
import Map from '../components/Map';
import Selectbox from '../components/Selectbox';

interface Option {
  value: string;
  name: string;
}

const InfomationStyle = styled.div`
  height: 100%;
`

const InfoTextStyle = styled.div`
  height: 10vh;
  border: 1px solid #101957;
  padding: 10px 0px;
  margin: 2vh;
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
        <InfomationStyle>
          <InfoTextStyle>

          </InfoTextStyle>

        </InfomationStyle>
        <div className='map'>
            <Map lat={latitudeselected} lng={longitudeselected} />
        </div>
    </div>
  );
};

export default Main;
