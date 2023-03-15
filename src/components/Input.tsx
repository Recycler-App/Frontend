import { FormControl, FormHelperText, FormHelperTextProps, FormLabel, Input as ChakraInput, InputProps } from '@chakra-ui/react'
import React from 'react'

interface Props {
    label?: string,
    required?: boolean,
    helperText?: string,
    rest?: InputProps,
    helperProps?: FormHelperTextProps,
}

function Input(props: Props) {
    const {label,required, helperText, helperProps, ...rest} = props

    return (
        <FormControl isRequired={required} mb={5}>
          <FormLabel fontWeight={500} fontSize="24px" color="accent">
            {label}
          </FormLabel>
          <ChakraInput
            border="1px solid"
            borderColor="primary"
            boxShadow="2px 2px 20px 4px rgba(15, 169, 88, 0.1)"
            borderRadius={0}
            h="55px"
            _focus={{
                boxShadow:"2px 2px 20px 4px rgba(15, 169, 88, 0.1)",
                borderColor:"primary"
            }}
            {...rest}
          />
          {helperText && <FormHelperText {...helperProps }>
          {helperText}
        </FormHelperText>}
        </FormControl>
    )
}

export default Input
