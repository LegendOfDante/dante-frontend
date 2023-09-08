import * as React from 'react'
import Button from '@mui/material/Button'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Stack from '@mui/material/Stack'
import expandMore from '@/assets/iconos/expandMore.svg'
import Image from 'next/image'
import { Link, Typography } from '@mui/material'

export default function SubMenu({ title, array, subIcon, icon, handleIdiom, locale }) {
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])
  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          sx={{ color: 'white', fontSize: '1rem', width: '100px', marginX: '1rem' }}
          onClick={handleToggle}
        >
          {icon &&
            <Stack mr={2} onClick={handleIdiom}>
              <Link >
                <Image src={icon} />
              </Link>
            </Stack>
          }
          <Typography sx={{ marginRight: '1rem' }}>{title}</Typography>
          <Image src={expandMore} />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom'
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    sx={{ backgroundColor: '#020202', color: 'white', borderTop: '2px solid #F7C55A' }}
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {array && array.map((array, i) => (
                      <MenuItem sx={{ textDecoration: 'none' }} key={i} onClick={handleClose}>
                        {array.iconSubMenu
                          ? <>
                            <Link href={array.link} locale={locale} >
                              <Image src={array.iconSubMenu} />
                            </Link>
                          </>
                          : <>
                            <Link color={'light.light'} mr={2} underline='none' href={array.link} >{array.title}</Link>
                            {subIcon && <Image src={subIcon} alt='icon submenu' />}
                          </>
                        }
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack >
  )
}
