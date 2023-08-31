import * as React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Image from 'next/image'

// STYLES
import styles from '@/styles/landing/login.module.css'

const ColorButton = styled(Button)(({ theme, fontColor, mxwidth, mnWidth, mr, ml, h, bgColor, mb, mt }) => ({
  color: fontColor,
  fontWeight: '600',
  marginRight: [mr || '0px'],
  marginLeft: [ml || '0px'],
  marginTop: [mt || '0px'],
  marginBottom: [mb || '0px'],
  backgroundColor: [bgColor || theme.palette.primary.main],
  height: [h || '2rem'],
  minWidth: [mnWidth || '190px'],
  maxWidth: [mxwidth || '200px'],
  borderRadius: '20px',
  '&:hover': {
    backgroundColor: theme.palette.primary.hover
  }
}))

function ButtonColor({ title, fontColor, mxwidth, mnWidth, ml, mr, h, img, bgColor, mb, mt }) {
  return (
    <ColorButton mr={mr} ml={ml} mb={mb} mt={mt} h={h} bgColor={bgColor} fontColor={fontColor} mxwidth={mxwidth} mnWidth={mnWidth} variant="contained">
      {img &&
        <Image className={styles.loginIcon} src={img} />
      }
      {title}
    </ColorButton>
  )
}

const OutlinedButton = styled(Button)(({ theme, mxwidth, mnWidth, mr, ml, mb, mt, h }) => ({
  color: theme.palette.primary.main,
  fontWeight: '600',
  marginRight: [mr || '0px'],
  marginTop: [mt || '0px'],
  marginBottom: [mb || '0px'],
  height: [h || '2rem'],
  marginLeft: [ml || '0px'],
  minWidth: [mnWidth || '190px'],
  maxWidth: [mxwidth || '200px'],
  borderRadius: '20px',
  '&:hover': {
  }
}))

function ButtonOutlined({ title, mxwidth, mnWidth, mr, ml, handleOpen, img, mb, mt, h }) {
  return (
    <OutlinedButton onClick={handleOpen} mb={mb} h={h} mt={mt} mr={mr} ml={ml} mxwidth={mxwidth} mnWidth={mnWidth} variant="outlined">
      {title}
    </OutlinedButton>
  )
}

export {
  ButtonColor,
  ButtonOutlined
}
