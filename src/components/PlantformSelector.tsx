import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlantforms from '../hooks/usePlantforms'
import { Platform } from '../hooks/useGames'

interface Props {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatform: Platform | null
}

const PlantformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlantforms()

  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((plantform) => (
          <MenuItem
            onClick={() => onSelectPlatform(plantform)}
            key={plantform.id}
          >
            {plantform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default PlantformSelector
