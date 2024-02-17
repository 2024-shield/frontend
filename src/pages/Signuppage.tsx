import styled from 'styled-components';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import "../styles/style.css";
import Selectbox from '../components/Selectbox';
import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';


interface Option {
    value: string;
    name: string;
  }
  

const SignuppageStyle = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;
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

const H5Style = styled.h5`
    margin: 5px 0px;
    font-size: 13px;
`

const InputStyle = styled.input`
    width: 300px;
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
    width: 300px;
    height: 35px;
    display: flex;
    align-items: center;
    margin: 10px 0px;
`

const PwdivStyle = styled.div`
`

const DepartmentdivStyle = styled.div`
`

const AreadivStyle = styled.div`
  width: 300px;
`

const PhonedivStyle = styled.div`
`

const TitleStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState<string>("");
    const [id, setId] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordcheck, setPasswordcheck] = useState<string>("");
    const [department, setDepartment] = useState<string>("");
    const [area, setArea] = useState<string>("서울특별시 용산구");
    const [phonenumber, setPhonenumber] = useState<string>("");

    const [IdConfirm, setIdConfirm] = useState<boolean>(true);
    
    const user = {
      name: name/* 이름 입력 값 */,
      userId: id/* 아이디 입력 값 */,
      password: password/* 비밀번호 입력 값 */,
      passwordCheck: passwordcheck,
      department: department/* 소속 입력 값 */,
      area: area/* 관할구역 선택 값 */,
      phoneNo: phonenumber/* 연락처 입력 값 */
  };

    const onSignup = () => {
        // navigate("/")
        axios.post('http://localhost:8080/api/join', user)
        .then(response => {
            console.log(response.data);
            navigate("/") // 회원가입 후 페이지 이동
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    const idCheck = () => {
      axios.get(`http://localhost:8080/api/check/id?userId=${id}`)
      .then(response => {
        setIdConfirm(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
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
    <div className="Signuppage">
      <SignuppageStyle>
        <h3 id="page_title">회원가입</h3>

        <InputboxStyle>
          <NamedivStyle>
              <H5Style>이름</H5Style> 
              <InputStyle onChange={e => setName(e.target.value)}/>
          </NamedivStyle>

          <IDdivStyle>
              <TitleStyle>
                <H5Style>아이디</H5Style>
                {!IdConfirm && <h6>아이디가 중복입니다</h6>}  
              </TitleStyle>
              <InputButtonStyle>
                  <InputStyle onChange={e => setId(e.target.value)} type='text'/>
                  <Button text="중복 확인" length="short" onClick={idCheck} />
              </InputButtonStyle>
          </IDdivStyle>

          <PwdivStyle>
              <H5Style>비밀번호</H5Style>
              <InputStyle onChange={e => setPassword(e.target.value)} type='password'/>
              <H5Style>비밀번호 확인</H5Style>
              <InputStyle onChange={e => setPasswordcheck(e.target.value)} type='password'/>
          </PwdivStyle>

          <DepartmentdivStyle>
              <H5Style>소속</H5Style>
              <InputStyle onChange={e => setDepartment(e.target.value)}/>
          </DepartmentdivStyle>

          <AreadivStyle>
              <H5Style>관할구역</H5Style>
              <SelectStyle>
              <Selectbox
                  docityselected={docityselected}
                  doChange={doChange}
                  docityfilteredOptions={docityfilteredOptions}
                  doChangeSecondSelect={doChangeSecondSelect}/>
              </SelectStyle>
          </AreadivStyle>

          <PhonedivStyle>
              <H5Style>연락처</H5Style>
              <InputStyle onChange={e => setPhonenumber(e.target.value)}/>
          </PhonedivStyle>

          <Button text="가입하기" onClick={onSignup}/>
        </InputboxStyle>
      </SignuppageStyle>
    </div>
  )
}

export default Signup;