import styled from '@emotion/styled'
import { Box, Typography, Button } from '@mui/material'
import { ReactComponent as StepOne } from 'assets/svg/stepone.svg'
import Input from 'components/Input'
import { useState } from 'react'

const InputTitle = styled(Typography)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #80829f;
`

export default function CreateStepOne() {
  const [eventvalue] = useState('')
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
        <StepOne />
      </Box>
      <Box sx={{ pt: '40px' }}>
        <InputTitle sx={{ mb: '10px' }}>Event title</InputTitle>
        <Input value={eventvalue} maxWidth="866px" height="40px" />
        <InputTitle sx={{ mt: '17px', mb: '10px' }}>About product</InputTitle>
        <Input value={eventvalue} multiline rows={12} height="303px" maxWidth="866px" />
      </Box>
      <Box sx={{ mt: '30px', maxWidth: '866px', position: 'relative' }}>
        {/* <Button sx={{ width: '200px', height: '40px', border: '1px solid #0049C6' }}>BACK</Button> */}
        <Button
          variant="contained"
          sx={{
            position: 'absolute',
            right: 0,
            width: '200px',
            height: '40px',
            background: ' #0049C6',
            color: '#FFFFFF'
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  )
}
