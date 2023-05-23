import {
  Box,
  Typography,
  Button,
  styled,
  Select,
  MenuItem,
  SelectChangeEvent,
  ToggleButtonGroup,
  ToggleButton,
  Link,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'

import { ReactComponent as Timeicon } from 'assets/svg/timeicon.svg'
import Input from 'components/Input'
import SwitchBtn from 'components/Switch'
import { useState, ChangeEvent } from 'react'

const InputTitle = styled(Typography)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  color: '#80829F',
  whiteSpace: 'nowrap',
  marginBottom: '10px',
  lineHeight: '16px'
}))
const InputTypeTxt = styled(Typography)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  color: '#80829F',
  whiteSpace: 'nowrap',
  lineHeight: '16px'
}))
const Title = styled(Typography)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '20px',
  color: '#3F5170',
  whiteSpace: 'nowrap'
}))
const InputHintStyle = styled(Typography)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
  color: '#B5B7CF',
  whiteSpace: 'nowrap'
}))

const Row = styled(Box)(() => ({
  width: '100%',
  maxWidth: '866px',
  display: 'flex',
  justifyContent: 'space-between'
}))

const InputBox = styled(Box)(() => ({
  boxSizing: 'border-box',
  display: 'flex',
  border: '1px solid #D4D7E2',
  borderRadius: '8px',
  height: '40px',
  alignItems: 'center'
}))

const VerticalBar = styled(Box)(() => ({
  width: '0px',
  height: '19.5px',
  border: '1px solid #D4D7E2'
}))
const JButton = styled(Button)(() => ({
  width: '200px',
  height: '40px'
}))

export default function CreateStepTwo({ StepChange }: { StepChange: (Back: boolean) => void }) {
  const inputStyle = {
    height: '40px',
    backgroundColor: 'transparent',
    border: 'none',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '16px',
    color: '#3F5170'
  }
  const [inputValue, setInputValue] = useState('108')
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const [SwitchState, setSwitchState] = useState(false)
  const SwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSwitchState(event.target.checked)
  }
  const LastStep = () => {
    StepChange(false)
  }
  return (
    <>
      <Box sx={{ maxWidth: '866px' }}>
        <Row sx={{ mt: '40px' }}>
          <Box>
            <InputTitle>Select Network</InputTitle>
            <SelectComponent width={413} />
          </Box>
          <Box>
            <InputTitle>Sale Token</InputTitle>
            <SelectComponent width={413} />
          </Box>
        </Row>
        <Row sx={{ mt: '20px' }}>
          <Box>
            <Row>
              <InputTitle>Sale amount</InputTitle>
              <InputTitle>Balance: 200,000 RAI</InputTitle>
            </Row>
            <InputBox sx={{ width: '413px' }}>
              <Input value={inputValue} onChange={handleInputChange} style={inputStyle} />
              <InputTypeTxt sx={{ padding: '0 10px', lineHeight: '20px' }}>RAI</InputTypeTxt>
            </InputBox>
          </Box>
          <Box>
            <InputTitle>Receiving Token</InputTitle>
            <Box>
              <SelectComponent width={413} />
            </Box>
          </Box>
        </Row>
        <Box sx={{ mt: '20px' }}>
          <InputTitle>Price</InputTitle>
          <Title>{'1 RAI = 0.01 STPT    /   1 STPT = 100 RAI'}</Title>
          <Row sx={{ mt: '20px', mb: '10px' }}>
            <InputTypeTxt sx={{ pt: '4px' }}>Set sale price</InputTypeTxt>
            <ToggleButtn />
          </Row>
          <InputBox>
            <InputTypeTxt sx={{ padding: '0 68px 0 17px ' }}>Unit price</InputTypeTxt>
            <VerticalBar />
            <Input value={inputValue} onChange={handleInputChange} style={inputStyle} />
            <InputHintStyle sx={{ pr: '18px' }}>STPT</InputHintStyle>
          </InputBox>
        </Box>
        <Box sx={{ mt: '20px' }}>
          <Row>
            <Box sx={{ width: '50%' }}>
              <InputTitle>Sale price</InputTitle>
              <Title>{'1 RAI = 0.008 STPT'}</Title>
            </Box>
            <Box sx={{ width: '50%' }}>
              <InputTitle>Discount</InputTitle>
              <Title>{'- 20%'}</Title>
            </Box>
          </Row>
          <Row sx={{ mt: '20px', mb: '10px' }}>
            <InputTypeTxt sx={{ pt: '4px' }}>Method of sales</InputTypeTxt>
            <ToggleButtn />
          </Row>
          <InputBox>
            <Box sx={{ maxWidth: '289px', width: '100%' }}>
              <InputTypeTxt sx={{ padding: '12px 0 12px 17px ' }}>One-time purchase</InputTypeTxt>
            </Box>
            <VerticalBar />
            <Row sx={{ maxWidth: '289px' }}>
              <Input value={inputValue} onChange={handleInputChange} style={inputStyle} />
              <InputHintStyle sx={{ padding: '11px 20px 9px 0' }}>RAI</InputHintStyle>
            </Row>
            <VerticalBar />
            <Box sx={{ maxWidth: '288px' }}>
              <Input
                value={''}
                onChange={handleInputChange}
                style={{
                  height: '40px',
                  width: '280px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '16px',
                  color: '#3F5170'
                }}
                placeholderSize="13px"
                placeholder="Total share: 2,000.  200 STPT/share"
              />
            </Box>
          </InputBox>
          <InputBox sx={{ mt: '10px' }}>
            <Box sx={{ maxWidth: '289px', width: '100%' }}>
              <InputTypeTxt sx={{ padding: '12px 0 12px 17px ' }}>Purchase limit</InputTypeTxt>
            </Box>

            <VerticalBar />
            <Row sx={{ maxWidth: '285px', width: '100%' }}>
              <InputHintStyle sx={{ padding: '11px 0  9px 20px ' }}>Min</InputHintStyle>
              <Input value={inputValue} onChange={handleInputChange} style={inputStyle} />
              <InputHintStyle sx={{ padding: '11px 20px 9px 0' }}>RAI</InputHintStyle>
            </Row>
            <VerticalBar
              sx={{
                width: '10px',
                border: '1px solid #D4D7E2',
                height: '0'
              }}
            />
            <Row sx={{ maxWidth: '280px' }}>
              <InputHintStyle sx={{ padding: '11px 0  9px 20px ' }}>Max</InputHintStyle>
              <Input value={inputValue} onChange={handleInputChange} style={inputStyle} />
              <InputHintStyle sx={{ padding: '11px 18px 9px 0' }}>RAI</InputHintStyle>
            </Row>
          </InputBox>
          <Box sx={{ mt: '20px', display: 'flex' }}>
            <InputTitle sx={{ mr: '14px' }}>Whitelist</InputTitle>
            <SwitchBtn checked={SwitchState} onChange={SwitchChange} />
          </Box>
          <Row
            sx={{
              boxSizing: 'border-box',
              maxwidth: '866px',
              height: '82px',
              background: '#F8FBFF',
              border: ' 1px solid #D4D7E2',
              borderRadius: '8px',
              alignItems: 'center'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                ml: '36px'
              }}
            >
              <Typography variant="h6" lineHeight="20px" color="#0049C6">
                0
              </Typography>

              <Typography variant="h6" lineHeight="20px" color="#3F5170">
                &nbsp;{' address(s), Download this'}&nbsp;
              </Typography>

              <Link href="#" variant="h6" lineHeight="20px" color="#0049C6">
                {' Reference template.'}
              </Link>
            </Box>
            <Button
              variant="outlined"
              sx={{
                boxSizing: 'border-box',
                width: '200px',
                height: '40px',
                background: '#FFFFFF',
                border: '1px solid #0049C6',
                borderRadius: '8px',
                color: '#0049C6',
                mr: '24px'
              }}
            >
              Upload file
            </Button>
          </Row>
        </Box>
        <Box sx={{ mt: '20px' }}>
          <InputTypeTxt sx={{ mb: '10px' }}>Event time</InputTypeTxt>
          <Row>
            <InputBox width="413px">
              <Box sx={{ display: 'flex', alignItems: 'center', pl: '14px' }}>
                <Timeicon />
                <InputTypeTxt sx={{ pl: '8px', lineHeight: '20px' }}>Start time</InputTypeTxt>
                <VerticalBar sx={{ ml: '46px' }} />
              </Box>
            </InputBox>
            <VerticalBar
              sx={{
                mt: '20px',
                width: '10px',
                border: '1px solid #D4D7E2',
                height: '0'
              }}
            />
            <InputBox width="413px">
              <Box sx={{ display: 'flex', alignItems: 'center', pl: '14px' }}>
                <Timeicon />
                <InputTypeTxt sx={{ pl: '8px', lineHeight: '20px' }}>End time</InputTypeTxt>
                <VerticalBar sx={{ ml: '46px' }} />
              </Box>
            </InputBox>
          </Row>
        </Box>
        <Box sx={{ mt: '20px' }}>
          <InputTypeTxt sx={{ mb: '10px' }}>Tokens locked type</InputTypeTxt>
          <SelectComponent width={866} />
        </Box>
        <Box sx={{ mt: '19px' }}>
          <Row>
            <Box>
              <InputTypeTxt sx={{ mb: '10px' }}>Locked token ratio</InputTypeTxt>
              <InputBox sx={{ width: '263px', pr: '10px' }}>
                <Input value={inputValue} onChange={handleInputChange} style={inputStyle} />
                <InputHintStyle>%</InputHintStyle>
              </InputBox>
            </Box>
            <Box>
              <InputTypeTxt sx={{ mb: '10px' }}>Locked days</InputTypeTxt>
              <InputBox sx={{ width: '263px', pr: '10px' }}>
                <Input value={inputValue} onChange={handleInputChange} style={inputStyle} />
                <InputHintStyle>Days</InputHintStyle>
              </InputBox>
            </Box>
            <Box>
              <InputTypeTxt sx={{ mb: '10px' }}>Unlock period</InputTypeTxt>
              <InputBox sx={{ width: '263px', pr: '10px' }}>
                <Input value={inputValue} onChange={handleInputChange} style={inputStyle} />
              </InputBox>
            </Box>
          </Row>
        </Box>
        <Box sx={{ mt: '20px' }}>
          <Tablee />
        </Box>
        <Row sx={{ mt: '30px', mb: '50px' }}>
          <JButton sx={{ border: '1px solid #0049C6' }} onClick={LastStep}>
            BACK
          </JButton>
          <JButton
            variant="contained"
            sx={{
              right: 0,
              background: ' #0049C6',
              color: '#FFFFFF'
            }}
          >
            Public
          </JButton>
        </Row>
      </Box>
    </>
  )
}
function SelectComponent({ width }: { width: number }) {
  const CustomSelect = styled(Select)(() => ({
    height: 40,
    width: width,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    color: '#3F5170',
    '& fieldset': {
      border: '1px solid #D4D7E2'
    }
  }))
  const optionStyle = {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    color: '#3F5170'
  }
  const [selectedValue, setselectedValue] = useState('option1')
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setselectedValue(event.target.value as string)
  }
  return (
    <CustomSelect labelId="select-label" id="select" value={selectedValue} onChange={handleChange}>
      <MenuItem value="option1" sx={optionStyle}>
        ABC
      </MenuItem>
      <MenuItem value="option2" sx={optionStyle}>
        ABC
      </MenuItem>
      <MenuItem value="option3" sx={optionStyle}>
        ABC
      </MenuItem>
    </CustomSelect>
  )
}
function ToggleButtn() {
  const toggleButtonStyle = {
    padding: '0',
    width: '150px',
    height: '20px',
    border: 'none',
    borderRadius: '48px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px'
  }
  const toggleTrueStyle = {
    padding: '0',
    width: '150px',
    height: '20px',
    background: '#0049C6',
    color: '#fff',
    border: '1px solid #97B7EF',
    borderRadius: '48px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px'
  }
  const [alignment, setAlignment] = useState(true)

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: boolean) => {
    setAlignment(newAlignment)
  }
  return (
    <ToggleButtonGroup
      sx={{
        width: '300px',
        boxSizing: 'border-box',
        height: '20px',
        border: ' 1px solid #D4D7E2',
        borderRadius: ' 48px'
      }}
      color="primary"
      exclusive
      onChange={handleChange}
    >
      <ToggleButton
        sx={{ boxSizing: 'border-box' }}
        value={true}
        style={alignment ? toggleTrueStyle : toggleButtonStyle}
      >
        Unit price
      </ToggleButton>
      <ToggleButton
        sx={{ boxSizing: 'border-box' }}
        value={false}
        style={!alignment ? toggleTrueStyle : toggleButtonStyle}
      >
        Package price
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

function Tablee() {
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      padding: 0,
      height: '31px',
      backgroundColor: '#F8FBFF',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '18px',
      textAlign: 'center',
      color: '#3F5170',
      border: 'none',
      borderLeft: '1px solid #D4D7E2'
    },
    [`&.${tableCellClasses.head}.firstColumn`]: {
      borderLeft: 'none'
    },
    [`&.${tableCellClasses.body}`]: {
      padding: 0,
      height: '30px',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '18px',
      textAlign: 'center',
      color: '#3F5170'
    }
  }))

  const StyledTableRow = styled(TableRow)(() => ({
    '& td': {
      borderTop: '1px solid #D4D7E2',
      borderLeft: '1px solid #D4D7E2',
      height: '31px'
    },
    '& td:first-of-type': {
      borderLeft: 'none'
    },
    '&:last-child td': {
      borderBottom: 'none'
    }
  }))

  const rows = [
    { Number: 1, days: 10, quota: '10%' },
    { Number: 2, days: 10, quota: '10%' },
    { Number: 3, days: 10, quota: '10%' },
    { Number: 4, days: 10, quota: '10%' }
  ]

  return (
    <TableContainer sx={{ border: '1px solid #D4D7E2', borderRadius: '8px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell className="firstColumn">Number</StyledTableCell>
            <StyledTableCell>Number of days</StyledTableCell>
            <StyledTableCell>Release quota</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.Number}>
              <StyledTableCell>{row.Number}</StyledTableCell>
              <StyledTableCell>{row.days}</StyledTableCell>
              <StyledTableCell>{row.quota}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
