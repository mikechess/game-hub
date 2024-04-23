import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlantforms from '../hooks/usePlantforms'

const PlantformSelector = () => {
  const { data, error } = usePlantforms()

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((plantform) => (
          <MenuItem key={plantform.id}>{plantform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlantformSelector
