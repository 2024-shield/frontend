import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import styled from 'styled-components';
import Header from "../components/Header";
import Map from "../components/Map";

interface Docity {
    do: string;
    name: string;
    longitude: number;
    latitude: number;
  }

interface Option{
    value: string,
    name: string
}

interface SelecBoxProps {
    options: Option[],
}

const SelectboxStyle = styled.div`
    color: red;
    height: 4vh;
`

const OPTIONS: Option[] = [
	{ value: "apple", name: "사과" },
	{ value: "banana", name: "바나나" },
	{ value: "orange", name: "오렌지" },
];

const SelectBox: React.FC<SelecBoxProps> = (props) => {
	return (
		<select>
			{props.options.map((option: Option) => (
				<option
					key={option.value}
					value={option.value}
				>
					{option.name}
				</option>
			))}
		</select>
	);
};


const Main = () => {
    const [options, setOptions] = useState<Option[]>([]);

    useEffect(() => {
        fetch('../../data/docity.xlsx')
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => {
            const data = new Uint8Array(arrayBuffer);
            const workbook = XLSX.read(data, {type: 'array'});

            // 첫 번째 시트를 가져옴
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];

            // 셀 데이터를 파싱하여 출력
            const jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1}) as any[][];
            console.log("데이터에유")

            const newOptions: Option[] = jsonData.map((row: any[]) => ({
                value: row[1],
                name: row[1],
            }));

            setOptions(newOptions);
            //console.log(jsonData[1][3]);
        })
        .catch(error => console.error('Error:', error));
    });

    return( 
    <div className="Mainpage">
        <Header />
        <SelectboxStyle>
            <SelectBox options={options}></SelectBox>
        </SelectboxStyle>
        <div className="map">
            <Map />
        </div>
    </div>

    )
}

export default Main;