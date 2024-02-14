import styled from 'styled-components';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import "../styles/style.css";
import Selectbox from '../components/Selectbox';
import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';


interface Option {
    value: string;
    name: string;
  }
  

const SignuppageStyle = styled.div`
    width: 100%;
    height: 100vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const InputboxStyle = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const PStyle = styled.p`
    margin: 5px 0px;
    font-size: 13px;
`

const InputStyle = styled.input`
    width: 360px;
    height: 40px;
    padding-left: 10px;
    margin: 5px 0px;
    border: 1px solid navy;
    border-radius: 3px;
`

const SelectStyle = styled.div`
`

const NamedivStyle = styled.div`
`

const IDdivStyle = styled.div`
    display: flex;
    flex-direction: column;
`

const InputButtonStyle = styled.div`
    width: 360px;
    height: 35px;
    display: flex;
    align-items: center;
    margin: 10px 0px;
`

const PwdivStyle = styled.div`
`

const BelongdivStyle = styled.div`
`

const AreadivStyle = styled.div`
  width: 100%;
`

const PhonedivStyle = styled.div`
`

const Signup = () => {
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate("/")
    }

  const [docityselected, setdocitySelected] = useState('Seoul');
  const [docityfilteredOptions, docitysetFilteredOptions] = useState<Option[]>([]);
  // const [longitudeselected, setlongitudeSelected] = useState(127.0495556);
  // const [latitudeselected, setlatitudeSelected] = useState(37.514575);

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

      // if (newFilteredOptions.length > 0) {
      //   const selectedRow = jsonData.find((row: any[]) => row[2] === newFilteredOptions[0].value);
      //   if (selectedRow) {
      //     setlongitudeSelected(selectedRow[3]);
      //     setlatitudeSelected(selectedRow[4]);
      //   }
      // }
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
        // setlongitudeSelected(selectedRow[3]);
        // setlatitudeSelected(selectedRow[4]);
      }
    });
  };
    
    return(
        <SignuppageStyle>
            <h3 id="page_title">회원가입</h3>

            <InputboxStyle>
                <NamedivStyle>
                    <PStyle>이름</PStyle> 
                    <InputStyle/>
                </NamedivStyle>

                <IDdivStyle>
                    <PStyle>아이디</PStyle>
                    <InputButtonStyle>
                        <InputStyle/>
                        <Button text="중복 확인" />
                    </InputButtonStyle>
                </IDdivStyle>

                <PwdivStyle>
                    <PStyle>비밀번호</PStyle>
                    <InputStyle/>
                    <PStyle>비밀번호 확인</PStyle>
                    <InputStyle/>
                </PwdivStyle>

                <BelongdivStyle>
                    <PStyle>소속</PStyle>
                    <InputStyle />
                </BelongdivStyle>

                <AreadivStyle>
                    <PStyle>관할구역</PStyle>
                    <SelectStyle>
                    <Selectbox
                        docityselected={docityselected}
                        doChange={doChange}
                        docityfilteredOptions={docityfilteredOptions}
                        doChangeSecondSelect={doChangeSecondSelect}/>
                    </SelectStyle>
                </AreadivStyle>

                <PhonedivStyle>
                    <PStyle>연락처</PStyle>
                    <InputStyle />
                </PhonedivStyle>

                <Button text="가입하기" onClick={onSubmit}/>
            </InputboxStyle>
        </SignuppageStyle>
    )
}

export default Signup;