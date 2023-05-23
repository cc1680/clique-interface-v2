import { Box, Typography, styled } from '@mui/material'
import CreateStepOne from './CreateStepOne'
import { ReactComponent as StepOne } from 'assets/svg/stepone.svg'
import { ReactComponent as StepTwo } from 'assets/svg/steptwo.svg'
import CreateStepTwo from './CreateStepTwo'
import { useState } from 'react'

const PageTitle = styled(Typography)(() => ({
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: ' 30px',
  lineHeight: '20px',
  color: '#3F5170'
}))

const Row = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between'
}))

export default function Index() {
  const [CreateStep, SetCreateStep] = useState<boolean>(false)
  const getStepOneValue = (StepOneData: { inputValue: string; TextareaValue: string }) => {
    if (!!StepOneData.inputValue && !!StepOneData.TextareaValue) {
      console.log(StepOneData)
      SetCreateStep(true)
    } else {
      console.log('error')
    }
  }
  const backLastStep = (Back: boolean) => {
    SetCreateStep(Back)
  }
  return (
    <Box
      sx={{
        maxWidth: '1440px',
        padding: '55px 127px 0 123px'
      }}
    >
      <Row>
        <PageTitle>Create Discount Sales</PageTitle>
        {!CreateStep ? <StepOne /> : <StepTwo />}
      </Row>
      <Box sx={{ maxWidth: '866px' }}>
        <Box>
          {!CreateStep ? (
            <CreateStepOne onValueChange={getStepOneValue} />
          ) : (
            <CreateStepTwo StepChange={backLastStep} />
          )}
        </Box>
      </Box>
    </Box>
  )
}
