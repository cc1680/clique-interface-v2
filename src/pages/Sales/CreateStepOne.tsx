import styled from '@emotion/styled'
import { Box, Typography, Button } from '@mui/material'
import { useState, ChangeEvent } from 'react'

import Input from 'components/Input'

const InputTitle = styled(Typography)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '14px',
  color: ' #80829f',
  lineHeight: '16px',
  marginBottom: '10px'
}))

function CreateStepOne({
  onValueChange
}: {
  onValueChange: (StepOneData: { inputValue: string; TextareaValue: string }) => void
}) {
  const [inputValue, setInputValue] = useState('')
  const InputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const [TextareaValue, setTextareaValue] = useState('')
  const TextareaChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextareaValue(event.target.value)
  }
  const NextStep = () => {
    const StepOneValue = {
      inputValue,
      TextareaValue
    }
    onValueChange(StepOneValue)
  }

  const InputStyle = {
    maxWidth: '866px',
    height: '40px',
    backgroundColor: 'transparent',
    border: '1px solid #D4D7E2'
  }
  const TextareaStyle = {
    maxWidth: '866px',
    height: '303px',
    backgroundColor: 'transparent',
    paddingRight: '20px',
    border: '1px solid #D4D7E2'
  }
  return (
    <>
      <Box sx={{ mt: '40px' }}>
        <InputTitle>Event title</InputTitle>
        <Input value={inputValue} onChange={InputChange} style={InputStyle} />
      </Box>
      <Box sx={{ mt: '17px' }}>
        <InputTitle>About product</InputTitle>
        <Input value={TextareaValue} onChange={TextareaChange} style={TextareaStyle} rows={12} multiline />
      </Box>
      <Box sx={{ mt: '30px', position: 'relative' }}>
        <Button
          variant="contained"
          onClick={NextStep}
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
    </>
  )
}

export default CreateStepOne
