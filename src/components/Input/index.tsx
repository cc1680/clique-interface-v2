import React, { ChangeEvent, InputHTMLAttributes, useCallback, useMemo, useRef, useState } from 'react'
import { Box, InputBase, styled, Typography } from '@mui/material'
import { inputBaseClasses } from '@mui/material/InputBase'
import InputLabel from './InputLabel'
import { isURL } from 'utils/dao'
import { escapeRegExp, isAddress, isEmail } from 'utils'
import theme from 'theme'

export interface InputProps {
  placeholder?: string
  placeholderSize?: string
  value: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  label?: string
  disabled?: boolean
  focused?: boolean
  outlined?: boolean
  hideBorder?: boolean
  type?: string
  endAdornment?: React.ReactNode
  startAdornment?: React.ReactNode
  onEnter?: () => void
  maxWidth?: string | number
  height?: string | number
  error?: boolean
  smallPlaceholder?: boolean
  subStr?: string
  multiline?: boolean
  rows?: string | number
  rightLabel?: React.ReactNode
  errSet?: () => void
  userPattern?: string
  inputPaddingRight?: string
  onUserBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>) => void
}

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  [`&.${inputBaseClasses.root}`]: {
    fontSize: 16,
    color: theme.palette.text.primary,
    fontWeight: 600,
    backgroundColor: theme.bgColor.bg4,
    padding: '5px 0 5px 20px',
    borderRadius: 8
    // border: `1px solid`
  },
  [`& .${inputBaseClasses.input}`]: {
    maxWidth: '100%',
    '&::-webkit-outer-spin-button': {
      WebkitAppearance: 'none'
    },
    '&::-webkit-inner-spin-button': {
      WebkitAppearance: 'none'
    },
    '&.Mui-disabled': {
      WebkitTextFillColor: theme.palette.text.secondary,
      color: theme.palette.text.secondary
    }
  },
  [`&.${inputBaseClasses.disabled}`]: {
    cursor: 'not-allowed'
  }
}))

const StyledInputWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  overflowX: 'auto',
  left: 0,
  fontSize: 16,
  color: theme.palette.text.primary,
  fontWeight: 600,
  backgroundColor: theme.bgColor.bg4,
  paddingLeft: 20,
  borderRadius: 14,
  border: '1px solid #fff',
  zIndex: 1,
  cursor: 'text',
  display: 'flex',
  alignItems: 'center',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  [`&.placeholder`]: {
    fontSize: 14,
    color: theme.palette.text.secondary,
    fontWeight: 600,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }
}))

export default function Input({
  focused,
  placeholder,
  placeholderSize,
  onChange,
  value,
  disabled,
  type,
  outlined,
  startAdornment,
  onEnter,
  hideBorder,
  showFormatWrapper,
  multiline,
  rows,
  rightLabel,
  endAdornment,
  maxWidth,
  label,
  userPattern,
  height,
  error,
  smallPlaceholder,
  subStr,
  maxLength,
  inputPaddingRight,
  onUserBlur,
  errSet,
  ...rest
}: InputProps &
  Omit<
    InputHTMLAttributes<HTMLInputElement> & {
      showFormatWrapper?: () => string
    },
    'color' | 'outline' | 'size'
  >) {
  const [hideFormatWrapper, setHideFormatWrapper] = useState(false)
  const showFormatWrapperValue = useMemo(() => showFormatWrapper && showFormatWrapper(), [showFormatWrapper])
  const [showErrorMsg, setErrorMsg] = useState(false)
  const inputUserRef = useRef()

  const enforcer = useCallback(
    (nextUserInput: string) => {
      if (userPattern) {
        if (new RegExp(userPattern).test(escapeRegExp(nextUserInput))) {
          return nextUserInput
        }
        return null
      }
      return nextUserInput
    },
    [userPattern]
  )
  const handleChange = useCallback(
    event => {
      // replace commas with periods
      setErrorMsg(false)
      if (event.target.value && maxLength && event.target.value.length > maxLength) {
        setErrorMsg(true)
        return
      }
      const formatted = enforcer(event.target.value)
      if (formatted === null) {
        return
      }
      event.target.value = formatted
      onChange && onChange(event)
    },
    [enforcer, onChange, maxLength]
  )

  return (
    <div style={{ width: '100%', maxWidth: maxWidth || 'unset' }}>
      <Box display={'flex'} justifyContent="space-between" alignItems="center">
        {label ? <InputLabel>{label}</InputLabel> : <div />}
        {rightLabel && <InputLabel>{rightLabel}</InputLabel>}
      </Box>
      {showErrorMsg && (
        <Typography color={theme.palette.error.main}>*The number of characters exceeds the limit</Typography>
      )}
      <Box position={'relative'}>
        {showFormatWrapper && !hideFormatWrapper && (
          <StyledInputWrapper
            onClick={() => {
              setHideFormatWrapper(true)
              const el = (inputUserRef?.current as unknown) as Element
              el.querySelector('input')?.focus()
            }}
            className={!showFormatWrapperValue ? 'placeholder' : ''}
          >
            {!showFormatWrapperValue ? placeholder : showFormatWrapperValue}
          </StyledInputWrapper>
        )}
        <StyledInputBase
          ref={inputUserRef}
          sx={{
            minHeight: height || 40,
            '& input': {
              paddingRight: inputPaddingRight || '15px',
              fontWeight: 600
            },
            [`&.${inputBaseClasses.root}`]: {
              border: theme =>
                `1px solid ${
                  hideBorder
                    ? 'white'
                    : outlined
                    ? 'rgba(212,215,226, 1)'
                    : error
                    ? theme.palette.error.main
                    : '#D4D7E2'
                }`
            },
            [`&.${inputBaseClasses.input}`]: {
              '&.Mui-focused': {
                border: '1px solid #fff!important'
              }
            },
            [`& .${inputBaseClasses.input}`]: {
              '&::placeholder': {
                fontSize: placeholderSize ? placeholderSize : smallPlaceholder ? 12 : placeholderSize,
                color: theme => (error ? theme.palette.error.main : ''),
                fontWeight: 400
                // textOverflow: 'ellipsis',
                // whiteSpace: 'nowrap',
                // overflow: 'hidden'
              }
            }
          }}
          color={error ? 'error' : 'primary'}
          fullWidth={true}
          placeholder={placeholder}
          inputRef={input => input && focused && input.focus()}
          onChange={handleChange}
          onBlur={e => {
            setHideFormatWrapper(false)
            if (type === 'url' && errSet) {
              if (!isURL(e.target.value)) {
                errSet()
              }
            } else if (type === 'address' && errSet) {
              if (!isAddress(e.target.value)) {
                errSet()
              }
            } else if (type === 'email' && errSet) {
              if (!isEmail(e.target.value)) {
                errSet()
              }
            }
            onUserBlur && onUserBlur(e)
          }}
          value={value}
          multiline={multiline}
          rows={rows}
          onKeyUp={e => e.key === 'Enter' && onEnter && onEnter()}
          disabled={disabled}
          type={type}
          startAdornment={
            startAdornment && (
              <Box display={'flex'} alignItems="center" style={{ paddingRight: 20 }}>
                {startAdornment}
              </Box>
            )
          }
          endAdornment={
            endAdornment && (
              <span style={{ paddingRight: 15, alignSelf: multiline ? 'flex-end' : 'center' }}>{endAdornment}</span>
            )
          }
          {...rest}
        />
      </Box>
      {subStr && (
        <Typography fontSize={12} mt={12} sx={{ opacity: 0.5 }}>
          {subStr}
        </Typography>
      )}
    </div>
  )
}
