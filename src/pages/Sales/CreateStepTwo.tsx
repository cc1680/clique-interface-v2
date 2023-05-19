import {
  Box,
  Typography,
  Button,
  styled,
  Select,
  MenuItem,
  SelectChangeEvent,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material'
import { ReactComponent as StepTwo } from 'assets/svg/steptwo.svg'
import Input from 'components/Input'

import { useState } from 'react'

const InputTitle = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #80829f;
  margin-bottom: 10px;
  white-space: 'nowrap';
`
const Row = styled(Box)(() => ({
  width: '100%',
  maxWidth: '866px',
  display: 'flex',
  justifyContent: 'space-between'
}))

const InputBox = styled(Box)(() => ({
  display: 'flex',
  border: '1px solid #D4D7E2',
  borderRadius: '8px',
  height: '40px'
}))

const InputTypeTxt = styled(Typography)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  color: '#80829F',
  whiteSpace: 'nowrap'
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

const VerticalBar = styled(Box)(() => ({
  width: '0px',
  height: '19.5px',
  border: '1px solid #D4D7E2'
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

export default function CreateStepTwo() {
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
  const [amountValue] = useState('108')

  return (
    <Box
      sx={{
        maxWidth: '1440px',
        padding: '55px 127px 0 123px'
      }}
    >
      <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <Typography sx={{ color: '#3F5170', width: '321px', fontFamily: 'Inter', fontWeight: 600, fontSize: 30 }}>
          Create Discount Sales
        </Typography>
        <StepTwo />
      </Box>
      <Box sx={{ maxWidth: '866px' }}>
        <Row sx={{ mt: '40px' }}>
          <Box>
            <InputTitle>Select Network</InputTitle>
            <SelectComponent />
          </Box>
          <Box>
            <InputTitle>Sale Token</InputTitle>
            <SelectComponent />
          </Box>
        </Row>
        <Row sx={{ mt: '20px' }}>
          <Box>
            <Row>
              <InputTitle>Sale amount</InputTitle>
              <InputTitle>Balance: 200,000 RAI</InputTitle>
            </Row>
            <InputBox sx={{ width: '413px' }}>
              <Input value={amountValue} style={inputStyle} />
              <InputTypeTxt sx={{ padding: '10px', lineHeight: '20px' }}>RAI</InputTypeTxt>
            </InputBox>
          </Box>
          <Box>
            <InputTitle>Receiving Token</InputTitle>
            <Box>
              <SelectComponent />
            </Box>
          </Box>
        </Row>
        <Box sx={{ mt: '20px' }}>
          <InputTitle>Price</InputTitle>
          <Title>{'1 RAI = 0.01 STPT    /   1 STPT = 100 RAI'}</Title>
          <Row sx={{ mt: '20px' }}>
            <InputTitle>Set sale price</InputTitle>
            <ToggleButtn />
          </Row>
          <InputBox>
            <InputTypeTxt sx={{ padding: '12px 68px 0 17px ', lineHeight: '16px' }}>Unit price</InputTypeTxt>
            <VerticalBar sx={{ mt: '12px' }} />
            <Input value={amountValue} style={inputStyle} />
            <InputHintStyle sx={{ padding: '10px 18px 10px 0' }}>STPT</InputHintStyle>
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
          <Row sx={{ mt: '24px' }}>
            <InputTitle>Method of sales</InputTitle>
            <ToggleButtn />
          </Row>
          <InputBox>
            <Box sx={{ maxWidth: '289px', width: '100%' }}>
              <InputTypeTxt sx={{ padding: '12px 0 12px 17px ', lineHeight: '16px' }}>One-time purchase</InputTypeTxt>
            </Box>
            <VerticalBar sx={{ mt: '11.5px' }} />
            <Row sx={{ maxWidth: '289px' }}>
              <Input value={amountValue} style={inputStyle} />
              <InputHintStyle sx={{ padding: '11px 20px 9px 0' }}>RAI</InputHintStyle>
            </Row>
            <VerticalBar sx={{ mt: '11.5px' }} />
            <Box sx={{ maxWidth: '288px' }}>
              <InputHintStyle sx={{ padding: '13px 18px 11px 30px', lineHeight: '16px' }}>
                {'Total share: 2,000.  200 STPT/share'}
              </InputHintStyle>
            </Box>
          </InputBox>
          <InputBox sx={{ mt: '10px' }}>
            <Box sx={{ maxWidth: '289px', width: '100%' }}>
              <InputTypeTxt sx={{ padding: '12px 0 12px 17px ', lineHeight: '16px' }}>Purchase limit</InputTypeTxt>
            </Box>

            <VerticalBar sx={{ mt: '11.5px' }} />
            <Row sx={{ maxWidth: '285px', width: '100%' }}>
              <InputHintStyle sx={{ padding: '11px 0  9px 20px ' }}>Min</InputHintStyle>
              <Input value={amountValue} style={inputStyle} />
              <InputHintStyle sx={{ padding: '11px 20px 9px 0' }}>RAI</InputHintStyle>
            </Row>
            <VerticalBar
              sx={{
                mt: '20px',
                width: '10px',
                border: '2px solid #D4D7E2',
                height: '0'
              }}
            />
            <Row sx={{ maxWidth: '280px' }}>
              <InputHintStyle sx={{ padding: '11px 0  9px 20px ' }}>Max</InputHintStyle>
              <Input value={amountValue} style={inputStyle} />
              <InputHintStyle sx={{ padding: '11px 18px 9px 0' }}>RAI</InputHintStyle>
            </Row>
          </InputBox>
          <Box sx={{ mt: '20px', display: 'flex' }}>
            <InputTitle>Whitelist</InputTitle>
          </Box>
        </Box>
        <Box sx={{ mt: '30px', display: 'flex', justifyContent: 'space-between' }}>
          <Button sx={{ width: '200px', height: '40px', border: '1px solid #0049C6' }}>BACK</Button>
          <Button
            variant="contained"
            sx={{
              right: 0,
              width: '200px',
              height: '40px',
              background: ' #0049C6',
              color: '#FFFFFF'
            }}
          >
            Public
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
function SelectComponent() {
  const selectStyle = {
    height: '40px',
    width: '413px'
    // border: '1px solid #D4D7E2'
  }
  const [selectedValue, setselectedValue] = useState('option1')
  const handleChange = (event: SelectChangeEvent) => {
    setselectedValue(event.target.value)
  }
  return (
    <Select style={selectStyle} labelId="select-label" id="select" value={selectedValue} onChange={handleChange}>
      <MenuItem value="option1">ABC</MenuItem>
      <MenuItem value="option2">ABC</MenuItem>
      <MenuItem value="option3">ABC</MenuItem>
    </Select>
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
  const [alignment, setAlignment] = useState('Unit')

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
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
      value={alignment}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton
        sx={{ boxSizing: 'border-box' }}
        value="Unit"
        style={alignment == 'Unit' ? toggleTrueStyle : toggleButtonStyle}
      >
        Unit price
      </ToggleButton>
      <ToggleButton
        sx={{ boxSizing: 'border-box' }}
        value="Package"
        style={alignment == 'Package' ? toggleTrueStyle : toggleButtonStyle}
      >
        Package price
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
